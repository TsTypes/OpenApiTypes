import { OpenApiCallback } from './OpenApiCallback';
import { OpenApiExample } from './OpenApiExample';
import { OpenApiHeader } from './OpenApiHeader';
import { OpenApiLink } from './OpenApiLink';
import { OpenApiParameter } from './OpenApiParameter';
import { OpenApiReference } from './OpenApiReference';
import { OpenApiRequestBody } from './OpenApiRequestBody';
import { OpenApiResponses } from './OpenApiResponses';
import { OpenApiSchema } from './OpenApiSchema';
import { OpenApiSecurityScheme } from './OpenApiSecurityScheme';

/**
 * Holds a set of reusable objects for different aspects of the OAS. All objects defined within the components object will have no effect on the API unless they are explicitly referenced from properties outside the components object.
 * https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#componentsObject
 */

export interface OpenApiComponents {
    /** An object to hold reusable Schema Objects. */
    schemas?: Map<string, OpenApiSchema | OpenApiReference>;
    /** An object to hold reusable Response Objects. */
    responses?: Map<string, OpenApiResponses | OpenApiReference>;
    /** An object to hold reusable Parameter Objects. */
    parameters?: Map<string, OpenApiParameter | OpenApiReference>;
    /** An object to hold reusable Example Objects. */
    examples?: Map<string, OpenApiExample | OpenApiReference>;
    /** An object to hold reusable Request Body Objects. */
    requestBodies?: Map<string, OpenApiRequestBody | OpenApiReference>;
    /** An object to hold reusable Header Objects. */
    headers?: Map<string, OpenApiHeader | OpenApiReference>;
    /** An object to hold reusable Security Scheme Objects. */
    securitySchemes?: Map<string, OpenApiSecurityScheme | OpenApiReference>;
    /** An object to hold reusable Link Objects. */
    links?: Map<string, OpenApiLink | OpenApiReference>;
    /** An object to hold reusable Callback Objects. */
    callbacks?: Map<string, OpenApiCallback | OpenApiReference>;
}
