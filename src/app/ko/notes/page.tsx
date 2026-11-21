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

      <MannaAuthorVoice locale="ko" placement="notes" />

      <section className="morning-present" aria-labelledby="morning-present-title">
        <div className="container morning-present-grid">
          <figure className="morning-present-figure">
            <Image src="/media/esther/morning-table.jpg"
              alt="조성연 작가가 실제 차린 아침 식사"
              width={1200} height={1600} sizes="(max-width: 899px) 88vw, 40vw"/>
            <figcaption>작가가 직접 차린 아침 식탁 중 하루</figcaption>
          </figure>
          <div className="morning-present-copy">
            <p className="morning-kicker">아침의 기록</p>
            <h2 id="morning-present-title">아침밥을 차리고 성경을 읽는다.</h2>
            <p>그 자리에서 읽은 말씀과 떠오른 생각을 적는다. 아래의 글은 조성연 작가가 직접 쓴 묵상에서 가져왔다.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
