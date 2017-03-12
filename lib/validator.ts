
import {PilosaError} from './error';


export namespace Validator {
    const DATABASE_NAME = /^[a-z0-9_-]+$/;
    const FRAME_NAME = /^[a-z0-9][.a-z0-9_-]*$/;
    const LABEL = /^[a-zA-Z][a-zA-Z0-9_]*$/;
    const MAX_DATABASE_NAME = 64;
    const MAX_FRAME_NAME = 64;
    const MAX_LABEL = 64;

    export function validateDatabaseName(databaseName: string): boolean {
        if (!databaseName || databaseName.length > MAX_DATABASE_NAME) {
            return false;
        }
        return DATABASE_NAME.test(databaseName);
    }

    export function ensureValidDatabaseName(databaseName: string): void {
        if (!validateDatabaseName(databaseName)) {
            throw PilosaError.validation(`Invalid database name: ${databaseName}`);
        }
    }

    export function validateFrameName(frameName: string): boolean {
        if (!frameName || frameName.length > MAX_FRAME_NAME) {
            return false;
        }
        return FRAME_NAME.test(frameName);
    }
    
    export function ensureValidFrameName(frameName: string): void {
        if (!validateFrameName(frameName)) {
            throw PilosaError.validation(`Invalid frame name: ${frameName}`);
        }
    }

    export function validateLabel(label: string): boolean {
        if (!label || label.length > MAX_LABEL) {
            return false;
        }
        return LABEL.test(label);
    }

    export function ensureValidLabel(label: string): void {
        if (!validateLabel(label)) {
            throw PilosaError.validation(`Invalid label: ${label}`);
        }
    }   

}