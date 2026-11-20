"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import type { SiteLocale } from "@/config/languages";
import { illustratedAuthorCopy } from "@/content/illustrated-author-pages";
import styles from "./illustrated-author-gallery.module.css";

const pictures = [
  "/media/books/big-dreams/illustrated-author-about.jpg",
  "/media/books/big-dreams/illustrated-author-note.jpg",
] as const;

/** The author's uploaded illustrated pages, shown without cropping.
 * The accessible prose transcript is independently localized for each locale.
 * Native dialog provides Escape handling, focus trapping and return focus.
 */
export function IllustratedAuthorGallery({locale}:{locale:SiteLocale}) {
  const copy = illustratedAuthorCopy[locale];
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [selected,setSelected] = useState<number | null>(null);
  const [zoomed,setZoomed] = useState(false);
  const labels = [copy.aboutLabel, copy.noteLabel];
  const excerpts = [copy.about, copy.note];

  function open(index:number) {
    setSelected(index);
    setZoomed(false);
    dialogRef.current?.showModal();
  }
  function close() { dialogRef.current?.close(); }
  const chosen = selected === null ? null : pictures[selected];

  return (
    <section className={styles.section} id="picture-book-author-pages" aria-labelledby="illustrated-author-heading">
      <div className="container">
        <div className={styles.heading}>
          <p className={styles.eyebrow}>BIG DREAMS IN EVERY COLOR</p>
          <h2 id="illustrated-author-heading">{copy.heading}</h2>
          <p>{copy.intro}</p>
        </div>
        <div className={styles.cards}>
          {pictures.map((src,i)=>(
            <figure key={src} className={styles.card}>
              <button type="button" className={styles.preview} onClick={()=>open(i)} aria-label={`${copy.open}: ${labels[i]}`}>
                <Image src={src} alt={`${labels[i]} — Sung Yeon Cho, illustrated page with English lettering`} width={1024} height={1536}
                  sizes="(max-width: 640px) 42vw, (max-width: 900px) 32vw, 285px" loading="lazy"/>
              </button>
              <figcaption>
                <span>{labels[i]}</span>
                <button type="button" className={styles.textLink} onClick={()=>open(i)}>{copy.open}</button>
              </figcaption>
            </figure>
          ))}
        </div>
        <p className={styles.disclaimer}>{copy.imageNotice}</p>
      </div>

      <dialog ref={dialogRef} className={styles.dialog}
        onClose={()=>{setSelected(null);setZoomed(false)}}
        aria-label={selected===null?copy.heading:`${copy.heading} — ${labels[selected]}`}>
        <div className={styles.dialogHeader}>
          <h2>{selected===null?copy.heading:labels[selected]}</h2>
          <div className={styles.dialogActions}>
            <button type="button" onClick={()=>setZoomed(v=>!v)}>{zoomed?copy.fit:copy.zoom}</button>
            <button type="button" onClick={close}>{copy.close} <span aria-hidden="true">×</span></button>
          </div>
        </div>
        {chosen!==null && selected!==null && (
          <>
            <div className={styles.dialogScroller}>
              <Image src={chosen} alt={`${labels[selected]} — illustrated page`} width={1024} height={1536}
                className={zoomed?styles.original:styles.contained} priority={false}/>
            </div>
            <details className={styles.transcript}>
              <summary>{copy.read}</summary>
              <div className={styles.transcriptBody}>{excerpts[selected].map((p,i)=><p key={i}>{p}</p>)}</div>
            </details>
          </>
        )}
      </dialog>
    </section>
  );
}
