import type { Metadata } from "next";
import { PageCover } from "@/components/page-cover";
import { ChildhoodArchiveSections } from "@/components/childhood-archive-sections";
import "../../archive/archive.css";
import "../../archive/archive-luminous.css";

export const metadata: Metadata = {
  title: "어린 시절 앨범",
  description: "서울 청담동의 실제 옛집과 가족의 기억. 옛 사진과, 편집 사실을 표시한 가족사진 재구성 이미지.",
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
