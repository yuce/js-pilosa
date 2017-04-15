import * as $protobuf from "protobufjs";

/**
 * Namespace internal.
 * @exports internal
 * @namespace
 */
export namespace internal {

    type DB$Properties = {
        TimeQuantum?: string;
        ColumnLabel?: string;
    };

    /**
     * Constructs a new DB.
     * @exports internal.DB
     * @constructor
     * @param {internal.DB$Properties=} [properties] Properties to set
     */
    class DB {

        /**
         * Constructs a new DB.
         * @exports internal.DB
         * @constructor
         * @param {internal.DB$Properties=} [properties] Properties to set
         */
        constructor(properties?: internal.DB$Properties);

        /**
         * DB TimeQuantum.
         * @type {string}
         */
        public TimeQuantum: string;

        /**
         * DB ColumnLabel.
         * @type {string}
         */
        public ColumnLabel: string;

        /**
         * Creates a new DB instance using the specified properties.
         * @param {internal.DB$Properties=} [properties] Properties to set
         * @returns {internal.DB} DB instance
         */
        public static create(properties?: internal.DB$Properties): internal.DB;

        /**
         * Encodes the specified DB message. Does not implicitly {@link internal.DB.verify|verify} messages.
         * @param {internal.DB$Properties} message DB message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        public static encode(message: internal.DB$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DB message, length delimited. Does not implicitly {@link internal.DB.verify|verify} messages.
         * @param {internal.DB$Properties} message DB message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        public static encodeDelimited(message: internal.DB$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB message from the specified reader or buffer.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {internal.DB} DB
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): internal.DB;

        /**
         * Decodes a DB message from the specified reader or buffer, length delimited.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {internal.DB} DB
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): internal.DB;

        /**
         * Verifies a DB message.
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {?string} `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): string;

        /**
         * Creates a DB message from a plain object. Also converts values to their respective internal types.
         * @param {Object.<string,*>} object Plain object
         * @returns {internal.DB} DB
         */
        public static fromObject(object: { [k: string]: any }): internal.DB;

        /**
         * Creates a DB message from a plain object. Also converts values to their respective internal types.
         * This is an alias of {@link internal.DB.fromObject}.
         * @function
         * @param {Object.<string,*>} object Plain object
         * @returns {internal.DB} DB
         */
        public static from(object: { [k: string]: any }): internal.DB;

        /**
         * Creates a plain object from a DB message. Also converts values to other types if specified.
         * @param {internal.DB} message DB
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        public static toObject(message: internal.DB, options?: $protobuf.ConversionOptions): { [k: string]: any };

        /**
         * Creates a plain object from this DB message. Also converts values to other types if specified.
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

        /**
         * Converts this DB to JSON.
         * @returns {Object.<string,*>} JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    type Frame$Properties = {
        TimeQuantum?: string;
        RowLabel?: string;
    };

    /**
     * Constructs a new Frame.
     * @exports internal.Frame
     * @constructor
     * @param {internal.Frame$Properties=} [properties] Properties to set
     */
    class Frame {

        /**
         * Constructs a new Frame.
         * @exports internal.Frame
         * @constructor
         * @param {internal.Frame$Properties=} [properties] Properties to set
         */
        constructor(properties?: internal.Frame$Properties);

        /**
         * Frame TimeQuantum.
         * @type {string}
         */
        public TimeQuantum: string;

        /**
         * Frame RowLabel.
         * @type {string}
         */
        public RowLabel: string;

        /**
         * Creates a new Frame instance using the specified properties.
         * @param {internal.Frame$Properties=} [properties] Properties to set
         * @returns {internal.Frame} Frame instance
         */
        public static create(properties?: internal.Frame$Properties): internal.Frame;

        /**
         * Encodes the specified Frame message. Does not implicitly {@link internal.Frame.verify|verify} messages.
         * @param {internal.Frame$Properties} message Frame message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        public static encode(message: internal.Frame$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Frame message, length delimited. Does not implicitly {@link internal.Frame.verify|verify} messages.
         * @param {internal.Frame$Properties} message Frame message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        public static encodeDelimited(message: internal.Frame$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Frame message from the specified reader or buffer.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {internal.Frame} Frame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): internal.Frame;

        /**
         * Decodes a Frame message from the specified reader or buffer, length delimited.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {internal.Frame} Frame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): internal.Frame;

        /**
         * Verifies a Frame message.
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {?string} `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): string;

        /**
         * Creates a Frame message from a plain object. Also converts values to their respective internal types.
         * @param {Object.<string,*>} object Plain object
         * @returns {internal.Frame} Frame
         */
        public static fromObject(object: { [k: string]: any }): internal.Frame;

        /**
         * Creates a Frame message from a plain object. Also converts values to their respective internal types.
         * This is an alias of {@link internal.Frame.fromObject}.
         * @function
         * @param {Object.<string,*>} object Plain object
         * @returns {internal.Frame} Frame
         */
        public static from(object: { [k: string]: any }): internal.Frame;

        /**
         * Creates a plain object from a Frame message. Also converts values to other types if specified.
         * @param {internal.Frame} message Frame
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        public static toObject(message: internal.Frame, options?: $protobuf.ConversionOptions): { [k: string]: any };

        /**
         * Creates a plain object from this Frame message. Also converts values to other types if specified.
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

        /**
         * Converts this Frame to JSON.
         * @returns {Object.<string,*>} JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    type Bitmap$Properties = {
        Bits?: (number|Long)[];
        Attrs?: internal.Attr$Properties[];
    };

    /**
     * Constructs a new Bitmap.
     * @exports internal.Bitmap
     * @constructor
     * @param {internal.Bitmap$Properties=} [properties] Properties to set
     */
    class Bitmap {

        /**
         * Constructs a new Bitmap.
         * @exports internal.Bitmap
         * @constructor
         * @param {internal.Bitmap$Properties=} [properties] Properties to set
         */
        constructor(properties?: internal.Bitmap$Properties);

        /**
         * Bitmap Bits.
         * @type {Array.<number|Long>}
         */
        public Bits: (number|Long)[];

        /**
         * Bitmap Attrs.
         * @type {Array.<internal.Attr$Properties>}
         */
        public Attrs: internal.Attr$Properties[];

        /**
         * Creates a new Bitmap instance using the specified properties.
         * @param {internal.Bitmap$Properties=} [properties] Properties to set
         * @returns {internal.Bitmap} Bitmap instance
         */
        public static create(properties?: internal.Bitmap$Properties): internal.Bitmap;

        /**
         * Encodes the specified Bitmap message. Does not implicitly {@link internal.Bitmap.verify|verify} messages.
         * @param {internal.Bitmap$Properties} message Bitmap message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        public static encode(message: internal.Bitmap$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Bitmap message, length delimited. Does not implicitly {@link internal.Bitmap.verify|verify} messages.
         * @param {internal.Bitmap$Properties} message Bitmap message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        public static encodeDelimited(message: internal.Bitmap$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Bitmap message from the specified reader or buffer.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {internal.Bitmap} Bitmap
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): internal.Bitmap;

        /**
         * Decodes a Bitmap message from the specified reader or buffer, length delimited.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {internal.Bitmap} Bitmap
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): internal.Bitmap;

        /**
         * Verifies a Bitmap message.
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {?string} `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): string;

        /**
         * Creates a Bitmap message from a plain object. Also converts values to their respective internal types.
         * @param {Object.<string,*>} object Plain object
         * @returns {internal.Bitmap} Bitmap
         */
        public static fromObject(object: { [k: string]: any }): internal.Bitmap;

        /**
         * Creates a Bitmap message from a plain object. Also converts values to their respective internal types.
         * This is an alias of {@link internal.Bitmap.fromObject}.
         * @function
         * @param {Object.<string,*>} object Plain object
         * @returns {internal.Bitmap} Bitmap
         */
        public static from(object: { [k: string]: any }): internal.Bitmap;

        /**
         * Creates a plain object from a Bitmap message. Also converts values to other types if specified.
         * @param {internal.Bitmap} message Bitmap
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        public static toObject(message: internal.Bitmap, options?: $protobuf.ConversionOptions): { [k: string]: any };

        /**
         * Creates a plain object from this Bitmap message. Also converts values to other types if specified.
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

        /**
         * Converts this Bitmap to JSON.
         * @returns {Object.<string,*>} JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    type Pair$Properties = {
        Key?: (number|Long);
        Count?: (number|Long);
    };

    /**
     * Constructs a new Pair.
     * @exports internal.Pair
     * @constructor
     * @param {internal.Pair$Properties=} [properties] Properties to set
     */
    class Pair {

        /**
         * Constructs a new Pair.
         * @exports internal.Pair
         * @constructor
         * @param {internal.Pair$Properties=} [properties] Properties to set
         */
        constructor(properties?: internal.Pair$Properties);

        /**
         * Pair Key.
         * @type {number|Long}
         */
        public Key: (number|Long);

        /**
         * Pair Count.
         * @type {number|Long}
         */
        public Count: (number|Long);

        /**
         * Creates a new Pair instance using the specified properties.
         * @param {internal.Pair$Properties=} [properties] Properties to set
         * @returns {internal.Pair} Pair instance
         */
        public static create(properties?: internal.Pair$Properties): internal.Pair;

        /**
         * Encodes the specified Pair message. Does not implicitly {@link internal.Pair.verify|verify} messages.
         * @param {internal.Pair$Properties} message Pair message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        public static encode(message: internal.Pair$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Pair message, length delimited. Does not implicitly {@link internal.Pair.verify|verify} messages.
         * @param {internal.Pair$Properties} message Pair message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        public static encodeDelimited(message: internal.Pair$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Pair message from the specified reader or buffer.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {internal.Pair} Pair
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): internal.Pair;

        /**
         * Decodes a Pair message from the specified reader or buffer, length delimited.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {internal.Pair} Pair
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): internal.Pair;

        /**
         * Verifies a Pair message.
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {?string} `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): string;

        /**
         * Creates a Pair message from a plain object. Also converts values to their respective internal types.
         * @param {Object.<string,*>} object Plain object
         * @returns {internal.Pair} Pair
         */
        public static fromObject(object: { [k: string]: any }): internal.Pair;

        /**
         * Creates a Pair message from a plain object. Also converts values to their respective internal types.
         * This is an alias of {@link internal.Pair.fromObject}.
         * @function
         * @param {Object.<string,*>} object Plain object
         * @returns {internal.Pair} Pair
         */
        public static from(object: { [k: string]: any }): internal.Pair;

        /**
         * Creates a plain object from a Pair message. Also converts values to other types if specified.
         * @param {internal.Pair} message Pair
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        public static toObject(message: internal.Pair, options?: $protobuf.ConversionOptions): { [k: string]: any };

        /**
         * Creates a plain object from this Pair message. Also converts values to other types if specified.
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

        /**
         * Converts this Pair to JSON.
         * @returns {Object.<string,*>} JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    type Bit$Properties = {
        BitmapID?: (number|Long);
        ProfileID?: (number|Long);
        Timestamp?: (number|Long);
    };

    /**
     * Constructs a new Bit.
     * @exports internal.Bit
     * @constructor
     * @param {internal.Bit$Properties=} [properties] Properties to set
     */
    class Bit {

        /**
         * Constructs a new Bit.
         * @exports internal.Bit
         * @constructor
         * @param {internal.Bit$Properties=} [properties] Properties to set
         */
        constructor(properties?: internal.Bit$Properties);

        /**
         * Bit BitmapID.
         * @type {number|Long}
         */
        public BitmapID: (number|Long);

        /**
         * Bit ProfileID.
         * @type {number|Long}
         */
        public ProfileID: (number|Long);

        /**
         * Bit Timestamp.
         * @type {number|Long}
         */
        public Timestamp: (number|Long);

        /**
         * Creates a new Bit instance using the specified properties.
         * @param {internal.Bit$Properties=} [properties] Properties to set
         * @returns {internal.Bit} Bit instance
         */
        public static create(properties?: internal.Bit$Properties): internal.Bit;

        /**
         * Encodes the specified Bit message. Does not implicitly {@link internal.Bit.verify|verify} messages.
         * @param {internal.Bit$Properties} message Bit message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        public static encode(message: internal.Bit$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Bit message, length delimited. Does not implicitly {@link internal.Bit.verify|verify} messages.
         * @param {internal.Bit$Properties} message Bit message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        public static encodeDelimited(message: internal.Bit$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Bit message from the specified reader or buffer.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {internal.Bit} Bit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): internal.Bit;

        /**
         * Decodes a Bit message from the specified reader or buffer, length delimited.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {internal.Bit} Bit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): internal.Bit;

        /**
         * Verifies a Bit message.
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {?string} `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): string;

        /**
         * Creates a Bit message from a plain object. Also converts values to their respective internal types.
         * @param {Object.<string,*>} object Plain object
         * @returns {internal.Bit} Bit
         */
        public static fromObject(object: { [k: string]: any }): internal.Bit;

        /**
         * Creates a Bit message from a plain object. Also converts values to their respective internal types.
         * This is an alias of {@link internal.Bit.fromObject}.
         * @function
         * @param {Object.<string,*>} object Plain object
         * @returns {internal.Bit} Bit
         */
        public static from(object: { [k: string]: any }): internal.Bit;

        /**
         * Creates a plain object from a Bit message. Also converts values to other types if specified.
         * @param {internal.Bit} message Bit
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        public static toObject(message: internal.Bit, options?: $protobuf.ConversionOptions): { [k: string]: any };

        /**
         * Creates a plain object from this Bit message. Also converts values to other types if specified.
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

        /**
         * Converts this Bit to JSON.
         * @returns {Object.<string,*>} JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    type Profile$Properties = {
        ID?: (number|Long);
        Attrs?: internal.Attr$Properties[];
    };

    /**
     * Constructs a new Profile.
     * @exports internal.Profile
     * @constructor
     * @param {internal.Profile$Properties=} [properties] Properties to set
     */
    class Profile {

        /**
         * Constructs a new Profile.
         * @exports internal.Profile
         * @constructor
         * @param {internal.Profile$Properties=} [properties] Properties to set
         */
        constructor(properties?: internal.Profile$Properties);

        /**
         * Profile ID.
         * @type {number|Long}
         */
        public ID: (number|Long);

        /**
         * Profile Attrs.
         * @type {Array.<internal.Attr$Properties>}
         */
        public Attrs: internal.Attr$Properties[];

        /**
         * Creates a new Profile instance using the specified properties.
         * @param {internal.Profile$Properties=} [properties] Properties to set
         * @returns {internal.Profile} Profile instance
         */
        public static create(properties?: internal.Profile$Properties): internal.Profile;

        /**
         * Encodes the specified Profile message. Does not implicitly {@link internal.Profile.verify|verify} messages.
         * @param {internal.Profile$Properties} message Profile message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        public static encode(message: internal.Profile$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Profile message, length delimited. Does not implicitly {@link internal.Profile.verify|verify} messages.
         * @param {internal.Profile$Properties} message Profile message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        public static encodeDelimited(message: internal.Profile$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Profile message from the specified reader or buffer.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {internal.Profile} Profile
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): internal.Profile;

        /**
         * Decodes a Profile message from the specified reader or buffer, length delimited.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {internal.Profile} Profile
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): internal.Profile;

        /**
         * Verifies a Profile message.
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {?string} `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): string;

        /**
         * Creates a Profile message from a plain object. Also converts values to their respective internal types.
         * @param {Object.<string,*>} object Plain object
         * @returns {internal.Profile} Profile
         */
        public static fromObject(object: { [k: string]: any }): internal.Profile;

        /**
         * Creates a Profile message from a plain object. Also converts values to their respective internal types.
         * This is an alias of {@link internal.Profile.fromObject}.
         * @function
         * @param {Object.<string,*>} object Plain object
         * @returns {internal.Profile} Profile
         */
        public static from(object: { [k: string]: any }): internal.Profile;

        /**
         * Creates a plain object from a Profile message. Also converts values to other types if specified.
         * @param {internal.Profile} message Profile
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        public static toObject(message: internal.Profile, options?: $protobuf.ConversionOptions): { [k: string]: any };

        /**
         * Creates a plain object from this Profile message. Also converts values to other types if specified.
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

        /**
         * Converts this Profile to JSON.
         * @returns {Object.<string,*>} JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    type Attr$Properties = {
        Key?: string;
        Type?: (number|Long);
        StringValue?: string;
        UintValue?: (number|Long);
        BoolValue?: boolean;
        FloatValue?: number;
    };

    /**
     * Constructs a new Attr.
     * @exports internal.Attr
     * @constructor
     * @param {internal.Attr$Properties=} [properties] Properties to set
     */
    class Attr {

        /**
         * Constructs a new Attr.
         * @exports internal.Attr
         * @constructor
         * @param {internal.Attr$Properties=} [properties] Properties to set
         */
        constructor(properties?: internal.Attr$Properties);

        /**
         * Attr Key.
         * @type {string}
         */
        public Key: string;

        /**
         * Attr Type.
         * @type {number|Long}
         */
        public Type: (number|Long);

        /**
         * Attr StringValue.
         * @type {string}
         */
        public StringValue: string;

        /**
         * Attr UintValue.
         * @type {number|Long}
         */
        public UintValue: (number|Long);

        /**
         * Attr BoolValue.
         * @type {boolean}
         */
        public BoolValue: boolean;

        /**
         * Attr FloatValue.
         * @type {number}
         */
        public FloatValue: number;

        /**
         * Creates a new Attr instance using the specified properties.
         * @param {internal.Attr$Properties=} [properties] Properties to set
         * @returns {internal.Attr} Attr instance
         */
        public static create(properties?: internal.Attr$Properties): internal.Attr;

        /**
         * Encodes the specified Attr message. Does not implicitly {@link internal.Attr.verify|verify} messages.
         * @param {internal.Attr$Properties} message Attr message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        public static encode(message: internal.Attr$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Attr message, length delimited. Does not implicitly {@link internal.Attr.verify|verify} messages.
         * @param {internal.Attr$Properties} message Attr message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        public static encodeDelimited(message: internal.Attr$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Attr message from the specified reader or buffer.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {internal.Attr} Attr
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): internal.Attr;

        /**
         * Decodes an Attr message from the specified reader or buffer, length delimited.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {internal.Attr} Attr
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): internal.Attr;

        /**
         * Verifies an Attr message.
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {?string} `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): string;

        /**
         * Creates an Attr message from a plain object. Also converts values to their respective internal types.
         * @param {Object.<string,*>} object Plain object
         * @returns {internal.Attr} Attr
         */
        public static fromObject(object: { [k: string]: any }): internal.Attr;

        /**
         * Creates an Attr message from a plain object. Also converts values to their respective internal types.
         * This is an alias of {@link internal.Attr.fromObject}.
         * @function
         * @param {Object.<string,*>} object Plain object
         * @returns {internal.Attr} Attr
         */
        public static from(object: { [k: string]: any }): internal.Attr;

        /**
         * Creates a plain object from an Attr message. Also converts values to other types if specified.
         * @param {internal.Attr} message Attr
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        public static toObject(message: internal.Attr, options?: $protobuf.ConversionOptions): { [k: string]: any };

        /**
         * Creates a plain object from this Attr message. Also converts values to other types if specified.
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

        /**
         * Converts this Attr to JSON.
         * @returns {Object.<string,*>} JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    type AttrMap$Properties = {
        Attrs?: internal.Attr$Properties[];
    };

    /**
     * Constructs a new AttrMap.
     * @exports internal.AttrMap
     * @constructor
     * @param {internal.AttrMap$Properties=} [properties] Properties to set
     */
    class AttrMap {

        /**
         * Constructs a new AttrMap.
         * @exports internal.AttrMap
         * @constructor
         * @param {internal.AttrMap$Properties=} [properties] Properties to set
         */
        constructor(properties?: internal.AttrMap$Properties);

        /**
         * AttrMap Attrs.
         * @type {Array.<internal.Attr$Properties>}
         */
        public Attrs: internal.Attr$Properties[];

        /**
         * Creates a new AttrMap instance using the specified properties.
         * @param {internal.AttrMap$Properties=} [properties] Properties to set
         * @returns {internal.AttrMap} AttrMap instance
         */
        public static create(properties?: internal.AttrMap$Properties): internal.AttrMap;

        /**
         * Encodes the specified AttrMap message. Does not implicitly {@link internal.AttrMap.verify|verify} messages.
         * @param {internal.AttrMap$Properties} message AttrMap message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        public static encode(message: internal.AttrMap$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AttrMap message, length delimited. Does not implicitly {@link internal.AttrMap.verify|verify} messages.
         * @param {internal.AttrMap$Properties} message AttrMap message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        public static encodeDelimited(message: internal.AttrMap$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AttrMap message from the specified reader or buffer.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {internal.AttrMap} AttrMap
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): internal.AttrMap;

        /**
         * Decodes an AttrMap message from the specified reader or buffer, length delimited.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {internal.AttrMap} AttrMap
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): internal.AttrMap;

        /**
         * Verifies an AttrMap message.
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {?string} `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): string;

        /**
         * Creates an AttrMap message from a plain object. Also converts values to their respective internal types.
         * @param {Object.<string,*>} object Plain object
         * @returns {internal.AttrMap} AttrMap
         */
        public static fromObject(object: { [k: string]: any }): internal.AttrMap;

        /**
         * Creates an AttrMap message from a plain object. Also converts values to their respective internal types.
         * This is an alias of {@link internal.AttrMap.fromObject}.
         * @function
         * @param {Object.<string,*>} object Plain object
         * @returns {internal.AttrMap} AttrMap
         */
        public static from(object: { [k: string]: any }): internal.AttrMap;

        /**
         * Creates a plain object from an AttrMap message. Also converts values to other types if specified.
         * @param {internal.AttrMap} message AttrMap
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        public static toObject(message: internal.AttrMap, options?: $protobuf.ConversionOptions): { [k: string]: any };

        /**
         * Creates a plain object from this AttrMap message. Also converts values to other types if specified.
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

        /**
         * Converts this AttrMap to JSON.
         * @returns {Object.<string,*>} JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    type QueryRequest$Properties = {
        DB?: string;
        Query?: string;
        Slices?: (number|Long)[];
        Profiles?: boolean;
        Quantum?: string;
        Remote?: boolean;
    };

    /**
     * Constructs a new QueryRequest.
     * @exports internal.QueryRequest
     * @constructor
     * @param {internal.QueryRequest$Properties=} [properties] Properties to set
     */
    class QueryRequest {

        /**
         * Constructs a new QueryRequest.
         * @exports internal.QueryRequest
         * @constructor
         * @param {internal.QueryRequest$Properties=} [properties] Properties to set
         */
        constructor(properties?: internal.QueryRequest$Properties);

        /**
         * QueryRequest DB.
         * @type {string}
         */
        public DB: string;

        /**
         * QueryRequest Query.
         * @type {string}
         */
        public Query: string;

        /**
         * QueryRequest Slices.
         * @type {Array.<number|Long>}
         */
        public Slices: (number|Long)[];

        /**
         * QueryRequest Profiles.
         * @type {boolean}
         */
        public Profiles: boolean;

        /**
         * QueryRequest Quantum.
         * @type {string}
         */
        public Quantum: string;

        /**
         * QueryRequest Remote.
         * @type {boolean}
         */
        public Remote: boolean;

        /**
         * Creates a new QueryRequest instance using the specified properties.
         * @param {internal.QueryRequest$Properties=} [properties] Properties to set
         * @returns {internal.QueryRequest} QueryRequest instance
         */
        public static create(properties?: internal.QueryRequest$Properties): internal.QueryRequest;

        /**
         * Encodes the specified QueryRequest message. Does not implicitly {@link internal.QueryRequest.verify|verify} messages.
         * @param {internal.QueryRequest$Properties} message QueryRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        public static encode(message: internal.QueryRequest$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified QueryRequest message, length delimited. Does not implicitly {@link internal.QueryRequest.verify|verify} messages.
         * @param {internal.QueryRequest$Properties} message QueryRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        public static encodeDelimited(message: internal.QueryRequest$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a QueryRequest message from the specified reader or buffer.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {internal.QueryRequest} QueryRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): internal.QueryRequest;

        /**
         * Decodes a QueryRequest message from the specified reader or buffer, length delimited.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {internal.QueryRequest} QueryRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): internal.QueryRequest;

        /**
         * Verifies a QueryRequest message.
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {?string} `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): string;

        /**
         * Creates a QueryRequest message from a plain object. Also converts values to their respective internal types.
         * @param {Object.<string,*>} object Plain object
         * @returns {internal.QueryRequest} QueryRequest
         */
        public static fromObject(object: { [k: string]: any }): internal.QueryRequest;

        /**
         * Creates a QueryRequest message from a plain object. Also converts values to their respective internal types.
         * This is an alias of {@link internal.QueryRequest.fromObject}.
         * @function
         * @param {Object.<string,*>} object Plain object
         * @returns {internal.QueryRequest} QueryRequest
         */
        public static from(object: { [k: string]: any }): internal.QueryRequest;

        /**
         * Creates a plain object from a QueryRequest message. Also converts values to other types if specified.
         * @param {internal.QueryRequest} message QueryRequest
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        public static toObject(message: internal.QueryRequest, options?: $protobuf.ConversionOptions): { [k: string]: any };

        /**
         * Creates a plain object from this QueryRequest message. Also converts values to other types if specified.
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

        /**
         * Converts this QueryRequest to JSON.
         * @returns {Object.<string,*>} JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    type QueryResponse$Properties = {
        Err?: string;
        Results?: internal.QueryResult$Properties[];
        Profiles?: internal.Profile$Properties[];
    };

    /**
     * Constructs a new QueryResponse.
     * @exports internal.QueryResponse
     * @constructor
     * @param {internal.QueryResponse$Properties=} [properties] Properties to set
     */
    class QueryResponse {

        /**
         * Constructs a new QueryResponse.
         * @exports internal.QueryResponse
         * @constructor
         * @param {internal.QueryResponse$Properties=} [properties] Properties to set
         */
        constructor(properties?: internal.QueryResponse$Properties);

        /**
         * QueryResponse Err.
         * @type {string}
         */
        public Err: string;

        /**
         * QueryResponse Results.
         * @type {Array.<internal.QueryResult$Properties>}
         */
        public Results: internal.QueryResult$Properties[];

        /**
         * QueryResponse Profiles.
         * @type {Array.<internal.Profile$Properties>}
         */
        public Profiles: internal.Profile$Properties[];

        /**
         * Creates a new QueryResponse instance using the specified properties.
         * @param {internal.QueryResponse$Properties=} [properties] Properties to set
         * @returns {internal.QueryResponse} QueryResponse instance
         */
        public static create(properties?: internal.QueryResponse$Properties): internal.QueryResponse;

        /**
         * Encodes the specified QueryResponse message. Does not implicitly {@link internal.QueryResponse.verify|verify} messages.
         * @param {internal.QueryResponse$Properties} message QueryResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        public static encode(message: internal.QueryResponse$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified QueryResponse message, length delimited. Does not implicitly {@link internal.QueryResponse.verify|verify} messages.
         * @param {internal.QueryResponse$Properties} message QueryResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        public static encodeDelimited(message: internal.QueryResponse$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a QueryResponse message from the specified reader or buffer.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {internal.QueryResponse} QueryResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): internal.QueryResponse;

        /**
         * Decodes a QueryResponse message from the specified reader or buffer, length delimited.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {internal.QueryResponse} QueryResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): internal.QueryResponse;

        /**
         * Verifies a QueryResponse message.
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {?string} `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): string;

        /**
         * Creates a QueryResponse message from a plain object. Also converts values to their respective internal types.
         * @param {Object.<string,*>} object Plain object
         * @returns {internal.QueryResponse} QueryResponse
         */
        public static fromObject(object: { [k: string]: any }): internal.QueryResponse;

        /**
         * Creates a QueryResponse message from a plain object. Also converts values to their respective internal types.
         * This is an alias of {@link internal.QueryResponse.fromObject}.
         * @function
         * @param {Object.<string,*>} object Plain object
         * @returns {internal.QueryResponse} QueryResponse
         */
        public static from(object: { [k: string]: any }): internal.QueryResponse;

        /**
         * Creates a plain object from a QueryResponse message. Also converts values to other types if specified.
         * @param {internal.QueryResponse} message QueryResponse
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        public static toObject(message: internal.QueryResponse, options?: $protobuf.ConversionOptions): { [k: string]: any };

        /**
         * Creates a plain object from this QueryResponse message. Also converts values to other types if specified.
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

        /**
         * Converts this QueryResponse to JSON.
         * @returns {Object.<string,*>} JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    type QueryResult$Properties = {
        Bitmap?: internal.Bitmap$Properties;
        N?: (number|Long);
        Pairs?: internal.Pair$Properties[];
        Changed?: boolean;
    };

    /**
     * Constructs a new QueryResult.
     * @exports internal.QueryResult
     * @constructor
     * @param {internal.QueryResult$Properties=} [properties] Properties to set
     */
    class QueryResult {

        /**
         * Constructs a new QueryResult.
         * @exports internal.QueryResult
         * @constructor
         * @param {internal.QueryResult$Properties=} [properties] Properties to set
         */
        constructor(properties?: internal.QueryResult$Properties);

        /**
         * QueryResult Bitmap.
         * @type {(internal.Bitmap$Properties|null)}
         */
        public Bitmap: (internal.Bitmap$Properties|null);

        /**
         * QueryResult N.
         * @type {number|Long}
         */
        public N: (number|Long);

        /**
         * QueryResult Pairs.
         * @type {Array.<internal.Pair$Properties>}
         */
        public Pairs: internal.Pair$Properties[];

        /**
         * QueryResult Changed.
         * @type {boolean}
         */
        public Changed: boolean;

        /**
         * Creates a new QueryResult instance using the specified properties.
         * @param {internal.QueryResult$Properties=} [properties] Properties to set
         * @returns {internal.QueryResult} QueryResult instance
         */
        public static create(properties?: internal.QueryResult$Properties): internal.QueryResult;

        /**
         * Encodes the specified QueryResult message. Does not implicitly {@link internal.QueryResult.verify|verify} messages.
         * @param {internal.QueryResult$Properties} message QueryResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        public static encode(message: internal.QueryResult$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified QueryResult message, length delimited. Does not implicitly {@link internal.QueryResult.verify|verify} messages.
         * @param {internal.QueryResult$Properties} message QueryResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        public static encodeDelimited(message: internal.QueryResult$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a QueryResult message from the specified reader or buffer.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {internal.QueryResult} QueryResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): internal.QueryResult;

        /**
         * Decodes a QueryResult message from the specified reader or buffer, length delimited.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {internal.QueryResult} QueryResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): internal.QueryResult;

        /**
         * Verifies a QueryResult message.
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {?string} `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): string;

        /**
         * Creates a QueryResult message from a plain object. Also converts values to their respective internal types.
         * @param {Object.<string,*>} object Plain object
         * @returns {internal.QueryResult} QueryResult
         */
        public static fromObject(object: { [k: string]: any }): internal.QueryResult;

        /**
         * Creates a QueryResult message from a plain object. Also converts values to their respective internal types.
         * This is an alias of {@link internal.QueryResult.fromObject}.
         * @function
         * @param {Object.<string,*>} object Plain object
         * @returns {internal.QueryResult} QueryResult
         */
        public static from(object: { [k: string]: any }): internal.QueryResult;

        /**
         * Creates a plain object from a QueryResult message. Also converts values to other types if specified.
         * @param {internal.QueryResult} message QueryResult
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        public static toObject(message: internal.QueryResult, options?: $protobuf.ConversionOptions): { [k: string]: any };

        /**
         * Creates a plain object from this QueryResult message. Also converts values to other types if specified.
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

        /**
         * Converts this QueryResult to JSON.
         * @returns {Object.<string,*>} JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    type ImportRequest$Properties = {
        DB?: string;
        Frame?: string;
        Slice?: (number|Long);
        BitmapIDs?: (number|Long)[];
        ProfileIDs?: (number|Long)[];
        Timestamps?: (number|Long)[];
    };

    /**
     * Constructs a new ImportRequest.
     * @exports internal.ImportRequest
     * @constructor
     * @param {internal.ImportRequest$Properties=} [properties] Properties to set
     */
    class ImportRequest {

        /**
         * Constructs a new ImportRequest.
         * @exports internal.ImportRequest
         * @constructor
         * @param {internal.ImportRequest$Properties=} [properties] Properties to set
         */
        constructor(properties?: internal.ImportRequest$Properties);

        /**
         * ImportRequest DB.
         * @type {string}
         */
        public DB: string;

        /**
         * ImportRequest Frame.
         * @type {string}
         */
        public Frame: string;

        /**
         * ImportRequest Slice.
         * @type {number|Long}
         */
        public Slice: (number|Long);

        /**
         * ImportRequest BitmapIDs.
         * @type {Array.<number|Long>}
         */
        public BitmapIDs: (number|Long)[];

        /**
         * ImportRequest ProfileIDs.
         * @type {Array.<number|Long>}
         */
        public ProfileIDs: (number|Long)[];

        /**
         * ImportRequest Timestamps.
         * @type {Array.<number|Long>}
         */
        public Timestamps: (number|Long)[];

        /**
         * Creates a new ImportRequest instance using the specified properties.
         * @param {internal.ImportRequest$Properties=} [properties] Properties to set
         * @returns {internal.ImportRequest} ImportRequest instance
         */
        public static create(properties?: internal.ImportRequest$Properties): internal.ImportRequest;

        /**
         * Encodes the specified ImportRequest message. Does not implicitly {@link internal.ImportRequest.verify|verify} messages.
         * @param {internal.ImportRequest$Properties} message ImportRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        public static encode(message: internal.ImportRequest$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ImportRequest message, length delimited. Does not implicitly {@link internal.ImportRequest.verify|verify} messages.
         * @param {internal.ImportRequest$Properties} message ImportRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        public static encodeDelimited(message: internal.ImportRequest$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ImportRequest message from the specified reader or buffer.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {internal.ImportRequest} ImportRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): internal.ImportRequest;

        /**
         * Decodes an ImportRequest message from the specified reader or buffer, length delimited.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {internal.ImportRequest} ImportRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): internal.ImportRequest;

        /**
         * Verifies an ImportRequest message.
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {?string} `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): string;

        /**
         * Creates an ImportRequest message from a plain object. Also converts values to their respective internal types.
         * @param {Object.<string,*>} object Plain object
         * @returns {internal.ImportRequest} ImportRequest
         */
        public static fromObject(object: { [k: string]: any }): internal.ImportRequest;

        /**
         * Creates an ImportRequest message from a plain object. Also converts values to their respective internal types.
         * This is an alias of {@link internal.ImportRequest.fromObject}.
         * @function
         * @param {Object.<string,*>} object Plain object
         * @returns {internal.ImportRequest} ImportRequest
         */
        public static from(object: { [k: string]: any }): internal.ImportRequest;

        /**
         * Creates a plain object from an ImportRequest message. Also converts values to other types if specified.
         * @param {internal.ImportRequest} message ImportRequest
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        public static toObject(message: internal.ImportRequest, options?: $protobuf.ConversionOptions): { [k: string]: any };

        /**
         * Creates a plain object from this ImportRequest message. Also converts values to other types if specified.
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

        /**
         * Converts this ImportRequest to JSON.
         * @returns {Object.<string,*>} JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    type ImportResponse$Properties = {
        Err?: string;
    };

    /**
     * Constructs a new ImportResponse.
     * @exports internal.ImportResponse
     * @constructor
     * @param {internal.ImportResponse$Properties=} [properties] Properties to set
     */
    class ImportResponse {

        /**
         * Constructs a new ImportResponse.
         * @exports internal.ImportResponse
         * @constructor
         * @param {internal.ImportResponse$Properties=} [properties] Properties to set
         */
        constructor(properties?: internal.ImportResponse$Properties);

        /**
         * ImportResponse Err.
         * @type {string}
         */
        public Err: string;

        /**
         * Creates a new ImportResponse instance using the specified properties.
         * @param {internal.ImportResponse$Properties=} [properties] Properties to set
         * @returns {internal.ImportResponse} ImportResponse instance
         */
        public static create(properties?: internal.ImportResponse$Properties): internal.ImportResponse;

        /**
         * Encodes the specified ImportResponse message. Does not implicitly {@link internal.ImportResponse.verify|verify} messages.
         * @param {internal.ImportResponse$Properties} message ImportResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        public static encode(message: internal.ImportResponse$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ImportResponse message, length delimited. Does not implicitly {@link internal.ImportResponse.verify|verify} messages.
         * @param {internal.ImportResponse$Properties} message ImportResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        public static encodeDelimited(message: internal.ImportResponse$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ImportResponse message from the specified reader or buffer.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {internal.ImportResponse} ImportResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): internal.ImportResponse;

        /**
         * Decodes an ImportResponse message from the specified reader or buffer, length delimited.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {internal.ImportResponse} ImportResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): internal.ImportResponse;

        /**
         * Verifies an ImportResponse message.
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {?string} `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): string;

        /**
         * Creates an ImportResponse message from a plain object. Also converts values to their respective internal types.
         * @param {Object.<string,*>} object Plain object
         * @returns {internal.ImportResponse} ImportResponse
         */
        public static fromObject(object: { [k: string]: any }): internal.ImportResponse;

        /**
         * Creates an ImportResponse message from a plain object. Also converts values to their respective internal types.
         * This is an alias of {@link internal.ImportResponse.fromObject}.
         * @function
         * @param {Object.<string,*>} object Plain object
         * @returns {internal.ImportResponse} ImportResponse
         */
        public static from(object: { [k: string]: any }): internal.ImportResponse;

        /**
         * Creates a plain object from an ImportResponse message. Also converts values to other types if specified.
         * @param {internal.ImportResponse} message ImportResponse
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        public static toObject(message: internal.ImportResponse, options?: $protobuf.ConversionOptions): { [k: string]: any };

        /**
         * Creates a plain object from this ImportResponse message. Also converts values to other types if specified.
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

        /**
         * Converts this ImportResponse to JSON.
         * @returns {Object.<string,*>} JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    type BlockDataRequest$Properties = {
        DB?: string;
        Frame?: string;
        Slice?: (number|Long);
        Block?: (number|Long);
    };

    /**
     * Constructs a new BlockDataRequest.
     * @exports internal.BlockDataRequest
     * @constructor
     * @param {internal.BlockDataRequest$Properties=} [properties] Properties to set
     */
    class BlockDataRequest {

        /**
         * Constructs a new BlockDataRequest.
         * @exports internal.BlockDataRequest
         * @constructor
         * @param {internal.BlockDataRequest$Properties=} [properties] Properties to set
         */
        constructor(properties?: internal.BlockDataRequest$Properties);

        /**
         * BlockDataRequest DB.
         * @type {string}
         */
        public DB: string;

        /**
         * BlockDataRequest Frame.
         * @type {string}
         */
        public Frame: string;

        /**
         * BlockDataRequest Slice.
         * @type {number|Long}
         */
        public Slice: (number|Long);

        /**
         * BlockDataRequest Block.
         * @type {number|Long}
         */
        public Block: (number|Long);

        /**
         * Creates a new BlockDataRequest instance using the specified properties.
         * @param {internal.BlockDataRequest$Properties=} [properties] Properties to set
         * @returns {internal.BlockDataRequest} BlockDataRequest instance
         */
        public static create(properties?: internal.BlockDataRequest$Properties): internal.BlockDataRequest;

        /**
         * Encodes the specified BlockDataRequest message. Does not implicitly {@link internal.BlockDataRequest.verify|verify} messages.
         * @param {internal.BlockDataRequest$Properties} message BlockDataRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        public static encode(message: internal.BlockDataRequest$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BlockDataRequest message, length delimited. Does not implicitly {@link internal.BlockDataRequest.verify|verify} messages.
         * @param {internal.BlockDataRequest$Properties} message BlockDataRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        public static encodeDelimited(message: internal.BlockDataRequest$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BlockDataRequest message from the specified reader or buffer.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {internal.BlockDataRequest} BlockDataRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): internal.BlockDataRequest;

        /**
         * Decodes a BlockDataRequest message from the specified reader or buffer, length delimited.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {internal.BlockDataRequest} BlockDataRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): internal.BlockDataRequest;

        /**
         * Verifies a BlockDataRequest message.
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {?string} `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): string;

        /**
         * Creates a BlockDataRequest message from a plain object. Also converts values to their respective internal types.
         * @param {Object.<string,*>} object Plain object
         * @returns {internal.BlockDataRequest} BlockDataRequest
         */
        public static fromObject(object: { [k: string]: any }): internal.BlockDataRequest;

        /**
         * Creates a BlockDataRequest message from a plain object. Also converts values to their respective internal types.
         * This is an alias of {@link internal.BlockDataRequest.fromObject}.
         * @function
         * @param {Object.<string,*>} object Plain object
         * @returns {internal.BlockDataRequest} BlockDataRequest
         */
        public static from(object: { [k: string]: any }): internal.BlockDataRequest;

        /**
         * Creates a plain object from a BlockDataRequest message. Also converts values to other types if specified.
         * @param {internal.BlockDataRequest} message BlockDataRequest
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        public static toObject(message: internal.BlockDataRequest, options?: $protobuf.ConversionOptions): { [k: string]: any };

        /**
         * Creates a plain object from this BlockDataRequest message. Also converts values to other types if specified.
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

        /**
         * Converts this BlockDataRequest to JSON.
         * @returns {Object.<string,*>} JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    type BlockDataResponse$Properties = {
        BitmapIDs?: (number|Long)[];
        ProfileIDs?: (number|Long)[];
    };

    /**
     * Constructs a new BlockDataResponse.
     * @exports internal.BlockDataResponse
     * @constructor
     * @param {internal.BlockDataResponse$Properties=} [properties] Properties to set
     */
    class BlockDataResponse {

        /**
         * Constructs a new BlockDataResponse.
         * @exports internal.BlockDataResponse
         * @constructor
         * @param {internal.BlockDataResponse$Properties=} [properties] Properties to set
         */
        constructor(properties?: internal.BlockDataResponse$Properties);

        /**
         * BlockDataResponse BitmapIDs.
         * @type {Array.<number|Long>}
         */
        public BitmapIDs: (number|Long)[];

        /**
         * BlockDataResponse ProfileIDs.
         * @type {Array.<number|Long>}
         */
        public ProfileIDs: (number|Long)[];

        /**
         * Creates a new BlockDataResponse instance using the specified properties.
         * @param {internal.BlockDataResponse$Properties=} [properties] Properties to set
         * @returns {internal.BlockDataResponse} BlockDataResponse instance
         */
        public static create(properties?: internal.BlockDataResponse$Properties): internal.BlockDataResponse;

        /**
         * Encodes the specified BlockDataResponse message. Does not implicitly {@link internal.BlockDataResponse.verify|verify} messages.
         * @param {internal.BlockDataResponse$Properties} message BlockDataResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        public static encode(message: internal.BlockDataResponse$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BlockDataResponse message, length delimited. Does not implicitly {@link internal.BlockDataResponse.verify|verify} messages.
         * @param {internal.BlockDataResponse$Properties} message BlockDataResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        public static encodeDelimited(message: internal.BlockDataResponse$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BlockDataResponse message from the specified reader or buffer.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {internal.BlockDataResponse} BlockDataResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): internal.BlockDataResponse;

        /**
         * Decodes a BlockDataResponse message from the specified reader or buffer, length delimited.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {internal.BlockDataResponse} BlockDataResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): internal.BlockDataResponse;

        /**
         * Verifies a BlockDataResponse message.
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {?string} `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): string;

        /**
         * Creates a BlockDataResponse message from a plain object. Also converts values to their respective internal types.
         * @param {Object.<string,*>} object Plain object
         * @returns {internal.BlockDataResponse} BlockDataResponse
         */
        public static fromObject(object: { [k: string]: any }): internal.BlockDataResponse;

        /**
         * Creates a BlockDataResponse message from a plain object. Also converts values to their respective internal types.
         * This is an alias of {@link internal.BlockDataResponse.fromObject}.
         * @function
         * @param {Object.<string,*>} object Plain object
         * @returns {internal.BlockDataResponse} BlockDataResponse
         */
        public static from(object: { [k: string]: any }): internal.BlockDataResponse;

        /**
         * Creates a plain object from a BlockDataResponse message. Also converts values to other types if specified.
         * @param {internal.BlockDataResponse} message BlockDataResponse
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        public static toObject(message: internal.BlockDataResponse, options?: $protobuf.ConversionOptions): { [k: string]: any };

        /**
         * Creates a plain object from this BlockDataResponse message. Also converts values to other types if specified.
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

        /**
         * Converts this BlockDataResponse to JSON.
         * @returns {Object.<string,*>} JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    type Cache$Properties = {
        BitmapIDs?: (number|Long)[];
    };

    /**
     * Constructs a new Cache.
     * @exports internal.Cache
     * @constructor
     * @param {internal.Cache$Properties=} [properties] Properties to set
     */
    class Cache {

        /**
         * Constructs a new Cache.
         * @exports internal.Cache
         * @constructor
         * @param {internal.Cache$Properties=} [properties] Properties to set
         */
        constructor(properties?: internal.Cache$Properties);

        /**
         * Cache BitmapIDs.
         * @type {Array.<number|Long>}
         */
        public BitmapIDs: (number|Long)[];

        /**
         * Creates a new Cache instance using the specified properties.
         * @param {internal.Cache$Properties=} [properties] Properties to set
         * @returns {internal.Cache} Cache instance
         */
        public static create(properties?: internal.Cache$Properties): internal.Cache;

        /**
         * Encodes the specified Cache message. Does not implicitly {@link internal.Cache.verify|verify} messages.
         * @param {internal.Cache$Properties} message Cache message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        public static encode(message: internal.Cache$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Cache message, length delimited. Does not implicitly {@link internal.Cache.verify|verify} messages.
         * @param {internal.Cache$Properties} message Cache message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        public static encodeDelimited(message: internal.Cache$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Cache message from the specified reader or buffer.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {internal.Cache} Cache
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): internal.Cache;

        /**
         * Decodes a Cache message from the specified reader or buffer, length delimited.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {internal.Cache} Cache
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): internal.Cache;

        /**
         * Verifies a Cache message.
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {?string} `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): string;

        /**
         * Creates a Cache message from a plain object. Also converts values to their respective internal types.
         * @param {Object.<string,*>} object Plain object
         * @returns {internal.Cache} Cache
         */
        public static fromObject(object: { [k: string]: any }): internal.Cache;

        /**
         * Creates a Cache message from a plain object. Also converts values to their respective internal types.
         * This is an alias of {@link internal.Cache.fromObject}.
         * @function
         * @param {Object.<string,*>} object Plain object
         * @returns {internal.Cache} Cache
         */
        public static from(object: { [k: string]: any }): internal.Cache;

        /**
         * Creates a plain object from a Cache message. Also converts values to other types if specified.
         * @param {internal.Cache} message Cache
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        public static toObject(message: internal.Cache, options?: $protobuf.ConversionOptions): { [k: string]: any };

        /**
         * Creates a plain object from this Cache message. Also converts values to other types if specified.
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

        /**
         * Converts this Cache to JSON.
         * @returns {Object.<string,*>} JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    type MaxSlicesResponse$Properties = {
        MaxSlices?: { [k: string]: (number|Long) };
    };

    /**
     * Constructs a new MaxSlicesResponse.
     * @exports internal.MaxSlicesResponse
     * @constructor
     * @param {internal.MaxSlicesResponse$Properties=} [properties] Properties to set
     */
    class MaxSlicesResponse {

        /**
         * Constructs a new MaxSlicesResponse.
         * @exports internal.MaxSlicesResponse
         * @constructor
         * @param {internal.MaxSlicesResponse$Properties=} [properties] Properties to set
         */
        constructor(properties?: internal.MaxSlicesResponse$Properties);

        /**
         * MaxSlicesResponse MaxSlices.
         * @type {Object.<string,number|Long>}
         */
        public MaxSlices: { [k: string]: (number|Long) };

        /**
         * Creates a new MaxSlicesResponse instance using the specified properties.
         * @param {internal.MaxSlicesResponse$Properties=} [properties] Properties to set
         * @returns {internal.MaxSlicesResponse} MaxSlicesResponse instance
         */
        public static create(properties?: internal.MaxSlicesResponse$Properties): internal.MaxSlicesResponse;

        /**
         * Encodes the specified MaxSlicesResponse message. Does not implicitly {@link internal.MaxSlicesResponse.verify|verify} messages.
         * @param {internal.MaxSlicesResponse$Properties} message MaxSlicesResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        public static encode(message: internal.MaxSlicesResponse$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MaxSlicesResponse message, length delimited. Does not implicitly {@link internal.MaxSlicesResponse.verify|verify} messages.
         * @param {internal.MaxSlicesResponse$Properties} message MaxSlicesResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        public static encodeDelimited(message: internal.MaxSlicesResponse$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MaxSlicesResponse message from the specified reader or buffer.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {internal.MaxSlicesResponse} MaxSlicesResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): internal.MaxSlicesResponse;

        /**
         * Decodes a MaxSlicesResponse message from the specified reader or buffer, length delimited.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {internal.MaxSlicesResponse} MaxSlicesResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): internal.MaxSlicesResponse;

        /**
         * Verifies a MaxSlicesResponse message.
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {?string} `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): string;

        /**
         * Creates a MaxSlicesResponse message from a plain object. Also converts values to their respective internal types.
         * @param {Object.<string,*>} object Plain object
         * @returns {internal.MaxSlicesResponse} MaxSlicesResponse
         */
        public static fromObject(object: { [k: string]: any }): internal.MaxSlicesResponse;

        /**
         * Creates a MaxSlicesResponse message from a plain object. Also converts values to their respective internal types.
         * This is an alias of {@link internal.MaxSlicesResponse.fromObject}.
         * @function
         * @param {Object.<string,*>} object Plain object
         * @returns {internal.MaxSlicesResponse} MaxSlicesResponse
         */
        public static from(object: { [k: string]: any }): internal.MaxSlicesResponse;

        /**
         * Creates a plain object from a MaxSlicesResponse message. Also converts values to other types if specified.
         * @param {internal.MaxSlicesResponse} message MaxSlicesResponse
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        public static toObject(message: internal.MaxSlicesResponse, options?: $protobuf.ConversionOptions): { [k: string]: any };

        /**
         * Creates a plain object from this MaxSlicesResponse message. Also converts values to other types if specified.
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

        /**
         * Converts this MaxSlicesResponse to JSON.
         * @returns {Object.<string,*>} JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
