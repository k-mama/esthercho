import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import "@/app/stories/my-father-dreamed-of-a-tiger/story-detail.css";

const url = "https://esthercho.pages.dev/fr/stories/the-youngest-daughter-in-every-house/";
const original = "https://esthercho.pages.dev/stories/the-youngest-daughter-in-every-house/";
const portuguese = "https://esthercho.pages.dev/pt-br/stories/the-youngest-daughter-in-every-house/";
const spanish = "https://esthercho.pages.dev/es/stories/the-youngest-daughter-in-every-house/";

export const metadata: Metadata = {
  title: "La petite dernière dans chaque maison · Esther Cho",
  description: "Chez elle, Esther était l’aînée. Dans la famille qui l’accueillait, elle devenait la petite dernière.",
  alternates: {
    canonical: url,
    languages: { en: original, de: "https://esthercho.pages.dev/de/stories/the-youngest-daughter-in-every-house/", "pt-BR": portuguese, es: spanish, fr: url, it: "https://esthercho.pages.dev/it/stories/the-youngest-daughter-in-every-house/", ja: "https://esthercho.pages.dev/ja/stories/the-youngest-daughter-in-every-house/", "x-default": original },
  },
  openGraph: {
    type: "article", url, locale: "fr_FR",
    title: "La petite dernière dans chaque maison · Esther Cho",
    description: "L’aînée à la maison, la plus jeune dans les familles qui lui ouvraient leur porte.",
  },
};

const tags = ["Mère", "Grand-mère", "Tantes", "Famille", "Maison"];

export default function FrenchYoungestDaughterPage() {
  return (
    <main className="story-detail-page" lang="fr">
      <section className="container story-detail-hero" aria-labelledby="story-title">
        <Link href="/fr/stories/" className="story-detail-back">Récits</Link>
        <p className="story-detail-kicker">RÉCIT 02 · LA FAMILLE</p>
        <h1 id="story-title">La petite dernière dans chaque maison</h1>
        <p className="story-detail-deck">
          Chez moi, j’étais l’aînée. Dans les autres maisons, je devenais la petite dernière.
        </p>
      </section>

      <section className="container story-detail-grid">
        <article className="story-detail-copy">
          <p className="story-detail-opening">Chez moi, j’étais l’aînée.</p>
          <p>
            Mon père était le fils aîné de sa famille. J’étais son premier enfant,
            la première petite-fille. Mes deux petits frères sont nés ensuite,
            à un an d’intervalle.
          </p>
          <p>
            Ma mère se retrouvait avec trois enfants en bas âge.
            Ses propres parents étaient morts jeunes. Quand elle avait besoin d’aide,
            elle ne pouvait pas appeler mes grands-parents maternels.
          </p>
          <p>
            Je séjournais souvent chez un oncle qui habitait tout près.
            C’était un grand hanok, une maison coréenne traditionnelle, avec une cour carrée
            et un parterre de fleurs. Ma grand-mère et mon arrière-grand-mère y vivaient,
            ainsi que mes oncles. L’un d’eux était encore au lycée.
            Je revois deux bâtiments séparés et une horloge dans une chambre :
            tic, tic, tic.
          </p>
          <p>
            J’étais plus calme que mes petits frères. J’étais donc sans doute
            la plus facile à envoyer quelques jours chez des proches.
            Le soir, ma mère me manquait. Il m’arrivait de pleurer pour la retrouver,
            mais je pouvais rester. Mes grands-parents et mes oncles m’y entouraient d’affection.
          </p>
          <p>
            Je regardais ma grand-mère se préparer devant sa coiffeuse,
            puis j’imitais sa façon de se maquiller.
            Apparemment, l’admiration se transforme vite en rituel de beauté.
          </p>
          <p>
            Quand ma mère avait encore besoin d’aide, je séjournais aussi chez
            une tante plus âgée ou une tante plus jeune.
            L’adresse changeait. Pas ma place dans la maison.
            Là aussi, je devenais la petite dernière.
          </p>
          <p>
            Aujourd’hui, quand je repense à ces années, je me souviens du manque de ma mère.
            Je me souviens aussi de toutes les personnes qui m’ont fait une place chez elles.
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
            Le lieu photographié n’a pas été identifié comme l’une des maisons
            de la famille évoquées ici.
          </figcaption>
        </figure>
      </section>

      <section className="story-detail-note">
        <div className="container story-detail-note-inner">
          <p className="story-detail-kicker">NOTE DES ARCHIVES</p>
          <p>
            Ce récit s’appuie uniquement sur les souvenirs de famille consignés par Esther.
            Les lieux et les liens familiaux ne sont décrits que dans la mesure
            où les archives le permettent. Les détails non vérifiés sont laissés de côté.
          </p>
        </div>
      </section>

      <section className="container story-detail-next" aria-labelledby="next-story-title">
        <p className="story-detail-kicker">DANS LA COLLECTION</p>
        <h2 id="next-story-title">De retour dans la cour, en pyjama propre</h2>
        <p>Le prochain souvenir d’enfance est encore en cours de vérification avant publication.</p>
        <Link href="/fr/stories/" className="story-detail-link">
          Retour à la collection
        </Link>
      </section>
    </main>
  );
}
