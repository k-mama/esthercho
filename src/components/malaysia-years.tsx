import Image from "next/image";
import type { SiteLocale } from "@/config/languages";
import { malaysiaYearsCopy } from "@/content/malaysia-years";
import styles from "./malaysia-years.module.css";

const photos = [
  {src:"/media/esther/malaysia/malaysia-01-womens-association.jpg",width:960,height:540},
  {src:"/media/esther/malaysia/malaysia-02-kindergarten-teachers.jpg",width:621,height:529},
  {src:"/media/esther/malaysia/malaysia-03-kitchen-service.jpg",width:540,height:960},
] as const;

/** Adult-only, author-provided historical photos. Original aspect ratios
 * must be preserved; do not crop, retouch, infer identities or imply the
 * photos depict the separate refugee learning center. */
export function MalaysiaYears({locale}:{locale:SiteLocale}) {
  const t = malaysiaYearsCopy[locale];
  return (
    <section className={styles.section} aria-labelledby="malaysia-years-title">
      <div className="container">
        <div className={styles.header}>
          <p className={styles.eyebrow}>{t.eyebrow}</p>
          <h2 id="malaysia-years-title">{t.title}</h2>
          <p>{t.intro}</p>
        </div>
        <div className={styles.gallery}>
          {photos.map((photo,i)=>(
            <figure key={photo.src} className={`${styles.photo} ${i===2?styles.portrait:""}`}>
              <Image
                src={photo.src}
                width={photo.width}
                height={photo.height}
                sizes={i===2?"(max-width: 760px) 80vw, 28vw":"(max-width: 760px) 96vw, 36vw"}
                alt={t.alts[i]}
                loading="lazy"
              />
              <figcaption>{t.captions[i]}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
