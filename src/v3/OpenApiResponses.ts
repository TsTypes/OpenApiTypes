import { OpenApiReference } from "./OpenApiReference";
import { OpenApiResponse } from "./OpenApiResponse";

/** Any HTTP status code can be used as the property name, but only one property per code, to describe the expected response for that HTTP status code. A Reference Object can link to a response that is defined in the OpenAPI Object's components/responses section. This field MUST be enclosed in quotation marks (for example, "200") for compatibility between JSON and YAML. To define a range of response codes, this field MAY contain the uppercase wildcard character X. For example, 2XX represents all response codes between [200-299]. Only the following range definitions are allowed: 1XX, 2XX, 3XX, 4XX, and 5XX. If a response is defined using an explicit code, the explicit code definition takes precedence over the range definition for that code. */
export type OpenApiResponsesHttpCodes = {
    [k in HttpStatusCodes]?: OpenApiResponse;
};

/**
 * A container for the expected responses of an operation. The container maps a HTTP response code to the expected response.
 *
 * https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#responsesObject
 */
export interface OpenApiResponses extends OpenApiResponsesHttpCodes {
    /** The documentation of responses other than the ones declared for specific HTTP response codes. Use this field to cover undeclared responses. A Reference Object can link to a response that the OpenAPI Object's components/responses section defines. */
    default?: OpenApiResponse | OpenApiReference;
}

export type HttpStatusCodes =
    | "100"
    | "101"
    | "102"
    | "200"
    | "201"
    | "202"
    | "203"
    | "204"
    | "205"
    | "206"
    | "207"
    | "208"
    | "226"
    | "300"
    | "301"
    | "302"
    | "303"
    | "304"
    | "305"
    | "307"
    | "308"
    | "400"
    | "401"
    | "402"
    | "403"
    | "404"
    | "405"
    | "406"
    | "407"
    | "408"
    | "409"
    | "410"
    | "411"
    | "412"
    | "413"
    | "414"
    | "415"
    | "416"
    | "417"
    | "421"
    | "422"
    | "423"
    | "424"
    | "426"
    | "428"
    | "429"
    | "431"
    | "444"
    | "451"
    | "499"
    | "500"
    | "501"
    | "502"
    | "503"
    | "504"
    | "505"
    | "506"
    | "507"
    | "508"
    | "510"
    | "511"
    | "599";
