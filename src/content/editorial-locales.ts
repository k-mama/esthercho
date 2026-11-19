import { editorialDe } from "./editorial-de";
import { editorialEs } from "./editorial-es";
import { editorialFr } from "./editorial-fr";
import { editorialIt } from "./editorial-it";
import { editorialJa } from "./editorial-ja";
import { editorialPtBr } from "./editorial-pt-br";
import { editorialZhCn } from "./editorial-zh-cn";
import { editorialZhTw } from "./editorial-zh-tw";

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
  "pt-br": editorialPtBr,
  "zh-cn": editorialZhCn,
  "zh-tw": editorialZhTw,
} as const;
