import { OpenApiPath } from "./OpenApiPath";

/**
 * Holds the relative paths to the individual endpoints.
 * The path is appended to the basePath in order to construct the full URL. The Paths may be empty, due to ACL constraints.
 *
 * https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#paths-object
 */
export interface OpenApiPaths {
    /**
     * A relative path to an individual endpoint.
     * The field name MUST begin with a slash. The path is appended to the basePath in order to construct the full URL. Path templating is allowed.
     */
    [path: string]: OpenApiPath;
}
