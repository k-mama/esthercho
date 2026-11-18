import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import "@/app/stories/my-father-dreamed-of-a-tiger/story-detail.css";

const url = "https://esthercho.pages.dev/ja/stories/the-youngest-daughter-in-every-house/";
const original = "https://esthercho.pages.dev/stories/the-youngest-daughter-in-every-house/";
const portuguese = "https://esthercho.pages.dev/pt-br/stories/the-youngest-daughter-in-every-house/";
const spanish = "https://esthercho.pages.dev/es/stories/the-youngest-daughter-in-every-house/";
const french = "https://esthercho.pages.dev/fr/stories/the-youngest-daughter-in-every-house/";
const italian = "https://esthercho.pages.dev/it/stories/the-youngest-daughter-in-every-house/";

export const metadata: Metadata = {
  title: "どの家でも末娘 · Esther Cho",
  description: "自分の家では長女、親戚の家ではいつも末娘。エスター・チョーが綴った幼い頃の記憶。",
  alternates: {
    canonical: url,
    languages: {
      en: original, "pt-BR": portuguese, es: spanish, fr: french,
      it: italian, ja: url, "x-default": original,
    },
  },
  openGraph: {
    type: "article", url, locale: "ja_JP",
    title: "どの家でも末娘 · Esther Cho",
    description: "長女だった私が、親戚の家では末娘になった頃の話。",
  },
};

const tags = ["母", "祖母", "おばたち", "家族", "家"];

export default function JapaneseYoungestDaughterPage() {
  return (
    <main className="story-detail-page" lang="ja">
      <section className="container story-detail-hero" aria-labelledby="story-title">
        <Link href="/ja/stories/" className="story-detail-back">物語に戻る</Link>
        <p className="story-detail-kicker">物語 02 · 家族</p>
        <h1 id="story-title">どの家でも末娘</h1>
        <p className="story-detail-deck">
          自分の家では長女でした。けれど、ほかの家ではいつも末娘になりました。
        </p>
      </section>

      <section className="container story-detail-grid">
        <article className="story-detail-copy">
          <p className="story-detail-opening">自分の家では、私は長女でした。</p>
          <p>
            父はきょうだいのいちばん上で、私は父の最初の子ども。
            祖父母にとっては、初めての女の孫でした。
            そのあと、ひとつ違いの弟が二人生まれました。
          </p>
          <p>
            母は小さな子どもを三人抱えていました。
            母の両親は早くに亡くなっていたので、
            助けが必要になっても、母方の祖父母を頼ることはできませんでした。
          </p>
          <p>
            よく預けられたのは、近くに住むおじの家でした。
            四角い中庭と花壇のある、大きな韓屋（ハノク）です。
            祖母と曽祖母、そしておじたちがいました。
            おじの一人は、まだ高校生でした。
            建物が二つに分かれていたことと、寝室の時計の音を覚えています。
            カチ、カチ、カチ。
          </p>
          <p>
            私は弟たちよりおとなしい子でした。
            だから、何日か親戚に預けるには、いちばん手がかからなかったのかもしれません。
            夜になると母が恋しくて、泣くこともありました。
            それでも、そこで過ごせました。
            祖父母もおじたちも、かわいがってくれたからです。
          </p>
          <p>
            祖母が鏡台の前でお化粧をするのを見て、私もまねをしました。
            憧れというのは、あっという間に美容の習慣になるものらしいです。
          </p>
          <p>
            母がまた誰かの手を借りなければならないときは、
            年上のおばや年下のおばの家にも泊まりました。
            行き先は変わっても、家の中での私の立場は変わりません。
            そこでも私は、末娘になったのです。
          </p>
          <p>
            あの頃を思い出すと、母が恋しかったことを覚えています。
            そして、私のために居場所をつくってくれた人たちのことも。
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
            写真の場所が、本文に登場する親戚の家のどれかだとは確認されていません。
          </figcaption>
        </figure>
      </section>

      <section className="story-detail-note">
        <div className="container story-detail-note-inner">
          <p className="story-detail-kicker">記録について</p>
          <p>
            この物語は、エスターが書き残した家族の記憶だけをもとにしています。
            家や親族関係についても、記録で確かめられる範囲にとどめました。
            確認できないことは書き足していません。
          </p>
        </div>
      </section>

      <section className="container story-detail-next" aria-labelledby="next-story-title">
        <p className="story-detail-kicker">次の物語について</p>
        <h2 id="next-story-title">きれいなパジャマで庭へ戻った日</h2>
        <p>次の子ども時代の記憶は、公開前に資料を確かめているところです。</p>
        <Link href="/ja/stories/" className="story-detail-link">物語の一覧へ戻る</Link>
      </section>
    </main>
  );
}
