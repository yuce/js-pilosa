
import {Validator} from "./validator";
import {AttributeMap} from "./common";


export class Database {
    constructor(readonly name: string, options: DatabaseOptions={}) {
        this.columnLabel = options.columnLabel || "col_id";
        this.timeQuantum = options.timeQuantum || TimeQuantum.NONE;
    }

    frame(name: string, options: FrameOptions={}) {
        return _Frame.create(this, name, options.rowLabel || "id",
            options.timeQuantum || TimeQuantum.NONE);
    }

    rawQuery(query: string) {
        return new PqlBaseQuery(query, this);
    }

    batchQuery(...queries: Array<PqlQuery>) {
        return new PqlBatchQuery(queries, this);
    }

    union(bitmap1: PqlBitmapQuery, bitmap2: PqlBitmapQuery, ...bitmaps: Array<PqlBitmapQuery>): PqlBitmapQuery {
        return this.bitmapOperation("Union", [bitmap1, bitmap2, ...bitmaps]);
    }

    intersect(bitmap1: PqlBitmapQuery, bitmap2: PqlBitmapQuery, ...bitmaps: Array<PqlBitmapQuery>): PqlBitmapQuery {
        return this.bitmapOperation("Intersect", [bitmap1, bitmap2, ...bitmaps]);
    }

    difference(bitmap1: PqlBitmapQuery, bitmap2: PqlBitmapQuery, ...bitmaps: Array<PqlBitmapQuery>): PqlBitmapQuery {
        return this.bitmapOperation("Difference", [bitmap1, bitmap2, ...bitmaps]);
    }

    count(bitmap: PqlBitmapQuery): PqlQuery {
        return new PqlBaseQuery(`Count(${bitmap.serialize()})`, this);
    }

    setProfileAttrs(columnID: number, attrs: AttributeMap): PqlBitmapQuery {
        let attrsStr = createAttributesString(attrs);
        return new PqlBitmapQuery(`SetProfileAttrs(${this.columnLabel}=${columnID}, ${attrsStr})`, this);
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
    protected constructor(readonly database: Database, readonly name: string,
            readonly rowLabel: string, readonly timeQuantum: TimeQuantum) {
        this.columnLabel = database.columnLabel;
    }

    /**
     * Creates a Bitmap query.
     *
     * @param rowID bitmap ID
     * @return a PQL query
     */
    bitmap(rowID: number): PqlBitmapQuery {
        return new PqlBitmapQuery(`Bitmap(${this.rowLabel}=${rowID}, frame='${this.name}')`, this.database);
    }

    /**
     * Creates a SetBit query
     *
     * @param rowID    bitmap ID
     * @param columnID profile ID
     * @return a PQL query
     */
    setBit(rowID: number, columnID: number): PqlQuery {
        return new PqlBaseQuery(`SetBit(${this.rowLabel}=${rowID}, frame='${this.name}', ${this.columnLabel}=${columnID})`, this.database);
    }

    /**
     * Creates a ClearBit query
     *
     * @param rowID    bitmap ID
     * @param columnID profile ID
     * @return a PQL query
     */
    clearBit(rowID: number, columnID: number): PqlQuery {
        return new PqlBaseQuery(`ClearBit(${this.rowLabel}=${rowID}, frame='${this.name}', ${this.columnLabel}=${columnID})`, this.database);
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
        let s = `TopN(frame='${this.name}', n=${n})`;
        if (bitmap !== undefined) {
            if (values !== undefined && field !== undefined) {
                s = `TopN(${bitmap.serialize()}, frame='${this.name}', n=${n}, field='${field}', ${JSON.stringify(values)})`;
            }
            else {
                s = `TopN(${bitmap.serialize()}, frame='${this.name}', n=${n})`;
            }
        }
        return new PqlBitmapQuery(s, this.database);
    }

    setBitmapAttrs(rowID: number, attrs: AttributeMap): PqlBitmapQuery {
        let attrsStr = createAttributesString(attrs);
        return new PqlBitmapQuery(`SetBitmapAttrs(frame='${this.name}',
            ${this.rowLabel}=${rowID}, ${attrsStr})`, this.database);
    }
}

// simulates module private Frame creation
class _Frame extends Frame {
    static create(database: Database, name: string, rowLabel: string, timeQuantum: TimeQuantum) {
        Validator.validateFrameName(name);
        return new Frame(database, name, rowLabel, timeQuantum);
    }
}

export interface DatabaseOptions {
    readonly columnLabel?: string;
    readonly timeQuantum?: TimeQuantum;
}

export interface FrameOptions {
    readonly rowLabel?: string;
    readonly timeQuantum?: TimeQuantum;
}

export interface PqlQuery {
    readonly database: Database;
    serialize(): string;
}

export class PqlBaseQuery implements PqlQuery {
    constructor(private pql: string, readonly database: Database) {}
    serialize() {
        return this.pql;
    }
}

export class PqlBitmapQuery implements PqlQuery {
    constructor(private pql: string, readonly database: Database) {}
    serialize() {
        return this.pql;
    }
}

export class PqlBatchQuery implements PqlQuery {
    constructor(private queries: Array<PqlQuery>, readonly database: Database) {}

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