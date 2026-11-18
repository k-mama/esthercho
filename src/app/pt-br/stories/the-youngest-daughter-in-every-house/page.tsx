import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import "@/app/stories/my-father-dreamed-of-a-tiger/story-detail.css";

const url = "https://esthercho.pages.dev/pt-br/stories/the-youngest-daughter-in-every-house/";
const original = "https://esthercho.pages.dev/stories/the-youngest-daughter-in-every-house/";
export const metadata: Metadata = {
  title: "A caçula em cada casa · Esther Cho",
  description: "Em sua casa, Esther era a filha mais velha. Nas casas dos familiares, muitas vezes era a caçula.",
  alternates: {
    canonical: url,
    languages: { en: original, "pt-BR": url, es: "https://esthercho.pages.dev/es/stories/the-youngest-daughter-in-every-house/", fr: "https://esthercho.pages.dev/fr/stories/the-youngest-daughter-in-every-house/", "x-default": original },
  },
  openGraph: {
    type: "article", url, locale: "pt_BR",
    title: "A caçula em cada casa · Esther Cho",
    description: "A filha mais velha em casa e a caçula nos outros lares que a acolheram.",
  },
};
const tags = ["Mãe", "Avó", "Tias", "Família", "Casa"];

export default function YoungestDaughterPtBr() {
  return (
    <main className="story-detail-page" lang="pt-BR">
      <section className="container story-detail-hero" aria-labelledby="story-title">
        <Link href="/pt-br/stories/" className="story-detail-back">Histórias</Link>
        <p className="story-detail-kicker">HISTÓRIA 02 · FAMÍLIA</p>
        <h1 id="story-title">A caçula em cada casa</h1>
        <p className="story-detail-deck">
          Em casa, eu era a filha mais velha. Na casa dos outros, acabava sendo a caçula.
        </p>
      </section>
      <section className="container story-detail-grid">
        <article className="story-detail-copy">
          <p className="story-detail-opening">Em casa, eu era a filha mais velha.</p>

          <p>
            Meu pai era o filho mais velho da família, e eu fui seu primeiro bebê —
            a primeira neta. Depois nasceram meus dois irmãos mais novos, com um ano de diferença entre eles.
          </p>
          <p>
            Minha mãe tinha três crianças pequenas para cuidar. Os pais dela haviam morrido cedo.
            Quando precisava de ajuda, não podia recorrer aos meus avós maternos.
          </p>
          <p>
            Um dos lugares onde eu costumava ficar era a casa de um tio, ali perto.
            Era um hanok grande, uma casa tradicional coreana, com um pátio quadrado e um canteiro de flores.
            Minha avó e minha bisavó estavam lá, assim como meus tios.
            Um deles ainda cursava o ensino médio. Lembro de duas construções separadas
            e de um relógio no quarto: tic, tic, tic.
          </p>
          <p>
            Eu era mais quieta que meus irmãos. Provavelmente, era a criança mais fácil
            de mandar para a casa de alguém por alguns dias.
            À noite, sentia falta da minha mãe e às vezes chorava por ela, mas conseguia ficar.
            Meus avós e meus tios me queriam bem.
          </p>
          <p>
            Eu observava minha avó diante da penteadeira e imitava a maquiagem dela.
            Pelo visto, a admiração vira rotina de beleza num instante.
          </p>
          <p>
            Quando minha mãe precisava de mais ajuda, eu também ficava na casa de uma tia mais velha
            ou de outra mais nova. O endereço mudava. Meu lugar dentro da casa, não.
            Ali também eu me tornava a caçula.
          </p>
          <p>
            Hoje, quando penso naquela época, lembro da saudade que sentia da minha mãe.
            Também me lembro de quantas pessoas abriram espaço para mim.
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
            A imagem não foi identificada como sendo de uma das casas dos parentes mencionadas neste relato.
          </figcaption>
        </figure>
      </section>
      <section className="story-detail-note">
        <div className="container story-detail-note-inner">
          <p className="story-detail-kicker">NOTA DO ARQUIVO</p>
          <p>
            Este relato foi escrito apenas a partir das lembranças familiares registradas por Esther.
            Casas e relações são mencionadas somente quando há informações no arquivo.
            Detalhes não confirmados ficam de fora.
          </p>
        </div>
      </section>
      <section className="container story-detail-next" aria-labelledby="next-story-title">
        <p className="story-detail-kicker">NA SEQUÊNCIA</p>
        <h2 id="next-story-title">De pijama limpinho, de volta ao quintal</h2>
        <p>O próximo episódio da infância está passando por conferência das fontes antes de ser publicado.</p>
        <Link href="/pt-br/stories/" className="story-detail-link">Voltar à coleção</Link>
      </section>
    </main>
  );
}
