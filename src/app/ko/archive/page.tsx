import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageCover } from "@/components/page-cover";
import "../../archive/archive.css";
import "../../archive/archive-luminous.css";

export const metadata: Metadata = {
  title: "어린 시절 앨범",
  description:
    "조성연 작가의 어린 시절 사진과 기억 속의 장소, 가족의 흔적과 오래 남은 것들.",
};

export default function KoreanArchivePage() {
  return (
    <main className="childhood-page childhood-page-ko">
      <PageCover
        eyebrow="어린 시절"
        title="어린 시절 앨범"
        description="사진과 가족의 흔적, 그림과 오래 남은 기억."
        image="/media/covers/childhood-cover.jpg"
        alt="정원에서 웃고 있는 어린 조성연"
        objectPosition="42% center"
        mobileObjectPosition="38% center"
        align="right"
        shade="medium"
      />

      <section className="childhood-intro" aria-labelledby="childhood-intro-title">
        <div className="container">
          <p className="childhood-kicker">앨범을 열면</p>
          <div className="childhood-intro-grid">
            <h2 id="childhood-intro-title">
              <span>어린 시절의</span>
              <span>사진들.</span>
            </h2>
            <div className="childhood-intro-copy">
              <p>집, 정원, 밖에 서 있는 아이. 앨범은 그렇게 시작합니다.</p>
              <p>사진은 지금 있는 모습 그대로 둡니다. 시간도 이미 그 위에 남아 있습니다.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="childhood-house" aria-labelledby="childhood-house-title">
        <figure className="childhood-house-figure">
          <Image
            src="/media/esther/childhood-house.jpg"
            alt="조성연 작가의 어린 시절과 연결된 집과 정원"
            width={1800}
            height={1059}
            sizes="100vw"
            priority
          />
          <figcaption className="container">어린 시절의 집과 정원</figcaption>
        </figure>

        <div className="container childhood-house-copy">
          <div>
            <p className="childhood-kicker">집</p>
            <h2 id="childhood-house-title">
              <span>가끔은 이야기가 아니라</span>
              <span>집이 먼저 돌아옵니다.</span>
            </h2>
          </div>
          <div className="childhood-house-copy-text">
            <p>
              창문, 마당, 계단, 정원의 모양. 시간이 많이 지난 뒤에도 장소가
              이야기보다 먼저 떠오를 때가 있습니다.
            </p>
            <p>
              아이가 서 있었고 가족이 살았던 곳. 기억은 자꾸 그곳으로 돌아갑니다.
            </p>
          </div>
        </div>
      </section>

      <section className="childhood-garden" aria-labelledby="childhood-garden-title">
        <div className="container childhood-garden-inner">
          <figure className="childhood-garden-figure">
            <Image
              src="/media/esther/childhood-garden.jpg"
              alt="정원에서 웃고 있는 어린 조성연"
              width={1800}
              height={1350}
              sizes="(max-width: 899px) 100vw, 64vw"
            />
            <figcaption>어린 시절의 조성연</figcaption>
          </figure>

          <div className="childhood-garden-copy">
            <p className="childhood-kicker">아이</p>
            <h2 id="childhood-garden-title">정원 속의 아이.</h2>
            <p>
              누군가 이 순간을 남겨두고 싶었습니다. 사진은 그것만으로도 충분합니다.
            </p>
          </div>
        </div>
      </section>

      <section className="childhood-fragments" aria-labelledby="childhood-fragments-title">
        <div className="container childhood-fragments-inner">
          <div>
            <p className="childhood-kicker">사진이 없는 기억</p>
            <h2 id="childhood-fragments-title">
              <span>사진이 남지 않은</span>
              <span>기억도 있습니다.</span>
            </h2>
          </div>
          <div className="childhood-fragments-copy">
            <p>
              한 문장, 가족의 농담, 시계 소리, 식탁, 여름밤, 집에 가고 싶었던 마음.
            </p>
            <p>
              다 기억나지 않아도 괜찮습니다. 모르는 부분은 모르는 채로 둡니다.
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
            <p className="childhood-kicker">원본은 원본대로</p>
            <h2 id="childhood-principle-title">
              <span>오래된 사진은</span>
              <span>오래된 사진으로 둡니다.</span>
            </h2>
          </div>
          <div className="childhood-principle-copy">
            <p>
              기억을 바탕으로 나중에 다시 만들거나 그린 이미지는 이후의 작업이라고
              표시합니다. 실제 옛 사진처럼 보이게 두지 않습니다.
            </p>
            <Link href="/ko/stories/" className="childhood-link">
              이야기 읽기
            </Link>
          </div>
        </div>
      </section>

      <section className="childhood-ending" aria-labelledby="childhood-ending-title">
        <div className="container childhood-ending-inner">
          <p className="childhood-kicker">다음 장</p>
          <h2 id="childhood-ending-title">
            <span>어떤 사진은</span>
            <span>자기 이야기를 오래 기다립니다.</span>
          </h2>
        </div>
      </section>
    </main>
  );
}
