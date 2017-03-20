
import {Validator} from "./validator";

export class Database {
    protected constructor(readonly name: string, readonly options: DatabaseOptions) {}

    static named(name: string, options=DatabaseOptions.withDefaults()) {
        Validator.ensureValidDatabaseName(name);
        return new Database(name, options);
    }

    frame(name: string, options=FrameOptions.withDefaults()) {
        return _Frame.create(this, name, options);
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
        return new PqlQuery(`Count(${bitmap.toString()})`, this);
    }

    private bitmapOperation(name: string, bitmaps: Array<PqlBitmapQuery>): PqlBitmapQuery {
        let qry = bitmaps.map(bitmap => bitmap.toString()).join(", ");
        return new PqlBitmapQuery(`${name}(${qry})`, this);
    }
}

export class Frame {
    private rowLabel: string;
    private columnLabel: string;
    protected constructor(readonly database: Database, readonly name: string, readonly options: FrameOptions) {
        this.rowLabel = options.rowLabel;
        this.columnLabel = database.options.columnLabel;
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
        return new PqlQuery(`SetBit(${this.rowLabel}=${rowID}, frame='${this.name}', ${this.columnLabel}=${columnID})`, this.database);
    }

    /**
     * Creates a ClearBit query
     *
     * @param rowID    bitmap ID
     * @param columnID profile ID
     * @return a PQL query
     */
    clearBit(rowID: number, columnID: number): PqlQuery {
        return new PqlQuery(`ClearBit(${this.rowLabel}=${rowID}, frame='${this.name}', ${this.columnLabel}=${columnID})`, this.database);
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
                s = `TopN(${bitmap.toString()}, frame='${this.name}', n=${n}, field='${field}', ${JSON.stringify(values)})`;
            }
            else {
                s = `TopN(${bitmap.toString()}, frame='${this.name}', n=${n})`;
            }
        }
        return new PqlBitmapQuery(s, this.database);
    }
}

// simulates module private Frame creation
class _Frame extends Frame {
    static create(database: Database, name: string, options: FrameOptions) {
        Validator.ensureValidFrameName(name);
        return new Frame(database, name, options);
    }
}

export class DatabaseOptions {
    protected constructor(readonly columnLabel: string) {}

    static withDefaults() {
        return new DatabaseOptions("profileID");
    }

    static withColumnLabel(label: string) {
        Validator.ensureValidLabel(label);
        return new DatabaseOptions(label);
    }
}

export class FrameOptions {
    private constructor(readonly rowLabel: string) {}

    static withDefaults() {
        return new FrameOptions("id");
    }

    static withRowLabel(label: string) {
        Validator.ensureValidLabel(label);
        return new FrameOptions(label);
    }
}

export interface IPqlQuery {
    readonly database: Database;
    toString(): string;
}

export class PqlQuery implements IPqlQuery {
    constructor(private pql: string, readonly database: Database) {}
    toString(): string {
        return this.pql;
    }
}

export class PqlBitmapQuery implements IPqlQuery {
    constructor(private pql: string, readonly database: Database) {}
    toString(): string {
        return this.pql;
    }
}