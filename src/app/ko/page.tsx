import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BookLaunch } from "@/components/book-launch";
import { HomeHeroVideo } from "../home-hero-video";
import { ChildhoodHeroCaption } from "@/components/childhood-home-story";
import styles from "../page.module.css";
import polish from "../home-polish.module.css";

const homeUrl = "https://esthercho.pages.dev/ko/";
const socialPreviewImage =
  "https://esthercho.pages.dev/media/home/esther-house-entry-poster.jpg?v=20260815-2000";

export const metadata: Metadata = {
  title: { absolute: "조성연" },
  description:
    "믿음과 기억, 밥상과 돌봄, 평범한 삶에서 태어난 조성연의 이야기 집.",
  alternates: {
    canonical: homeUrl,
    languages: {
      en: "https://esthercho.pages.dev/",
      ko: "https://esthercho.pages.dev/ko/",
      de: "https://esthercho.pages.dev/de/",
      es: "https://esthercho.pages.dev/es/",
      fr: "https://esthercho.pages.dev/fr/",
      it: "https://esthercho.pages.dev/it/",
      ja: "https://esthercho.pages.dev/ja/",
      "pt-BR": "https://esthercho.pages.dev/pt-br/",
      "zh-Hans": "https://esthercho.pages.dev/zh-cn/",
      "zh-Hant": "https://esthercho.pages.dev/zh-tw/",
    },
  },
  openGraph: {
    type: "website",
    url: homeUrl,
    siteName: "Esther Cho / 조성연",
    title: "조성연 | Esther Cho",
    description:
      "조성연 작가가 실제로 살았던 집의 열린 대문에서 시작되는 이야기의 집.",
    locale: "ko_KR",
    images: [
      {
        url: socialPreviewImage,
        alt: "조성연 작가가 실제로 살았던 집의 열린 대문과 정원 입구",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "조성연 | Esther Cho",
    description:
      "조성연 작가가 실제로 살았던 집의 열린 대문에서 시작되는 이야기의 집.",
    images: [socialPreviewImage],
  },
};

const rooms = [
  ["아침 식탁", "/ko/notes/"],
  ["이야기", "/ko/stories/"],
  ["어린 시절", "/ko/archive/"],
  ["작업실", "/ko/studio/"],
  ["책", "/ko/books/"],
  ["조성연", "/ko/about/"],
] as const;

export default function KoreanHome() {
  return (
    <main className={`${styles.home} ${polish.home}`}>
      <section className={`${styles.videoHero} home-video-hero`}>
        <HomeHeroVideo locale="ko" />
        <ChildhoodHeroCaption locale="ko"/>

        <div className={styles.videoHeroContent}>
          <p className={styles.videoEyebrow}>조성연의 집에 오신 것을 환영합니다</p>
          <h1 className={styles.koreanHeroTitle}>
            <span>기억으로 지은</span>
            <span>이야기의 집.</span>
          </h1>
          <Link href="#inside" className={styles.videoHeroLink}>
            집 안으로 들어가기
          </Link>
        </div>
      </section>

      <section className={`${styles.threshold} ${polish.foyer}`} id="inside" aria-labelledby="house-title">
        <div className={`container ${styles.thresholdInner}`}>
          <div className={styles.thresholdCopy}>
            <p className={styles.eyebrow}>집 안으로</p>
            <h2 id="house-title" className={styles.koDisplay}>
              <span>밥상과 사진, 그림과 이야기가</span>
              <span>한 집 안에서 천천히 이어집니다.</span>
            </h2>
            <p>
              아버지는 호랑이 태몽을 꾸었고, 훗날 아들은 커다란 검은 강아지가 되는 꿈을 꾸었어요. 그 사이에 한 가족의 밥상과 그림, 이야기가 있습니다.
            </p>
          </div>

          <nav className={`${styles.roomLinks} ${polish.roomLinks}`} aria-label="조성연의 집 안에 있는 방들">
            {rooms.map(([label, href], index) => (
              <Link href={href} key={href}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{label}</strong>
                <i aria-hidden="true">↗</i>
              </Link>
            ))}
          </nav>
        </div>
      </section>

      <BookLaunch locale="ko" placement="home" />

      <section className={`${styles.scene} ${styles.tableScene} ${polish.table}`} aria-labelledby="table-title">
        <div className={`container ${styles.sceneGrid}`}>
          <div className={styles.sceneCopy}>
            <p className={styles.eyebrow}>아침 식탁</p>
            <h2 id="table-title" className={styles.koDisplay}>
              <span>아침밥을 차리고</span>
              <span>성경을 펼칩니다.</span>
            </h2>
            <p>
              아침밥과 말씀, 가족에게 차린 식사와 사랑하는 사람에게 내어준 한 끼가
              같은 식탁 위에 놓입니다.
            </p>
            <Link href="/ko/notes/" className={styles.textLink}>
              아침 식탁으로 가기
            </Link>
          </div>

          <figure className={`${styles.sceneMedia} ${styles.tableMedia} ${polish.tableMedia}`}>
            <Image
              src="/media/esther/morning-table.jpg"
              alt="조성연 작가의 아침 식탁"
              width={1200}
              height={1600}
              sizes="(max-width: 899px) 100vw, 46vw"
              priority={false}
            />
          </figure>
        </div>
      </section>

      <section className={`${styles.scene} ${styles.memoryScene} ${polish.memory}`} aria-labelledby="memory-title">
        <div className={`container ${styles.sceneGrid} ${styles.reverseScene}`}>
          <div
            className={styles.memoryCollage}
            role="group"
            aria-label="조성연의 어린 시절 사진"
          >
            <figure className={`${styles.memoryPrimary} ${polish.memoryPrimary}`}>
              <Image
                src="/media/esther/childhood-garden.jpg"
                alt="조성연의 어린 시절과 연결된 정원 사진"
                width={1800}
                height={1200}
                sizes="(max-width: 899px) 92vw, 48vw"
              />
            </figure>
            <figure className={`${styles.memorySecondary} ${polish.memorySecondary}`}>
              <Image
                src="/media/esther/childhood-house.jpg"
                alt="조성연의 어린 시절과 연결된 집 사진"
                width={1200}
                height={900}
                sizes="(max-width: 899px) 44vw, 20vw"
              />
            </figure>
          </div>

          <div className={styles.sceneCopy}>
            <p className={styles.eyebrow}>기억</p>
            <h2 id="memory-title" className={styles.koDisplay}>
              <span>우리 가족이 가장</span>
              <span>행복했던 그 집.</span>
            </h2>
            <p>
              붉은 기와 대문과 벽돌길, 나무가 있던 청담동 집. 어린 시절을 보냈던 그 집이 사진 속에 남아 있습니다.
            </p>
            <Link href="/ko/archive/" className={styles.textLink}>
              어린 시절로 가기
            </Link>
          </div>
        </div>
      </section>

      <section className={`${styles.scene} ${styles.careScene} ${polish.care}`} aria-labelledby="care-title">
        <div className={`container ${styles.careLayout}`}>
          <div className={styles.sceneCopy}>
            <p className={styles.eyebrow}>돌봄의 이야기</p>
            <h2 id="care-title" className={styles.koDisplay}>
              <span>사람들을 만나고,</span>
              <span>함께 웃고 도우며 살았습니다.</span>
            </h2>
            <p>
              말레이시아에서 보낸 9년 동안 교회 유치부 교사로 아이들을 만났고, 여성회 활동과 식당 봉사도 했습니다. 함께한 사람들이 사진에 남아 있습니다.
            </p>
            <Link href="/ko/stories/" className={styles.textLink}>
              이야기 보러 가기
            </Link>
          </div>

          <figure className={`${styles.sceneMedia} ${styles.careMedia} ${polish.careMedia}`}>
            <Image
              src="/media/esther/bangladesh-service.jpg"
              alt="방글라데시 봉사 활동 중인 조성연"
              width={1200}
              height={800}
              sizes="(max-width: 899px) 100vw, 54vw"
            />
            <figcaption>방글라데시</figcaption>
          </figure>
        </div>
      </section>

      <section className={`${styles.scene} ${styles.studioScene} ${polish.studio}`} aria-labelledby="studio-title">
        <div className={`container ${styles.sceneGrid}`}>
          <div className={styles.sceneCopy}>
            <p className={styles.eyebrow}>작업실</p>
            <h2 id="studio-title" className={styles.koDisplay}>
              <span>어린 시절 그림이</span>
              <span>다시 태어났습니다.</span>
            </h2>
            <p>
              조성연의 어린 시절 그림에서 출발한 디지털 콜라주입니다. 원화 자체가 아니라, 뒤에 만든 재해석 작품입니다.
            </p>
            <Link href="/ko/studio/" className={styles.textLink}>
              작업실 들어가기
            </Link>
          </div>

          <div
            className={styles.studioCollage}
            role="group"
            aria-label="조성연의 원본 스케치를 바탕으로 만든 콜라주"
          >
            <figure className={`${styles.studioPrimary} ${polish.studioPrimary}`}>
              <Image
                src="/media/esther/still-making-father-child-collage-20260802.png"
                alt="조성연의 어린 시절 원본 스케치를 바탕으로 만든 콜라주"
                width={1536}
                height={1536}
                sizes="(max-width: 899px) 82vw, 34vw"
              />
            </figure>
          </div>
        </div>
      </section>

      <section className={`${styles.closingRoom} ${polish.closing}`} aria-labelledby="closing-title">
        <div className={`container ${styles.closingInner}`}>
          <p className={styles.eyebrow}>조금 더 안쪽으로</p>
          <h2 id="closing-title" className={styles.koDisplay}>
            <span>어떤 이야기는 오래 이어지고,</span>
            <span>몇 편은 책이 됩니다.</span>
          </h2>
          <div className={styles.closingLinks}>
            <Link href="/ko/books/">책 <span aria-hidden="true">→</span></Link>
            <Link href="/ko/about/">조성연 만나기 <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </section>
    </main>
  );
}
