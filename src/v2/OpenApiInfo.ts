import { OpenApiContact } from "./OpenApiContact";
import { OpenApiLicense } from "./OpenApiLicense";

/**
 * The object provides metadata about the API. The metadata can be used by the clients if needed, and can be presented in the Swagger-UI for convenience.
 *
 * https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#info-object
 */
export interface OpenApiInfo {
    /**
     * The title of the application.
     */
    title: string;
    /**
     * A short description of the application. GFM syntax can be used for rich text representation.
     */
    description?: string;
    /**
     * The Terms of Service for the API.
     */
    termsOfService?: string;
    /**
     * The contact information for the exposed API.
     */
    contact?: OpenApiContact;
    /**
     * The license information for the exposed API.
     */
    license?: OpenApiLicense;
    /**
     * Provides the version of the application API (not to be confused with the specification version).
     */
    version: string;
}
