import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import "@/app/stories/my-father-dreamed-of-a-tiger/story-detail.css";

const url = "https://esthercho.pages.dev/it/stories/the-youngest-daughter-in-every-house/";
const original = "https://esthercho.pages.dev/stories/the-youngest-daughter-in-every-house/";
const portuguese = "https://esthercho.pages.dev/pt-br/stories/the-youngest-daughter-in-every-house/";
const spanish = "https://esthercho.pages.dev/es/stories/the-youngest-daughter-in-every-house/";
const french = "https://esthercho.pages.dev/fr/stories/the-youngest-daughter-in-every-house/";

export const metadata: Metadata = {
  title: "La più piccola di ogni casa · Esther Cho",
  description: "A casa Esther era la figlia maggiore. Nelle case dei parenti diventava la più piccola.",
  alternates: {
    canonical: url,
    languages: { en: original, "pt-BR": portuguese, es: spanish, fr: french, it: url, ja: "https://esthercho.pages.dev/ja/stories/the-youngest-daughter-in-every-house/", "x-default": original },
  },
  openGraph: {
    type: "article", url, locale: "it_IT",
    title: "La più piccola di ogni casa · Esther Cho",
    description: "La figlia maggiore a casa, la più piccola nelle famiglie che la accoglievano.",
  },
};

const tags = ["Mamma", "Nonna", "Zie", "Famiglia", "Casa"];

export default function ItalianYoungestDaughterPage() {
  return (
    <main className="story-detail-page" lang="it">
      <section className="container story-detail-hero" aria-labelledby="story-title">
        <Link href="/it/stories/" className="story-detail-back">Storie</Link>
        <p className="story-detail-kicker">STORIA 02 · FAMIGLIA</p>
        <h1 id="story-title">La più piccola di ogni casa</h1>
        <p className="story-detail-deck">
          A casa ero la figlia maggiore. Nelle altre case diventavo sempre la più piccola.
        </p>
      </section>

      <section className="container story-detail-grid">
        <article className="story-detail-copy">
          <p className="story-detail-opening">A casa ero la figlia maggiore.</p>
          <p>
            Mio padre era il primogenito della sua famiglia e io ero la sua primogenita,
            la prima nipote. Poi nacquero i miei due fratellini, a un anno di distanza l’uno dall’altro.
          </p>
          <p>
            Mia madre aveva tre bambini molto piccoli. I suoi genitori erano morti presto
            e, quando aveva bisogno di aiuto, non poteva rivolgersi ai miei nonni materni.
          </p>
          <p>
            Una delle case in cui mi fermavo spesso era quella di uno zio che abitava vicino.
            Era un grande hanok, una casa tradizionale coreana, con un cortile quadrato
            e un’aiuola di fiori. C’erano mia nonna, la mia bisnonna e i miei zii.
            Uno di loro andava ancora al liceo. Ricordo due edifici separati
            e un orologio in camera che faceva tic, tic, tic.
          </p>
          <p>
            Ero più tranquilla dei miei fratellini. Probabilmente ero la più facile
            da mandare dai parenti per qualche giorno.
            Di notte mi mancava la mamma e a volte piangevo perché la volevo con me.
            Però riuscivo a restare. I nonni e gli zii mi volevano bene.
          </p>
          <p>
            Guardavo la nonna davanti alla toeletta e cercavo di truccarmi come lei.
            A quanto pare, basta poco perché l’ammirazione diventi una routine di bellezza.
          </p>
          <p>
            Quando mia madre aveva ancora bisogno di una mano, mi fermavo anche
            da una zia più anziana o da una più giovane.
            Cambiava l’indirizzo. Non il mio posto in casa.
            Anche lì diventavo la più piccola.
          </p>
          <p>
            Ripensando a quegli anni, ricordo quanto mi mancasse mia madre.
            E ricordo anche quante persone mi abbiano fatto posto nella loro casa.
          </p>
          <div className="story-detail-tags" role="group" aria-label="Temi del ricordo">
            {tags.map((tag) => <span key={tag}>{tag}</span>)}
          </div>
        </article>

        <figure className="story-detail-figure">
          <Image
            src="/media/esther/childhood-garden.jpg"
            alt="Esther Cho da bambina, sorridente in un giardino"
            width={1800} height={1350} sizes="(max-width: 899px) 100vw, 42vw" priority
          />
          <figcaption>
            Fotografia dell’archivio di famiglia · Esther Cho da bambina.
            Il luogo non è stato identificato come una delle case dei parenti descritte nel racconto.
          </figcaption>
        </figure>
      </section>

      <section className="story-detail-note">
        <div className="container story-detail-note-inner">
          <p className="story-detail-kicker">NOTA D’ARCHIVIO</p>
          <p>
            Questo racconto si basa soltanto sui ricordi di famiglia annotati da Esther.
            Luoghi e legami sono descritti nei limiti di ciò che le testimonianze permettono.
            I dettagli non verificati restano fuori.
          </p>
        </div>
      </section>

      <section className="container story-detail-next" aria-labelledby="next-story-title">
        <p className="story-detail-kicker">DALLA RACCOLTA</p>
        <h2 id="next-story-title">Di nuovo in cortile, con il pigiama pulito</h2>
        <p>Il prossimo ricordo d’infanzia è ancora in fase di verifica prima della pubblicazione.</p>
        <Link href="/it/stories/" className="story-detail-link">
          Torna alla raccolta
        </Link>
      </section>
    </main>
  );
}
