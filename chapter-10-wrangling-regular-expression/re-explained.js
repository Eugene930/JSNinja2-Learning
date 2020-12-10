// * regex literal
const pattern = /test/;

// * RegExp Instance
const pattern = new RegExp("test");

/**
 * ? flags:
 * * \(backslash): the escape character for string literals
 * * - i: Makes the regex case-insensitive, so /test/i matches not only test, but also Test, TEST, tEsT, and so on.
 * * - g: Matches all instance of the pattern, as opposed to the default of local, which matches only the first occurrence.
 * * - m: Allows matches across multiple lines, as might be obtained from the value of a textarea element.
 * * - y: Enables sticky matching.
 * * - u: Enables the use of Unicode point escapes(\u{...})
 */

/**
 * * Matching from a class of characters
 * * - [abc]: match any of the characters a, b or c.
 * * - [^abc]: any character but a, b, or c.
 * * - [a-m]: from a through m inclusive
 */

/**
 * * Begins and ends
 * * - ^: anchors the match at the beginning of the string
 * * - $: signifies that the pattern must appear at the end of the string.
 */

/**
 * * Repeated occurrences
 * * - ?: To specify that a character is optional(it can appear either once or not at all)
 * * - +: one or many times
 * * - *: zero, one, or many times
 * * - {x}: a fixed number of repetitions, eg, /a{4}/
 * * - {x,y}: a range for the repetition count, eg, /a{4,10}/
 * * - {x, }: open-ended range, eg, /a{4,}/
 * * overload `?`: Annotating the operator with a ? character, as in a+?, makes the operation nongreedy, it will consume only enough characters to make a match.
 */

//  * Predefined character classes/Grouping(`(such +、*)`)/Alternation( | )/Backreferences(\1, \2, ...) ...
