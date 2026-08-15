import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageCover } from "@/components/page-cover";
import "../../archive/archive.css";

export const metadata: Metadata = {
  title: "어린 시절 앨범",
  description:
    "조성연 작가의 어린 시절 사진과 기억의 장소, 가족의 흔적과 시간이 남긴 평범한 것들을 모은 아카이브.",
};

export default function KoreanArchivePage() {
  return (
    <main className="childhood-page childhood-page-ko">
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
            <h2 id="childhood-intro-title">
              <span>어린 시절의</span>
              <span>사진들.</span>
            </h2>
            <div className="childhood-intro-copy">
              <p>
                집과 정원, 밖에 서 있는 아이. 아카이브는 그렇게 평범한 사진에서
                시작합니다.
              </p>
              <p>
                오래된 흔적도 작은 결함도 지우지 않습니다. 그때의 사진은 그때의
                모습 그대로 남겨둡니다.
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
            <h2 id="childhood-house-title">
              <span>앨범은 집에서</span>
              <span>시작합니다.</span>
            </h2>
          </div>
          <div className="childhood-house-copy-text">
            <p>
              시간이 많이 지난 뒤에도 창문이나 마당, 계단, 정원의 모양이
              이야기보다 먼저 돌아올 때가 있습니다.
            </p>
            <p>
              아이가 서 있던 곳, 가족의 시간이 흘렀던 곳. 장소도 기억의 일부로
              함께 남겨둡니다.
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
            <h2 id="childhood-garden-title">정원 속의 아이.</h2>
            <p>
              누군가 이 순간을 남겨두고 싶었습니다. 사진은 그 사실만으로도
              충분합니다.
            </p>
          </div>
        </div>
      </section>

      <section className="childhood-fragments" aria-labelledby="childhood-fragments-title">
        <div className="container childhood-fragments-inner">
          <div>
            <p className="childhood-kicker">사진 너머의 기억</p>
            <h2 id="childhood-fragments-title">
              <span>사진이 남지 않은</span>
              <span>기억도 있습니다.</span>
            </h2>
          </div>
          <div className="childhood-fragments-copy">
            <p>
              어떤 장면은 한 문장으로, 가족의 농담이나 시계 소리로, 식탁이나
              여름밤의 감각으로만 남아 있습니다.
            </p>
            <p>
              그런 조각도 이 앨범에 들어옵니다. 모르는 부분을 그럴듯하게 채워서
              완전한 기억처럼 만들지는 않습니다.
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
            <h2 id="childhood-principle-title">
              <span>기록과 재해석은</span>
              <span>서로 다른 자리에 둡니다.</span>
            </h2>
          </div>
          <div className="childhood-principle-copy">
            <p>
              원본 사진은 아카이브 자료로 보여줍니다. 기억을 바탕으로 나중에
              재구성하거나 다시 그린 이미지는 실제 역사 자료와 분명히 구분합니다.
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
          <h2 id="childhood-ending-title">
            <span>앨범은 아직</span>
            <span>끝나지 않았습니다.</span>
          </h2>
          <p>어떤 사진은 자기 곁에 놓일 이야기를 오래 기다리기도 합니다.</p>
        </div>
      </section>
    </main>
  );
}
