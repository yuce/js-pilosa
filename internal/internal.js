/*eslint-disable block-scoped-var, no-redeclare, no-control-regex, no-prototype-builtins*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Lazily resolved type references
var $lazyTypes = [];

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
         * Constructs a new DB.
         * @exports internal.DB
         * @constructor
         * @param {Object} [properties] Properties to set
         */
        function DB(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    this[keys[i]] = properties[keys[i]];
        }

        /**
         * DB TimeQuantum.
         * @type {string|undefined}
         */
        DB.prototype.TimeQuantum = "";

        /**
         * DB ColumnLabel.
         * @type {string|undefined}
         */
        DB.prototype.ColumnLabel = "";

        /**
         * Creates a new DB instance using the specified properties.
         * @param {Object} [properties] Properties to set
         * @returns {internal.DB} DB instance
         */
        DB.create = function create(properties) {
            return new DB(properties);
        };

        /**
         * Encodes the specified DB message.
         * @param {internal.DB|Object} message DB message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DB.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.TimeQuantum !== undefined && message.hasOwnProperty("TimeQuantum"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.TimeQuantum);
            if (message.ColumnLabel !== undefined && message.hasOwnProperty("ColumnLabel"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.ColumnLabel);
            return writer;
        };

        /**
         * Encodes the specified DB message, length delimited.
         * @param {internal.DB|Object} message DB message or plain object to encode
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
         */
        DB.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DB message.
         * @param {internal.DB|Object} message DB message or plain object to verify
         * @returns {?string} `null` if valid, otherwise the reason why it is not
         */
        DB.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.TimeQuantum !== undefined)
                if (!$util.isString(message.TimeQuantum))
                    return "TimeQuantum: string expected";
            if (message.ColumnLabel !== undefined)
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
            if (object.TimeQuantum !== undefined && object.TimeQuantum !== null)
                message.TimeQuantum = String(object.TimeQuantum);
            if (object.ColumnLabel !== undefined && object.ColumnLabel !== null)
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
            if (message.TimeQuantum !== undefined && message.TimeQuantum !== null && message.hasOwnProperty("TimeQuantum"))
                object.TimeQuantum = message.TimeQuantum;
            if (message.ColumnLabel !== undefined && message.ColumnLabel !== null && message.hasOwnProperty("ColumnLabel"))
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
         * Constructs a new Frame.
         * @exports internal.Frame
         * @constructor
         * @param {Object} [properties] Properties to set
         */
        function Frame(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    this[keys[i]] = properties[keys[i]];
        }

        /**
         * Frame TimeQuantum.
         * @type {string|undefined}
         */
        Frame.prototype.TimeQuantum = "";

        /**
         * Frame RowLabel.
         * @type {string|undefined}
         */
        Frame.prototype.RowLabel = "";

        /**
         * Creates a new Frame instance using the specified properties.
         * @param {Object} [properties] Properties to set
         * @returns {internal.Frame} Frame instance
         */
        Frame.create = function create(properties) {
            return new Frame(properties);
        };

        /**
         * Encodes the specified Frame message.
         * @param {internal.Frame|Object} message Frame message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Frame.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.TimeQuantum !== undefined && message.hasOwnProperty("TimeQuantum"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.TimeQuantum);
            if (message.RowLabel !== undefined && message.hasOwnProperty("RowLabel"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.RowLabel);
            return writer;
        };

        /**
         * Encodes the specified Frame message, length delimited.
         * @param {internal.Frame|Object} message Frame message or plain object to encode
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
         */
        Frame.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Frame message.
         * @param {internal.Frame|Object} message Frame message or plain object to verify
         * @returns {?string} `null` if valid, otherwise the reason why it is not
         */
        Frame.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.TimeQuantum !== undefined)
                if (!$util.isString(message.TimeQuantum))
                    return "TimeQuantum: string expected";
            if (message.RowLabel !== undefined)
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
            if (object.TimeQuantum !== undefined && object.TimeQuantum !== null)
                message.TimeQuantum = String(object.TimeQuantum);
            if (object.RowLabel !== undefined && object.RowLabel !== null)
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
            if (message.TimeQuantum !== undefined && message.TimeQuantum !== null && message.hasOwnProperty("TimeQuantum"))
                object.TimeQuantum = message.TimeQuantum;
            if (message.RowLabel !== undefined && message.RowLabel !== null && message.hasOwnProperty("RowLabel"))
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
         * Constructs a new Bitmap.
         * @exports internal.Bitmap
         * @constructor
         * @param {Object} [properties] Properties to set
         */
        function Bitmap(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    this[keys[i]] = properties[keys[i]];
        }

        /**
         * Bitmap Bits.
         * @type {Array.<number|$protobuf.Long>|undefined}
         */
        Bitmap.prototype.Bits = $util.emptyArray;

        /**
         * Bitmap Attrs.
         * @type {Array.<internal.Attr>|undefined}
         */
        Bitmap.prototype.Attrs = $util.emptyArray;

        // Lazily resolved type references
        var $types = {
            1: "internal.Attr"
        }; $lazyTypes.push($types);

        /**
         * Creates a new Bitmap instance using the specified properties.
         * @param {Object} [properties] Properties to set
         * @returns {internal.Bitmap} Bitmap instance
         */
        Bitmap.create = function create(properties) {
            return new Bitmap(properties);
        };

        /**
         * Encodes the specified Bitmap message.
         * @param {internal.Bitmap|Object} message Bitmap message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Bitmap.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Bits && message.Bits.length && message.hasOwnProperty("Bits")) {
                writer.uint32(/* id 1, wireType 2 =*/10).fork();
                for (var i = 0; i < message.Bits.length; ++i)
                    writer.uint64(message.Bits[i]);
                writer.ldelim();
            }
            if (message.Attrs !== undefined && message.hasOwnProperty("Attrs"))
                for (var i = 0; i < message.Attrs.length; ++i)
                    $types[1].encode(message.Attrs[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Bitmap message, length delimited.
         * @param {internal.Bitmap|Object} message Bitmap message or plain object to encode
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
                    message.Attrs.push($types[1].decode(reader, reader.uint32()));
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
         */
        Bitmap.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Bitmap message.
         * @param {internal.Bitmap|Object} message Bitmap message or plain object to verify
         * @returns {?string} `null` if valid, otherwise the reason why it is not
         */
        Bitmap.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Bits !== undefined) {
                if (!Array.isArray(message.Bits))
                    return "Bits: array expected";
                for (var i = 0; i < message.Bits.length; ++i)
                    if (!$util.isInteger(message.Bits[i]) && !(message.Bits[i] && $util.isInteger(message.Bits[i].low) && $util.isInteger(message.Bits[i].high)))
                        return "Bits: integer|Long[] expected";
            }
            if (message.Attrs !== undefined) {
                if (!Array.isArray(message.Attrs))
                    return "Attrs: array expected";
                for (var i = 0; i < message.Attrs.length; ++i) {
                    var error = $types[1].verify(message.Attrs[i]);
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
                    message.Attrs[i] = $types[1].fromObject(object.Attrs[i]);
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
            if (message.Bits !== undefined && message.Bits !== null && message.hasOwnProperty("Bits")) {
                object.Bits = [];
                for (var j = 0; j < message.Bits.length; ++j)
                    if (typeof message.Bits[j] === "number")
                        object.Bits[j] = options.longs === String ? String(message.Bits[j]) : message.Bits[j];
                    else
                        object.Bits[j] = options.longs === String ? $util.Long.prototype.toString.call(message.Bits[j]) : options.longs === Number ? new $util.LongBits(message.Bits[j].low >>> 0, message.Bits[j].high >>> 0).toNumber(true) : message.Bits[j];
            }
            if (message.Attrs !== undefined && message.Attrs !== null && message.hasOwnProperty("Attrs")) {
                object.Attrs = [];
                for (var j = 0; j < message.Attrs.length; ++j)
                    object.Attrs[j] = $types[1].toObject(message.Attrs[j], options);
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
         * Constructs a new Pair.
         * @exports internal.Pair
         * @constructor
         * @param {Object} [properties] Properties to set
         */
        function Pair(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    this[keys[i]] = properties[keys[i]];
        }

        /**
         * Pair Key.
         * @type {number|$protobuf.Long|undefined}
         */
        Pair.prototype.Key = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Pair Count.
         * @type {number|$protobuf.Long|undefined}
         */
        Pair.prototype.Count = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new Pair instance using the specified properties.
         * @param {Object} [properties] Properties to set
         * @returns {internal.Pair} Pair instance
         */
        Pair.create = function create(properties) {
            return new Pair(properties);
        };

        /**
         * Encodes the specified Pair message.
         * @param {internal.Pair|Object} message Pair message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Pair.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Key !== undefined && message.Key !== null && message.hasOwnProperty("Key"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.Key);
            if (message.Count !== undefined && message.Count !== null && message.hasOwnProperty("Count"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.Count);
            return writer;
        };

        /**
         * Encodes the specified Pair message, length delimited.
         * @param {internal.Pair|Object} message Pair message or plain object to encode
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
         */
        Pair.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Pair message.
         * @param {internal.Pair|Object} message Pair message or plain object to verify
         * @returns {?string} `null` if valid, otherwise the reason why it is not
         */
        Pair.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Key !== undefined)
                if (!$util.isInteger(message.Key) && !(message.Key && $util.isInteger(message.Key.low) && $util.isInteger(message.Key.high)))
                    return "Key: integer|Long expected";
            if (message.Count !== undefined)
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
            if (object.Key !== undefined && object.Key !== null)
                if ($util.Long)
                    (message.Key = $util.Long.fromValue(object.Key)).unsigned = true;
                else if (typeof object.Key === "string")
                    message.Key = parseInt(object.Key, 10);
                else if (typeof object.Key === "number")
                    message.Key = object.Key;
                else if (typeof object.Key === "object")
                    message.Key = new $util.LongBits(object.Key.low >>> 0, object.Key.high >>> 0).toNumber(true);
            if (object.Count !== undefined && object.Count !== null)
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
            if (message.Key !== undefined && message.Key !== null && message.hasOwnProperty("Key"))
                if (typeof message.Key === "number")
                    object.Key = options.longs === String ? String(message.Key) : message.Key;
                else
                    object.Key = options.longs === String ? $util.Long.prototype.toString.call(message.Key) : options.longs === Number ? new $util.LongBits(message.Key.low >>> 0, message.Key.high >>> 0).toNumber(true) : message.Key;
            if (message.Count !== undefined && message.Count !== null && message.hasOwnProperty("Count"))
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
         * Constructs a new Bit.
         * @exports internal.Bit
         * @constructor
         * @param {Object} [properties] Properties to set
         */
        function Bit(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    this[keys[i]] = properties[keys[i]];
        }

        /**
         * Bit BitmapID.
         * @type {number|$protobuf.Long|undefined}
         */
        Bit.prototype.BitmapID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Bit ProfileID.
         * @type {number|$protobuf.Long|undefined}
         */
        Bit.prototype.ProfileID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Bit Timestamp.
         * @type {number|$protobuf.Long|undefined}
         */
        Bit.prototype.Timestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new Bit instance using the specified properties.
         * @param {Object} [properties] Properties to set
         * @returns {internal.Bit} Bit instance
         */
        Bit.create = function create(properties) {
            return new Bit(properties);
        };

        /**
         * Encodes the specified Bit message.
         * @param {internal.Bit|Object} message Bit message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Bit.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.BitmapID !== undefined && message.BitmapID !== null && message.hasOwnProperty("BitmapID"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.BitmapID);
            if (message.ProfileID !== undefined && message.ProfileID !== null && message.hasOwnProperty("ProfileID"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.ProfileID);
            if (message.Timestamp !== undefined && message.Timestamp !== null && message.hasOwnProperty("Timestamp"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.Timestamp);
            return writer;
        };

        /**
         * Encodes the specified Bit message, length delimited.
         * @param {internal.Bit|Object} message Bit message or plain object to encode
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
         */
        Bit.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Bit message.
         * @param {internal.Bit|Object} message Bit message or plain object to verify
         * @returns {?string} `null` if valid, otherwise the reason why it is not
         */
        Bit.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.BitmapID !== undefined)
                if (!$util.isInteger(message.BitmapID) && !(message.BitmapID && $util.isInteger(message.BitmapID.low) && $util.isInteger(message.BitmapID.high)))
                    return "BitmapID: integer|Long expected";
            if (message.ProfileID !== undefined)
                if (!$util.isInteger(message.ProfileID) && !(message.ProfileID && $util.isInteger(message.ProfileID.low) && $util.isInteger(message.ProfileID.high)))
                    return "ProfileID: integer|Long expected";
            if (message.Timestamp !== undefined)
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
            if (object.BitmapID !== undefined && object.BitmapID !== null)
                if ($util.Long)
                    (message.BitmapID = $util.Long.fromValue(object.BitmapID)).unsigned = true;
                else if (typeof object.BitmapID === "string")
                    message.BitmapID = parseInt(object.BitmapID, 10);
                else if (typeof object.BitmapID === "number")
                    message.BitmapID = object.BitmapID;
                else if (typeof object.BitmapID === "object")
                    message.BitmapID = new $util.LongBits(object.BitmapID.low >>> 0, object.BitmapID.high >>> 0).toNumber(true);
            if (object.ProfileID !== undefined && object.ProfileID !== null)
                if ($util.Long)
                    (message.ProfileID = $util.Long.fromValue(object.ProfileID)).unsigned = true;
                else if (typeof object.ProfileID === "string")
                    message.ProfileID = parseInt(object.ProfileID, 10);
                else if (typeof object.ProfileID === "number")
                    message.ProfileID = object.ProfileID;
                else if (typeof object.ProfileID === "object")
                    message.ProfileID = new $util.LongBits(object.ProfileID.low >>> 0, object.ProfileID.high >>> 0).toNumber(true);
            if (object.Timestamp !== undefined && object.Timestamp !== null)
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
            if (message.BitmapID !== undefined && message.BitmapID !== null && message.hasOwnProperty("BitmapID"))
                if (typeof message.BitmapID === "number")
                    object.BitmapID = options.longs === String ? String(message.BitmapID) : message.BitmapID;
                else
                    object.BitmapID = options.longs === String ? $util.Long.prototype.toString.call(message.BitmapID) : options.longs === Number ? new $util.LongBits(message.BitmapID.low >>> 0, message.BitmapID.high >>> 0).toNumber(true) : message.BitmapID;
            if (message.ProfileID !== undefined && message.ProfileID !== null && message.hasOwnProperty("ProfileID"))
                if (typeof message.ProfileID === "number")
                    object.ProfileID = options.longs === String ? String(message.ProfileID) : message.ProfileID;
                else
                    object.ProfileID = options.longs === String ? $util.Long.prototype.toString.call(message.ProfileID) : options.longs === Number ? new $util.LongBits(message.ProfileID.low >>> 0, message.ProfileID.high >>> 0).toNumber(true) : message.ProfileID;
            if (message.Timestamp !== undefined && message.Timestamp !== null && message.hasOwnProperty("Timestamp"))
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
         * Constructs a new Profile.
         * @exports internal.Profile
         * @constructor
         * @param {Object} [properties] Properties to set
         */
        function Profile(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    this[keys[i]] = properties[keys[i]];
        }

        /**
         * Profile ID.
         * @type {number|$protobuf.Long|undefined}
         */
        Profile.prototype.ID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Profile Attrs.
         * @type {Array.<internal.Attr>|undefined}
         */
        Profile.prototype.Attrs = $util.emptyArray;

        // Lazily resolved type references
        var $types = {
            1: "internal.Attr"
        }; $lazyTypes.push($types);

        /**
         * Creates a new Profile instance using the specified properties.
         * @param {Object} [properties] Properties to set
         * @returns {internal.Profile} Profile instance
         */
        Profile.create = function create(properties) {
            return new Profile(properties);
        };

        /**
         * Encodes the specified Profile message.
         * @param {internal.Profile|Object} message Profile message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Profile.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ID !== undefined && message.ID !== null && message.hasOwnProperty("ID"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.ID);
            if (message.Attrs !== undefined && message.hasOwnProperty("Attrs"))
                for (var i = 0; i < message.Attrs.length; ++i)
                    $types[1].encode(message.Attrs[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Profile message, length delimited.
         * @param {internal.Profile|Object} message Profile message or plain object to encode
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
                    message.Attrs.push($types[1].decode(reader, reader.uint32()));
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
         */
        Profile.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Profile message.
         * @param {internal.Profile|Object} message Profile message or plain object to verify
         * @returns {?string} `null` if valid, otherwise the reason why it is not
         */
        Profile.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ID !== undefined)
                if (!$util.isInteger(message.ID) && !(message.ID && $util.isInteger(message.ID.low) && $util.isInteger(message.ID.high)))
                    return "ID: integer|Long expected";
            if (message.Attrs !== undefined) {
                if (!Array.isArray(message.Attrs))
                    return "Attrs: array expected";
                for (var i = 0; i < message.Attrs.length; ++i) {
                    var error = $types[1].verify(message.Attrs[i]);
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
            if (object.ID !== undefined && object.ID !== null)
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
                    message.Attrs[i] = $types[1].fromObject(object.Attrs[i]);
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
            if (message.ID !== undefined && message.ID !== null && message.hasOwnProperty("ID"))
                if (typeof message.ID === "number")
                    object.ID = options.longs === String ? String(message.ID) : message.ID;
                else
                    object.ID = options.longs === String ? $util.Long.prototype.toString.call(message.ID) : options.longs === Number ? new $util.LongBits(message.ID.low >>> 0, message.ID.high >>> 0).toNumber(true) : message.ID;
            if (message.Attrs !== undefined && message.Attrs !== null && message.hasOwnProperty("Attrs")) {
                object.Attrs = [];
                for (var j = 0; j < message.Attrs.length; ++j)
                    object.Attrs[j] = $types[1].toObject(message.Attrs[j], options);
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
         * Constructs a new Attr.
         * @exports internal.Attr
         * @constructor
         * @param {Object} [properties] Properties to set
         */
        function Attr(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    this[keys[i]] = properties[keys[i]];
        }

        /**
         * Attr Key.
         * @type {string|undefined}
         */
        Attr.prototype.Key = "";

        /**
         * Attr Type.
         * @type {number|$protobuf.Long|undefined}
         */
        Attr.prototype.Type = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Attr StringValue.
         * @type {string|undefined}
         */
        Attr.prototype.StringValue = "";

        /**
         * Attr UintValue.
         * @type {number|$protobuf.Long|undefined}
         */
        Attr.prototype.UintValue = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Attr BoolValue.
         * @type {boolean|undefined}
         */
        Attr.prototype.BoolValue = false;

        /**
         * Attr FloatValue.
         * @type {number|undefined}
         */
        Attr.prototype.FloatValue = 0;

        /**
         * Creates a new Attr instance using the specified properties.
         * @param {Object} [properties] Properties to set
         * @returns {internal.Attr} Attr instance
         */
        Attr.create = function create(properties) {
            return new Attr(properties);
        };

        /**
         * Encodes the specified Attr message.
         * @param {internal.Attr|Object} message Attr message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Attr.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Key !== undefined && message.hasOwnProperty("Key"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.Key);
            if (message.Type !== undefined && message.Type !== null && message.hasOwnProperty("Type"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.Type);
            if (message.StringValue !== undefined && message.hasOwnProperty("StringValue"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.StringValue);
            if (message.UintValue !== undefined && message.UintValue !== null && message.hasOwnProperty("UintValue"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.UintValue);
            if (message.BoolValue !== undefined && message.hasOwnProperty("BoolValue"))
                writer.uint32(/* id 5, wireType 0 =*/40).bool(message.BoolValue);
            if (message.FloatValue !== undefined && message.hasOwnProperty("FloatValue"))
                writer.uint32(/* id 6, wireType 1 =*/49).double(message.FloatValue);
            return writer;
        };

        /**
         * Encodes the specified Attr message, length delimited.
         * @param {internal.Attr|Object} message Attr message or plain object to encode
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
         */
        Attr.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Attr message.
         * @param {internal.Attr|Object} message Attr message or plain object to verify
         * @returns {?string} `null` if valid, otherwise the reason why it is not
         */
        Attr.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Key !== undefined)
                if (!$util.isString(message.Key))
                    return "Key: string expected";
            if (message.Type !== undefined)
                if (!$util.isInteger(message.Type) && !(message.Type && $util.isInteger(message.Type.low) && $util.isInteger(message.Type.high)))
                    return "Type: integer|Long expected";
            if (message.StringValue !== undefined)
                if (!$util.isString(message.StringValue))
                    return "StringValue: string expected";
            if (message.UintValue !== undefined)
                if (!$util.isInteger(message.UintValue) && !(message.UintValue && $util.isInteger(message.UintValue.low) && $util.isInteger(message.UintValue.high)))
                    return "UintValue: integer|Long expected";
            if (message.BoolValue !== undefined)
                if (typeof message.BoolValue !== "boolean")
                    return "BoolValue: boolean expected";
            if (message.FloatValue !== undefined)
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
            if (object.Key !== undefined && object.Key !== null)
                message.Key = String(object.Key);
            if (object.Type !== undefined && object.Type !== null)
                if ($util.Long)
                    (message.Type = $util.Long.fromValue(object.Type)).unsigned = true;
                else if (typeof object.Type === "string")
                    message.Type = parseInt(object.Type, 10);
                else if (typeof object.Type === "number")
                    message.Type = object.Type;
                else if (typeof object.Type === "object")
                    message.Type = new $util.LongBits(object.Type.low >>> 0, object.Type.high >>> 0).toNumber(true);
            if (object.StringValue !== undefined && object.StringValue !== null)
                message.StringValue = String(object.StringValue);
            if (object.UintValue !== undefined && object.UintValue !== null)
                if ($util.Long)
                    (message.UintValue = $util.Long.fromValue(object.UintValue)).unsigned = true;
                else if (typeof object.UintValue === "string")
                    message.UintValue = parseInt(object.UintValue, 10);
                else if (typeof object.UintValue === "number")
                    message.UintValue = object.UintValue;
                else if (typeof object.UintValue === "object")
                    message.UintValue = new $util.LongBits(object.UintValue.low >>> 0, object.UintValue.high >>> 0).toNumber(true);
            if (object.BoolValue !== undefined && object.BoolValue !== null)
                message.BoolValue = Boolean(object.BoolValue);
            if (object.FloatValue !== undefined && object.FloatValue !== null)
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
            if (message.Key !== undefined && message.Key !== null && message.hasOwnProperty("Key"))
                object.Key = message.Key;
            if (message.Type !== undefined && message.Type !== null && message.hasOwnProperty("Type"))
                if (typeof message.Type === "number")
                    object.Type = options.longs === String ? String(message.Type) : message.Type;
                else
                    object.Type = options.longs === String ? $util.Long.prototype.toString.call(message.Type) : options.longs === Number ? new $util.LongBits(message.Type.low >>> 0, message.Type.high >>> 0).toNumber(true) : message.Type;
            if (message.StringValue !== undefined && message.StringValue !== null && message.hasOwnProperty("StringValue"))
                object.StringValue = message.StringValue;
            if (message.UintValue !== undefined && message.UintValue !== null && message.hasOwnProperty("UintValue"))
                if (typeof message.UintValue === "number")
                    object.UintValue = options.longs === String ? String(message.UintValue) : message.UintValue;
                else
                    object.UintValue = options.longs === String ? $util.Long.prototype.toString.call(message.UintValue) : options.longs === Number ? new $util.LongBits(message.UintValue.low >>> 0, message.UintValue.high >>> 0).toNumber(true) : message.UintValue;
            if (message.BoolValue !== undefined && message.BoolValue !== null && message.hasOwnProperty("BoolValue"))
                object.BoolValue = message.BoolValue;
            if (message.FloatValue !== undefined && message.FloatValue !== null && message.hasOwnProperty("FloatValue"))
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
         * Constructs a new AttrMap.
         * @exports internal.AttrMap
         * @constructor
         * @param {Object} [properties] Properties to set
         */
        function AttrMap(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    this[keys[i]] = properties[keys[i]];
        }

        /**
         * AttrMap Attrs.
         * @type {Array.<internal.Attr>|undefined}
         */
        AttrMap.prototype.Attrs = $util.emptyArray;

        // Lazily resolved type references
        var $types = {
            0: "internal.Attr"
        }; $lazyTypes.push($types);

        /**
         * Creates a new AttrMap instance using the specified properties.
         * @param {Object} [properties] Properties to set
         * @returns {internal.AttrMap} AttrMap instance
         */
        AttrMap.create = function create(properties) {
            return new AttrMap(properties);
        };

        /**
         * Encodes the specified AttrMap message.
         * @param {internal.AttrMap|Object} message AttrMap message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AttrMap.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Attrs !== undefined && message.hasOwnProperty("Attrs"))
                for (var i = 0; i < message.Attrs.length; ++i)
                    $types[0].encode(message.Attrs[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified AttrMap message, length delimited.
         * @param {internal.AttrMap|Object} message AttrMap message or plain object to encode
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
                    message.Attrs.push($types[0].decode(reader, reader.uint32()));
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
         */
        AttrMap.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AttrMap message.
         * @param {internal.AttrMap|Object} message AttrMap message or plain object to verify
         * @returns {?string} `null` if valid, otherwise the reason why it is not
         */
        AttrMap.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Attrs !== undefined) {
                if (!Array.isArray(message.Attrs))
                    return "Attrs: array expected";
                for (var i = 0; i < message.Attrs.length; ++i) {
                    var error = $types[0].verify(message.Attrs[i]);
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
                    message.Attrs[i] = $types[0].fromObject(object.Attrs[i]);
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
            if (message.Attrs !== undefined && message.Attrs !== null && message.hasOwnProperty("Attrs")) {
                object.Attrs = [];
                for (var j = 0; j < message.Attrs.length; ++j)
                    object.Attrs[j] = $types[0].toObject(message.Attrs[j], options);
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
         * Constructs a new QueryRequest.
         * @exports internal.QueryRequest
         * @constructor
         * @param {Object} [properties] Properties to set
         */
        function QueryRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    this[keys[i]] = properties[keys[i]];
        }

        /**
         * QueryRequest DB.
         * @type {string|undefined}
         */
        QueryRequest.prototype.DB = "";

        /**
         * QueryRequest Query.
         * @type {string|undefined}
         */
        QueryRequest.prototype.Query = "";

        /**
         * QueryRequest Slices.
         * @type {Array.<number|$protobuf.Long>|undefined}
         */
        QueryRequest.prototype.Slices = $util.emptyArray;

        /**
         * QueryRequest Profiles.
         * @type {boolean|undefined}
         */
        QueryRequest.prototype.Profiles = false;

        /**
         * QueryRequest Quantum.
         * @type {string|undefined}
         */
        QueryRequest.prototype.Quantum = "";

        /**
         * QueryRequest Remote.
         * @type {boolean|undefined}
         */
        QueryRequest.prototype.Remote = false;

        /**
         * Creates a new QueryRequest instance using the specified properties.
         * @param {Object} [properties] Properties to set
         * @returns {internal.QueryRequest} QueryRequest instance
         */
        QueryRequest.create = function create(properties) {
            return new QueryRequest(properties);
        };

        /**
         * Encodes the specified QueryRequest message.
         * @param {internal.QueryRequest|Object} message QueryRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        QueryRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.DB !== undefined && message.hasOwnProperty("DB"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.DB);
            if (message.Query !== undefined && message.hasOwnProperty("Query"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.Query);
            if (message.Slices && message.Slices.length && message.hasOwnProperty("Slices")) {
                writer.uint32(/* id 3, wireType 2 =*/26).fork();
                for (var i = 0; i < message.Slices.length; ++i)
                    writer.uint64(message.Slices[i]);
                writer.ldelim();
            }
            if (message.Profiles !== undefined && message.hasOwnProperty("Profiles"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.Profiles);
            if (message.Quantum !== undefined && message.hasOwnProperty("Quantum"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.Quantum);
            if (message.Remote !== undefined && message.hasOwnProperty("Remote"))
                writer.uint32(/* id 6, wireType 0 =*/48).bool(message.Remote);
            return writer;
        };

        /**
         * Encodes the specified QueryRequest message, length delimited.
         * @param {internal.QueryRequest|Object} message QueryRequest message or plain object to encode
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
         */
        QueryRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a QueryRequest message.
         * @param {internal.QueryRequest|Object} message QueryRequest message or plain object to verify
         * @returns {?string} `null` if valid, otherwise the reason why it is not
         */
        QueryRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.DB !== undefined)
                if (!$util.isString(message.DB))
                    return "DB: string expected";
            if (message.Query !== undefined)
                if (!$util.isString(message.Query))
                    return "Query: string expected";
            if (message.Slices !== undefined) {
                if (!Array.isArray(message.Slices))
                    return "Slices: array expected";
                for (var i = 0; i < message.Slices.length; ++i)
                    if (!$util.isInteger(message.Slices[i]) && !(message.Slices[i] && $util.isInteger(message.Slices[i].low) && $util.isInteger(message.Slices[i].high)))
                        return "Slices: integer|Long[] expected";
            }
            if (message.Profiles !== undefined)
                if (typeof message.Profiles !== "boolean")
                    return "Profiles: boolean expected";
            if (message.Quantum !== undefined)
                if (!$util.isString(message.Quantum))
                    return "Quantum: string expected";
            if (message.Remote !== undefined)
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
            if (object.DB !== undefined && object.DB !== null)
                message.DB = String(object.DB);
            if (object.Query !== undefined && object.Query !== null)
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
            if (object.Profiles !== undefined && object.Profiles !== null)
                message.Profiles = Boolean(object.Profiles);
            if (object.Quantum !== undefined && object.Quantum !== null)
                message.Quantum = String(object.Quantum);
            if (object.Remote !== undefined && object.Remote !== null)
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
            if (message.DB !== undefined && message.DB !== null && message.hasOwnProperty("DB"))
                object.DB = message.DB;
            if (message.Query !== undefined && message.Query !== null && message.hasOwnProperty("Query"))
                object.Query = message.Query;
            if (message.Slices !== undefined && message.Slices !== null && message.hasOwnProperty("Slices")) {
                object.Slices = [];
                for (var j = 0; j < message.Slices.length; ++j)
                    if (typeof message.Slices[j] === "number")
                        object.Slices[j] = options.longs === String ? String(message.Slices[j]) : message.Slices[j];
                    else
                        object.Slices[j] = options.longs === String ? $util.Long.prototype.toString.call(message.Slices[j]) : options.longs === Number ? new $util.LongBits(message.Slices[j].low >>> 0, message.Slices[j].high >>> 0).toNumber(true) : message.Slices[j];
            }
            if (message.Profiles !== undefined && message.Profiles !== null && message.hasOwnProperty("Profiles"))
                object.Profiles = message.Profiles;
            if (message.Quantum !== undefined && message.Quantum !== null && message.hasOwnProperty("Quantum"))
                object.Quantum = message.Quantum;
            if (message.Remote !== undefined && message.Remote !== null && message.hasOwnProperty("Remote"))
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
         * Constructs a new QueryResponse.
         * @exports internal.QueryResponse
         * @constructor
         * @param {Object} [properties] Properties to set
         */
        function QueryResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    this[keys[i]] = properties[keys[i]];
        }

        /**
         * QueryResponse Err.
         * @type {string|undefined}
         */
        QueryResponse.prototype.Err = "";

        /**
         * QueryResponse Results.
         * @type {Array.<internal.QueryResult>|undefined}
         */
        QueryResponse.prototype.Results = $util.emptyArray;

        /**
         * QueryResponse Profiles.
         * @type {Array.<internal.Profile>|undefined}
         */
        QueryResponse.prototype.Profiles = $util.emptyArray;

        // Lazily resolved type references
        var $types = {
            1: "internal.QueryResult",
            2: "internal.Profile"
        }; $lazyTypes.push($types);

        /**
         * Creates a new QueryResponse instance using the specified properties.
         * @param {Object} [properties] Properties to set
         * @returns {internal.QueryResponse} QueryResponse instance
         */
        QueryResponse.create = function create(properties) {
            return new QueryResponse(properties);
        };

        /**
         * Encodes the specified QueryResponse message.
         * @param {internal.QueryResponse|Object} message QueryResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        QueryResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Err !== undefined && message.hasOwnProperty("Err"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.Err);
            if (message.Results !== undefined && message.hasOwnProperty("Results"))
                for (var i = 0; i < message.Results.length; ++i)
                    $types[1].encode(message.Results[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.Profiles !== undefined && message.hasOwnProperty("Profiles"))
                for (var i = 0; i < message.Profiles.length; ++i)
                    $types[2].encode(message.Profiles[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified QueryResponse message, length delimited.
         * @param {internal.QueryResponse|Object} message QueryResponse message or plain object to encode
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
                    message.Results.push($types[1].decode(reader, reader.uint32()));
                    break;
                case 3:
                    if (!(message.Profiles && message.Profiles.length))
                        message.Profiles = [];
                    message.Profiles.push($types[2].decode(reader, reader.uint32()));
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
         */
        QueryResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a QueryResponse message.
         * @param {internal.QueryResponse|Object} message QueryResponse message or plain object to verify
         * @returns {?string} `null` if valid, otherwise the reason why it is not
         */
        QueryResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Err !== undefined)
                if (!$util.isString(message.Err))
                    return "Err: string expected";
            if (message.Results !== undefined) {
                if (!Array.isArray(message.Results))
                    return "Results: array expected";
                for (var i = 0; i < message.Results.length; ++i) {
                    var error = $types[1].verify(message.Results[i]);
                    if (error)
                        return "Results." + error;
                }
            }
            if (message.Profiles !== undefined) {
                if (!Array.isArray(message.Profiles))
                    return "Profiles: array expected";
                for (var i = 0; i < message.Profiles.length; ++i) {
                    var error = $types[2].verify(message.Profiles[i]);
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
            if (object.Err !== undefined && object.Err !== null)
                message.Err = String(object.Err);
            if (object.Results) {
                if (!Array.isArray(object.Results))
                    throw TypeError(".internal.QueryResponse.Results: array expected");
                message.Results = [];
                for (var i = 0; i < object.Results.length; ++i) {
                    if (typeof object.Results[i] !== "object")
                        throw TypeError(".internal.QueryResponse.Results: object expected");
                    message.Results[i] = $types[1].fromObject(object.Results[i]);
                }
            }
            if (object.Profiles) {
                if (!Array.isArray(object.Profiles))
                    throw TypeError(".internal.QueryResponse.Profiles: array expected");
                message.Profiles = [];
                for (var i = 0; i < object.Profiles.length; ++i) {
                    if (typeof object.Profiles[i] !== "object")
                        throw TypeError(".internal.QueryResponse.Profiles: object expected");
                    message.Profiles[i] = $types[2].fromObject(object.Profiles[i]);
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
            if (message.Err !== undefined && message.Err !== null && message.hasOwnProperty("Err"))
                object.Err = message.Err;
            if (message.Results !== undefined && message.Results !== null && message.hasOwnProperty("Results")) {
                object.Results = [];
                for (var j = 0; j < message.Results.length; ++j)
                    object.Results[j] = $types[1].toObject(message.Results[j], options);
            }
            if (message.Profiles !== undefined && message.Profiles !== null && message.hasOwnProperty("Profiles")) {
                object.Profiles = [];
                for (var j = 0; j < message.Profiles.length; ++j)
                    object.Profiles[j] = $types[2].toObject(message.Profiles[j], options);
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
         * Constructs a new QueryResult.
         * @exports internal.QueryResult
         * @constructor
         * @param {Object} [properties] Properties to set
         */
        function QueryResult(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    this[keys[i]] = properties[keys[i]];
        }

        /**
         * QueryResult Bitmap.
         * @type {internal.Bitmap|undefined}
         */
        QueryResult.prototype.Bitmap = null;

        /**
         * QueryResult N.
         * @type {number|$protobuf.Long|undefined}
         */
        QueryResult.prototype.N = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * QueryResult Pairs.
         * @type {Array.<internal.Pair>|undefined}
         */
        QueryResult.prototype.Pairs = $util.emptyArray;

        /**
         * QueryResult Changed.
         * @type {boolean|undefined}
         */
        QueryResult.prototype.Changed = false;

        // Lazily resolved type references
        var $types = {
            0: "internal.Bitmap",
            2: "internal.Pair"
        }; $lazyTypes.push($types);

        /**
         * Creates a new QueryResult instance using the specified properties.
         * @param {Object} [properties] Properties to set
         * @returns {internal.QueryResult} QueryResult instance
         */
        QueryResult.create = function create(properties) {
            return new QueryResult(properties);
        };

        /**
         * Encodes the specified QueryResult message.
         * @param {internal.QueryResult|Object} message QueryResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        QueryResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Bitmap && message.hasOwnProperty("Bitmap"))
                $types[0].encode(message.Bitmap, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.N !== undefined && message.N !== null && message.hasOwnProperty("N"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.N);
            if (message.Pairs !== undefined && message.hasOwnProperty("Pairs"))
                for (var i = 0; i < message.Pairs.length; ++i)
                    $types[2].encode(message.Pairs[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.Changed !== undefined && message.hasOwnProperty("Changed"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.Changed);
            return writer;
        };

        /**
         * Encodes the specified QueryResult message, length delimited.
         * @param {internal.QueryResult|Object} message QueryResult message or plain object to encode
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
         */
        QueryResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.internal.QueryResult();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Bitmap = $types[0].decode(reader, reader.uint32());
                    break;
                case 2:
                    message.N = reader.uint64();
                    break;
                case 3:
                    if (!(message.Pairs && message.Pairs.length))
                        message.Pairs = [];
                    message.Pairs.push($types[2].decode(reader, reader.uint32()));
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
         */
        QueryResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a QueryResult message.
         * @param {internal.QueryResult|Object} message QueryResult message or plain object to verify
         * @returns {?string} `null` if valid, otherwise the reason why it is not
         */
        QueryResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Bitmap !== undefined && message.Bitmap !== null) {
                var error = $types[0].verify(message.Bitmap);
                if (error)
                    return "Bitmap." + error;
            }
            if (message.N !== undefined)
                if (!$util.isInteger(message.N) && !(message.N && $util.isInteger(message.N.low) && $util.isInteger(message.N.high)))
                    return "N: integer|Long expected";
            if (message.Pairs !== undefined) {
                if (!Array.isArray(message.Pairs))
                    return "Pairs: array expected";
                for (var i = 0; i < message.Pairs.length; ++i) {
                    var error = $types[2].verify(message.Pairs[i]);
                    if (error)
                        return "Pairs." + error;
                }
            }
            if (message.Changed !== undefined)
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
            if (object.Bitmap !== undefined && object.Bitmap !== null) {
                if (typeof object.Bitmap !== "object")
                    throw TypeError(".internal.QueryResult.Bitmap: object expected");
                message.Bitmap = $types[0].fromObject(object.Bitmap);
            }
            if (object.N !== undefined && object.N !== null)
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
                    message.Pairs[i] = $types[2].fromObject(object.Pairs[i]);
                }
            }
            if (object.Changed !== undefined && object.Changed !== null)
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
            if (message.Bitmap !== undefined && message.Bitmap !== null && message.hasOwnProperty("Bitmap"))
                object.Bitmap = $types[0].toObject(message.Bitmap, options);
            if (message.N !== undefined && message.N !== null && message.hasOwnProperty("N"))
                if (typeof message.N === "number")
                    object.N = options.longs === String ? String(message.N) : message.N;
                else
                    object.N = options.longs === String ? $util.Long.prototype.toString.call(message.N) : options.longs === Number ? new $util.LongBits(message.N.low >>> 0, message.N.high >>> 0).toNumber(true) : message.N;
            if (message.Pairs !== undefined && message.Pairs !== null && message.hasOwnProperty("Pairs")) {
                object.Pairs = [];
                for (var j = 0; j < message.Pairs.length; ++j)
                    object.Pairs[j] = $types[2].toObject(message.Pairs[j], options);
            }
            if (message.Changed !== undefined && message.Changed !== null && message.hasOwnProperty("Changed"))
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
         * Constructs a new ImportRequest.
         * @exports internal.ImportRequest
         * @constructor
         * @param {Object} [properties] Properties to set
         */
        function ImportRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    this[keys[i]] = properties[keys[i]];
        }

        /**
         * ImportRequest DB.
         * @type {string|undefined}
         */
        ImportRequest.prototype.DB = "";

        /**
         * ImportRequest Frame.
         * @type {string|undefined}
         */
        ImportRequest.prototype.Frame = "";

        /**
         * ImportRequest Slice.
         * @type {number|$protobuf.Long|undefined}
         */
        ImportRequest.prototype.Slice = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * ImportRequest BitmapIDs.
         * @type {Array.<number|$protobuf.Long>|undefined}
         */
        ImportRequest.prototype.BitmapIDs = $util.emptyArray;

        /**
         * ImportRequest ProfileIDs.
         * @type {Array.<number|$protobuf.Long>|undefined}
         */
        ImportRequest.prototype.ProfileIDs = $util.emptyArray;

        /**
         * ImportRequest Timestamps.
         * @type {Array.<number|$protobuf.Long>|undefined}
         */
        ImportRequest.prototype.Timestamps = $util.emptyArray;

        /**
         * Creates a new ImportRequest instance using the specified properties.
         * @param {Object} [properties] Properties to set
         * @returns {internal.ImportRequest} ImportRequest instance
         */
        ImportRequest.create = function create(properties) {
            return new ImportRequest(properties);
        };

        /**
         * Encodes the specified ImportRequest message.
         * @param {internal.ImportRequest|Object} message ImportRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ImportRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.DB !== undefined && message.hasOwnProperty("DB"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.DB);
            if (message.Frame !== undefined && message.hasOwnProperty("Frame"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.Frame);
            if (message.Slice !== undefined && message.Slice !== null && message.hasOwnProperty("Slice"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.Slice);
            if (message.BitmapIDs && message.BitmapIDs.length && message.hasOwnProperty("BitmapIDs")) {
                writer.uint32(/* id 4, wireType 2 =*/34).fork();
                for (var i = 0; i < message.BitmapIDs.length; ++i)
                    writer.uint64(message.BitmapIDs[i]);
                writer.ldelim();
            }
            if (message.ProfileIDs && message.ProfileIDs.length && message.hasOwnProperty("ProfileIDs")) {
                writer.uint32(/* id 5, wireType 2 =*/42).fork();
                for (var i = 0; i < message.ProfileIDs.length; ++i)
                    writer.uint64(message.ProfileIDs[i]);
                writer.ldelim();
            }
            if (message.Timestamps && message.Timestamps.length && message.hasOwnProperty("Timestamps")) {
                writer.uint32(/* id 6, wireType 2 =*/50).fork();
                for (var i = 0; i < message.Timestamps.length; ++i)
                    writer.int64(message.Timestamps[i]);
                writer.ldelim();
            }
            return writer;
        };

        /**
         * Encodes the specified ImportRequest message, length delimited.
         * @param {internal.ImportRequest|Object} message ImportRequest message or plain object to encode
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
         */
        ImportRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ImportRequest message.
         * @param {internal.ImportRequest|Object} message ImportRequest message or plain object to verify
         * @returns {?string} `null` if valid, otherwise the reason why it is not
         */
        ImportRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.DB !== undefined)
                if (!$util.isString(message.DB))
                    return "DB: string expected";
            if (message.Frame !== undefined)
                if (!$util.isString(message.Frame))
                    return "Frame: string expected";
            if (message.Slice !== undefined)
                if (!$util.isInteger(message.Slice) && !(message.Slice && $util.isInteger(message.Slice.low) && $util.isInteger(message.Slice.high)))
                    return "Slice: integer|Long expected";
            if (message.BitmapIDs !== undefined) {
                if (!Array.isArray(message.BitmapIDs))
                    return "BitmapIDs: array expected";
                for (var i = 0; i < message.BitmapIDs.length; ++i)
                    if (!$util.isInteger(message.BitmapIDs[i]) && !(message.BitmapIDs[i] && $util.isInteger(message.BitmapIDs[i].low) && $util.isInteger(message.BitmapIDs[i].high)))
                        return "BitmapIDs: integer|Long[] expected";
            }
            if (message.ProfileIDs !== undefined) {
                if (!Array.isArray(message.ProfileIDs))
                    return "ProfileIDs: array expected";
                for (var i = 0; i < message.ProfileIDs.length; ++i)
                    if (!$util.isInteger(message.ProfileIDs[i]) && !(message.ProfileIDs[i] && $util.isInteger(message.ProfileIDs[i].low) && $util.isInteger(message.ProfileIDs[i].high)))
                        return "ProfileIDs: integer|Long[] expected";
            }
            if (message.Timestamps !== undefined) {
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
            if (object.DB !== undefined && object.DB !== null)
                message.DB = String(object.DB);
            if (object.Frame !== undefined && object.Frame !== null)
                message.Frame = String(object.Frame);
            if (object.Slice !== undefined && object.Slice !== null)
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
            if (message.DB !== undefined && message.DB !== null && message.hasOwnProperty("DB"))
                object.DB = message.DB;
            if (message.Frame !== undefined && message.Frame !== null && message.hasOwnProperty("Frame"))
                object.Frame = message.Frame;
            if (message.Slice !== undefined && message.Slice !== null && message.hasOwnProperty("Slice"))
                if (typeof message.Slice === "number")
                    object.Slice = options.longs === String ? String(message.Slice) : message.Slice;
                else
                    object.Slice = options.longs === String ? $util.Long.prototype.toString.call(message.Slice) : options.longs === Number ? new $util.LongBits(message.Slice.low >>> 0, message.Slice.high >>> 0).toNumber(true) : message.Slice;
            if (message.BitmapIDs !== undefined && message.BitmapIDs !== null && message.hasOwnProperty("BitmapIDs")) {
                object.BitmapIDs = [];
                for (var j = 0; j < message.BitmapIDs.length; ++j)
                    if (typeof message.BitmapIDs[j] === "number")
                        object.BitmapIDs[j] = options.longs === String ? String(message.BitmapIDs[j]) : message.BitmapIDs[j];
                    else
                        object.BitmapIDs[j] = options.longs === String ? $util.Long.prototype.toString.call(message.BitmapIDs[j]) : options.longs === Number ? new $util.LongBits(message.BitmapIDs[j].low >>> 0, message.BitmapIDs[j].high >>> 0).toNumber(true) : message.BitmapIDs[j];
            }
            if (message.ProfileIDs !== undefined && message.ProfileIDs !== null && message.hasOwnProperty("ProfileIDs")) {
                object.ProfileIDs = [];
                for (var j = 0; j < message.ProfileIDs.length; ++j)
                    if (typeof message.ProfileIDs[j] === "number")
                        object.ProfileIDs[j] = options.longs === String ? String(message.ProfileIDs[j]) : message.ProfileIDs[j];
                    else
                        object.ProfileIDs[j] = options.longs === String ? $util.Long.prototype.toString.call(message.ProfileIDs[j]) : options.longs === Number ? new $util.LongBits(message.ProfileIDs[j].low >>> 0, message.ProfileIDs[j].high >>> 0).toNumber(true) : message.ProfileIDs[j];
            }
            if (message.Timestamps !== undefined && message.Timestamps !== null && message.hasOwnProperty("Timestamps")) {
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
         * Constructs a new ImportResponse.
         * @exports internal.ImportResponse
         * @constructor
         * @param {Object} [properties] Properties to set
         */
        function ImportResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    this[keys[i]] = properties[keys[i]];
        }

        /**
         * ImportResponse Err.
         * @type {string|undefined}
         */
        ImportResponse.prototype.Err = "";

        /**
         * Creates a new ImportResponse instance using the specified properties.
         * @param {Object} [properties] Properties to set
         * @returns {internal.ImportResponse} ImportResponse instance
         */
        ImportResponse.create = function create(properties) {
            return new ImportResponse(properties);
        };

        /**
         * Encodes the specified ImportResponse message.
         * @param {internal.ImportResponse|Object} message ImportResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ImportResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Err !== undefined && message.hasOwnProperty("Err"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.Err);
            return writer;
        };

        /**
         * Encodes the specified ImportResponse message, length delimited.
         * @param {internal.ImportResponse|Object} message ImportResponse message or plain object to encode
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
         */
        ImportResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ImportResponse message.
         * @param {internal.ImportResponse|Object} message ImportResponse message or plain object to verify
         * @returns {?string} `null` if valid, otherwise the reason why it is not
         */
        ImportResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Err !== undefined)
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
            if (object.Err !== undefined && object.Err !== null)
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
            if (message.Err !== undefined && message.Err !== null && message.hasOwnProperty("Err"))
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
         * Constructs a new BlockDataRequest.
         * @exports internal.BlockDataRequest
         * @constructor
         * @param {Object} [properties] Properties to set
         */
        function BlockDataRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    this[keys[i]] = properties[keys[i]];
        }

        /**
         * BlockDataRequest DB.
         * @type {string|undefined}
         */
        BlockDataRequest.prototype.DB = "";

        /**
         * BlockDataRequest Frame.
         * @type {string|undefined}
         */
        BlockDataRequest.prototype.Frame = "";

        /**
         * BlockDataRequest Slice.
         * @type {number|$protobuf.Long|undefined}
         */
        BlockDataRequest.prototype.Slice = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * BlockDataRequest Block.
         * @type {number|$protobuf.Long|undefined}
         */
        BlockDataRequest.prototype.Block = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new BlockDataRequest instance using the specified properties.
         * @param {Object} [properties] Properties to set
         * @returns {internal.BlockDataRequest} BlockDataRequest instance
         */
        BlockDataRequest.create = function create(properties) {
            return new BlockDataRequest(properties);
        };

        /**
         * Encodes the specified BlockDataRequest message.
         * @param {internal.BlockDataRequest|Object} message BlockDataRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BlockDataRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.DB !== undefined && message.hasOwnProperty("DB"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.DB);
            if (message.Frame !== undefined && message.hasOwnProperty("Frame"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.Frame);
            if (message.Slice !== undefined && message.Slice !== null && message.hasOwnProperty("Slice"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.Slice);
            if (message.Block !== undefined && message.Block !== null && message.hasOwnProperty("Block"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.Block);
            return writer;
        };

        /**
         * Encodes the specified BlockDataRequest message, length delimited.
         * @param {internal.BlockDataRequest|Object} message BlockDataRequest message or plain object to encode
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
         */
        BlockDataRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BlockDataRequest message.
         * @param {internal.BlockDataRequest|Object} message BlockDataRequest message or plain object to verify
         * @returns {?string} `null` if valid, otherwise the reason why it is not
         */
        BlockDataRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.DB !== undefined)
                if (!$util.isString(message.DB))
                    return "DB: string expected";
            if (message.Frame !== undefined)
                if (!$util.isString(message.Frame))
                    return "Frame: string expected";
            if (message.Slice !== undefined)
                if (!$util.isInteger(message.Slice) && !(message.Slice && $util.isInteger(message.Slice.low) && $util.isInteger(message.Slice.high)))
                    return "Slice: integer|Long expected";
            if (message.Block !== undefined)
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
            if (object.DB !== undefined && object.DB !== null)
                message.DB = String(object.DB);
            if (object.Frame !== undefined && object.Frame !== null)
                message.Frame = String(object.Frame);
            if (object.Slice !== undefined && object.Slice !== null)
                if ($util.Long)
                    (message.Slice = $util.Long.fromValue(object.Slice)).unsigned = true;
                else if (typeof object.Slice === "string")
                    message.Slice = parseInt(object.Slice, 10);
                else if (typeof object.Slice === "number")
                    message.Slice = object.Slice;
                else if (typeof object.Slice === "object")
                    message.Slice = new $util.LongBits(object.Slice.low >>> 0, object.Slice.high >>> 0).toNumber(true);
            if (object.Block !== undefined && object.Block !== null)
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
            if (message.DB !== undefined && message.DB !== null && message.hasOwnProperty("DB"))
                object.DB = message.DB;
            if (message.Frame !== undefined && message.Frame !== null && message.hasOwnProperty("Frame"))
                object.Frame = message.Frame;
            if (message.Slice !== undefined && message.Slice !== null && message.hasOwnProperty("Slice"))
                if (typeof message.Slice === "number")
                    object.Slice = options.longs === String ? String(message.Slice) : message.Slice;
                else
                    object.Slice = options.longs === String ? $util.Long.prototype.toString.call(message.Slice) : options.longs === Number ? new $util.LongBits(message.Slice.low >>> 0, message.Slice.high >>> 0).toNumber(true) : message.Slice;
            if (message.Block !== undefined && message.Block !== null && message.hasOwnProperty("Block"))
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
         * Constructs a new BlockDataResponse.
         * @exports internal.BlockDataResponse
         * @constructor
         * @param {Object} [properties] Properties to set
         */
        function BlockDataResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    this[keys[i]] = properties[keys[i]];
        }

        /**
         * BlockDataResponse BitmapIDs.
         * @type {Array.<number|$protobuf.Long>|undefined}
         */
        BlockDataResponse.prototype.BitmapIDs = $util.emptyArray;

        /**
         * BlockDataResponse ProfileIDs.
         * @type {Array.<number|$protobuf.Long>|undefined}
         */
        BlockDataResponse.prototype.ProfileIDs = $util.emptyArray;

        /**
         * Creates a new BlockDataResponse instance using the specified properties.
         * @param {Object} [properties] Properties to set
         * @returns {internal.BlockDataResponse} BlockDataResponse instance
         */
        BlockDataResponse.create = function create(properties) {
            return new BlockDataResponse(properties);
        };

        /**
         * Encodes the specified BlockDataResponse message.
         * @param {internal.BlockDataResponse|Object} message BlockDataResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BlockDataResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.BitmapIDs && message.BitmapIDs.length && message.hasOwnProperty("BitmapIDs")) {
                writer.uint32(/* id 1, wireType 2 =*/10).fork();
                for (var i = 0; i < message.BitmapIDs.length; ++i)
                    writer.uint64(message.BitmapIDs[i]);
                writer.ldelim();
            }
            if (message.ProfileIDs && message.ProfileIDs.length && message.hasOwnProperty("ProfileIDs")) {
                writer.uint32(/* id 2, wireType 2 =*/18).fork();
                for (var i = 0; i < message.ProfileIDs.length; ++i)
                    writer.uint64(message.ProfileIDs[i]);
                writer.ldelim();
            }
            return writer;
        };

        /**
         * Encodes the specified BlockDataResponse message, length delimited.
         * @param {internal.BlockDataResponse|Object} message BlockDataResponse message or plain object to encode
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
         */
        BlockDataResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BlockDataResponse message.
         * @param {internal.BlockDataResponse|Object} message BlockDataResponse message or plain object to verify
         * @returns {?string} `null` if valid, otherwise the reason why it is not
         */
        BlockDataResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.BitmapIDs !== undefined) {
                if (!Array.isArray(message.BitmapIDs))
                    return "BitmapIDs: array expected";
                for (var i = 0; i < message.BitmapIDs.length; ++i)
                    if (!$util.isInteger(message.BitmapIDs[i]) && !(message.BitmapIDs[i] && $util.isInteger(message.BitmapIDs[i].low) && $util.isInteger(message.BitmapIDs[i].high)))
                        return "BitmapIDs: integer|Long[] expected";
            }
            if (message.ProfileIDs !== undefined) {
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
            if (message.BitmapIDs !== undefined && message.BitmapIDs !== null && message.hasOwnProperty("BitmapIDs")) {
                object.BitmapIDs = [];
                for (var j = 0; j < message.BitmapIDs.length; ++j)
                    if (typeof message.BitmapIDs[j] === "number")
                        object.BitmapIDs[j] = options.longs === String ? String(message.BitmapIDs[j]) : message.BitmapIDs[j];
                    else
                        object.BitmapIDs[j] = options.longs === String ? $util.Long.prototype.toString.call(message.BitmapIDs[j]) : options.longs === Number ? new $util.LongBits(message.BitmapIDs[j].low >>> 0, message.BitmapIDs[j].high >>> 0).toNumber(true) : message.BitmapIDs[j];
            }
            if (message.ProfileIDs !== undefined && message.ProfileIDs !== null && message.hasOwnProperty("ProfileIDs")) {
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
         * Constructs a new Cache.
         * @exports internal.Cache
         * @constructor
         * @param {Object} [properties] Properties to set
         */
        function Cache(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    this[keys[i]] = properties[keys[i]];
        }

        /**
         * Cache BitmapIDs.
         * @type {Array.<number|$protobuf.Long>|undefined}
         */
        Cache.prototype.BitmapIDs = $util.emptyArray;

        /**
         * Creates a new Cache instance using the specified properties.
         * @param {Object} [properties] Properties to set
         * @returns {internal.Cache} Cache instance
         */
        Cache.create = function create(properties) {
            return new Cache(properties);
        };

        /**
         * Encodes the specified Cache message.
         * @param {internal.Cache|Object} message Cache message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Cache.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.BitmapIDs && message.BitmapIDs.length && message.hasOwnProperty("BitmapIDs")) {
                writer.uint32(/* id 1, wireType 2 =*/10).fork();
                for (var i = 0; i < message.BitmapIDs.length; ++i)
                    writer.uint64(message.BitmapIDs[i]);
                writer.ldelim();
            }
            return writer;
        };

        /**
         * Encodes the specified Cache message, length delimited.
         * @param {internal.Cache|Object} message Cache message or plain object to encode
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
         */
        Cache.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Cache message.
         * @param {internal.Cache|Object} message Cache message or plain object to verify
         * @returns {?string} `null` if valid, otherwise the reason why it is not
         */
        Cache.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.BitmapIDs !== undefined) {
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
            if (message.BitmapIDs !== undefined && message.BitmapIDs !== null && message.hasOwnProperty("BitmapIDs")) {
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
         * Constructs a new MaxSlicesResponse.
         * @exports internal.MaxSlicesResponse
         * @constructor
         * @param {Object} [properties] Properties to set
         */
        function MaxSlicesResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    this[keys[i]] = properties[keys[i]];
        }

        /**
         * MaxSlicesResponse MaxSlices.
         * @type {Object.<string,number|$protobuf.Long>|undefined}
         */
        MaxSlicesResponse.prototype.MaxSlices = $util.emptyObject;

        /**
         * Creates a new MaxSlicesResponse instance using the specified properties.
         * @param {Object} [properties] Properties to set
         * @returns {internal.MaxSlicesResponse} MaxSlicesResponse instance
         */
        MaxSlicesResponse.create = function create(properties) {
            return new MaxSlicesResponse(properties);
        };

        /**
         * Encodes the specified MaxSlicesResponse message.
         * @param {internal.MaxSlicesResponse|Object} message MaxSlicesResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MaxSlicesResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.MaxSlices && message.hasOwnProperty("MaxSlices"))
                for (var keys = Object.keys(message.MaxSlices), i = 0; i < keys.length; ++i)
                    writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 0 =*/16).uint64(message.MaxSlices[keys[i]]).ldelim();
            return writer;
        };

        /**
         * Encodes the specified MaxSlicesResponse message, length delimited.
         * @param {internal.MaxSlicesResponse|Object} message MaxSlicesResponse message or plain object to encode
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
         */
        MaxSlicesResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.internal.MaxSlicesResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    reader.skip().pos++;
                    if (message.MaxSlices === $util.emptyObject)
                        message.MaxSlices = {};
                    var key = reader.string();
                    reader.pos++;
                    message.MaxSlices[typeof key === "object" ? $util.longToHash(key) : key] = reader.uint64();
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
         */
        MaxSlicesResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MaxSlicesResponse message.
         * @param {internal.MaxSlicesResponse|Object} message MaxSlicesResponse message or plain object to verify
         * @returns {?string} `null` if valid, otherwise the reason why it is not
         */
        MaxSlicesResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.MaxSlices !== undefined) {
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
            if (message.MaxSlices !== undefined && message.MaxSlices !== null && message.hasOwnProperty("MaxSlices")) {
                object.MaxSlices = {};
                for (var keys2 = Object.keys(message.MaxSlices), j = 0; j < keys2.length; ++j)
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

// Resolve lazy type references to actual types
$util.lazyResolve($root, $lazyTypes);

module.exports = $root;
