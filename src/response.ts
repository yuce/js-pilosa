
import {internal} from "../internal/internal";
import {PilosaError} from "./error";
import {AttributeMap} from "./common";
import * as Long from "long";

export class QueryResponse {
    readonly results: QueryResult[] = [];
    readonly profiles: ProfileItem[] = [];
    private _errorMessage: string = "";
    private _isSuccess: boolean = false;

    protected constructor() {}

    get result(): QueryResult | null {
        if (this.results.length > 0) {
            return this.results[0];
        }
        return null;
    }

    get profile(): ProfileItem | null {
        if (this.profiles.length > 0) {
            return this.profiles[0];
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

        const profiles = this.profiles;
        for (let profile of response.Profiles || []) {
            profiles.push(ProfileItem.fromInternal(profile));
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

export class ProfileItem {
    private constructor(readonly id: number, readonly attributes: AttributeMap) {}

    static fromInternal(obj: internal.Profile$Properties) {
        const attrs = (obj.Attrs)? Util.internalAttrsToMap(obj.Attrs) : {};
        return new ProfileItem((obj.ID as Long).toNumber(), attrs);
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
                        r[attr.Key] = (attr.UintValue as Long).toNumber();
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
