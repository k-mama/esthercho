import type { Metadata } from "next";
import { PageCover } from "@/components/page-cover";

export const metadata: Metadata = {
  title: "아침 식탁",
};

export default function KoreanNotesPage() {
  return (
    <main>
      <PageCover
        eyebrow="아침 식탁"
        title="아침 식탁"
        description="아침 식탁에서 태어난 묵상과 기록."
        image="/media/covers/morning-table-cover.webp"
        mobileImage="/media/covers/morning-table-cover-mobile.webp"
        alt="아보카도 토스트와 달걀, 포도와 아이스커피가 놓인 조성연의 아침 식탁"
        objectPosition="center center"
        mobileObjectPosition="center center"
        align="right"
        shade="strong"
      />
      <section className="page-cover-followup">
        <div className="container page-cover-followup-inner">
          <p>아침 식탁에서 태어난 묵상과 기록.</p>
        </div>
      </section>
    </main>
  );
}
