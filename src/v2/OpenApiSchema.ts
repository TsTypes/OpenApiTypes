import { OpenApiReference } from "../../dist/open-api-v3";
import { OpenApiDataFormat } from "./OpenApiDataFormat";
import { OpenApiDataType } from "./OpenApiDataType";
import { OpenApiExternalDocs } from "./OpenApiExternalDocs";
import { OpenApiMap } from "./OpenApiMap";
import { OpenApiXml } from "./OpenApiXml";

/**
 * The Schema Object allows the definition of input and output data types.
 * These types can be objects, but also primitives and arrays.
 * This object is based on the JSON Schema Specification Draft 4 and uses a predefined subset of it.
 * On top of this subset, there are extensions provided by this specification to allow for more complete documentation.
 *
 * Further information about the properties can be found in JSON Schema Core and JSON Schema Validation.
 * Unless stated otherwise, the property definitions follow the JSON Schema specification as referenced here.
 *
 * https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#schema-object
 */
export interface OpenApiSchema {
    /**
     * External definition
     */
    $ref?: string;
    /**
     * The title of the schema.
     */
    title?: string;
    /**
     * A short description of the schema.
     */
    description?: string;
    /**
     * Declares the value of the header that the server will use if none is provided.
     * (Note: "default" has no meaning for required headers.) See https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-6.2.
     * Unlike JSON Schema this value MUST conform to the defined type for the header.
     */
    default?: any;
    /**
     * See https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.1.2.
     */
    maximum?: number;
    /**
     * See https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.1.2.
     */
    exclusiveMaximum?: boolean;
    /**
     * See https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.1.3.
     */
    minimum?: number;
    /**
     * See https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.1.3.
     */
    exclusiveMinimum?: boolean;
    /**
     * 	See https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.2.1.
     */
    maxLength?: number;
    /**
     * 	See https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.2.2.
     */
    minLength?: number;
    /**
     * 	See https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.2.3.
     */
    pattern?: string;
    /**
     * See https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.3.2.
     */
    maxItems?: number;
    /**
     * See https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.3.3.
     */
    minItems?: number;
    /**
     * 	https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.3.4.
     */
    uniqueItems?: boolean;
    /**
     * See https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.5.1.
     */
    enum?: any[];
    /**
     * See https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.1.1.
     */
    multipleOf?: number;
    /**
     * The type of the object. The value MUST be one of "string", "number", "integer", "boolean", or "array".
     */
    type?: OpenApiDataType;
    /**
     * The extending format for the previously mentioned type. See Data Type Formats for further details.
     */
    format?: OpenApiDataFormat;
    /**
     * Required if type is "array".
     * Describes the type of items in the array.
     */
    items?: OpenApiSchema | OpenApiReference;
    /**
     * See https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.5.3.
     */
    allOf?: OpenApiSchema[] | OpenApiReference[];
    /**
     * See https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.4.4.
     */
    properties?: OpenApiMap<OpenApiSchema | OpenApiReference>;
    /**
     * See https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.4.4.
     */
    additionalProperties?: OpenApiSchema | OpenApiReference;
    /**
     * Adds support for polymorphism.
     * The discriminator is the schema property name that is used to differentiate between other schema that inherit this schema.
     * The property name used MUST be defined at this schema and it MUST be in the required property list.
     * When used, the value MUST be the name of this schema or any schema that inherits it.
     */
    discriminator?: string;
    /**
     * Relevant only for Schema "properties" definitions. Declares the property as "read only".
     * This means that it MAY be sent as part of a response but MUST NOT be sent as part of the request.
     * Properties marked as readOnly being true SHOULD NOT be in the required list of the defined schema. Default value is false.
     */
    readOnly?: boolean;
    /**
     * This MAY be used only on properties schemas. It has no effect on root schemas. Adds Additional metadata to describe the XML representation format of this property.
     */
    xml?: OpenApiXml;
    /**
     * Additional external documentation for this schema.
     */
    externalDocs?: OpenApiExternalDocs;
    /**
     * A free-form property to include an example of an instance for this schema.
     */
    example?: any;
}
