import * as $protobuf from "protobufjs";

/**
 * Namespace internal.
 * @exports internal
 * @namespace
 */
export namespace internal {

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
        RowID?: (number|Long);
        ColumnID?: (number|Long);
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
         * Bit RowID.
         * @type {number|Long}
         */
        public RowID: (number|Long);

        /**
         * Bit ColumnID.
         * @type {number|Long}
         */
        public ColumnID: (number|Long);

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

    type ColumnAttrSet$Properties = {
        ID?: (number|Long);
        Attrs?: internal.Attr$Properties[];
    };

    /**
     * Constructs a new ColumnAttrSet.
     * @exports internal.ColumnAttrSet
     * @constructor
     * @param {internal.ColumnAttrSet$Properties=} [properties] Properties to set
     */
    class ColumnAttrSet {

        /**
         * Constructs a new ColumnAttrSet.
         * @exports internal.ColumnAttrSet
         * @constructor
         * @param {internal.ColumnAttrSet$Properties=} [properties] Properties to set
         */
        constructor(properties?: internal.ColumnAttrSet$Properties);

        /**
         * ColumnAttrSet ID.
         * @type {number|Long}
         */
        public ID: (number|Long);

        /**
         * ColumnAttrSet Attrs.
         * @type {Array.<internal.Attr$Properties>}
         */
        public Attrs: internal.Attr$Properties[];

        /**
         * Creates a new ColumnAttrSet instance using the specified properties.
         * @param {internal.ColumnAttrSet$Properties=} [properties] Properties to set
         * @returns {internal.ColumnAttrSet} ColumnAttrSet instance
         */
        public static create(properties?: internal.ColumnAttrSet$Properties): internal.ColumnAttrSet;

        /**
         * Encodes the specified ColumnAttrSet message. Does not implicitly {@link internal.ColumnAttrSet.verify|verify} messages.
         * @param {internal.ColumnAttrSet$Properties} message ColumnAttrSet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        public static encode(message: internal.ColumnAttrSet$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ColumnAttrSet message, length delimited. Does not implicitly {@link internal.ColumnAttrSet.verify|verify} messages.
         * @param {internal.ColumnAttrSet$Properties} message ColumnAttrSet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        public static encodeDelimited(message: internal.ColumnAttrSet$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ColumnAttrSet message from the specified reader or buffer.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {internal.ColumnAttrSet} ColumnAttrSet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): internal.ColumnAttrSet;

        /**
         * Decodes a ColumnAttrSet message from the specified reader or buffer, length delimited.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {internal.ColumnAttrSet} ColumnAttrSet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): internal.ColumnAttrSet;

        /**
         * Verifies a ColumnAttrSet message.
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {?string} `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): string;

        /**
         * Creates a ColumnAttrSet message from a plain object. Also converts values to their respective internal types.
         * @param {Object.<string,*>} object Plain object
         * @returns {internal.ColumnAttrSet} ColumnAttrSet
         */
        public static fromObject(object: { [k: string]: any }): internal.ColumnAttrSet;

        /**
         * Creates a ColumnAttrSet message from a plain object. Also converts values to their respective internal types.
         * This is an alias of {@link internal.ColumnAttrSet.fromObject}.
         * @function
         * @param {Object.<string,*>} object Plain object
         * @returns {internal.ColumnAttrSet} ColumnAttrSet
         */
        public static from(object: { [k: string]: any }): internal.ColumnAttrSet;

        /**
         * Creates a plain object from a ColumnAttrSet message. Also converts values to other types if specified.
         * @param {internal.ColumnAttrSet} message ColumnAttrSet
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        public static toObject(message: internal.ColumnAttrSet, options?: $protobuf.ConversionOptions): { [k: string]: any };

        /**
         * Creates a plain object from this ColumnAttrSet message. Also converts values to other types if specified.
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

        /**
         * Converts this ColumnAttrSet to JSON.
         * @returns {Object.<string,*>} JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    type Attr$Properties = {
        Key?: string;
        Type?: (number|Long);
        StringValue?: string;
        IntValue?: (number|Long);
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
         * Attr IntValue.
         * @type {number|Long}
         */
        public IntValue: (number|Long);

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
        Query?: string;
        Slices?: (number|Long)[];
        ColumnAttrs?: boolean;
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
         * QueryRequest ColumnAttrs.
         * @type {boolean}
         */
        public ColumnAttrs: boolean;

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
        ColumnAttrSets?: internal.ColumnAttrSet$Properties[];
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
         * QueryResponse ColumnAttrSets.
         * @type {Array.<internal.ColumnAttrSet$Properties>}
         */
        public ColumnAttrSets: internal.ColumnAttrSet$Properties[];

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
        Index?: string;
        Frame?: string;
        Slice?: (number|Long);
        RowIDs?: (number|Long)[];
        ColumnIDs?: (number|Long)[];
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
         * ImportRequest Index.
         * @type {string}
         */
        public Index: string;

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
         * ImportRequest RowIDs.
         * @type {Array.<number|Long>}
         */
        public RowIDs: (number|Long)[];

        /**
         * ImportRequest ColumnIDs.
         * @type {Array.<number|Long>}
         */
        public ColumnIDs: (number|Long)[];

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
}
