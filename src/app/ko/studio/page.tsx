import type { Metadata } from "next";
import Image from "next/image";
import { PageCover } from "@/components/page-cover";
import "../../studio/studio.css";

export const metadata: Metadata = {
  title: "손으로 그린 이야기",
  description:
    "조성연 작가가 공개하기로 선택한 원본 손그림과 이후의 재해석 작업, 그리고 시각 실험.",
};

export default function KoreanStudioPage() {
  return (
    <main className="studio-page">
      <PageCover
        eyebrow="스튜디오"
        title="손으로 그린 이야기"
        description="원본 손그림과 이후의 재해석, 그리고 시각 작업."
        image="/media/covers/studio-cover.jpg"
        alt="조성연의 원본 손그림으로 구성한 종이 콜라주"
        objectPosition="center center"
        mobileObjectPosition="43% center"
        align="right"
        shade="soft"
      />

      <section className="studio-intro" aria-labelledby="studio-intro-title">
        <div className="container">
          <p className="studio-kicker">원본</p>
          <div className="studio-intro-grid">
            <h2 id="studio-intro-title">원본이 먼저입니다.</h2>
            <div className="studio-intro-copy">
              <p>
                조성연 작가가 보여주고 싶다고 고른 원본만 이곳에 놓습니다.
                이후의 작업은 이후의 작업으로 보여줍니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="studio-reimagined" aria-labelledby="studio-reimagined-title">
        <div className="container studio-work-grid studio-work-grid-reverse">
          <div className="studio-work-copy">
            <p className="studio-kicker">이후의 작업</p>
            <h2 id="studio-reimagined-title">그림은 다른 모습으로 이어질 수 있습니다.</h2>
            <p>
              한 장의 스케치가 콜라주나 다른 디지털 이미지가 되기도 합니다.
              출발점은 그대로 밝히고, 새 작업을 과거의 기록처럼 보이게 하지는 않습니다.
            </p>
          </div>

          <figure className="studio-figure studio-reimagined-figure">
            <Image
              src="/media/esther/still-making-father-child-collage-20260802.png"
              alt="어린 조성연이 아버지 등에 업혀 있는 장면을 종이 콜라주로 재해석한 이미지"
              width={1536}
              height={1536}
              sizes="(max-width: 899px) 100vw, 58vw"
              priority
            />
            <figcaption>
              조성연의 어린 시절 원본 스케치에서 출발한 AI-assisted editorial reinterpretation
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="studio-principle" aria-labelledby="studio-principle-title">
        <div className="container studio-principle-grid">
          <div>
            <p className="studio-kicker">과정</p>
            <h2 id="studio-principle-title">원본과 새 작업은 같은 것이 아닙니다.</h2>
          </div>
          <div className="studio-principle-copy">
            <p>
              둘은 나란히 놓일 수 있지만 같은 시간에서 나온 것처럼 보일 필요는 없습니다.
            </p>
          </div>
        </div>
      </section>

      <section className="studio-future" aria-labelledby="studio-future-title">
        <div className="container studio-future-inner">
          <p className="studio-kicker">선택한 원본들</p>
          <h2 id="studio-future-title">더 보여주고 싶은 그림이 생기면, 그때 더합니다.</h2>
          <p>벽을 미리 채울 필요는 없습니다. 이 방은 천천히 기다려도 됩니다.</p>
        </div>
      </section>
    </main>
  );
}
