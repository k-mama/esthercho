import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import "@/app/stories/my-father-dreamed-of-a-tiger/story-detail.css";

const url = "https://esthercho.pages.dev/de/stories/my-father-dreamed-of-a-tiger/";
const original = "https://esthercho.pages.dev/stories/my-father-dreamed-of-a-tiger/";
const portuguese = "https://esthercho.pages.dev/pt-br/stories/my-father-dreamed-of-a-tiger/";
const spanish = "https://esthercho.pages.dev/es/stories/my-father-dreamed-of-a-tiger/";
const french = "https://esthercho.pages.dev/fr/stories/my-father-dreamed-of-a-tiger/";
const italian = "https://esthercho.pages.dev/it/stories/my-father-dreamed-of-a-tiger/";
const japanese = "https://esthercho.pages.dev/ja/stories/my-father-dreamed-of-a-tiger/";

export const metadata: Metadata = {
  title: "Mein Vater träumte von einem Tiger · Esther Cho",
  description: "Ein Tiger im Traum, ein Mädchen, das zur Welt kam, und ein kleiner Scherz, der in der Familie blieb.",
  alternates: {
    canonical: url,
    languages: {
      en: original, de: url, "pt-BR": portuguese, es: spanish,
      fr: french, it: italian, ja: japanese, "x-default": original,
    },
  },
  openGraph: {
    type: "article", url, locale: "de_DE",
    title: "Mein Vater träumte von einem Tiger · Esther Cho",
    description: "Der Traum vom Tiger, die Geburt eines Mädchens und ein Satz aus der Familie.",
  },
};

const tags = ["Vater", "Anfang", "Familie", "Kindheit"];

export default function GermanTigerDreamStory() {
  return (
    <main className="story-detail-page" lang="de">
      <section className="container story-detail-hero" aria-labelledby="story-title">
        <Link href="/de/stories/" className="story-detail-back">Geschichten</Link>
        <p className="story-detail-kicker">GESCHICHTE 01 · ANFANG</p>
        <h1 id="story-title">Mein Vater träumte von einem Tiger</h1>
        <p className="story-detail-deck">Noch vor Esthers Geburt träumte ihr Vater von einem Tiger.</p>
      </section>

      <section className="container story-detail-grid">
        <article className="story-detail-copy">
          <p className="story-detail-opening">Bevor ich geboren wurde, träumte mein Vater von einem Tiger.</p>
          <p>Das Kind, das zur Welt kam, war ein Mädchen.</p>
          <blockquote>„Dann muss es wohl eine Katze gewesen sein.“</blockquote>
          <p>
            Mehr hat Esther von dieser Erinnerung bislang nicht aufgeschrieben.
            Es sind nur wenige Zeilen, aber sie enthalten etwas Konkretes.
            Und sie reichen aus, um das Erinnerungsalbum zu beginnen,
            ohne so zu tun, als wüsste sie schon mehr.
          </p>
          <p>
            Manche Geschichten bleiben hier zunächst so stehen.
            Eine Erinnerung beginnt vielleicht mit drei Zeilen.
            Später kommt ein weiteres Detail hinzu.
            Die ersten Zeilen bleiben trotzdem Teil der Aufzeichnung.
          </p>
          <div className="story-detail-tags" role="group" aria-label="Stichwörter zu dieser Erinnerung">
            {tags.map((tag) => <span key={tag}>{tag}</span>)}
          </div>
        </article>

        <figure className="story-detail-figure">
          <Image src="/media/esther/childhood-garden.jpg"
            alt="Esther Cho als Kind, lächelnd in einem Garten"
            width={1800} height={1350} sizes="(max-width: 899px) 100vw, 42vw" priority />
          <figcaption>
            Foto aus dem Familienarchiv · Esther Cho als Kind.
            Das Foto stellt den Traum nicht nach.
          </figcaption>
        </figure>
      </section>

      <section className="story-detail-note">
        <div className="container story-detail-note-inner">
          <p className="story-detail-kicker">HINWEIS ZUM ARCHIV</p>
          <p>
            Dieses Erinnerungsalbum darf mit der Zeit wachsen.
            Wenn Esther ein weiteres Detail einfällt, kann sie es ergänzen.
            Alte Fotografien und spätere bildliche Neuinterpretationen
            werden dabei deutlich voneinander unterschieden.
          </p>
        </div>
      </section>

      <section className="container story-detail-next" aria-labelledby="next-story-title">
        <p className="story-detail-kicker">DIE NÄCHSTE GESCHICHTE</p>
        <h2 id="next-story-title">Überall die Jüngste</h2>
        <p>Zu Hause war sie die Älteste. Bei Verwandten wurde sie immer wieder zur Jüngsten.</p>
        <Link href="/de/stories/the-youngest-daughter-in-every-house/" className="story-detail-link">
          Nächste Geschichte lesen
        </Link>
      </section>
    </main>
  );
}
