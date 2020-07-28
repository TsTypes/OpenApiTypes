import { OpenApiEncoding } from "./OpenApiEncoding";
import { OpenApiExample } from "./OpenApiExample";
import { OpenApiMap } from "./OpenApiMap";
import { OpenApiReference } from "./OpenApiReference";
import { OpenApiSchema } from "./OpenApiSchema";

/**
 * Each Media Type Object provides schema and examples for the media type identified by its key.
 *
 * https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#mediaTypeObject
 */
export interface OpenApiMediaType extends OpenApiReference {
    /** The schema defining the content of the request, response, or parameter */
    schema?: OpenApiSchema | OpenApiReference;
    /** Example of the media type. The example object SHOULD be in the correct format as specified by the media type.
     * The example field is mutually exclusive of the examples field.
     * Furthermore, if referencing a schema which contains an example, the example value SHALL override the example provided by the schema.
     */
    example?: any;
    /** Examples of the media type. Each example object SHOULD match the media type and specified schema if present.
     * The examples field is mutually exclusive of the example field.
     * Furthermore, if referencing a schema which contains an example, the examples value SHALL override the example provided by the schema.
     */
    examples?: OpenApiMap<OpenApiExample | OpenApiReference>;
    /** A map between a property name and its encoding information.
     * The key, being the property name, MUST exist in the schema as a property.
     * The encoding object SHALL only apply to requestBody objects when the media type is multipart or application/x-www-form-urlencoded.
     */
    encoding?: OpenApiMap<OpenApiEncoding>;
}
