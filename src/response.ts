
import {internal} from "./internal";
import {PilosaError} from "./error";

export class QueryResponse {
    private _results: Array<QueryResult> = null;
    private _errorMessage: string = null;
    private _isSuccess: boolean = false;

    protected constructor() {}

    get results(): Array<QueryResult> {
        return this._results;
    }

    get result(): QueryResult {
        if (this._results === null) {
            return null;
        }
        return this._results[0];
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
        if (errorMessage != "") {
            this._errorMessage = errorMessage;
            this._isSuccess = false;
            return;
        }
        
        this._isSuccess = true;
        
        const results = new Array<QueryResult>();
        for (let result of response.Results) {
            results.push(QueryResult.fromInternal(result));
        }
        this._results = results;

        // TODO: profiles
    }
}

export class QueryResult {
    private _bitmapResult: BitmapResult = null;
    private _countItems: Array<CountResultItem> = null;
    private _count: number = 0;
    
    private constructor() {}

    static fromInternal(obj: internal.QueryResult): QueryResult {
        const result = new QueryResult();
        result._bitmapResult = BitmapResult.fromInternal(obj.Bitmap);
        const countItems = new Array<CountResultItem>();
        for (let item of obj.Pairs) {
            countItems.push(CountResultItem.fromInternal(item));
        }
        result._countItems = countItems;
        result._count = (obj.N as Long).toNumber();
        return result;
    }

    get bitmap() {
        return this._bitmapResult;
    }

    get countItems() {
        return this._countItems;
    }

    get count() {
        return this._count;
    }
}

export class BitmapResult {
    private _attributes: any = null;
    private _bits: Array<number> = null;

    private constructor(attributes: any, bits: Array<number>) {
        this._attributes = attributes;
        this._bits = bits;
    }

    static fromInternal(b: internal.Bitmap): BitmapResult {
        if (b !== null) {
            let bits = b.Bits.map((bit: Long) => bit.toNumber());
            return new BitmapResult(Util.internalAttrsToObject(b.Attrs), bits);
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
    private constructor(private _key: number, private _count: number) {}

    static fromInternal(obj: internal.Pair) {
        return new CountResultItem((obj.Key as Long).toNumber(), (obj.Count as Long).toNumber());
    }
}

export function __testing_triggerUnknownType() {
    return Util.internalAttrsToObject([new internal.Attr()]);
}

export function __testing_QueryResponseWithError(errorMessage: string) {
    let iqr = new internal.QueryResponse({Err: errorMessage});
    let data = internal.QueryResponse.encode(iqr).finish();
    return QueryResponse.fromProtobuf(data);
}

namespace Util {
    const PROTOBUF_STRING_TYPE = 1;
    const PROTOBUF_UINT_TYPE = 2;
    const PROTOBUF_BOOL_TYPE = 3;
    const PROTOBUF_DOUBLE_TYPE = 4;
    
    export function internalAttrsToObject(attrs: Array<internal.Attr>): any {
        const r: any = new Object();
        for (let attr of attrs) {
            switch ((attr.Type as Long).toInt()) {
                case PROTOBUF_STRING_TYPE:
                    r[attr.Key] = attr.StringValue;
                    break;
                case PROTOBUF_UINT_TYPE:
                    r[attr.Key] = (attr.UintValue as Long).toNumber();
                    break;
                case PROTOBUF_BOOL_TYPE:
                    r[attr.Key] = attr.BoolValue;
                    break;
                case PROTOBUF_DOUBLE_TYPE:
                    r[attr.Key] = attr.FloatValue;
                    break;
                default:
                    throw PilosaError.generic("Unknown attribute field type: " + attr.Type);
            }
        }
        return r;   
    }    
}
