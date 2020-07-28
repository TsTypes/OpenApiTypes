import { OpenApiContact } from './OpenApiContact';
import { OpenApiLicense } from './OpenApiLicense';

/**
 * The object provides metadata about the API. The metadata MAY be used by the clients if needed, and MAY be presented in editing or documentation generation tools for convenience.
 * https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#infoObject
 */
export interface OpenApiInfo {
    /** The title of the application. */
    title: string;
    /** A short description of the application. CommonMark syntax MAY be used for rich text representation. */
    description?: string;
    /** A URL to the Terms of Service for the API. MUST be in the format of a URL. */
    termsOfService?: string;
    /** The contact information for the exposed API. */
    contact?: OpenApiContact;
    /** The license information for the exposed API. */
    license?: OpenApiLicense;
    /** The version of the OpenAPI document (which is distinct from the OpenAPI Specification version or the API implementation version). */
    version: string;
}
