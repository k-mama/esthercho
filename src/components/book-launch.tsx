import Image from "next/image";
import Link from "next/link";
import styles from "./book-launch.module.css";

type Locale = "en" | "ko";
type Placement = "home" | "books";

const amazonUrl = "https://www.amazon.com/dp/B0HQ9Z7SRD";
const germanPaperbackUrl = "https://www.amazon.de/dp/B0HRS6F2MH";
const germanKindleUrl = "https://www.amazon.de/dp/B0HR9GZ77J";
const spanishPaperbackUrl = "https://www.amazon.es/dp/B0HRZ54WMS";
const spanishKindleUrl = "https://www.amazon.es/dp/B0HRVXGBVR";
// Official cover from the verified Amazon.es Spanish paperback listing.
const spanishCoverUrl = "https://m.media-amazon.com/images/I/71s1fdCsbwL._SL1499_.jpg";
// Main product photograph from the verified Amazon.de paperback listing.
const germanCoverUrl = "https://m.media-amazon.com/images/I/61IlRaRs5SL._SL1499_.jpg";
const assetBase = "/media/books/big-dreams";

const copy = {
  en: {
    eyebrow: "NEW PICTURE BOOK · NOW AVAILABLE",
    byline: "Sung Yeon Cho · AMAZING TIGER",
    description:
      "A big black dog, soft green grass, a yellow car, a blue sea, an orange sunset. Five children follow their imaginations, until a small bedtime question brings the dreaming home.",
    buy: "Buy on Amazon",
    explore: "Discover the book",
    coverAlt: "Front cover of Big Dreams in Every Color by Sung Yeon Cho",
    coverCaption: "FRONT COVER",
    backCoverAlt: "Back cover artwork showing a black dog in a red cape and the book barcode",
    backCoverCaption: "BACK COVER",
    firstVideoEyebrow: "A 10-SECOND GLIMPSE",
    firstVideoTitle: "A little world of wonder.",
    firstVideoDescription:
      "Step into Big Dreams in Every Color, where a child's imagination makes room for the impossible.",
    videoLabel: "Watch the 10-second Big Dreams in Every Color book trailer",
    videoCaption: "BIG DREAMS IN EVERY COLOR",
    secondVideoEyebrow: "ANOTHER 10-SECOND STORY",
    secondVideoTitle: "Little hearts. Big dreams.",
    secondVideoDescription:
      "A little boy imagines becoming a brave black dog. Sometimes the impossible dreams are the ones we remember.",
    secondVideoLabel: "Watch Little Hearts, Big Dreams, a second 10-second picture book trailer",
    secondVideoCaption: "LITTLE HEARTS · BIG DREAMS",
    thirdVideoEyebrow: "A 16-SECOND LITTLE ADVENTURE",
    thirdVideoTitle: "Around the world. Home for dinner.",
    thirdVideoDescription:
      "A yellow car, one very big plan, and a child's wonderfully simple idea of adventure.",
    thirdVideoLabel: "Watch the yellow car adventure from Big Dreams in Every Color",
    thirdVideoCaption: "THE YELLOW CAR · BIG DREAMS IN EVERY COLOR",
    germanEyebrow: "GERMAN EDITION · PAPERBACK & KINDLE AVAILABLE",
    germanTitle: "Große Träume in allen Farben",
    germanDescription: "The same world of little dreams, now in German. A gentle picture book to read aloud, give as a gift, and keep close at bedtime.",
    germanMeta: "German · 32 pages · Paperback & Kindle eBook",
    germanBuy: "Buy the German paperback",
    germanKindleBuy: "Read the German Kindle edition",
    editionHomeLabel: "MORE LANGUAGES",
    spanishTitle: "Grandes sueños de todos los colores",
    spanishEyebrow: "SPANISH EDITION · PAPERBACK & KINDLE AVAILABLE",
    spanishDescription: "Five children, their impossible dreams, and a little question before bedtime. Now available in Spanish for sharing, reading aloud, and giving as a gift.",
    spanishMeta: "Spanish · 32 pages · Paperback & Kindle eBook",
    spanishBuy: "Buy the Spanish paperback",
    spanishKindleBuy: "Read the Spanish Kindle edition",
    spanishCoverAlt: "Front cover of Grandes sueños de todos los colores, the Spanish picture book by Sung Yeon Cho",
    spanishCoverCaption: "SPANISH EDITION",
    germanCoverAlt: "Front cover of Große Träume in allen Farben, the German paperback by Sung Yeon Cho",
    germanCoverCaption: "GERMAN EDITION",
    fallback: "Your browser does not support video playback.",
  },
  ko: {
    eyebrow: "새로 나온 그림책 · 출간",
    byline: "조성연 · AMAZING TIGER",
    description:
      "커다란 검은 강아지, 부드러운 초록 잔디, 노란 자동차, 파란 바다, 주황빛 노을. 다섯 아이의 상상은 잠자리의 작은 질문으로 이어집니다.",
    buy: "아마존에서 구매하기",
    explore: "책 자세히 보기",
    coverAlt: "조성연 작가의 그림책 Big Dreams in Every Color 앞표지",
    coverCaption: "앞표지",
    backCoverAlt: "빨간 망토를 두른 검은 강아지와 바코드가 그려진 그림책 뒷표지",
    backCoverCaption: "뒷표지",
    firstVideoEyebrow: "첫 번째 10초 이야기",
    firstVideoTitle: "상상이 피어나는 작은 세상.",
    firstVideoDescription:
      "무엇이든 꿈꿀 수 있는 아이들의 세계. Big Dreams in Every Color를 10초 동안 만나보세요.",
    videoLabel: "Big Dreams in Every Color 그림책 10초 홍보영상",
    videoCaption: "BIG DREAMS IN EVERY COLOR",
    secondVideoEyebrow: "또 하나의 10초 이야기",
    secondVideoTitle: "작은 마음, 커다란 꿈.",
    secondVideoDescription:
      "커다란 검은 강아지가 되고 싶다는 아이의 꿈. 이루어질 수 없어도 오래 기억하고 싶은 상상입니다.",
    secondVideoLabel: "작은 마음, 커다란 꿈 — Big Dreams in Every Color 두 번째 10초 홍보영상",
    secondVideoCaption: "작은 마음 · 커다란 꿈",
    thirdVideoEyebrow: "16초의 작은 모험",
    thirdVideoTitle: "세계를 한 바퀴 돌고, 저녁엔 집으로.",
    thirdVideoDescription:
      "노란 자동차를 타고 떠나는 아이의 커다란 계획. 상상 속에서는 어디든 갈 수 있으니까요.",
    thirdVideoLabel: "Big Dreams in Every Color 노란 자동차 모험 영상",
    thirdVideoCaption: "노란 자동차 · 커다란 꿈",
    germanEyebrow: "독일어판 · 종이책·전자책 출간",
    germanTitle: "Große Träume in allen Farben",
    germanDescription: "아이들의 작은 꿈을 담은 같은 이야기를 이제 독일어로도 만날 수 있습니다. 잠자리에서 함께 읽고, 소중한 사람에게 선물할 수 있는 그림책입니다.",
    germanMeta: "독일어 · 32페이지 · 종이책·Kindle 전자책",
    germanBuy: "독일어 종이책 구매하기",
    germanKindleBuy: "독일어 Kindle 전자책 구매하기",
    editionHomeLabel: "다른 언어판",
    spanishTitle: "Grandes sueños de todos los colores",
    spanishEyebrow: "스페인어판 · 종이책·전자책 출간",
    spanishDescription: "다섯 아이의 커다란 꿈과 잠자리의 작은 질문을 담은 그림책을 이제 스페인어로도 만날 수 있습니다. 함께 읽고 선물하기 좋은 이야기입니다.",
    spanishMeta: "스페인어 · 32페이지 · 종이책·Kindle 전자책",
    spanishBuy: "스페인어 종이책 구매하기",
    spanishKindleBuy: "스페인어 Kindle 전자책 구매하기",
    spanishCoverAlt: "조성연 작가의 스페인어 그림책 Grandes sueños de todos los colores 앞표지",
    spanishCoverCaption: "스페인어판 앞표지",
    germanCoverAlt: "조성연 작가의 독일어 종이책 Große Träume in allen Farben 앞표지",
    germanCoverCaption: "독일어판 앞표지",
    fallback: "이 브라우저에서는 영상을 재생할 수 없습니다.",
  },
} as const;

export function BookLaunch({ locale, placement }: { locale: Locale; placement: Placement }) {
  const content = copy[locale];
  const sectionId = placement === "books" ? "new-release" : "book-launch-home";
  const titleId = `${sectionId}-title`;

  return (
    <section
      className={styles.launch}
      id={sectionId}
      aria-labelledby={titleId}
    >
      <div className={`container ${styles.inner}`}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>{content.eyebrow}</p>
          <h2 id={titleId} className={styles.title}>
            Big Dreams <span>in Every Color</span>
          </h2>
          <p className={styles.byline}>{content.byline}</p>
          <p className={styles.description}>{content.description}</p>
          <div className={styles.actions}>
            <a
              className={styles.buyLink}
              href={amazonUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {content.buy} <span aria-hidden="true">↗</span>
            </a>
            {placement === "home" && (
              <Link
                className={styles.moreLink}
                href={locale === "ko" ? "/ko/books/#new-release" : "/books/#new-release"}
              >
                {content.explore} <span aria-hidden="true">→</span>
              </Link>
            )}
          </div>
          {placement === "home" && (
            <p className={styles.editionNote}>
              <span>{content.editionHomeLabel}</span>
              <Link href={locale === "ko" ? "/ko/books/#german-edition" : "/books/#german-edition"}>
                {content.germanTitle} <span aria-hidden="true">↗</span>
              </Link>
              <Link href={locale === "ko" ? "/ko/books/#spanish-edition" : "/books/#spanish-edition"}>
                {content.spanishTitle} <span aria-hidden="true">↗</span>
              </Link>
            </p>
          )}
        </div>

        <div className={styles.media}>
          <figure className={styles.coverFigure}>
            <Image
              src={`${assetBase}/cover.webp`}
              alt={content.coverAlt}
              width={1232}
              height={1850}
              sizes="(max-width: 600px) 43vw, (max-width: 899px) 38vw, 22vw"
              className={styles.coverImage}
            />
            <figcaption>{content.coverCaption}</figcaption>
          </figure>

          <figure className={styles.coverFigure}>
            <Image
              src={`${assetBase}/back-cover.webp`}
              alt={content.backCoverAlt}
              width={1000}
              height={1501}
              sizes="(max-width: 600px) 43vw, (max-width: 899px) 38vw, 22vw"
              className={styles.coverImage}
            />
            <figcaption>{content.backCoverCaption}</figcaption>
          </figure>
        </div>
      </div>

      {placement === "books" && (
        <div className={`container ${styles.editionCard}`} id="german-edition">
          <div className={styles.editionText}>
            <p className={styles.eyebrow}>{content.germanEyebrow}</p>
            <h3>{content.germanTitle}</h3>
            <p className={styles.editionDescription}>{content.germanDescription}</p>
            <p className={styles.editionMeta}>{content.germanMeta}</p>
            <div className={styles.editionActions}>
              <a
                className={styles.buyLink}
                href={germanPaperbackUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {content.germanBuy} <span aria-hidden="true">↗</span>
              </a>
              <a
                className={styles.moreLink}
                href={germanKindleUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {content.germanKindleBuy} <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
          <figure className={styles.editionFigure}>
            <Image
              src={germanCoverUrl}
              alt={content.germanCoverAlt}
              width={1280}
              height={2048}
              sizes="(max-width: 600px) 55vw, 220px"
              unoptimized
              className={styles.editionCover}
            />
            <figcaption>{content.germanCoverCaption}</figcaption>
          </figure>
        </div>
      )}

      {placement === "books" && (
        <div className={`container ${styles.editionCard}`} id="spanish-edition">
          <div className={styles.editionText}>
            <p className={styles.eyebrow}>{content.spanishEyebrow}</p>
            <h3>{content.spanishTitle}</h3>
            <p className={styles.editionDescription}>{content.spanishDescription}</p>
            <p className={styles.editionMeta}>{content.spanishMeta}</p>
            <div className={styles.editionActions}>
              <a
                className={styles.buyLink}
                href={spanishPaperbackUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {content.spanishBuy} <span aria-hidden="true">↗</span>
              </a>
              <a
                className={styles.moreLink}
                href={spanishKindleUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {content.spanishKindleBuy} <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
          <figure className={styles.editionFigure}>
            <Image
              src={spanishCoverUrl}
              alt={content.spanishCoverAlt}
              width={1280}
              height={2048}
              sizes="(max-width: 600px) 55vw, 220px"
              unoptimized
              className={styles.editionCover}
            />
            <figcaption>{content.spanishCoverCaption}</figcaption>
          </figure>
        </div>
      )}

      <div className={`container ${styles.trailers}`}>
        <div className={styles.trailerRow}>
          <div className={styles.trailerCopy}>
            <p className={styles.eyebrow}>{content.firstVideoEyebrow}</p>
            <h3>{content.firstVideoTitle}</h3>
            <p>{content.firstVideoDescription}</p>
          </div>

          <figure className={styles.trailerFigure}>
            <video
              className={styles.video}
              controls
              playsInline
              preload="none"
              poster={`${assetBase}/trailer-poster.webp`}
              aria-label={content.videoLabel}
              width={1080}
              height={1920}
            >
              <source src={`${assetBase}/trailer.mp4`} type="video/mp4" />
              {content.fallback}
            </video>
            <figcaption>{content.videoCaption}</figcaption>
          </figure>
        </div>

        <div className={styles.trailerRow}>
          <div className={styles.trailerCopy}>
            <p className={styles.eyebrow}>{content.secondVideoEyebrow}</p>
            <h3>{content.secondVideoTitle}</h3>
            <p>{content.secondVideoDescription}</p>
          </div>

          <figure className={styles.trailerFigure}>
            <video
              className={styles.video}
              controls
              playsInline
              preload="none"
              poster={`${assetBase}/birdsong-poster.webp`}
              aria-label={content.secondVideoLabel}
              width={720}
              height={1280}
            >
              <source src={`${assetBase}/birdsong.mp4`} type="video/mp4" />
              {content.fallback}
            </video>
            <figcaption>{content.secondVideoCaption}</figcaption>
          </figure>
        </div>

        <div className={styles.trailerRow}>
          <div className={styles.trailerCopy}>
            <p className={styles.eyebrow}>{content.thirdVideoEyebrow}</p>
            <h3>{content.thirdVideoTitle}</h3>
            <p>{content.thirdVideoDescription}</p>
          </div>

          <figure className={styles.trailerFigure}>
            <video
              className={styles.video}
              controls
              playsInline
              preload="none"
              poster={`${assetBase}/yellow-car-poster.webp`}
              aria-label={content.thirdVideoLabel}
              width={720}
              height={1280}
            >
              <source src={`${assetBase}/yellow-car.mp4`} type="video/mp4" />
              {content.fallback}
            </video>
            <figcaption>{content.thirdVideoCaption}</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
