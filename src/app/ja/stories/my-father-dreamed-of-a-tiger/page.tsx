import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import "@/app/stories/my-father-dreamed-of-a-tiger/story-detail.css";

const url = "https://esthercho.pages.dev/ja/stories/my-father-dreamed-of-a-tiger/";
const original = "https://esthercho.pages.dev/stories/my-father-dreamed-of-a-tiger/";
const portuguese = "https://esthercho.pages.dev/pt-br/stories/my-father-dreamed-of-a-tiger/";
const spanish = "https://esthercho.pages.dev/es/stories/my-father-dreamed-of-a-tiger/";
const french = "https://esthercho.pages.dev/fr/stories/my-father-dreamed-of-a-tiger/";
const italian = "https://esthercho.pages.dev/it/stories/my-father-dreamed-of-a-tiger/";

export const metadata: Metadata = {
  title: "父は虎の夢を見た · Esther Cho",
  description: "父が見た虎の夢、生まれた女の子、そして家族の小さな冗談。エスター・チョーの最初の記憶の断片。",
  alternates: {
    canonical: url,
    languages: {
      en: original, "pt-BR": portuguese, es: spanish, fr: french,
      it: italian, ja: url, "x-default": original,
    },
  },
  openGraph: {
    type: "article", url, locale: "ja_JP",
    title: "父は虎の夢を見た · Esther Cho",
    description: "父の虎の夢と、家族の小さな冗談。短いけれど確かな記録。",
  },
};

const tags = ["父", "はじまり", "家族", "子どもの頃"];

export default function JapaneseTigerDreamPage() {
  return (
    <main className="story-detail-page" lang="ja">
      <section className="container story-detail-hero" aria-labelledby="story-title">
        <Link href="/ja/stories/" className="story-detail-back">物語に戻る</Link>
        <p className="story-detail-kicker">物語 01 · はじまり</p>
        <h1 id="story-title">父は虎の夢を見た</h1>
        <p className="story-detail-deck">エスターが生まれる前、父は虎の夢を見ました。</p>
      </section>

      <section className="container story-detail-grid">
        <article className="story-detail-copy">
          <p className="story-detail-opening">私が生まれる前、父は虎の夢を見たそうです。</p>
          <p>生まれたのは、女の子でした。</p>
          <blockquote>「きっと猫だったんだね」</blockquote>
          <p>
            エスターが今のところ書き残しているのは、ここまでです。
            短くて、具体的な記憶の断片。まだ思い出していないことまで
            思い出したふりをしなくても、これだけで最初の一ページになります。
          </p>
          <p>
            このサイトでは、物語をこうした形で残すこともあります。
            たった三行の記憶に、あとから別の細部が加わるかもしれません。
            それでも、はじめの三行はそのまま記録の一部です。
          </p>
          <div className="story-detail-tags" role="group" aria-label="この物語に関する言葉">
            {tags.map((tag) => <span key={tag}>{tag}</span>)}
          </div>
        </article>

        <figure className="story-detail-figure">
          <Image
            src="/media/esther/childhood-garden.jpg"
            alt="庭でほほえむ、幼い頃のエスター・チョー"
            width={1800} height={1350} sizes="(max-width: 899px) 100vw, 42vw" priority
          />
          <figcaption>
            家族の記録写真 · 子どもの頃のエスター。
            この写真は、父が見た夢を再現したものではありません。
          </figcaption>
        </figure>
      </section>

      <section className="story-detail-note">
        <div className="container story-detail-note-inner">
          <p className="story-detail-kicker">記録について</p>
          <p>
            ここは、書き足されていく作家の記憶のアルバムです。
            新しいことを思い出したら、エスターはそのときに書き加えられます。
            古い記録写真と後年の再構成作品は、区別して紹介しています。
          </p>
        </div>
      </section>

      <section className="container story-detail-next" aria-labelledby="next-story-title">
        <p className="story-detail-kicker">次の物語</p>
        <h2 id="next-story-title">どの家でも末娘</h2>
        <p>自分の家では長女。でも、親戚の家に行くと、いつもいちばん下の子でした。</p>
        <Link href="/ja/stories/the-youngest-daughter-in-every-house/" className="story-detail-link">
          次の物語を読む
        </Link>
      </section>
    </main>
  );
}
