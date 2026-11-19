import { editorialDe } from "./editorial-de";
import { editorialEs } from "./editorial-es";
import { editorialFr } from "./editorial-fr";
import { editorialIt } from "./editorial-it";
import { editorialJa } from "./editorial-ja";

/** Human-readable, source-faithful website editorial copy.
 * English and Korean source pages remain canonical.
 * Locale copy is separately authored to preserve idiom and cultural nuance.
 */
export const editorial = {
  de: editorialDe,
  es: editorialEs,
  fr: editorialFr,
  it: editorialIt,
  ja: editorialJa,
} as const;
