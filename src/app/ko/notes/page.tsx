import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageCover } from "@/components/page-cover";
import "../../notes/notes.css";

export const metadata: Metadata = {
  title: "아침 식탁",
  description: "조성연 작가의 아침 식탁에서 태어난 묵상과 기록.",
};

export default function KoreanNotesPage() {
  return (
    <main className="morning-page">
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

      <section className="morning-intro" aria-labelledby="morning-intro-title">
        <div className="container">
          <p className="morning-kicker">다시 돌아오는 자리</p>
          <div className="morning-intro-grid">
            <h2 id="morning-intro-title">식탁에는 아침보다 많은 것이 놓일 수 있다.</h2>
            <div className="morning-intro-copy">
              <p>
                아침 식탁에는 말씀과 기도, 평범한 일상과 아직 깔끔하게
                정리되지 않은 생각에서 태어난 묵상을 모은다.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="morning-table-scene" aria-labelledby="morning-table-scene-title">
        <div className="container morning-table-inner">
          <figure className="morning-table-figure">
            <Image
              src="/media/esther/morning-table.jpg"
              alt="조성연 작가의 아침 식탁에 놓인 아침 식사"
              width={1200}
              height={1600}
              sizes="(max-width: 899px) 82vw, 38vw"
              priority
            />
            <figcaption>아침 식탁 · 현재의 한 장면</figcaption>
          </figure>

          <div className="morning-table-copy">
            <p className="morning-kicker">평범한 하루의 크기</p>
            <h2 id="morning-table-scene-title">믿음도 결국 평범한 하루 안에서 살아야 한다.</h2>
            <p>
              이 글들은 일상의 크기 가까이에 머문다. 질문과 기도, 작은
              웃음 하나를 남기기 위해 거창한 장면이 먼저 필요하지는 않다.
            </p>
          </div>
        </div>
      </section>

      <section className="morning-writing" aria-labelledby="morning-writing-title">
        <div className="container morning-writing-inner">
          <div>
            <p className="morning-kicker">현재 원고</p>
            <h2 id="morning-writing-title">Manna on the Table은 출간을 준비 중이다.</h2>
          </div>
          <div className="morning-writing-copy">
            <p>
              묵상 원고는 영어 기준 원문을 먼저 완성하고 있다. 이후 언어판은
              잠금된 영문 원고를 바탕으로 준비한다.
            </p>
            <p>출간 정보는 실제로 확정된 뒤에 공개한다.</p>
            <Link href="/ko/books/" className="morning-link">
              책 프로젝트 보기
            </Link>
          </div>
        </div>
      </section>

      <section className="morning-ending" aria-labelledby="morning-ending-title">
        <div className="container">
          <p className="morning-kicker">쓰는 중인 기록</p>
          <div className="morning-ending-grid">
            <h2 id="morning-ending-title">이 방의 글은 아직 계속되고 있다.</h2>
            <p>
              새 묵상은 준비되는 대로 더해진다. 식탁을 늘 채워야 하는 피드처럼
              만들지는 않는다.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
