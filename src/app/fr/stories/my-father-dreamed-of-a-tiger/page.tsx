import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import "@/app/stories/my-father-dreamed-of-a-tiger/story-detail.css";

const url = "https://esthercho.pages.dev/fr/stories/my-father-dreamed-of-a-tiger/";
const original = "https://esthercho.pages.dev/stories/my-father-dreamed-of-a-tiger/";
const portuguese = "https://esthercho.pages.dev/pt-br/stories/my-father-dreamed-of-a-tiger/";
const spanish = "https://esthercho.pages.dev/es/stories/my-father-dreamed-of-a-tiger/";

export const metadata: Metadata = {
  title: "Mon père avait rêvé d’un tigre · Esther Cho",
  description: "Un rêve de tigre, la naissance d’une petite fille et une plaisanterie de famille restée dans les mémoires.",
  alternates: {
    canonical: url,
    languages: { en: original, "pt-BR": portuguese, es: spanish, fr: url, it: "https://esthercho.pages.dev/it/stories/my-father-dreamed-of-a-tiger/", ja: "https://esthercho.pages.dev/ja/stories/my-father-dreamed-of-a-tiger/", "x-default": original },
  },
  openGraph: {
    type: "article", url, locale: "fr_FR",
    title: "Mon père avait rêvé d’un tigre · Esther Cho",
    description: "Un rêve, une petite fille, et une plaisanterie familiale.",
  },
};

const tags = ["Père", "Commencements", "Famille", "Enfance"];

export default function FrenchTigerDreamPage() {
  return (
    <main className="story-detail-page" lang="fr">
      <section className="container story-detail-hero" aria-labelledby="story-title">
        <Link href="/fr/stories/" className="story-detail-back">Récits</Link>
        <p className="story-detail-kicker">RÉCIT 01 · LES COMMENCEMENTS</p>
        <h1 id="story-title">Mon père avait rêvé d’un tigre</h1>
        <p className="story-detail-deck">Avant la naissance d’Esther, son père avait rêvé d’un tigre.</p>
      </section>
      <section className="container story-detail-grid">
        <article className="story-detail-copy">
          <p className="story-detail-opening">Avant ma naissance, mon père avait rêvé d’un tigre.</p>
          <p>Le bébé qui est arrivé était une fille.</p>
          <blockquote>« Ce devait être un chat. »</blockquote>
          <p>
            C’est tout ce qu’Esther a consigné de ce souvenir pour l’instant.
            Quelques lignes, un détail précis. De quoi ouvrir les archives sans prétendre
            qu’elle en sait davantage.
          </p>
          <p>
            Sur ce site, certains récits restent ainsi, à l’état de fragments.
            Un souvenir peut tenir en trois lignes, puis s’étoffer lorsqu’un autre détail revient.
            Les premières lignes gardent leur place.
          </p>
          <div className="story-detail-tags" role="group" aria-label="Thèmes de ce souvenir">
            {tags.map((tag) => <span key={tag}>{tag}</span>)}
          </div>
        </article>
        <figure className="story-detail-figure">
          <Image src="/media/esther/childhood-garden.jpg"
            alt="Esther Cho enfant, souriante, dans un jardin"
            width={1800} height={1350} sizes="(max-width: 899px) 100vw, 42vw" priority />
          <figcaption>
            Photographie des archives familiales · Esther Cho enfant.
            Cette image n’est pas une reconstitution du rêve.
          </figcaption>
        </figure>
      </section>
      <section className="story-detail-note">
        <div className="container story-detail-note-inner">
          <p className="story-detail-kicker">NOTE DES ARCHIVES</p>
          <p>
            Les récits forment des archives vivantes. Esther pourra leur ajouter des détails
            à mesure qu’ils lui reviendront. Les photographies d’époque et les
            réinterprétations réalisées plus tard restent clairement distinguées.
          </p>
        </div>
      </section>
      <section className="container story-detail-next" aria-labelledby="next-story-title">
        <p className="story-detail-kicker">LE RÉCIT SUIVANT</p>
        <h2 id="next-story-title">La petite dernière dans chaque maison</h2>
        <p>Chez elle, Esther était l’aînée. Ailleurs, elle se retrouvait toujours la plus jeune.</p>
        <Link href="/fr/stories/the-youngest-daughter-in-every-house/" className="story-detail-link">
          Lire le récit suivant
        </Link>
      </section>
    </main>
  );
}
