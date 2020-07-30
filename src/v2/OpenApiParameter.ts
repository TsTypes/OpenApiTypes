import { OpenApiCollectionFormat } from "./OpenApiCollectionFormat";
import { OpenApiDataFormat } from "./OpenApiDataFormat";
import { OpenApiDataType } from "./OpenApiDataType";
import { OpenApiItems } from "./OpenApiItems";
import { OpenApiSchema } from "./OpenApiSchema";

/**
 * Describes a single operation parameter.
 *
 * https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#parameter-object
 */
export interface OpenApiParameter {
    /**
     * The name of the parameter. Parameter names are case sensitive.
     *
     * If in is "path", the name field MUST correspond to the associated path segment from the path field in the Paths Object. See Path Templating for further information.
     *
     * For all other cases, the name corresponds to the parameter name used based on the in property.
     */
    name: string;
    /**
     * The location of the parameter. Possible values are "query", "header", "path", "formData" or "body".
     */
    in: OpenApiParameterIn;
    /**
     * A brief description of the parameter. This could contain examples of use. GFM syntax can be used for rich text representation.
     */
    description?: string;
    /**
     * Determines whether this parameter is mandatory. If the parameter is in "path", this property is required and its value MUST be true.
     * Otherwise, the property MAY be included and its default value is false.
     */
    required?: boolean;
    /**
     * Required if in is "body":
     * The schema defining the type used for the body parameter.
     */
    schema?: OpenApiSchema;
    /**
     * Required if in is any value other than "body"
     * The type of the parameter. Since the parameter is not located at the request body, it is limited to simple types (that is, not an object).
     * The value MUST be one of "string", "number", "integer", "boolean", "array" or "file".
     * If type is "file", the consumes MUST be either "multipart/form-data", "application/x-www-form-urlencoded" or both and the parameter MUST be in "formData".
     */
    type?: OpenApiParameterType;
    /**
     * The extending format for the previously mentioned type. See Data Type Formats for further details.
     */
    format?: OpenApiDataFormat;
    /**
     * Sets the ability to pass empty-valued parameters.
     * This is valid only for either query or formData parameters and allows you to send a parameter with a name only or an empty value. Default value is false.
     */
    allowEmptyValue?: boolean;
    /**
     * Required if in is any value other than "body" and if type is "array".
     * Describes the type of items in the array.
     */
    items?: OpenApiItems;
    /**
     * Determines the format of the array if type array is used. Possible values "csv", "ssv", "tsv", "pipes", "multi".
     */
    collectionFormat?: OpenApiParameterCollectionFormat;
    /**
     * Declares the value of the parameter that the server will use if none is provided,
     * for example a "count" to control the number of results per page might default to 100 if not supplied by the client in the request.
     * (Note: "default" has no meaning for required parameters.) See https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-6.2.
     * Unlike JSON Schema this value MUST conform to the defined type for this parameter.
     */
    default?: any;
    /**
     * See https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.1.2.
     */
    maximum?: number;
    /**
     * 	See https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.1.2.
     */
    exclusiveMaximum?: boolean;
    /**
     * 	See https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.1.3.
     */
    minimum?: number;
    /**
     * See https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.1.3.
     */
    exclusiveMinimum?: boolean;
    /**
     * See https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.2.1.
     */
    maxLength?: number;
    /**
     * See https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.2.2.
     */
    minLength?: number;
    /**
     * See https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.2.3.
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
     * See https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.3.4.
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

/**
 * The type of the parameter. Since the parameter is not located at the request body, it is limited to simple types (that is, not an object).
 * The value MUST be one of "string", "number", "integer", "boolean", "array" or "file".
 * If type is "file", the consumes MUST be either "multipart/form-data", " application/x-www-form-urlencoded" or both and the parameter MUST be in "formData".
 */
export type OpenApiParameterType = OpenApiDataType | "file";

/**
 * Path - Used together with Path Templating, where the parameter value is actually part of the operation's URL.
 * This does not include the host or base path of the API. For example, in /items/{itemId}, the path parameter is itemId.
 *
 * Query - Parameters that are appended to the URL. For example, in /items?id=###, the query parameter is id.
 *
 * Header - Custom headers that are expected as part of the request.
 *
 * Body - The payload that's appended to the HTTP request. Since there can only be one payload, there can only be one body parameter.
 * The name of the body parameter has no effect on the parameter itself and is used for documentation purposes only.
 * Since Form parameters are also in the payload, body and form parameters cannot exist together for the same operation.
 *
 * Form - Used to describe the payload of an HTTP request when either application/x-www-form-urlencoded, multipart/form-data or both are used as the content type of the request
 * (in Swagger's definition, the consumes property of an operation). This is the only parameter type that can be used to send files, thus supporting the file type.
 * Since form parameters are sent in the payload, they cannot be declared together with a body parameter for the same operation.
 * Form parameters have a different format based on the content-type used (for further details, consult http://www.w3.org/TR/html401/interact/forms.html#h-17.13.4):
 * application/x-www-form-urlencoded - Similar to the format of Query parameters but as a payload.
 * For example, foo=1&bar=swagger - both foo and bar are form parameters.
 * This is normally used for simple parameters that are being transferred. multipart/form-data - each parameter takes a section in the payload with an internal header.
 * For example, for the header Content-Disposition: form-data; name="submit-name" the name of the parameter is submit-name. This type of form parameters is more commonly used for file transfers.
 */

export type OpenApiParameterIn = "path" | "query" | "header" | "formData" | "body";

/**
 * The format of the array if type array is used. Possible values are:
 * csv - comma separated values foo,bar.
 *
 * ssv - space separated values foo bar.
 *
 * tsv - tab separated values foo\tbar.
 *
 * pipes - pipe separated values foo|bar.
 *
 * multi - corresponds to multiple parameter instances instead of multiple values for a single instance foo=bar&foo=baz. This is valid only for parameters in "query" or "formData".
 *
 * Default value is csv.
 */
export type OpenApiParameterCollectionFormat = OpenApiCollectionFormat | "multi";
