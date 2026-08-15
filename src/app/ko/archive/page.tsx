import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageCover } from "@/components/page-cover";
import "../../archive/archive.css";

export const metadata: Metadata = {
  title: "어린 시절 앨범",
  description:
    "조성연 작가의 어린 시절 사진과 기억의 장소, 가족의 흔적과 시간이 남긴 평범한 것들을 모은 조용한 아카이브.",
};

export default function KoreanArchivePage() {
  return (
    <main className="childhood-page">
      <PageCover
        eyebrow="어린 시절"
        title="어린 시절 앨범"
        description="어린 시절 사진과 가족 기록, 그림과 오래 남은 기억."
        image="/media/covers/childhood-cover.jpg"
        alt="정원에서 웃고 있는 어린 조성연"
        objectPosition="42% center"
        mobileObjectPosition="38% center"
        align="right"
        shade="medium"
      />

      <section className="childhood-intro" aria-labelledby="childhood-intro-title">
        <div className="container">
          <p className="childhood-kicker">앨범을 열며</p>
          <div className="childhood-intro-grid">
            <h2 id="childhood-intro-title">한 사람의 삶은 작은 것들을 남긴다.</h2>
            <div className="childhood-intro-copy">
              <p>
                집 하나. 정원 하나. 빛 속에 서 있는 아이. 아카이브의
                시작은 대개 거창하지 않다.
              </p>
              <p>
                이 사진들은 실제 삶의 조각으로 남긴다. 오래된 흔적과
                작은 결함까지 지우지 않은 채로.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="childhood-house" aria-labelledby="childhood-house-title">
        <figure className="childhood-house-figure">
          <Image
            src="/media/home/childhood-house.jpg"
            alt="조성연 작가의 어린 시절과 연결된 집과 정원"
            width={1800}
            height={1059}
            sizes="100vw"
            priority
          />
          <figcaption className="container">
            아카이브 사진 · 기억 속의 집과 정원
          </figcaption>
        </figure>

        <div className="container childhood-house-copy">
          <div>
            <p className="childhood-kicker">기억 속의 장소</p>
            <h2 id="childhood-house-title">앨범은 집에서 시작한다.</h2>
          </div>
          <div className="childhood-house-copy-text">
            <p>
              집에는 방보다 많은 것이 남는다. 시간이 흐른 뒤에도 창문,
              마당, 계단, 정원의 모양이 이야기보다 먼저 돌아오기도 한다.
            </p>
            <p>
              이곳에서 장소는 향수를 위한 장식이 아니다. 아이가 서 있던
              곳, 가족의 시간이 흘렀던 곳, 기억이 다시 길을 찾는 실제
              기록의 일부다.
            </p>
          </div>
        </div>
      </section>

      <section className="childhood-garden" aria-labelledby="childhood-garden-title">
        <div className="container childhood-garden-inner">
          <figure className="childhood-garden-figure">
            <Image
              src="/media/home/childhood-garden.jpg"
              alt="정원에서 웃고 있는 어린 조성연"
              width={1800}
              height={1350}
              sizes="(max-width: 899px) 100vw, 64vw"
            />
            <figcaption>아카이브 사진 · 어린 시절의 조성연</figcaption>
          </figure>

          <div className="childhood-garden-copy">
            <p className="childhood-kicker">사진 속의 아이</p>
            <h2 id="childhood-garden-title">상징이 아니라, 한 사람.</h2>
            <p>
              사진을 어떤 교훈의 삽화로 만들 필요는 없다. 얼굴 하나,
              계절 하나, 장소 하나. 누군가 그 순간을 남겨두고 싶었던
              이유까지 설명하지 않아도 된다.
            </p>
          </div>
        </div>
      </section>

      <section className="childhood-fragments" aria-labelledby="childhood-fragments-title">
        <div className="container childhood-fragments-inner">
          <div>
            <p className="childhood-kicker">사진 너머의 기억</p>
            <h2 id="childhood-fragments-title">모든 기억이 사진을 남긴 것은 아니다.</h2>
          </div>
          <div className="childhood-fragments-copy">
            <p>
              어떤 장면은 한 문장, 가족의 농담, 시계 소리, 식탁, 여름밤,
              혹은 집에 가고 싶었던 마음으로만 남아 있다.
            </p>
            <p>
              그런 조각도 아카이브에 속한다. 이야기가 될 때조차 비어 있는
              부분을 그럴듯하게 채워 완전한 기억처럼 만들지 않는다.
            </p>
          </div>
        </div>
      </section>

      <section
        className="childhood-archive-principle"
        aria-labelledby="childhood-principle-title"
      >
        <div className="container childhood-principle-inner">
          <div>
            <p className="childhood-kicker">아카이브 원칙</p>
            <h2 id="childhood-principle-title">기록과 재해석은 서로 다른 자리에 둔다.</h2>
          </div>
          <div className="childhood-principle-copy">
            <p>
              원본 사진은 아카이브 자료로 보여준다. 기억을 바탕으로 나중에
              재구성하거나 다시 그린 이미지는 실제 역사 자료처럼 보이지
              않도록 별도로 밝힌다.
            </p>
            <p>
              과거를 더 예쁘게 만드는 것이 목적이 아니다. 디자인 안에서도
              실제 삶의 얼굴이 알아볼 수 있게 남아 있어야 한다.
            </p>
            <Link href="/ko/stories/" className="childhood-link">
              이야기로 들어가기
            </Link>
          </div>
        </div>
      </section>

      <section className="childhood-ending" aria-labelledby="childhood-ending-title">
        <div className="container childhood-ending-inner">
          <p className="childhood-kicker">열린 앨범</p>
          <h2 id="childhood-ending-title">기억은 나중에 더 돌아올 수 있다.</h2>
          <p>
            어린 시절 아카이브는 미완성인 채로 있어도 된다. 어떤 사진은
            자기 곁에 놓일 이야기를 오래 기다릴 수도 있다.
          </p>
        </div>
      </section>
    </main>
  );
}
