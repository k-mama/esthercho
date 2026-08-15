import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { HomeHeroVideo } from "../home-hero-video";
import styles from "../page.module.css";
import polish from "../home-polish.module.css";

const homeUrl = "https://esthercho.pages.dev/ko/home/";
const socialPreviewImage =
  "https://esthercho.pages.dev/media/home/esther-house-entry-poster.jpg?v=20260815-2000";

export const metadata: Metadata = {
  title: "조성연",
  description:
    "믿음과 기억, 밥상과 돌봄, 평범한 삶에서 태어난 조성연의 이야기 집.",
  alternates: {
    canonical: homeUrl,
  },
  openGraph: {
    type: "website",
    url: homeUrl,
    siteName: "Esther Cho / 조성연",
    title: "조성연 | Esther Cho",
    description:
      "조성연 작가가 실제로 살았던 집의 열린 대문에서 시작되는 이야기의 집.",
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
              아침밥 옆에 말씀이 있고, 오래된 사진 한 장이 수십 년 뒤 이야기를
              데려오기도 합니다. 모두 한 사람의 삶 안에 있었습니다.
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

      <section className={`${styles.scene} ${styles.tableScene} ${polish.table}`} aria-labelledby="table-title">
        <div className={`container ${styles.sceneGrid}`}>
          <div className={styles.sceneCopy}>
            <p className={styles.eyebrow}>아침 식탁</p>
            <h2 id="table-title" className={styles.koDisplay}>
              <span>평범한 돌봄이</span>
              <span>가장 잘 보이는 자리.</span>
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
          <div className={styles.memoryCollage} aria-label="조성연의 어린 시절 사진">
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
              <span>가끔은 사진이</span>
              <span>먼저 돌아옵니다.</span>
            </h2>
            <p>
              집 한 채, 정원, 가족사진 속 이름 하나. 가끔은 사진이 먼저 돌아오고
              이야기는 나중에 따라옵니다.
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
              <span>돌봄은 그냥</span>
              <span>한 주의 일부였습니다.</span>
            </h2>
            <p>
              가족과 교회, 봉사여행과 친구들, 볼일과 웃음. 누군가에게 자리를
              내어주는 일은 그냥 평범한 생활의 일부가 되었습니다.
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
              <span>손으로 그은 선이</span>
              <span>그대로 남는 방.</span>
            </h2>
            <p>
              연필선은 연필선으로 남습니다. 그 그림에서 새로운 작업이 시작되더라도
              처음의 손길은 숨기지 않습니다.
            </p>
            <Link href="/ko/studio/" className={styles.textLink}>
              작업실 들어가기
            </Link>
          </div>

          <div className={styles.studioCollage} aria-label="조성연의 원본 스케치를 바탕으로 만든 콜라주">
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