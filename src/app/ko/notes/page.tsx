import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageCover } from "@/components/page-cover";
import "../../notes/notes.css";

export const metadata: Metadata = {
  title: "아침 식탁",
  description: "조성연 작가의 아침 식탁에서 태어난 묵상과 기록.",
};

const tableThreads = [
  ["아침", "아침밥과 말씀, 기도와 하루의 시작에 적어 둔 짧은 문장."],
  ["가족", "가족에게 차린 밥상과 오래 반복되어 온 평범한 돌봄의 시간."],
  ["사람들", "친구들과 함께한 식사, 계절 음식, 사람이 오며 생긴 일상의 이야기."],
  ["부엌 메모", "요리하며 반복해 온 작은 습관과 레시피가 되기 전 기억해 둘 것들."],
] as const;

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
              <span>밥과 말씀과</span>
              <span>그날의 생활이 한 상에 놓입니다.</span>
            </h2>
            <p>
              어떤 기록은 말씀에서 시작하고, 어떤 날은 아침밥이나 가족의 식사,
              별것 아닌 일 하나에서 시작합니다. 굳이 따로 떼어놓지 않아도 되는 것들입니다.
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
            <figcaption>아침 식탁 · 지금의 한 장면</figcaption>
          </figure>

          <div className="morning-present-copy">
            <p className="morning-kicker">평범한 아침</p>
            <h2 id="morning-present-title">
              <span>글을 쓰기 전에도</span>
              <span>하루는 이미 시작되어 있습니다.</span>
            </h2>
            <p>
              밥을 준비하고, 누군가에게 연락할 일이 있고, 한 구절이 마음에 남고,
              웃겨서 적어 두고 싶은 생각도 생깁니다. 글은 그런 아침 가까이에 머뭅니다.
            </p>
          </div>
        </div>
      </section>

      <section className="morning-threads" aria-labelledby="morning-threads-title">
        <div className="container morning-threads-inner">
          <div className="morning-threads-heading">
            <p className="morning-kicker">이 방에 쌓일 것들</p>
            <h2 id="morning-threads-title">
              <span>자료가 많아져도</span>
              <span>네 갈래로 천천히 이어집니다.</span>
            </h2>
          </div>

          <div className="morning-thread-list">
            {tableThreads.map(([title, description], index) => (
              <article className="morning-thread" key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="morning-manuscript" aria-labelledby="morning-manuscript-title">
        <div className="container morning-manuscript-grid">
          <div>
            <p className="morning-kicker">식탁에서 원고로</p>
            <h2 id="morning-manuscript-title">
              <span>어떤 기록은</span>
              <span>Manna on the Table이 되어가고 있습니다.</span>
            </h2>
          </div>

          <div className="morning-manuscript-copy">
            <p>
              묵상 원고는 영어 기준 원문을 먼저 완성하고 있습니다. 이후 언어판은
              잠금된 영문 원고를 바탕으로 준비합니다.
            </p>
            <p>출간 정보는 실제로 확정된 뒤에 공개합니다.</p>
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
            <span>실제로 차린 밥상 한 장씩,</span>
            <span>이 방은 조금씩 넓어집니다.</span>
          </h2>
        </div>
      </section>
    </main>
  );
}
