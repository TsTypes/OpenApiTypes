import { OpenApiExample } from "./OpenApiExample";
import { OpenApiHeader } from "./OpenApiHeader";
import { OpenApiMap } from "./OpenApiMap";
import { OpenApiSchema } from "./OpenApiSchema";

/**
 * Describes a single response from an API Operation.
 *
 * https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#response-object
 */
export interface OpenApiResponse {
    /**
     * A short description of the response. GFM syntax can be used for rich text representation.
     */
    description: string;
    /**
     * A definition of the response structure. It can be a primitive, an array or an object.
     * If this field does not exist, it means no content is returned as part of the response.
     * As an extension to the Schema Object, its root type value may also be "file". This SHOULD be accompanied by a relevant produces mime-type.
     */
    schema?: OpenApiSchema;
    /**
     * A list of headers that are sent with the response.
     */
    headers?: OpenApiMap<OpenApiHeader>;
    /**
     * An example of the response message.
     */
    examples?: OpenApiExample;
}
