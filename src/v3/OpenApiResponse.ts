import { OpenApiHeader } from './OpenApiHeader';
import { OpenApiLink } from './OpenApiLink';
import { OpenApiMediaType } from './OpenApiMediaType';
import { OpenApiReference } from './OpenApiReference';

/**
 * Describes a single response from an API Operation, including design-time, static links to operations based on the response
 * https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#responseObject
 */
export interface OpenApiResponse {
    /** A short description of the response. CommonMark syntax MAY be used for rich text representation. */
    description: string;
    /** Maps a header name to its definition. RFC7230 states header names are case insensitive. If a response header is defined with the name "Content-Type", it SHALL be ignored. */
    headers?: Map<string, OpenApiHeader | OpenApiReference>;
    /** A map containing descriptions of potential response payloads. The key is a media type or media type range and the value describes it. For responses that match multiple keys, only the most specific key is applicable. e.g. text/plain overrides text */
    content?: Map<string, OpenApiMediaType | OpenApiReference>;
    /** A map of operations links that can be followed from the response. The key of the map is a short name for the link, following the naming constraints of the names for Component Objects. */
    links?: Map<string, OpenApiLink | OpenApiReference>;
}
