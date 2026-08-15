import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageCover } from "@/components/page-cover";
import "../../stories/stories.css";

export const metadata: Metadata = {
  title: "삶에서 태어난 이야기",
  description:
    "어린 시절과 가족, 믿음과 기억, 오래 남은 평범한 것들에서 태어난 조성연 작가의 살아 있는 이야기 아카이브.",
};

const openingCollection = [
  { number: "01", title: "아버지는 호랑이 꿈을 꾸었다", meta: "아버지 · 시작" },
  { number: "02", title: "가는 집마다 막내딸", meta: "가족 · 어린 시절" },
  { number: "03", title: "깨끗한 잠옷을 입고 다시 마당으로", meta: "집 · 어린 시절" },
  { number: "04", title: "우리 가족의 식당", meta: "가족 · 식탁" },
  { number: "05", title: "엄마, 나 너무 행복해", meta: "엄마 · 행복" },
  { number: "06", title: "중학교 1학년, 그해 7월", meta: "7월 · 전환점" },
  { number: "07", title: "행복을 모으는 사람", meta: "기억 · 지금" },
];

const lifeChapters = [
  "어린 시절",
  "아버지와 함께한 시간",
  "7월 이후",
  "학교와 미술",
  "가족이 되어 가는 시간",
  "작가가 되어 가는 시간",
  "하나님과 함께한 삶",
  "지금의 삶",
];

const memoryCollections = [
  "집",
  "연한 파랑",
  "비",
  "초여름",
  "크리스마스",
  "식탁",
  "새벽",
  "노을",
  "가족",
  "행복",
];

export default function KoreanStoriesPage() {
  return (
    <main className="stories-page">
      <PageCover
        eyebrow="이야기"
        title="삶에서 태어난 이야기"
        description="기억과 믿음, 살아온 시간에서 길어 올린 이야기."
        image="/media/covers/stories-cover.webp"
        mobileImage="/media/covers/stories-cover-mobile.webp"
        alt="돌담길에서 책을 들고 서 있는 조성연"
        objectPosition="center center"
        mobileObjectPosition="center center"
        align="left"
        shade="medium"
      />

      <section className="stories-intro" aria-labelledby="stories-intro-title">
        <div className="container stories-intro-inner">
          <p className="stories-kicker">살아 있는 작가 아카이브</p>
          <div className="stories-intro-grid">
            <h2 id="stories-intro-title">기억은 순서대로 오지 않는다.</h2>
            <div className="stories-intro-copy">
              <p>
                어떤 이야기는 집에서 시작하고, 어떤 이야기는 7월의 오후나
                깨끗한 잠옷, 수십 년 전에 들은 한 문장에서 시작한다.
              </p>
              <p>
                이곳의 이야기는 기억이 돌아오는 만큼 자란다. 완성된 회고록의
                목차가 아니라 사람과 장소, 물건과 계절, 사진이 또 다른 문을
                여는 아카이브다.
              </p>
            </div>
          </div>
          <div className="stories-intro-line" aria-hidden="true" />
        </div>
      </section>

      <section className="stories-feature" aria-labelledby="start-here-title">
        <div className="container stories-feature-inner">
          <figure className="stories-feature-figure">
            <Image
              src="/media/home/childhood-garden.jpg"
              alt="정원에서 웃고 있는 어린 조성연"
              width={1800}
              height={1350}
              sizes="(max-width: 899px) 100vw, 64vw"
              priority
            />
            <figcaption>아카이브 사진 · 어린 시절의 조성연</figcaption>
          </figure>

          <div className="stories-feature-copy">
            <p className="stories-kicker">첫 기억</p>
            <p className="stories-feature-number">01</p>
            <h2 id="start-here-title">아버지는 호랑이 꿈을 꾸었다</h2>
            <p className="stories-feature-lead">
              조성연이 태어나기 전, 아버지는 꿈에서 호랑이를 보았다. 태어난
              아이는 딸이었다. 가족의 농담은 “고양이였나 보다”였다.
            </p>
            <p>
              이 기억은 지금까지 기록된 만큼만 이곳에 둔다. 더 돌아오는
              이야기가 생길 때까지 비어 있는 자리는 비워 둔다.
            </p>
          </div>
        </div>
      </section>

      <section className="stories-opening" aria-labelledby="opening-collection-title">
        <div className="container">
          <header className="stories-section-heading">
            <p className="stories-kicker">첫 번째 이야기들</p>
            <h2 id="opening-collection-title">이야기로 들어가는 일곱 개의 문.</h2>
            <p>완성된 목차가 아니라, 아카이브를 먼저 열어 둔 기억들이다.</p>
          </header>

          <ol className="stories-opening-list">
            {openingCollection.map((story) => (
              <li className="stories-opening-item" key={story.number}>
                <span className="stories-opening-number">{story.number}</span>
                <div className="stories-opening-title-group">
                  <p className="stories-opening-meta">{story.meta}</p>
                  <h3>{story.title}</h3>
                </div>
                <span className="stories-opening-state">아카이브에 기록 중</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="stories-house" aria-labelledby="life-chapters-title">
        <figure className="stories-house-figure">
          <Image
            src="/media/home/childhood-house.jpg"
            alt="조성연 작가의 어린 시절과 연결된 집과 정원"
            width={1800}
            height={1059}
            sizes="100vw"
          />
          <figcaption className="container">아카이브 사진 · 기억 속의 집과 정원</figcaption>
        </figure>

        <div className="container stories-house-editorial">
          <div className="stories-house-copy">
            <p className="stories-kicker">삶의 장들</p>
            <h2 id="life-chapters-title">삶은 날짜보다 전환점으로 기억되기도 한다.</h2>
            <p>
              시간의 순서는 아래에 남아 있지만 기억에는 기억만의 구조가 있다.
              어떤 시절은 방으로, 어떤 시절은 사람이나 계절, 모든 것이 달라진
              한 순간으로 돌아온다.
            </p>
          </div>

          <ol className="stories-chapter-list">
            {lifeChapters.map((chapter, index) => (
              <li key={chapter}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {chapter}
              </li>
            ))}
          </ol>

          <figure className="stories-young-artist">
            <Image
              src="/media/esther/young-artist.jpg"
              alt="대학 시절의 조성연"
              width={1500}
              height={1125}
              sizes="(max-width: 899px) 72vw, 25vw"
            />
            <figcaption>아카이브 사진 · 대학 시절</figcaption>
          </figure>
        </div>
      </section>

      <section className="stories-memory" aria-labelledby="memory-collections-title">
        <div className="container stories-memory-inner">
          <div className="stories-memory-heading">
            <p className="stories-kicker">기억의 갈래</p>
            <h2 id="memory-collections-title">기억은 색과 날씨, 방으로도 찾을 수 있다.</h2>
          </div>

          <div className="stories-memory-list" aria-label="기억의 주제">
            {memoryCollections.map((collection) => (
              <span key={collection}>{collection}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="stories-newly" aria-labelledby="newly-remembered-title">
        <div className="container stories-newly-inner">
          <div className="stories-newly-copy">
            <p className="stories-kicker">새로 돌아온 기억</p>
            <h2 id="newly-remembered-title">어떤 이야기는 아주 늦게 돌아온다.</h2>
            <p>
              냄새나 식탁, 계절, 평범한 물건 하나가 오랫동안 조용했던 장면을
              갑자기 데려오기도 한다. 새로 돌아오는 이야기는 준비되는 만큼
              이곳에 더한다.
            </p>
            <Link href="/ko/archive/" className="stories-text-link">
              사진을 따라가기
            </Link>
          </div>

          <figure className="stories-newly-figure">
            <Image
              src="/media/esther/morning-table.jpg"
              alt="조성연 작가의 아침 식탁에 놓인 아침 식사"
              width={1200}
              height={1600}
              sizes="(max-width: 899px) 100vw, 38vw"
            />
            <figcaption>아침 식탁 · 지금의 한 장면</figcaption>
          </figure>
        </div>
      </section>

      <section className="stories-happiness" aria-labelledby="happiness-title">
        <div className="container stories-happiness-inner">
          <p className="stories-kicker">행복을 모으는 사람</p>
          <div className="stories-happiness-grid">
            <blockquote id="happiness-title">“나는 어쩌면 행복을 모으는 사람 같다.”</blockquote>
            <p>
              힘든 일도 있었다. 그런데 돌아보면 웃었던 장면이 먼저 떠오를
              때가 있다. 이 아카이브는 아픔을 지우지 않으면서, 사랑이 남긴
              것도 함께 기억한다.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
