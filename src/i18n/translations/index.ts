import { de } from "./de";
import { ptBr } from "./pt-br";
import { es } from "./es";
import { fr } from "./fr";
import { it } from "./it";
import { ja } from "./ja";
import type { NewLocale } from "../locales";
import type { LocalizedCopy } from "./types";

export const localizedWebsiteContent: Record<NewLocale, LocalizedCopy> = {
  de,
  "pt-br": ptBr,
  es,
  fr,
  it,
  ja,
};
export type { LocalizedCopy };
