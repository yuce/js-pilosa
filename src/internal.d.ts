import * as $protobuf from "protobufjs";

/**
 * Namespace internal.
 * @exports internal
 * @namespace
 */
export namespace internal {

    /**
     * Constructs a new DB.
     * @exports internal.DB
     * @constructor
     * @param {Object} [properties] Properties to set
     */
    class DB {

        /**
         * Constructs a new DB.
         * @exports internal.DB
         * @constructor
         * @param {Object} [properties] Properties to set
         */
        constructor(properties?: Object);

        /**
         * DB TimeQuantum.
         * @type {string|undefined}
         */
        TimeQuantum?: string;

        /**
         * DB ColumnLabel.
         * @type {string|undefined}
         */
        ColumnLabel?: string;

        /**
         * Creates a new DB instance using the specified properties.
         * @param {Object} [properties] Properties to set
         * @returns {internal.DB} DB instance
         */
        static create(properties?: Object): internal.DB;

        /**
         * Encodes the specified DB message.
         * @param {internal.DB|Object} message DB message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        static encode(message: (internal.DB|Object), writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DB message, length delimited.
         * @param {internal.DB|Object} message DB message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        static encodeDelimited(message: (internal.DB|Object), writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB message from the specified reader or buffer.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {internal.DB} DB
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): internal.DB;

        /**
         * Decodes a DB message from the specified reader or buffer, length delimited.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {internal.DB} DB
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): internal.DB;

        /**
         * Verifies a DB message.
         * @param {internal.DB|Object} message DB message or plain object to verify
         * @returns {?string} `null` if valid, otherwise the reason why it is not
         */
        static verify(message: (internal.DB|Object)): string;

        /**
         * Creates a DB message from a plain object. Also converts values to their respective internal types.
         * @param {Object.<string,*>} object Plain object
         * @returns {internal.DB} DB
         */
        static fromObject(object: { [k: string]: any }): internal.DB;

        /**
         * Creates a DB message from a plain object. Also converts values to their respective internal types.
         * This is an alias of {@link internal.DB.fromObject}.
         * @function
         * @param {Object.<string,*>} object Plain object
         * @returns {internal.DB} DB
         */
        static from(object: { [k: string]: any }): internal.DB;

        /**
         * Creates a plain object from a DB message. Also converts values to other types if specified.
         * @param {internal.DB} message DB
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        static toObject(message: internal.DB, options?: $protobuf.ConversionOptions): { [k: string]: any };

        /**
         * Creates a plain object from this DB message. Also converts values to other types if specified.
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

        /**
         * Converts this DB to JSON.
         * @returns {Object.<string,*>} JSON object
         */
        toJSON(): { [k: string]: any };
    }

    /**
     * Constructs a new Frame.
     * @exports internal.Frame
     * @constructor
     * @param {Object} [properties] Properties to set
     */
    class Frame {

        /**
         * Constructs a new Frame.
         * @exports internal.Frame
         * @constructor
         * @param {Object} [properties] Properties to set
         */
        constructor(properties?: Object);

        /**
         * Frame TimeQuantum.
         * @type {string|undefined}
         */
        TimeQuantum?: string;

        /**
         * Frame RowLabel.
         * @type {string|undefined}
         */
        RowLabel?: string;

        /**
         * Creates a new Frame instance using the specified properties.
         * @param {Object} [properties] Properties to set
         * @returns {internal.Frame} Frame instance
         */
        static create(properties?: Object): internal.Frame;

        /**
         * Encodes the specified Frame message.
         * @param {internal.Frame|Object} message Frame message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        static encode(message: (internal.Frame|Object), writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Frame message, length delimited.
         * @param {internal.Frame|Object} message Frame message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        static encodeDelimited(message: (internal.Frame|Object), writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Frame message from the specified reader or buffer.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {internal.Frame} Frame
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): internal.Frame;

        /**
         * Decodes a Frame message from the specified reader or buffer, length delimited.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {internal.Frame} Frame
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): internal.Frame;

        /**
         * Verifies a Frame message.
         * @param {internal.Frame|Object} message Frame message or plain object to verify
         * @returns {?string} `null` if valid, otherwise the reason why it is not
         */
        static verify(message: (internal.Frame|Object)): string;

        /**
         * Creates a Frame message from a plain object. Also converts values to their respective internal types.
         * @param {Object.<string,*>} object Plain object
         * @returns {internal.Frame} Frame
         */
        static fromObject(object: { [k: string]: any }): internal.Frame;

        /**
         * Creates a Frame message from a plain object. Also converts values to their respective internal types.
         * This is an alias of {@link internal.Frame.fromObject}.
         * @function
         * @param {Object.<string,*>} object Plain object
         * @returns {internal.Frame} Frame
         */
        static from(object: { [k: string]: any }): internal.Frame;

        /**
         * Creates a plain object from a Frame message. Also converts values to other types if specified.
         * @param {internal.Frame} message Frame
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        static toObject(message: internal.Frame, options?: $protobuf.ConversionOptions): { [k: string]: any };

        /**
         * Creates a plain object from this Frame message. Also converts values to other types if specified.
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

        /**
         * Converts this Frame to JSON.
         * @returns {Object.<string,*>} JSON object
         */
        toJSON(): { [k: string]: any };
    }

    /**
     * Constructs a new Bitmap.
     * @exports internal.Bitmap
     * @constructor
     * @param {Object} [properties] Properties to set
     */
    class Bitmap {

        /**
         * Constructs a new Bitmap.
         * @exports internal.Bitmap
         * @constructor
         * @param {Object} [properties] Properties to set
         */
        constructor(properties?: Object);

        /**
         * Bitmap Bits.
         * @type {Array.<number|$protobuf.Long>|undefined}
         */
        Bits?: (number|$protobuf.Long)[];

        /**
         * Bitmap Attrs.
         * @type {Array.<internal.Attr>|undefined}
         */
        Attrs?: internal.Attr[];

        /**
         * Creates a new Bitmap instance using the specified properties.
         * @param {Object} [properties] Properties to set
         * @returns {internal.Bitmap} Bitmap instance
         */
        static create(properties?: Object): internal.Bitmap;

        /**
         * Encodes the specified Bitmap message.
         * @param {internal.Bitmap|Object} message Bitmap message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        static encode(message: (internal.Bitmap|Object), writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Bitmap message, length delimited.
         * @param {internal.Bitmap|Object} message Bitmap message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        static encodeDelimited(message: (internal.Bitmap|Object), writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Bitmap message from the specified reader or buffer.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {internal.Bitmap} Bitmap
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): internal.Bitmap;

        /**
         * Decodes a Bitmap message from the specified reader or buffer, length delimited.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {internal.Bitmap} Bitmap
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): internal.Bitmap;

        /**
         * Verifies a Bitmap message.
         * @param {internal.Bitmap|Object} message Bitmap message or plain object to verify
         * @returns {?string} `null` if valid, otherwise the reason why it is not
         */
        static verify(message: (internal.Bitmap|Object)): string;

        /**
         * Creates a Bitmap message from a plain object. Also converts values to their respective internal types.
         * @param {Object.<string,*>} object Plain object
         * @returns {internal.Bitmap} Bitmap
         */
        static fromObject(object: { [k: string]: any }): internal.Bitmap;

        /**
         * Creates a Bitmap message from a plain object. Also converts values to their respective internal types.
         * This is an alias of {@link internal.Bitmap.fromObject}.
         * @function
         * @param {Object.<string,*>} object Plain object
         * @returns {internal.Bitmap} Bitmap
         */
        static from(object: { [k: string]: any }): internal.Bitmap;

        /**
         * Creates a plain object from a Bitmap message. Also converts values to other types if specified.
         * @param {internal.Bitmap} message Bitmap
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        static toObject(message: internal.Bitmap, options?: $protobuf.ConversionOptions): { [k: string]: any };

        /**
         * Creates a plain object from this Bitmap message. Also converts values to other types if specified.
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

        /**
         * Converts this Bitmap to JSON.
         * @returns {Object.<string,*>} JSON object
         */
        toJSON(): { [k: string]: any };
    }

    /**
     * Constructs a new Pair.
     * @exports internal.Pair
     * @constructor
     * @param {Object} [properties] Properties to set
     */
    class Pair {

        /**
         * Constructs a new Pair.
         * @exports internal.Pair
         * @constructor
         * @param {Object} [properties] Properties to set
         */
        constructor(properties?: Object);

        /**
         * Pair Key.
         * @type {number|$protobuf.Long|undefined}
         */
        Key?: (number|$protobuf.Long);

        /**
         * Pair Count.
         * @type {number|$protobuf.Long|undefined}
         */
        Count?: (number|$protobuf.Long);

        /**
         * Creates a new Pair instance using the specified properties.
         * @param {Object} [properties] Properties to set
         * @returns {internal.Pair} Pair instance
         */
        static create(properties?: Object): internal.Pair;

        /**
         * Encodes the specified Pair message.
         * @param {internal.Pair|Object} message Pair message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        static encode(message: (internal.Pair|Object), writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Pair message, length delimited.
         * @param {internal.Pair|Object} message Pair message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        static encodeDelimited(message: (internal.Pair|Object), writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Pair message from the specified reader or buffer.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {internal.Pair} Pair
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): internal.Pair;

        /**
         * Decodes a Pair message from the specified reader or buffer, length delimited.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {internal.Pair} Pair
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): internal.Pair;

        /**
         * Verifies a Pair message.
         * @param {internal.Pair|Object} message Pair message or plain object to verify
         * @returns {?string} `null` if valid, otherwise the reason why it is not
         */
        static verify(message: (internal.Pair|Object)): string;

        /**
         * Creates a Pair message from a plain object. Also converts values to their respective internal types.
         * @param {Object.<string,*>} object Plain object
         * @returns {internal.Pair} Pair
         */
        static fromObject(object: { [k: string]: any }): internal.Pair;

        /**
         * Creates a Pair message from a plain object. Also converts values to their respective internal types.
         * This is an alias of {@link internal.Pair.fromObject}.
         * @function
         * @param {Object.<string,*>} object Plain object
         * @returns {internal.Pair} Pair
         */
        static from(object: { [k: string]: any }): internal.Pair;

        /**
         * Creates a plain object from a Pair message. Also converts values to other types if specified.
         * @param {internal.Pair} message Pair
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        static toObject(message: internal.Pair, options?: $protobuf.ConversionOptions): { [k: string]: any };

        /**
         * Creates a plain object from this Pair message. Also converts values to other types if specified.
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

        /**
         * Converts this Pair to JSON.
         * @returns {Object.<string,*>} JSON object
         */
        toJSON(): { [k: string]: any };
    }

    /**
     * Constructs a new Bit.
     * @exports internal.Bit
     * @constructor
     * @param {Object} [properties] Properties to set
     */
    class Bit {

        /**
         * Constructs a new Bit.
         * @exports internal.Bit
         * @constructor
         * @param {Object} [properties] Properties to set
         */
        constructor(properties?: Object);

        /**
         * Bit BitmapID.
         * @type {number|$protobuf.Long|undefined}
         */
        BitmapID?: (number|$protobuf.Long);

        /**
         * Bit ProfileID.
         * @type {number|$protobuf.Long|undefined}
         */
        ProfileID?: (number|$protobuf.Long);

        /**
         * Bit Timestamp.
         * @type {number|$protobuf.Long|undefined}
         */
        Timestamp?: (number|$protobuf.Long);

        /**
         * Creates a new Bit instance using the specified properties.
         * @param {Object} [properties] Properties to set
         * @returns {internal.Bit} Bit instance
         */
        static create(properties?: Object): internal.Bit;

        /**
         * Encodes the specified Bit message.
         * @param {internal.Bit|Object} message Bit message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        static encode(message: (internal.Bit|Object), writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Bit message, length delimited.
         * @param {internal.Bit|Object} message Bit message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        static encodeDelimited(message: (internal.Bit|Object), writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Bit message from the specified reader or buffer.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {internal.Bit} Bit
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): internal.Bit;

        /**
         * Decodes a Bit message from the specified reader or buffer, length delimited.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {internal.Bit} Bit
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): internal.Bit;

        /**
         * Verifies a Bit message.
         * @param {internal.Bit|Object} message Bit message or plain object to verify
         * @returns {?string} `null` if valid, otherwise the reason why it is not
         */
        static verify(message: (internal.Bit|Object)): string;

        /**
         * Creates a Bit message from a plain object. Also converts values to their respective internal types.
         * @param {Object.<string,*>} object Plain object
         * @returns {internal.Bit} Bit
         */
        static fromObject(object: { [k: string]: any }): internal.Bit;

        /**
         * Creates a Bit message from a plain object. Also converts values to their respective internal types.
         * This is an alias of {@link internal.Bit.fromObject}.
         * @function
         * @param {Object.<string,*>} object Plain object
         * @returns {internal.Bit} Bit
         */
        static from(object: { [k: string]: any }): internal.Bit;

        /**
         * Creates a plain object from a Bit message. Also converts values to other types if specified.
         * @param {internal.Bit} message Bit
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        static toObject(message: internal.Bit, options?: $protobuf.ConversionOptions): { [k: string]: any };

        /**
         * Creates a plain object from this Bit message. Also converts values to other types if specified.
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

        /**
         * Converts this Bit to JSON.
         * @returns {Object.<string,*>} JSON object
         */
        toJSON(): { [k: string]: any };
    }

    /**
     * Constructs a new Profile.
     * @exports internal.Profile
     * @constructor
     * @param {Object} [properties] Properties to set
     */
    class Profile {

        /**
         * Constructs a new Profile.
         * @exports internal.Profile
         * @constructor
         * @param {Object} [properties] Properties to set
         */
        constructor(properties?: Object);

        /**
         * Profile ID.
         * @type {number|$protobuf.Long|undefined}
         */
        ID?: (number|$protobuf.Long);

        /**
         * Profile Attrs.
         * @type {Array.<internal.Attr>|undefined}
         */
        Attrs?: internal.Attr[];

        /**
         * Creates a new Profile instance using the specified properties.
         * @param {Object} [properties] Properties to set
         * @returns {internal.Profile} Profile instance
         */
        static create(properties?: Object): internal.Profile;

        /**
         * Encodes the specified Profile message.
         * @param {internal.Profile|Object} message Profile message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        static encode(message: (internal.Profile|Object), writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Profile message, length delimited.
         * @param {internal.Profile|Object} message Profile message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        static encodeDelimited(message: (internal.Profile|Object), writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Profile message from the specified reader or buffer.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {internal.Profile} Profile
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): internal.Profile;

        /**
         * Decodes a Profile message from the specified reader or buffer, length delimited.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {internal.Profile} Profile
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): internal.Profile;

        /**
         * Verifies a Profile message.
         * @param {internal.Profile|Object} message Profile message or plain object to verify
         * @returns {?string} `null` if valid, otherwise the reason why it is not
         */
        static verify(message: (internal.Profile|Object)): string;

        /**
         * Creates a Profile message from a plain object. Also converts values to their respective internal types.
         * @param {Object.<string,*>} object Plain object
         * @returns {internal.Profile} Profile
         */
        static fromObject(object: { [k: string]: any }): internal.Profile;

        /**
         * Creates a Profile message from a plain object. Also converts values to their respective internal types.
         * This is an alias of {@link internal.Profile.fromObject}.
         * @function
         * @param {Object.<string,*>} object Plain object
         * @returns {internal.Profile} Profile
         */
        static from(object: { [k: string]: any }): internal.Profile;

        /**
         * Creates a plain object from a Profile message. Also converts values to other types if specified.
         * @param {internal.Profile} message Profile
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        static toObject(message: internal.Profile, options?: $protobuf.ConversionOptions): { [k: string]: any };

        /**
         * Creates a plain object from this Profile message. Also converts values to other types if specified.
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

        /**
         * Converts this Profile to JSON.
         * @returns {Object.<string,*>} JSON object
         */
        toJSON(): { [k: string]: any };
    }

    /**
     * Constructs a new Attr.
     * @exports internal.Attr
     * @constructor
     * @param {Object} [properties] Properties to set
     */
    class Attr {

        /**
         * Constructs a new Attr.
         * @exports internal.Attr
         * @constructor
         * @param {Object} [properties] Properties to set
         */
        constructor(properties?: Object);

        /**
         * Attr Key.
         * @type {string|undefined}
         */
        Key?: string;

        /**
         * Attr Type.
         * @type {number|$protobuf.Long|undefined}
         */
        Type?: (number|$protobuf.Long);

        /**
         * Attr StringValue.
         * @type {string|undefined}
         */
        StringValue?: string;

        /**
         * Attr UintValue.
         * @type {number|$protobuf.Long|undefined}
         */
        UintValue?: (number|$protobuf.Long);

        /**
         * Attr BoolValue.
         * @type {boolean|undefined}
         */
        BoolValue?: boolean;

        /**
         * Attr FloatValue.
         * @type {number|undefined}
         */
        FloatValue?: number;

        /**
         * Creates a new Attr instance using the specified properties.
         * @param {Object} [properties] Properties to set
         * @returns {internal.Attr} Attr instance
         */
        static create(properties?: Object): internal.Attr;

        /**
         * Encodes the specified Attr message.
         * @param {internal.Attr|Object} message Attr message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        static encode(message: (internal.Attr|Object), writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Attr message, length delimited.
         * @param {internal.Attr|Object} message Attr message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        static encodeDelimited(message: (internal.Attr|Object), writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Attr message from the specified reader or buffer.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {internal.Attr} Attr
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): internal.Attr;

        /**
         * Decodes an Attr message from the specified reader or buffer, length delimited.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {internal.Attr} Attr
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): internal.Attr;

        /**
         * Verifies an Attr message.
         * @param {internal.Attr|Object} message Attr message or plain object to verify
         * @returns {?string} `null` if valid, otherwise the reason why it is not
         */
        static verify(message: (internal.Attr|Object)): string;

        /**
         * Creates an Attr message from a plain object. Also converts values to their respective internal types.
         * @param {Object.<string,*>} object Plain object
         * @returns {internal.Attr} Attr
         */
        static fromObject(object: { [k: string]: any }): internal.Attr;

        /**
         * Creates an Attr message from a plain object. Also converts values to their respective internal types.
         * This is an alias of {@link internal.Attr.fromObject}.
         * @function
         * @param {Object.<string,*>} object Plain object
         * @returns {internal.Attr} Attr
         */
        static from(object: { [k: string]: any }): internal.Attr;

        /**
         * Creates a plain object from an Attr message. Also converts values to other types if specified.
         * @param {internal.Attr} message Attr
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        static toObject(message: internal.Attr, options?: $protobuf.ConversionOptions): { [k: string]: any };

        /**
         * Creates a plain object from this Attr message. Also converts values to other types if specified.
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

        /**
         * Converts this Attr to JSON.
         * @returns {Object.<string,*>} JSON object
         */
        toJSON(): { [k: string]: any };
    }

    /**
     * Constructs a new AttrMap.
     * @exports internal.AttrMap
     * @constructor
     * @param {Object} [properties] Properties to set
     */
    class AttrMap {

        /**
         * Constructs a new AttrMap.
         * @exports internal.AttrMap
         * @constructor
         * @param {Object} [properties] Properties to set
         */
        constructor(properties?: Object);

        /**
         * AttrMap Attrs.
         * @type {Array.<internal.Attr>|undefined}
         */
        Attrs?: internal.Attr[];

        /**
         * Creates a new AttrMap instance using the specified properties.
         * @param {Object} [properties] Properties to set
         * @returns {internal.AttrMap} AttrMap instance
         */
        static create(properties?: Object): internal.AttrMap;

        /**
         * Encodes the specified AttrMap message.
         * @param {internal.AttrMap|Object} message AttrMap message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        static encode(message: (internal.AttrMap|Object), writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AttrMap message, length delimited.
         * @param {internal.AttrMap|Object} message AttrMap message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        static encodeDelimited(message: (internal.AttrMap|Object), writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AttrMap message from the specified reader or buffer.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {internal.AttrMap} AttrMap
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): internal.AttrMap;

        /**
         * Decodes an AttrMap message from the specified reader or buffer, length delimited.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {internal.AttrMap} AttrMap
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): internal.AttrMap;

        /**
         * Verifies an AttrMap message.
         * @param {internal.AttrMap|Object} message AttrMap message or plain object to verify
         * @returns {?string} `null` if valid, otherwise the reason why it is not
         */
        static verify(message: (internal.AttrMap|Object)): string;

        /**
         * Creates an AttrMap message from a plain object. Also converts values to their respective internal types.
         * @param {Object.<string,*>} object Plain object
         * @returns {internal.AttrMap} AttrMap
         */
        static fromObject(object: { [k: string]: any }): internal.AttrMap;

        /**
         * Creates an AttrMap message from a plain object. Also converts values to their respective internal types.
         * This is an alias of {@link internal.AttrMap.fromObject}.
         * @function
         * @param {Object.<string,*>} object Plain object
         * @returns {internal.AttrMap} AttrMap
         */
        static from(object: { [k: string]: any }): internal.AttrMap;

        /**
         * Creates a plain object from an AttrMap message. Also converts values to other types if specified.
         * @param {internal.AttrMap} message AttrMap
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        static toObject(message: internal.AttrMap, options?: $protobuf.ConversionOptions): { [k: string]: any };

        /**
         * Creates a plain object from this AttrMap message. Also converts values to other types if specified.
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

        /**
         * Converts this AttrMap to JSON.
         * @returns {Object.<string,*>} JSON object
         */
        toJSON(): { [k: string]: any };
    }

    /**
     * Constructs a new QueryRequest.
     * @exports internal.QueryRequest
     * @constructor
     * @param {Object} [properties] Properties to set
     */
    class QueryRequest {

        /**
         * Constructs a new QueryRequest.
         * @exports internal.QueryRequest
         * @constructor
         * @param {Object} [properties] Properties to set
         */
        constructor(properties?: Object);

        /**
         * QueryRequest DB.
         * @type {string|undefined}
         */
        DB?: string;

        /**
         * QueryRequest Query.
         * @type {string|undefined}
         */
        Query?: string;

        /**
         * QueryRequest Slices.
         * @type {Array.<number|$protobuf.Long>|undefined}
         */
        Slices?: (number|$protobuf.Long)[];

        /**
         * QueryRequest Profiles.
         * @type {boolean|undefined}
         */
        Profiles?: boolean;

        /**
         * QueryRequest Quantum.
         * @type {string|undefined}
         */
        Quantum?: string;

        /**
         * QueryRequest Remote.
         * @type {boolean|undefined}
         */
        Remote?: boolean;

        /**
         * Creates a new QueryRequest instance using the specified properties.
         * @param {Object} [properties] Properties to set
         * @returns {internal.QueryRequest} QueryRequest instance
         */
        static create(properties?: Object): internal.QueryRequest;

        /**
         * Encodes the specified QueryRequest message.
         * @param {internal.QueryRequest|Object} message QueryRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        static encode(message: (internal.QueryRequest|Object), writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified QueryRequest message, length delimited.
         * @param {internal.QueryRequest|Object} message QueryRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        static encodeDelimited(message: (internal.QueryRequest|Object), writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a QueryRequest message from the specified reader or buffer.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {internal.QueryRequest} QueryRequest
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): internal.QueryRequest;

        /**
         * Decodes a QueryRequest message from the specified reader or buffer, length delimited.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {internal.QueryRequest} QueryRequest
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): internal.QueryRequest;

        /**
         * Verifies a QueryRequest message.
         * @param {internal.QueryRequest|Object} message QueryRequest message or plain object to verify
         * @returns {?string} `null` if valid, otherwise the reason why it is not
         */
        static verify(message: (internal.QueryRequest|Object)): string;

        /**
         * Creates a QueryRequest message from a plain object. Also converts values to their respective internal types.
         * @param {Object.<string,*>} object Plain object
         * @returns {internal.QueryRequest} QueryRequest
         */
        static fromObject(object: { [k: string]: any }): internal.QueryRequest;

        /**
         * Creates a QueryRequest message from a plain object. Also converts values to their respective internal types.
         * This is an alias of {@link internal.QueryRequest.fromObject}.
         * @function
         * @param {Object.<string,*>} object Plain object
         * @returns {internal.QueryRequest} QueryRequest
         */
        static from(object: { [k: string]: any }): internal.QueryRequest;

        /**
         * Creates a plain object from a QueryRequest message. Also converts values to other types if specified.
         * @param {internal.QueryRequest} message QueryRequest
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        static toObject(message: internal.QueryRequest, options?: $protobuf.ConversionOptions): { [k: string]: any };

        /**
         * Creates a plain object from this QueryRequest message. Also converts values to other types if specified.
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

        /**
         * Converts this QueryRequest to JSON.
         * @returns {Object.<string,*>} JSON object
         */
        toJSON(): { [k: string]: any };
    }

    /**
     * Constructs a new QueryResponse.
     * @exports internal.QueryResponse
     * @constructor
     * @param {Object} [properties] Properties to set
     */
    class QueryResponse {

        /**
         * Constructs a new QueryResponse.
         * @exports internal.QueryResponse
         * @constructor
         * @param {Object} [properties] Properties to set
         */
        constructor(properties?: Object);

        /**
         * QueryResponse Err.
         * @type {string|undefined}
         */
        Err?: string;

        /**
         * QueryResponse Results.
         * @type {Array.<internal.QueryResult>|undefined}
         */
        Results?: internal.QueryResult[];

        /**
         * QueryResponse Profiles.
         * @type {Array.<internal.Profile>|undefined}
         */
        Profiles?: internal.Profile[];

        /**
         * Creates a new QueryResponse instance using the specified properties.
         * @param {Object} [properties] Properties to set
         * @returns {internal.QueryResponse} QueryResponse instance
         */
        static create(properties?: Object): internal.QueryResponse;

        /**
         * Encodes the specified QueryResponse message.
         * @param {internal.QueryResponse|Object} message QueryResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        static encode(message: (internal.QueryResponse|Object), writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified QueryResponse message, length delimited.
         * @param {internal.QueryResponse|Object} message QueryResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        static encodeDelimited(message: (internal.QueryResponse|Object), writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a QueryResponse message from the specified reader or buffer.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {internal.QueryResponse} QueryResponse
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): internal.QueryResponse;

        /**
         * Decodes a QueryResponse message from the specified reader or buffer, length delimited.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {internal.QueryResponse} QueryResponse
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): internal.QueryResponse;

        /**
         * Verifies a QueryResponse message.
         * @param {internal.QueryResponse|Object} message QueryResponse message or plain object to verify
         * @returns {?string} `null` if valid, otherwise the reason why it is not
         */
        static verify(message: (internal.QueryResponse|Object)): string;

        /**
         * Creates a QueryResponse message from a plain object. Also converts values to their respective internal types.
         * @param {Object.<string,*>} object Plain object
         * @returns {internal.QueryResponse} QueryResponse
         */
        static fromObject(object: { [k: string]: any }): internal.QueryResponse;

        /**
         * Creates a QueryResponse message from a plain object. Also converts values to their respective internal types.
         * This is an alias of {@link internal.QueryResponse.fromObject}.
         * @function
         * @param {Object.<string,*>} object Plain object
         * @returns {internal.QueryResponse} QueryResponse
         */
        static from(object: { [k: string]: any }): internal.QueryResponse;

        /**
         * Creates a plain object from a QueryResponse message. Also converts values to other types if specified.
         * @param {internal.QueryResponse} message QueryResponse
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        static toObject(message: internal.QueryResponse, options?: $protobuf.ConversionOptions): { [k: string]: any };

        /**
         * Creates a plain object from this QueryResponse message. Also converts values to other types if specified.
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

        /**
         * Converts this QueryResponse to JSON.
         * @returns {Object.<string,*>} JSON object
         */
        toJSON(): { [k: string]: any };
    }

    /**
     * Constructs a new QueryResult.
     * @exports internal.QueryResult
     * @constructor
     * @param {Object} [properties] Properties to set
     */
    class QueryResult {

        /**
         * Constructs a new QueryResult.
         * @exports internal.QueryResult
         * @constructor
         * @param {Object} [properties] Properties to set
         */
        constructor(properties?: Object);

        /**
         * QueryResult Bitmap.
         * @type {internal.Bitmap|undefined}
         */
        Bitmap?: internal.Bitmap;

        /**
         * QueryResult N.
         * @type {number|$protobuf.Long|undefined}
         */
        N?: (number|$protobuf.Long);

        /**
         * QueryResult Pairs.
         * @type {Array.<internal.Pair>|undefined}
         */
        Pairs?: internal.Pair[];

        /**
         * QueryResult Changed.
         * @type {boolean|undefined}
         */
        Changed?: boolean;

        /**
         * Creates a new QueryResult instance using the specified properties.
         * @param {Object} [properties] Properties to set
         * @returns {internal.QueryResult} QueryResult instance
         */
        static create(properties?: Object): internal.QueryResult;

        /**
         * Encodes the specified QueryResult message.
         * @param {internal.QueryResult|Object} message QueryResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        static encode(message: (internal.QueryResult|Object), writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified QueryResult message, length delimited.
         * @param {internal.QueryResult|Object} message QueryResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        static encodeDelimited(message: (internal.QueryResult|Object), writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a QueryResult message from the specified reader or buffer.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {internal.QueryResult} QueryResult
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): internal.QueryResult;

        /**
         * Decodes a QueryResult message from the specified reader or buffer, length delimited.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {internal.QueryResult} QueryResult
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): internal.QueryResult;

        /**
         * Verifies a QueryResult message.
         * @param {internal.QueryResult|Object} message QueryResult message or plain object to verify
         * @returns {?string} `null` if valid, otherwise the reason why it is not
         */
        static verify(message: (internal.QueryResult|Object)): string;

        /**
         * Creates a QueryResult message from a plain object. Also converts values to their respective internal types.
         * @param {Object.<string,*>} object Plain object
         * @returns {internal.QueryResult} QueryResult
         */
        static fromObject(object: { [k: string]: any }): internal.QueryResult;

        /**
         * Creates a QueryResult message from a plain object. Also converts values to their respective internal types.
         * This is an alias of {@link internal.QueryResult.fromObject}.
         * @function
         * @param {Object.<string,*>} object Plain object
         * @returns {internal.QueryResult} QueryResult
         */
        static from(object: { [k: string]: any }): internal.QueryResult;

        /**
         * Creates a plain object from a QueryResult message. Also converts values to other types if specified.
         * @param {internal.QueryResult} message QueryResult
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        static toObject(message: internal.QueryResult, options?: $protobuf.ConversionOptions): { [k: string]: any };

        /**
         * Creates a plain object from this QueryResult message. Also converts values to other types if specified.
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

        /**
         * Converts this QueryResult to JSON.
         * @returns {Object.<string,*>} JSON object
         */
        toJSON(): { [k: string]: any };
    }

    /**
     * Constructs a new ImportRequest.
     * @exports internal.ImportRequest
     * @constructor
     * @param {Object} [properties] Properties to set
     */
    class ImportRequest {

        /**
         * Constructs a new ImportRequest.
         * @exports internal.ImportRequest
         * @constructor
         * @param {Object} [properties] Properties to set
         */
        constructor(properties?: Object);

        /**
         * ImportRequest DB.
         * @type {string|undefined}
         */
        DB?: string;

        /**
         * ImportRequest Frame.
         * @type {string|undefined}
         */
        Frame?: string;

        /**
         * ImportRequest Slice.
         * @type {number|$protobuf.Long|undefined}
         */
        Slice?: (number|$protobuf.Long);

        /**
         * ImportRequest BitmapIDs.
         * @type {Array.<number|$protobuf.Long>|undefined}
         */
        BitmapIDs?: (number|$protobuf.Long)[];

        /**
         * ImportRequest ProfileIDs.
         * @type {Array.<number|$protobuf.Long>|undefined}
         */
        ProfileIDs?: (number|$protobuf.Long)[];

        /**
         * ImportRequest Timestamps.
         * @type {Array.<number|$protobuf.Long>|undefined}
         */
        Timestamps?: (number|$protobuf.Long)[];

        /**
         * Creates a new ImportRequest instance using the specified properties.
         * @param {Object} [properties] Properties to set
         * @returns {internal.ImportRequest} ImportRequest instance
         */
        static create(properties?: Object): internal.ImportRequest;

        /**
         * Encodes the specified ImportRequest message.
         * @param {internal.ImportRequest|Object} message ImportRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        static encode(message: (internal.ImportRequest|Object), writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ImportRequest message, length delimited.
         * @param {internal.ImportRequest|Object} message ImportRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        static encodeDelimited(message: (internal.ImportRequest|Object), writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ImportRequest message from the specified reader or buffer.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {internal.ImportRequest} ImportRequest
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): internal.ImportRequest;

        /**
         * Decodes an ImportRequest message from the specified reader or buffer, length delimited.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {internal.ImportRequest} ImportRequest
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): internal.ImportRequest;

        /**
         * Verifies an ImportRequest message.
         * @param {internal.ImportRequest|Object} message ImportRequest message or plain object to verify
         * @returns {?string} `null` if valid, otherwise the reason why it is not
         */
        static verify(message: (internal.ImportRequest|Object)): string;

        /**
         * Creates an ImportRequest message from a plain object. Also converts values to their respective internal types.
         * @param {Object.<string,*>} object Plain object
         * @returns {internal.ImportRequest} ImportRequest
         */
        static fromObject(object: { [k: string]: any }): internal.ImportRequest;

        /**
         * Creates an ImportRequest message from a plain object. Also converts values to their respective internal types.
         * This is an alias of {@link internal.ImportRequest.fromObject}.
         * @function
         * @param {Object.<string,*>} object Plain object
         * @returns {internal.ImportRequest} ImportRequest
         */
        static from(object: { [k: string]: any }): internal.ImportRequest;

        /**
         * Creates a plain object from an ImportRequest message. Also converts values to other types if specified.
         * @param {internal.ImportRequest} message ImportRequest
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        static toObject(message: internal.ImportRequest, options?: $protobuf.ConversionOptions): { [k: string]: any };

        /**
         * Creates a plain object from this ImportRequest message. Also converts values to other types if specified.
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

        /**
         * Converts this ImportRequest to JSON.
         * @returns {Object.<string,*>} JSON object
         */
        toJSON(): { [k: string]: any };
    }

    /**
     * Constructs a new ImportResponse.
     * @exports internal.ImportResponse
     * @constructor
     * @param {Object} [properties] Properties to set
     */
    class ImportResponse {

        /**
         * Constructs a new ImportResponse.
         * @exports internal.ImportResponse
         * @constructor
         * @param {Object} [properties] Properties to set
         */
        constructor(properties?: Object);

        /**
         * ImportResponse Err.
         * @type {string|undefined}
         */
        Err?: string;

        /**
         * Creates a new ImportResponse instance using the specified properties.
         * @param {Object} [properties] Properties to set
         * @returns {internal.ImportResponse} ImportResponse instance
         */
        static create(properties?: Object): internal.ImportResponse;

        /**
         * Encodes the specified ImportResponse message.
         * @param {internal.ImportResponse|Object} message ImportResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        static encode(message: (internal.ImportResponse|Object), writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ImportResponse message, length delimited.
         * @param {internal.ImportResponse|Object} message ImportResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        static encodeDelimited(message: (internal.ImportResponse|Object), writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ImportResponse message from the specified reader or buffer.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {internal.ImportResponse} ImportResponse
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): internal.ImportResponse;

        /**
         * Decodes an ImportResponse message from the specified reader or buffer, length delimited.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {internal.ImportResponse} ImportResponse
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): internal.ImportResponse;

        /**
         * Verifies an ImportResponse message.
         * @param {internal.ImportResponse|Object} message ImportResponse message or plain object to verify
         * @returns {?string} `null` if valid, otherwise the reason why it is not
         */
        static verify(message: (internal.ImportResponse|Object)): string;

        /**
         * Creates an ImportResponse message from a plain object. Also converts values to their respective internal types.
         * @param {Object.<string,*>} object Plain object
         * @returns {internal.ImportResponse} ImportResponse
         */
        static fromObject(object: { [k: string]: any }): internal.ImportResponse;

        /**
         * Creates an ImportResponse message from a plain object. Also converts values to their respective internal types.
         * This is an alias of {@link internal.ImportResponse.fromObject}.
         * @function
         * @param {Object.<string,*>} object Plain object
         * @returns {internal.ImportResponse} ImportResponse
         */
        static from(object: { [k: string]: any }): internal.ImportResponse;

        /**
         * Creates a plain object from an ImportResponse message. Also converts values to other types if specified.
         * @param {internal.ImportResponse} message ImportResponse
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        static toObject(message: internal.ImportResponse, options?: $protobuf.ConversionOptions): { [k: string]: any };

        /**
         * Creates a plain object from this ImportResponse message. Also converts values to other types if specified.
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

        /**
         * Converts this ImportResponse to JSON.
         * @returns {Object.<string,*>} JSON object
         */
        toJSON(): { [k: string]: any };
    }

    /**
     * Constructs a new BlockDataRequest.
     * @exports internal.BlockDataRequest
     * @constructor
     * @param {Object} [properties] Properties to set
     */
    class BlockDataRequest {

        /**
         * Constructs a new BlockDataRequest.
         * @exports internal.BlockDataRequest
         * @constructor
         * @param {Object} [properties] Properties to set
         */
        constructor(properties?: Object);

        /**
         * BlockDataRequest DB.
         * @type {string|undefined}
         */
        DB?: string;

        /**
         * BlockDataRequest Frame.
         * @type {string|undefined}
         */
        Frame?: string;

        /**
         * BlockDataRequest Slice.
         * @type {number|$protobuf.Long|undefined}
         */
        Slice?: (number|$protobuf.Long);

        /**
         * BlockDataRequest Block.
         * @type {number|$protobuf.Long|undefined}
         */
        Block?: (number|$protobuf.Long);

        /**
         * Creates a new BlockDataRequest instance using the specified properties.
         * @param {Object} [properties] Properties to set
         * @returns {internal.BlockDataRequest} BlockDataRequest instance
         */
        static create(properties?: Object): internal.BlockDataRequest;

        /**
         * Encodes the specified BlockDataRequest message.
         * @param {internal.BlockDataRequest|Object} message BlockDataRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        static encode(message: (internal.BlockDataRequest|Object), writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BlockDataRequest message, length delimited.
         * @param {internal.BlockDataRequest|Object} message BlockDataRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        static encodeDelimited(message: (internal.BlockDataRequest|Object), writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BlockDataRequest message from the specified reader or buffer.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {internal.BlockDataRequest} BlockDataRequest
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): internal.BlockDataRequest;

        /**
         * Decodes a BlockDataRequest message from the specified reader or buffer, length delimited.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {internal.BlockDataRequest} BlockDataRequest
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): internal.BlockDataRequest;

        /**
         * Verifies a BlockDataRequest message.
         * @param {internal.BlockDataRequest|Object} message BlockDataRequest message or plain object to verify
         * @returns {?string} `null` if valid, otherwise the reason why it is not
         */
        static verify(message: (internal.BlockDataRequest|Object)): string;

        /**
         * Creates a BlockDataRequest message from a plain object. Also converts values to their respective internal types.
         * @param {Object.<string,*>} object Plain object
         * @returns {internal.BlockDataRequest} BlockDataRequest
         */
        static fromObject(object: { [k: string]: any }): internal.BlockDataRequest;

        /**
         * Creates a BlockDataRequest message from a plain object. Also converts values to their respective internal types.
         * This is an alias of {@link internal.BlockDataRequest.fromObject}.
         * @function
         * @param {Object.<string,*>} object Plain object
         * @returns {internal.BlockDataRequest} BlockDataRequest
         */
        static from(object: { [k: string]: any }): internal.BlockDataRequest;

        /**
         * Creates a plain object from a BlockDataRequest message. Also converts values to other types if specified.
         * @param {internal.BlockDataRequest} message BlockDataRequest
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        static toObject(message: internal.BlockDataRequest, options?: $protobuf.ConversionOptions): { [k: string]: any };

        /**
         * Creates a plain object from this BlockDataRequest message. Also converts values to other types if specified.
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

        /**
         * Converts this BlockDataRequest to JSON.
         * @returns {Object.<string,*>} JSON object
         */
        toJSON(): { [k: string]: any };
    }

    /**
     * Constructs a new BlockDataResponse.
     * @exports internal.BlockDataResponse
     * @constructor
     * @param {Object} [properties] Properties to set
     */
    class BlockDataResponse {

        /**
         * Constructs a new BlockDataResponse.
         * @exports internal.BlockDataResponse
         * @constructor
         * @param {Object} [properties] Properties to set
         */
        constructor(properties?: Object);

        /**
         * BlockDataResponse BitmapIDs.
         * @type {Array.<number|$protobuf.Long>|undefined}
         */
        BitmapIDs?: (number|$protobuf.Long)[];

        /**
         * BlockDataResponse ProfileIDs.
         * @type {Array.<number|$protobuf.Long>|undefined}
         */
        ProfileIDs?: (number|$protobuf.Long)[];

        /**
         * Creates a new BlockDataResponse instance using the specified properties.
         * @param {Object} [properties] Properties to set
         * @returns {internal.BlockDataResponse} BlockDataResponse instance
         */
        static create(properties?: Object): internal.BlockDataResponse;

        /**
         * Encodes the specified BlockDataResponse message.
         * @param {internal.BlockDataResponse|Object} message BlockDataResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        static encode(message: (internal.BlockDataResponse|Object), writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BlockDataResponse message, length delimited.
         * @param {internal.BlockDataResponse|Object} message BlockDataResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        static encodeDelimited(message: (internal.BlockDataResponse|Object), writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BlockDataResponse message from the specified reader or buffer.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {internal.BlockDataResponse} BlockDataResponse
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): internal.BlockDataResponse;

        /**
         * Decodes a BlockDataResponse message from the specified reader or buffer, length delimited.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {internal.BlockDataResponse} BlockDataResponse
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): internal.BlockDataResponse;

        /**
         * Verifies a BlockDataResponse message.
         * @param {internal.BlockDataResponse|Object} message BlockDataResponse message or plain object to verify
         * @returns {?string} `null` if valid, otherwise the reason why it is not
         */
        static verify(message: (internal.BlockDataResponse|Object)): string;

        /**
         * Creates a BlockDataResponse message from a plain object. Also converts values to their respective internal types.
         * @param {Object.<string,*>} object Plain object
         * @returns {internal.BlockDataResponse} BlockDataResponse
         */
        static fromObject(object: { [k: string]: any }): internal.BlockDataResponse;

        /**
         * Creates a BlockDataResponse message from a plain object. Also converts values to their respective internal types.
         * This is an alias of {@link internal.BlockDataResponse.fromObject}.
         * @function
         * @param {Object.<string,*>} object Plain object
         * @returns {internal.BlockDataResponse} BlockDataResponse
         */
        static from(object: { [k: string]: any }): internal.BlockDataResponse;

        /**
         * Creates a plain object from a BlockDataResponse message. Also converts values to other types if specified.
         * @param {internal.BlockDataResponse} message BlockDataResponse
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        static toObject(message: internal.BlockDataResponse, options?: $protobuf.ConversionOptions): { [k: string]: any };

        /**
         * Creates a plain object from this BlockDataResponse message. Also converts values to other types if specified.
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

        /**
         * Converts this BlockDataResponse to JSON.
         * @returns {Object.<string,*>} JSON object
         */
        toJSON(): { [k: string]: any };
    }

    /**
     * Constructs a new Cache.
     * @exports internal.Cache
     * @constructor
     * @param {Object} [properties] Properties to set
     */
    class Cache {

        /**
         * Constructs a new Cache.
         * @exports internal.Cache
         * @constructor
         * @param {Object} [properties] Properties to set
         */
        constructor(properties?: Object);

        /**
         * Cache BitmapIDs.
         * @type {Array.<number|$protobuf.Long>|undefined}
         */
        BitmapIDs?: (number|$protobuf.Long)[];

        /**
         * Creates a new Cache instance using the specified properties.
         * @param {Object} [properties] Properties to set
         * @returns {internal.Cache} Cache instance
         */
        static create(properties?: Object): internal.Cache;

        /**
         * Encodes the specified Cache message.
         * @param {internal.Cache|Object} message Cache message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        static encode(message: (internal.Cache|Object), writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Cache message, length delimited.
         * @param {internal.Cache|Object} message Cache message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        static encodeDelimited(message: (internal.Cache|Object), writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Cache message from the specified reader or buffer.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {internal.Cache} Cache
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): internal.Cache;

        /**
         * Decodes a Cache message from the specified reader or buffer, length delimited.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {internal.Cache} Cache
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): internal.Cache;

        /**
         * Verifies a Cache message.
         * @param {internal.Cache|Object} message Cache message or plain object to verify
         * @returns {?string} `null` if valid, otherwise the reason why it is not
         */
        static verify(message: (internal.Cache|Object)): string;

        /**
         * Creates a Cache message from a plain object. Also converts values to their respective internal types.
         * @param {Object.<string,*>} object Plain object
         * @returns {internal.Cache} Cache
         */
        static fromObject(object: { [k: string]: any }): internal.Cache;

        /**
         * Creates a Cache message from a plain object. Also converts values to their respective internal types.
         * This is an alias of {@link internal.Cache.fromObject}.
         * @function
         * @param {Object.<string,*>} object Plain object
         * @returns {internal.Cache} Cache
         */
        static from(object: { [k: string]: any }): internal.Cache;

        /**
         * Creates a plain object from a Cache message. Also converts values to other types if specified.
         * @param {internal.Cache} message Cache
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        static toObject(message: internal.Cache, options?: $protobuf.ConversionOptions): { [k: string]: any };

        /**
         * Creates a plain object from this Cache message. Also converts values to other types if specified.
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

        /**
         * Converts this Cache to JSON.
         * @returns {Object.<string,*>} JSON object
         */
        toJSON(): { [k: string]: any };
    }

    /**
     * Constructs a new MaxSlicesResponse.
     * @exports internal.MaxSlicesResponse
     * @constructor
     * @param {Object} [properties] Properties to set
     */
    class MaxSlicesResponse {

        /**
         * Constructs a new MaxSlicesResponse.
         * @exports internal.MaxSlicesResponse
         * @constructor
         * @param {Object} [properties] Properties to set
         */
        constructor(properties?: Object);

        /**
         * MaxSlicesResponse MaxSlices.
         * @type {Object.<string,number|$protobuf.Long>|undefined}
         */
        MaxSlices?: { [k: string]: (number|$protobuf.Long) };

        /**
         * Creates a new MaxSlicesResponse instance using the specified properties.
         * @param {Object} [properties] Properties to set
         * @returns {internal.MaxSlicesResponse} MaxSlicesResponse instance
         */
        static create(properties?: Object): internal.MaxSlicesResponse;

        /**
         * Encodes the specified MaxSlicesResponse message.
         * @param {internal.MaxSlicesResponse|Object} message MaxSlicesResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        static encode(message: (internal.MaxSlicesResponse|Object), writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MaxSlicesResponse message, length delimited.
         * @param {internal.MaxSlicesResponse|Object} message MaxSlicesResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        static encodeDelimited(message: (internal.MaxSlicesResponse|Object), writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MaxSlicesResponse message from the specified reader or buffer.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {internal.MaxSlicesResponse} MaxSlicesResponse
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): internal.MaxSlicesResponse;

        /**
         * Decodes a MaxSlicesResponse message from the specified reader or buffer, length delimited.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {internal.MaxSlicesResponse} MaxSlicesResponse
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): internal.MaxSlicesResponse;

        /**
         * Verifies a MaxSlicesResponse message.
         * @param {internal.MaxSlicesResponse|Object} message MaxSlicesResponse message or plain object to verify
         * @returns {?string} `null` if valid, otherwise the reason why it is not
         */
        static verify(message: (internal.MaxSlicesResponse|Object)): string;

        /**
         * Creates a MaxSlicesResponse message from a plain object. Also converts values to their respective internal types.
         * @param {Object.<string,*>} object Plain object
         * @returns {internal.MaxSlicesResponse} MaxSlicesResponse
         */
        static fromObject(object: { [k: string]: any }): internal.MaxSlicesResponse;

        /**
         * Creates a MaxSlicesResponse message from a plain object. Also converts values to their respective internal types.
         * This is an alias of {@link internal.MaxSlicesResponse.fromObject}.
         * @function
         * @param {Object.<string,*>} object Plain object
         * @returns {internal.MaxSlicesResponse} MaxSlicesResponse
         */
        static from(object: { [k: string]: any }): internal.MaxSlicesResponse;

        /**
         * Creates a plain object from a MaxSlicesResponse message. Also converts values to other types if specified.
         * @param {internal.MaxSlicesResponse} message MaxSlicesResponse
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        static toObject(message: internal.MaxSlicesResponse, options?: $protobuf.ConversionOptions): { [k: string]: any };

        /**
         * Creates a plain object from this MaxSlicesResponse message. Also converts values to other types if specified.
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

        /**
         * Converts this MaxSlicesResponse to JSON.
         * @returns {Object.<string,*>} JSON object
         */
        toJSON(): { [k: string]: any };
    }
}
