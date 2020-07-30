import { OpenApiParameter } from "./OpenApiParameter";

/**
 * An object to hold parameters to be reused across operations. Parameter definitions can be referenced to the ones defined here.
 * This does not define global operation parameters.
 *
 * https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#parameters-definitions-object
 */
export interface OpenApiParametersDefinitions {
    /**
     * A single parameter definition, mapping a "name" to the parameter it defines.
     */
    [name: string]: OpenApiParameter;
}
