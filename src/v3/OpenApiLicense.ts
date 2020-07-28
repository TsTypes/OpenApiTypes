/**
 * License information for the exposed API.
 *
 * https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#licenseObject
 */
export interface OpenApiLicense {
    /** The license name used for the API. */
    name: string;
    /** A URL to the license used for the API. MUST be in the format of a URL. */
    url?: string;
}
