import type { Metadata } from "next";
import Image from "next/image";
import { PageCover } from "@/components/page-cover";
import "../../studio/studio.css";

export const metadata: Metadata = {
  title: "손으로 그린 이야기",
  description:
    "조성연 작가가 공개하기로 선택한 원본 손그림과 명확히 구분된 재해석 작업, 그리고 이어지는 시각 실험.",
};

export default function KoreanStudioPage() {
  return (
    <main className="studio-page">
      <PageCover
        eyebrow="스튜디오"
        title="손으로 그린 이야기, 빛으로 다시 태어나다"
        description="원본 손그림과 새롭게 이어지는 시각 작업."
        image="/media/covers/studio-cover.jpg"
        alt="조성연의 원본 손그림으로 구성한 종이 콜라주"
        objectPosition="center center"
        mobileObjectPosition="43% center"
        align="right"
        shade="soft"
      />

      <section className="studio-intro" aria-labelledby="studio-intro-title">
        <div className="container">
          <p className="studio-kicker">스튜디오 소개</p>
          <div className="studio-intro-grid">
            <h2 id="studio-intro-title">원본은 그대로 보이게 둔다.</h2>
            <div className="studio-intro-copy">
              <p>
                이 방에서는 원본과 이후의 재해석을 서로 다른 작업으로 남긴다.
                공개 아카이브에는 조성연 작가가 직접 보여주고 싶다고 선택한 원본만 더한다.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="studio-reimagined" aria-labelledby="studio-reimagined-title">
        <div className="container studio-work-grid studio-work-grid-reverse">
          <div className="studio-work-copy">
            <p className="studio-kicker">재해석</p>
            <h2 id="studio-reimagined-title">이후의 재해석.</h2>
            <p>
              디지털 작업과 AI-assisted editorial work는 원본 그림을 다른
              시각 형식으로 이어갈 수 있다. 그때 새 이미지는 아카이브 자료가
              아니라 재해석 작업임을 분명히 밝힌다.
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
              조성연의 어린 시절 원본 스케치를 바탕으로 한 AI-assisted
              editorial reinterpretation
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="studio-principle" aria-labelledby="studio-principle-title">
        <div className="container studio-principle-grid">
          <div>
            <p className="studio-kicker">과정</p>
            <h2 id="studio-principle-title">원본과 재해석은 서로 다른 종류의 작업으로 남긴다.</h2>
          </div>
          <div className="studio-principle-copy">
            <p>
              하나가 다른 하나의 출발점이 될 수는 있어도, 역사적 기록과
              이후의 창작물을 같은 것으로 보이게 만들지는 않는다.
            </p>
            <p>과정도 이야기의 일부가 될 수 있지만 과거인 척할 필요는 없다.</p>
          </div>
        </div>
      </section>

      <section className="studio-future" aria-labelledby="studio-future-title">
        <div className="container studio-future-inner">
          <p className="studio-kicker">선택한 원본들</p>
          <h2 id="studio-future-title">작가가 고른 손그림을 준비되는 대로 더한다.</h2>
          <p>
            빈 자리를 미리 채우지 않는다. 조성연 작가가 이곳에 남기고 싶은 작업만
            골라 공개 아카이브를 천천히 채운다.
          </p>
        </div>
      </section>
    </main>
  );
}
