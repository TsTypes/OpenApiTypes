/**
 * In order to support common ways of serializing simple parameters, a set of style values are defined.
 */
export type OpenApiStyle =
    | "matrix"
    | "label"
    | "form"
    | "spaceDelimited"
    | "pipeDelimited"
    | "deepObject";
export type OpenApiStyleType = "primitive" | "array" | "object";
