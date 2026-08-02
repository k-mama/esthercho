import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { HomeHeroVideo } from "../home-hero-video";
import styles from "../page.module.css";

export const metadata: Metadata = {
  title: "조성연",
  description:
    "믿음과 기억, 어린 시절과 평범한 삶에서 태어난 이야기의 집.",
  alternates: {
    canonical: "/ko/",
    languages: {
      en: "/",
      ko: "/ko/",
    },
  },
};

const rooms = [
  {
    title: "이야기가 된 집",
    eyebrow: "조성연",
    description:
      "작가이자 화가인 조성연을 만나고, 그의 글과 그림을 길러 낸 실제 집과 정원, 믿음과 가족의 시간을 따라갑니다.",
    href: "/ko/about/",
    linkLabel: "조성연 만나기",
    image: "/media/home/childhood-house.jpg",
    alt: "조성연의 어린 시절과 이어진 집과 정원",
    width: 1800,
    height: 1059,
  },
  {
    title: "아침 식탁",
    eyebrow: "아침 식탁",
    description:
      "기도와 음식, 가족과 하루의 첫 생각이 만나는 자리에서 태어난 묵상과 기록입니다.",
    href: "/ko/notes/",
    linkLabel: "식탁으로 가기",
    image: "/media/home/morning-table.jpg",
    alt: "조성연의 식탁에 차려진 아침 식사",
    width: 1200,
    height: 1600,
  },
  {
    title: "어린 시절 앨범",
    eyebrow: "어린 시절",
    description:
      "실제 사진과 가족의 기록, 그림과 기억의 장소를 꾸미지 않은 모습 그대로 보존합니다.",
    href: "/ko/archive/",
    linkLabel: "앨범 열기",
    image: "/media/home/childhood-garden.jpg",
    alt: "어린 시절 정원에서 웃고 있는 조성연",
    width: 1800,
    height: 1350,
  },
];

export default function KoreanHome() {
  return (
    <div className={styles.home}>
      <section className={`${styles.videoHero} home-video-hero`}>
        <HomeHeroVideo locale="ko" />

        <div className={styles.videoHeroContent}>
          <p className={styles.videoEyebrow}>
            조성연의 집에 오신 것을 환영합니다
          </p>
          <h1 className={styles.koreanHeroTitle}>
            <span>기억으로 지은</span>
            <span>이야기의 집.</span>
          </h1>
          <Link href="/ko/about/" className={styles.videoHeroLink}>
            집 안으로 들어가기
          </Link>
        </div>
      </section>

      <div id="rooms" className={`container ${styles.roomSequence}`}>
        <article className={`${styles.paperRoom} ${styles.houseRoom}`}>
          <div className={styles.roomCopy}>
            <p className={styles.eyebrow}>{rooms[0].eyebrow}</p>
            <h2>{rooms[0].title}</h2>
            <p>{rooms[0].description}</p>
            <Link href={rooms[0].href} className={styles.textLink}>
              {rooms[0].linkLabel}
            </Link>
          </div>
          <figure className={styles.landscapeFigure}>
            <Image
              src={rooms[0].image}
              alt={rooms[0].alt}
              width={rooms[0].width}
              height={rooms[0].height}
              sizes="(max-width: 899px) 100vw, 52vw"
            />
          </figure>
        </article>

        <div className={styles.twoRoomGrid}>
          <article className={`${styles.paperRoom} ${styles.compactRoom}`}>
            <figure className={styles.portraitFigure}>
              <Image
                src={rooms[1].image}
                alt={rooms[1].alt}
                width={rooms[1].width}
                height={rooms[1].height}
                sizes="(max-width: 899px) 100vw, 38vw"
              />
            </figure>
            <div className={styles.compactCopy}>
              <p className={styles.eyebrow}>{rooms[1].eyebrow}</p>
              <h2>{rooms[1].title}</h2>
              <p>{rooms[1].description}</p>
              <Link href={rooms[1].href} className={styles.textLink}>
                {rooms[1].linkLabel}
              </Link>
            </div>
          </article>

          <article className={`${styles.paperRoom} ${styles.compactRoom}`}>
            <figure className={styles.albumFigure}>
              <Image
                src={rooms[2].image}
                alt={rooms[2].alt}
                width={rooms[2].width}
                height={rooms[2].height}
                sizes="(max-width: 899px) 100vw, 38vw"
              />
            </figure>
            <div className={styles.compactCopy}>
              <p className={styles.eyebrow}>{rooms[2].eyebrow}</p>
              <h2>{rooms[2].title}</h2>
              <p>{rooms[2].description}</p>
              <Link href={rooms[2].href} className={styles.textLink}>
                {rooms[2].linkLabel}
              </Link>
            </div>
          </article>
        </div>

        <article className={`${styles.paperRoom} ${styles.studioRoom}`}>
          <div className={styles.roomCopy}>
            <p className={styles.eyebrow}>스튜디오</p>
            <h2>손으로 그린 이야기, 빛으로 다시 태어나다</h2>
            <p>
              원본 손그림과 새롭게 재해석된 작업을 분명히 구분해 함께
              보여 줍니다. 원본은 언제나 보이고, 기록은 정직하게
              남습니다.
            </p>
            <Link href="/ko/studio/" className={styles.textLink}>
              스튜디오 들어가기
            </Link>
          </div>
          <figure className={styles.sketchFigure}>
            <Image
              src="/media/home/hand-drawn-story.jpg"
              alt="조성연의 원본 손그림 동화 습작"
              width={1200}
              height={1600}
              sizes="(max-width: 899px) 100vw, 36vw"
            />
          </figure>
        </article>
      </div>

      <section className={`container ${styles.navyPause}`}>
        <p>
          이곳은 목록을 진열한 곳이 아닙니다. 기억으로 이어진 방을
          하나씩 천천히 들어가는 집입니다.
        </p>
      </section>
    </div>
  );
}
