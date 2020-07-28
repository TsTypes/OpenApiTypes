/**
 * The object provides metadata about the API. The metadata MAY be used by the clients if needed, and MAY be presented in editing or documentation generation tools for convenience.
 *
 * https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#contactObject
 */
export interface OpenApiContact {
    /** The identifying name of the contact person/organization */
    name?: string;
    /** The URL pointing to the contact information. MUST be in the format of a URL */
    url?: string;
    /** The email address of the contact person/organization. MUST be in the format of an email address */
    email?: string;
}
