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
              아침밥상 옆에 말씀이 있고, 오래된 사진 한 장이 수십 년 뒤 이야기를
              열기도 합니다. 서로 다른 기록이 한 사람의 삶 안에서 다시 만납니다.
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
              아침밥과 말씀, 가족의 식사와 사랑하는 사람들에게 차려 온 밥상이
              한 사람의 생활 리듬 안에서 자연스럽게 이어집니다.
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
          <div className={styles.memoryCollage} aria-label="조성연의 어린 시절 아카이브 사진">
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
              <span>말보다 먼저</span>
              <span>기억나는 사진들이 있습니다.</span>
            </h2>
            <p>
              어린 시절의 집과 정원, 가족사진 속 이름과 장소, 그때는 몰랐던 작은
              장면들이 천천히 돌아옵니다. 사진은 그대로이고, 그 곁의 이야기는 자라납니다.
            </p>
            <Link href="/ko/archive/" className={styles.textLink}>
              어린 시절 기록 보기
            </Link>
          </div>
        </div>
      </section>

      <section className={`${styles.scene} ${styles.careScene} ${polish.care}`} aria-labelledby="care-title">
        <div className={`container ${styles.careLayout}`}>
          <div className={styles.sceneCopy}>
            <p className={styles.eyebrow}>돌봄의 이야기</p>
            <h2 id="care-title" className={styles.koDisplay}>
              <span>돌봄은 특별한 행사가 아니라</span>
              <span>한 주의 일부였습니다.</span>
            </h2>
            <p>
              가족과 교회, 봉사여행과 친구들, 볼일과 웃음까지. 누군가에게 자리를
              내어준 평범한 날들이 이력서가 아니라 이야기로 남습니다.
            </p>
            <Link href="/ko/stories/" className={styles.textLink}>
              이야기 보러 가기
            </Link>
          </div>

          <figure className={`${styles.sceneMedia} ${styles.careMedia} ${polish.careMedia}`}>
            <Image
              src="/media/esther/bangladesh-service.jpg"
              alt="조성연의 방글라데시 봉사 기록 사진"
              width={1200}
              height={800}
              sizes="(max-width: 899px) 100vw, 54vw"
            />
            <figcaption>봉사 기록 · 방글라데시</figcaption>
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
              원본 손그림과 그 그림에서 출발한 콜라주를 함께 봅니다. 새 작업은
              원본을 덮지 않고, 어디에서 시작되었는지 숨기지 않습니다.
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
            <span>이 집의 이야기들은</span>
            <span>때로 책이 되어 더 멀리 갑니다.</span>
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