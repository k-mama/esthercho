import type { Metadata } from "next";
import { PageCover } from "@/components/page-cover";
import { ChildhoodArchiveSections } from "@/components/childhood-archive-sections";
import "../../archive/archive.css";
import "../../archive/archive-luminous.css";

export const metadata: Metadata = {
  title: "어린 시절 앨범",
  description: "서울 청담동의 실제 옛집. 조성연 작가와 어머니, 동생들이 가장 행복했다고 기억하는 시절의 가족사진과 이야기.",
};

export default function KoreanArchivePage() {
  return (
    <main className="childhood-page childhood-page-ko">
      <PageCover
        eyebrow="어린 시절"
        title="어린 시절 앨범"
        description="우리 가족이 가장 행복했다고 기억하는, 서울 청담동의 그 집."
        image="/media/covers/childhood-cover.jpg"
        alt="정원에서 웃고 있는 어린 조성연"
        objectPosition="42% center"
        mobileObjectPosition="38% center"
        align="right"
        shade="medium"
      />
      <ChildhoodArchiveSections locale="ko" />
    </main>
  );
}
