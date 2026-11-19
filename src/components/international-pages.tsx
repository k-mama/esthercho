import Image from "next/image";
import Link from "next/link";
import { PageCover } from "@/components/page-cover";
import { HomeHeroVideo } from "@/app/home-hero-video";
import type { TranslationLocale } from "@/config/languages";
import { localizedHref, localeInterface } from "@/config/languages";
import { translations } from "@/content/international";

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
  const t = translations[locale];
  const info = ({
    stories:[t.storiesTitle,t.storiesLead,"/media/covers/stories-seated-original-20261118-desktop.webp"],
    books:[t.booksTitle,t.booksLead,"/media/covers/books-cover-final-20260802.webp"],
    studio:[t.studioTitle,t.studioLead,"/media/covers/studio-cover.jpg"],
    about:[t.aboutTitle,t.aboutLead,"/media/covers/esther-standing-original-20261118-desktop.webp"],
    notes:[t.notesTitle,t.notesLead,"/media/covers/morning-table-cover.webp"],
    archive:[t.archiveTitle,t.archiveLead,"/media/covers/childhood-cover.jpg"],
    home:[t.aboutTitle,t.aboutLead,"/media/covers/books-cover-final-20260802.webp"],
  })[section];
  const eyebrow = section === "notes" ? localeInterface[locale].rooms[0] : section === "archive"
    ? localeInterface[locale].rooms[1] : localeInterface[locale].primary[
      section === "stories" ? 0 : section === "books" ? 1 : section === "studio" ? 2 : 3];
  // Share the original English/Korean cover crops and composition across locales.
  // In particular, the author's face must remain visible on narrow screens.
  const coverPresets: Partial<Record<Section, {
    mobileImage: string;
    align: "left" | "right";
    shade: "medium" | "strong";
  }>> = {
    about: {
      mobileImage: "/media/covers/esther-standing-original-20261118-mobile.webp",
      align: "left" as const,
      shade: "medium" as const,
    },
    stories: {
      mobileImage: "/media/covers/stories-seated-original-20261118-mobile.webp",
      align: "left" as const,
      shade: "medium" as const,
    },
    notes: {
      mobileImage: "/media/covers/morning-table-cover-mobile.webp",
      align: "right" as const,
      shade: "strong" as const,
    },
  };
  const coverPreset = coverPresets[section];
  return <PageCover
    eyebrow={eyebrow}
    title={info[0]} description={info[1]} image={info[2]}
    mobileImage={coverPreset?.mobileImage}
    alt={t.coverAlts[section]}
    align={coverPreset?.align ?? "right"}
    shade={coverPreset?.shade ?? "soft"}
    objectPosition="center center"
    mobileObjectPosition="center center"
  />;
}
function EditionGallery({locale,compact=false}:{locale:TranslationLocale;compact?:boolean}){
  const t=translations[locale];
  return <div className={`intl-editions ${compact?"intl-editions-compact":""}`}>
    {editions.map((edition,i) => <article className="intl-edition" key={edition.name}>
      <Image src={edition.src} alt={edition.name} width={600} height={900}
        unoptimized={edition.src.startsWith("https:")} sizes="(max-width: 660px) 70vw, 270px" />
      <div className="intl-edition-copy">
        <p className="intl-overline">{t[edition.key]}</p>
        <h3>{edition.name}</h3>
        <div className="intl-edition-links">
          <a href={edition.amazonPaperback} target="_blank" rel="noopener noreferrer">{t.paperback} ↗</a>
          {edition.amazonKindle ? <a href={edition.amazonKindle} target="_blank" rel="noopener noreferrer">{t.kindle} ↗</a> : null}
        </div>
      </div>
    </article>)}
  </div>;
}
function IntlHome({locale}: {locale:TranslationLocale}) {
  const t=translations[locale];
  const sceneImage = ["/media/esther/morning-table.jpg","/media/esther/childhood-garden.jpg","/media/esther/bangladesh-service.jpg","/media/esther/still-making-father-child-collage-20260802.png"];
  const scenePaths = ["/notes","/archive","/stories","/studio"];
  return <main className="intl-home">
    <section className="intl-home-hero home-video-hero">
      <HomeHeroVideo/>
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
        <div className="intl-video-grid">{bookVideos.map((video,i) =>
          <video key={video} controls playsInline preload="none" poster={videoPosters[i]} aria-label={`Big Dreams in Every Color · ${i+1}`}>
            <source src={video} type="video/mp4"/>
          </video>)}
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
  return <main className="intl-page intl-books">
    <Cover section="books" locale={locale}/>
    <section className="intl-section"><div className="container">
      <p className="intl-overline">BIG DREAMS IN EVERY COLOR · SUNG YEON CHO</p>
      <h2>{t.bookIntro}</h2><p className="intl-wide-copy">{t.bookText}</p>
      <EditionGallery locale={locale}/>
    </div></section>
    <section className="intl-section intl-soft">
      <div className="container">
        <p className="intl-overline">BIG DREAMS IN EVERY COLOR</p><h2>{t.booksTitle}</h2>
        <div className="intl-video-grid">{bookVideos.map((video,i)=><video key={video} controls playsInline preload="none" poster={videoPosters[i]} aria-label={`Big Dreams in Every Color · ${i+1}`}><source src={video} type="video/mp4"/></video>)}</div>
      </div>
    </section>
    <section className="intl-section"><div className="container">
      <p className="intl-overline">{t.mannaTitle}</p><h2>Manna on the Table</h2>
      <p className="intl-wide-copy">{t.mannaText}</p>
      <h3>{t.mannaPhotos}</h3><p>{t.mannaPhotosText}</p>
      <Album sources={breakfast} captions={t.breakfastCaptions}/>
      <Album sources={coverStudies} captions={t.coverCaptions}/>
      <h3>{t.mannaStoryTitle}</h3><p>{t.mannaStoryText}</p>
      <h3>{t.mannaHouseTitle}</h3><p>{t.mannaHouseText}</p>
      <h3>{t.mannaDailyTitle}</h3><p>{t.mannaDailyText}</p>
      <Link className="intl-more" href={localizedHref(locale,"/notes")}>{t.notesTitle} ↗</Link>
    </div></section>
  </main>;
}
function IntlStories({locale}:{locale:TranslationLocale}) {
  const t=translations[locale];
  const slug=["my-father-dreamed-of-a-tiger","the-youngest-daughter-in-every-house"];
  return <main className="intl-page">
    <Cover section="stories" locale={locale}/>
    <section className="intl-section"><div className="container">
      <p className="intl-overline">{t.storiesTitle}</p>
      <h2>{t.storiesIntro}</h2><p className="intl-wide-copy">{t.storiesText}</p>
      <h3>{t.storiesCollection}</h3>
      <ol className="intl-story-list">
        {t.storyTitles.map((title,i)=><li key={title}>
          <span>{String(i+1).padStart(2,"0")}</span>
          {i<2 ? <Link href={localizedHref(locale,`/stories/${slug[i]}`)}>{title}</Link> : <span>{title}</span>}
          <small>{i<2?t.storyCta:t.recorded}</small>
        </li>)}
      </ol>
      <p className="intl-wide-copy">{t.storiesClosing}</p>
    </div></section>
    <section className="intl-section intl-soft"><div className="container">
      <p className="intl-overline">{t.storiesTitle}</p>
      <h2>{t.storiesIntro}</h2>
      <ol className="intl-story-list">
        {t.life.map((chapter,i) => <li key={chapter}>
          <span>{String(i+1).padStart(2,"0")}</span><span>{chapter}</span>
        </li>)}
      </ol>
    </div></section>
    <section className="intl-ending"><div className="container">
      <h2>{t.quote}</h2><p className="intl-wide-copy">{t.quoteText}</p>
      <Link className="intl-more" href={localizedHref(locale,"/archive")}>{t.archiveTitle} ↗</Link>
    </div></section>
  </main>;
}
function IntlStoryDetail({locale,which}:{locale:TranslationLocale;which:0|1}) {
  const t=translations[locale];
  const title=t.storyTitles[which];
  const paragraphs=which===0?t.father:t.daughter;
  return <main className="intl-page">
    <section className="intl-section intl-story-head"><div className="container">
      <Link className="intl-more" href={localizedHref(locale,"/stories")}>← {t.storiesTitle}</Link>
      <p className="intl-overline">STORY {which===0?"01":"02"}</p>
      <h1>{title}</h1>
    </div></section>
    <section className="intl-section"><div className="container intl-story-detail">
      <article>{paragraphs.map((paragraph,i) => i===2&&which===0
        ? <blockquote key={i}>{paragraph}</blockquote> : <p key={i}>{paragraph}</p>)}
      </article>
      <figure><Image src="/media/esther/childhood-garden.jpg" alt={t.archiveChild} width={900} height={720} sizes="(max-width: 750px) 90vw, 40vw"/>
        <figcaption>{t.archiveChild}</figcaption></figure>
    </div></section>
    <section className="intl-ending"><div className="container">
      <Link className="intl-more" href={localizedHref(locale,which===0?"/stories/the-youngest-daughter-in-every-house":"/stories")}>{which===0?t.storyTitles[1]:t.storiesTitle} ↗</Link>
    </div></section>
  </main>;
}
function IntlNotes({locale}:{locale:TranslationLocale}) {
  const t=translations[locale];
  return <main className="intl-page"><Cover section="notes" locale={locale}/>
    <section className="intl-section"><div className="container">
      <h2>{t.notesHeading}</h2><p className="intl-wide-copy">{t.notesText}</p>
      <div className="intl-scene-grid intl-morning">
        <figure><Image src="/media/esther/morning-table.jpg" alt={t.notesTitle} width={950} height={1200}/></figure>
        <div><h3>{t.notesSecond}</h3><p>{t.notesSecondText}</p></div>
      </div>
    </div></section>
    <section className="intl-ending"><div className="container"><h2>{t.notesThird}</h2>
      <Link className="intl-more" href={localizedHref(locale,"/books")}>Manna on the Table ↗</Link><p>{t.notesEnding}</p>
    </div></section>
  </main>;
}
function IntlArchive({locale}:{locale:TranslationLocale}) {
  const t=translations[locale];
  const chapters=[
    [t.archiveHeading,t.archiveText,"/media/esther/childhood-house.jpg"],
    [t.archiveHouse,t.archiveHouseText,"/media/esther/childhood-house.jpg"],
    [t.archiveChild,t.archiveChildText,"/media/esther/childhood-garden.jpg"],
  ];
  return <main className="intl-page"><Cover section="archive" locale={locale}/>
    {chapters.map(([title,body,image],i)=><section className={`intl-section ${i%2?"intl-soft":""}`} key={title}>
      <div className="container intl-scene-grid">
        <div><p className="intl-overline">{t.archiveTitle}</p><h2>{title}</h2><p>{body}</p></div>
        <Image src={image} alt={title} width={950} height={730} sizes="(max-width: 750px) 100vw, 44vw"/>
      </div></section>)}
    <section className="intl-section"><div className="container"><h2>{t.archiveMemory}</h2><p>{t.archiveMemoryText}</p><h3>{t.archiveEthics}</h3><p>{t.archiveEthicsText}</p>
      <Link className="intl-more" href={localizedHref(locale,"/stories")}>{t.storiesTitle} ↗</Link>
    </div></section>
  </main>;
}
function IntlStudio({locale}:{locale:TranslationLocale}) {
  const t=translations[locale];
  return <main className="intl-page"><Cover section="studio" locale={locale}/>
    <section className="intl-section"><div className="container"><h2>{t.studioHeading}</h2>
      <p className="intl-wide-copy">{t.studioText}</p>
      <div className="intl-scene-grid">
        <div><h3>{t.studioSecond}</h3><p>{t.studioSecondText}</p></div>
        <Image src="/media/esther/still-making-father-child-collage-20260802.png" alt={t.studioLead} width={960} height={960} sizes="(max-width: 750px) 100vw, 44vw"/>
      </div>
    </div></section>
    <section className="intl-ending"><div className="container"><h2>{t.studioEnding}</h2></div></section>
  </main>;
}
function IntlAbout({locale}:{locale:TranslationLocale}) {
  const t=translations[locale];
  const chapters=[
    [t.aboutEducation,t.aboutEducationText,"/media/esther/young-artist.jpg"],
    [t.aboutHome,t.aboutHomeText,"/media/esther/morning-table.jpg"],
    [t.aboutService,t.aboutServiceText,"/media/esther/bangladesh-service.jpg"],
    [t.aboutMaking,t.aboutMakingText,"/media/esther/still-making-father-child-collage-20260802.png"],
  ];
  return <main className="intl-page"><Cover section="about" locale={locale}/>
    <section className="intl-section"><div className="container">
      <p className="intl-overline">ESTHER CHO · 조성연</p>
      <h2>{t.aboutTitle}</h2><p className="intl-wide-copy">{t.aboutIntro}</p>
      <a className="intl-more" href="https://www.amazon.com/author/sungyeoncho" target="_blank" rel="noopener noreferrer">{localeInterface[locale].authorPage} ↗</a>
    </div></section>
    {chapters.map(([title,body,src],i)=><section className={`intl-section ${i%2?"intl-soft":""}`} key={title}>
      <div className="container intl-scene-grid">
        <div><h2>{title}</h2><p>{body}</p>
          {i === 0 ? <ol className="intl-education">
            {t.education.map((description,idx)=>
              <li key={description}><time>{[1985,1988,1992,1999][idx]}</time><span>{description}</span></li>
            )}
          </ol> : null}
        </div>
        <Image src={src} alt={title} width={960} height={780} sizes="(max-width: 750px) 100vw, 44vw"/>
      </div></section>)}
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
