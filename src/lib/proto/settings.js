/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const settings = $root.settings = (() => {

    /**
     * Namespace settings.
     * @exports settings
     * @namespace
     */
    const settings = {};

    settings.AgentConfig = (function() {

        /**
         * Properties of an AgentConfig.
         * @memberof settings
         * @interface IAgentConfig
         * @property {string|null} [command] AgentConfig command
         * @property {Array.<string>|null} [args] AgentConfig args
         * @property {Object.<string,string>|null} [env] AgentConfig env
         */

        /**
         * Constructs a new AgentConfig.
         * @memberof settings
         * @classdesc Represents an AgentConfig.
         * @implements IAgentConfig
         * @constructor
         * @param {settings.IAgentConfig=} [properties] Properties to set
         */
        function AgentConfig(properties) {
            this.args = [];
            this.env = {};
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AgentConfig command.
         * @member {string} command
         * @memberof settings.AgentConfig
         * @instance
         */
        AgentConfig.prototype.command = "";

        /**
         * AgentConfig args.
         * @member {Array.<string>} args
         * @memberof settings.AgentConfig
         * @instance
         */
        AgentConfig.prototype.args = $util.emptyArray;

        /**
         * AgentConfig env.
         * @member {Object.<string,string>} env
         * @memberof settings.AgentConfig
         * @instance
         */
        AgentConfig.prototype.env = $util.emptyObject;

        /**
         * Creates a new AgentConfig instance using the specified properties.
         * @function create
         * @memberof settings.AgentConfig
         * @static
         * @param {settings.IAgentConfig=} [properties] Properties to set
         * @returns {settings.AgentConfig} AgentConfig instance
         */
        AgentConfig.create = function create(properties) {
            return new AgentConfig(properties);
        };

        /**
         * Encodes the specified AgentConfig message. Does not implicitly {@link settings.AgentConfig.verify|verify} messages.
         * @function encode
         * @memberof settings.AgentConfig
         * @static
         * @param {settings.IAgentConfig} message AgentConfig message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AgentConfig.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.command != null && Object.hasOwnProperty.call(message, "command"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.command);
            if (message.args != null && message.args.length)
                for (let i = 0; i < message.args.length; ++i)
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.args[i]);
            if (message.env != null && Object.hasOwnProperty.call(message, "env"))
                for (let keys = Object.keys(message.env), i = 0; i < keys.length; ++i)
                    writer.uint32(/* id 3, wireType 2 =*/26).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.env[keys[i]]).ldelim();
            return writer;
        };

        /**
         * Encodes the specified AgentConfig message, length delimited. Does not implicitly {@link settings.AgentConfig.verify|verify} messages.
         * @function encodeDelimited
         * @memberof settings.AgentConfig
         * @static
         * @param {settings.IAgentConfig} message AgentConfig message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AgentConfig.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AgentConfig message from the specified reader or buffer.
         * @function decode
         * @memberof settings.AgentConfig
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {settings.AgentConfig} AgentConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AgentConfig.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.settings.AgentConfig(), key, value;
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.command = reader.string();
                        break;
                    }
                case 2: {
                        if (!(message.args && message.args.length))
                            message.args = [];
                        message.args.push(reader.string());
                        break;
                    }
                case 3: {
                        if (message.env === $util.emptyObject)
                            message.env = {};
                        let end2 = reader.uint32() + reader.pos;
                        key = "";
                        value = "";
                        while (reader.pos < end2) {
                            let tag2 = reader.uint32();
                            switch (tag2 >>> 3) {
                            case 1:
                                key = reader.string();
                                break;
                            case 2:
                                value = reader.string();
                                break;
                            default:
                                reader.skipType(tag2 & 7);
                                break;
                            }
                        }
                        message.env[key] = value;
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AgentConfig message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof settings.AgentConfig
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {settings.AgentConfig} AgentConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AgentConfig.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AgentConfig message.
         * @function verify
         * @memberof settings.AgentConfig
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AgentConfig.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.command != null && message.hasOwnProperty("command"))
                if (!$util.isString(message.command))
                    return "command: string expected";
            if (message.args != null && message.hasOwnProperty("args")) {
                if (!Array.isArray(message.args))
                    return "args: array expected";
                for (let i = 0; i < message.args.length; ++i)
                    if (!$util.isString(message.args[i]))
                        return "args: string[] expected";
            }
            if (message.env != null && message.hasOwnProperty("env")) {
                if (!$util.isObject(message.env))
                    return "env: object expected";
                let key = Object.keys(message.env);
                for (let i = 0; i < key.length; ++i)
                    if (!$util.isString(message.env[key[i]]))
                        return "env: string{k:string} expected";
            }
            return null;
        };

        /**
         * Creates an AgentConfig message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof settings.AgentConfig
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {settings.AgentConfig} AgentConfig
         */
        AgentConfig.fromObject = function fromObject(object) {
            if (object instanceof $root.settings.AgentConfig)
                return object;
            let message = new $root.settings.AgentConfig();
            if (object.command != null)
                message.command = String(object.command);
            if (object.args) {
                if (!Array.isArray(object.args))
                    throw TypeError(".settings.AgentConfig.args: array expected");
                message.args = [];
                for (let i = 0; i < object.args.length; ++i)
                    message.args[i] = String(object.args[i]);
            }
            if (object.env) {
                if (typeof object.env !== "object")
                    throw TypeError(".settings.AgentConfig.env: object expected");
                message.env = {};
                for (let keys = Object.keys(object.env), i = 0; i < keys.length; ++i)
                    message.env[keys[i]] = String(object.env[keys[i]]);
            }
            return message;
        };

        /**
         * Creates a plain object from an AgentConfig message. Also converts values to other types if specified.
         * @function toObject
         * @memberof settings.AgentConfig
         * @static
         * @param {settings.AgentConfig} message AgentConfig
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AgentConfig.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.args = [];
            if (options.objects || options.defaults)
                object.env = {};
            if (options.defaults)
                object.command = "";
            if (message.command != null && message.hasOwnProperty("command"))
                object.command = message.command;
            if (message.args && message.args.length) {
                object.args = [];
                for (let j = 0; j < message.args.length; ++j)
                    object.args[j] = message.args[j];
            }
            let keys2;
            if (message.env && (keys2 = Object.keys(message.env)).length) {
                object.env = {};
                for (let j = 0; j < keys2.length; ++j)
                    object.env[keys2[j]] = message.env[keys2[j]];
            }
            return object;
        };

        /**
         * Converts this AgentConfig to JSON.
         * @function toJSON
         * @memberof settings.AgentConfig
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AgentConfig.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for AgentConfig
         * @function getTypeUrl
         * @memberof settings.AgentConfig
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        AgentConfig.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/settings.AgentConfig";
        };

        return AgentConfig;
    })();

    settings.AgentsConfig = (function() {

        /**
         * Properties of an AgentsConfig.
         * @memberof settings
         * @interface IAgentsConfig
         * @property {Object.<string,settings.IAgentConfig>|null} [agents] AgentsConfig agents
         */

        /**
         * Constructs a new AgentsConfig.
         * @memberof settings
         * @classdesc Represents an AgentsConfig.
         * @implements IAgentsConfig
         * @constructor
         * @param {settings.IAgentsConfig=} [properties] Properties to set
         */
        function AgentsConfig(properties) {
            this.agents = {};
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AgentsConfig agents.
         * @member {Object.<string,settings.IAgentConfig>} agents
         * @memberof settings.AgentsConfig
         * @instance
         */
        AgentsConfig.prototype.agents = $util.emptyObject;

        /**
         * Creates a new AgentsConfig instance using the specified properties.
         * @function create
         * @memberof settings.AgentsConfig
         * @static
         * @param {settings.IAgentsConfig=} [properties] Properties to set
         * @returns {settings.AgentsConfig} AgentsConfig instance
         */
        AgentsConfig.create = function create(properties) {
            return new AgentsConfig(properties);
        };

        /**
         * Encodes the specified AgentsConfig message. Does not implicitly {@link settings.AgentsConfig.verify|verify} messages.
         * @function encode
         * @memberof settings.AgentsConfig
         * @static
         * @param {settings.IAgentsConfig} message AgentsConfig message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AgentsConfig.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.agents != null && Object.hasOwnProperty.call(message, "agents"))
                for (let keys = Object.keys(message.agents), i = 0; i < keys.length; ++i) {
                    writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                    $root.settings.AgentConfig.encode(message.agents[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                }
            return writer;
        };

        /**
         * Encodes the specified AgentsConfig message, length delimited. Does not implicitly {@link settings.AgentsConfig.verify|verify} messages.
         * @function encodeDelimited
         * @memberof settings.AgentsConfig
         * @static
         * @param {settings.IAgentsConfig} message AgentsConfig message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AgentsConfig.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AgentsConfig message from the specified reader or buffer.
         * @function decode
         * @memberof settings.AgentsConfig
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {settings.AgentsConfig} AgentsConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AgentsConfig.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.settings.AgentsConfig(), key, value;
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        if (message.agents === $util.emptyObject)
                            message.agents = {};
                        let end2 = reader.uint32() + reader.pos;
                        key = "";
                        value = null;
                        while (reader.pos < end2) {
                            let tag2 = reader.uint32();
                            switch (tag2 >>> 3) {
                            case 1:
                                key = reader.string();
                                break;
                            case 2:
                                value = $root.settings.AgentConfig.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag2 & 7);
                                break;
                            }
                        }
                        message.agents[key] = value;
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AgentsConfig message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof settings.AgentsConfig
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {settings.AgentsConfig} AgentsConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AgentsConfig.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AgentsConfig message.
         * @function verify
         * @memberof settings.AgentsConfig
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AgentsConfig.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.agents != null && message.hasOwnProperty("agents")) {
                if (!$util.isObject(message.agents))
                    return "agents: object expected";
                let key = Object.keys(message.agents);
                for (let i = 0; i < key.length; ++i) {
                    let error = $root.settings.AgentConfig.verify(message.agents[key[i]]);
                    if (error)
                        return "agents." + error;
                }
            }
            return null;
        };

        /**
         * Creates an AgentsConfig message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof settings.AgentsConfig
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {settings.AgentsConfig} AgentsConfig
         */
        AgentsConfig.fromObject = function fromObject(object) {
            if (object instanceof $root.settings.AgentsConfig)
                return object;
            let message = new $root.settings.AgentsConfig();
            if (object.agents) {
                if (typeof object.agents !== "object")
                    throw TypeError(".settings.AgentsConfig.agents: object expected");
                message.agents = {};
                for (let keys = Object.keys(object.agents), i = 0; i < keys.length; ++i) {
                    if (typeof object.agents[keys[i]] !== "object")
                        throw TypeError(".settings.AgentsConfig.agents: object expected");
                    message.agents[keys[i]] = $root.settings.AgentConfig.fromObject(object.agents[keys[i]]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from an AgentsConfig message. Also converts values to other types if specified.
         * @function toObject
         * @memberof settings.AgentsConfig
         * @static
         * @param {settings.AgentsConfig} message AgentsConfig
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AgentsConfig.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.objects || options.defaults)
                object.agents = {};
            let keys2;
            if (message.agents && (keys2 = Object.keys(message.agents)).length) {
                object.agents = {};
                for (let j = 0; j < keys2.length; ++j)
                    object.agents[keys2[j]] = $root.settings.AgentConfig.toObject(message.agents[keys2[j]], options);
            }
            return object;
        };

        /**
         * Converts this AgentsConfig to JSON.
         * @function toJSON
         * @memberof settings.AgentsConfig
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AgentsConfig.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for AgentsConfig
         * @function getTypeUrl
         * @memberof settings.AgentsConfig
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        AgentsConfig.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/settings.AgentsConfig";
        };

        return AgentsConfig;
    })();

    settings.MCPServer = (function() {

        /**
         * Properties of a MCPServer.
         * @memberof settings
         * @interface IMCPServer
         * @property {string|null} [name] MCPServer name
         * @property {string|null} [url] MCPServer url
         * @property {string|null} [type] MCPServer type
         * @property {boolean|null} [enabled] MCPServer enabled
         */

        /**
         * Constructs a new MCPServer.
         * @memberof settings
         * @classdesc Represents a MCPServer.
         * @implements IMCPServer
         * @constructor
         * @param {settings.IMCPServer=} [properties] Properties to set
         */
        function MCPServer(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MCPServer name.
         * @member {string} name
         * @memberof settings.MCPServer
         * @instance
         */
        MCPServer.prototype.name = "";

        /**
         * MCPServer url.
         * @member {string} url
         * @memberof settings.MCPServer
         * @instance
         */
        MCPServer.prototype.url = "";

        /**
         * MCPServer type.
         * @member {string} type
         * @memberof settings.MCPServer
         * @instance
         */
        MCPServer.prototype.type = "";

        /**
         * MCPServer enabled.
         * @member {boolean} enabled
         * @memberof settings.MCPServer
         * @instance
         */
        MCPServer.prototype.enabled = false;

        /**
         * Creates a new MCPServer instance using the specified properties.
         * @function create
         * @memberof settings.MCPServer
         * @static
         * @param {settings.IMCPServer=} [properties] Properties to set
         * @returns {settings.MCPServer} MCPServer instance
         */
        MCPServer.create = function create(properties) {
            return new MCPServer(properties);
        };

        /**
         * Encodes the specified MCPServer message. Does not implicitly {@link settings.MCPServer.verify|verify} messages.
         * @function encode
         * @memberof settings.MCPServer
         * @static
         * @param {settings.IMCPServer} message MCPServer message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MCPServer.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.url != null && Object.hasOwnProperty.call(message, "url"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.url);
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.type);
            if (message.enabled != null && Object.hasOwnProperty.call(message, "enabled"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.enabled);
            return writer;
        };

        /**
         * Encodes the specified MCPServer message, length delimited. Does not implicitly {@link settings.MCPServer.verify|verify} messages.
         * @function encodeDelimited
         * @memberof settings.MCPServer
         * @static
         * @param {settings.IMCPServer} message MCPServer message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MCPServer.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MCPServer message from the specified reader or buffer.
         * @function decode
         * @memberof settings.MCPServer
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {settings.MCPServer} MCPServer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MCPServer.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.settings.MCPServer();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.name = reader.string();
                        break;
                    }
                case 2: {
                        message.url = reader.string();
                        break;
                    }
                case 3: {
                        message.type = reader.string();
                        break;
                    }
                case 4: {
                        message.enabled = reader.bool();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MCPServer message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof settings.MCPServer
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {settings.MCPServer} MCPServer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MCPServer.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MCPServer message.
         * @function verify
         * @memberof settings.MCPServer
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MCPServer.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.url != null && message.hasOwnProperty("url"))
                if (!$util.isString(message.url))
                    return "url: string expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isString(message.type))
                    return "type: string expected";
            if (message.enabled != null && message.hasOwnProperty("enabled"))
                if (typeof message.enabled !== "boolean")
                    return "enabled: boolean expected";
            return null;
        };

        /**
         * Creates a MCPServer message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof settings.MCPServer
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {settings.MCPServer} MCPServer
         */
        MCPServer.fromObject = function fromObject(object) {
            if (object instanceof $root.settings.MCPServer)
                return object;
            let message = new $root.settings.MCPServer();
            if (object.name != null)
                message.name = String(object.name);
            if (object.url != null)
                message.url = String(object.url);
            if (object.type != null)
                message.type = String(object.type);
            if (object.enabled != null)
                message.enabled = Boolean(object.enabled);
            return message;
        };

        /**
         * Creates a plain object from a MCPServer message. Also converts values to other types if specified.
         * @function toObject
         * @memberof settings.MCPServer
         * @static
         * @param {settings.MCPServer} message MCPServer
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MCPServer.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.name = "";
                object.url = "";
                object.type = "";
                object.enabled = false;
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.url != null && message.hasOwnProperty("url"))
                object.url = message.url;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.enabled != null && message.hasOwnProperty("enabled"))
                object.enabled = message.enabled;
            return object;
        };

        /**
         * Converts this MCPServer to JSON.
         * @function toJSON
         * @memberof settings.MCPServer
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MCPServer.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for MCPServer
         * @function getTypeUrl
         * @memberof settings.MCPServer
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        MCPServer.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/settings.MCPServer";
        };

        return MCPServer;
    })();

    settings.MCPConfig = (function() {

        /**
         * Properties of a MCPConfig.
         * @memberof settings
         * @interface IMCPConfig
         * @property {boolean|null} [enabled] MCPConfig enabled
         * @property {boolean|null} [autoConnect] MCPConfig autoConnect
         * @property {number|null} [retryAttempts] MCPConfig retryAttempts
         * @property {number|null} [retryDelay] MCPConfig retryDelay
         * @property {number|null} [requestTimeout] MCPConfig requestTimeout
         * @property {Array.<settings.IMCPServer>|null} [servers] MCPConfig servers
         * @property {boolean|null} [debug] MCPConfig debug
         */

        /**
         * Constructs a new MCPConfig.
         * @memberof settings
         * @classdesc Represents a MCPConfig.
         * @implements IMCPConfig
         * @constructor
         * @param {settings.IMCPConfig=} [properties] Properties to set
         */
        function MCPConfig(properties) {
            this.servers = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MCPConfig enabled.
         * @member {boolean} enabled
         * @memberof settings.MCPConfig
         * @instance
         */
        MCPConfig.prototype.enabled = false;

        /**
         * MCPConfig autoConnect.
         * @member {boolean} autoConnect
         * @memberof settings.MCPConfig
         * @instance
         */
        MCPConfig.prototype.autoConnect = false;

        /**
         * MCPConfig retryAttempts.
         * @member {number} retryAttempts
         * @memberof settings.MCPConfig
         * @instance
         */
        MCPConfig.prototype.retryAttempts = 0;

        /**
         * MCPConfig retryDelay.
         * @member {number} retryDelay
         * @memberof settings.MCPConfig
         * @instance
         */
        MCPConfig.prototype.retryDelay = 0;

        /**
         * MCPConfig requestTimeout.
         * @member {number} requestTimeout
         * @memberof settings.MCPConfig
         * @instance
         */
        MCPConfig.prototype.requestTimeout = 0;

        /**
         * MCPConfig servers.
         * @member {Array.<settings.IMCPServer>} servers
         * @memberof settings.MCPConfig
         * @instance
         */
        MCPConfig.prototype.servers = $util.emptyArray;

        /**
         * MCPConfig debug.
         * @member {boolean} debug
         * @memberof settings.MCPConfig
         * @instance
         */
        MCPConfig.prototype.debug = false;

        /**
         * Creates a new MCPConfig instance using the specified properties.
         * @function create
         * @memberof settings.MCPConfig
         * @static
         * @param {settings.IMCPConfig=} [properties] Properties to set
         * @returns {settings.MCPConfig} MCPConfig instance
         */
        MCPConfig.create = function create(properties) {
            return new MCPConfig(properties);
        };

        /**
         * Encodes the specified MCPConfig message. Does not implicitly {@link settings.MCPConfig.verify|verify} messages.
         * @function encode
         * @memberof settings.MCPConfig
         * @static
         * @param {settings.IMCPConfig} message MCPConfig message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MCPConfig.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.enabled != null && Object.hasOwnProperty.call(message, "enabled"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.enabled);
            if (message.autoConnect != null && Object.hasOwnProperty.call(message, "autoConnect"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.autoConnect);
            if (message.retryAttempts != null && Object.hasOwnProperty.call(message, "retryAttempts"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.retryAttempts);
            if (message.retryDelay != null && Object.hasOwnProperty.call(message, "retryDelay"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.retryDelay);
            if (message.requestTimeout != null && Object.hasOwnProperty.call(message, "requestTimeout"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.requestTimeout);
            if (message.servers != null && message.servers.length)
                for (let i = 0; i < message.servers.length; ++i)
                    $root.settings.MCPServer.encode(message.servers[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.debug != null && Object.hasOwnProperty.call(message, "debug"))
                writer.uint32(/* id 7, wireType 0 =*/56).bool(message.debug);
            return writer;
        };

        /**
         * Encodes the specified MCPConfig message, length delimited. Does not implicitly {@link settings.MCPConfig.verify|verify} messages.
         * @function encodeDelimited
         * @memberof settings.MCPConfig
         * @static
         * @param {settings.IMCPConfig} message MCPConfig message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MCPConfig.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MCPConfig message from the specified reader or buffer.
         * @function decode
         * @memberof settings.MCPConfig
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {settings.MCPConfig} MCPConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MCPConfig.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.settings.MCPConfig();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.enabled = reader.bool();
                        break;
                    }
                case 2: {
                        message.autoConnect = reader.bool();
                        break;
                    }
                case 3: {
                        message.retryAttempts = reader.int32();
                        break;
                    }
                case 4: {
                        message.retryDelay = reader.int32();
                        break;
                    }
                case 5: {
                        message.requestTimeout = reader.int32();
                        break;
                    }
                case 6: {
                        if (!(message.servers && message.servers.length))
                            message.servers = [];
                        message.servers.push($root.settings.MCPServer.decode(reader, reader.uint32()));
                        break;
                    }
                case 7: {
                        message.debug = reader.bool();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MCPConfig message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof settings.MCPConfig
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {settings.MCPConfig} MCPConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MCPConfig.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MCPConfig message.
         * @function verify
         * @memberof settings.MCPConfig
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MCPConfig.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.enabled != null && message.hasOwnProperty("enabled"))
                if (typeof message.enabled !== "boolean")
                    return "enabled: boolean expected";
            if (message.autoConnect != null && message.hasOwnProperty("autoConnect"))
                if (typeof message.autoConnect !== "boolean")
                    return "autoConnect: boolean expected";
            if (message.retryAttempts != null && message.hasOwnProperty("retryAttempts"))
                if (!$util.isInteger(message.retryAttempts))
                    return "retryAttempts: integer expected";
            if (message.retryDelay != null && message.hasOwnProperty("retryDelay"))
                if (!$util.isInteger(message.retryDelay))
                    return "retryDelay: integer expected";
            if (message.requestTimeout != null && message.hasOwnProperty("requestTimeout"))
                if (!$util.isInteger(message.requestTimeout))
                    return "requestTimeout: integer expected";
            if (message.servers != null && message.hasOwnProperty("servers")) {
                if (!Array.isArray(message.servers))
                    return "servers: array expected";
                for (let i = 0; i < message.servers.length; ++i) {
                    let error = $root.settings.MCPServer.verify(message.servers[i]);
                    if (error)
                        return "servers." + error;
                }
            }
            if (message.debug != null && message.hasOwnProperty("debug"))
                if (typeof message.debug !== "boolean")
                    return "debug: boolean expected";
            return null;
        };

        /**
         * Creates a MCPConfig message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof settings.MCPConfig
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {settings.MCPConfig} MCPConfig
         */
        MCPConfig.fromObject = function fromObject(object) {
            if (object instanceof $root.settings.MCPConfig)
                return object;
            let message = new $root.settings.MCPConfig();
            if (object.enabled != null)
                message.enabled = Boolean(object.enabled);
            if (object.autoConnect != null)
                message.autoConnect = Boolean(object.autoConnect);
            if (object.retryAttempts != null)
                message.retryAttempts = object.retryAttempts | 0;
            if (object.retryDelay != null)
                message.retryDelay = object.retryDelay | 0;
            if (object.requestTimeout != null)
                message.requestTimeout = object.requestTimeout | 0;
            if (object.servers) {
                if (!Array.isArray(object.servers))
                    throw TypeError(".settings.MCPConfig.servers: array expected");
                message.servers = [];
                for (let i = 0; i < object.servers.length; ++i) {
                    if (typeof object.servers[i] !== "object")
                        throw TypeError(".settings.MCPConfig.servers: object expected");
                    message.servers[i] = $root.settings.MCPServer.fromObject(object.servers[i]);
                }
            }
            if (object.debug != null)
                message.debug = Boolean(object.debug);
            return message;
        };

        /**
         * Creates a plain object from a MCPConfig message. Also converts values to other types if specified.
         * @function toObject
         * @memberof settings.MCPConfig
         * @static
         * @param {settings.MCPConfig} message MCPConfig
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MCPConfig.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.servers = [];
            if (options.defaults) {
                object.enabled = false;
                object.autoConnect = false;
                object.retryAttempts = 0;
                object.retryDelay = 0;
                object.requestTimeout = 0;
                object.debug = false;
            }
            if (message.enabled != null && message.hasOwnProperty("enabled"))
                object.enabled = message.enabled;
            if (message.autoConnect != null && message.hasOwnProperty("autoConnect"))
                object.autoConnect = message.autoConnect;
            if (message.retryAttempts != null && message.hasOwnProperty("retryAttempts"))
                object.retryAttempts = message.retryAttempts;
            if (message.retryDelay != null && message.hasOwnProperty("retryDelay"))
                object.retryDelay = message.retryDelay;
            if (message.requestTimeout != null && message.hasOwnProperty("requestTimeout"))
                object.requestTimeout = message.requestTimeout;
            if (message.servers && message.servers.length) {
                object.servers = [];
                for (let j = 0; j < message.servers.length; ++j)
                    object.servers[j] = $root.settings.MCPServer.toObject(message.servers[j], options);
            }
            if (message.debug != null && message.hasOwnProperty("debug"))
                object.debug = message.debug;
            return object;
        };

        /**
         * Converts this MCPConfig to JSON.
         * @function toJSON
         * @memberof settings.MCPConfig
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MCPConfig.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for MCPConfig
         * @function getTypeUrl
         * @memberof settings.MCPConfig
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        MCPConfig.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/settings.MCPConfig";
        };

        return MCPConfig;
    })();

    settings.Settings = (function() {

        /**
         * Properties of a Settings.
         * @memberof settings
         * @interface ISettings
         * @property {string|null} [version] Settings version
         * @property {settings.IAgentsConfig|null} [agentsConfig] Settings agentsConfig
         * @property {settings.IMCPConfig|null} [mcpConfig] Settings mcpConfig
         */

        /**
         * Constructs a new Settings.
         * @memberof settings
         * @classdesc Represents a Settings.
         * @implements ISettings
         * @constructor
         * @param {settings.ISettings=} [properties] Properties to set
         */
        function Settings(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Settings version.
         * @member {string} version
         * @memberof settings.Settings
         * @instance
         */
        Settings.prototype.version = "";

        /**
         * Settings agentsConfig.
         * @member {settings.IAgentsConfig|null|undefined} agentsConfig
         * @memberof settings.Settings
         * @instance
         */
        Settings.prototype.agentsConfig = null;

        /**
         * Settings mcpConfig.
         * @member {settings.IMCPConfig|null|undefined} mcpConfig
         * @memberof settings.Settings
         * @instance
         */
        Settings.prototype.mcpConfig = null;

        /**
         * Creates a new Settings instance using the specified properties.
         * @function create
         * @memberof settings.Settings
         * @static
         * @param {settings.ISettings=} [properties] Properties to set
         * @returns {settings.Settings} Settings instance
         */
        Settings.create = function create(properties) {
            return new Settings(properties);
        };

        /**
         * Encodes the specified Settings message. Does not implicitly {@link settings.Settings.verify|verify} messages.
         * @function encode
         * @memberof settings.Settings
         * @static
         * @param {settings.ISettings} message Settings message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Settings.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.version != null && Object.hasOwnProperty.call(message, "version"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.version);
            if (message.agentsConfig != null && Object.hasOwnProperty.call(message, "agentsConfig"))
                $root.settings.AgentsConfig.encode(message.agentsConfig, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.mcpConfig != null && Object.hasOwnProperty.call(message, "mcpConfig"))
                $root.settings.MCPConfig.encode(message.mcpConfig, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Settings message, length delimited. Does not implicitly {@link settings.Settings.verify|verify} messages.
         * @function encodeDelimited
         * @memberof settings.Settings
         * @static
         * @param {settings.ISettings} message Settings message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Settings.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Settings message from the specified reader or buffer.
         * @function decode
         * @memberof settings.Settings
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {settings.Settings} Settings
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Settings.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.settings.Settings();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.version = reader.string();
                        break;
                    }
                case 2: {
                        message.agentsConfig = $root.settings.AgentsConfig.decode(reader, reader.uint32());
                        break;
                    }
                case 3: {
                        message.mcpConfig = $root.settings.MCPConfig.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Settings message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof settings.Settings
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {settings.Settings} Settings
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Settings.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Settings message.
         * @function verify
         * @memberof settings.Settings
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Settings.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.version != null && message.hasOwnProperty("version"))
                if (!$util.isString(message.version))
                    return "version: string expected";
            if (message.agentsConfig != null && message.hasOwnProperty("agentsConfig")) {
                let error = $root.settings.AgentsConfig.verify(message.agentsConfig);
                if (error)
                    return "agentsConfig." + error;
            }
            if (message.mcpConfig != null && message.hasOwnProperty("mcpConfig")) {
                let error = $root.settings.MCPConfig.verify(message.mcpConfig);
                if (error)
                    return "mcpConfig." + error;
            }
            return null;
        };

        /**
         * Creates a Settings message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof settings.Settings
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {settings.Settings} Settings
         */
        Settings.fromObject = function fromObject(object) {
            if (object instanceof $root.settings.Settings)
                return object;
            let message = new $root.settings.Settings();
            if (object.version != null)
                message.version = String(object.version);
            if (object.agentsConfig != null) {
                if (typeof object.agentsConfig !== "object")
                    throw TypeError(".settings.Settings.agentsConfig: object expected");
                message.agentsConfig = $root.settings.AgentsConfig.fromObject(object.agentsConfig);
            }
            if (object.mcpConfig != null) {
                if (typeof object.mcpConfig !== "object")
                    throw TypeError(".settings.Settings.mcpConfig: object expected");
                message.mcpConfig = $root.settings.MCPConfig.fromObject(object.mcpConfig);
            }
            return message;
        };

        /**
         * Creates a plain object from a Settings message. Also converts values to other types if specified.
         * @function toObject
         * @memberof settings.Settings
         * @static
         * @param {settings.Settings} message Settings
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Settings.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.version = "";
                object.agentsConfig = null;
                object.mcpConfig = null;
            }
            if (message.version != null && message.hasOwnProperty("version"))
                object.version = message.version;
            if (message.agentsConfig != null && message.hasOwnProperty("agentsConfig"))
                object.agentsConfig = $root.settings.AgentsConfig.toObject(message.agentsConfig, options);
            if (message.mcpConfig != null && message.hasOwnProperty("mcpConfig"))
                object.mcpConfig = $root.settings.MCPConfig.toObject(message.mcpConfig, options);
            return object;
        };

        /**
         * Converts this Settings to JSON.
         * @function toJSON
         * @memberof settings.Settings
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Settings.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Settings
         * @function getTypeUrl
         * @memberof settings.Settings
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Settings.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/settings.Settings";
        };

        return Settings;
    })();

    return settings;
})();

export { $root as default };
