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

    internal.DB = (function() {

        /**
         * Properties of a DB.
         * @typedef internal.DB$Properties
         * @type {Object}
         * @property {string} [TimeQuantum] DB TimeQuantum.
         * @property {string} [ColumnLabel] DB ColumnLabel.
         */

        /**
         * Constructs a new DB.
         * @exports internal.DB
         * @constructor
         * @param {internal.DB$Properties=} [properties] Properties to set
         */
        function DB(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DB TimeQuantum.
         * @type {string}
         */
        DB.prototype.TimeQuantum = "";

        /**
         * DB ColumnLabel.
         * @type {string}
         */
        DB.prototype.ColumnLabel = "";

        /**
         * Creates a new DB instance using the specified properties.
         * @param {internal.DB$Properties=} [properties] Properties to set
         * @returns {internal.DB} DB instance
         */
        DB.create = function create(properties) {
            return new DB(properties);
        };

        /**
         * Encodes the specified DB message. Does not implicitly {@link internal.DB.verify|verify} messages.
         * @param {internal.DB$Properties} message DB message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DB.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.TimeQuantum != null && message.hasOwnProperty("TimeQuantum"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.TimeQuantum);
            if (message.ColumnLabel != null && message.hasOwnProperty("ColumnLabel"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.ColumnLabel);
            return writer;
        };

        /**
         * Encodes the specified DB message, length delimited. Does not implicitly {@link internal.DB.verify|verify} messages.
         * @param {internal.DB$Properties} message DB message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DB.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DB message from the specified reader or buffer.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {internal.DB} DB
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DB.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.internal.DB();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.TimeQuantum = reader.string();
                    break;
                case 2:
                    message.ColumnLabel = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DB message from the specified reader or buffer, length delimited.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {internal.DB} DB
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DB.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DB message.
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {?string} `null` if valid, otherwise the reason why it is not
         */
        DB.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.TimeQuantum != null && message.hasOwnProperty("TimeQuantum"))
                if (!$util.isString(message.TimeQuantum))
                    return "TimeQuantum: string expected";
            if (message.ColumnLabel != null && message.hasOwnProperty("ColumnLabel"))
                if (!$util.isString(message.ColumnLabel))
                    return "ColumnLabel: string expected";
            return null;
        };

        /**
         * Creates a DB message from a plain object. Also converts values to their respective internal types.
         * @param {Object.<string,*>} object Plain object
         * @returns {internal.DB} DB
         */
        DB.fromObject = function fromObject(object) {
            if (object instanceof $root.internal.DB)
                return object;
            var message = new $root.internal.DB();
            if (object.TimeQuantum != null)
                message.TimeQuantum = String(object.TimeQuantum);
            if (object.ColumnLabel != null)
                message.ColumnLabel = String(object.ColumnLabel);
            return message;
        };

        /**
         * Creates a DB message from a plain object. Also converts values to their respective internal types.
         * This is an alias of {@link internal.DB.fromObject}.
         * @function
         * @param {Object.<string,*>} object Plain object
         * @returns {internal.DB} DB
         */
        DB.from = DB.fromObject;

        /**
         * Creates a plain object from a DB message. Also converts values to other types if specified.
         * @param {internal.DB} message DB
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DB.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.TimeQuantum = "";
                object.ColumnLabel = "";
            }
            if (message.TimeQuantum != null && message.hasOwnProperty("TimeQuantum"))
                object.TimeQuantum = message.TimeQuantum;
            if (message.ColumnLabel != null && message.hasOwnProperty("ColumnLabel"))
                object.ColumnLabel = message.ColumnLabel;
            return object;
        };

        /**
         * Creates a plain object from this DB message. Also converts values to other types if specified.
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DB.prototype.toObject = function toObject(options) {
            return this.constructor.toObject(this, options);
        };

        /**
         * Converts this DB to JSON.
         * @returns {Object.<string,*>} JSON object
         */
        DB.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DB;
    })();

    internal.Frame = (function() {

        /**
         * Properties of a Frame.
         * @typedef internal.Frame$Properties
         * @type {Object}
         * @property {string} [TimeQuantum] Frame TimeQuantum.
         * @property {string} [RowLabel] Frame RowLabel.
         */

        /**
         * Constructs a new Frame.
         * @exports internal.Frame
         * @constructor
         * @param {internal.Frame$Properties=} [properties] Properties to set
         */
        function Frame(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Frame TimeQuantum.
         * @type {string}
         */
        Frame.prototype.TimeQuantum = "";

        /**
         * Frame RowLabel.
         * @type {string}
         */
        Frame.prototype.RowLabel = "";

        /**
         * Creates a new Frame instance using the specified properties.
         * @param {internal.Frame$Properties=} [properties] Properties to set
         * @returns {internal.Frame} Frame instance
         */
        Frame.create = function create(properties) {
            return new Frame(properties);
        };

        /**
         * Encodes the specified Frame message. Does not implicitly {@link internal.Frame.verify|verify} messages.
         * @param {internal.Frame$Properties} message Frame message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Frame.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.TimeQuantum != null && message.hasOwnProperty("TimeQuantum"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.TimeQuantum);
            if (message.RowLabel != null && message.hasOwnProperty("RowLabel"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.RowLabel);
            return writer;
        };

        /**
         * Encodes the specified Frame message, length delimited. Does not implicitly {@link internal.Frame.verify|verify} messages.
         * @param {internal.Frame$Properties} message Frame message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Frame.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Frame message from the specified reader or buffer.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {internal.Frame} Frame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Frame.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.internal.Frame();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.TimeQuantum = reader.string();
                    break;
                case 2:
                    message.RowLabel = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Frame message from the specified reader or buffer, length delimited.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {internal.Frame} Frame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Frame.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Frame message.
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {?string} `null` if valid, otherwise the reason why it is not
         */
        Frame.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.TimeQuantum != null && message.hasOwnProperty("TimeQuantum"))
                if (!$util.isString(message.TimeQuantum))
                    return "TimeQuantum: string expected";
            if (message.RowLabel != null && message.hasOwnProperty("RowLabel"))
                if (!$util.isString(message.RowLabel))
                    return "RowLabel: string expected";
            return null;
        };

        /**
         * Creates a Frame message from a plain object. Also converts values to their respective internal types.
         * @param {Object.<string,*>} object Plain object
         * @returns {internal.Frame} Frame
         */
        Frame.fromObject = function fromObject(object) {
            if (object instanceof $root.internal.Frame)
                return object;
            var message = new $root.internal.Frame();
            if (object.TimeQuantum != null)
                message.TimeQuantum = String(object.TimeQuantum);
            if (object.RowLabel != null)
                message.RowLabel = String(object.RowLabel);
            return message;
        };

        /**
         * Creates a Frame message from a plain object. Also converts values to their respective internal types.
         * This is an alias of {@link internal.Frame.fromObject}.
         * @function
         * @param {Object.<string,*>} object Plain object
         * @returns {internal.Frame} Frame
         */
        Frame.from = Frame.fromObject;

        /**
         * Creates a plain object from a Frame message. Also converts values to other types if specified.
         * @param {internal.Frame} message Frame
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Frame.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.TimeQuantum = "";
                object.RowLabel = "";
            }
            if (message.TimeQuantum != null && message.hasOwnProperty("TimeQuantum"))
                object.TimeQuantum = message.TimeQuantum;
            if (message.RowLabel != null && message.hasOwnProperty("RowLabel"))
                object.RowLabel = message.RowLabel;
            return object;
        };

        /**
         * Creates a plain object from this Frame message. Also converts values to other types if specified.
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Frame.prototype.toObject = function toObject(options) {
            return this.constructor.toObject(this, options);
        };

        /**
         * Converts this Frame to JSON.
         * @returns {Object.<string,*>} JSON object
         */
        Frame.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Frame;
    })();

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
         * @property {number|Long} [BitmapID] Bit BitmapID.
         * @property {number|Long} [ProfileID] Bit ProfileID.
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
         * Bit BitmapID.
         * @type {number|Long}
         */
        Bit.prototype.BitmapID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Bit ProfileID.
         * @type {number|Long}
         */
        Bit.prototype.ProfileID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

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
            if (message.BitmapID != null && message.hasOwnProperty("BitmapID"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.BitmapID);
            if (message.ProfileID != null && message.hasOwnProperty("ProfileID"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.ProfileID);
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
                    message.BitmapID = reader.uint64();
                    break;
                case 2:
                    message.ProfileID = reader.uint64();
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
            if (message.BitmapID != null && message.hasOwnProperty("BitmapID"))
                if (!$util.isInteger(message.BitmapID) && !(message.BitmapID && $util.isInteger(message.BitmapID.low) && $util.isInteger(message.BitmapID.high)))
                    return "BitmapID: integer|Long expected";
            if (message.ProfileID != null && message.hasOwnProperty("ProfileID"))
                if (!$util.isInteger(message.ProfileID) && !(message.ProfileID && $util.isInteger(message.ProfileID.low) && $util.isInteger(message.ProfileID.high)))
                    return "ProfileID: integer|Long expected";
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
            if (object.BitmapID != null)
                if ($util.Long)
                    (message.BitmapID = $util.Long.fromValue(object.BitmapID)).unsigned = true;
                else if (typeof object.BitmapID === "string")
                    message.BitmapID = parseInt(object.BitmapID, 10);
                else if (typeof object.BitmapID === "number")
                    message.BitmapID = object.BitmapID;
                else if (typeof object.BitmapID === "object")
                    message.BitmapID = new $util.LongBits(object.BitmapID.low >>> 0, object.BitmapID.high >>> 0).toNumber(true);
            if (object.ProfileID != null)
                if ($util.Long)
                    (message.ProfileID = $util.Long.fromValue(object.ProfileID)).unsigned = true;
                else if (typeof object.ProfileID === "string")
                    message.ProfileID = parseInt(object.ProfileID, 10);
                else if (typeof object.ProfileID === "number")
                    message.ProfileID = object.ProfileID;
                else if (typeof object.ProfileID === "object")
                    message.ProfileID = new $util.LongBits(object.ProfileID.low >>> 0, object.ProfileID.high >>> 0).toNumber(true);
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
                    object.BitmapID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.BitmapID = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.ProfileID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.ProfileID = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.Timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Timestamp = options.longs === String ? "0" : 0;
            }
            if (message.BitmapID != null && message.hasOwnProperty("BitmapID"))
                if (typeof message.BitmapID === "number")
                    object.BitmapID = options.longs === String ? String(message.BitmapID) : message.BitmapID;
                else
                    object.BitmapID = options.longs === String ? $util.Long.prototype.toString.call(message.BitmapID) : options.longs === Number ? new $util.LongBits(message.BitmapID.low >>> 0, message.BitmapID.high >>> 0).toNumber(true) : message.BitmapID;
            if (message.ProfileID != null && message.hasOwnProperty("ProfileID"))
                if (typeof message.ProfileID === "number")
                    object.ProfileID = options.longs === String ? String(message.ProfileID) : message.ProfileID;
                else
                    object.ProfileID = options.longs === String ? $util.Long.prototype.toString.call(message.ProfileID) : options.longs === Number ? new $util.LongBits(message.ProfileID.low >>> 0, message.ProfileID.high >>> 0).toNumber(true) : message.ProfileID;
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

    internal.Profile = (function() {

        /**
         * Properties of a Profile.
         * @typedef internal.Profile$Properties
         * @type {Object}
         * @property {number|Long} [ID] Profile ID.
         * @property {Array.<internal.Attr$Properties>} [Attrs] Profile Attrs.
         */

        /**
         * Constructs a new Profile.
         * @exports internal.Profile
         * @constructor
         * @param {internal.Profile$Properties=} [properties] Properties to set
         */
        function Profile(properties) {
            this.Attrs = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Profile ID.
         * @type {number|Long}
         */
        Profile.prototype.ID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Profile Attrs.
         * @type {Array.<internal.Attr$Properties>}
         */
        Profile.prototype.Attrs = $util.emptyArray;

        /**
         * Creates a new Profile instance using the specified properties.
         * @param {internal.Profile$Properties=} [properties] Properties to set
         * @returns {internal.Profile} Profile instance
         */
        Profile.create = function create(properties) {
            return new Profile(properties);
        };

        /**
         * Encodes the specified Profile message. Does not implicitly {@link internal.Profile.verify|verify} messages.
         * @param {internal.Profile$Properties} message Profile message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Profile.encode = function encode(message, writer) {
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
         * Encodes the specified Profile message, length delimited. Does not implicitly {@link internal.Profile.verify|verify} messages.
         * @param {internal.Profile$Properties} message Profile message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Profile.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Profile message from the specified reader or buffer.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {internal.Profile} Profile
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Profile.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.internal.Profile();
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
         * Decodes a Profile message from the specified reader or buffer, length delimited.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {internal.Profile} Profile
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Profile.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Profile message.
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {?string} `null` if valid, otherwise the reason why it is not
         */
        Profile.verify = function verify(message) {
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
         * Creates a Profile message from a plain object. Also converts values to their respective internal types.
         * @param {Object.<string,*>} object Plain object
         * @returns {internal.Profile} Profile
         */
        Profile.fromObject = function fromObject(object) {
            if (object instanceof $root.internal.Profile)
                return object;
            var message = new $root.internal.Profile();
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
                    throw TypeError(".internal.Profile.Attrs: array expected");
                message.Attrs = [];
                for (var i = 0; i < object.Attrs.length; ++i) {
                    if (typeof object.Attrs[i] !== "object")
                        throw TypeError(".internal.Profile.Attrs: object expected");
                    message.Attrs[i] = $root.internal.Attr.fromObject(object.Attrs[i]);
                }
            }
            return message;
        };

        /**
         * Creates a Profile message from a plain object. Also converts values to their respective internal types.
         * This is an alias of {@link internal.Profile.fromObject}.
         * @function
         * @param {Object.<string,*>} object Plain object
         * @returns {internal.Profile} Profile
         */
        Profile.from = Profile.fromObject;

        /**
         * Creates a plain object from a Profile message. Also converts values to other types if specified.
         * @param {internal.Profile} message Profile
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Profile.toObject = function toObject(message, options) {
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
         * Creates a plain object from this Profile message. Also converts values to other types if specified.
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Profile.prototype.toObject = function toObject(options) {
            return this.constructor.toObject(this, options);
        };

        /**
         * Converts this Profile to JSON.
         * @returns {Object.<string,*>} JSON object
         */
        Profile.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Profile;
    })();

    internal.Attr = (function() {

        /**
         * Properties of an Attr.
         * @typedef internal.Attr$Properties
         * @type {Object}
         * @property {string} [Key] Attr Key.
         * @property {number|Long} [Type] Attr Type.
         * @property {string} [StringValue] Attr StringValue.
         * @property {number|Long} [UintValue] Attr UintValue.
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
         * Attr UintValue.
         * @type {number|Long}
         */
        Attr.prototype.UintValue = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

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
            if (message.UintValue != null && message.hasOwnProperty("UintValue"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.UintValue);
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
                    message.UintValue = reader.uint64();
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
            if (message.UintValue != null && message.hasOwnProperty("UintValue"))
                if (!$util.isInteger(message.UintValue) && !(message.UintValue && $util.isInteger(message.UintValue.low) && $util.isInteger(message.UintValue.high)))
                    return "UintValue: integer|Long expected";
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
            if (object.UintValue != null)
                if ($util.Long)
                    (message.UintValue = $util.Long.fromValue(object.UintValue)).unsigned = true;
                else if (typeof object.UintValue === "string")
                    message.UintValue = parseInt(object.UintValue, 10);
                else if (typeof object.UintValue === "number")
                    message.UintValue = object.UintValue;
                else if (typeof object.UintValue === "object")
                    message.UintValue = new $util.LongBits(object.UintValue.low >>> 0, object.UintValue.high >>> 0).toNumber(true);
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
                    var long = new $util.Long(0, 0, true);
                    object.UintValue = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.UintValue = options.longs === String ? "0" : 0;
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
            if (message.UintValue != null && message.hasOwnProperty("UintValue"))
                if (typeof message.UintValue === "number")
                    object.UintValue = options.longs === String ? String(message.UintValue) : message.UintValue;
                else
                    object.UintValue = options.longs === String ? $util.Long.prototype.toString.call(message.UintValue) : options.longs === Number ? new $util.LongBits(message.UintValue.low >>> 0, message.UintValue.high >>> 0).toNumber(true) : message.UintValue;
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
         * @property {string} [DB] QueryRequest DB.
         * @property {string} [Query] QueryRequest Query.
         * @property {Array.<number|Long>} [Slices] QueryRequest Slices.
         * @property {boolean} [Profiles] QueryRequest Profiles.
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
         * QueryRequest DB.
         * @type {string}
         */
        QueryRequest.prototype.DB = "";

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
         * QueryRequest Profiles.
         * @type {boolean}
         */
        QueryRequest.prototype.Profiles = false;

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
            if (message.DB != null && message.hasOwnProperty("DB"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.DB);
            if (message.Query != null && message.hasOwnProperty("Query"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.Query);
            if (message.Slices != null && message.Slices.length) {
                writer.uint32(/* id 3, wireType 2 =*/26).fork();
                for (var i = 0; i < message.Slices.length; ++i)
                    writer.uint64(message.Slices[i]);
                writer.ldelim();
            }
            if (message.Profiles != null && message.hasOwnProperty("Profiles"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.Profiles);
            if (message.Quantum != null && message.hasOwnProperty("Quantum"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.Quantum);
            if (message.Remote != null && message.hasOwnProperty("Remote"))
                writer.uint32(/* id 6, wireType 0 =*/48).bool(message.Remote);
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
                    message.DB = reader.string();
                    break;
                case 2:
                    message.Query = reader.string();
                    break;
                case 3:
                    if (!(message.Slices && message.Slices.length))
                        message.Slices = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.Slices.push(reader.uint64());
                    } else
                        message.Slices.push(reader.uint64());
                    break;
                case 4:
                    message.Profiles = reader.bool();
                    break;
                case 5:
                    message.Quantum = reader.string();
                    break;
                case 6:
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
            if (message.DB != null && message.hasOwnProperty("DB"))
                if (!$util.isString(message.DB))
                    return "DB: string expected";
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
            if (message.Profiles != null && message.hasOwnProperty("Profiles"))
                if (typeof message.Profiles !== "boolean")
                    return "Profiles: boolean expected";
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
            if (object.DB != null)
                message.DB = String(object.DB);
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
            if (object.Profiles != null)
                message.Profiles = Boolean(object.Profiles);
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
                object.DB = "";
                object.Query = "";
                object.Profiles = false;
                object.Quantum = "";
                object.Remote = false;
            }
            if (message.DB != null && message.hasOwnProperty("DB"))
                object.DB = message.DB;
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
            if (message.Profiles != null && message.hasOwnProperty("Profiles"))
                object.Profiles = message.Profiles;
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
         * @property {Array.<internal.Profile$Properties>} [Profiles] QueryResponse Profiles.
         */

        /**
         * Constructs a new QueryResponse.
         * @exports internal.QueryResponse
         * @constructor
         * @param {internal.QueryResponse$Properties=} [properties] Properties to set
         */
        function QueryResponse(properties) {
            this.Results = [];
            this.Profiles = [];
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
         * QueryResponse Profiles.
         * @type {Array.<internal.Profile$Properties>}
         */
        QueryResponse.prototype.Profiles = $util.emptyArray;

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
            if (message.Profiles != null && message.Profiles.length)
                for (var i = 0; i < message.Profiles.length; ++i)
                    $root.internal.Profile.encode(message.Profiles[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
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
                    if (!(message.Profiles && message.Profiles.length))
                        message.Profiles = [];
                    message.Profiles.push($root.internal.Profile.decode(reader, reader.uint32()));
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
            if (message.Profiles != null && message.hasOwnProperty("Profiles")) {
                if (!Array.isArray(message.Profiles))
                    return "Profiles: array expected";
                for (var i = 0; i < message.Profiles.length; ++i) {
                    var error = $root.internal.Profile.verify(message.Profiles[i]);
                    if (error)
                        return "Profiles." + error;
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
            if (object.Profiles) {
                if (!Array.isArray(object.Profiles))
                    throw TypeError(".internal.QueryResponse.Profiles: array expected");
                message.Profiles = [];
                for (var i = 0; i < object.Profiles.length; ++i) {
                    if (typeof object.Profiles[i] !== "object")
                        throw TypeError(".internal.QueryResponse.Profiles: object expected");
                    message.Profiles[i] = $root.internal.Profile.fromObject(object.Profiles[i]);
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
                object.Profiles = [];
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
            if (message.Profiles && message.Profiles.length) {
                object.Profiles = [];
                for (var j = 0; j < message.Profiles.length; ++j)
                    object.Profiles[j] = $root.internal.Profile.toObject(message.Profiles[j], options);
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
         * @property {string} [DB] ImportRequest DB.
         * @property {string} [Frame] ImportRequest Frame.
         * @property {number|Long} [Slice] ImportRequest Slice.
         * @property {Array.<number|Long>} [BitmapIDs] ImportRequest BitmapIDs.
         * @property {Array.<number|Long>} [ProfileIDs] ImportRequest ProfileIDs.
         * @property {Array.<number|Long>} [Timestamps] ImportRequest Timestamps.
         */

        /**
         * Constructs a new ImportRequest.
         * @exports internal.ImportRequest
         * @constructor
         * @param {internal.ImportRequest$Properties=} [properties] Properties to set
         */
        function ImportRequest(properties) {
            this.BitmapIDs = [];
            this.ProfileIDs = [];
            this.Timestamps = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ImportRequest DB.
         * @type {string}
         */
        ImportRequest.prototype.DB = "";

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
         * ImportRequest BitmapIDs.
         * @type {Array.<number|Long>}
         */
        ImportRequest.prototype.BitmapIDs = $util.emptyArray;

        /**
         * ImportRequest ProfileIDs.
         * @type {Array.<number|Long>}
         */
        ImportRequest.prototype.ProfileIDs = $util.emptyArray;

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
            if (message.DB != null && message.hasOwnProperty("DB"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.DB);
            if (message.Frame != null && message.hasOwnProperty("Frame"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.Frame);
            if (message.Slice != null && message.hasOwnProperty("Slice"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.Slice);
            if (message.BitmapIDs != null && message.BitmapIDs.length) {
                writer.uint32(/* id 4, wireType 2 =*/34).fork();
                for (var i = 0; i < message.BitmapIDs.length; ++i)
                    writer.uint64(message.BitmapIDs[i]);
                writer.ldelim();
            }
            if (message.ProfileIDs != null && message.ProfileIDs.length) {
                writer.uint32(/* id 5, wireType 2 =*/42).fork();
                for (var i = 0; i < message.ProfileIDs.length; ++i)
                    writer.uint64(message.ProfileIDs[i]);
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
                    message.DB = reader.string();
                    break;
                case 2:
                    message.Frame = reader.string();
                    break;
                case 3:
                    message.Slice = reader.uint64();
                    break;
                case 4:
                    if (!(message.BitmapIDs && message.BitmapIDs.length))
                        message.BitmapIDs = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.BitmapIDs.push(reader.uint64());
                    } else
                        message.BitmapIDs.push(reader.uint64());
                    break;
                case 5:
                    if (!(message.ProfileIDs && message.ProfileIDs.length))
                        message.ProfileIDs = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.ProfileIDs.push(reader.uint64());
                    } else
                        message.ProfileIDs.push(reader.uint64());
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
            if (message.DB != null && message.hasOwnProperty("DB"))
                if (!$util.isString(message.DB))
                    return "DB: string expected";
            if (message.Frame != null && message.hasOwnProperty("Frame"))
                if (!$util.isString(message.Frame))
                    return "Frame: string expected";
            if (message.Slice != null && message.hasOwnProperty("Slice"))
                if (!$util.isInteger(message.Slice) && !(message.Slice && $util.isInteger(message.Slice.low) && $util.isInteger(message.Slice.high)))
                    return "Slice: integer|Long expected";
            if (message.BitmapIDs != null && message.hasOwnProperty("BitmapIDs")) {
                if (!Array.isArray(message.BitmapIDs))
                    return "BitmapIDs: array expected";
                for (var i = 0; i < message.BitmapIDs.length; ++i)
                    if (!$util.isInteger(message.BitmapIDs[i]) && !(message.BitmapIDs[i] && $util.isInteger(message.BitmapIDs[i].low) && $util.isInteger(message.BitmapIDs[i].high)))
                        return "BitmapIDs: integer|Long[] expected";
            }
            if (message.ProfileIDs != null && message.hasOwnProperty("ProfileIDs")) {
                if (!Array.isArray(message.ProfileIDs))
                    return "ProfileIDs: array expected";
                for (var i = 0; i < message.ProfileIDs.length; ++i)
                    if (!$util.isInteger(message.ProfileIDs[i]) && !(message.ProfileIDs[i] && $util.isInteger(message.ProfileIDs[i].low) && $util.isInteger(message.ProfileIDs[i].high)))
                        return "ProfileIDs: integer|Long[] expected";
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
            if (object.DB != null)
                message.DB = String(object.DB);
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
            if (object.BitmapIDs) {
                if (!Array.isArray(object.BitmapIDs))
                    throw TypeError(".internal.ImportRequest.BitmapIDs: array expected");
                message.BitmapIDs = [];
                for (var i = 0; i < object.BitmapIDs.length; ++i)
                    if ($util.Long)
                        (message.BitmapIDs[i] = $util.Long.fromValue(object.BitmapIDs[i])).unsigned = true;
                    else if (typeof object.BitmapIDs[i] === "string")
                        message.BitmapIDs[i] = parseInt(object.BitmapIDs[i], 10);
                    else if (typeof object.BitmapIDs[i] === "number")
                        message.BitmapIDs[i] = object.BitmapIDs[i];
                    else if (typeof object.BitmapIDs[i] === "object")
                        message.BitmapIDs[i] = new $util.LongBits(object.BitmapIDs[i].low >>> 0, object.BitmapIDs[i].high >>> 0).toNumber(true);
            }
            if (object.ProfileIDs) {
                if (!Array.isArray(object.ProfileIDs))
                    throw TypeError(".internal.ImportRequest.ProfileIDs: array expected");
                message.ProfileIDs = [];
                for (var i = 0; i < object.ProfileIDs.length; ++i)
                    if ($util.Long)
                        (message.ProfileIDs[i] = $util.Long.fromValue(object.ProfileIDs[i])).unsigned = true;
                    else if (typeof object.ProfileIDs[i] === "string")
                        message.ProfileIDs[i] = parseInt(object.ProfileIDs[i], 10);
                    else if (typeof object.ProfileIDs[i] === "number")
                        message.ProfileIDs[i] = object.ProfileIDs[i];
                    else if (typeof object.ProfileIDs[i] === "object")
                        message.ProfileIDs[i] = new $util.LongBits(object.ProfileIDs[i].low >>> 0, object.ProfileIDs[i].high >>> 0).toNumber(true);
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
                object.BitmapIDs = [];
                object.ProfileIDs = [];
                object.Timestamps = [];
            }
            if (options.defaults) {
                object.DB = "";
                object.Frame = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.Slice = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Slice = options.longs === String ? "0" : 0;
            }
            if (message.DB != null && message.hasOwnProperty("DB"))
                object.DB = message.DB;
            if (message.Frame != null && message.hasOwnProperty("Frame"))
                object.Frame = message.Frame;
            if (message.Slice != null && message.hasOwnProperty("Slice"))
                if (typeof message.Slice === "number")
                    object.Slice = options.longs === String ? String(message.Slice) : message.Slice;
                else
                    object.Slice = options.longs === String ? $util.Long.prototype.toString.call(message.Slice) : options.longs === Number ? new $util.LongBits(message.Slice.low >>> 0, message.Slice.high >>> 0).toNumber(true) : message.Slice;
            if (message.BitmapIDs && message.BitmapIDs.length) {
                object.BitmapIDs = [];
                for (var j = 0; j < message.BitmapIDs.length; ++j)
                    if (typeof message.BitmapIDs[j] === "number")
                        object.BitmapIDs[j] = options.longs === String ? String(message.BitmapIDs[j]) : message.BitmapIDs[j];
                    else
                        object.BitmapIDs[j] = options.longs === String ? $util.Long.prototype.toString.call(message.BitmapIDs[j]) : options.longs === Number ? new $util.LongBits(message.BitmapIDs[j].low >>> 0, message.BitmapIDs[j].high >>> 0).toNumber(true) : message.BitmapIDs[j];
            }
            if (message.ProfileIDs && message.ProfileIDs.length) {
                object.ProfileIDs = [];
                for (var j = 0; j < message.ProfileIDs.length; ++j)
                    if (typeof message.ProfileIDs[j] === "number")
                        object.ProfileIDs[j] = options.longs === String ? String(message.ProfileIDs[j]) : message.ProfileIDs[j];
                    else
                        object.ProfileIDs[j] = options.longs === String ? $util.Long.prototype.toString.call(message.ProfileIDs[j]) : options.longs === Number ? new $util.LongBits(message.ProfileIDs[j].low >>> 0, message.ProfileIDs[j].high >>> 0).toNumber(true) : message.ProfileIDs[j];
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

    internal.ImportResponse = (function() {

        /**
         * Properties of an ImportResponse.
         * @typedef internal.ImportResponse$Properties
         * @type {Object}
         * @property {string} [Err] ImportResponse Err.
         */

        /**
         * Constructs a new ImportResponse.
         * @exports internal.ImportResponse
         * @constructor
         * @param {internal.ImportResponse$Properties=} [properties] Properties to set
         */
        function ImportResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ImportResponse Err.
         * @type {string}
         */
        ImportResponse.prototype.Err = "";

        /**
         * Creates a new ImportResponse instance using the specified properties.
         * @param {internal.ImportResponse$Properties=} [properties] Properties to set
         * @returns {internal.ImportResponse} ImportResponse instance
         */
        ImportResponse.create = function create(properties) {
            return new ImportResponse(properties);
        };

        /**
         * Encodes the specified ImportResponse message. Does not implicitly {@link internal.ImportResponse.verify|verify} messages.
         * @param {internal.ImportResponse$Properties} message ImportResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ImportResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Err != null && message.hasOwnProperty("Err"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.Err);
            return writer;
        };

        /**
         * Encodes the specified ImportResponse message, length delimited. Does not implicitly {@link internal.ImportResponse.verify|verify} messages.
         * @param {internal.ImportResponse$Properties} message ImportResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ImportResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ImportResponse message from the specified reader or buffer.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {internal.ImportResponse} ImportResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ImportResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.internal.ImportResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Err = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an ImportResponse message from the specified reader or buffer, length delimited.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {internal.ImportResponse} ImportResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ImportResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ImportResponse message.
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {?string} `null` if valid, otherwise the reason why it is not
         */
        ImportResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Err != null && message.hasOwnProperty("Err"))
                if (!$util.isString(message.Err))
                    return "Err: string expected";
            return null;
        };

        /**
         * Creates an ImportResponse message from a plain object. Also converts values to their respective internal types.
         * @param {Object.<string,*>} object Plain object
         * @returns {internal.ImportResponse} ImportResponse
         */
        ImportResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.internal.ImportResponse)
                return object;
            var message = new $root.internal.ImportResponse();
            if (object.Err != null)
                message.Err = String(object.Err);
            return message;
        };

        /**
         * Creates an ImportResponse message from a plain object. Also converts values to their respective internal types.
         * This is an alias of {@link internal.ImportResponse.fromObject}.
         * @function
         * @param {Object.<string,*>} object Plain object
         * @returns {internal.ImportResponse} ImportResponse
         */
        ImportResponse.from = ImportResponse.fromObject;

        /**
         * Creates a plain object from an ImportResponse message. Also converts values to other types if specified.
         * @param {internal.ImportResponse} message ImportResponse
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ImportResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.Err = "";
            if (message.Err != null && message.hasOwnProperty("Err"))
                object.Err = message.Err;
            return object;
        };

        /**
         * Creates a plain object from this ImportResponse message. Also converts values to other types if specified.
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ImportResponse.prototype.toObject = function toObject(options) {
            return this.constructor.toObject(this, options);
        };

        /**
         * Converts this ImportResponse to JSON.
         * @returns {Object.<string,*>} JSON object
         */
        ImportResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ImportResponse;
    })();

    internal.BlockDataRequest = (function() {

        /**
         * Properties of a BlockDataRequest.
         * @typedef internal.BlockDataRequest$Properties
         * @type {Object}
         * @property {string} [DB] BlockDataRequest DB.
         * @property {string} [Frame] BlockDataRequest Frame.
         * @property {number|Long} [Slice] BlockDataRequest Slice.
         * @property {number|Long} [Block] BlockDataRequest Block.
         */

        /**
         * Constructs a new BlockDataRequest.
         * @exports internal.BlockDataRequest
         * @constructor
         * @param {internal.BlockDataRequest$Properties=} [properties] Properties to set
         */
        function BlockDataRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BlockDataRequest DB.
         * @type {string}
         */
        BlockDataRequest.prototype.DB = "";

        /**
         * BlockDataRequest Frame.
         * @type {string}
         */
        BlockDataRequest.prototype.Frame = "";

        /**
         * BlockDataRequest Slice.
         * @type {number|Long}
         */
        BlockDataRequest.prototype.Slice = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * BlockDataRequest Block.
         * @type {number|Long}
         */
        BlockDataRequest.prototype.Block = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new BlockDataRequest instance using the specified properties.
         * @param {internal.BlockDataRequest$Properties=} [properties] Properties to set
         * @returns {internal.BlockDataRequest} BlockDataRequest instance
         */
        BlockDataRequest.create = function create(properties) {
            return new BlockDataRequest(properties);
        };

        /**
         * Encodes the specified BlockDataRequest message. Does not implicitly {@link internal.BlockDataRequest.verify|verify} messages.
         * @param {internal.BlockDataRequest$Properties} message BlockDataRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BlockDataRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.DB != null && message.hasOwnProperty("DB"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.DB);
            if (message.Frame != null && message.hasOwnProperty("Frame"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.Frame);
            if (message.Slice != null && message.hasOwnProperty("Slice"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.Slice);
            if (message.Block != null && message.hasOwnProperty("Block"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.Block);
            return writer;
        };

        /**
         * Encodes the specified BlockDataRequest message, length delimited. Does not implicitly {@link internal.BlockDataRequest.verify|verify} messages.
         * @param {internal.BlockDataRequest$Properties} message BlockDataRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BlockDataRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BlockDataRequest message from the specified reader or buffer.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {internal.BlockDataRequest} BlockDataRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BlockDataRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.internal.BlockDataRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.DB = reader.string();
                    break;
                case 2:
                    message.Frame = reader.string();
                    break;
                case 3:
                    message.Slice = reader.uint64();
                    break;
                case 4:
                    message.Block = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BlockDataRequest message from the specified reader or buffer, length delimited.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {internal.BlockDataRequest} BlockDataRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BlockDataRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BlockDataRequest message.
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {?string} `null` if valid, otherwise the reason why it is not
         */
        BlockDataRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.DB != null && message.hasOwnProperty("DB"))
                if (!$util.isString(message.DB))
                    return "DB: string expected";
            if (message.Frame != null && message.hasOwnProperty("Frame"))
                if (!$util.isString(message.Frame))
                    return "Frame: string expected";
            if (message.Slice != null && message.hasOwnProperty("Slice"))
                if (!$util.isInteger(message.Slice) && !(message.Slice && $util.isInteger(message.Slice.low) && $util.isInteger(message.Slice.high)))
                    return "Slice: integer|Long expected";
            if (message.Block != null && message.hasOwnProperty("Block"))
                if (!$util.isInteger(message.Block) && !(message.Block && $util.isInteger(message.Block.low) && $util.isInteger(message.Block.high)))
                    return "Block: integer|Long expected";
            return null;
        };

        /**
         * Creates a BlockDataRequest message from a plain object. Also converts values to their respective internal types.
         * @param {Object.<string,*>} object Plain object
         * @returns {internal.BlockDataRequest} BlockDataRequest
         */
        BlockDataRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.internal.BlockDataRequest)
                return object;
            var message = new $root.internal.BlockDataRequest();
            if (object.DB != null)
                message.DB = String(object.DB);
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
            if (object.Block != null)
                if ($util.Long)
                    (message.Block = $util.Long.fromValue(object.Block)).unsigned = true;
                else if (typeof object.Block === "string")
                    message.Block = parseInt(object.Block, 10);
                else if (typeof object.Block === "number")
                    message.Block = object.Block;
                else if (typeof object.Block === "object")
                    message.Block = new $util.LongBits(object.Block.low >>> 0, object.Block.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a BlockDataRequest message from a plain object. Also converts values to their respective internal types.
         * This is an alias of {@link internal.BlockDataRequest.fromObject}.
         * @function
         * @param {Object.<string,*>} object Plain object
         * @returns {internal.BlockDataRequest} BlockDataRequest
         */
        BlockDataRequest.from = BlockDataRequest.fromObject;

        /**
         * Creates a plain object from a BlockDataRequest message. Also converts values to other types if specified.
         * @param {internal.BlockDataRequest} message BlockDataRequest
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BlockDataRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.DB = "";
                object.Frame = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.Slice = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Slice = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.Block = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Block = options.longs === String ? "0" : 0;
            }
            if (message.DB != null && message.hasOwnProperty("DB"))
                object.DB = message.DB;
            if (message.Frame != null && message.hasOwnProperty("Frame"))
                object.Frame = message.Frame;
            if (message.Slice != null && message.hasOwnProperty("Slice"))
                if (typeof message.Slice === "number")
                    object.Slice = options.longs === String ? String(message.Slice) : message.Slice;
                else
                    object.Slice = options.longs === String ? $util.Long.prototype.toString.call(message.Slice) : options.longs === Number ? new $util.LongBits(message.Slice.low >>> 0, message.Slice.high >>> 0).toNumber(true) : message.Slice;
            if (message.Block != null && message.hasOwnProperty("Block"))
                if (typeof message.Block === "number")
                    object.Block = options.longs === String ? String(message.Block) : message.Block;
                else
                    object.Block = options.longs === String ? $util.Long.prototype.toString.call(message.Block) : options.longs === Number ? new $util.LongBits(message.Block.low >>> 0, message.Block.high >>> 0).toNumber(true) : message.Block;
            return object;
        };

        /**
         * Creates a plain object from this BlockDataRequest message. Also converts values to other types if specified.
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BlockDataRequest.prototype.toObject = function toObject(options) {
            return this.constructor.toObject(this, options);
        };

        /**
         * Converts this BlockDataRequest to JSON.
         * @returns {Object.<string,*>} JSON object
         */
        BlockDataRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BlockDataRequest;
    })();

    internal.BlockDataResponse = (function() {

        /**
         * Properties of a BlockDataResponse.
         * @typedef internal.BlockDataResponse$Properties
         * @type {Object}
         * @property {Array.<number|Long>} [BitmapIDs] BlockDataResponse BitmapIDs.
         * @property {Array.<number|Long>} [ProfileIDs] BlockDataResponse ProfileIDs.
         */

        /**
         * Constructs a new BlockDataResponse.
         * @exports internal.BlockDataResponse
         * @constructor
         * @param {internal.BlockDataResponse$Properties=} [properties] Properties to set
         */
        function BlockDataResponse(properties) {
            this.BitmapIDs = [];
            this.ProfileIDs = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BlockDataResponse BitmapIDs.
         * @type {Array.<number|Long>}
         */
        BlockDataResponse.prototype.BitmapIDs = $util.emptyArray;

        /**
         * BlockDataResponse ProfileIDs.
         * @type {Array.<number|Long>}
         */
        BlockDataResponse.prototype.ProfileIDs = $util.emptyArray;

        /**
         * Creates a new BlockDataResponse instance using the specified properties.
         * @param {internal.BlockDataResponse$Properties=} [properties] Properties to set
         * @returns {internal.BlockDataResponse} BlockDataResponse instance
         */
        BlockDataResponse.create = function create(properties) {
            return new BlockDataResponse(properties);
        };

        /**
         * Encodes the specified BlockDataResponse message. Does not implicitly {@link internal.BlockDataResponse.verify|verify} messages.
         * @param {internal.BlockDataResponse$Properties} message BlockDataResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BlockDataResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.BitmapIDs != null && message.BitmapIDs.length) {
                writer.uint32(/* id 1, wireType 2 =*/10).fork();
                for (var i = 0; i < message.BitmapIDs.length; ++i)
                    writer.uint64(message.BitmapIDs[i]);
                writer.ldelim();
            }
            if (message.ProfileIDs != null && message.ProfileIDs.length) {
                writer.uint32(/* id 2, wireType 2 =*/18).fork();
                for (var i = 0; i < message.ProfileIDs.length; ++i)
                    writer.uint64(message.ProfileIDs[i]);
                writer.ldelim();
            }
            return writer;
        };

        /**
         * Encodes the specified BlockDataResponse message, length delimited. Does not implicitly {@link internal.BlockDataResponse.verify|verify} messages.
         * @param {internal.BlockDataResponse$Properties} message BlockDataResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BlockDataResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BlockDataResponse message from the specified reader or buffer.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {internal.BlockDataResponse} BlockDataResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BlockDataResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.internal.BlockDataResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.BitmapIDs && message.BitmapIDs.length))
                        message.BitmapIDs = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.BitmapIDs.push(reader.uint64());
                    } else
                        message.BitmapIDs.push(reader.uint64());
                    break;
                case 2:
                    if (!(message.ProfileIDs && message.ProfileIDs.length))
                        message.ProfileIDs = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.ProfileIDs.push(reader.uint64());
                    } else
                        message.ProfileIDs.push(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BlockDataResponse message from the specified reader or buffer, length delimited.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {internal.BlockDataResponse} BlockDataResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BlockDataResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BlockDataResponse message.
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {?string} `null` if valid, otherwise the reason why it is not
         */
        BlockDataResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.BitmapIDs != null && message.hasOwnProperty("BitmapIDs")) {
                if (!Array.isArray(message.BitmapIDs))
                    return "BitmapIDs: array expected";
                for (var i = 0; i < message.BitmapIDs.length; ++i)
                    if (!$util.isInteger(message.BitmapIDs[i]) && !(message.BitmapIDs[i] && $util.isInteger(message.BitmapIDs[i].low) && $util.isInteger(message.BitmapIDs[i].high)))
                        return "BitmapIDs: integer|Long[] expected";
            }
            if (message.ProfileIDs != null && message.hasOwnProperty("ProfileIDs")) {
                if (!Array.isArray(message.ProfileIDs))
                    return "ProfileIDs: array expected";
                for (var i = 0; i < message.ProfileIDs.length; ++i)
                    if (!$util.isInteger(message.ProfileIDs[i]) && !(message.ProfileIDs[i] && $util.isInteger(message.ProfileIDs[i].low) && $util.isInteger(message.ProfileIDs[i].high)))
                        return "ProfileIDs: integer|Long[] expected";
            }
            return null;
        };

        /**
         * Creates a BlockDataResponse message from a plain object. Also converts values to their respective internal types.
         * @param {Object.<string,*>} object Plain object
         * @returns {internal.BlockDataResponse} BlockDataResponse
         */
        BlockDataResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.internal.BlockDataResponse)
                return object;
            var message = new $root.internal.BlockDataResponse();
            if (object.BitmapIDs) {
                if (!Array.isArray(object.BitmapIDs))
                    throw TypeError(".internal.BlockDataResponse.BitmapIDs: array expected");
                message.BitmapIDs = [];
                for (var i = 0; i < object.BitmapIDs.length; ++i)
                    if ($util.Long)
                        (message.BitmapIDs[i] = $util.Long.fromValue(object.BitmapIDs[i])).unsigned = true;
                    else if (typeof object.BitmapIDs[i] === "string")
                        message.BitmapIDs[i] = parseInt(object.BitmapIDs[i], 10);
                    else if (typeof object.BitmapIDs[i] === "number")
                        message.BitmapIDs[i] = object.BitmapIDs[i];
                    else if (typeof object.BitmapIDs[i] === "object")
                        message.BitmapIDs[i] = new $util.LongBits(object.BitmapIDs[i].low >>> 0, object.BitmapIDs[i].high >>> 0).toNumber(true);
            }
            if (object.ProfileIDs) {
                if (!Array.isArray(object.ProfileIDs))
                    throw TypeError(".internal.BlockDataResponse.ProfileIDs: array expected");
                message.ProfileIDs = [];
                for (var i = 0; i < object.ProfileIDs.length; ++i)
                    if ($util.Long)
                        (message.ProfileIDs[i] = $util.Long.fromValue(object.ProfileIDs[i])).unsigned = true;
                    else if (typeof object.ProfileIDs[i] === "string")
                        message.ProfileIDs[i] = parseInt(object.ProfileIDs[i], 10);
                    else if (typeof object.ProfileIDs[i] === "number")
                        message.ProfileIDs[i] = object.ProfileIDs[i];
                    else if (typeof object.ProfileIDs[i] === "object")
                        message.ProfileIDs[i] = new $util.LongBits(object.ProfileIDs[i].low >>> 0, object.ProfileIDs[i].high >>> 0).toNumber(true);
            }
            return message;
        };

        /**
         * Creates a BlockDataResponse message from a plain object. Also converts values to their respective internal types.
         * This is an alias of {@link internal.BlockDataResponse.fromObject}.
         * @function
         * @param {Object.<string,*>} object Plain object
         * @returns {internal.BlockDataResponse} BlockDataResponse
         */
        BlockDataResponse.from = BlockDataResponse.fromObject;

        /**
         * Creates a plain object from a BlockDataResponse message. Also converts values to other types if specified.
         * @param {internal.BlockDataResponse} message BlockDataResponse
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BlockDataResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.BitmapIDs = [];
                object.ProfileIDs = [];
            }
            if (message.BitmapIDs && message.BitmapIDs.length) {
                object.BitmapIDs = [];
                for (var j = 0; j < message.BitmapIDs.length; ++j)
                    if (typeof message.BitmapIDs[j] === "number")
                        object.BitmapIDs[j] = options.longs === String ? String(message.BitmapIDs[j]) : message.BitmapIDs[j];
                    else
                        object.BitmapIDs[j] = options.longs === String ? $util.Long.prototype.toString.call(message.BitmapIDs[j]) : options.longs === Number ? new $util.LongBits(message.BitmapIDs[j].low >>> 0, message.BitmapIDs[j].high >>> 0).toNumber(true) : message.BitmapIDs[j];
            }
            if (message.ProfileIDs && message.ProfileIDs.length) {
                object.ProfileIDs = [];
                for (var j = 0; j < message.ProfileIDs.length; ++j)
                    if (typeof message.ProfileIDs[j] === "number")
                        object.ProfileIDs[j] = options.longs === String ? String(message.ProfileIDs[j]) : message.ProfileIDs[j];
                    else
                        object.ProfileIDs[j] = options.longs === String ? $util.Long.prototype.toString.call(message.ProfileIDs[j]) : options.longs === Number ? new $util.LongBits(message.ProfileIDs[j].low >>> 0, message.ProfileIDs[j].high >>> 0).toNumber(true) : message.ProfileIDs[j];
            }
            return object;
        };

        /**
         * Creates a plain object from this BlockDataResponse message. Also converts values to other types if specified.
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BlockDataResponse.prototype.toObject = function toObject(options) {
            return this.constructor.toObject(this, options);
        };

        /**
         * Converts this BlockDataResponse to JSON.
         * @returns {Object.<string,*>} JSON object
         */
        BlockDataResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BlockDataResponse;
    })();

    internal.Cache = (function() {

        /**
         * Properties of a Cache.
         * @typedef internal.Cache$Properties
         * @type {Object}
         * @property {Array.<number|Long>} [BitmapIDs] Cache BitmapIDs.
         */

        /**
         * Constructs a new Cache.
         * @exports internal.Cache
         * @constructor
         * @param {internal.Cache$Properties=} [properties] Properties to set
         */
        function Cache(properties) {
            this.BitmapIDs = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Cache BitmapIDs.
         * @type {Array.<number|Long>}
         */
        Cache.prototype.BitmapIDs = $util.emptyArray;

        /**
         * Creates a new Cache instance using the specified properties.
         * @param {internal.Cache$Properties=} [properties] Properties to set
         * @returns {internal.Cache} Cache instance
         */
        Cache.create = function create(properties) {
            return new Cache(properties);
        };

        /**
         * Encodes the specified Cache message. Does not implicitly {@link internal.Cache.verify|verify} messages.
         * @param {internal.Cache$Properties} message Cache message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Cache.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.BitmapIDs != null && message.BitmapIDs.length) {
                writer.uint32(/* id 1, wireType 2 =*/10).fork();
                for (var i = 0; i < message.BitmapIDs.length; ++i)
                    writer.uint64(message.BitmapIDs[i]);
                writer.ldelim();
            }
            return writer;
        };

        /**
         * Encodes the specified Cache message, length delimited. Does not implicitly {@link internal.Cache.verify|verify} messages.
         * @param {internal.Cache$Properties} message Cache message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Cache.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Cache message from the specified reader or buffer.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {internal.Cache} Cache
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Cache.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.internal.Cache();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.BitmapIDs && message.BitmapIDs.length))
                        message.BitmapIDs = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.BitmapIDs.push(reader.uint64());
                    } else
                        message.BitmapIDs.push(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Cache message from the specified reader or buffer, length delimited.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {internal.Cache} Cache
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Cache.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Cache message.
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {?string} `null` if valid, otherwise the reason why it is not
         */
        Cache.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.BitmapIDs != null && message.hasOwnProperty("BitmapIDs")) {
                if (!Array.isArray(message.BitmapIDs))
                    return "BitmapIDs: array expected";
                for (var i = 0; i < message.BitmapIDs.length; ++i)
                    if (!$util.isInteger(message.BitmapIDs[i]) && !(message.BitmapIDs[i] && $util.isInteger(message.BitmapIDs[i].low) && $util.isInteger(message.BitmapIDs[i].high)))
                        return "BitmapIDs: integer|Long[] expected";
            }
            return null;
        };

        /**
         * Creates a Cache message from a plain object. Also converts values to their respective internal types.
         * @param {Object.<string,*>} object Plain object
         * @returns {internal.Cache} Cache
         */
        Cache.fromObject = function fromObject(object) {
            if (object instanceof $root.internal.Cache)
                return object;
            var message = new $root.internal.Cache();
            if (object.BitmapIDs) {
                if (!Array.isArray(object.BitmapIDs))
                    throw TypeError(".internal.Cache.BitmapIDs: array expected");
                message.BitmapIDs = [];
                for (var i = 0; i < object.BitmapIDs.length; ++i)
                    if ($util.Long)
                        (message.BitmapIDs[i] = $util.Long.fromValue(object.BitmapIDs[i])).unsigned = true;
                    else if (typeof object.BitmapIDs[i] === "string")
                        message.BitmapIDs[i] = parseInt(object.BitmapIDs[i], 10);
                    else if (typeof object.BitmapIDs[i] === "number")
                        message.BitmapIDs[i] = object.BitmapIDs[i];
                    else if (typeof object.BitmapIDs[i] === "object")
                        message.BitmapIDs[i] = new $util.LongBits(object.BitmapIDs[i].low >>> 0, object.BitmapIDs[i].high >>> 0).toNumber(true);
            }
            return message;
        };

        /**
         * Creates a Cache message from a plain object. Also converts values to their respective internal types.
         * This is an alias of {@link internal.Cache.fromObject}.
         * @function
         * @param {Object.<string,*>} object Plain object
         * @returns {internal.Cache} Cache
         */
        Cache.from = Cache.fromObject;

        /**
         * Creates a plain object from a Cache message. Also converts values to other types if specified.
         * @param {internal.Cache} message Cache
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Cache.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.BitmapIDs = [];
            if (message.BitmapIDs && message.BitmapIDs.length) {
                object.BitmapIDs = [];
                for (var j = 0; j < message.BitmapIDs.length; ++j)
                    if (typeof message.BitmapIDs[j] === "number")
                        object.BitmapIDs[j] = options.longs === String ? String(message.BitmapIDs[j]) : message.BitmapIDs[j];
                    else
                        object.BitmapIDs[j] = options.longs === String ? $util.Long.prototype.toString.call(message.BitmapIDs[j]) : options.longs === Number ? new $util.LongBits(message.BitmapIDs[j].low >>> 0, message.BitmapIDs[j].high >>> 0).toNumber(true) : message.BitmapIDs[j];
            }
            return object;
        };

        /**
         * Creates a plain object from this Cache message. Also converts values to other types if specified.
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Cache.prototype.toObject = function toObject(options) {
            return this.constructor.toObject(this, options);
        };

        /**
         * Converts this Cache to JSON.
         * @returns {Object.<string,*>} JSON object
         */
        Cache.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Cache;
    })();

    internal.MaxSlicesResponse = (function() {

        /**
         * Properties of a MaxSlicesResponse.
         * @typedef internal.MaxSlicesResponse$Properties
         * @type {Object}
         * @property {Object.<string,number|Long>} [MaxSlices] MaxSlicesResponse MaxSlices.
         */

        /**
         * Constructs a new MaxSlicesResponse.
         * @exports internal.MaxSlicesResponse
         * @constructor
         * @param {internal.MaxSlicesResponse$Properties=} [properties] Properties to set
         */
        function MaxSlicesResponse(properties) {
            this.MaxSlices = {};
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MaxSlicesResponse MaxSlices.
         * @type {Object.<string,number|Long>}
         */
        MaxSlicesResponse.prototype.MaxSlices = $util.emptyObject;

        /**
         * Creates a new MaxSlicesResponse instance using the specified properties.
         * @param {internal.MaxSlicesResponse$Properties=} [properties] Properties to set
         * @returns {internal.MaxSlicesResponse} MaxSlicesResponse instance
         */
        MaxSlicesResponse.create = function create(properties) {
            return new MaxSlicesResponse(properties);
        };

        /**
         * Encodes the specified MaxSlicesResponse message. Does not implicitly {@link internal.MaxSlicesResponse.verify|verify} messages.
         * @param {internal.MaxSlicesResponse$Properties} message MaxSlicesResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MaxSlicesResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.MaxSlices != null && message.hasOwnProperty("MaxSlices"))
                for (var keys = Object.keys(message.MaxSlices), i = 0; i < keys.length; ++i)
                    writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 0 =*/16).uint64(message.MaxSlices[keys[i]]).ldelim();
            return writer;
        };

        /**
         * Encodes the specified MaxSlicesResponse message, length delimited. Does not implicitly {@link internal.MaxSlicesResponse.verify|verify} messages.
         * @param {internal.MaxSlicesResponse$Properties} message MaxSlicesResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MaxSlicesResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MaxSlicesResponse message from the specified reader or buffer.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {internal.MaxSlicesResponse} MaxSlicesResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MaxSlicesResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.internal.MaxSlicesResponse(), key;
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    reader.skip().pos++;
                    if (message.MaxSlices === $util.emptyObject)
                        message.MaxSlices = {};
                    key = reader.string();
                    reader.pos++;
                    message.MaxSlices[key] = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MaxSlicesResponse message from the specified reader or buffer, length delimited.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {internal.MaxSlicesResponse} MaxSlicesResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MaxSlicesResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MaxSlicesResponse message.
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {?string} `null` if valid, otherwise the reason why it is not
         */
        MaxSlicesResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.MaxSlices != null && message.hasOwnProperty("MaxSlices")) {
                if (!$util.isObject(message.MaxSlices))
                    return "MaxSlices: object expected";
                var key = Object.keys(message.MaxSlices);
                for (var i = 0; i < key.length; ++i)
                    if (!$util.isInteger(message.MaxSlices[key[i]]) && !(message.MaxSlices[key[i]] && $util.isInteger(message.MaxSlices[key[i]].low) && $util.isInteger(message.MaxSlices[key[i]].high)))
                        return "MaxSlices: integer|Long{k:string} expected";
            }
            return null;
        };

        /**
         * Creates a MaxSlicesResponse message from a plain object. Also converts values to their respective internal types.
         * @param {Object.<string,*>} object Plain object
         * @returns {internal.MaxSlicesResponse} MaxSlicesResponse
         */
        MaxSlicesResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.internal.MaxSlicesResponse)
                return object;
            var message = new $root.internal.MaxSlicesResponse();
            if (object.MaxSlices) {
                if (typeof object.MaxSlices !== "object")
                    throw TypeError(".internal.MaxSlicesResponse.MaxSlices: object expected");
                message.MaxSlices = {};
                for (var keys = Object.keys(object.MaxSlices), i = 0; i < keys.length; ++i)
                    if ($util.Long)
                        (message.MaxSlices[keys[i]] = $util.Long.fromValue(object.MaxSlices[keys[i]])).unsigned = true;
                    else if (typeof object.MaxSlices[keys[i]] === "string")
                        message.MaxSlices[keys[i]] = parseInt(object.MaxSlices[keys[i]], 10);
                    else if (typeof object.MaxSlices[keys[i]] === "number")
                        message.MaxSlices[keys[i]] = object.MaxSlices[keys[i]];
                    else if (typeof object.MaxSlices[keys[i]] === "object")
                        message.MaxSlices[keys[i]] = new $util.LongBits(object.MaxSlices[keys[i]].low >>> 0, object.MaxSlices[keys[i]].high >>> 0).toNumber(true);
            }
            return message;
        };

        /**
         * Creates a MaxSlicesResponse message from a plain object. Also converts values to their respective internal types.
         * This is an alias of {@link internal.MaxSlicesResponse.fromObject}.
         * @function
         * @param {Object.<string,*>} object Plain object
         * @returns {internal.MaxSlicesResponse} MaxSlicesResponse
         */
        MaxSlicesResponse.from = MaxSlicesResponse.fromObject;

        /**
         * Creates a plain object from a MaxSlicesResponse message. Also converts values to other types if specified.
         * @param {internal.MaxSlicesResponse} message MaxSlicesResponse
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MaxSlicesResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.objects || options.defaults)
                object.MaxSlices = {};
            var keys2;
            if (message.MaxSlices && (keys2 = Object.keys(message.MaxSlices)).length) {
                object.MaxSlices = {};
                for (var j = 0; j < keys2.length; ++j)
                    if (typeof message.MaxSlices[keys2[j]] === "number")
                        object.MaxSlices[keys2[j]] = options.longs === String ? String(message.MaxSlices[keys2[j]]) : message.MaxSlices[keys2[j]];
                    else
                        object.MaxSlices[keys2[j]] = options.longs === String ? $util.Long.prototype.toString.call(message.MaxSlices[keys2[j]]) : options.longs === Number ? new $util.LongBits(message.MaxSlices[keys2[j]].low >>> 0, message.MaxSlices[keys2[j]].high >>> 0).toNumber(true) : message.MaxSlices[keys2[j]];
            }
            return object;
        };

        /**
         * Creates a plain object from this MaxSlicesResponse message. Also converts values to other types if specified.
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MaxSlicesResponse.prototype.toObject = function toObject(options) {
            return this.constructor.toObject(this, options);
        };

        /**
         * Converts this MaxSlicesResponse to JSON.
         * @returns {Object.<string,*>} JSON object
         */
        MaxSlicesResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MaxSlicesResponse;
    })();

    return internal;
})();

module.exports = $root;
