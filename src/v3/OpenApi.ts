import { OpenApiComponents } from "./OpenApiComponents";
import { OpenApiExternalDocs } from "./OpenApiExternalDocs";
import { OpenApiInfo } from "./OpenApiInfo";
import { OpenApiPaths } from "./OpenApiPaths";
import { OpenApiSecurityRequirement } from "./OpenApiSecurityRequirement";
import { OpenApiServer } from "./OpenApiServer";
import { OpenApiTag } from "./OpenApiTag";

/*
 * This is the root document object of the OpenAPI document.
 *
 * https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#oasObject
 */
export interface OpenApi {
    /**
     * This string MUST be the semantic version number of the OpenAPI Specification version that the OpenAPI document uses.
     * The openapi field SHOULD be used by tooling specifications and clients to interpret the OpenAPI document. This is not related to the API info.version string.
     */
    openapi: string;
    /** Provides metadata about the API. The metadata MAY be used by tooling as required. */
    info: OpenApiInfo;
    /**
     * An array of Server Objects, which provide connectivity information to a target server.
     * If the servers property is not provided, or is an empty array, the default value would be a Server Object with a url value of /.
     */
    servers?: OpenApiServer[];
    /** The available paths and operations for the API. */
    paths: OpenApiPaths;
    /** An element to hold various schemas for the specification. */
    components?: OpenApiComponents;
    /**
     * A declaration of which security mechanisms can be used across the API.
     * The list of values includes alternative security requirement objects that can be used.
     * Only one of the security requirement objects need to be satisfied to authorize a request. Individual operations can override this definition.
     */
    security?: OpenApiSecurityRequirement[];
    /**
     * A list of tags used by the specification with additional metadata.
     * The order of the tags can be used to reflect on their order by the parsing tools.
     * Not all tags that are used by the Operation Object must be declared.
     * The tags that are not declared MAY be organized randomly or based on the tools' logic. Each tag name in the list MUST be unique.
     */
    tags?: OpenApiTag[];
    /** Additional external documentation. */
    externalDocs?: OpenApiExternalDocs;
}
