import type { Metadata } from "next";
import { PageCover } from "@/components/page-cover";

export const metadata: Metadata = {
  title: "손으로 그린 이야기",
};

export default function KoreanStudioPage() {
  return (
    <main>
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
      <section className="page-cover-followup">
        <div className="container page-cover-followup-inner">
          <p>원본 손그림과 새롭게 이어지는 시각 작업.</p>
        </div>
      </section>
    </main>
  );
}
