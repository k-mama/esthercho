import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import "@/app/stories/my-father-dreamed-of-a-tiger/story-detail.css";

const url = "https://esthercho.pages.dev/es/stories/my-father-dreamed-of-a-tiger/";
const original = "https://esthercho.pages.dev/stories/my-father-dreamed-of-a-tiger/";
const portuguese = "https://esthercho.pages.dev/pt-br/stories/my-father-dreamed-of-a-tiger/";

export const metadata: Metadata = {
  title: "Mi padre soñó con un tigre · Esther Cho",
  description: "Un sueño con un tigre, el nacimiento de una niña y una broma familiar que quedó en la memoria.",
  alternates: {
    canonical: url,
    languages: { en: original, es: url, "pt-BR": portuguese, fr: "https://esthercho.pages.dev/fr/stories/my-father-dreamed-of-a-tiger/", "x-default": original },
  },
  openGraph: {
    type: "article", url, locale: "es_419",
    title: "Mi padre soñó con un tigre · Esther Cho",
    description: "Un sueño, una niña y una broma familiar que nadie olvidó.",
  },
};

const tags = ["Padre", "Comienzos", "Familia", "Infancia"];

export default function TigerDreamSpanish() {
  return (
    <main className="story-detail-page" lang="es">
      <section className="container story-detail-hero" aria-labelledby="story-title">
        <Link href="/es/stories/" className="story-detail-back">Historias</Link>
        <p className="story-detail-kicker">HISTORIA 01 · EL COMIENZO</p>
        <h1 id="story-title">Mi padre soñó con un tigre</h1>
        <p className="story-detail-deck">Antes de que Esther naciera, su padre soñó con un tigre.</p>
      </section>

      <section className="container story-detail-grid">
        <article className="story-detail-copy">
          <p className="story-detail-opening">Antes de que yo naciera, mi padre soñó con un tigre.</p>
          <p>Pero la bebé que llegó fue una niña.</p>
          <blockquote>“Debió ser un gato”.</blockquote>
          <p>
            Por ahora, esto es todo lo que Esther ha dejado registrado de ese recuerdo.
            Es breve, tiene sus detalles, y basta para abrir el archivo sin fingir que recuerda algo más.
          </p>
          <p>
            En este sitio, algunas historias quedan así. Un recuerdo puede empezar con tres líneas
            y crecer cuando aparece otro detalle. Esas primeras líneas siguen siendo parte de la historia.
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
            No es una recreación del sueño.
          </figcaption>
        </figure>
      </section>

      <section className="story-detail-note">
        <div className="container story-detail-note-inner">
          <p className="story-detail-kicker">NOTA DEL ARCHIVO</p>
          <p>
            Esta es una colección de recuerdos que sigue creciendo.
            Esther puede añadir detalles a medida que los recuerde.
            Las fotografías antiguas y las reinterpretaciones posteriores se identifican por separado.
          </p>
        </div>
      </section>

      <section className="container story-detail-next" aria-labelledby="next-story-title">
        <p className="story-detail-kicker">LA SIGUIENTE HISTORIA</p>
        <h2 id="next-story-title">La hija menor en cada casa</h2>
        <p>En su casa era la hija mayor. En otras casas, siempre terminaba siendo la menor.</p>
        <Link href="/es/stories/the-youngest-daughter-in-every-house/" className="story-detail-link">
          Leer la siguiente historia
        </Link>
      </section>
    </main>
  );
}
