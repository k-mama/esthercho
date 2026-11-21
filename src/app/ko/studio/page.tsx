import type { Metadata } from "next";
import Image from "next/image";
import { PageCover } from "@/components/page-cover";
import "../../studio/studio.css";

export const metadata: Metadata = {
  title: "손으로 그린 이야기",
  description:
    "조성연 작가의 손그림에서 출발한 작업과 이후의 재해석, 시각 실험.",
};

export default function KoreanStudioPage() {
  return (
    <main className="studio-page">
      <PageCover
        eyebrow="스튜디오"
        title="손으로 그린 이야기"
        description="손으로 그린 출발점과 이후의 재해석, 그리고 시각 작업."
        image="/media/covers/studio-cover.jpg"
        alt="조성연의 원본 손그림으로 구성한 종이 콜라주"
        objectPosition="center center"
        mobileObjectPosition="43% center"
        align="right"
        shade="soft"
      />

      <section className="studio-reimagined" aria-labelledby="studio-reimagined-title">
        <div className="container studio-work-grid studio-work-grid-reverse">
          <div className="studio-work-copy">
            <p className="studio-kicker">이후의 작업</p>
            <h2 id="studio-reimagined-title">어린 시절 그림에서 시작된 콜라주</h2>
            <p>
              조성연의 어린 시절 그림을 바탕으로 후에 만든 디지털 재해석 작품입니다. 원화와 동일한 자료는 아닙니다.
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
              어린 시절 스케치에서 출발한 AI 보조 디지털 재해석 이미지
            </figcaption>
          </figure>
        </div>
      </section>

    </main>
  );
}
