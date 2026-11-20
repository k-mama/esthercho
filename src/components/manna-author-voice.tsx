import Link from "next/link";
import { htmlLanguage, localizedHref, type SiteLocale } from "@/config/languages";
import { mannaAuthorVoice } from "@/content/manna-author-voice";
import styles from "./manna-author-voice.module.css";

/** Site excerpts of the author’s confirmed original Korean reflections.
 * We do not claim the extracts are final pages of the unpublished book.
 */
export function MannaAuthorVoice({locale,placement}:{locale:SiteLocale;placement:"books"|"notes"}) {
  const t=mannaAuthorVoice[locale];
  const inBooks=placement==="books";
  return (
    <section className={inBooks?styles.bookSection:styles.noteSection}
      aria-labelledby={inBooks?"manna-author-voice-title":"manna-notebook-sample-title"}>
      <div className="container">
        <div className={styles.inner}>
          <p className={styles.eyebrow}>{inBooks?t.bookLabel:t.noteLabel}</p>
          {inBooks
            ? <h3 id="manna-author-voice-title" className={styles.srTitle}>Esther Cho</h3>
            : <h2 id="manna-notebook-sample-title" className={styles.title}>{t.noteTitle}</h2>}
          <blockquote className={styles.quote} lang={htmlLanguage(locale)}>
            {inBooks?t.bookQuote:t.noteQuote}
          </blockquote>
          <p className={styles.source}>{t.source}</p>
          {!inBooks && <Link className={styles.link} href={localizedHref(locale,"/books")+"#manna-on-the-table"}>
            {t.cta} <span aria-hidden="true">↗</span>
          </Link>}
        </div>
      </div>
    </section>
  );
}
