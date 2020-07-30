import { OpenApiHeader } from "./OpenApiHeader";

/**
 * Lists the headers that can be sent as part of a response.
 *
 * https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#headers-object
 */
export interface OpenApiHeaders {
    /**
     * The name of the property corresponds to the name of the header. The value describes the type of the header.
     */
    [header: string]: OpenApiHeader;
}
