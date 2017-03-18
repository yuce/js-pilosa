
import {Validator} from './validator';

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