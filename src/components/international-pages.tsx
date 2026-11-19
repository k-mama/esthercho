import Image from "next/image";
import Link from "next/link";
import { PageCover } from "@/components/page-cover";
import { HomeHeroVideo } from "@/app/home-hero-video";
import { ChildhoodHeroCaption } from "@/components/childhood-home-story";
import { ChildhoodArchiveSections } from "@/components/childhood-archive-sections";
import "@/app/archive/archive.css";
import type { TranslationLocale } from "@/config/languages";
import { localizedHref, localeInterface } from "@/config/languages";
import { translations } from "@/content/international";
import { editorial } from "@/content/editorial-locales";

type Section = "home" | "stories" | "books" | "studio" | "about" | "notes" | "archive";
type InternationalProps = { locale: TranslationLocale; section: Section };
const amazonOriginal = "https://www.amazon.com/dp/B0HQ9Z7SRD";
const editions = [
  { key: "englishEdition" as const, name: "Big Dreams in Every Color", src: "/media/books/big-dreams/cover.webp", amazonPaperback: amazonOriginal, amazonKindle: "", available: true },
  { key: "germanEdition" as const, name: "Große Träume in allen Farben", src: "https://m.media-amazon.com/images/I/61IlRaRs5SL._SL1499_.jpg", amazonPaperback: "https://www.amazon.de/dp/B0HRS6F2MH", amazonKindle: "https://www.amazon.de/dp/B0HR9GZ77J", available: true },
  { key: "spanishEdition" as const, name: "Grandes sueños de todos los colores", src: "https://m.media-amazon.com/images/I/71s1fdCsbwL._SL1499_.jpg", amazonPaperback: "https://www.amazon.es/dp/B0HRZ54WMS", amazonKindle: "https://www.amazon.es/dp/B0HRVXGBVR", available: true },
];
const bookVideos = ["/media/books/big-dreams/trailer.mp4", "/media/books/big-dreams/birdsong.mp4", "/media/books/big-dreams/yellow-car.mp4"];
const videoPosters = ["/media/books/big-dreams/trailer-poster.webp", "/media/books/big-dreams/birdsong-poster.webp", "/media/books/big-dreams/yellow-car-poster.webp"];
const breakfast = [
  "/media/books/manna-making/breakfast-berries.webp",
  "/media/books/manna-making/breakfast-fruit-coffee.webp",
  "/media/books/manna-making/breakfast-blue-napkin.webp",
];
const coverStudies = [
  "/media/books/manna-making/cover-blue-table.webp",
  "/media/books/manna-making/cover-berry-toast.webp",
  "/media/books/manna-making/cover-coffee-tray.webp",
];
const sections: Array<{path:string; field:0|1|2|3|4|5}> = [
  {path:"/notes",field:0}, {path:"/stories",field:1},
  {path:"/archive",field:2}, {path:"/studio",field:3},
  {path:"/books",field:4}, {path:"/about",field:5},
];

function Album({sources, captions}: {sources:string[];captions:readonly string[]}) {
  return <div className="intl-photo-gallery">
    {sources.map((src,i) => <figure key={src}>
      <Image src={src} alt={captions[i] ?? ""} width={600} height={800} unoptimized={src.startsWith("https:")} sizes="(max-width: 660px) 45vw, 25vw"/>
      <figcaption>{captions[i]}</figcaption>
    </figure>)}
  </div>;
}
function Cover({ section, locale }: InternationalProps) {
  const t=translations[locale];
  const e=editorial[locale];
  const info=({
    stories:[t.storiesTitle,t.storiesLead,"/media/covers/stories-seated-original-20261118-desktop.webp"],
    books:[e.books.heroTitle,t.booksLead,"/media/covers/books-cover-final-20260802.webp"],
    studio:[t.studioTitle,t.studioLead,"/media/covers/studio-cover.jpg"],
    about:[t.aboutTitle,t.aboutLead,"/media/covers/esther-standing-original-20261118-desktop.webp"],
    notes:[t.notesTitle,t.notesLead,"/media/covers/morning-table-cover.webp"],
    archive:[t.archiveTitle,t.archiveLead,"/media/covers/childhood-cover.jpg"],
    home:[t.aboutTitle,t.aboutLead,"/media/covers/books-cover-final-20260802.webp"],
  })[section];
  const eyebrow=section==="notes"?localeInterface[locale].rooms[0]:
    section==="archive"?localeInterface[locale].rooms[1]:
    localeInterface[locale].primary[section==="stories"?0:section==="books"?1:section==="studio"?2:3];
  // Match approved English/Korean photography, crops, contrast and text position.
  const coverPresets: Partial<Record<Section,{
    mobileImage?:string;
    align:"left"|"right";
    shade:"soft"|"medium"|"strong";
    position?:string;
    mobilePosition?:string;
  }>>={
    about:{mobileImage:"/media/covers/esther-standing-original-20261118-mobile.webp",
      align:"left",shade:"medium"},
    stories:{mobileImage:"/media/covers/stories-seated-original-20261118-mobile.webp",
      align:"left",shade:"medium"},
    books:{mobileImage:"/media/covers/books-cover-final-20260802.webp",
      align:"right",shade:"soft"},
    notes:{mobileImage:"/media/covers/morning-table-cover-mobile.webp",
      align:"right",shade:"strong"},
    studio:{align:"right",shade:"soft",mobilePosition:"43% center"},
    archive:{align:"right",shade:"medium",position:"42% center",mobilePosition:"38% center"},
  };
  const preset=coverPresets[section];
  return <PageCover
    eyebrow={eyebrow} title={info[0]} description={info[1]} image={info[2]}
    mobileImage={preset?.mobileImage} alt={t.coverAlts[section]}
    align={preset?.align??"right"} shade={preset?.shade??"soft"}
    objectPosition={preset?.position??"center center"}
    mobileObjectPosition={preset?.mobilePosition??"center center"}
  />;
}
function EditionGallery({locale,compact=false}:{locale:TranslationLocale;compact?:boolean}){
  const t=translations[locale];
  const e=editorial[locale];
  return <div className={`intl-editions ${compact?"intl-editions-compact":""}`}>
    {editions.map((edition,i)=><article className="intl-edition"
      id={i===1?"german-edition":i===2?"spanish-edition":"english-edition"}
      key={edition.name}>
      <div className="intl-edition-art">
        <figure>
          <Image src={edition.src} alt={edition.name} width={600} height={900}
            unoptimized={edition.src.startsWith("https:")}
            sizes="(max-width: 660px) 40vw, 270px"/>
          <figcaption>{e.books.coverFront}</figcaption>
        </figure>
        {i===0 ? <figure className="intl-back-cover">
          <Image src="/media/books/big-dreams/back-cover.webp"
            alt={e.books.backCoverAlt} width={600} height={900}
            sizes="(max-width: 660px) 40vw, 170px"/>
          <figcaption>{e.books.coverBack}</figcaption>
        </figure> : null}
      </div>
      <div className="intl-edition-copy">
        <p className="intl-overline">{t[edition.key]}</p>
        <h3>{edition.name}</h3>
        <p>{i===0?e.books.originalInfo:e.books.editionInfo}</p>
        <div className="intl-edition-links">
          <a href={edition.amazonPaperback} aria-label={`${t.paperback}: ${edition.name}`}
            target="_blank" rel="noopener noreferrer">{t.paperback} ↗</a>
          {edition.amazonKindle?<a href={edition.amazonKindle}
            aria-label={`${t.kindle}: ${edition.name}`}
            target="_blank" rel="noopener noreferrer">{t.kindle} ↗</a>:null}
        </div>
      </div>
    </article>)}
  </div>;
}
function IntlHome({locale}: {locale:TranslationLocale}) {
  const t=translations[locale];
  const e=editorial[locale];
  const sceneImage = ["/media/esther/morning-table.jpg","/media/esther/childhood-garden.jpg","/media/esther/bangladesh-service.jpg","/media/esther/still-making-father-child-collage-20260802.png"];
  const scenePaths = ["/notes","/archive","/stories","/studio"];
  return <main className="intl-home">
    <section className="intl-home-hero home-video-hero">
      <HomeHeroVideo/>
      <ChildhoodHeroCaption locale={locale}/>
      <div className="intl-home-hero-copy"><p>{t.welcome}</p><h1>{t.hero}</h1><a href="#inside">{t.enter} ↓</a></div>
    </section>
    <section className="intl-foyer" id="inside">
      <div className="container">
        <p className="intl-overline">{t.welcome}</p>
        <h2>{t.houseTitle}</h2><p className="intl-wide-copy">{t.houseText}</p>
        <nav className="intl-room-links" aria-label={t.houseTitle}>
          {sections.map((item,i)=><Link key={item.path} href={localizedHref(locale,item.path)}>
            <span>{String(i+1).padStart(2,"0")}</span><strong>{t.rooms[item.field]}</strong><span aria-hidden="true">↗</span>
          </Link>)}
        </nav>
      </div>
    </section>
    <section className="intl-book-showcase">
      <div className="container">
        <p className="intl-overline">{t.booksTitle}</p>
        <h2>Big Dreams in Every Color</h2>
        <p className="intl-wide-copy">{t.bookIntro}</p><p>{t.bookText}</p>
        <EditionGallery locale={locale} compact/>
        <div className="intl-video-grid">
          {bookVideos.map((video,i)=><figure key={video} className="intl-video-item">
            <video controls playsInline preload="none" poster={videoPosters[i]}
              aria-label={e.books.videos[i].aria}>
              <source src={video} type="video/mp4"/>
            </video>
            <figcaption>
              <span className="intl-overline">{e.books.videos[i].label}</span>
              <strong>{e.books.videos[i].title}</strong>
              <span>{e.books.videos[i].description}</span>
            </figcaption>
          </figure>)}
        </div>
        <Link className="intl-more" href={localizedHref(locale,"/books")}>{t.booksTitle} ↗</Link>
      </div>
    </section>
    {sceneImage.map((src,i) => <section className="intl-scene" key={src}>
      <div className="container intl-scene-grid">
        <div><p className="intl-overline">{t.rooms[[0,2,1,3][i] as 0|1|2|3]}</p>
          <h2>{t.sceneTitles[i]}</h2><p>{t.sceneTexts[i]}</p>
          <Link className="intl-more" href={localizedHref(locale,scenePaths[i])}>{t.rooms[[0,2,1,3][i] as 0|1|2|3]} ↗</Link>
        </div>
        <Image src={src} alt={t.sceneAlts[i]} width={950} height={750} sizes="(max-width: 750px) 100vw, 44vw"/>
      </div>
    </section>)}
    <section className="intl-ending"><div className="container"><h2>{t.closing}</h2>
      <Link className="intl-more" href={localizedHref(locale,"/stories")}>{t.storiesTitle} ↗</Link>
    </div></section>
  </main>;
}
function IntlBooks({locale}:{locale:TranslationLocale}) {
  const t=translations[locale];
  const e=editorial[locale];
  return <main className="intl-page intl-books">
    <Cover section="books" locale={locale}/>
    <section className="intl-section" id="new-release"><div className="container">
      <p className="intl-overline">{e.books.newBookLabel}</p>
      <h2>Big Dreams in Every Color</h2>
      <p className="intl-overline">{e.books.byline}</p>
      <h3>{t.bookIntro}</h3>
      <p className="intl-wide-copy">{t.bookText}</p>
      <EditionGallery locale={locale}/>
    </div></section>
    <section className="intl-section intl-soft">
      <div className="container">
        <p className="intl-overline">{t.booksTitle}</p>
        <h2>Big Dreams in Every Color</h2>
        <div className="intl-video-grid">
          {bookVideos.map((video,i)=><figure key={video} className="intl-video-item">
            <video controls playsInline preload="none" poster={videoPosters[i]}
              aria-label={e.books.videos[i].aria}>
              <source src={video} type="video/mp4"/>
            </video>
            <figcaption>
              <span className="intl-overline">{e.books.videos[i].label}</span>
              <strong>{e.books.videos[i].title}</strong>
              <span>{e.books.videos[i].description}</span>
            </figcaption>
          </figure>)}
        </div>
      </div>
    </section>
    <section className="intl-section" id="manna-on-the-table"><div className="container">
      <p className="intl-overline">{e.books.manuscriptKicker}</p>
      <h2>Manna on the Table</h2>
      <p className="intl-overline">{e.books.manuscriptStatus}</p>
      <p className="intl-wide-copy">{e.books.manuscriptDeck}</p>
      <p>{e.books.manuscriptBody}</p>
      <Link className="intl-more" href={localizedHref(locale,"/notes")}>{e.books.manuscriptLink} ↗</Link>
      <h3>{e.books.manuscriptFactsHeading}</h3>
      <dl className="intl-manuscript-facts">
        {e.books.manuscriptFacts.map(([label,value])=><div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}
      </dl>
    </div></section>
    <section className="intl-section intl-soft" id="making-of-manna"><div className="container">
      <p className="intl-overline">{t.mannaTitle}</p>
      <h2>{e.books.makingHeading}</h2>
      {e.books.makingIntro.map(p=><p className="intl-wide-copy" key={p}>{p}</p>)}
      <h3>{t.mannaPhotos}</h3>
      <p>{e.books.makingPhotoBody}</p>
      <Album sources={breakfast} captions={t.breakfastCaptions}/>
      <h3>{t.mannaStoryTitle}</h3>
      <p>{e.books.makingCoverBody}</p>
      <Album sources={coverStudies} captions={t.coverCaptions}/>
      <h3>{t.mannaHouseTitle}</h3><p>{e.books.makingHomeBody}</p>
      <Link className="intl-more" href={localizedHref(locale)}>{t.mannaHouseTitle} ↗</Link>
      <h3>{t.mannaDailyTitle}</h3>
      {e.books.makingManna.map(p=><p key={p}>{p}</p>)}
    </div></section>
  </main>;
}
function IntlStories({locale}:{locale:TranslationLocale}) {
  const t=translations[locale];
  const e=editorial[locale];
  const slug=["my-father-dreamed-of-a-tiger","the-youngest-daughter-in-every-house"];
  return <main className="intl-page">
    <Cover section="stories" locale={locale}/>
    <section className="intl-section"><div className="container">
      <p className="intl-overline">{t.storiesTitle}</p>
      <h2>{t.storiesIntro}</h2>
      <p className="intl-wide-copy">{t.storiesText}</p>
      <p>{e.stories.introMore}</p>
    </div></section>
    <section className="intl-section intl-soft"><div className="container">
      <p className="intl-overline">{e.stories.featuredLabel}</p>
      <h2>{t.storyTitles[0]}</h2>
      <p className="intl-wide-copy">{e.stories.featuredLead}</p>
      <p>{e.stories.featuredNote}</p>
      <Link className="intl-more" href={localizedHref(locale,`/stories/${slug[0]}`)}>{e.stories.featuredAction} ↗</Link>
    </div></section>
    <section className="intl-section"><div className="container">
      <p className="intl-overline">{t.storiesCollection}</p>
      <h2>{t.storiesCollection}</h2>
      <p>{e.stories.collectionLead}</p>
      <ol className="intl-story-list">
        {t.storyTitles.map((title,i)=><li key={title}>
          <span>{String(i+1).padStart(2,"0")}</span>
          {i<2 ? <Link href={localizedHref(locale,`/stories/${slug[i]}`)}>{title}</Link> : <span>{title}</span>}
          <small>{i<2?t.storyCta:t.recorded}</small>
        </li>)}
      </ol>
    </div></section>
    <section className="intl-section intl-soft"><div className="container">
      <p className="intl-overline">{t.storiesTitle}</p>
      <h2>{e.stories.timelineTitle}</h2><p className="intl-wide-copy">{e.stories.timelineBody}</p>
      <ol className="intl-story-list">
        {t.life.map((chapter,i) => <li key={chapter}>
          <span>{String(i+1).padStart(2,"0")}</span><span>{chapter}</span>
        </li>)}
      </ol>
    </div></section>
    <section className="intl-section"><div className="container">
      <p className="intl-overline">{t.storiesTitle}</p>
      <h2>{e.stories.returningTitle}</h2>
      <p className="intl-wide-copy">{e.stories.returningBody}</p>
      <p>{t.storiesClosing}</p>
      <Link className="intl-more" href={localizedHref(locale,"/archive")}>{e.stories.returningLink} ↗</Link>
    </div></section>
    <section className="intl-ending"><div className="container">
      <h2>{t.quote}</h2><p className="intl-wide-copy">{t.quoteText}</p>
      <Link className="intl-more" href={localizedHref(locale,"/archive")}>{t.archiveTitle} ↗</Link>
    </div></section>
  </main>;
}
function IntlStoryDetail({locale,which}:{locale:TranslationLocale;which:0|1}) {
  const t=translations[locale];
  const e=editorial[locale];
  const title=t.storyTitles[which];
  const paragraphs=which===0?t.father:t.daughter;
  const nextHref=which===0?"/stories/the-youngest-daughter-in-every-house":"/stories";
  return <main className="intl-page">
    <section className="intl-section intl-story-head"><div className="container">
      <Link className="intl-more" href={localizedHref(locale,"/stories")}>← {t.storiesTitle}</Link>
      <p className="intl-overline">{t.storiesTitle} {which===0?"01":"02"}</p>
      <h1>{title}</h1>
      <p className="intl-wide-copy">{which===0?e.detail.firstDeck:e.detail.secondDeck}</p>
    </div></section>
    <section className="intl-section"><div className="container intl-story-detail">
      <article>{paragraphs.map((paragraph,i) => i===2&&which===0
        ? <blockquote key={i}>{paragraph}</blockquote> : <p key={i}>{paragraph}</p>)}
      </article>
      <figure><Image src="/media/esther/childhood-garden.jpg"
        alt={t.coverAlts.archive} width={900} height={720}
        sizes="(max-width: 750px) 90vw, 40vw"/>
        <figcaption>{which===0?e.detail.imageNoteTiger:e.detail.imageNoteDaughter}</figcaption>
      </figure>
    </div></section>
    <section className="intl-section intl-soft"><div className="container">
      <p className="intl-overline">{e.detail.archiveHeading}</p>
      <p className="intl-wide-copy">{which===0?e.detail.archiveNoteTiger:e.detail.archiveNoteDaughter}</p>
    </div></section>
    <section className="intl-ending"><div className="container">
      <p className="intl-overline">{t.storiesTitle}</p>
      <h2>{which===0?t.storyTitles[1]:t.storyTitles[2]}</h2>
      <p>{which===0?e.detail.nextTiger:e.detail.nextDaughter}</p>
      <Link className="intl-more" href={localizedHref(locale,nextHref)}>
        {which===0?e.detail.nextActionTiger:e.detail.nextActionDaughter} ↗
      </Link>
    </div></section>
  </main>;
}
function IntlNotes({locale}:{locale:TranslationLocale}) {
  const t=translations[locale];
  const e=editorial[locale];
  return <main className="intl-page">
    <Cover section="notes" locale={locale}/>
    <section className="intl-section"><div className="container">
      <p className="intl-overline">{e.notes.headerKicker}</p>
      <h2>{t.notesHeading}</h2>
      <p className="intl-wide-copy">{t.notesText}</p>
    </div></section>
    <section className="intl-section intl-soft"><div className="container">
      <div className="intl-scene-grid intl-morning">
        <figure>
          <Image src="/media/esther/morning-table.jpg" alt={t.sceneAlts[0]} width={950} height={1200}/>
          <figcaption>{e.notes.photoCaption}</figcaption>
        </figure>
        <div>
          <p className="intl-overline">{e.notes.ordinaryKicker}</p>
          <h2>{t.notesSecond}</h2>
          <p>{t.notesSecondText}</p>
        </div>
      </div>
    </div></section>
    <section className="intl-section"><div className="container">
      <p className="intl-overline">{t.mannaTitle}</p>
      <h2>{t.notesThird}</h2>
      <p className="intl-wide-copy">{e.notes.manuscriptBody}</p>
      <Link className="intl-more" href={localizedHref(locale,"/books")}>
        {e.notes.manuscriptAction} ↗
      </Link>
    </div></section>
    <section className="intl-ending"><div className="container">
      <p className="intl-overline">{e.notes.closingLabel}</p>
      <h2>{t.notesEnding}</h2>
    </div></section>
  </main>;
}
function IntlArchive({locale}:{locale:TranslationLocale}) {
  return <main className="intl-page childhood-page">
    <Cover section="archive" locale={locale}/>
    <ChildhoodArchiveSections locale={locale}/>
  </main>;
}
function IntlStudio({locale}:{locale:TranslationLocale}) {
  const t=translations[locale];
  const e=editorial[locale];
  return <main className="intl-page">
    <Cover section="studio" locale={locale}/>
    <section className="intl-section"><div className="container">
      <p className="intl-overline">{e.studio.sourceLabel}</p>
      <h2>{t.studioHeading}</h2>
      <p className="intl-wide-copy">{t.studioText}</p>
    </div></section>
    <section className="intl-section intl-soft"><div className="container intl-scene-grid">
      <div>
        <p className="intl-overline">{e.studio.laterLabel}</p>
        <h2>{t.studioSecond}</h2>
        <p>{t.studioSecondText}</p>
      </div>
      <figure>
        <Image src="/media/esther/still-making-father-child-collage-20260802.png"
          alt={t.coverAlts.studio} width={960} height={960}
          sizes="(max-width: 750px) 100vw, 44vw"/>
        <figcaption>{e.studio.figureCaption}</figcaption>
      </figure>
    </div></section>
    <section className="intl-ending"><div className="container">
      <p className="intl-overline">{e.studio.futureLabel}</p>
      <h2>{t.studioEnding}</h2>
      <p className="intl-wide-copy">{e.studio.futureBody}</p>
    </div></section>
  </main>;
}
function IntlAbout({locale}:{locale:TranslationLocale}) {
  const t=translations[locale];
  const e=editorial[locale];
  const chapters=[
    [t.aboutEducation,t.aboutEducationText,"/media/esther/young-artist.jpg"],
    [t.aboutHome,t.aboutHomeText,"/media/esther/morning-table.jpg"],
    [t.aboutService,t.aboutServiceText,"/media/esther/bangladesh-service.jpg"],
    [t.aboutMaking,t.aboutMakingText,"/media/esther/still-making-father-child-collage-20260802.png"],
  ];
  return <main className="intl-page">
    <Cover section="about" locale={locale}/>
    <section className="intl-section"><div className="container">
      <p className="intl-overline">{t.aboutSectionLabel}</p>
      <h2>{t.aboutTitle}</h2>
      <p className="intl-wide-copy">{t.aboutIntro}</p>
      <a className="intl-more" href="https://www.amazon.com/author/sungyeoncho"
        target="_blank" rel="noopener noreferrer">{localeInterface[locale].authorPage} ↗</a>
    </div></section>
    {chapters.map(([title,body,src],i)=><section className={`intl-section ${i%2?"intl-soft":""}`} key={title}>
      <div className="container intl-scene-grid">
        <div>
          <p className="intl-overline">{t.aboutSectionLabel}</p>
          <h2>{title}</h2>
          {i===3 ? null : <p>{body}</p>}
          {i===1 ? <p>{e.about.homeMore}</p> : null}
          {i===3 ? <p>{e.about.makingMore}</p> : null}
          {i===0 ? <ol className="intl-education">
            {t.education.map((description,idx)=><li key={description}>
              <time>{[1985,1988,1992,1999][idx]}</time><span>{description}</span>
            </li>)}
          </ol> : null}
        </div>
        <figure>
          <Image src={src}
            alt={i===0?t.aboutEducation:i===1?t.sceneAlts[0]:i===2?t.sceneAlts[2]:t.coverAlts.studio}
            width={960} height={780} sizes="(max-width: 750px) 100vw, 44vw"/>
          {i===0 ? <figcaption>{e.about.universityCaption}</figcaption> : null}
          {i===2 ? <figcaption>{e.about.serviceCaption}</figcaption> : null}
        </figure>
      </div></section>)}
    <section className="intl-ending"><div className="container">
      <h2>{e.about.closing}</h2>
    </div></section>
  </main>;
}
export function InternationalPage({locale,section}:InternationalProps) {
  if (section==="home") return <IntlHome locale={locale}/>;
  if (section==="books") return <IntlBooks locale={locale}/>;
  if (section==="stories") return <IntlStories locale={locale}/>;
  if (section==="notes") return <IntlNotes locale={locale}/>;
  if (section==="archive") return <IntlArchive locale={locale}/>;
  if (section==="studio") return <IntlStudio locale={locale}/>;
  return <IntlAbout locale={locale}/>;
}
export { IntlStoryDetail };
