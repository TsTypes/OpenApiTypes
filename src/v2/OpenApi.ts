import { OpenApiDefinitions } from "./OpenApiDefinitions";
import { OpenApiExternalDocs } from "./OpenApiExternalDocs";
import { OpenApiInfo } from "./OpenApiInfo";
import { OpenApiParametersDefinitions } from "./OpenApiParametersDefinitions";
import { OpenApiPaths } from "./OpenApiPaths";
import { OpenApiResponsesDefinitions } from "./OpenApiResponsesDefinitions";
import { OpenApiScheme } from "./OpenApiScheme";
import { OpenApiSecurityDefinitions } from "./OpenApiSecurityDefinitions";
import { OpenApiSecurityRequirement } from "./OpenApiSecurityRequirement";
import { OpenApiTag } from "./OpenApiTag";

/**
 * This is the root document object for the API specification.
 * It combines what previously was the Resource Listing and API Declaration (version 1.2 and earlier) together into one document.
 * https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#swagger-object
 */
export interface OpenApi {
    /**
     * Specifies the Swagger Specification version being used. It can be used by the Swagger UI and other clients to interpret the API listing. The value MUST be "2.0"
     */
    swagger: string;
    /**
     * Provides metadata about the API. The metadata can be used by the clients if needed.
     */
    info: OpenApiInfo;
    /**
     * The host (name or ip) serving the API. This MUST be the host only and does not include the scheme nor sub-paths.
     * It MAY include a port. If the host is not included, the host serving the documentation is to be used (including the port). The host does not support path templating.
     */
    host?: string;
    /**
     * The base path on which the API is served, which is relative to the host.
     * If it is not included, the API is served directly under the host. The value MUST start with a leading slash (/).
     * The basePath does not support path templating.
     */
    basePath?: string;
    /**
     * The transfer protocol of the API. Values MUST be from the list: "http", "https", "ws", "wss".
     * If the schemes is not included, the default scheme to be used is the one used to access the Swagger definition itself.
     */
    schemes?: OpenApiScheme[];
    /**
     * A list of MIME types the APIs can consume. This is global to all APIs but can be overridden on specific API calls. Value MUST be as described under Mime Types.
     */
    consumes?: string[];
    /**
     * A list of MIME types the APIs can produce. This is global to all APIs but can be overridden on specific API calls. Value MUST be as described under Mime Types.
     */
    produces?: string[];
    /**
     * The available paths and operations for the API.
     */
    paths: OpenApiPaths;
    /**
     * An object to hold data types produced and consumed by operations.
     */
    definitions?: OpenApiDefinitions;
    /**
     * An object to hold parameters that can be used across operations. This property does not define global parameters for all operations.
     */
    parameters?: OpenApiParametersDefinitions;
    /**
     * An object to hold responses that can be used across operations. This property does not define global responses for all operations.
     */
    responses?: OpenApiResponsesDefinitions;
    /**
     * Security scheme definitions that can be used across the specification.
     */
    securityDefinitions?: OpenApiSecurityDefinitions;
    /**
     * A declaration of which security schemes are applied for the API as a whole.
     * The list of values describes alternative security schemes that can be used (that is, there is a logical OR between the security requirements).
     * Individual operations can override this definition.
     */
    security?: OpenApiSecurityRequirement[];
    /**
     * A list of tags used by the specification with additional metadata. The order of the tags can be used to reflect on their order by the parsing tools.
     * Not all tags that are used by the Operation Object must be declared.
     * The tags that are not declared may be organized randomly or based on the tools' logic. Each tag name in the list MUST be unique.
     */
    tags?: OpenApiTag[];
    /**
     * Additional external documentation.
     */
    externalDocs?: OpenApiExternalDocs;
}
