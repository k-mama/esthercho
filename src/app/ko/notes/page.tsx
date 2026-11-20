import type { Metadata } from "next";
import Image from "next/image";
import { MannaAuthorVoice } from "@/components/manna-author-voice";
import { PageCover } from "@/components/page-cover";
import "../../notes/notes.css";

export const metadata: Metadata = {
  title: "아침 식탁",
  description: "조성연 작가의 아침 식탁에서 태어난 묵상과 기록.",
};

export default function KoreanNotesPage() {
  return (
    <main className="morning-page morning-page-ko">
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

      <section className="morning-present" aria-labelledby="morning-present-title">
        <div className="container morning-present-grid">
          <figure className="morning-present-figure">
            <Image
              src="/media/esther/morning-table.jpg"
              alt="조성연 작가의 아침 식탁에 놓인 아침 식사"
              width={1200}
              height={1600}
              sizes="(max-width: 899px) 88vw, 40vw"
              priority
            />
            <figcaption>아침 식탁 · 오늘</figcaption>
          </figure>

          <div className="morning-present-copy">
            <p className="morning-kicker">평범한 아침</p>
            <h2 id="morning-present-title">
              <span>글이 따라잡을 즈음엔</span>
              <span>하루가 이미 움직이고 있습니다.</span>
            </h2>
            <p>
              밥을 하고, 전화할 사람이 있고, 한 구절이 자꾸 생각나고,
              가끔은 웃겨서 적어 두고 싶은 생각도 생깁니다. 기록은 거기서 시작합니다.
            </p>
          </div>
        </div>
      </section>

      <MannaAuthorVoice locale="ko" placement="notes" />
    </main>
  );
}
