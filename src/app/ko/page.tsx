import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { HomeHeroVideo } from "../home-hero-video";
import styles from "../page.module.css";

export const metadata: Metadata = {
  title: "조성연",
  description:
    "믿음과 기억, 어린 시절과 평범한 삶에서 태어난 이야기의 집.",
};

export default function KoreanHome() {
  return (
    <main className={styles.home}>
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

      <section className={styles.homeIntro} aria-labelledby="home-intro-title">
        <div className="container">
          <p className={styles.eyebrow}>집 안의 방들</p>
          <div className={styles.homeIntroGrid}>
            <h2 id="home-intro-title">이야기와 사진, 책과 그림.</h2>
            <div className={styles.homeIntroCopy}>
              <p>
                이곳에서는 서로 다른 방에 두지만 모두 같은 삶에서 나온
                기록이다.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.storyScene} aria-labelledby="home-stories-title">
        <figure className={styles.storyFigure}>
          <Image
            src="/media/covers/stories-cover.webp"
            alt="나무가 늘어선 돌담길에서 책을 들고 있는 조성연"
            width={1800}
            height={1059}
            sizes="100vw"
            priority
          />
        </figure>
        <div className={`container ${styles.storyCopy}`}>
          <div>
            <p className={styles.eyebrow}>이야기</p>
            <h2 id="home-stories-title">삶에서 태어난 이야기</h2>
          </div>
          <div className={styles.storyText}>
            <p>
              가족과 믿음, 어린 시절과 기억이 놓치지 않은 작은 것들을 모은
              살아 있는 이야기 아카이브.
            </p>
            <Link href="/ko/stories/" className={styles.textLink}>
              이야기로 들어가기
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.estherScene} aria-labelledby="home-esther-title">
        <div className={`container ${styles.estherGrid}`}>
          <figure className={styles.estherFigure}>
            <Image
              src="/media/covers/esther-cover.webp"
              alt="남색 셔츠를 입고 두 점의 작품 아래 앉아 있는 조성연"
              width={1800}
              height={1059}
              sizes="(max-width: 899px) 100vw, 46vw"
            />
          </figure>
          <div className={styles.estherCopy}>
            <p className={styles.eyebrow}>조성연</p>
            <h2 id="home-esther-title">이야기가 된 집</h2>
            <p>
              작가이자 화가인 조성연과, 그의 글과 그림을 계속 움직이게 하는
              집과 가족의 기억, 믿음과 손그림을 만난다.
            </p>
            <Link href="/ko/about/" className={styles.textLink}>
              조성연 만나기
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.albumScene} aria-labelledby="home-album-title">
        <figure className={styles.albumFigure}>
          <Image
            src="/media/home/childhood-house.jpg"
            alt="조성연 작가의 어린 시절과 연결된 집과 정원"
            width={1800}
            height={1059}
            sizes="100vw"
          />
        </figure>
        <div className={`container ${styles.albumCopy}`}>
          <div>
            <p className={styles.eyebrow}>어린 시절</p>
            <h2 id="home-album-title">어린 시절 앨범</h2>
          </div>
          <div className={styles.albumText}>
            <p>
              실제 사진과 기억의 장소, 가족의 조각은 이후의 재해석 작업과
              분명히 다른 기록으로 남긴다.
            </p>
            <Link href="/ko/archive/" className={styles.textLink}>
              앨범 열기
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.roomsPair} aria-label="책과 아침 식탁">
        <div className={`container ${styles.roomsPairGrid}`}>
          <article className={styles.roomColumn}>
            <figure className={`${styles.roomFigure} ${styles.booksFigure}`}>
              <Image
                src="/media/covers/books-cover-final-20260802.webp"
                alt="은은한 햇살이 드는 식탁에서 책을 읽는 조성연"
                width={1800}
                height={1059}
                sizes="(max-width: 899px) 100vw, 58vw"
              />
            </figure>
            <p className={styles.eyebrow}>책</p>
            <h2>정원 너머</h2>
            <p>확정된 기록의 범위 안에서 책과 출간 준비 중인 작업을 보여준다.</p>
            <Link href="/ko/books/" className={styles.textLink}>
              책 보러 가기
            </Link>
          </article>

          <article className={styles.roomColumn}>
            <figure className={`${styles.roomFigure} ${styles.morningFigure}`}>
              <Image
                src="/media/covers/morning-table-cover-mobile.webp"
                alt="아보카도 토스트와 달걀, 포도와 아이스커피가 놓인 조성연의 아침 식탁"
                width={1200}
                height={1600}
                sizes="(max-width: 899px) 100vw, 34vw"
              />
            </figure>
            <p className={styles.eyebrow}>아침 식탁</p>
            <h2>아침 식탁</h2>
            <p>평범한 아침과 말씀, 기도가 만나는 자리에서 태어난 묵상과 기록.</p>
            <Link href="/ko/notes/" className={styles.textLink}>
              식탁으로 가기
            </Link>
          </article>
        </div>
      </section>

      <section className={styles.studioScene} aria-labelledby="home-studio-title">
        <div className={`container ${styles.studioGrid}`}>
          <div className={styles.studioCopy}>
            <p className={styles.eyebrow}>스튜디오</p>
            <h2 id="home-studio-title">손으로 그린 이야기, 빛으로 다시 태어나다</h2>
            <p>
              원본 손그림은 그대로 보이게 두고, 이후의 재해석은 명확히 다른
              작업으로 밝힌다. 과정은 원본을 대신하지 않는다.
            </p>
            <Link href="/ko/studio/" className={styles.textLink}>
              스튜디오 들어가기
            </Link>
          </div>
          <figure className={styles.studioFigure}>
            <Image
              src="/media/esther/still-making-father-child-collage-20260802.png"
              alt="조성연의 어린 시절 원본 스케치를 바탕으로 만든 종이 콜라주"
              width={1536}
              height={1536}
              sizes="(max-width: 899px) 100vw, 42vw"
            />
          </figure>
        </div>
      </section>
    </main>
  );
}
