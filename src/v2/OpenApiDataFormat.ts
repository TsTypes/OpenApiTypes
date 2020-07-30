/**
 * Primitive data types in the Swagger Specification are based on the types supported by the JSON-Schema Draft 4.
 * Models are described using the Schema Object which is a subset of JSON Schema Draft 4.
 *
 * An additional primitive data type "file" is used by the Parameter Object and the Response Object to set the parameter type or the response as being a file.
 *
 * Primitives have an optional modifier property format.
 * Swagger uses several known formats to more finely define the data type being used.
 * However, the format property is an open string-valued property, and can have any value to support documentation needs.
 * Formats such as "email", "uuid", etc., can be used even though they are not defined by this specification.
 * Types that are not accompanied by a format property follow their definition from the JSON Schema (except for file type which is defined above). The formats defined by the Swagger
 *
 * https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#data-types
 */
export type OpenApiDataFormat =
    | "int32"
    | "int64"
    | "float"
    | "double"
    | "string"
    | "boolean"
    | "byte"
    | "binary"
    | "date"
    | "date-time"
    | "password";
