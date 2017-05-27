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

import {internal} from "../internal/internal";
import {PilosaError} from "./error";
import {AttributeMap} from "./common";
import * as Long from "long";

export class QueryResponse {
    readonly results: QueryResult[] = [];
    readonly columns: ColumnItem[] = [];
    private _errorMessage: string = "";
    private _isSuccess: boolean = false;

    protected constructor() {}

    get result(): QueryResult | null {
        if (this.results.length > 0) {
            return this.results[0];
        }
        return null;
    }

    get column(): ColumnItem | null {
        if (this.columns.length > 0) {
            return this.columns[0];
        }
        return null;
    }

    get errorMessage() {
        return this._errorMessage;
    }

    get isSuccess() {
        return this._isSuccess;
    }

    static fromProtobuf(data: Uint8Array): QueryResponse {
        const response = new QueryResponse();
        response.parseProtobuf(data);
        return response;
    }

    private parseProtobuf(data: Uint8Array): void {
        const response = internal.QueryResponse.decode(data);
        const errorMessage = response.Err;
        if (errorMessage) {
            this._errorMessage = errorMessage;
            this._isSuccess = false;
            return;
        }

        this._isSuccess = true;

        const results = this.results;
        for (let result of response.Results || []) {
            results.push(QueryResult.fromInternal(result));
        }

        const columns = this.columns;
        for (let column of response.ColumnAttrSets || []) {
            columns.push(ColumnItem.fromInternal(column));
        }
    }
}

export class QueryResult {
    private constructor(readonly bitmap: BitmapResult,
            readonly countItems: CountResultItem[], readonly count: number) {}

    static fromInternal(obj: internal.QueryResult$Properties): QueryResult {
        const bitmap = (obj.Bitmap)?
            BitmapResult.fromInternal(obj.Bitmap)
            : BitmapResult.fromInternal({Bits: undefined, Attrs: undefined});
        const countItems = new Array<CountResultItem>();
        for (let item of obj.Pairs || []) {
            countItems.push(CountResultItem.fromInternal(item));
        }
        return new QueryResult(bitmap, countItems, (obj.N as Long).toNumber());
    }
}

export class BitmapResult {
    private _attributes: any = null;
    private _bits: Array<number>;

    private constructor(attributes: any, bits: Array<number>) {
        this._attributes = attributes;
        this._bits = bits;
    }

    /* @internal */
    static fromInternal(b: internal.Bitmap$Properties): BitmapResult {
        if (b.Bits && b.Attrs) {
            let bits = b.Bits.map((bit: Long) => bit.toNumber());
            return new BitmapResult(Util.internalAttrsToMap(b.Attrs), bits);
        }
        return new BitmapResult({}, []);
    }

    get attributes() {
        return this._attributes;
    }

    get bits() {
        return this._bits;
    }
}

export class CountResultItem {
    private constructor(readonly id: number, readonly count: number) {}

    static fromInternal(obj: internal.Pair$Properties) {
        return new CountResultItem((obj.Key as Long).toNumber(), (obj.Count as Long).toNumber());
    }
}

export function __testing_triggerUnknownType() {
    const attr = new internal.Attr();
    attr.Key = "foo";
    return Util.internalAttrsToMap([attr]);
}

/** @internal */
export function __testing_QueryResponseWithError(errorMessage: string) {
    let iqr = new internal.QueryResponse({Err: errorMessage});
    let data = internal.QueryResponse.encode(iqr).finish();
    return QueryResponse.fromProtobuf(data);
}

export class ColumnItem {
    private constructor(readonly id: number, readonly attributes: AttributeMap) {}

    static fromInternal(obj: internal.ColumnAttrSet$Properties) {
        const attrs = (obj.Attrs)? Util.internalAttrsToMap(obj.Attrs) : {};
        return new ColumnItem((obj.ID as Long).toNumber(), attrs);
    }
}



namespace Util {
    const PROTOBUF_STRING_TYPE = 1;
    const PROTOBUF_UINT_TYPE = 2;
    const PROTOBUF_BOOL_TYPE = 3;
    const PROTOBUF_DOUBLE_TYPE = 4;

    export function internalAttrsToMap(attrs: internal.Attr$Properties[]): AttributeMap {
        const r: any = new Object();
        for (let attr of attrs) {
            if (attr.Key) {
                switch ((attr.Type as Long).toInt()) {
                    case PROTOBUF_STRING_TYPE:
                        r[attr.Key] = attr.StringValue;
                        break;
                    case PROTOBUF_UINT_TYPE:
                        r[attr.Key] = (attr.IntValue as Long).toNumber();
                        break;
                    case PROTOBUF_BOOL_TYPE:
                        r[attr.Key] = attr.BoolValue;
                        break;
                    case PROTOBUF_DOUBLE_TYPE:
                        r[attr.Key] = attr.FloatValue;
                        break;
                    default:
                        throw PilosaError.generic("Unknown attribute type: " + attr.Type);
                }
            }
        }
        return r;
    }
}
