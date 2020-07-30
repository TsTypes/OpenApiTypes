import { OpenApiResponse } from "./OpenApiResponse";

/**
 * An object to hold responses to be reused across operations. Response definitions can be referenced to the ones defined here.
 *
 * This does not define global operation responses.
 *
 * https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#responses-definitions-object
 */
export interface OpenApiResponsesDefinitions {
    /**
     * A single response definition, mapping a "name" to the response it defines.
     */
    [name: string]: OpenApiResponse;
}
