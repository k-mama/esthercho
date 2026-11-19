import Image from "next/image";
import Link from "next/link";
import { ChildhoodHomeStory } from "@/components/childhood-home-story";
import { childhoodPageCopy } from "@/content/childhood-page-copy";
import { localizedHref, type SiteLocale } from "@/config/languages";

const labels: Record<SiteLocale, {
  intro: string; child: string; childPhoto: string;
  memory: string; source: string; ending: string; storiesLink: string;
}> = {
  en: {intro:"THE ALBUM OPENS",child:"THE CHILD",childPhoto:"Esther Cho as a child",memory:"BEYOND THE PHOTOGRAPH",source:"WHAT IS ORIGINAL",ending:"ONE MORE PAGE",storiesLink:"Read the stories"},
  ko: {intro:"앨범을 펼치면",child:"그때의 아이",childPhoto:"어린 시절의 조성연",memory:"사진 밖의 시간",source:"사진은 사진대로",ending:"아직 남은 이야기",storiesLink:"이야기 읽기"},
  de: {intro:"DAS ALBUM ÖFFNEN",child:"DAS KIND",childPhoto:"Esther Cho als Kind",memory:"JENSEITS DER FOTOS",source:"ZU DEN ORIGINALEN",ending:"NOCH EINE SEITE",storiesLink:"Die Geschichten lesen"},
  es: {intro:"ABRIR EL ÁLBUM",child:"LA NIÑA",childPhoto:"Esther Cho de niña",memory:"FUERA DE LA FOTO",source:"LOS ORIGINALES",ending:"UNA PÁGINA MÁS",storiesLink:"Leer las historias"},
  fr: {intro:"OUVRIR L’ALBUM",child:"L’ENFANT",childPhoto:"Esther Cho enfant",memory:"HORS DU CADRE",source:"LES ORIGINAUX",ending:"ENCORE UNE PAGE",storiesLink:"Lire les récits"},
  it: {intro:"APRIRE L’ALBUM",child:"LA BAMBINA",childPhoto:"Esther Cho da bambina",memory:"OLTRE LE FOTO",source:"LE FOTO ORIGINALI",ending:"UN’ALTRA PAGINA",storiesLink:"Leggi le storie"},
  ja: {intro:"アルバムを開くと",child:"あの頃の子ども",childPhoto:"幼い頃のエスター・チョー",memory:"写真の外の時間",source:"写真の記録",ending:"次の一枚",storiesLink:"物語を読む"},
  "pt-br": {intro:"ABRINDO O ÁLBUM",child:"A CRIANÇA",childPhoto:"Esther Cho quando era menina",memory:"FORA DA FOTO",source:"AS IMAGENS ORIGINAIS",ending:"MAIS UMA PÁGINA",storiesLink:"Ler as histórias"}
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

    <section className="childhood-ending" aria-labelledby="childhood-ending-title">
      <div className="container childhood-ending-inner">
        <p className="childhood-kicker">{label.ending}</p>
        <h2 id="childhood-ending-title">{t.endingTitle}</h2>
      </div>
    </section>
  </>;
}
