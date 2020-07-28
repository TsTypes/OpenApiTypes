import { OpenApiCallback } from "./OpenApiCallback";
import { OpenApiExample } from "./OpenApiExample";
import { OpenApiHeader } from "./OpenApiHeader";
import { OpenApiLink } from "./OpenApiLink";
import { OpenApiMap } from "./OpenApiMap";
import { OpenApiParameter } from "./OpenApiParameter";
import { OpenApiReference } from "./OpenApiReference";
import { OpenApiRequestBody } from "./OpenApiRequestBody";
import { OpenApiResponses } from "./OpenApiResponses";
import { OpenApiSchema } from "./OpenApiSchema";
import { OpenApiSecurityScheme } from "./OpenApiSecurityScheme";

/**
 * Holds a set of reusable objects for different aspects of the OAS. All objects defined within the components object will have no effect on the API unless they are explicitly referenced from properties outside the components object.
 *
 * https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#componentsObject
 */

export interface OpenApiComponents {
    /** An object to hold reusable Schema Objects. */
    schemas?: OpenApiMap<OpenApiSchema | OpenApiReference>;
    /** An object to hold reusable Response Objects. */
    responses?: OpenApiMap<OpenApiResponses | OpenApiReference>;
    /** An object to hold reusable Parameter Objects. */
    parameters?: OpenApiMap<OpenApiParameter | OpenApiReference>;
    /** An object to hold reusable Example Objects. */
    examples?: OpenApiMap<OpenApiExample | OpenApiReference>;
    /** An object to hold reusable Request Body Objects. */
    requestBodies?: OpenApiMap<OpenApiRequestBody | OpenApiReference>;
    /** An object to hold reusable Header Objects. */
    headers?: OpenApiMap<OpenApiHeader | OpenApiReference>;
    /** An object to hold reusable Security Scheme Objects. */
    securitySchemes?: OpenApiMap<OpenApiSecurityScheme | OpenApiReference>;
    /** An object to hold reusable Link Objects. */
    links?: OpenApiMap<OpenApiLink | OpenApiReference>;
    /** An object to hold reusable Callback Objects. */
    callbacks?: OpenApiMap<OpenApiCallback | OpenApiReference>;
}
