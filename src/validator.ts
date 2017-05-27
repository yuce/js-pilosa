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