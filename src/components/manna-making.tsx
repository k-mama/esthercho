import Image from "next/image";
import Link from "next/link";
import styles from "./manna-making.module.css";

type Locale = "en" | "ko";

const content = {
  en: {
    kicker: "BEHIND THE BOOK · MANNA ON THE TABLE",
    title: "A book taking shape, one morning at a time.",
    introduction: [
      "At first, it seemed to be a matter of choosing a title and a cover. One breakfast photograph, then another. A plate, a cup of coffee, the light across a table. There were several possibilities, and no quick answer.",
      "The more carefully the covers were considered, the more the work led back to something that was there before the book: the mornings themselves.",
    ],
    photoEyebrow: "01 / WHAT WAS ALREADY ON THE TABLE",
    photoHeading: "Real breakfasts, long before the cover.",
    photoText: "Esther took these photographs at her own breakfast table: French toast with berries, a bowl of fruit beside coffee, and a plate set on blue cloth. Each photograph holds the small details of a morning she actually lived.",
    photoLabels: [
      "French toast, berries, and a kitchen counter",
      "Fruit, coffee, and afternoon-shaped light",
      "A quiet breakfast on blue linen",
    ],
    coverEyebrow: "02 / FINDING THE BOOK'S FACE",
    coverHeading: "The cover did not come easily.",
    coverText: "A softer table. A closer plate. A quieter photograph. The title moved; the light changed; another version followed. With every adjustment, Esther looked for the warmth of the mornings where the writing began.",
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
      "Looking back, Esther recognizes God's providence in the details that came together over the years: a photograph of her childhood home, breakfast tables she had set, and the quiet habit of returning to Scripture.",
      "Manna was God's provision for the day. At this table, the word holds two kinds of nourishment: real breakfast and the Scripture received that morning. Yesterday's portion cannot take the place of today's. Both the meal and the listening must begin again.",
      "Tomorrow, there will be another morning. And another place at the table.",
    ],
    homepageLink: "Visit the welcome film",
    sectionLabel: "The making of Manna on the Table",
  },
  ko: {
    kicker: "책이 만들어지는 동안 · MANNA ON THE TABLE",
    title: "표지를 고르며 다시 돌아본 아침들.",
    introduction: [
      "『Manna on the Table』의 제목과 표지를 정하는 데 생각보다 시간이 많이 걸렸습니다. 아침마다 찍어 둔 음식 사진들을 펼쳐 놓고 어떤 사진이 책과 잘 어울릴지 비교했습니다. 접시 모양부터 커피잔, 식탁에 들어오는 햇살까지 살펴보며 표지 시안을 여러 번 바꿨습니다.",
      "그렇게 사진을 하나씩 보다 보니 책을 쓰기 전부터 이어져 온 아침들이 떠올랐습니다. 날마다 밥을 차리고 말씀을 읽으며 보내 온 시간이 이 책의 시작이었습니다.",
    ],
    photoEyebrow: "01 / 먼저 있었던 아침 식탁",
    photoHeading: "표지보다 먼저 있었던 아침들.",
    photoText: "조성연 작가가 평소 아침을 차려 먹으며 직접 찍어 둔 사진들입니다. 베리를 얹은 프렌치토스트, 커피와 함께 놓인 과일, 파란 천 위의 접시까지. 하루하루 조금씩 달랐던 아침 식탁의 모습이 그대로 담겨 있습니다.",
    photoLabels: [
      "프렌치토스트와 베리, 부엌의 한쪽",
      "과일과 커피가 놓인 식탁",
      "파란 천 위에 차린 아침",
    ],
    coverEyebrow: "02 / 책의 얼굴을 찾는 시간",
    coverHeading: "표지 하나 고르는 일도 쉽지 않았습니다.",
    coverText: "파란 천을 살린 표지, 햇살이 들어오는 부엌, 커피와 과일이 놓인 식탁. 제목의 위치를 바꾸고 사진의 구도와 빛을 조정하면서 여러 시안을 비교했습니다. 책을 처음 보는 사람에게도 아침 식탁의 편안한 분위기가 전해졌으면 했습니다.",
    coverLabels: [
      "표지 시안 · 파란 식탁",
      "표지 시안 · 창가의 아침",
      "표지 시안 · 커피와 과일",
    ],
    homeEyebrow: "03 / 오래전에 남겨 둔 집",
    homeHeading: "십여 년 전, 무심코 찍어 둔 사진 한 장.",
    homeText: "어린 시절 살았던 청담동 집을 십여 년 전 우연히 사진으로 남겨 두었습니다. 그 사진이 훗날 작가 홈페이지의 첫 영상이 되어 독자들을 집으로 초대하는 문이 될 줄은 몰랐습니다. 추억 속의 집이 이제는 홈페이지에서 독자들을 맞이하고 있습니다.",
    mannaHeading: "오늘 아침에 받을 몫.",
    mannaText: [
      "십여 년 전 남겨 둔 집 사진이 홈페이지의 첫 영상이 되고, 평소 찍어 두었던 아침 식탁이 책의 표지 후보가 되었습니다. 이렇게 하나씩 이어지는 모습을 보면서, 하나님이 오래전부터 이 일을 준비해 오셨다는 생각이 들었습니다.",
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
