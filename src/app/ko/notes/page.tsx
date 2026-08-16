import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageCover } from "@/components/page-cover";
import "../../notes/notes.css";
import "../../notes/notes-polish.css";

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

      <section className="morning-foyer" aria-labelledby="morning-foyer-title">
        <div className="container morning-foyer-inner">
          <p className="morning-kicker">식탁에 앉으면</p>
          <div className="morning-foyer-grid">
            <h2 id="morning-foyer-title">
              <span>아침밥과 말씀,</span>
              <span>그리고 그날 아침에 생긴 일들.</span>
            </h2>
            <p>
              어떤 기록은 말씀 한 구절에서 시작하고, 어떤 날은 아침밥이나 가족 식사,
              설거지하기 전에 있었던 작은 일에서 시작합니다.
            </p>
          </div>
        </div>
      </section>

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

      <section className="morning-manuscript" aria-labelledby="morning-manuscript-title">
        <div className="container morning-manuscript-grid">
          <div>
            <p className="morning-kicker">식탁에서 원고로</p>
            <h2 id="morning-manuscript-title">
              <span>이 아침들 가운데 일부가</span>
              <span>Manna on the Table이 되어가고 있습니다.</span>
            </h2>
          </div>

          <div className="morning-manuscript-copy">
            <p>
              이곳에 쌓인 아침과 말씀, 식사와 질문, 작은 생각들이 같은 결로
              원고 안에 이어지고 있습니다.
            </p>
            <Link href="/ko/books/" className="morning-link">
              책 프로젝트 보기
            </Link>
          </div>
        </div>
      </section>

      <section className="morning-close" aria-labelledby="morning-close-title">
        <div className="container morning-close-inner">
          <p className="morning-kicker">다음 아침</p>
          <h2 id="morning-close-title">
            <span>내일도</span>
            <span>아침밥은 차려집니다.</span>
          </h2>
        </div>
      </section>
    </main>
  );
}
