/*
Copyright 2017 Yuce Tekol

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions
are met:

1. Redistributions of source code must retain the above copyright
notice, this list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright
notice, this list of conditions and the following disclaimer in the
documentation and/or other materials provided with the distribution.

3. Neither the name of the copyright holder nor the names of its
contributors may be used to endorse or promote products derived
from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND
CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES,
INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR
CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH
DAMAGE.
*/

import {Validator} from "./validator";
import {AttributeMap} from "./common";
import { PilosaError } from "./error";


export class Index {
    constructor(readonly name: string, options: IndexOptions={}) {
        this.columnLabel = options.columnLabel || "columnID";
        this.timeQuantum = options.timeQuantum || TimeQuantum.NONE;
    }

    frame(name: string, options: FrameOptions={}) {
        return _Frame.create(this, name,
            options.rowLabel || "rowID",
            options.timeQuantum || TimeQuantum.NONE,
            options.inverseEnabled || false,
            options.cacheType || CacheType.DEFAULT,
            options.cacheSize || 0);
    }

    rawQuery(query: string) {
        return new PqlBaseQuery(query, this);
    }

    batchQuery(...queries: Array<PqlQuery>) {
        return new PqlBatchQuery(queries, this);
    }

    union(...bitmaps: Array<PqlBitmapQuery>): PqlBitmapQuery {
        return this.bitmapOperation("Union", [...bitmaps]);
    }

    intersect(...bitmaps: Array<PqlBitmapQuery>): PqlBitmapQuery {
        if (bitmaps.length < 1) {
            throw PilosaError.generic("Number of bitmap queries should be greater or equal to 1");
        }
        return this.bitmapOperation("Intersect", [...bitmaps]);
    }

    difference(...bitmaps: Array<PqlBitmapQuery>): PqlBitmapQuery {
        if (bitmaps.length < 1) {
            throw PilosaError.generic("Number of bitmap queries should be greater or equal to 1");
        }
        return this.bitmapOperation("Difference", [...bitmaps]);
    }

    count(bitmap: PqlBitmapQuery): PqlQuery {
        return new PqlBaseQuery(`Count(${bitmap.serialize()})`, this);
    }

    setColumnAttrs(columnID: number, attrs: AttributeMap): PqlBitmapQuery {
        let attrsStr = createAttributesString(attrs);
        return new PqlBitmapQuery(`SetColumnAttrs(${this.columnLabel}=${columnID}, ${attrsStr})`, this);
    }

    private bitmapOperation(name: string, bitmaps: Array<PqlBitmapQuery>): PqlBitmapQuery {
        let qry = bitmaps.map(bitmap => bitmap.serialize()).join(", ");
        return new PqlBitmapQuery(`${name}(${qry})`, this);
    }

    readonly columnLabel: string;
    readonly timeQuantum: TimeQuantum;
}

export class Frame {
    private columnLabel: string;
    protected constructor(readonly index: Index, readonly name: string,
            readonly rowLabel: string, readonly timeQuantum: TimeQuantum,
            readonly inverseEnabled: boolean,
            readonly cacheType: CacheType, readonly cacheSize: number) {
        this.columnLabel = index.columnLabel;
    }

    /**
     * Creates a Bitmap query.
     *
     * @param rowID row ID
     * @return a PQL query
     */
    bitmap(rowID: number): PqlBitmapQuery {
        return new PqlBitmapQuery(`Bitmap(${this.rowLabel}=${rowID}, frame='${this.name}')`, this.index);
    }

    /**
     * Creates a Bitmap query.
     * @param columnID
     * @return a PQL query
     */
    inverseBitmap(columnID: number): PqlQuery {
        return new PqlBitmapQuery(`Bitmap(${this.columnLabel}=${columnID}, frame='${this.name}')`, this.index);
    }

    /**
     * Creates a SetBit query
     *
     * @param rowID    bitmap ID
     * @param columnID column ID
     * @return a PQL query
     */
    setBit(rowID: number, columnID: number, timestamp?: Date): PqlQuery {
        const ts = timestamp? `, timestamp='${formatDateTime(timestamp)}'` : "";
        return new PqlBaseQuery(`SetBit(${this.rowLabel}=${rowID}, frame='${this.name}', ${this.columnLabel}=${columnID}${ts})`, this.index);
    }

    /**
     * Creates a ClearBit query
     *
     * @param rowID    bitmap ID
     * @param columnID column ID
     * @return a PQL query
     */
    clearBit(rowID: number, columnID: number): PqlQuery {
        return new PqlBaseQuery(`ClearBit(${this.rowLabel}=${rowID}, frame='${this.name}', ${this.columnLabel}=${columnID})`, this.index);
    }

    /**
     * Creates a TopN query.
     *
     * @param bitmap the bitmap query
     * @param n      number of items to return
     * @param field  field name
     * @param values filter values to be matched against the field
     * @return a PQL query
     */
    topN(n: number, bitmap?: PqlBitmapQuery, field?: string, ...values: Array<any>): PqlBitmapQuery {
        return this._topN(n, false, bitmap, field, ...values);
    }

    /**
     * Creates a TopN query.
     * 
     * This variant sets inverse=true.
     *
     * @param bitmap the bitmap query
     * @param n      number of items to return
     * @param field  field name
     * @param values filter values to be matched against the field
     * @return a PQL query
     */
    inverseTopN(n: number, bitmap?: PqlBitmapQuery, field?: string, ...values: Array<any>): PqlBitmapQuery {
        return this._topN(n, true, bitmap, field, ...values);
    }

    private _topN(n: number, inverse: boolean, bitmap?: PqlBitmapQuery, field?: string, ...values: Array<any>): PqlBitmapQuery {
        let s = `frame='${this.name}', n=${n}, inverse=${inverse}`;
        // let s = `TopN(frame='${this.name}', n=${n})`;
        if (bitmap !== undefined) {
            s = `${bitmap.serialize()}, ${s}`;
            if (values !== undefined && field !== undefined) {
                s = `${s}, field='${field}', ${JSON.stringify(values)}`;
            }
        }
        return new PqlBitmapQuery(`TopN(${s})`, this.index);
    }

    range(rowID: number, start: Date, end: Date): PqlBitmapQuery {
        const startStr = formatDateTime(start);
        const endStr = formatDateTime(end);
        return new PqlBitmapQuery(`Range(${this.rowLabel}=${rowID}, frame='${this.name}', start='${startStr}', end='${endStr}')`,
            this.index);
    }

    inverseRange(columnID: number, start: Date, end: Date): PqlBitmapQuery {
        const startStr = formatDateTime(start);
        const endStr = formatDateTime(end);
        return new PqlBitmapQuery(`Range(${this.columnLabel}=${columnID}, frame='${this.name}', start='${startStr}', end='${endStr}')`,
            this.index);
    }

    setRowAttrs(rowID: number, attrs: AttributeMap): PqlBitmapQuery {
        let attrsStr = createAttributesString(attrs);
        return new PqlBitmapQuery(`SetRowAttrs(frame='${this.name}',
            ${this.rowLabel}=${rowID}, ${attrsStr})`, this.index);
    }

    get optionsForRequest(): any {
        const data: AttributeMap = {rowLabel: this.rowLabel};
        if (this.timeQuantum != TimeQuantum.NONE) {
            data['timeQuantum'] = this.timeQuantum.toString();
        }
        if (this.inverseEnabled) {
            data['inverseEnabled'] = this.inverseEnabled;
        }
        if (this.cacheType != CacheType.DEFAULT) {
            data['cacheType'] = this.cacheType.toString();
        }
        if (this.cacheSize > 0) {
            data['cacheSize'] = this.cacheSize;
        }
        return {options: data};
    }
}

// simulates module private Frame creation
class _Frame extends Frame {
    static create(index: Index, name: string, rowLabel: string, timeQuantum: TimeQuantum,
            inverseEnabled: boolean, cacheType: CacheType, cacheSize: number) {
        Validator.validateFrameName(name);
        return new Frame(index, name, rowLabel, timeQuantum, inverseEnabled, cacheType, cacheSize);
    }
}

export interface IndexOptions {
    readonly columnLabel?: string;
    readonly timeQuantum?: TimeQuantum;
}

export interface FrameOptions {
    readonly rowLabel?: string;
    readonly timeQuantum?: TimeQuantum;
    readonly inverseEnabled?: boolean;
    readonly cacheType?: CacheType;
    readonly cacheSize?: number;
}

export interface PqlQuery {
    readonly index: Index;
    serialize(): string;
}

export class PqlBaseQuery implements PqlQuery {
    constructor(private pql: string, readonly index: Index) {}
    serialize() {
        return this.pql;
    }
}

export class PqlBitmapQuery implements PqlQuery {
    constructor(private pql: string, readonly index: Index) {}
    serialize() {
        return this.pql;
    }
}

export class PqlBatchQuery implements PqlQuery {
    constructor(private queries: Array<PqlQuery>, readonly index: Index) {}

    serialize() {
        return this.queries.map(q => q.serialize()).join("");
    }
}

export class TimeQuantum {
    private constructor(private value: string) {}

    equals(other: TimeQuantum): boolean {
        return this.value == other.value;
    }

    toString(): string {
        return this.value;
    }

    static readonly NONE = new TimeQuantum("");
    static readonly YEAR = new TimeQuantum("Y");
    static readonly MONTH = new TimeQuantum("M");
    static readonly DAY = new TimeQuantum("D");
    static readonly HOUR = new TimeQuantum("H");
    static readonly YEAR_MONTH = new TimeQuantum("YM");
    static readonly MONTH_DAY = new TimeQuantum("MD");
    static readonly DAY_HOUR = new TimeQuantum("DH");
    static readonly YEAR_MONTH_DAY = new TimeQuantum("YMD");
    static readonly MONTH_DAY_HOUR = new TimeQuantum("MDH");
    static readonly YEAR_MONTH_DAY_HOUR = new TimeQuantum("YMDH");
}

export class CacheType {
    private constructor(private value: string) {}

    equals(other: CacheType): boolean {
        return this.value == other.value;
    }

    toString(): string {
        return this.value;
    }

    static readonly DEFAULT = new CacheType("");
    static readonly LRU = new CacheType("lru");
    static readonly RANKED = new CacheType("ranked");
}


function createAttributesString(attrs: AttributeMap) {
    let attrsList = [];
    for (let k in attrs) {
        Validator.validLabel(k);
        let v = attrs[k];
        if (typeof v === "string") {
            v = `"${v.replace(/"/g, '\\"')}"`;
        }
        attrsList.push(`${k}=${v}`);
    }
    return attrsList.join(", ");
}

function formatDateTime(dt: Date): string {
    // TIME_FORMAT = "%Y-%m-%dT%H:%M"
    const pfx = (n: number) => {
        return (n < 10)? "0" + n : "" + n;
    }
    const dateStr = [dt.getFullYear(), pfx(dt.getMonth() + 1), pfx(dt.getDate())].join("-");
    const hourStr = [pfx(dt.getHours()), pfx(dt.getMinutes())].join(":");
    return `${dateStr}T${hourStr}`;
}