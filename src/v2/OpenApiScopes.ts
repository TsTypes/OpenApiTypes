/**
 * Lists the available scopes for an OAuth2 security scheme.
 *
 * https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#security-definitions-object
 */

export interface OpenApiScopes {
    /**
     * Maps between a name of a scope to a short description of it (as the value of the property).
     */
    [name: string]: string;
}
