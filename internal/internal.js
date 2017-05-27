/*eslint-disable block-scoped-var, no-redeclare, no-control-regex, no-prototype-builtins*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.internal = (function() {

    /**
     * Namespace internal.
     * @exports internal
     * @namespace
     */
    var internal = {};

    internal.Bitmap = (function() {

        /**
         * Properties of a Bitmap.
         * @typedef internal.Bitmap$Properties
         * @type {Object}
         * @property {Array.<number|Long>} [Bits] Bitmap Bits.
         * @property {Array.<internal.Attr$Properties>} [Attrs] Bitmap Attrs.
         */

        /**
         * Constructs a new Bitmap.
         * @exports internal.Bitmap
         * @constructor
         * @param {internal.Bitmap$Properties=} [properties] Properties to set
         */
        function Bitmap(properties) {
            this.Bits = [];
            this.Attrs = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Bitmap Bits.
         * @type {Array.<number|Long>}
         */
        Bitmap.prototype.Bits = $util.emptyArray;

        /**
         * Bitmap Attrs.
         * @type {Array.<internal.Attr$Properties>}
         */
        Bitmap.prototype.Attrs = $util.emptyArray;

        /**
         * Creates a new Bitmap instance using the specified properties.
         * @param {internal.Bitmap$Properties=} [properties] Properties to set
         * @returns {internal.Bitmap} Bitmap instance
         */
        Bitmap.create = function create(properties) {
            return new Bitmap(properties);
        };

        /**
         * Encodes the specified Bitmap message. Does not implicitly {@link internal.Bitmap.verify|verify} messages.
         * @param {internal.Bitmap$Properties} message Bitmap message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Bitmap.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Bits != null && message.Bits.length) {
                writer.uint32(/* id 1, wireType 2 =*/10).fork();
                for (var i = 0; i < message.Bits.length; ++i)
                    writer.uint64(message.Bits[i]);
                writer.ldelim();
            }
            if (message.Attrs != null && message.Attrs.length)
                for (var i = 0; i < message.Attrs.length; ++i)
                    $root.internal.Attr.encode(message.Attrs[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Bitmap message, length delimited. Does not implicitly {@link internal.Bitmap.verify|verify} messages.
         * @param {internal.Bitmap$Properties} message Bitmap message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Bitmap.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Bitmap message from the specified reader or buffer.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {internal.Bitmap} Bitmap
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Bitmap.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.internal.Bitmap();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.Bits && message.Bits.length))
                        message.Bits = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.Bits.push(reader.uint64());
                    } else
                        message.Bits.push(reader.uint64());
                    break;
                case 2:
                    if (!(message.Attrs && message.Attrs.length))
                        message.Attrs = [];
                    message.Attrs.push($root.internal.Attr.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Bitmap message from the specified reader or buffer, length delimited.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {internal.Bitmap} Bitmap
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Bitmap.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Bitmap message.
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {?string} `null` if valid, otherwise the reason why it is not
         */
        Bitmap.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Bits != null && message.hasOwnProperty("Bits")) {
                if (!Array.isArray(message.Bits))
                    return "Bits: array expected";
                for (var i = 0; i < message.Bits.length; ++i)
                    if (!$util.isInteger(message.Bits[i]) && !(message.Bits[i] && $util.isInteger(message.Bits[i].low) && $util.isInteger(message.Bits[i].high)))
                        return "Bits: integer|Long[] expected";
            }
            if (message.Attrs != null && message.hasOwnProperty("Attrs")) {
                if (!Array.isArray(message.Attrs))
                    return "Attrs: array expected";
                for (var i = 0; i < message.Attrs.length; ++i) {
                    var error = $root.internal.Attr.verify(message.Attrs[i]);
                    if (error)
                        return "Attrs." + error;
                }
            }
            return null;
        };

        /**
         * Creates a Bitmap message from a plain object. Also converts values to their respective internal types.
         * @param {Object.<string,*>} object Plain object
         * @returns {internal.Bitmap} Bitmap
         */
        Bitmap.fromObject = function fromObject(object) {
            if (object instanceof $root.internal.Bitmap)
                return object;
            var message = new $root.internal.Bitmap();
            if (object.Bits) {
                if (!Array.isArray(object.Bits))
                    throw TypeError(".internal.Bitmap.Bits: array expected");
                message.Bits = [];
                for (var i = 0; i < object.Bits.length; ++i)
                    if ($util.Long)
                        (message.Bits[i] = $util.Long.fromValue(object.Bits[i])).unsigned = true;
                    else if (typeof object.Bits[i] === "string")
                        message.Bits[i] = parseInt(object.Bits[i], 10);
                    else if (typeof object.Bits[i] === "number")
                        message.Bits[i] = object.Bits[i];
                    else if (typeof object.Bits[i] === "object")
                        message.Bits[i] = new $util.LongBits(object.Bits[i].low >>> 0, object.Bits[i].high >>> 0).toNumber(true);
            }
            if (object.Attrs) {
                if (!Array.isArray(object.Attrs))
                    throw TypeError(".internal.Bitmap.Attrs: array expected");
                message.Attrs = [];
                for (var i = 0; i < object.Attrs.length; ++i) {
                    if (typeof object.Attrs[i] !== "object")
                        throw TypeError(".internal.Bitmap.Attrs: object expected");
                    message.Attrs[i] = $root.internal.Attr.fromObject(object.Attrs[i]);
                }
            }
            return message;
        };

        /**
         * Creates a Bitmap message from a plain object. Also converts values to their respective internal types.
         * This is an alias of {@link internal.Bitmap.fromObject}.
         * @function
         * @param {Object.<string,*>} object Plain object
         * @returns {internal.Bitmap} Bitmap
         */
        Bitmap.from = Bitmap.fromObject;

        /**
         * Creates a plain object from a Bitmap message. Also converts values to other types if specified.
         * @param {internal.Bitmap} message Bitmap
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Bitmap.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.Bits = [];
                object.Attrs = [];
            }
            if (message.Bits && message.Bits.length) {
                object.Bits = [];
                for (var j = 0; j < message.Bits.length; ++j)
                    if (typeof message.Bits[j] === "number")
                        object.Bits[j] = options.longs === String ? String(message.Bits[j]) : message.Bits[j];
                    else
                        object.Bits[j] = options.longs === String ? $util.Long.prototype.toString.call(message.Bits[j]) : options.longs === Number ? new $util.LongBits(message.Bits[j].low >>> 0, message.Bits[j].high >>> 0).toNumber(true) : message.Bits[j];
            }
            if (message.Attrs && message.Attrs.length) {
                object.Attrs = [];
                for (var j = 0; j < message.Attrs.length; ++j)
                    object.Attrs[j] = $root.internal.Attr.toObject(message.Attrs[j], options);
            }
            return object;
        };

        /**
         * Creates a plain object from this Bitmap message. Also converts values to other types if specified.
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Bitmap.prototype.toObject = function toObject(options) {
            return this.constructor.toObject(this, options);
        };

        /**
         * Converts this Bitmap to JSON.
         * @returns {Object.<string,*>} JSON object
         */
        Bitmap.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Bitmap;
    })();

    internal.Pair = (function() {

        /**
         * Properties of a Pair.
         * @typedef internal.Pair$Properties
         * @type {Object}
         * @property {number|Long} [Key] Pair Key.
         * @property {number|Long} [Count] Pair Count.
         */

        /**
         * Constructs a new Pair.
         * @exports internal.Pair
         * @constructor
         * @param {internal.Pair$Properties=} [properties] Properties to set
         */
        function Pair(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Pair Key.
         * @type {number|Long}
         */
        Pair.prototype.Key = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Pair Count.
         * @type {number|Long}
         */
        Pair.prototype.Count = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new Pair instance using the specified properties.
         * @param {internal.Pair$Properties=} [properties] Properties to set
         * @returns {internal.Pair} Pair instance
         */
        Pair.create = function create(properties) {
            return new Pair(properties);
        };

        /**
         * Encodes the specified Pair message. Does not implicitly {@link internal.Pair.verify|verify} messages.
         * @param {internal.Pair$Properties} message Pair message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Pair.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Key != null && message.hasOwnProperty("Key"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.Key);
            if (message.Count != null && message.hasOwnProperty("Count"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.Count);
            return writer;
        };

        /**
         * Encodes the specified Pair message, length delimited. Does not implicitly {@link internal.Pair.verify|verify} messages.
         * @param {internal.Pair$Properties} message Pair message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Pair.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Pair message from the specified reader or buffer.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {internal.Pair} Pair
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Pair.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.internal.Pair();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Key = reader.uint64();
                    break;
                case 2:
                    message.Count = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Pair message from the specified reader or buffer, length delimited.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {internal.Pair} Pair
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Pair.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Pair message.
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {?string} `null` if valid, otherwise the reason why it is not
         */
        Pair.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Key != null && message.hasOwnProperty("Key"))
                if (!$util.isInteger(message.Key) && !(message.Key && $util.isInteger(message.Key.low) && $util.isInteger(message.Key.high)))
                    return "Key: integer|Long expected";
            if (message.Count != null && message.hasOwnProperty("Count"))
                if (!$util.isInteger(message.Count) && !(message.Count && $util.isInteger(message.Count.low) && $util.isInteger(message.Count.high)))
                    return "Count: integer|Long expected";
            return null;
        };

        /**
         * Creates a Pair message from a plain object. Also converts values to their respective internal types.
         * @param {Object.<string,*>} object Plain object
         * @returns {internal.Pair} Pair
         */
        Pair.fromObject = function fromObject(object) {
            if (object instanceof $root.internal.Pair)
                return object;
            var message = new $root.internal.Pair();
            if (object.Key != null)
                if ($util.Long)
                    (message.Key = $util.Long.fromValue(object.Key)).unsigned = true;
                else if (typeof object.Key === "string")
                    message.Key = parseInt(object.Key, 10);
                else if (typeof object.Key === "number")
                    message.Key = object.Key;
                else if (typeof object.Key === "object")
                    message.Key = new $util.LongBits(object.Key.low >>> 0, object.Key.high >>> 0).toNumber(true);
            if (object.Count != null)
                if ($util.Long)
                    (message.Count = $util.Long.fromValue(object.Count)).unsigned = true;
                else if (typeof object.Count === "string")
                    message.Count = parseInt(object.Count, 10);
                else if (typeof object.Count === "number")
                    message.Count = object.Count;
                else if (typeof object.Count === "object")
                    message.Count = new $util.LongBits(object.Count.low >>> 0, object.Count.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a Pair message from a plain object. Also converts values to their respective internal types.
         * This is an alias of {@link internal.Pair.fromObject}.
         * @function
         * @param {Object.<string,*>} object Plain object
         * @returns {internal.Pair} Pair
         */
        Pair.from = Pair.fromObject;

        /**
         * Creates a plain object from a Pair message. Also converts values to other types if specified.
         * @param {internal.Pair} message Pair
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Pair.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.Key = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Key = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.Count = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Count = options.longs === String ? "0" : 0;
            }
            if (message.Key != null && message.hasOwnProperty("Key"))
                if (typeof message.Key === "number")
                    object.Key = options.longs === String ? String(message.Key) : message.Key;
                else
                    object.Key = options.longs === String ? $util.Long.prototype.toString.call(message.Key) : options.longs === Number ? new $util.LongBits(message.Key.low >>> 0, message.Key.high >>> 0).toNumber(true) : message.Key;
            if (message.Count != null && message.hasOwnProperty("Count"))
                if (typeof message.Count === "number")
                    object.Count = options.longs === String ? String(message.Count) : message.Count;
                else
                    object.Count = options.longs === String ? $util.Long.prototype.toString.call(message.Count) : options.longs === Number ? new $util.LongBits(message.Count.low >>> 0, message.Count.high >>> 0).toNumber(true) : message.Count;
            return object;
        };

        /**
         * Creates a plain object from this Pair message. Also converts values to other types if specified.
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Pair.prototype.toObject = function toObject(options) {
            return this.constructor.toObject(this, options);
        };

        /**
         * Converts this Pair to JSON.
         * @returns {Object.<string,*>} JSON object
         */
        Pair.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Pair;
    })();

    internal.Bit = (function() {

        /**
         * Properties of a Bit.
         * @typedef internal.Bit$Properties
         * @type {Object}
         * @property {number|Long} [RowID] Bit RowID.
         * @property {number|Long} [ColumnID] Bit ColumnID.
         * @property {number|Long} [Timestamp] Bit Timestamp.
         */

        /**
         * Constructs a new Bit.
         * @exports internal.Bit
         * @constructor
         * @param {internal.Bit$Properties=} [properties] Properties to set
         */
        function Bit(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Bit RowID.
         * @type {number|Long}
         */
        Bit.prototype.RowID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Bit ColumnID.
         * @type {number|Long}
         */
        Bit.prototype.ColumnID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Bit Timestamp.
         * @type {number|Long}
         */
        Bit.prototype.Timestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new Bit instance using the specified properties.
         * @param {internal.Bit$Properties=} [properties] Properties to set
         * @returns {internal.Bit} Bit instance
         */
        Bit.create = function create(properties) {
            return new Bit(properties);
        };

        /**
         * Encodes the specified Bit message. Does not implicitly {@link internal.Bit.verify|verify} messages.
         * @param {internal.Bit$Properties} message Bit message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Bit.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.RowID != null && message.hasOwnProperty("RowID"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.RowID);
            if (message.ColumnID != null && message.hasOwnProperty("ColumnID"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.ColumnID);
            if (message.Timestamp != null && message.hasOwnProperty("Timestamp"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.Timestamp);
            return writer;
        };

        /**
         * Encodes the specified Bit message, length delimited. Does not implicitly {@link internal.Bit.verify|verify} messages.
         * @param {internal.Bit$Properties} message Bit message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Bit.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Bit message from the specified reader or buffer.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {internal.Bit} Bit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Bit.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.internal.Bit();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.RowID = reader.uint64();
                    break;
                case 2:
                    message.ColumnID = reader.uint64();
                    break;
                case 3:
                    message.Timestamp = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Bit message from the specified reader or buffer, length delimited.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {internal.Bit} Bit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Bit.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Bit message.
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {?string} `null` if valid, otherwise the reason why it is not
         */
        Bit.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.RowID != null && message.hasOwnProperty("RowID"))
                if (!$util.isInteger(message.RowID) && !(message.RowID && $util.isInteger(message.RowID.low) && $util.isInteger(message.RowID.high)))
                    return "RowID: integer|Long expected";
            if (message.ColumnID != null && message.hasOwnProperty("ColumnID"))
                if (!$util.isInteger(message.ColumnID) && !(message.ColumnID && $util.isInteger(message.ColumnID.low) && $util.isInteger(message.ColumnID.high)))
                    return "ColumnID: integer|Long expected";
            if (message.Timestamp != null && message.hasOwnProperty("Timestamp"))
                if (!$util.isInteger(message.Timestamp) && !(message.Timestamp && $util.isInteger(message.Timestamp.low) && $util.isInteger(message.Timestamp.high)))
                    return "Timestamp: integer|Long expected";
            return null;
        };

        /**
         * Creates a Bit message from a plain object. Also converts values to their respective internal types.
         * @param {Object.<string,*>} object Plain object
         * @returns {internal.Bit} Bit
         */
        Bit.fromObject = function fromObject(object) {
            if (object instanceof $root.internal.Bit)
                return object;
            var message = new $root.internal.Bit();
            if (object.RowID != null)
                if ($util.Long)
                    (message.RowID = $util.Long.fromValue(object.RowID)).unsigned = true;
                else if (typeof object.RowID === "string")
                    message.RowID = parseInt(object.RowID, 10);
                else if (typeof object.RowID === "number")
                    message.RowID = object.RowID;
                else if (typeof object.RowID === "object")
                    message.RowID = new $util.LongBits(object.RowID.low >>> 0, object.RowID.high >>> 0).toNumber(true);
            if (object.ColumnID != null)
                if ($util.Long)
                    (message.ColumnID = $util.Long.fromValue(object.ColumnID)).unsigned = true;
                else if (typeof object.ColumnID === "string")
                    message.ColumnID = parseInt(object.ColumnID, 10);
                else if (typeof object.ColumnID === "number")
                    message.ColumnID = object.ColumnID;
                else if (typeof object.ColumnID === "object")
                    message.ColumnID = new $util.LongBits(object.ColumnID.low >>> 0, object.ColumnID.high >>> 0).toNumber(true);
            if (object.Timestamp != null)
                if ($util.Long)
                    (message.Timestamp = $util.Long.fromValue(object.Timestamp)).unsigned = false;
                else if (typeof object.Timestamp === "string")
                    message.Timestamp = parseInt(object.Timestamp, 10);
                else if (typeof object.Timestamp === "number")
                    message.Timestamp = object.Timestamp;
                else if (typeof object.Timestamp === "object")
                    message.Timestamp = new $util.LongBits(object.Timestamp.low >>> 0, object.Timestamp.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a Bit message from a plain object. Also converts values to their respective internal types.
         * This is an alias of {@link internal.Bit.fromObject}.
         * @function
         * @param {Object.<string,*>} object Plain object
         * @returns {internal.Bit} Bit
         */
        Bit.from = Bit.fromObject;

        /**
         * Creates a plain object from a Bit message. Also converts values to other types if specified.
         * @param {internal.Bit} message Bit
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Bit.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.RowID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.RowID = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.ColumnID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.ColumnID = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.Timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Timestamp = options.longs === String ? "0" : 0;
            }
            if (message.RowID != null && message.hasOwnProperty("RowID"))
                if (typeof message.RowID === "number")
                    object.RowID = options.longs === String ? String(message.RowID) : message.RowID;
                else
                    object.RowID = options.longs === String ? $util.Long.prototype.toString.call(message.RowID) : options.longs === Number ? new $util.LongBits(message.RowID.low >>> 0, message.RowID.high >>> 0).toNumber(true) : message.RowID;
            if (message.ColumnID != null && message.hasOwnProperty("ColumnID"))
                if (typeof message.ColumnID === "number")
                    object.ColumnID = options.longs === String ? String(message.ColumnID) : message.ColumnID;
                else
                    object.ColumnID = options.longs === String ? $util.Long.prototype.toString.call(message.ColumnID) : options.longs === Number ? new $util.LongBits(message.ColumnID.low >>> 0, message.ColumnID.high >>> 0).toNumber(true) : message.ColumnID;
            if (message.Timestamp != null && message.hasOwnProperty("Timestamp"))
                if (typeof message.Timestamp === "number")
                    object.Timestamp = options.longs === String ? String(message.Timestamp) : message.Timestamp;
                else
                    object.Timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.Timestamp) : options.longs === Number ? new $util.LongBits(message.Timestamp.low >>> 0, message.Timestamp.high >>> 0).toNumber() : message.Timestamp;
            return object;
        };

        /**
         * Creates a plain object from this Bit message. Also converts values to other types if specified.
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Bit.prototype.toObject = function toObject(options) {
            return this.constructor.toObject(this, options);
        };

        /**
         * Converts this Bit to JSON.
         * @returns {Object.<string,*>} JSON object
         */
        Bit.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Bit;
    })();

    internal.ColumnAttrSet = (function() {

        /**
         * Properties of a ColumnAttrSet.
         * @typedef internal.ColumnAttrSet$Properties
         * @type {Object}
         * @property {number|Long} [ID] ColumnAttrSet ID.
         * @property {Array.<internal.Attr$Properties>} [Attrs] ColumnAttrSet Attrs.
         */

        /**
         * Constructs a new ColumnAttrSet.
         * @exports internal.ColumnAttrSet
         * @constructor
         * @param {internal.ColumnAttrSet$Properties=} [properties] Properties to set
         */
        function ColumnAttrSet(properties) {
            this.Attrs = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ColumnAttrSet ID.
         * @type {number|Long}
         */
        ColumnAttrSet.prototype.ID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * ColumnAttrSet Attrs.
         * @type {Array.<internal.Attr$Properties>}
         */
        ColumnAttrSet.prototype.Attrs = $util.emptyArray;

        /**
         * Creates a new ColumnAttrSet instance using the specified properties.
         * @param {internal.ColumnAttrSet$Properties=} [properties] Properties to set
         * @returns {internal.ColumnAttrSet} ColumnAttrSet instance
         */
        ColumnAttrSet.create = function create(properties) {
            return new ColumnAttrSet(properties);
        };

        /**
         * Encodes the specified ColumnAttrSet message. Does not implicitly {@link internal.ColumnAttrSet.verify|verify} messages.
         * @param {internal.ColumnAttrSet$Properties} message ColumnAttrSet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ColumnAttrSet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ID != null && message.hasOwnProperty("ID"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.ID);
            if (message.Attrs != null && message.Attrs.length)
                for (var i = 0; i < message.Attrs.length; ++i)
                    $root.internal.Attr.encode(message.Attrs[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ColumnAttrSet message, length delimited. Does not implicitly {@link internal.ColumnAttrSet.verify|verify} messages.
         * @param {internal.ColumnAttrSet$Properties} message ColumnAttrSet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ColumnAttrSet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ColumnAttrSet message from the specified reader or buffer.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {internal.ColumnAttrSet} ColumnAttrSet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ColumnAttrSet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.internal.ColumnAttrSet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ID = reader.uint64();
                    break;
                case 2:
                    if (!(message.Attrs && message.Attrs.length))
                        message.Attrs = [];
                    message.Attrs.push($root.internal.Attr.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ColumnAttrSet message from the specified reader or buffer, length delimited.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {internal.ColumnAttrSet} ColumnAttrSet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ColumnAttrSet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ColumnAttrSet message.
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {?string} `null` if valid, otherwise the reason why it is not
         */
        ColumnAttrSet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ID != null && message.hasOwnProperty("ID"))
                if (!$util.isInteger(message.ID) && !(message.ID && $util.isInteger(message.ID.low) && $util.isInteger(message.ID.high)))
                    return "ID: integer|Long expected";
            if (message.Attrs != null && message.hasOwnProperty("Attrs")) {
                if (!Array.isArray(message.Attrs))
                    return "Attrs: array expected";
                for (var i = 0; i < message.Attrs.length; ++i) {
                    var error = $root.internal.Attr.verify(message.Attrs[i]);
                    if (error)
                        return "Attrs." + error;
                }
            }
            return null;
        };

        /**
         * Creates a ColumnAttrSet message from a plain object. Also converts values to their respective internal types.
         * @param {Object.<string,*>} object Plain object
         * @returns {internal.ColumnAttrSet} ColumnAttrSet
         */
        ColumnAttrSet.fromObject = function fromObject(object) {
            if (object instanceof $root.internal.ColumnAttrSet)
                return object;
            var message = new $root.internal.ColumnAttrSet();
            if (object.ID != null)
                if ($util.Long)
                    (message.ID = $util.Long.fromValue(object.ID)).unsigned = true;
                else if (typeof object.ID === "string")
                    message.ID = parseInt(object.ID, 10);
                else if (typeof object.ID === "number")
                    message.ID = object.ID;
                else if (typeof object.ID === "object")
                    message.ID = new $util.LongBits(object.ID.low >>> 0, object.ID.high >>> 0).toNumber(true);
            if (object.Attrs) {
                if (!Array.isArray(object.Attrs))
                    throw TypeError(".internal.ColumnAttrSet.Attrs: array expected");
                message.Attrs = [];
                for (var i = 0; i < object.Attrs.length; ++i) {
                    if (typeof object.Attrs[i] !== "object")
                        throw TypeError(".internal.ColumnAttrSet.Attrs: object expected");
                    message.Attrs[i] = $root.internal.Attr.fromObject(object.Attrs[i]);
                }
            }
            return message;
        };

        /**
         * Creates a ColumnAttrSet message from a plain object. Also converts values to their respective internal types.
         * This is an alias of {@link internal.ColumnAttrSet.fromObject}.
         * @function
         * @param {Object.<string,*>} object Plain object
         * @returns {internal.ColumnAttrSet} ColumnAttrSet
         */
        ColumnAttrSet.from = ColumnAttrSet.fromObject;

        /**
         * Creates a plain object from a ColumnAttrSet message. Also converts values to other types if specified.
         * @param {internal.ColumnAttrSet} message ColumnAttrSet
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ColumnAttrSet.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.Attrs = [];
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.ID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.ID = options.longs === String ? "0" : 0;
            if (message.ID != null && message.hasOwnProperty("ID"))
                if (typeof message.ID === "number")
                    object.ID = options.longs === String ? String(message.ID) : message.ID;
                else
                    object.ID = options.longs === String ? $util.Long.prototype.toString.call(message.ID) : options.longs === Number ? new $util.LongBits(message.ID.low >>> 0, message.ID.high >>> 0).toNumber(true) : message.ID;
            if (message.Attrs && message.Attrs.length) {
                object.Attrs = [];
                for (var j = 0; j < message.Attrs.length; ++j)
                    object.Attrs[j] = $root.internal.Attr.toObject(message.Attrs[j], options);
            }
            return object;
        };

        /**
         * Creates a plain object from this ColumnAttrSet message. Also converts values to other types if specified.
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ColumnAttrSet.prototype.toObject = function toObject(options) {
            return this.constructor.toObject(this, options);
        };

        /**
         * Converts this ColumnAttrSet to JSON.
         * @returns {Object.<string,*>} JSON object
         */
        ColumnAttrSet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ColumnAttrSet;
    })();

    internal.Attr = (function() {

        /**
         * Properties of an Attr.
         * @typedef internal.Attr$Properties
         * @type {Object}
         * @property {string} [Key] Attr Key.
         * @property {number|Long} [Type] Attr Type.
         * @property {string} [StringValue] Attr StringValue.
         * @property {number|Long} [IntValue] Attr IntValue.
         * @property {boolean} [BoolValue] Attr BoolValue.
         * @property {number} [FloatValue] Attr FloatValue.
         */

        /**
         * Constructs a new Attr.
         * @exports internal.Attr
         * @constructor
         * @param {internal.Attr$Properties=} [properties] Properties to set
         */
        function Attr(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Attr Key.
         * @type {string}
         */
        Attr.prototype.Key = "";

        /**
         * Attr Type.
         * @type {number|Long}
         */
        Attr.prototype.Type = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Attr StringValue.
         * @type {string}
         */
        Attr.prototype.StringValue = "";

        /**
         * Attr IntValue.
         * @type {number|Long}
         */
        Attr.prototype.IntValue = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Attr BoolValue.
         * @type {boolean}
         */
        Attr.prototype.BoolValue = false;

        /**
         * Attr FloatValue.
         * @type {number}
         */
        Attr.prototype.FloatValue = 0;

        /**
         * Creates a new Attr instance using the specified properties.
         * @param {internal.Attr$Properties=} [properties] Properties to set
         * @returns {internal.Attr} Attr instance
         */
        Attr.create = function create(properties) {
            return new Attr(properties);
        };

        /**
         * Encodes the specified Attr message. Does not implicitly {@link internal.Attr.verify|verify} messages.
         * @param {internal.Attr$Properties} message Attr message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Attr.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Key != null && message.hasOwnProperty("Key"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.Key);
            if (message.Type != null && message.hasOwnProperty("Type"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.Type);
            if (message.StringValue != null && message.hasOwnProperty("StringValue"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.StringValue);
            if (message.IntValue != null && message.hasOwnProperty("IntValue"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.IntValue);
            if (message.BoolValue != null && message.hasOwnProperty("BoolValue"))
                writer.uint32(/* id 5, wireType 0 =*/40).bool(message.BoolValue);
            if (message.FloatValue != null && message.hasOwnProperty("FloatValue"))
                writer.uint32(/* id 6, wireType 1 =*/49).double(message.FloatValue);
            return writer;
        };

        /**
         * Encodes the specified Attr message, length delimited. Does not implicitly {@link internal.Attr.verify|verify} messages.
         * @param {internal.Attr$Properties} message Attr message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Attr.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Attr message from the specified reader or buffer.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {internal.Attr} Attr
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Attr.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.internal.Attr();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Key = reader.string();
                    break;
                case 2:
                    message.Type = reader.uint64();
                    break;
                case 3:
                    message.StringValue = reader.string();
                    break;
                case 4:
                    message.IntValue = reader.int64();
                    break;
                case 5:
                    message.BoolValue = reader.bool();
                    break;
                case 6:
                    message.FloatValue = reader.double();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Attr message from the specified reader or buffer, length delimited.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {internal.Attr} Attr
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Attr.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Attr message.
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {?string} `null` if valid, otherwise the reason why it is not
         */
        Attr.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Key != null && message.hasOwnProperty("Key"))
                if (!$util.isString(message.Key))
                    return "Key: string expected";
            if (message.Type != null && message.hasOwnProperty("Type"))
                if (!$util.isInteger(message.Type) && !(message.Type && $util.isInteger(message.Type.low) && $util.isInteger(message.Type.high)))
                    return "Type: integer|Long expected";
            if (message.StringValue != null && message.hasOwnProperty("StringValue"))
                if (!$util.isString(message.StringValue))
                    return "StringValue: string expected";
            if (message.IntValue != null && message.hasOwnProperty("IntValue"))
                if (!$util.isInteger(message.IntValue) && !(message.IntValue && $util.isInteger(message.IntValue.low) && $util.isInteger(message.IntValue.high)))
                    return "IntValue: integer|Long expected";
            if (message.BoolValue != null && message.hasOwnProperty("BoolValue"))
                if (typeof message.BoolValue !== "boolean")
                    return "BoolValue: boolean expected";
            if (message.FloatValue != null && message.hasOwnProperty("FloatValue"))
                if (typeof message.FloatValue !== "number")
                    return "FloatValue: number expected";
            return null;
        };

        /**
         * Creates an Attr message from a plain object. Also converts values to their respective internal types.
         * @param {Object.<string,*>} object Plain object
         * @returns {internal.Attr} Attr
         */
        Attr.fromObject = function fromObject(object) {
            if (object instanceof $root.internal.Attr)
                return object;
            var message = new $root.internal.Attr();
            if (object.Key != null)
                message.Key = String(object.Key);
            if (object.Type != null)
                if ($util.Long)
                    (message.Type = $util.Long.fromValue(object.Type)).unsigned = true;
                else if (typeof object.Type === "string")
                    message.Type = parseInt(object.Type, 10);
                else if (typeof object.Type === "number")
                    message.Type = object.Type;
                else if (typeof object.Type === "object")
                    message.Type = new $util.LongBits(object.Type.low >>> 0, object.Type.high >>> 0).toNumber(true);
            if (object.StringValue != null)
                message.StringValue = String(object.StringValue);
            if (object.IntValue != null)
                if ($util.Long)
                    (message.IntValue = $util.Long.fromValue(object.IntValue)).unsigned = false;
                else if (typeof object.IntValue === "string")
                    message.IntValue = parseInt(object.IntValue, 10);
                else if (typeof object.IntValue === "number")
                    message.IntValue = object.IntValue;
                else if (typeof object.IntValue === "object")
                    message.IntValue = new $util.LongBits(object.IntValue.low >>> 0, object.IntValue.high >>> 0).toNumber();
            if (object.BoolValue != null)
                message.BoolValue = Boolean(object.BoolValue);
            if (object.FloatValue != null)
                message.FloatValue = Number(object.FloatValue);
            return message;
        };

        /**
         * Creates an Attr message from a plain object. Also converts values to their respective internal types.
         * This is an alias of {@link internal.Attr.fromObject}.
         * @function
         * @param {Object.<string,*>} object Plain object
         * @returns {internal.Attr} Attr
         */
        Attr.from = Attr.fromObject;

        /**
         * Creates a plain object from an Attr message. Also converts values to other types if specified.
         * @param {internal.Attr} message Attr
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Attr.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Key = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.Type = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Type = options.longs === String ? "0" : 0;
                object.StringValue = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.IntValue = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.IntValue = options.longs === String ? "0" : 0;
                object.BoolValue = false;
                object.FloatValue = 0;
            }
            if (message.Key != null && message.hasOwnProperty("Key"))
                object.Key = message.Key;
            if (message.Type != null && message.hasOwnProperty("Type"))
                if (typeof message.Type === "number")
                    object.Type = options.longs === String ? String(message.Type) : message.Type;
                else
                    object.Type = options.longs === String ? $util.Long.prototype.toString.call(message.Type) : options.longs === Number ? new $util.LongBits(message.Type.low >>> 0, message.Type.high >>> 0).toNumber(true) : message.Type;
            if (message.StringValue != null && message.hasOwnProperty("StringValue"))
                object.StringValue = message.StringValue;
            if (message.IntValue != null && message.hasOwnProperty("IntValue"))
                if (typeof message.IntValue === "number")
                    object.IntValue = options.longs === String ? String(message.IntValue) : message.IntValue;
                else
                    object.IntValue = options.longs === String ? $util.Long.prototype.toString.call(message.IntValue) : options.longs === Number ? new $util.LongBits(message.IntValue.low >>> 0, message.IntValue.high >>> 0).toNumber() : message.IntValue;
            if (message.BoolValue != null && message.hasOwnProperty("BoolValue"))
                object.BoolValue = message.BoolValue;
            if (message.FloatValue != null && message.hasOwnProperty("FloatValue"))
                object.FloatValue = message.FloatValue;
            return object;
        };

        /**
         * Creates a plain object from this Attr message. Also converts values to other types if specified.
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Attr.prototype.toObject = function toObject(options) {
            return this.constructor.toObject(this, options);
        };

        /**
         * Converts this Attr to JSON.
         * @returns {Object.<string,*>} JSON object
         */
        Attr.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Attr;
    })();

    internal.AttrMap = (function() {

        /**
         * Properties of an AttrMap.
         * @typedef internal.AttrMap$Properties
         * @type {Object}
         * @property {Array.<internal.Attr$Properties>} [Attrs] AttrMap Attrs.
         */

        /**
         * Constructs a new AttrMap.
         * @exports internal.AttrMap
         * @constructor
         * @param {internal.AttrMap$Properties=} [properties] Properties to set
         */
        function AttrMap(properties) {
            this.Attrs = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AttrMap Attrs.
         * @type {Array.<internal.Attr$Properties>}
         */
        AttrMap.prototype.Attrs = $util.emptyArray;

        /**
         * Creates a new AttrMap instance using the specified properties.
         * @param {internal.AttrMap$Properties=} [properties] Properties to set
         * @returns {internal.AttrMap} AttrMap instance
         */
        AttrMap.create = function create(properties) {
            return new AttrMap(properties);
        };

        /**
         * Encodes the specified AttrMap message. Does not implicitly {@link internal.AttrMap.verify|verify} messages.
         * @param {internal.AttrMap$Properties} message AttrMap message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AttrMap.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Attrs != null && message.Attrs.length)
                for (var i = 0; i < message.Attrs.length; ++i)
                    $root.internal.Attr.encode(message.Attrs[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified AttrMap message, length delimited. Does not implicitly {@link internal.AttrMap.verify|verify} messages.
         * @param {internal.AttrMap$Properties} message AttrMap message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AttrMap.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AttrMap message from the specified reader or buffer.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {internal.AttrMap} AttrMap
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AttrMap.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.internal.AttrMap();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.Attrs && message.Attrs.length))
                        message.Attrs = [];
                    message.Attrs.push($root.internal.Attr.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AttrMap message from the specified reader or buffer, length delimited.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {internal.AttrMap} AttrMap
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AttrMap.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AttrMap message.
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {?string} `null` if valid, otherwise the reason why it is not
         */
        AttrMap.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Attrs != null && message.hasOwnProperty("Attrs")) {
                if (!Array.isArray(message.Attrs))
                    return "Attrs: array expected";
                for (var i = 0; i < message.Attrs.length; ++i) {
                    var error = $root.internal.Attr.verify(message.Attrs[i]);
                    if (error)
                        return "Attrs." + error;
                }
            }
            return null;
        };

        /**
         * Creates an AttrMap message from a plain object. Also converts values to their respective internal types.
         * @param {Object.<string,*>} object Plain object
         * @returns {internal.AttrMap} AttrMap
         */
        AttrMap.fromObject = function fromObject(object) {
            if (object instanceof $root.internal.AttrMap)
                return object;
            var message = new $root.internal.AttrMap();
            if (object.Attrs) {
                if (!Array.isArray(object.Attrs))
                    throw TypeError(".internal.AttrMap.Attrs: array expected");
                message.Attrs = [];
                for (var i = 0; i < object.Attrs.length; ++i) {
                    if (typeof object.Attrs[i] !== "object")
                        throw TypeError(".internal.AttrMap.Attrs: object expected");
                    message.Attrs[i] = $root.internal.Attr.fromObject(object.Attrs[i]);
                }
            }
            return message;
        };

        /**
         * Creates an AttrMap message from a plain object. Also converts values to their respective internal types.
         * This is an alias of {@link internal.AttrMap.fromObject}.
         * @function
         * @param {Object.<string,*>} object Plain object
         * @returns {internal.AttrMap} AttrMap
         */
        AttrMap.from = AttrMap.fromObject;

        /**
         * Creates a plain object from an AttrMap message. Also converts values to other types if specified.
         * @param {internal.AttrMap} message AttrMap
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AttrMap.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.Attrs = [];
            if (message.Attrs && message.Attrs.length) {
                object.Attrs = [];
                for (var j = 0; j < message.Attrs.length; ++j)
                    object.Attrs[j] = $root.internal.Attr.toObject(message.Attrs[j], options);
            }
            return object;
        };

        /**
         * Creates a plain object from this AttrMap message. Also converts values to other types if specified.
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AttrMap.prototype.toObject = function toObject(options) {
            return this.constructor.toObject(this, options);
        };

        /**
         * Converts this AttrMap to JSON.
         * @returns {Object.<string,*>} JSON object
         */
        AttrMap.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AttrMap;
    })();

    internal.QueryRequest = (function() {

        /**
         * Properties of a QueryRequest.
         * @typedef internal.QueryRequest$Properties
         * @type {Object}
         * @property {string} [Query] QueryRequest Query.
         * @property {Array.<number|Long>} [Slices] QueryRequest Slices.
         * @property {boolean} [ColumnAttrs] QueryRequest ColumnAttrs.
         * @property {string} [Quantum] QueryRequest Quantum.
         * @property {boolean} [Remote] QueryRequest Remote.
         */

        /**
         * Constructs a new QueryRequest.
         * @exports internal.QueryRequest
         * @constructor
         * @param {internal.QueryRequest$Properties=} [properties] Properties to set
         */
        function QueryRequest(properties) {
            this.Slices = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * QueryRequest Query.
         * @type {string}
         */
        QueryRequest.prototype.Query = "";

        /**
         * QueryRequest Slices.
         * @type {Array.<number|Long>}
         */
        QueryRequest.prototype.Slices = $util.emptyArray;

        /**
         * QueryRequest ColumnAttrs.
         * @type {boolean}
         */
        QueryRequest.prototype.ColumnAttrs = false;

        /**
         * QueryRequest Quantum.
         * @type {string}
         */
        QueryRequest.prototype.Quantum = "";

        /**
         * QueryRequest Remote.
         * @type {boolean}
         */
        QueryRequest.prototype.Remote = false;

        /**
         * Creates a new QueryRequest instance using the specified properties.
         * @param {internal.QueryRequest$Properties=} [properties] Properties to set
         * @returns {internal.QueryRequest} QueryRequest instance
         */
        QueryRequest.create = function create(properties) {
            return new QueryRequest(properties);
        };

        /**
         * Encodes the specified QueryRequest message. Does not implicitly {@link internal.QueryRequest.verify|verify} messages.
         * @param {internal.QueryRequest$Properties} message QueryRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        QueryRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Query != null && message.hasOwnProperty("Query"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.Query);
            if (message.Slices != null && message.Slices.length) {
                writer.uint32(/* id 2, wireType 2 =*/18).fork();
                for (var i = 0; i < message.Slices.length; ++i)
                    writer.uint64(message.Slices[i]);
                writer.ldelim();
            }
            if (message.ColumnAttrs != null && message.hasOwnProperty("ColumnAttrs"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.ColumnAttrs);
            if (message.Quantum != null && message.hasOwnProperty("Quantum"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.Quantum);
            if (message.Remote != null && message.hasOwnProperty("Remote"))
                writer.uint32(/* id 5, wireType 0 =*/40).bool(message.Remote);
            return writer;
        };

        /**
         * Encodes the specified QueryRequest message, length delimited. Does not implicitly {@link internal.QueryRequest.verify|verify} messages.
         * @param {internal.QueryRequest$Properties} message QueryRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        QueryRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a QueryRequest message from the specified reader or buffer.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {internal.QueryRequest} QueryRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        QueryRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.internal.QueryRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Query = reader.string();
                    break;
                case 2:
                    if (!(message.Slices && message.Slices.length))
                        message.Slices = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.Slices.push(reader.uint64());
                    } else
                        message.Slices.push(reader.uint64());
                    break;
                case 3:
                    message.ColumnAttrs = reader.bool();
                    break;
                case 4:
                    message.Quantum = reader.string();
                    break;
                case 5:
                    message.Remote = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a QueryRequest message from the specified reader or buffer, length delimited.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {internal.QueryRequest} QueryRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        QueryRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a QueryRequest message.
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {?string} `null` if valid, otherwise the reason why it is not
         */
        QueryRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Query != null && message.hasOwnProperty("Query"))
                if (!$util.isString(message.Query))
                    return "Query: string expected";
            if (message.Slices != null && message.hasOwnProperty("Slices")) {
                if (!Array.isArray(message.Slices))
                    return "Slices: array expected";
                for (var i = 0; i < message.Slices.length; ++i)
                    if (!$util.isInteger(message.Slices[i]) && !(message.Slices[i] && $util.isInteger(message.Slices[i].low) && $util.isInteger(message.Slices[i].high)))
                        return "Slices: integer|Long[] expected";
            }
            if (message.ColumnAttrs != null && message.hasOwnProperty("ColumnAttrs"))
                if (typeof message.ColumnAttrs !== "boolean")
                    return "ColumnAttrs: boolean expected";
            if (message.Quantum != null && message.hasOwnProperty("Quantum"))
                if (!$util.isString(message.Quantum))
                    return "Quantum: string expected";
            if (message.Remote != null && message.hasOwnProperty("Remote"))
                if (typeof message.Remote !== "boolean")
                    return "Remote: boolean expected";
            return null;
        };

        /**
         * Creates a QueryRequest message from a plain object. Also converts values to their respective internal types.
         * @param {Object.<string,*>} object Plain object
         * @returns {internal.QueryRequest} QueryRequest
         */
        QueryRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.internal.QueryRequest)
                return object;
            var message = new $root.internal.QueryRequest();
            if (object.Query != null)
                message.Query = String(object.Query);
            if (object.Slices) {
                if (!Array.isArray(object.Slices))
                    throw TypeError(".internal.QueryRequest.Slices: array expected");
                message.Slices = [];
                for (var i = 0; i < object.Slices.length; ++i)
                    if ($util.Long)
                        (message.Slices[i] = $util.Long.fromValue(object.Slices[i])).unsigned = true;
                    else if (typeof object.Slices[i] === "string")
                        message.Slices[i] = parseInt(object.Slices[i], 10);
                    else if (typeof object.Slices[i] === "number")
                        message.Slices[i] = object.Slices[i];
                    else if (typeof object.Slices[i] === "object")
                        message.Slices[i] = new $util.LongBits(object.Slices[i].low >>> 0, object.Slices[i].high >>> 0).toNumber(true);
            }
            if (object.ColumnAttrs != null)
                message.ColumnAttrs = Boolean(object.ColumnAttrs);
            if (object.Quantum != null)
                message.Quantum = String(object.Quantum);
            if (object.Remote != null)
                message.Remote = Boolean(object.Remote);
            return message;
        };

        /**
         * Creates a QueryRequest message from a plain object. Also converts values to their respective internal types.
         * This is an alias of {@link internal.QueryRequest.fromObject}.
         * @function
         * @param {Object.<string,*>} object Plain object
         * @returns {internal.QueryRequest} QueryRequest
         */
        QueryRequest.from = QueryRequest.fromObject;

        /**
         * Creates a plain object from a QueryRequest message. Also converts values to other types if specified.
         * @param {internal.QueryRequest} message QueryRequest
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        QueryRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.Slices = [];
            if (options.defaults) {
                object.Query = "";
                object.ColumnAttrs = false;
                object.Quantum = "";
                object.Remote = false;
            }
            if (message.Query != null && message.hasOwnProperty("Query"))
                object.Query = message.Query;
            if (message.Slices && message.Slices.length) {
                object.Slices = [];
                for (var j = 0; j < message.Slices.length; ++j)
                    if (typeof message.Slices[j] === "number")
                        object.Slices[j] = options.longs === String ? String(message.Slices[j]) : message.Slices[j];
                    else
                        object.Slices[j] = options.longs === String ? $util.Long.prototype.toString.call(message.Slices[j]) : options.longs === Number ? new $util.LongBits(message.Slices[j].low >>> 0, message.Slices[j].high >>> 0).toNumber(true) : message.Slices[j];
            }
            if (message.ColumnAttrs != null && message.hasOwnProperty("ColumnAttrs"))
                object.ColumnAttrs = message.ColumnAttrs;
            if (message.Quantum != null && message.hasOwnProperty("Quantum"))
                object.Quantum = message.Quantum;
            if (message.Remote != null && message.hasOwnProperty("Remote"))
                object.Remote = message.Remote;
            return object;
        };

        /**
         * Creates a plain object from this QueryRequest message. Also converts values to other types if specified.
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        QueryRequest.prototype.toObject = function toObject(options) {
            return this.constructor.toObject(this, options);
        };

        /**
         * Converts this QueryRequest to JSON.
         * @returns {Object.<string,*>} JSON object
         */
        QueryRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return QueryRequest;
    })();

    internal.QueryResponse = (function() {

        /**
         * Properties of a QueryResponse.
         * @typedef internal.QueryResponse$Properties
         * @type {Object}
         * @property {string} [Err] QueryResponse Err.
         * @property {Array.<internal.QueryResult$Properties>} [Results] QueryResponse Results.
         * @property {Array.<internal.ColumnAttrSet$Properties>} [ColumnAttrSets] QueryResponse ColumnAttrSets.
         */

        /**
         * Constructs a new QueryResponse.
         * @exports internal.QueryResponse
         * @constructor
         * @param {internal.QueryResponse$Properties=} [properties] Properties to set
         */
        function QueryResponse(properties) {
            this.Results = [];
            this.ColumnAttrSets = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * QueryResponse Err.
         * @type {string}
         */
        QueryResponse.prototype.Err = "";

        /**
         * QueryResponse Results.
         * @type {Array.<internal.QueryResult$Properties>}
         */
        QueryResponse.prototype.Results = $util.emptyArray;

        /**
         * QueryResponse ColumnAttrSets.
         * @type {Array.<internal.ColumnAttrSet$Properties>}
         */
        QueryResponse.prototype.ColumnAttrSets = $util.emptyArray;

        /**
         * Creates a new QueryResponse instance using the specified properties.
         * @param {internal.QueryResponse$Properties=} [properties] Properties to set
         * @returns {internal.QueryResponse} QueryResponse instance
         */
        QueryResponse.create = function create(properties) {
            return new QueryResponse(properties);
        };

        /**
         * Encodes the specified QueryResponse message. Does not implicitly {@link internal.QueryResponse.verify|verify} messages.
         * @param {internal.QueryResponse$Properties} message QueryResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        QueryResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Err != null && message.hasOwnProperty("Err"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.Err);
            if (message.Results != null && message.Results.length)
                for (var i = 0; i < message.Results.length; ++i)
                    $root.internal.QueryResult.encode(message.Results[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.ColumnAttrSets != null && message.ColumnAttrSets.length)
                for (var i = 0; i < message.ColumnAttrSets.length; ++i)
                    $root.internal.ColumnAttrSet.encode(message.ColumnAttrSets[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified QueryResponse message, length delimited. Does not implicitly {@link internal.QueryResponse.verify|verify} messages.
         * @param {internal.QueryResponse$Properties} message QueryResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        QueryResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a QueryResponse message from the specified reader or buffer.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {internal.QueryResponse} QueryResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        QueryResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.internal.QueryResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Err = reader.string();
                    break;
                case 2:
                    if (!(message.Results && message.Results.length))
                        message.Results = [];
                    message.Results.push($root.internal.QueryResult.decode(reader, reader.uint32()));
                    break;
                case 3:
                    if (!(message.ColumnAttrSets && message.ColumnAttrSets.length))
                        message.ColumnAttrSets = [];
                    message.ColumnAttrSets.push($root.internal.ColumnAttrSet.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a QueryResponse message from the specified reader or buffer, length delimited.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {internal.QueryResponse} QueryResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        QueryResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a QueryResponse message.
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {?string} `null` if valid, otherwise the reason why it is not
         */
        QueryResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Err != null && message.hasOwnProperty("Err"))
                if (!$util.isString(message.Err))
                    return "Err: string expected";
            if (message.Results != null && message.hasOwnProperty("Results")) {
                if (!Array.isArray(message.Results))
                    return "Results: array expected";
                for (var i = 0; i < message.Results.length; ++i) {
                    var error = $root.internal.QueryResult.verify(message.Results[i]);
                    if (error)
                        return "Results." + error;
                }
            }
            if (message.ColumnAttrSets != null && message.hasOwnProperty("ColumnAttrSets")) {
                if (!Array.isArray(message.ColumnAttrSets))
                    return "ColumnAttrSets: array expected";
                for (var i = 0; i < message.ColumnAttrSets.length; ++i) {
                    var error = $root.internal.ColumnAttrSet.verify(message.ColumnAttrSets[i]);
                    if (error)
                        return "ColumnAttrSets." + error;
                }
            }
            return null;
        };

        /**
         * Creates a QueryResponse message from a plain object. Also converts values to their respective internal types.
         * @param {Object.<string,*>} object Plain object
         * @returns {internal.QueryResponse} QueryResponse
         */
        QueryResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.internal.QueryResponse)
                return object;
            var message = new $root.internal.QueryResponse();
            if (object.Err != null)
                message.Err = String(object.Err);
            if (object.Results) {
                if (!Array.isArray(object.Results))
                    throw TypeError(".internal.QueryResponse.Results: array expected");
                message.Results = [];
                for (var i = 0; i < object.Results.length; ++i) {
                    if (typeof object.Results[i] !== "object")
                        throw TypeError(".internal.QueryResponse.Results: object expected");
                    message.Results[i] = $root.internal.QueryResult.fromObject(object.Results[i]);
                }
            }
            if (object.ColumnAttrSets) {
                if (!Array.isArray(object.ColumnAttrSets))
                    throw TypeError(".internal.QueryResponse.ColumnAttrSets: array expected");
                message.ColumnAttrSets = [];
                for (var i = 0; i < object.ColumnAttrSets.length; ++i) {
                    if (typeof object.ColumnAttrSets[i] !== "object")
                        throw TypeError(".internal.QueryResponse.ColumnAttrSets: object expected");
                    message.ColumnAttrSets[i] = $root.internal.ColumnAttrSet.fromObject(object.ColumnAttrSets[i]);
                }
            }
            return message;
        };

        /**
         * Creates a QueryResponse message from a plain object. Also converts values to their respective internal types.
         * This is an alias of {@link internal.QueryResponse.fromObject}.
         * @function
         * @param {Object.<string,*>} object Plain object
         * @returns {internal.QueryResponse} QueryResponse
         */
        QueryResponse.from = QueryResponse.fromObject;

        /**
         * Creates a plain object from a QueryResponse message. Also converts values to other types if specified.
         * @param {internal.QueryResponse} message QueryResponse
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        QueryResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.Results = [];
                object.ColumnAttrSets = [];
            }
            if (options.defaults)
                object.Err = "";
            if (message.Err != null && message.hasOwnProperty("Err"))
                object.Err = message.Err;
            if (message.Results && message.Results.length) {
                object.Results = [];
                for (var j = 0; j < message.Results.length; ++j)
                    object.Results[j] = $root.internal.QueryResult.toObject(message.Results[j], options);
            }
            if (message.ColumnAttrSets && message.ColumnAttrSets.length) {
                object.ColumnAttrSets = [];
                for (var j = 0; j < message.ColumnAttrSets.length; ++j)
                    object.ColumnAttrSets[j] = $root.internal.ColumnAttrSet.toObject(message.ColumnAttrSets[j], options);
            }
            return object;
        };

        /**
         * Creates a plain object from this QueryResponse message. Also converts values to other types if specified.
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        QueryResponse.prototype.toObject = function toObject(options) {
            return this.constructor.toObject(this, options);
        };

        /**
         * Converts this QueryResponse to JSON.
         * @returns {Object.<string,*>} JSON object
         */
        QueryResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return QueryResponse;
    })();

    internal.QueryResult = (function() {

        /**
         * Properties of a QueryResult.
         * @typedef internal.QueryResult$Properties
         * @type {Object}
         * @property {internal.Bitmap$Properties} [Bitmap] QueryResult Bitmap.
         * @property {number|Long} [N] QueryResult N.
         * @property {Array.<internal.Pair$Properties>} [Pairs] QueryResult Pairs.
         * @property {boolean} [Changed] QueryResult Changed.
         */

        /**
         * Constructs a new QueryResult.
         * @exports internal.QueryResult
         * @constructor
         * @param {internal.QueryResult$Properties=} [properties] Properties to set
         */
        function QueryResult(properties) {
            this.Pairs = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * QueryResult Bitmap.
         * @type {(internal.Bitmap$Properties|null)}
         */
        QueryResult.prototype.Bitmap = null;

        /**
         * QueryResult N.
         * @type {number|Long}
         */
        QueryResult.prototype.N = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * QueryResult Pairs.
         * @type {Array.<internal.Pair$Properties>}
         */
        QueryResult.prototype.Pairs = $util.emptyArray;

        /**
         * QueryResult Changed.
         * @type {boolean}
         */
        QueryResult.prototype.Changed = false;

        /**
         * Creates a new QueryResult instance using the specified properties.
         * @param {internal.QueryResult$Properties=} [properties] Properties to set
         * @returns {internal.QueryResult} QueryResult instance
         */
        QueryResult.create = function create(properties) {
            return new QueryResult(properties);
        };

        /**
         * Encodes the specified QueryResult message. Does not implicitly {@link internal.QueryResult.verify|verify} messages.
         * @param {internal.QueryResult$Properties} message QueryResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        QueryResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Bitmap != null && message.hasOwnProperty("Bitmap"))
                $root.internal.Bitmap.encode(message.Bitmap, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.N != null && message.hasOwnProperty("N"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.N);
            if (message.Pairs != null && message.Pairs.length)
                for (var i = 0; i < message.Pairs.length; ++i)
                    $root.internal.Pair.encode(message.Pairs[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.Changed != null && message.hasOwnProperty("Changed"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.Changed);
            return writer;
        };

        /**
         * Encodes the specified QueryResult message, length delimited. Does not implicitly {@link internal.QueryResult.verify|verify} messages.
         * @param {internal.QueryResult$Properties} message QueryResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        QueryResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a QueryResult message from the specified reader or buffer.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {internal.QueryResult} QueryResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        QueryResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.internal.QueryResult();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Bitmap = $root.internal.Bitmap.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.N = reader.uint64();
                    break;
                case 3:
                    if (!(message.Pairs && message.Pairs.length))
                        message.Pairs = [];
                    message.Pairs.push($root.internal.Pair.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.Changed = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a QueryResult message from the specified reader or buffer, length delimited.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {internal.QueryResult} QueryResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        QueryResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a QueryResult message.
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {?string} `null` if valid, otherwise the reason why it is not
         */
        QueryResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Bitmap != null && message.hasOwnProperty("Bitmap")) {
                var error = $root.internal.Bitmap.verify(message.Bitmap);
                if (error)
                    return "Bitmap." + error;
            }
            if (message.N != null && message.hasOwnProperty("N"))
                if (!$util.isInteger(message.N) && !(message.N && $util.isInteger(message.N.low) && $util.isInteger(message.N.high)))
                    return "N: integer|Long expected";
            if (message.Pairs != null && message.hasOwnProperty("Pairs")) {
                if (!Array.isArray(message.Pairs))
                    return "Pairs: array expected";
                for (var i = 0; i < message.Pairs.length; ++i) {
                    var error = $root.internal.Pair.verify(message.Pairs[i]);
                    if (error)
                        return "Pairs." + error;
                }
            }
            if (message.Changed != null && message.hasOwnProperty("Changed"))
                if (typeof message.Changed !== "boolean")
                    return "Changed: boolean expected";
            return null;
        };

        /**
         * Creates a QueryResult message from a plain object. Also converts values to their respective internal types.
         * @param {Object.<string,*>} object Plain object
         * @returns {internal.QueryResult} QueryResult
         */
        QueryResult.fromObject = function fromObject(object) {
            if (object instanceof $root.internal.QueryResult)
                return object;
            var message = new $root.internal.QueryResult();
            if (object.Bitmap != null) {
                if (typeof object.Bitmap !== "object")
                    throw TypeError(".internal.QueryResult.Bitmap: object expected");
                message.Bitmap = $root.internal.Bitmap.fromObject(object.Bitmap);
            }
            if (object.N != null)
                if ($util.Long)
                    (message.N = $util.Long.fromValue(object.N)).unsigned = true;
                else if (typeof object.N === "string")
                    message.N = parseInt(object.N, 10);
                else if (typeof object.N === "number")
                    message.N = object.N;
                else if (typeof object.N === "object")
                    message.N = new $util.LongBits(object.N.low >>> 0, object.N.high >>> 0).toNumber(true);
            if (object.Pairs) {
                if (!Array.isArray(object.Pairs))
                    throw TypeError(".internal.QueryResult.Pairs: array expected");
                message.Pairs = [];
                for (var i = 0; i < object.Pairs.length; ++i) {
                    if (typeof object.Pairs[i] !== "object")
                        throw TypeError(".internal.QueryResult.Pairs: object expected");
                    message.Pairs[i] = $root.internal.Pair.fromObject(object.Pairs[i]);
                }
            }
            if (object.Changed != null)
                message.Changed = Boolean(object.Changed);
            return message;
        };

        /**
         * Creates a QueryResult message from a plain object. Also converts values to their respective internal types.
         * This is an alias of {@link internal.QueryResult.fromObject}.
         * @function
         * @param {Object.<string,*>} object Plain object
         * @returns {internal.QueryResult} QueryResult
         */
        QueryResult.from = QueryResult.fromObject;

        /**
         * Creates a plain object from a QueryResult message. Also converts values to other types if specified.
         * @param {internal.QueryResult} message QueryResult
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        QueryResult.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.Pairs = [];
            if (options.defaults) {
                object.Bitmap = null;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.N = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.N = options.longs === String ? "0" : 0;
                object.Changed = false;
            }
            if (message.Bitmap != null && message.hasOwnProperty("Bitmap"))
                object.Bitmap = $root.internal.Bitmap.toObject(message.Bitmap, options);
            if (message.N != null && message.hasOwnProperty("N"))
                if (typeof message.N === "number")
                    object.N = options.longs === String ? String(message.N) : message.N;
                else
                    object.N = options.longs === String ? $util.Long.prototype.toString.call(message.N) : options.longs === Number ? new $util.LongBits(message.N.low >>> 0, message.N.high >>> 0).toNumber(true) : message.N;
            if (message.Pairs && message.Pairs.length) {
                object.Pairs = [];
                for (var j = 0; j < message.Pairs.length; ++j)
                    object.Pairs[j] = $root.internal.Pair.toObject(message.Pairs[j], options);
            }
            if (message.Changed != null && message.hasOwnProperty("Changed"))
                object.Changed = message.Changed;
            return object;
        };

        /**
         * Creates a plain object from this QueryResult message. Also converts values to other types if specified.
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        QueryResult.prototype.toObject = function toObject(options) {
            return this.constructor.toObject(this, options);
        };

        /**
         * Converts this QueryResult to JSON.
         * @returns {Object.<string,*>} JSON object
         */
        QueryResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return QueryResult;
    })();

    internal.ImportRequest = (function() {

        /**
         * Properties of an ImportRequest.
         * @typedef internal.ImportRequest$Properties
         * @type {Object}
         * @property {string} [Index] ImportRequest Index.
         * @property {string} [Frame] ImportRequest Frame.
         * @property {number|Long} [Slice] ImportRequest Slice.
         * @property {Array.<number|Long>} [RowIDs] ImportRequest RowIDs.
         * @property {Array.<number|Long>} [ColumnIDs] ImportRequest ColumnIDs.
         * @property {Array.<number|Long>} [Timestamps] ImportRequest Timestamps.
         */

        /**
         * Constructs a new ImportRequest.
         * @exports internal.ImportRequest
         * @constructor
         * @param {internal.ImportRequest$Properties=} [properties] Properties to set
         */
        function ImportRequest(properties) {
            this.RowIDs = [];
            this.ColumnIDs = [];
            this.Timestamps = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ImportRequest Index.
         * @type {string}
         */
        ImportRequest.prototype.Index = "";

        /**
         * ImportRequest Frame.
         * @type {string}
         */
        ImportRequest.prototype.Frame = "";

        /**
         * ImportRequest Slice.
         * @type {number|Long}
         */
        ImportRequest.prototype.Slice = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * ImportRequest RowIDs.
         * @type {Array.<number|Long>}
         */
        ImportRequest.prototype.RowIDs = $util.emptyArray;

        /**
         * ImportRequest ColumnIDs.
         * @type {Array.<number|Long>}
         */
        ImportRequest.prototype.ColumnIDs = $util.emptyArray;

        /**
         * ImportRequest Timestamps.
         * @type {Array.<number|Long>}
         */
        ImportRequest.prototype.Timestamps = $util.emptyArray;

        /**
         * Creates a new ImportRequest instance using the specified properties.
         * @param {internal.ImportRequest$Properties=} [properties] Properties to set
         * @returns {internal.ImportRequest} ImportRequest instance
         */
        ImportRequest.create = function create(properties) {
            return new ImportRequest(properties);
        };

        /**
         * Encodes the specified ImportRequest message. Does not implicitly {@link internal.ImportRequest.verify|verify} messages.
         * @param {internal.ImportRequest$Properties} message ImportRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ImportRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Index != null && message.hasOwnProperty("Index"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.Index);
            if (message.Frame != null && message.hasOwnProperty("Frame"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.Frame);
            if (message.Slice != null && message.hasOwnProperty("Slice"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.Slice);
            if (message.RowIDs != null && message.RowIDs.length) {
                writer.uint32(/* id 4, wireType 2 =*/34).fork();
                for (var i = 0; i < message.RowIDs.length; ++i)
                    writer.uint64(message.RowIDs[i]);
                writer.ldelim();
            }
            if (message.ColumnIDs != null && message.ColumnIDs.length) {
                writer.uint32(/* id 5, wireType 2 =*/42).fork();
                for (var i = 0; i < message.ColumnIDs.length; ++i)
                    writer.uint64(message.ColumnIDs[i]);
                writer.ldelim();
            }
            if (message.Timestamps != null && message.Timestamps.length) {
                writer.uint32(/* id 6, wireType 2 =*/50).fork();
                for (var i = 0; i < message.Timestamps.length; ++i)
                    writer.int64(message.Timestamps[i]);
                writer.ldelim();
            }
            return writer;
        };

        /**
         * Encodes the specified ImportRequest message, length delimited. Does not implicitly {@link internal.ImportRequest.verify|verify} messages.
         * @param {internal.ImportRequest$Properties} message ImportRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ImportRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ImportRequest message from the specified reader or buffer.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {internal.ImportRequest} ImportRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ImportRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.internal.ImportRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Index = reader.string();
                    break;
                case 2:
                    message.Frame = reader.string();
                    break;
                case 3:
                    message.Slice = reader.uint64();
                    break;
                case 4:
                    if (!(message.RowIDs && message.RowIDs.length))
                        message.RowIDs = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.RowIDs.push(reader.uint64());
                    } else
                        message.RowIDs.push(reader.uint64());
                    break;
                case 5:
                    if (!(message.ColumnIDs && message.ColumnIDs.length))
                        message.ColumnIDs = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.ColumnIDs.push(reader.uint64());
                    } else
                        message.ColumnIDs.push(reader.uint64());
                    break;
                case 6:
                    if (!(message.Timestamps && message.Timestamps.length))
                        message.Timestamps = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.Timestamps.push(reader.int64());
                    } else
                        message.Timestamps.push(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an ImportRequest message from the specified reader or buffer, length delimited.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {internal.ImportRequest} ImportRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ImportRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ImportRequest message.
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {?string} `null` if valid, otherwise the reason why it is not
         */
        ImportRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Index != null && message.hasOwnProperty("Index"))
                if (!$util.isString(message.Index))
                    return "Index: string expected";
            if (message.Frame != null && message.hasOwnProperty("Frame"))
                if (!$util.isString(message.Frame))
                    return "Frame: string expected";
            if (message.Slice != null && message.hasOwnProperty("Slice"))
                if (!$util.isInteger(message.Slice) && !(message.Slice && $util.isInteger(message.Slice.low) && $util.isInteger(message.Slice.high)))
                    return "Slice: integer|Long expected";
            if (message.RowIDs != null && message.hasOwnProperty("RowIDs")) {
                if (!Array.isArray(message.RowIDs))
                    return "RowIDs: array expected";
                for (var i = 0; i < message.RowIDs.length; ++i)
                    if (!$util.isInteger(message.RowIDs[i]) && !(message.RowIDs[i] && $util.isInteger(message.RowIDs[i].low) && $util.isInteger(message.RowIDs[i].high)))
                        return "RowIDs: integer|Long[] expected";
            }
            if (message.ColumnIDs != null && message.hasOwnProperty("ColumnIDs")) {
                if (!Array.isArray(message.ColumnIDs))
                    return "ColumnIDs: array expected";
                for (var i = 0; i < message.ColumnIDs.length; ++i)
                    if (!$util.isInteger(message.ColumnIDs[i]) && !(message.ColumnIDs[i] && $util.isInteger(message.ColumnIDs[i].low) && $util.isInteger(message.ColumnIDs[i].high)))
                        return "ColumnIDs: integer|Long[] expected";
            }
            if (message.Timestamps != null && message.hasOwnProperty("Timestamps")) {
                if (!Array.isArray(message.Timestamps))
                    return "Timestamps: array expected";
                for (var i = 0; i < message.Timestamps.length; ++i)
                    if (!$util.isInteger(message.Timestamps[i]) && !(message.Timestamps[i] && $util.isInteger(message.Timestamps[i].low) && $util.isInteger(message.Timestamps[i].high)))
                        return "Timestamps: integer|Long[] expected";
            }
            return null;
        };

        /**
         * Creates an ImportRequest message from a plain object. Also converts values to their respective internal types.
         * @param {Object.<string,*>} object Plain object
         * @returns {internal.ImportRequest} ImportRequest
         */
        ImportRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.internal.ImportRequest)
                return object;
            var message = new $root.internal.ImportRequest();
            if (object.Index != null)
                message.Index = String(object.Index);
            if (object.Frame != null)
                message.Frame = String(object.Frame);
            if (object.Slice != null)
                if ($util.Long)
                    (message.Slice = $util.Long.fromValue(object.Slice)).unsigned = true;
                else if (typeof object.Slice === "string")
                    message.Slice = parseInt(object.Slice, 10);
                else if (typeof object.Slice === "number")
                    message.Slice = object.Slice;
                else if (typeof object.Slice === "object")
                    message.Slice = new $util.LongBits(object.Slice.low >>> 0, object.Slice.high >>> 0).toNumber(true);
            if (object.RowIDs) {
                if (!Array.isArray(object.RowIDs))
                    throw TypeError(".internal.ImportRequest.RowIDs: array expected");
                message.RowIDs = [];
                for (var i = 0; i < object.RowIDs.length; ++i)
                    if ($util.Long)
                        (message.RowIDs[i] = $util.Long.fromValue(object.RowIDs[i])).unsigned = true;
                    else if (typeof object.RowIDs[i] === "string")
                        message.RowIDs[i] = parseInt(object.RowIDs[i], 10);
                    else if (typeof object.RowIDs[i] === "number")
                        message.RowIDs[i] = object.RowIDs[i];
                    else if (typeof object.RowIDs[i] === "object")
                        message.RowIDs[i] = new $util.LongBits(object.RowIDs[i].low >>> 0, object.RowIDs[i].high >>> 0).toNumber(true);
            }
            if (object.ColumnIDs) {
                if (!Array.isArray(object.ColumnIDs))
                    throw TypeError(".internal.ImportRequest.ColumnIDs: array expected");
                message.ColumnIDs = [];
                for (var i = 0; i < object.ColumnIDs.length; ++i)
                    if ($util.Long)
                        (message.ColumnIDs[i] = $util.Long.fromValue(object.ColumnIDs[i])).unsigned = true;
                    else if (typeof object.ColumnIDs[i] === "string")
                        message.ColumnIDs[i] = parseInt(object.ColumnIDs[i], 10);
                    else if (typeof object.ColumnIDs[i] === "number")
                        message.ColumnIDs[i] = object.ColumnIDs[i];
                    else if (typeof object.ColumnIDs[i] === "object")
                        message.ColumnIDs[i] = new $util.LongBits(object.ColumnIDs[i].low >>> 0, object.ColumnIDs[i].high >>> 0).toNumber(true);
            }
            if (object.Timestamps) {
                if (!Array.isArray(object.Timestamps))
                    throw TypeError(".internal.ImportRequest.Timestamps: array expected");
                message.Timestamps = [];
                for (var i = 0; i < object.Timestamps.length; ++i)
                    if ($util.Long)
                        (message.Timestamps[i] = $util.Long.fromValue(object.Timestamps[i])).unsigned = false;
                    else if (typeof object.Timestamps[i] === "string")
                        message.Timestamps[i] = parseInt(object.Timestamps[i], 10);
                    else if (typeof object.Timestamps[i] === "number")
                        message.Timestamps[i] = object.Timestamps[i];
                    else if (typeof object.Timestamps[i] === "object")
                        message.Timestamps[i] = new $util.LongBits(object.Timestamps[i].low >>> 0, object.Timestamps[i].high >>> 0).toNumber();
            }
            return message;
        };

        /**
         * Creates an ImportRequest message from a plain object. Also converts values to their respective internal types.
         * This is an alias of {@link internal.ImportRequest.fromObject}.
         * @function
         * @param {Object.<string,*>} object Plain object
         * @returns {internal.ImportRequest} ImportRequest
         */
        ImportRequest.from = ImportRequest.fromObject;

        /**
         * Creates a plain object from an ImportRequest message. Also converts values to other types if specified.
         * @param {internal.ImportRequest} message ImportRequest
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ImportRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.RowIDs = [];
                object.ColumnIDs = [];
                object.Timestamps = [];
            }
            if (options.defaults) {
                object.Index = "";
                object.Frame = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.Slice = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Slice = options.longs === String ? "0" : 0;
            }
            if (message.Index != null && message.hasOwnProperty("Index"))
                object.Index = message.Index;
            if (message.Frame != null && message.hasOwnProperty("Frame"))
                object.Frame = message.Frame;
            if (message.Slice != null && message.hasOwnProperty("Slice"))
                if (typeof message.Slice === "number")
                    object.Slice = options.longs === String ? String(message.Slice) : message.Slice;
                else
                    object.Slice = options.longs === String ? $util.Long.prototype.toString.call(message.Slice) : options.longs === Number ? new $util.LongBits(message.Slice.low >>> 0, message.Slice.high >>> 0).toNumber(true) : message.Slice;
            if (message.RowIDs && message.RowIDs.length) {
                object.RowIDs = [];
                for (var j = 0; j < message.RowIDs.length; ++j)
                    if (typeof message.RowIDs[j] === "number")
                        object.RowIDs[j] = options.longs === String ? String(message.RowIDs[j]) : message.RowIDs[j];
                    else
                        object.RowIDs[j] = options.longs === String ? $util.Long.prototype.toString.call(message.RowIDs[j]) : options.longs === Number ? new $util.LongBits(message.RowIDs[j].low >>> 0, message.RowIDs[j].high >>> 0).toNumber(true) : message.RowIDs[j];
            }
            if (message.ColumnIDs && message.ColumnIDs.length) {
                object.ColumnIDs = [];
                for (var j = 0; j < message.ColumnIDs.length; ++j)
                    if (typeof message.ColumnIDs[j] === "number")
                        object.ColumnIDs[j] = options.longs === String ? String(message.ColumnIDs[j]) : message.ColumnIDs[j];
                    else
                        object.ColumnIDs[j] = options.longs === String ? $util.Long.prototype.toString.call(message.ColumnIDs[j]) : options.longs === Number ? new $util.LongBits(message.ColumnIDs[j].low >>> 0, message.ColumnIDs[j].high >>> 0).toNumber(true) : message.ColumnIDs[j];
            }
            if (message.Timestamps && message.Timestamps.length) {
                object.Timestamps = [];
                for (var j = 0; j < message.Timestamps.length; ++j)
                    if (typeof message.Timestamps[j] === "number")
                        object.Timestamps[j] = options.longs === String ? String(message.Timestamps[j]) : message.Timestamps[j];
                    else
                        object.Timestamps[j] = options.longs === String ? $util.Long.prototype.toString.call(message.Timestamps[j]) : options.longs === Number ? new $util.LongBits(message.Timestamps[j].low >>> 0, message.Timestamps[j].high >>> 0).toNumber() : message.Timestamps[j];
            }
            return object;
        };

        /**
         * Creates a plain object from this ImportRequest message. Also converts values to other types if specified.
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ImportRequest.prototype.toObject = function toObject(options) {
            return this.constructor.toObject(this, options);
        };

        /**
         * Converts this ImportRequest to JSON.
         * @returns {Object.<string,*>} JSON object
         */
        ImportRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ImportRequest;
    })();

    return internal;
})();

module.exports = $root;
