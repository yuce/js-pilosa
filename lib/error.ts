
interface ErrorBase extends Error {
    readonly name: string;
    readonly message: string;
    readonly stack: string;
};

interface ErrorBaseConstructor {
    new (message: string): ErrorBase;
    readonly prototype: ErrorBase;
}

export const PilosaError: ErrorBaseConstructor = <any>class ErrorBase {
    public constructor(message: string) {
        Object.defineProperty(this, 'name', {
            get: () => (this.constructor as any).name,
        });
        Object.defineProperty(this, 'message', {
            get: () => message,
        });
        Error.captureStackTrace(this, this.constructor);
    }
};
(PilosaError as any).prototype = Object.create(Error.prototype);
PilosaError.prototype.constructor = PilosaError;

export class PilosaURIError extends PilosaError {}