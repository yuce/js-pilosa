
import {Validator} from './validator';

export class DatabaseOptions {
    private _columnLabel = "profileID";

    private constructor() {}

    static withDefaults() {
        return new DatabaseOptions();
    }

    static withColumnLabel(label: string) {
        Validator.ensureValidLabel(label);
        let options = new DatabaseOptions();
        options._columnLabel = label;
        return options;
    }

    get columnLabel() {
        return this._columnLabel;
    }
}

export class FrameOptions {
    private _rowLabel = "id";

    private constructor() {}

    static withDefaults() {
        return new FrameOptions();
    }

    static withRowLabel(label: string) {
        Validator.ensureValidLabel(label);
        let options = new FrameOptions();
        options._rowLabel = label;
        return options;
    }

    get rowLabel() {
        return this._rowLabel;
    }
}