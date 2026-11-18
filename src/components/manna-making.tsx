import Image from "next/image";
import Link from "next/link";
import styles from "./manna-making.module.css";

type Locale = "en" | "ko";

const content = {
  en: {
    kicker: "BEHIND THE BOOK · MANNA ON THE TABLE",
    title: "Not made in a morning.",
    introduction: [
      "At first, it seemed to be a matter of choosing a title and a cover. One breakfast photograph, then another. A plate, a cup of coffee, the light across a table. There were several possibilities, and no quick answer.",
      "The more carefully the covers were considered, the more the work led back to something that was there before the book: the mornings themselves.",
    ],
    photoEyebrow: "01 / WHAT WAS ALREADY ON THE TABLE",
    photoHeading: "Real breakfasts, long before the cover.",
    photoText: "These are Esther's own breakfast photographs. Nothing here needed to be invented for a book. The food, the dishes, the sunlight, and even the blue cloth belonged to ordinary mornings already lived.",
    photoLabels: [
      "French toast, berries, and a kitchen counter",
      "Fruit, coffee, and afternoon-shaped light",
      "A quiet breakfast on blue linen",
    ],
    coverEyebrow: "02 / FINDING THE BOOK'S FACE",
    coverHeading: "The cover did not come easily.",
    coverText: "A softer table. A closer plate. A quieter photograph. The title moved; the light changed; another version followed. The challenge was not simply to make something attractive. It was to find a cover that still felt like the table where the writing began.",
    coverLabels: [
      "Cover study · blue table setting",
      "Cover study · breakfast by the window",
      "Cover study · coffee and fruit",
    ],
    homeEyebrow: "03 / THE HOUSE THAT WAS WAITING",
    homeHeading: "A photograph taken about ten years earlier.",
    homeText: "Around a decade ago, Esther happened to photograph the house in Cheongdam-dong where she had lived as a child. She could not have known that this image would one day become the welcoming film on her author website. An old home now offers readers a way in.",
    mannaHeading: "A portion for this morning.",
    mannaText: [
      "Looking back, Esther sees more than a project planned in a single day. She recognizes God's providence in the ordinary things that were quietly prepared long before she knew what they would become.",
      "Manna was God's provision for the day. At this table, the word holds two kinds of nourishment: real breakfast and the Scripture received that morning. Yesterday's portion cannot take the place of today's. Both the meal and the listening must begin again.",
      "Tomorrow, there will be another morning. And another place at the table.",
    ],
    homepageLink: "Visit the welcome film",
    sectionLabel: "The making of Manna on the Table",
  },
  ko: {
    kicker: "책이 만들어지는 동안 · MANNA ON THE TABLE",
    title: "하루아침에 만들어진 책은 아니었습니다.",
    introduction: [
      "처음에는 제목과 표지 하나를 정하는 일이라고 생각했습니다. 아침 식탁 사진을 꺼내 놓고, 접시를 보고, 커피잔을 보고, 그날 들어온 빛을 살폈습니다. 마음에 드는 시안은 몇 번이나 나왔지만, 금방 결정되지는 않았습니다.",
      "표지를 고를수록 오히려 책보다 먼저 있었던 것으로 돌아가게 됐습니다. 매일의 식탁이었습니다.",
    ],
    photoEyebrow: "01 / 먼저 있었던 아침 식탁",
    photoHeading: "표지보다 먼저 있었던 아침들.",
    photoText: "조성연 작가가 실제로 차려 먹고 찍어 둔 아침 식탁입니다. 책을 위해 새로 만들어 낸 풍경이 아닙니다. 음식과 그릇, 햇살과 파란 천까지, 모두 이미 지나온 평범한 아침에 있던 것들입니다.",
    photoLabels: [
      "프렌치토스트와 베리, 부엌의 한쪽",
      "과일과 커피가 놓인 식탁",
      "파란 천 위에 차린 아침",
    ],
    coverEyebrow: "02 / 책의 얼굴을 찾는 시간",
    coverHeading: "표지 하나 고르는 일도 쉽지 않았습니다.",
    coverText: "더 부드러운 식탁, 조금 더 가까이 보이는 접시, 덜 꾸민 사진. 제목의 위치를 바꾸고 빛을 조정하며 시안을 거듭 만들었습니다. 예쁘게 보이는 것보다 중요한 건, 이 글이 시작된 식탁의 모습이 그대로 살아 있는가 하는 것이었습니다.",
    coverLabels: [
      "표지 시안 · 파란 식탁",
      "표지 시안 · 창가의 아침",
      "표지 시안 · 커피와 과일",
    ],
    homeEyebrow: "03 / 오래전에 남겨 둔 집",
    homeHeading: "십여 년 전, 무심코 찍어 둔 사진 한 장.",
    homeText: "어린 시절 살았던 청담동 집을 십여 년 전 우연히 사진으로 남겨 두었습니다. 그 사진이 훗날 작가 홈페이지의 첫 영상이 되어 독자들을 집으로 초대하는 문이 될 줄은 몰랐습니다. 지나간 집이 지금은 누군가를 맞이하는 장소가 되었습니다.",
    mannaHeading: "오늘 아침에 받을 몫.",
    mannaText: [
      "돌아보면 이 일은 어느 날 갑자기 기획해서 완성한 일이 아니었습니다. 오래전에 남겨 둔 사진과 날마다 차려 온 식탁이 이제야 제자리를 찾는 모습을 보며, 하나님의 준비하심과 섭리를 생각하게 됩니다.",
      "만나는 하나님이 날마다 주시는 양식이었습니다. 이 식탁에는 두 가지 양식이 있습니다. 실제로 차려 먹는 아침밥과 그날 새롭게 받는 말씀입니다. 어제 받은 몫을 쌓아 두었다고 오늘을 대신할 수는 없습니다. 식사도, 말씀 앞에 앉는 시간도 다시 시작해야 합니다.",
      "내일 아침에도 식탁에 앉을 이유입니다.",
    ],
    homepageLink: "홈페이지의 초대 영상 보기",
    sectionLabel: "Manna on the Table 제작 이야기",
  },
} as const;

const photos = [
  "/media/books/manna-making/breakfast-berries.webp",
  "/media/books/manna-making/breakfast-fruit-coffee.webp",
  "/media/books/manna-making/breakfast-blue-napkin.webp",
];

const coverStudies = [
  "/media/books/manna-making/cover-blue-table.webp",
  "/media/books/manna-making/cover-berry-toast.webp",
  "/media/books/manna-making/cover-coffee-tray.webp",
];

function PhotoGallery({
  sources, captions, kind, locale,
}: {
  sources: string[];
  captions: readonly string[];
  kind: "photo" | "cover";
  locale: Locale;
}) {
  return (
    <div className={styles.gallery}>
      {sources.map((src, index) => (
        <figure key={src} className={styles.figure}>
          <Image
            src={src}
            alt={captions[index]}
            width={720}
            height={kind === "cover" ? 1080 : 960}
            sizes="(max-width: 640px) 42vw, (max-width: 900px) 28vw, 250px"
            className={styles.image}
            loading="lazy"
          />
          <figcaption>{captions[index]}</figcaption>
        </figure>
      ))}
    </div>
  );
}

export function MannaMaking({ locale }: { locale: Locale }) {
  const t = content[locale];
  return (
    <section
      className={styles.section}
      id="making-of-manna"
      aria-label={t.sectionLabel}
    >
      <div className="container">
        <header className={styles.header}>
          <p className={styles.eyebrow}>{t.kicker}</p>
          <h2>{t.title}</h2>
          <div className={styles.introduction}>
            {t.introduction.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </header>

        <div className={styles.chapter}>
          <p className={styles.eyebrow}>{t.photoEyebrow}</p>
          <h3>{t.photoHeading}</h3>
          <p className={styles.explanation}>{t.photoText}</p>
          <PhotoGallery sources={photos} captions={t.photoLabels} kind="photo" locale={locale} />
        </div>

        <div className={styles.chapter}>
          <p className={styles.eyebrow}>{t.coverEyebrow}</p>
          <h3>{t.coverHeading}</h3>
          <p className={styles.explanation}>{t.coverText}</p>
          <PhotoGallery sources={coverStudies} captions={t.coverLabels} kind="cover" locale={locale} />
        </div>

        <div className={styles.closing}>
          <div className={styles.memory}>
            <p className={styles.eyebrow}>{t.homeEyebrow}</p>
            <h3>{t.homeHeading}</h3>
            <p>{t.homeText}</p>
            <Link className={styles.link} href={locale === "ko" ? "/ko/" : "/"}>
              {t.homepageLink} <span aria-hidden="true">↗</span>
            </Link>
          </div>
          <div className={styles.manna}>
            <h3>{t.mannaHeading}</h3>
            {t.mannaText.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </div>
      </div>
    </section>
  );
}
