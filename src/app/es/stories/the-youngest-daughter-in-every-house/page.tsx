import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import "@/app/stories/my-father-dreamed-of-a-tiger/story-detail.css";

const url = "https://esthercho.pages.dev/es/stories/the-youngest-daughter-in-every-house/";
const original = "https://esthercho.pages.dev/stories/the-youngest-daughter-in-every-house/";
const portuguese = "https://esthercho.pages.dev/pt-br/stories/the-youngest-daughter-in-every-house/";

export const metadata: Metadata = {
  title: "La hija menor en cada casa · Esther Cho",
  description: "En su propia casa, Esther era la hija mayor. En las casas de sus familiares, terminaba siendo la menor.",
  alternates: {
    canonical: url,
    languages: { en: original, es: url, "pt-BR": portuguese, fr: "https://esthercho.pages.dev/fr/stories/the-youngest-daughter-in-every-house/", it: "https://esthercho.pages.dev/it/stories/the-youngest-daughter-in-every-house/", ja: "https://esthercho.pages.dev/ja/stories/the-youngest-daughter-in-every-house/", "x-default": original },
  },
  openGraph: {
    type: "article", url, locale: "es_419",
    title: "La hija menor en cada casa · Esther Cho",
    description: "La hija mayor en casa, y la menor en las casas donde también la cuidaron.",
  },
};

const tags = ["Madre", "Abuela", "Tías", "Familia", "Casa"];

export default function YoungestDaughterSpanish() {
  return (
    <main className="story-detail-page" lang="es">
      <section className="container story-detail-hero" aria-labelledby="story-title">
        <Link href="/es/stories/" className="story-detail-back">Historias</Link>
        <p className="story-detail-kicker">HISTORIA 02 · FAMILIA</p>
        <h1 id="story-title">La hija menor en cada casa</h1>
        <p className="story-detail-deck">
          En mi casa era la hija mayor. En otras casas, siempre terminaba siendo la menor.
        </p>
      </section>

      <section className="container story-detail-grid">
        <article className="story-detail-copy">
          <p className="story-detail-opening">En mi casa, yo era la hija mayor.</p>
          <p>
            Mi padre era el hijo mayor de su familia, y yo fui su primera hija,
            la primera nieta. Después nacieron mis dos hermanos menores,
            con un año de diferencia entre ellos.
          </p>
          <p>
            Mi madre tenía tres niños muy pequeños a su cuidado.
            Sus padres habían fallecido cuando ella era joven, así que no podía acudir
            a mis abuelos maternos cuando necesitaba ayuda.
          </p>
          <p>
            Uno de los lugares donde me quedaba a menudo era la casa de un tío que vivía cerca.
            Era un hanok grande, una casa tradicional coreana, con un patio cuadrado y un espacio sembrado de flores.
            Allí estaban mi abuela, mi bisabuela y mis tíos.
            Uno de ellos todavía estaba en la escuela secundaria.
            Recuerdo dos construcciones separadas y un reloj en el dormitorio que sonaba:
            tic, tic, tic.
          </p>
          <p>
            Yo era más tranquila que mis hermanos pequeños. Quizá por eso resultaba más fácil
            enviarme unos días a casa de los parientes.
            Por las noches extrañaba a mi madre y a veces lloraba por ella,
            pero podía quedarme. Mis abuelos y mis tíos me querían mucho.
          </p>
          <p>
            Veía a mi abuela arreglarse frente al tocador e imitaba cómo se maquillaba.
            Por lo visto, la admiración puede convertirse muy rápido en una rutina de belleza.
          </p>
          <p>
            Cuando mi madre necesitaba más ayuda, también me quedaba en casa de una tía mayor
            o de una tía más joven. Cambiaba la dirección, pero no mi lugar en la familia.
            Allí también pasaba a ser la hija menor.
          </p>
          <p>
            Cuando pienso en esos años, recuerdo cuánto extrañaba a mi madre.
            También recuerdo cuántas personas me hicieron un lugar en sus casas.
          </p>

          <div className="story-detail-tags" role="group" aria-label="Temas del recuerdo">
            {tags.map((tag) => <span key={tag}>{tag}</span>)}
          </div>
        </article>

        <figure className="story-detail-figure">
          <Image
            src="/media/esther/childhood-garden.jpg"
            alt="Esther Cho de niña, sonriendo en un jardín"
            width={1800} height={1350} sizes="(max-width: 899px) 100vw, 42vw" priority
          />
          <figcaption>
            Fotografía del archivo familiar · Esther Cho de niña.
            No se ha identificado este lugar como una de las casas de parientes mencionadas en el relato.
          </figcaption>
        </figure>
      </section>

      <section className="story-detail-note">
        <div className="container story-detail-note-inner">
          <p className="story-detail-kicker">NOTA DEL ARCHIVO</p>
          <p>
            Este relato parte únicamente de los recuerdos familiares que Esther dejó registrados.
            Los lugares y los vínculos se describen hasta donde los datos permiten.
            No se han añadido detalles que no estén confirmados.
          </p>
        </div>
      </section>

      <section className="container story-detail-next" aria-labelledby="next-story-title">
        <p className="story-detail-kicker">EN LA COLECCIÓN</p>
        <h2 id="next-story-title">De vuelta al patio con el pijama limpio</h2>
        <p>La siguiente escena de la infancia todavía está en revisión antes de publicarse.</p>
        <Link href="/es/stories/" className="story-detail-link">Volver a las historias</Link>
      </section>
    </main>
  );
}
