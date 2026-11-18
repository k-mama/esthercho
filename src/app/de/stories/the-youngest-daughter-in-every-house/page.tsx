import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import "@/app/stories/my-father-dreamed-of-a-tiger/story-detail.css";

const url = "https://esthercho.pages.dev/de/stories/the-youngest-daughter-in-every-house/";
const original = "https://esthercho.pages.dev/stories/the-youngest-daughter-in-every-house/";
const portuguese = "https://esthercho.pages.dev/pt-br/stories/the-youngest-daughter-in-every-house/";
const spanish = "https://esthercho.pages.dev/es/stories/the-youngest-daughter-in-every-house/";
const french = "https://esthercho.pages.dev/fr/stories/the-youngest-daughter-in-every-house/";
const italian = "https://esthercho.pages.dev/it/stories/the-youngest-daughter-in-every-house/";
const japanese = "https://esthercho.pages.dev/ja/stories/the-youngest-daughter-in-every-house/";

export const metadata: Metadata = {
  title: "Überall die Jüngste · Esther Cho",
  description: "Zu Hause war Esther das älteste Kind, bei Verwandten wurde sie zur Jüngsten. Eine Kindheitserinnerung.",
  alternates: {
    canonical: url,
    languages: {
      en: original, de: url, "pt-BR": portuguese, es: spanish,
      fr: french, it: italian, ja: japanese, "x-default": original,
    },
  },
  openGraph: {
    type: "article", url, locale: "de_DE",
    title: "Überall die Jüngste · Esther Cho",
    description: "Die Älteste zu Hause und die Jüngste bei den Menschen, die sie mit großgezogen haben.",
  },
};

const tags = ["Mutter", "Großmutter", "Tanten", "Familie", "Zuhause"];

export default function GermanYoungestDaughterStory() {
  return (
    <main className="story-detail-page" lang="de">
      <section className="container story-detail-hero" aria-labelledby="story-title">
        <Link href="/de/stories/" className="story-detail-back">Geschichten</Link>
        <p className="story-detail-kicker">GESCHICHTE 02 · FAMILIE</p>
        <h1 id="story-title">Überall die Jüngste</h1>
        <p className="story-detail-deck">
          Zu Hause war ich die Älteste. In anderen Häusern war ich plötzlich die Jüngste.
        </p>
      </section>

      <section className="container story-detail-grid">
        <article className="story-detail-copy">
          <p className="story-detail-opening">Zu Hause war ich das älteste Kind.</p>
          <p>
            Mein Vater war der älteste Sohn seiner Familie, und ich war sein erstes Kind,
            die erste Enkelin. Danach kamen meine beiden jüngeren Brüder zur Welt,
            mit einem Jahr Abstand.
          </p>
          <p>
            Meine Mutter hatte drei sehr kleine Kinder zu versorgen.
            Ihre eigenen Eltern waren früh gestorben.
            Wenn sie Hilfe brauchte, konnte sie die Großeltern mütterlicherseits
            nicht einfach anrufen.
          </p>
          <p>
            Oft blieb ich bei einem Onkel, der in der Nähe wohnte.
            Er lebte in einem großen Hanok, einem traditionellen koreanischen Haus,
            mit einem quadratischen Innenhof und einem Blumenbeet.
            Meine Großmutter und meine Urgroßmutter waren dort, ebenso meine Onkel.
            Einer ging noch zur Schule, in die Oberstufe.
            Ich erinnere mich an zwei getrennte Gebäude und an eine Uhr im Schlafzimmer:
            tick, tick, tick.
          </p>
          <p>
            Ich war stiller als meine kleinen Brüder.
            Wahrscheinlich war ich deshalb am einfachsten für ein paar Tage
            bei Verwandten unterzubringen.
            Abends vermisste ich meine Mutter und weinte manchmal nach ihr.
            Aber ich konnte dortbleiben.
            Meine Großeltern und meine Onkel hatten mich sehr lieb.
          </p>
          <p>
            Ich sah meiner Großmutter zu, wenn sie vor ihrem Frisiertisch saß,
            und machte ihr Schminken nach.
            Offenbar wird aus Bewunderung ziemlich schnell ein Schönheitsritual.
          </p>
          <p>
            Wenn meine Mutter noch mehr Hilfe brauchte, wohnte ich auch
            für eine Weile bei einer älteren oder einer jüngeren Tante.
            Die Adresse wechselte. Meine Rolle im Haus nicht.
            Auch dort war ich die Jüngste.
          </p>
          <p>
            Wenn ich heute an diese Jahre denke, erinnere ich mich daran,
            wie sehr ich meine Mutter vermisst habe.
            Und daran, wie viele Menschen mir einen Platz in ihrem Zuhause gaben.
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
            Es ist nicht belegt, dass dieses Foto eines der Häuser der Verwandten zeigt.
          </figcaption>
        </figure>
      </section>

      <section className="story-detail-note">
        <div className="container story-detail-note-inner">
          <p className="story-detail-kicker">HINWEIS ZUM ARCHIV</p>
          <p>
            Diese Geschichte beruht nur auf den Familienerinnerungen, die Esther
            aufgeschrieben hat. Häuser und Verwandtschaftsverhältnisse werden nur
            so weit beschrieben, wie es die Aufzeichnungen erlauben.
            Unbestätigte Details bleiben weg.
          </p>
        </div>
      </section>

      <section className="container story-detail-next" aria-labelledby="next-story-title">
        <p className="story-detail-kicker">WEITERE ERINNERUNGEN</p>
        <h2 id="next-story-title">Im sauberen Schlafanzug zurück in den Hof</h2>
        <p>Die nächste Kindheitserinnerung wird vor der Veröffentlichung noch mit den Quellen abgeglichen.</p>
        <Link href="/de/stories/" className="story-detail-link">Zurück zu den Geschichten</Link>
      </section>
    </main>
  );
}
