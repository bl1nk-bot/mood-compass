import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace settings. */
export namespace settings {

    /** Properties of an AgentConfig. */
    interface IAgentConfig {

        /** AgentConfig command */
        command?: (string|null);

        /** AgentConfig args */
        args?: (string[]|null);

        /** AgentConfig env */
        env?: ({ [k: string]: string }|null);
    }

    /** Represents an AgentConfig. */
    class AgentConfig implements IAgentConfig {

        /**
         * Constructs a new AgentConfig.
         * @param [properties] Properties to set
         */
        constructor(properties?: settings.IAgentConfig);

        /** AgentConfig command. */
        public command: string;

        /** AgentConfig args. */
        public args: string[];

        /** AgentConfig env. */
        public env: { [k: string]: string };

        /**
         * Creates a new AgentConfig instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AgentConfig instance
         */
        public static create(properties?: settings.IAgentConfig): settings.AgentConfig;

        /**
         * Encodes the specified AgentConfig message. Does not implicitly {@link settings.AgentConfig.verify|verify} messages.
         * @param message AgentConfig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: settings.IAgentConfig, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AgentConfig message, length delimited. Does not implicitly {@link settings.AgentConfig.verify|verify} messages.
         * @param message AgentConfig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: settings.IAgentConfig, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AgentConfig message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AgentConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): settings.AgentConfig;

        /**
         * Decodes an AgentConfig message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AgentConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): settings.AgentConfig;

        /**
         * Verifies an AgentConfig message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AgentConfig message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AgentConfig
         */
        public static fromObject(object: { [k: string]: any }): settings.AgentConfig;

        /**
         * Creates a plain object from an AgentConfig message. Also converts values to other types if specified.
         * @param message AgentConfig
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: settings.AgentConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AgentConfig to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for AgentConfig
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an AgentsConfig. */
    interface IAgentsConfig {

        /** AgentsConfig agents */
        agents?: ({ [k: string]: settings.IAgentConfig }|null);
    }

    /** Represents an AgentsConfig. */
    class AgentsConfig implements IAgentsConfig {

        /**
         * Constructs a new AgentsConfig.
         * @param [properties] Properties to set
         */
        constructor(properties?: settings.IAgentsConfig);

        /** AgentsConfig agents. */
        public agents: { [k: string]: settings.IAgentConfig };

        /**
         * Creates a new AgentsConfig instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AgentsConfig instance
         */
        public static create(properties?: settings.IAgentsConfig): settings.AgentsConfig;

        /**
         * Encodes the specified AgentsConfig message. Does not implicitly {@link settings.AgentsConfig.verify|verify} messages.
         * @param message AgentsConfig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: settings.IAgentsConfig, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AgentsConfig message, length delimited. Does not implicitly {@link settings.AgentsConfig.verify|verify} messages.
         * @param message AgentsConfig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: settings.IAgentsConfig, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AgentsConfig message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AgentsConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): settings.AgentsConfig;

        /**
         * Decodes an AgentsConfig message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AgentsConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): settings.AgentsConfig;

        /**
         * Verifies an AgentsConfig message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AgentsConfig message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AgentsConfig
         */
        public static fromObject(object: { [k: string]: any }): settings.AgentsConfig;

        /**
         * Creates a plain object from an AgentsConfig message. Also converts values to other types if specified.
         * @param message AgentsConfig
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: settings.AgentsConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AgentsConfig to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for AgentsConfig
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a MCPServer. */
    interface IMCPServer {

        /** MCPServer name */
        name?: (string|null);

        /** MCPServer url */
        url?: (string|null);

        /** MCPServer type */
        type?: (string|null);

        /** MCPServer enabled */
        enabled?: (boolean|null);
    }

    /** Represents a MCPServer. */
    class MCPServer implements IMCPServer {

        /**
         * Constructs a new MCPServer.
         * @param [properties] Properties to set
         */
        constructor(properties?: settings.IMCPServer);

        /** MCPServer name. */
        public name: string;

        /** MCPServer url. */
        public url: string;

        /** MCPServer type. */
        public type: string;

        /** MCPServer enabled. */
        public enabled: boolean;

        /**
         * Creates a new MCPServer instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MCPServer instance
         */
        public static create(properties?: settings.IMCPServer): settings.MCPServer;

        /**
         * Encodes the specified MCPServer message. Does not implicitly {@link settings.MCPServer.verify|verify} messages.
         * @param message MCPServer message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: settings.IMCPServer, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MCPServer message, length delimited. Does not implicitly {@link settings.MCPServer.verify|verify} messages.
         * @param message MCPServer message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: settings.IMCPServer, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MCPServer message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MCPServer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): settings.MCPServer;

        /**
         * Decodes a MCPServer message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MCPServer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): settings.MCPServer;

        /**
         * Verifies a MCPServer message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MCPServer message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MCPServer
         */
        public static fromObject(object: { [k: string]: any }): settings.MCPServer;

        /**
         * Creates a plain object from a MCPServer message. Also converts values to other types if specified.
         * @param message MCPServer
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: settings.MCPServer, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MCPServer to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for MCPServer
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a MCPConfig. */
    interface IMCPConfig {

        /** MCPConfig enabled */
        enabled?: (boolean|null);

        /** MCPConfig autoConnect */
        autoConnect?: (boolean|null);

        /** MCPConfig retryAttempts */
        retryAttempts?: (number|null);

        /** MCPConfig retryDelay */
        retryDelay?: (number|null);

        /** MCPConfig requestTimeout */
        requestTimeout?: (number|null);

        /** MCPConfig servers */
        servers?: (settings.IMCPServer[]|null);

        /** MCPConfig debug */
        debug?: (boolean|null);
    }

    /** Represents a MCPConfig. */
    class MCPConfig implements IMCPConfig {

        /**
         * Constructs a new MCPConfig.
         * @param [properties] Properties to set
         */
        constructor(properties?: settings.IMCPConfig);

        /** MCPConfig enabled. */
        public enabled: boolean;

        /** MCPConfig autoConnect. */
        public autoConnect: boolean;

        /** MCPConfig retryAttempts. */
        public retryAttempts: number;

        /** MCPConfig retryDelay. */
        public retryDelay: number;

        /** MCPConfig requestTimeout. */
        public requestTimeout: number;

        /** MCPConfig servers. */
        public servers: settings.IMCPServer[];

        /** MCPConfig debug. */
        public debug: boolean;

        /**
         * Creates a new MCPConfig instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MCPConfig instance
         */
        public static create(properties?: settings.IMCPConfig): settings.MCPConfig;

        /**
         * Encodes the specified MCPConfig message. Does not implicitly {@link settings.MCPConfig.verify|verify} messages.
         * @param message MCPConfig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: settings.IMCPConfig, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MCPConfig message, length delimited. Does not implicitly {@link settings.MCPConfig.verify|verify} messages.
         * @param message MCPConfig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: settings.IMCPConfig, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MCPConfig message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MCPConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): settings.MCPConfig;

        /**
         * Decodes a MCPConfig message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MCPConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): settings.MCPConfig;

        /**
         * Verifies a MCPConfig message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MCPConfig message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MCPConfig
         */
        public static fromObject(object: { [k: string]: any }): settings.MCPConfig;

        /**
         * Creates a plain object from a MCPConfig message. Also converts values to other types if specified.
         * @param message MCPConfig
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: settings.MCPConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MCPConfig to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for MCPConfig
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Settings. */
    interface ISettings {

        /** Settings version */
        version?: (string|null);

        /** Settings agentsConfig */
        agentsConfig?: (settings.IAgentsConfig|null);

        /** Settings mcpConfig */
        mcpConfig?: (settings.IMCPConfig|null);
    }

    /** Represents a Settings. */
    class Settings implements ISettings {

        /**
         * Constructs a new Settings.
         * @param [properties] Properties to set
         */
        constructor(properties?: settings.ISettings);

        /** Settings version. */
        public version: string;

        /** Settings agentsConfig. */
        public agentsConfig?: (settings.IAgentsConfig|null);

        /** Settings mcpConfig. */
        public mcpConfig?: (settings.IMCPConfig|null);

        /**
         * Creates a new Settings instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Settings instance
         */
        public static create(properties?: settings.ISettings): settings.Settings;

        /**
         * Encodes the specified Settings message. Does not implicitly {@link settings.Settings.verify|verify} messages.
         * @param message Settings message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: settings.ISettings, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Settings message, length delimited. Does not implicitly {@link settings.Settings.verify|verify} messages.
         * @param message Settings message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: settings.ISettings, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Settings message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Settings
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): settings.Settings;

        /**
         * Decodes a Settings message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Settings
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): settings.Settings;

        /**
         * Verifies a Settings message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Settings message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Settings
         */
        public static fromObject(object: { [k: string]: any }): settings.Settings;

        /**
         * Creates a plain object from a Settings message. Also converts values to other types if specified.
         * @param message Settings
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: settings.Settings, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Settings to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Settings
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}
