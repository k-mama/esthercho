import Image from "next/image";
import Link from "next/link";
import { ChildhoodHomeStory } from "@/components/childhood-home-story";
import { childhoodPageCopy } from "@/content/childhood-page-copy";
import { localizedHref, type SiteLocale } from "@/config/languages";

const labels: Record<SiteLocale, {
  intro: string; child: string; childPhoto: string;

}> = {
  en: {intro:"THE ALBUM OPENS",child:"THE CHILD",childPhoto:"Esther Cho as a child"},
  ko: {intro:"앨범을 펼치면",child:"그때의 아이",childPhoto:"어린 시절의 조성연"},
  de: {intro:"DAS ALBUM ÖFFNEN",child:"DAS KIND",childPhoto:"Esther Cho als Kind"},
  es: {intro:"ABRIR EL ÁLBUM",child:"LA NIÑA",childPhoto:"Esther Cho de niña"},
  fr: {intro:"OUVRIR L’ALBUM",child:"L’ENFANT",childPhoto:"Esther Cho enfant"},
  it: {intro:"APRIRE L’ALBUM",child:"LA BAMBINA",childPhoto:"Esther Cho da bambina"},
  ja: {intro:"アルバムを開くと",child:"あの頃の子ども",childPhoto:"幼い頃のエスター・チョー"},
  "pt-br": {intro:"ABRINDO O ÁLBUM",child:"A CRIANÇA",childPhoto:"Esther Cho quando era menina"},
  "zh-cn": {intro:"翻开相册",child:"照片里的孩子",childPhoto:"童年的 Esther Cho"},
  "zh-tw": {intro:"翻開相簿",child:"照片裡的孩子",childPhoto:"童年的 Esther Cho"}
};

/** Single narrative sequence for the original site and all six other translations.
 * Shared structure prevents the personal memoir being shortened to generic
 * summaries or duplicated above the photographic sequence.
 */
export function ChildhoodArchiveSections({locale}:{locale:SiteLocale}) {
  const t=childhoodPageCopy[locale];
  const label=labels[locale];

  return <>
    <ChildhoodHomeStory locale={locale}/>

    {(locale === "ko" || locale === "en") && (
      <section id="cheongdam-family-portrait" className="childhood-family-portrait" aria-labelledby="cheongdam-family-portrait-title">
        <div className="container childhood-family-portrait-inner">
          <div className="childhood-family-portrait-heading">
            <p className="childhood-kicker">{locale === "ko" ? "청담동 · 가족의 기억" : "CHEONGDAM-DONG · FAMILY MEMORY"}</p>
            <h2 id="cheongdam-family-portrait-title">{locale === "ko" ? "집 앞에서, 우리가 함께 있던 날" : "Together, in Front of Our House"}</h2>
            <p>{locale === "ko"
              ? "아버지와 어머니, 우리 삼 남매가 청담동 집 앞에 서 있다. 넓은 유리창과 돌로 쌓은 벽, 현관 앞 계단까지 함께 남아 있다. 내가 어린 시절을 보냈던 집이다."
              : "My parents, my two younger brothers, and I stand in front of our house in Cheongdam-dong. The wide windows, stone wall, and front steps are there, too. This is where I spent my childhood."}</p>
          </div>
          <figure className="childhood-family-portrait-figure">
            <Image
              src="/media/esther/cheongdam-family-portrait-edited-20261121.webp"
              width={1535}
              height={1025}
              sizes="(max-width: 850px) 94vw, 1100px"
              alt={locale === "ko"
                ? "서울 청담동 집 앞에 있는 조성연 작가 가족의 옛 사진을 바탕으로 만든 편집 이미지. 부모님과 삼 남매가 현관 앞에 서 있다."
                : "Digitally edited recreation based on a childhood family photograph outside Esther Cho's home in Cheongdam-dong, Seoul."}
            />
            <figcaption>{locale === "ko"
              ? "실제 가족사진을 바탕으로 두 사람을 제외해 AI로 디지털 재구성한 편집 이미지입니다. 세부 모습은 원본과 다를 수 있습니다."
              : "An AI-assisted digital edit based on the original family photograph, with two additional people removed. Some details may differ from the original."}</figcaption>
          </figure>
          <Link href={localizedHref(locale, "/stories/back-to-the-yard-in-clean-pajamas")} className="childhood-family-portrait-story-link">
            {locale === "ko" ? "04 · 깨끗한 잠옷을 입고 다시 마당으로 읽기" : "Read Story 04 · Back to the Yard in Clean Pajamas"}
            <span aria-hidden="true"> →</span>
          </Link>
        </div>
      </section>
    )}


    <section className="childhood-garden" aria-labelledby="childhood-garden-title">
      <div className="container childhood-garden-inner">
        <figure className="childhood-garden-figure">
          <Image
            src="/media/esther/childhood-garden.jpg"
            alt={label.childPhoto}
            width={1800} height={1350}
            sizes="(max-width: 899px) 100vw, 64vw"
          />
          <figcaption>{label.childPhoto}</figcaption>
        </figure>
        <div className="childhood-garden-copy">
          <p className="childhood-kicker">{label.child}</p>
          <h2 id="childhood-garden-title">{t.gardenTitle}</h2>
          <p>{t.gardenText}</p>
        </div>
      </div>
    </section>

  </>;
}
