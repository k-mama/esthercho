import Image from "next/image";
import Link from "next/link";
import { childhoodHomeMemory } from "@/content/childhood-home-memory";
import { localizedHref, type SiteLocale } from "@/config/languages";
import styles from "./childhood-home-story.module.css";

const photographs = [
  { src: "/media/esther/cheongdam-home-01-street.jpg", width: 1079, height: 608 },
  { src: "/media/esther/cheongdam-home-02-gate.jpg", width: 1079, height: 622 },
  { src: "/media/esther/cheongdam-home-03-garden.png", width: 1079, height: 635 },
  { src: "/media/esther/cheongdam-home-04-family-square.png", width: 1500, height: 1500 },
] as const;

/** The four archival photographs stay in the author's requested order.
 * Photos 1–3 retain their original pixels. Photo 4 is a square derivative
 * cropped 500px from the top of the 1500x2000 original (which is preserved).
 * Never use object-fit:cover on these archival gallery images.
 */
export function ChildhoodHomeStory({locale}:{locale:SiteLocale}) {
  const copy = childhoodHomeMemory[locale];
  return (
    <section className={styles.story} aria-labelledby="cheongdam-family-home">
      <div className={styles.intro}>
        <p className={styles.eyebrow}>{copy.eyebrow}</p>
        <h2 id="cheongdam-family-home">{copy.heading}</h2>
        <div className={styles.prose}>
          {copy.paragraphs.map((paragraph,i)=><p key={i}>{paragraph}</p>)}
        </div>
      </div>
      <div className={styles.gallery} aria-label={copy.heading}>
        {photographs.map((photo,i) =>
          <figure className={`${styles.photo} ${i===3?styles.portrait:""}`} key={photo.src}>
            <Image
              src={photo.src}
              alt={copy.alts[i]}
              width={photo.width} height={photo.height}
              sizes={i===3?"(max-width: 760px) 92vw, 560px":"(max-width: 760px) 94vw, 1040px"}
            />
            <figcaption>{copy.captions[i]}</figcaption>
          </figure>
        )}
      </div>
    </section>
  );
}

export function ChildhoodHeroCaption({locale}:{locale:SiteLocale}) {
  const copy=childhoodHomeMemory[locale];
  return (
    <aside className={styles.heroCaption} aria-label={copy.heroPlace}>
      <span className={styles.heroPlace}>{copy.heroPlace}</span>
      <Link href={localizedHref(locale,"/archive")} className={styles.heroText}>
        {copy.heroLine}
        <span aria-hidden="true"> ↗</span>
      </Link>
    </aside>
  );
}
