import { OpenApiDiscriminator } from "./OpenApiDiscriminator";
import { OpenApiExternalDocs } from "./OpenApiExternalDocs";
import { OpenApiMap } from "./OpenApiMap";
import { OpenApiReference } from "./OpenApiReference";
import { OpenApiXml } from "./OpenApiXml";

/**
 * The Schema Object allows the definition of input and output data types. These types can be objects, but also primitives and arrays.
 * This object is an extended subset of the JSON Schema Specification Wright Draft 00.
 * For more information about the properties, see JSON Schema Core and JSON Schema Validation. Unless stated otherwise, the property definitions follow the JSON Schema.
 *
 * https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#schemaObject
 */
export interface OpenApiSchema {
    title?: string;
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: boolean;
    minimum?: number;
    exclusiveMinimum?: boolean;
    maxLength?: number;
    minLength?: number;
    pattern?: string;
    maxItems?: number;
    minItems?: number;
    uniqueItems?: boolean;
    maxProperties?: number;
    minProperties?: number;
    required?: string[];
    enum?: string[] | number[];
    /** Value MUST be a string. Multiple types via an array are not supported */
    type?: string;
    /** Inline or referenced schema MUST be of a Schema Object and not a standard JSON Schema. */
    allOf?: OpenApiSchema[] | OpenApiReference[];
    /** Inline or referenced schema MUST be of a Schema Object and not a standard JSON Schema. */
    oneOf?: OpenApiSchema[] | OpenApiReference[];
    /** Inline or referenced schema MUST be of a Schema Object and not a standard JSON Schema. */
    anyOf?: OpenApiSchema[] | OpenApiReference[];
    /** Inline or referenced schema MUST be of a Schema Object and not a standard JSON Schema. */
    not?: OpenApiSchema[] | OpenApiReference[];
    /** Value MUST be an object and not an array. Inline or referenced schema MUST be of a Schema Object and not a standard JSON Schema. items MUST be present if the type is array. */
    items?: OpenApiSchema | OpenApiReference;
    /** Property definitions MUST be a Schema Object and not a standard JSON Schema (inline or referenced). */
    properties?: OpenApiMap<OpenApiSchema | OpenApiReference>;
    /** Value can be boolean or object. Inline or referenced schema MUST be of a Schema Object and not a standard JSON Schema. Consistent with JSON Schema, additionalProperties defaults to true. */
    additionalProperties?: boolean | OpenApiSchema | OpenApiReference;
    /**  CommonMark syntax MAY be used for rich text representation. */
    description?: string;
    /** See Data Type Formats for further details. While relying on JSON Schema's defined formats, the OAS offers a few additional predefined formats. */
    format?:
        | "int32"
        | "int64"
        | "float"
        | "double"
        | "string"
        | "boolean"
        | "byte"
        | "binary"
        | "date"
        | "date-time"
        | "password";
    /**
     * The default value represents what would be assumed by the consumer of the input as the value of the schema if one is not provided.
     * Unlike JSON Schema, the value MUST conform to the defined type for the Schema Object defined at the same level.
     * For example, if type is string, then default can be "foo" but cannot be 1.
     */
    default?: any;
    /** Allows sending a null value for the defined schema. Default value is false. */
    nullable?: boolean;
    /**
     * Adds support for polymorphism. The discriminator is an object name that is used to differentiate between other schemas which may satisfy the payload description.
     * See Composition and Inheritance for more details.
     */
    discriminator?: OpenApiDiscriminator;
    /**
     * Relevant only for Schema "properties" definitions. Declares the property as "read only".
     * This means that it MAY be sent as part of a response but SHOULD NOT be sent as part of the request.
     * If the property is marked as readOnly being true and is in the required list, the required will take effect on the response only.
     * A property MUST NOT be marked as both readOnly and writeOnly being true. Default value is false.
     */
    readOnly?: boolean;
    /**
     * Relevant only for Schema "properties" definitions. Declares the property as "write only".
     * Therefore, it MAY be sent as part of a request but SHOULD NOT be sent as part of the response.
     * If the property is marked as writeOnly being true and is in the required list, the required will take effect on the request only.
     * A property MUST NOT be marked as both readOnly and writeOnly being true. Default value is false.
     */
    writeOnly?: boolean;
    /** This MAY be used only on properties schemas. It has no effect on root schemas. Adds additional metadata to describe the XML representation of this property. */
    xml?: OpenApiXml;
    /** Additional external documentation for this schema. */
    externalDocs?: OpenApiExternalDocs;
    /**
     * A free-form property to include an example of an instance for this schema.
     * To represent examples that cannot be naturally represented in JSON or YAML, a string value can be used to contain the example with escaping where necessary.
     */
    example?: any;
    /** Specifies that a schema is deprecated and SHOULD be transitioned out of usage. Default value is false. */
    deprecated?: boolean;
}
