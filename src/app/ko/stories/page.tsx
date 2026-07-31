import type { Metadata } from "next";
import { PageCover } from "@/components/page-cover";

export const metadata: Metadata = {
  title: "삶에서 태어난 이야기",
};

export default function KoreanStoriesPage() {
  return (
    <main>
      <PageCover
        eyebrow="이야기"
        title="삶에서 태어난 이야기"
        description="기억과 믿음, 살아온 시간에서 길어 올린 이야기."
        image="/media/covers/stories-cover.jpg"
        alt="대학생 시절 거리에서 촬영한 조성연"
        objectPosition="center center"
        mobileObjectPosition="61% center"
        align="left"
        shade="medium"
      />
      <section className="page-cover-followup">
        <div className="container page-cover-followup-inner">
          <p>기억과 믿음, 살아온 시간에서 길어 올린 이야기.</p>
        </div>
      </section>
    </main>
  );
}
