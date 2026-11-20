import Image from "next/image";
import Link from "next/link";
import { ChildhoodHomeStory } from "@/components/childhood-home-story";
import { childhoodPageCopy } from "@/content/childhood-page-copy";
import { localizedHref, type SiteLocale } from "@/config/languages";

const labels: Record<SiteLocale, {
  intro: string; child: string; childPhoto: string;
  memory: string; source: string; storiesLink: string;
}> = {
  en: {intro:"THE ALBUM OPENS",child:"THE CHILD",childPhoto:"Esther Cho as a child",memory:"BEYOND THE PHOTOGRAPH",source:"WHAT IS ORIGINAL",storiesLink:"Read the stories"},
  ko: {intro:"앨범을 펼치면",child:"그때의 아이",childPhoto:"어린 시절의 조성연",memory:"사진 밖의 시간",source:"사진은 사진대로",storiesLink:"이야기 읽기"},
  de: {intro:"DAS ALBUM ÖFFNEN",child:"DAS KIND",childPhoto:"Esther Cho als Kind",memory:"JENSEITS DER FOTOS",source:"ZU DEN ORIGINALEN",storiesLink:"Die Geschichten lesen"},
  es: {intro:"ABRIR EL ÁLBUM",child:"LA NIÑA",childPhoto:"Esther Cho de niña",memory:"FUERA DE LA FOTO",source:"LOS ORIGINALES",storiesLink:"Leer las historias"},
  fr: {intro:"OUVRIR L’ALBUM",child:"L’ENFANT",childPhoto:"Esther Cho enfant",memory:"HORS DU CADRE",source:"LES ORIGINAUX",storiesLink:"Lire les récits"},
  it: {intro:"APRIRE L’ALBUM",child:"LA BAMBINA",childPhoto:"Esther Cho da bambina",memory:"OLTRE LE FOTO",source:"LE FOTO ORIGINALI",storiesLink:"Leggi le storie"},
  ja: {intro:"アルバムを開くと",child:"あの頃の子ども",childPhoto:"幼い頃のエスター・チョー",memory:"写真の外の時間",source:"写真の記録",storiesLink:"物語を読む"},
  "pt-br": {intro:"ABRINDO O ÁLBUM",child:"A CRIANÇA",childPhoto:"Esther Cho quando era menina",memory:"FORA DA FOTO",source:"AS IMAGENS ORIGINAIS",storiesLink:"Ler as histórias"},
  "zh-cn": {intro:"翻开相册",child:"照片里的孩子",childPhoto:"童年的 Esther Cho",memory:"照片之外",source:"原始照片",storiesLink:"阅读故事"},
  "zh-tw": {intro:"翻開相簿",child:"照片裡的孩子",childPhoto:"童年的 Esther Cho",memory:"照片之外",source:"原始照片",storiesLink:"閱讀故事"}
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

    <section className="childhood-fragments" aria-labelledby="childhood-fragments-title">
      <div className="container childhood-fragments-inner">
        <div>
          <p className="childhood-kicker">{label.memory}</p>
          <h2 id="childhood-fragments-title">{t.fragmentsTitle}</h2>
        </div>
        <div className="childhood-fragments-copy"><p>{t.fragmentsText}</p></div>
      </div>
    </section>

    <section className="childhood-archive-principle" aria-labelledby="childhood-principle-title">
      <div className="container childhood-principle-inner">
        <div>
          <p className="childhood-kicker">{label.source}</p>
          <h2 id="childhood-principle-title">{t.photosTitle}</h2>
        </div>
        <div className="childhood-principle-copy">
          <p>{t.photosText}</p>
          <Link href={localizedHref(locale,"/stories")} className="childhood-link">
            {label.storiesLink} ↗
          </Link>
        </div>
      </div>
    </section>

  </>;
}
