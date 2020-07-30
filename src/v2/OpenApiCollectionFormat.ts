/**
 * The format of the array if type array is used. Possible values are:
 * csv - comma separated values foo,bar.
 *
 * ssv - space separated values foo bar.
 *
 * tsv - tab separated values foo\tbar.
 *
 * pipes - pipe separated values foo|bar.
 *
 * Default value is csv.
 */
export type OpenApiCollectionFormat = "csv" | "ssv" | "tsv" | "pipes";
