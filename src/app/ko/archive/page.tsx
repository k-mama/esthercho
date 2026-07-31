import type { Metadata } from "next";
import { PageCover } from "@/components/page-cover";

export const metadata: Metadata = {
  title: "어린 시절 앨범",
};

export default function KoreanArchivePage() {
  return (
    <main>
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
      <section className="page-cover-followup">
        <div className="container page-cover-followup-inner">
          <p>어린 시절 사진과 가족 기록, 그림과 오래 남은 기억.</p>
        </div>
      </section>
    </main>
  );
}
