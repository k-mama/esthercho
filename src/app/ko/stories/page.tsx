import type { Metadata } from "next";
import Link from "next/link";
import { PageCover } from "@/components/page-cover";
import { storyIndex } from "@/content/esther-story-archive";
import "../../stories/stories.css";

export const metadata: Metadata = {
  title: "이야기",
  description:
    "어린 시절과 가족, 믿음과 지금의 생활에서 돌아온 조성연 작가의 이야기.",
};

const openingCollection = storyIndex("ko");

export default function KoreanStoriesPage() {
  return (
    <main className="stories-page">
      <PageCover
        eyebrow="이야기"
        title="살아온 이야기"
        description="어린 시절과 가족, 믿음과 지금의 생활에서 돌아온 기억들."
        image="/media/covers/stories-seated-original-20261118-desktop.webp"
        mobileImage="/media/covers/stories-seated-original-20261118-mobile.webp"
        alt="밝은 실내에서 커피잔을 들고 소파에 앉은 조성연 작가의 실제 사진"
        objectPosition="center center"
        mobileObjectPosition="center center"
        align="left"
        shade="medium"
      />

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

            <Link href="/ko/stories/my-father-dreamed-of-a-tiger/" className="stories-text-link">01번 이야기 읽기</Link>
          </div>
        </div>
      </section>
<section className="stories-opening" aria-labelledby="opening-collection-title">
      <div className="container">
        <header className="stories-section-heading">
          <p className="stories-kicker">살아온 이야기</p>
          <h2 id="opening-collection-title">열여덟 편의 이야기,<br />네 개의 흐름.</h2>
          <p>이야기 번호는 그대로 두고, 읽는 길만 새롭게 엮었습니다.</p>
        </header>
        <div className="stories-act">
          <header className="stories-act-heading">
            <p className="stories-kicker">제01장</p>
            <h3>가장 행복했던 집</h3>
            <p>아버지의 농담과 청담동의 마당, 가족이 함께한 날들.</p>
          </header>
          <ol className="stories-opening-list">
            {["01","03","04","05","09","10","06"].map((n) => {
              const story = openingCollection.find((item) => item.number === n);
              return story ? <li className="stories-opening-item" key={story.number}>
                <span className="stories-opening-number">{story.number}</span>
                <div className="stories-opening-title-group"><p className="stories-opening-meta">{story.meta}</p>
                  <h4><Link href={story.href}>{story.title}</Link></h4></div>
                <Link href={story.href} className="stories-opening-action">이야기 읽기 <span aria-hidden="true">→</span></Link>
              </li> : null;
            })}
          </ol>
        </div>
        <div className="stories-act">
          <header className="stories-act-heading">
            <p className="stories-kicker">제02장</p>
            <h3>중학교 1학년, 그해 7월</h3>
            <p>아버지를 잃은 뒤에도 계속되던 하루. 그리고 미술의 길.</p>
          </header>
          <ol className="stories-opening-list">
            {["07","11"].map((n) => {
              const story = openingCollection.find((item) => item.number === n);
              return story ? <li className="stories-opening-item" key={story.number}>
                <span className="stories-opening-number">{story.number}</span>
                <div className="stories-opening-title-group"><p className="stories-opening-meta">{story.meta}</p>
                  <h4><Link href={story.href}>{story.title}</Link></h4></div>
                <Link href={story.href} className="stories-opening-action">이야기 읽기 <span aria-hidden="true">→</span></Link>
              </li> : null;
            })}
          </ol>
        </div>
        <div className="stories-act" id="story-two">
          <header className="stories-act-heading">
            <p className="stories-kicker">제03장</p>
            <h3>이제 내가 차리는 식탁</h3>
            <p>어른이 된 뒤의 가족, 식사, 그리고 아들에게 만든 동화.</p>
          </header>
          <ol className="stories-opening-list">
            {["02","12","15","16"].map((n) => {
              const story = openingCollection.find((item) => item.number === n);
              return story ? <li className="stories-opening-item" key={story.number}>
                <span className="stories-opening-number">{story.number}</span>
                <div className="stories-opening-title-group"><p className="stories-opening-meta">{story.meta}</p>
                  <h4><Link href={story.href}>{story.title}</Link></h4></div>
                <Link href={story.href} className="stories-opening-action">이야기 읽기 <span aria-hidden="true">→</span></Link>
              </li> : null;
            })}
          </ol>
        </div>
        <div className="stories-act">
          <header className="stories-act-heading">
            <p className="stories-kicker">제04장</p>
            <h3>행복을 모으는 사람</h3>
            <p>비 오는 날과 아침 말씀, 노을. 시간이 지난 뒤 남은 기억들.</p>
          </header>
          <ol className="stories-opening-list">
            {["13","14","17","18","08"].map((n) => {
              const story = openingCollection.find((item) => item.number === n);
              return story ? <li className="stories-opening-item" key={story.number}>
                <span className="stories-opening-number">{story.number}</span>
                <div className="stories-opening-title-group"><p className="stories-opening-meta">{story.meta}</p>
                  <h4><Link href={story.href}>{story.title}</Link></h4></div>
                <Link href={story.href} className="stories-opening-action">이야기 읽기 <span aria-hidden="true">→</span></Link>
              </li> : null;
            })}
          </ol>
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
            <Link className="stories-text-link" href="/ko/stories/the-happiness-collector/">08번 이야기 읽기 →</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
