
type ErrorType = "GENERIC" | "URI" | "VALIDATION" | "DATABASE_EXISTS" | "FRAME_EXISTS";

export class PilosaError {
    private static error(e: ErrorType, msg: string): Error {
        const err = new Error(msg);
        err.name = e;
        return err;
    }

    static generic(msg?: string) {
        return PilosaError.error("GENERIC", msg);
    }

    static uri(msg?: string) {
        return PilosaError.error("URI", msg);
    }

    static validation(msg?: string) {
        return PilosaError.error("VALIDATION", msg);
    }

    static databaseExists(msg?: string) {
        return PilosaError.error("DATABASE_EXISTS", msg);
    }

    static frameExists(msg?: string) {
        return PilosaError.error("FRAME_EXISTS", msg);
    }
    static equals(e1: Error, e2: Error) {
        return e1.name == e2.name;
    }

    static GENERIC = PilosaError.generic();
    static URI = PilosaError.uri();
    static VALIDATION = PilosaError.validation();
    static DATABASE_EXISTS = PilosaError.databaseExists();
    static FRAME_EXISTS = PilosaError.frameExists();
}
