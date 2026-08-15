import type { Metadata } from "next";
import Link from "next/link";
import { PageCover } from "@/components/page-cover";
import "../../stories/stories.css";

export const metadata: Metadata = {
  title: "이야기",
  description:
    "어린 시절과 가족, 믿음과 지금의 생활에서 돌아온 조성연 작가의 이야기.",
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

export default function KoreanStoriesPage() {
  return (
    <main className="stories-page">
      <PageCover
        eyebrow="이야기"
        title="살아온 이야기"
        description="어린 시절과 가족, 믿음과 지금의 생활에서 돌아온 기억들."
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
          <p className="stories-kicker">기억이 돌아오는 방식</p>
          <div className="stories-intro-grid">
            <h2 id="stories-intro-title">기억은 순서대로 오지 않는다.</h2>
            <div className="stories-intro-copy">
              <p>
                어떤 이야기는 집에서 시작하고, 어떤 이야기는 7월의 오후나
                깨끗한 잠옷, 수십 년 전에 들은 한 문장에서 시작한다.
              </p>
              <p>
                사람 하나, 사진 한 장, 계절 하나가 오래 잠잠하던 기억을
                다시 데려오기도 한다. 이야기는 그렇게 하나씩 늘어난다.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="stories-feature" aria-labelledby="start-here-title">
        <div className="container stories-feature-inner stories-feature-text-only">
          <div className="stories-feature-copy">
            <p className="stories-kicker">첫 기억</p>
            <p className="stories-feature-number">01</p>
            <h2 id="start-here-title">아버지는 호랑이 꿈을 꾸었다</h2>
            <p className="stories-feature-lead">
              조성연이 태어나기 전, 아버지는 꿈에서 호랑이를 보았다. 태어난
              아이는 딸이었다. 가족의 농담은 “고양이였나 보다”였다.
            </p>
            <p>지금 기억나는 데까지 썼다. 모르는 부분은 채우지 않았다.</p>
          </div>
        </div>
      </section>

      <section className="stories-opening" aria-labelledby="opening-collection-title">
        <div className="container">
          <header className="stories-section-heading">
            <p className="stories-kicker">먼저 꺼낸 이야기들</p>
            <h2 id="opening-collection-title">먼저 꺼낸 일곱 이야기.</h2>
            <p>처음 기록해 두기로 한 기억들이다.</p>
          </header>

          <ol className="stories-opening-list">
            {openingCollection.map((story) => (
              <li className="stories-opening-item" key={story.number}>
                <span className="stories-opening-number">{story.number}</span>
                <div className="stories-opening-title-group">
                  <p className="stories-opening-meta">{story.meta}</p>
                  <h3>{story.title}</h3>
                </div>
                <span className="stories-opening-state">기록됨</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="stories-house" aria-labelledby="life-chapters-title">
        <div className="container stories-house-editorial stories-house-editorial-text-only">
          <div className="stories-house-copy">
            <p className="stories-kicker">시간을 따라</p>
            <h2 id="life-chapters-title">그래도 삶에는 시간이 있다.</h2>
            <p>
              어린 시절, 아버지와 함께한 시간, 7월, 학교와 미술, 가족과
              믿음, 지금의 삶. 기억은 뒤섞여 와도 살아온 시간은 남아 있다.
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
        </div>
      </section>

      <section className="stories-newly" aria-labelledby="newly-remembered-title">
        <div className="container stories-newly-inner stories-newly-text-only">
          <div className="stories-newly-copy">
            <p className="stories-kicker">기억이 돌아올 때</p>
            <h2 id="newly-remembered-title">별것 아닌 것이 기억을 데려온다.</h2>
            <p>
              냄새나 식탁, 계절, 평범한 물건 하나면 충분할 때가 있다. 다시
              떠오른 장면은 그때 적어 둔다.
            </p>
            <Link href="/ko/archive/" className="stories-text-link">
              사진을 따라가기
            </Link>
          </div>
        </div>
      </section>

      <section className="stories-happiness" aria-labelledby="happiness-title">
        <div className="container stories-happiness-inner">
          <p className="stories-kicker">행복을 모으는 사람</p>
          <div className="stories-happiness-grid">
            <blockquote id="happiness-title">“나는 어쩌면 행복을 모으는 사람 같다.”</blockquote>
            <p>
              힘든 일도 있었다. 그런데 이상하게 웃었던 장면이 먼저 떠오를
              때가 있다. 둘 다 사실이다.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
