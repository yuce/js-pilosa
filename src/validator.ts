
import {PilosaError} from './error';


export namespace Validator {
    const INDEX_NAME = /^[a-z][a-z0-9_-]*$/;
    const FRAME_NAME = /^[a-z][a-z0-9_-]*$/;
    const LABEL = /^[a-zA-Z][a-zA-Z0-9_-]*$/;
    const MAX_INDEX_NAME = 64;
    const MAX_FRAME_NAME = 64;
    const MAX_LABEL = 64;

    export function validIndexName(indexName: string): boolean {
        if (!indexName || indexName.length > MAX_INDEX_NAME) {
            return false;
        }
        return INDEX_NAME.test(indexName);
    }

    export function validateIndexName(indexName: string): void {
        if (!validIndexName(indexName)) {
            throw PilosaError.validation(`Invalid index name: ${indexName}`);
        }
    }

    export function validFrameName(frameName: string): boolean {
        if (!frameName || frameName.length > MAX_FRAME_NAME) {
            return false;
        }
        return FRAME_NAME.test(frameName);
    }

    export function validateFrameName(frameName: string): void {
        if (!validFrameName(frameName)) {
            throw PilosaError.validation(`Invalid frame name: ${frameName}`);
        }
    }

    export function validLabel(label: string): boolean {
        if (!label || label.length > MAX_LABEL) {
            return false;
        }
        return LABEL.test(label);
    }

    export function validateLabel(label: string): void {
        if (!validLabel(label)) {
            throw PilosaError.validation(`Invalid label: ${label}`);
        }
    }

}