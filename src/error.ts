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

type ErrorType = "GENERIC" | "URI" | "VALIDATION" | "INDEX_EXISTS" | "FRAME_EXISTS";

export class PilosaError {
    private static error(e: ErrorType, msg?: string): Error {
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

    static indexExists(msg?: string) {
        return PilosaError.error("INDEX_EXISTS", msg);
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
    static INDEX_EXISTS = PilosaError.indexExists();
    static FRAME_EXISTS = PilosaError.frameExists();
}
