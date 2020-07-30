import { OpenApiCollectionFormat } from "./OpenApiCollectionFormat";
import { OpenApiDataFormat } from "./OpenApiDataFormat";
import { OpenApiDataType } from "./OpenApiDataType";
import { OpenApiItems } from "./OpenApiItems";

/**
 * Header Object
 * https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#header-object
 */
export interface OpenApiHeader {
    /**
     * A short description of the header.
     */
    description?: string;
    /**
     * The type of the object. The value MUST be one of "string", "number", "integer", "boolean", or "array".
     */
    type: OpenApiDataType;
    /**
     * The extending format for the previously mentioned type. See Data Type Formats for further details.
     */
    format?: OpenApiDataFormat;
    /**
     * Required if type is "array".
     * Describes the type of items in the array.
     */
    items?: OpenApiItems;
    /**
     * Determines the format of the array if type array is used.
     * Possible values are: "csv", "ssv", "tsv", "pipes"
     * Default value is csv.
     */
    collectionFormat?: OpenApiCollectionFormat;
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
}
