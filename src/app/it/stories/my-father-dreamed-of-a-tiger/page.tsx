import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import "@/app/stories/my-father-dreamed-of-a-tiger/story-detail.css";

const url = "https://esthercho.pages.dev/it/stories/my-father-dreamed-of-a-tiger/";
const original = "https://esthercho.pages.dev/stories/my-father-dreamed-of-a-tiger/";
const portuguese = "https://esthercho.pages.dev/pt-br/stories/my-father-dreamed-of-a-tiger/";
const spanish = "https://esthercho.pages.dev/es/stories/my-father-dreamed-of-a-tiger/";
const french = "https://esthercho.pages.dev/fr/stories/my-father-dreamed-of-a-tiger/";

export const metadata: Metadata = {
  title: "Mio padre sognò una tigre · Esther Cho",
  description: "Un sogno con una tigre, la nascita di una bambina e una battuta di famiglia rimasta nella memoria.",
  alternates: {
    canonical: url,
    languages: { en: original, de: "https://esthercho.pages.dev/de/stories/my-father-dreamed-of-a-tiger/", "pt-BR": portuguese, es: spanish, fr: french, it: url, ja: "https://esthercho.pages.dev/ja/stories/my-father-dreamed-of-a-tiger/", "x-default": original },
  },
  openGraph: {
    type: "article", url, locale: "it_IT",
    title: "Mio padre sognò una tigre · Esther Cho",
    description: "Una tigre sognata, una bambina e una battuta rimasta in famiglia.",
  },
};

const tags = ["Padre", "Inizi", "Famiglia", "Infanzia"];

export default function ItalianTigerDreamPage() {
  return (
    <main className="story-detail-page" lang="it">
      <section className="container story-detail-hero" aria-labelledby="story-title">
        <Link href="/it/stories/" className="story-detail-back">Storie</Link>
        <p className="story-detail-kicker">STORIA 01 · GLI INIZI</p>
        <h1 id="story-title">Mio padre sognò una tigre</h1>
        <p className="story-detail-deck">Prima della nascita di Esther, suo padre sognò una tigre.</p>
      </section>

      <section className="container story-detail-grid">
        <article className="story-detail-copy">
          <p className="story-detail-opening">Prima che nascessi, mio padre sognò una tigre.</p>
          <p>Nacque una bambina.</p>
          <blockquote>«Dev’essere stato un gatto.»</blockquote>
          <p>
            Per ora, Esther ha annotato soltanto questo frammento.
            È breve, preciso, e basta ad aprire l’archivio senza fingere
            che siano tornati alla memoria altri dettagli.
          </p>
          <p>
            Qui alcune storie restano così. Un ricordo può cominciare in tre righe
            e crescere più avanti, quando riaffiora qualcos’altro.
            Ma quelle prime righe rimangono parte del racconto.
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
            Non è una ricostruzione del sogno.
          </figcaption>
        </figure>
      </section>

      <section className="story-detail-note">
        <div className="container story-detail-note-inner">
          <p className="story-detail-kicker">NOTA D’ARCHIVIO</p>
          <p>
            Questa raccolta di ricordi continua a crescere.
            Esther potrà aggiungere nuovi particolari quando le torneranno in mente.
            Le vecchie fotografie e le reinterpretazioni successive sono indicate
            come materiali distinti.
          </p>
        </div>
      </section>

      <section className="container story-detail-next" aria-labelledby="next-story-title">
        <p className="story-detail-kicker">LA STORIA SUCCESSIVA</p>
        <h2 id="next-story-title">La più piccola di ogni casa</h2>
        <p>A casa era la figlia maggiore. Nelle case degli altri diventava sempre la più piccola.</p>
        <Link href="/it/stories/the-youngest-daughter-in-every-house/" className="story-detail-link">
          Leggi la storia successiva
        </Link>
      </section>
    </main>
  );
}
