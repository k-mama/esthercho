import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import "@/app/stories/my-father-dreamed-of-a-tiger/story-detail.css";

const url = "https://esthercho.pages.dev/pt-br/stories/my-father-dreamed-of-a-tiger/";
const original = "https://esthercho.pages.dev/stories/my-father-dreamed-of-a-tiger/";
export const metadata: Metadata = {
  title: "Meu pai sonhou com um tigre · Esther Cho",
  description: "Um sonho com um tigre, o nascimento de uma menina e uma brincadeira que ficou na história da família.",
  alternates: {
    canonical: url,
    languages: { en: original, "pt-BR": url, es: "https://esthercho.pages.dev/es/stories/my-father-dreamed-of-a-tiger/", fr: "https://esthercho.pages.dev/fr/stories/my-father-dreamed-of-a-tiger/", it: "https://esthercho.pages.dev/it/stories/my-father-dreamed-of-a-tiger/", "x-default": original },
  },
  openGraph: {
    type: "article", url, locale: "pt_BR",
    title: "Meu pai sonhou com um tigre · Esther Cho",
    description: "Um sonho com um tigre, o nascimento de uma menina e uma brincadeira de família.",
  },
};
const tags = ["Pai", "Começo", "Família", "Infância"];

export default function TigerDreamPtBr() {
  return (
    <main className="story-detail-page" lang="pt-BR">
      <section className="container story-detail-hero" aria-labelledby="story-title">
        <Link href="/pt-br/stories/" className="story-detail-back">Histórias</Link>
        <p className="story-detail-kicker">HISTÓRIA 01 · O COMEÇO</p>
        <h1 id="story-title">Meu pai sonhou com um tigre</h1>
        <p className="story-detail-deck">Antes de Esther nascer, seu pai sonhou com um tigre.</p>
      </section>

      <section className="container story-detail-grid">
        <article className="story-detail-copy">
          <p className="story-detail-opening">Antes de eu nascer, meu pai sonhou com um tigre.</p>
          <p>O bebê que chegou era uma menina.</p>
          <blockquote>“Deve ter sido um gato.”</blockquote>
          <p>
            Por enquanto, esse é todo o trecho que Esther registrou. É curto, tem seus detalhes
            e basta para abrir o arquivo de lembranças, sem fingir que ela se recorda de mais alguma coisa.
          </p>
          <p>
            É assim que algumas histórias ficam aqui. Uma lembrança pode começar com três linhas.
            Mais tarde, se surgir outro detalhe, ela cresce. Mas o primeiro registro continua fazendo parte da história.
          </p>
          <div className="story-detail-tags" role="group" aria-label="Temas desta lembrança">
            {tags.map((tag) => <span key={tag}>{tag}</span>)}
          </div>
        </article>
        <figure className="story-detail-figure">
          <Image src="/media/esther/childhood-garden.jpg"
            alt="Esther Cho sorrindo no jardim quando criança"
            width={1800} height={1350} sizes="(max-width: 899px) 100vw, 42vw" priority />
          <figcaption>
            Fotografia do arquivo de família · Esther Cho na infância.
            Esta fotografia não é uma reconstituição do sonho.
          </figcaption>
        </figure>
      </section>
      <section className="story-detail-note">
        <div className="container story-detail-note-inner">
          <p className="story-detail-kicker">NOTA DO ARQUIVO</p>
          <p>
            A seção Histórias reúne lembranças que podem ganhar novos detalhes com o tempo.
            Fotografias antigas e interpretações feitas posteriormente são identificadas como materiais diferentes.
          </p>
        </div>
      </section>
      <section className="container story-detail-next" aria-labelledby="next-story-title">
        <p className="story-detail-kicker">A PRÓXIMA HISTÓRIA</p>
        <h2 id="next-story-title">A caçula em cada casa</h2>
        <p>Em casa, ela era a filha mais velha. Na casa dos outros, acabava sendo a caçula.</p>
        <Link href="/pt-br/stories/the-youngest-daughter-in-every-house/" className="story-detail-link">
          Ler a próxima história
        </Link>
      </section>
    </main>
  );
}
