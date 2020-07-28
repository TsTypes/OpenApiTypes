import { OpenApiMap } from "./OpenApiMap";

/**
 * https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#oauthFlowObject
 */
export interface OpenApiOAuthFlow {
    /** The authorization URL to be used for this flow. This MUST be in the form of a URL. */
    authorizationUrl: string;
    /** The token URL to be used for this flow. This MUST be in the form of a URL. */
    tokenUrl: string;
    /** The URL to be used for obtaining refresh tokens. This MUST be in the form of a URL. */
    refreshUrl?: string;
    /** The available scopes for the OAuth2 security scheme. A map between the scope name and a short description for it. */
    scopes: OpenApiMap<string>;
}
