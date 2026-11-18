import Image from "next/image";
import Link from "next/link";
import { PageCover } from "@/components/page-cover";
import { translatedPath, roomKeys, type NewLocale, type RoomKey } from "@/i18n/locales";
import { localizedWebsiteContent } from "@/i18n/translations";
import styles from "./international-pages.module.css";

const covers: Record<RoomKey, { desktop: string; mobile?: string; position?: string }> = {
  stories: {
    desktop: "/media/covers/stories-seated-original-20261118-desktop.webp",
    mobile: "/media/covers/stories-seated-original-20261118-mobile.webp",
  },
  books: { desktop: "/media/covers/books-cover-final-20260802.webp" },
  studio: { desktop: "/media/covers/studio-cover.jpg" },
  about: {
    desktop: "/media/covers/esther-standing-original-20261118-desktop.webp",
    mobile: "/media/covers/esther-standing-original-20261118-mobile.webp",
  },
  notes: {
    desktop: "/media/covers/morning-table-cover.webp",
    mobile: "/media/covers/morning-table-cover-mobile.webp",
  },
  archive: { desktop: "/media/covers/childhood-cover.jpg" },
};

function LinkTo({ locale, room, children }: { locale: NewLocale; room: RoomKey; children: React.ReactNode }) {
  return <Link href={translatedPath(locale, room)} className={styles.inlineLink}>{children}<span aria-hidden="true"> ↗</span></Link>;
}

function ContentSection({
  label, title, children, image, imageAlt, reverse = false,
}: {
  label?: string; title: string; children: React.ReactNode; image?: string;
  imageAlt?: string; reverse?: boolean;
}) {
  return (
    <section className={`${styles.section} ${reverse ? styles.reverse : ""}`}>
      <div className={`container ${styles.split}`}>
        <div className={styles.copy}>
          {label ? <p className={styles.eyebrow}>{label}</p> : null}
          <h2>{title}</h2>
          {children}
        </div>
        {image ? (
          <figure className={styles.figure}>
            <Image src={image} alt={imageAlt ?? title} width={1000} height={1200} sizes="(max-width: 850px) 90vw, 42vw" className={styles.picture} />
          </figure>
        ) : null}
      </div>
    </section>
  );
}

const breakfastPhotos = [
  "/media/books/manna-making/breakfast-berries.webp",
  "/media/books/manna-making/breakfast-fruit-coffee.webp",
  "/media/books/manna-making/breakfast-blue-napkin.webp",
] as const;
const coverStudies = [
  "/media/books/manna-making/cover-blue-table.webp",
  "/media/books/manna-making/cover-berry-toast.webp",
  "/media/books/manna-making/cover-coffee-tray.webp",
] as const;
const trailers = [
  { video: "/media/books/big-dreams/trailer.mp4", poster: "/media/books/big-dreams/trailer-poster.webp" },
  { video: "/media/books/big-dreams/birdsong.mp4", poster: "/media/books/big-dreams/birdsong-poster.webp" },
  { video: "/media/books/big-dreams/yellow-car.mp4", poster: "/media/books/big-dreams/yellow-car-poster.webp" },
];

function PhotoSet({ sources, label }: { sources: readonly string[]; label: string }) {
  return (
    <div className={styles.photos}>
      {sources.map((src, i) => (
        <figure key={src}>
          <Image src={src} width={720} height={900} alt={`${label} ${i + 1}`} sizes="(max-width: 620px) 31vw, 28vw" className={styles.photo} />
        </figure>
      ))}
    </div>
  );
}

export function InternationalHome({ locale }: { locale: NewLocale }) {
  const t = localizedWebsiteContent[locale];
  const rooms: RoomKey[] = ["notes", "stories", "archive", "studio", "books", "about"];
  return (
    <main className={styles.root} lang={locale === "pt-br" ? "pt-BR" : locale}>
      <section className={styles.hero}>
        <video className={styles.heroVideo} autoPlay muted loop playsInline controls preload="metadata" poster="/media/home/esther-house-entry-poster.jpg">
          <source src="/media/home/esther-house-entry.mp4" type="video/mp4" />
        </video>
        <div className={styles.heroShade} aria-hidden="true" />
        <div className={styles.heroContents}>
          <p className={styles.heroEyebrow}>{t.home.kicker}</p>
          <h1>{t.home.hero}</h1>
          <a className={styles.heroLink} href="#inside">{t.ui.enter}</a>
        </div>
      </section>

      <section id="inside" className={styles.welcome}>
        <div className="container">
          <p className={styles.eyebrow}>{t.home.introEyebrow}</p>
          <h2>{t.home.introTitle}</h2>
          <p className={styles.lead}>{t.home.intro}</p>
          <nav aria-label={t.home.introEyebrow} className={styles.roomGrid}>
            {rooms.map((room, i) => (
              <Link key={room} className={styles.roomLink} href={translatedPath(locale, room)}>
                <span>{String(i + 1).padStart(2, "0")}</span>
                <strong>{t.nav[room]}</strong>
                <span aria-hidden="true">↗</span>
              </Link>
            ))}
          </nav>
        </div>
      </section>

      <ContentSection label={t.home.bookEyebrow} title={t.home.bookTitle} image="/media/books/big-dreams/cover.webp" imageAlt="Big Dreams in Every Color · original book cover">
        <p>{t.home.bookBody}</p>
        <LinkTo locale={locale} room="books">{t.ui.viewBook}</LinkTo>
      </ContentSection>
      <ContentSection reverse label={t.home.tableEyebrow} title={t.home.tableTitle} image="/media/esther/morning-table.jpg">
        <p>{t.home.tableBody}</p>
        <LinkTo locale={locale} room="notes">{t.nav.notes}</LinkTo>
      </ContentSection>
      <ContentSection label={t.home.memoryEyebrow} title={t.home.memoryTitle} image="/media/esther/childhood-house.jpg">
        <p>{t.home.memoryBody}</p>
        <LinkTo locale={locale} room="archive">{t.nav.archive}</LinkTo>
      </ContentSection>
      <ContentSection reverse label={t.home.careEyebrow} title={t.home.careTitle} image="/media/esther/bangladesh-service.jpg">
        <p>{t.home.careBody}</p>
        <LinkTo locale={locale} room="stories">{t.nav.stories}</LinkTo>
      </ContentSection>
      <ContentSection label={t.home.studioEyebrow} title={t.home.studioTitle} image="/media/esther/still-making-father-child-collage-20260802.png">
        <p>{t.home.studioBody}</p>
        <LinkTo locale={locale} room="studio">{t.nav.studio}</LinkTo>
      </ContentSection>
      <section className={styles.closing}>
        <div className="container">
          <h2>{t.home.closingTitle}</h2>
          <LinkTo locale={locale} room="books">{t.ui.explore}</LinkTo>
        </div>
      </section>
    </main>
  );
}

export function InternationalRoom({ locale, room }: { locale: NewLocale; room: RoomKey }) {
  const t = localizedWebsiteContent[locale];
  const copy = t[room];
  const cover = covers[room];
  const title = copy.title;
  const subtitle = copy.subtitle;
  const lang = locale === "pt-br" ? "pt-BR" : locale;
  return (
    <main className={styles.root} lang={lang}>
      <PageCover
        eyebrow={t.nav[room]} title={title} description={subtitle}
        image={cover.desktop} mobileImage={cover.mobile}
        alt={`${t.nav[room]} · Esther Cho`}
        objectPosition={cover.position ?? "center center"} align="left" shade="medium"
      />
      {room === "stories" ? <Stories locale={locale} /> : null}
      {room === "books" ? <Books locale={locale} /> : null}
      {room === "studio" ? <Studio locale={locale} /> : null}
      {room === "about" ? <About locale={locale} /> : null}
      {room === "notes" ? <MorningNotes locale={locale} /> : null}
      {room === "archive" ? <Archive locale={locale} /> : null}
      <div className={styles.nextRooms}>
        <div className="container">
          <p className={styles.eyebrow}>{t.ui.explore}</p>
          <nav className={styles.roomGrid} aria-label={t.ui.explore}>
            {roomKeys.filter((r) => r !== room).slice(0, 4).map((r) => (
              <Link key={r} className={styles.roomLink} href={translatedPath(locale, r)}>
                <strong>{t.nav[r]}</strong><span aria-hidden="true">↗</span>
              </Link>
            ))}
          </nav>
          <Link href={translatedPath(locale)} className={styles.inlineLink}>{t.ui.backHome}</Link>
        </div>
      </div>
    </main>
  );
}

function Stories({ locale }: { locale: NewLocale }) {
  const t = localizedWebsiteContent[locale];
  const s = t.stories;
  return (
    <>
      <ContentSection label={s.introKicker} title={s.introTitle}><p>{s.intro}</p></ContentSection>
      <ContentSection label={s.openingKicker} title={s.openingTitle}>
        <h3>{s.firstTitle}</h3>
        <p>{s.firstBody}</p>
        <p className={styles.finePrint}>{s.availabilityNote}</p>
        <Link href="/stories/my-father-dreamed-of-a-tiger/" className={styles.inlineLink} lang="en">{t.ui.readEnglish} ↗</Link>
      </ContentSection>
      <section className={styles.libraryList}>
        <div className="container">
          <ol>
            {s.otherTitles.map((title, i) => (
              <li key={title}>
                <span>{String(i + 2).padStart(2, "0")}</span>
                <h3>{title}</h3>
                {i === 0 ? <Link href="/stories/the-youngest-daughter-in-every-house/" lang="en">{t.ui.readEnglish} ↗</Link> : <small>{t.ui.workInProgress}</small>}
              </li>
            ))}
          </ol>
        </div>
      </section>
      <ContentSection title={s.memoryTitle} image="/media/esther/childhood-garden.jpg"><p>{s.memoryBody}</p></ContentSection>
      <ContentSection title={s.closingTitle}><p>{s.closingBody}</p></ContentSection>
    </>
  );
}

function Books({ locale }: { locale: NewLocale }) {
  const t = localizedWebsiteContent[locale];
  const b = t.books;
  return (
    <>
      <ContentSection label={b.childrenKicker} title="Big Dreams in Every Color" image="/media/books/big-dreams/cover.webp">
        <p>{b.childrenDescription}</p>
        <a className={styles.inlineLink} href="https://www.amazon.com/dp/B0HQ9Z7SRD" target="_blank" rel="noopener noreferrer">{t.ui.englishPaperback} ↗</a>
      </ContentSection>
      <ContentSection label={b.germanKicker} title="Große Träume in allen Farben">
        <p>{b.germanDescription}</p>
        <a className={styles.inlineLink} href="https://www.amazon.de/dp/B0HRS6F2MH" target="_blank" rel="noopener noreferrer">{t.ui.germanPaperback} ↗</a>
      </ContentSection>
      <section className={styles.videos}>
        <div className="container">
          <p className={styles.eyebrow}>{b.filmKicker}</p>
          <h2>{b.filmHeading}</h2>
          <div className={styles.videoGrid}>
            {trailers.map((film) => (
              <video key={film.video} controls playsInline preload="none" poster={film.poster} aria-label={b.filmHeading}>
                <source src={film.video} type="video/mp4" />
              </video>
            ))}
          </div>
        </div>
      </section>
      <ContentSection label={b.mannaKicker} title={b.mannaTitle} image="/media/esther/morning-table.jpg">
        <p>{b.mannaIntroduction}</p>
        <p className={styles.finePrint}>{b.authorNote}</p>
      </ContentSection>
      <section className={styles.making}>
        <div className="container">
          <p className={styles.eyebrow}>{b.makingKicker}</p>
          <h2>{b.makingTitle}</h2>
          <p className={styles.lead}>{b.makingIntro}</p>
          <h3>{b.breakfastHeading}</h3>
          <p>{b.breakfastText}</p>
          <PhotoSet sources={breakfastPhotos} label={t.ui.originalPhotos} />
          <h3>{b.coverHeading}</h3>
          <p>{b.coverText}</p>
          <PhotoSet sources={coverStudies} label={b.coverHeading} />
          <h3>{b.houseHeading}</h3>
          <p>{b.houseText}</p>
          <h3>{b.mannaMeaningHeading}</h3>
          <p>{b.mannaMeaningText}</p>
        </div>
      </section>
    </>
  );
}

function Studio({ locale }: { locale: NewLocale }) {
  const s = localizedWebsiteContent[locale].studio;
  return (
    <>
      <ContentSection title={s.originalHeading}><p>{s.originalText}</p></ContentSection>
      <ContentSection title={s.laterHeading} image="/media/esther/still-making-father-child-collage-20260802.png">
        <p>{s.laterText}</p><p className={styles.finePrint}>{s.sourceCaption}</p>
      </ContentSection>
      <ContentSection title={s.futureHeading}><p>{s.futureText}</p></ContentSection>
    </>
  );
}
function About({ locale }: { locale: NewLocale }) {
  const t = localizedWebsiteContent[locale];
  const a = t.about;
  return (
    <>
      <ContentSection title={a.title} image="/media/esther/young-artist.jpg">
        <p>{a.biography}</p>
        <a className={styles.inlineLink} href="https://www.amazon.com/author/sungyeoncho" target="_blank" rel="noopener noreferrer">{t.ui.meetAuthor} ↗</a>
      </ContentSection>
      <ContentSection title={a.educationHeading}><p>{a.educationText}</p></ContentSection>
      <ContentSection title={a.tableHeading} image="/media/esther/morning-table.jpg"><p>{a.tableText}</p></ContentSection>
      <ContentSection title={a.careHeading} image="/media/esther/bangladesh-service.jpg"><p>{a.careText}</p></ContentSection>
      <ContentSection title={a.makingHeading}><p>{a.makingText}</p></ContentSection>
    </>
  );
}
function MorningNotes({ locale }: { locale: NewLocale }) {
  const t = localizedWebsiteContent[locale];
  const n = t.notes;
  return (
    <>
      <ContentSection title={n.tableHeading} image="/media/esther/morning-table.jpg"><p>{n.tableText}</p></ContentSection>
      <ContentSection title={n.everydayHeading}><p>{n.everydayText}</p></ContentSection>
      <ContentSection title={n.bookHeading}><p>{n.bookText}</p><LinkTo locale={locale} room="books">{t.ui.viewBook}</LinkTo></ContentSection>
      <ContentSection title={n.closing}><></></ContentSection>
    </>
  );
}
function Archive({ locale }: { locale: NewLocale }) {
  const a = localizedWebsiteContent[locale].archive;
  return (
    <>
      <ContentSection title={a.firstHeading} image="/media/esther/childhood-house.jpg"><p>{a.firstText}</p></ContentSection>
      <ContentSection title={a.houseHeading} image="/media/esther/childhood-garden.jpg"><p>{a.houseText}</p></ContentSection>
      <ContentSection title={a.childHeading}><p>{a.childText}</p></ContentSection>
      <ContentSection title={a.unseenHeading}><p>{a.unseenText}</p></ContentSection>
      <ContentSection title={a.authenticityHeading}><p>{a.authenticityText}</p></ContentSection>
      <ContentSection title={a.closing}><></></ContentSection>
    </>
  );
}
