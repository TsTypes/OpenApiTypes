import { OpenApiExample } from "./OpenApiExample";
import { OpenApiMap } from "./OpenApiMap";
import { OpenApiMediaType } from "./OpenApiMediaType";
import { OpenApiReference } from "./OpenApiReference";
import { OpenApiSchema } from "./OpenApiSchema";
import { OpenApiStyle } from "./OpenApiStyle";

/**
 * Describes a single operation parameter.
 * A unique parameter is defined by a combination of a name and location.
 *
 * https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#parameterObject
 */
export interface OpenApiParameter {
    /** The name of the parameter. Parameter names are case sensitive.
     *
     * If `[in](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#parameterIn)`
     * is "path", the name field MUST correspond to the associated path segment from the [path](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#pathsPath) field in the
     * [Paths Object](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#pathsObject).
     * See [Path Templating](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#pathTemplating) for further information.
     *
     * If `[in](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#parameterIn)`
     * is "header" and the name field is "Accept", "Content-Type" or "Authorization", the parameter definition SHALL be ignored.
     * For all other cases, the name corresponds to the parameter name used by the `[in](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#parameterIn)` property.
     */
    name: string;
    /** The location of the parameter. Possible values are "query", "header", "path" or "cookie". */
    in: OpenApiParameterIn;
    /** A brief description of the parameter. This could contain examples of use. [CommonMark syntax](http://spec.commonmark.org/) MAY be used for rich text representation. */
    description?: string;
    /** Determines whether this parameter is mandatory. If the [parameter location](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#parameterIn)
     * is "path", this property is REQUIRED and its value MUST be `true`. Otherwise, the property MAY be included and its default value is `false`.
     */
    required?: boolean;
    /** Specifies that a parameter is deprecated and SHOULD be transitioned out of usage. Default value is `false`. */
    deprecated?: boolean;
    /**
     * Sets the ability to pass empty-valued parameters.
     * This is valid only for `query` parameters and allows sending a parameter with an empty value.
     * Default value is `false`.
     * If [style](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#parameterStyle)
     * is used, and if behavior is n/a (cannot be serialized), the value of allowEmptyValue SHALL be ignored.
     * Use of this property is NOT RECOMMENDED, as it is likely to be removed in a later revision.
     */
    allowEmptyValue?: boolean;
    /** Describes how the parameter value will be serialized depending on the type of the parameter value.
     *  Default values (based on value of in): for query - form; for path - simple; for header - simple; for cookie - form.
     */
    style?: OpenApiStyle;
    /** When this is true, parameter values of type array or object generate separate parameters for each value of the array or key-value pair of the map.
     * For other types of parameters this property has no effect. When style is form, the default value is true. For all other styles, the default value is false.
     */
    explode?: boolean;
    /** Determines whether the parameter value SHOULD allow reserved characters, as defined by RFC3986 :/?#[]@!$&'()*+,;= to be included without percent-encoding.
     * This property only applies to parameters with an in value of query. The default value is false.
     */
    allowReserved?: boolean;
    /** The schema defining the type used for the parameter. */
    schema?: OpenApiSchema | OpenApiReference;
    /** Example of the media type. The example SHOULD match the specified schema and encoding properties if present.
     * The example field is mutually exclusive of the examples field. Furthermore, if referencing a schema which contains an example, the example value SHALL override the example provided by the schema.
     * To represent examples of media types that cannot naturally be represented in JSON or YAML, a string value can contain the example with escaping where necessary.
     */
    example?: any;
    /** Examples of the media type. Each example SHOULD contain a value in the correct format as specified in the parameter encoding.
     * The examples field is mutually exclusive of the example field. Furthermore, if referencing a schema which contains an example, the examples value SHALL override the example provided by the schema.
     */
    examples?: OpenApiMap<OpenApiExample | OpenApiReference>;
    /** A map containing the representations for the parameter. The key is the media type and the value describes it.
     * The map MUST only contain one entry. A parameter MUST contain either a schema property, or a content property, but not both.
     * When example or examples are provided in conjunction with the schema object, the example MUST follow the prescribed serialization strategy for the parameter.
     */
    content?: OpenApiMap<OpenApiMediaType>;
}

/**
 * The location of the parameter.
 * There are four possible parameter locations specified by the in field:
 * @parameter path - Used together with [Path Templating](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#pathTemplating),
 * where the parameter value is actually part of the operation's URL. This does not include the host or base path of the API. For example, in /items/{itemId}, the path parameter is itemId.
 * @parameter query - Parameters that are appended to the URL. For example, in /items?id=###, the query parameter is id.
 * @parameter header - Custom headers that are expected as part of the request. Note that [RFC7230](https://tools.ietf.org/html/rfc7230#page-22) states header names are case insensitive.
 * @parameter cookie - Used to pass a specific cookie value to the API.
 */
export type OpenApiParameterIn = "path" | "query" | "header" | "cookie";
