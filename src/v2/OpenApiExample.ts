/**
 * Allows sharing examples for operation responses.
 *
 * https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#example-object
 */
export interface OpenApiExample {
    /**
     * The name of the property MUST be one of the Operation produces values (either implicit or inherited).
     * The value SHOULD be an example of what such a response would look like.
     */
    [mimeType: string]: any;
}
