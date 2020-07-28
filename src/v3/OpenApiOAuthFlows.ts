import { OpenApiOAuthFlow } from "./OpenApiOAuthFlow";

/**
 * Allows configuration of the supported OAuth Flows.
 *
 * https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#oauthFlowsObject
 */
export interface OpenApiOAuthFlows {
    /** Configuration for the OAuth Implicit flow */
    implicit?: OpenApiOAuthFlow;
    /** Configuration for the OAuth Resource Owner Password flow */
    password?: OpenApiOAuthFlow;
    /** Configuration for the OAuth Client Credentials flow. Previously called application in OpenAPI 2.0. */
    clientCredentials?: OpenApiOAuthFlow;
    /** Configuration for the OAuth Authorization Code flow. Previously called accessCode in OpenAPI 2.0. */
    authorizationCode?: OpenApiOAuthFlow;
}
