import type { Metadata } from "next";
import Image from "next/image";
import { PageCover } from "@/components/page-cover";
import { authorProfile } from "@/content/author-profile";
import "../../about/about.css";
import "../../about/about-polish.css";

export const metadata: Metadata = {
  title: "조성연 · Esther Cho",
  description:
    "한국 작가이자 화가 조성연, 그리고 국제 작가명 Esther Cho를 소개합니다.",
};

const education = authorProfile.education;

export default function KoreanAboutPage() {
  return (
    <main>
      <PageCover
        eyebrow="ESTHER"
        title="조성연"
        description={authorProfile.roles.ko.join(" · ")}
        image="/media/covers/esther-cover.webp"
        mobileImage="/media/covers/esther-cover-mobile.webp"
        alt="남색 셔츠를 입고 두 점의 작품 아래 앉아 있는 조성연"
        objectPosition="center center"
        mobileObjectPosition="center center"
        align="left"
        shade="medium"
      />

      <article className="esther-page esther-page-ko">
        <header className="container esther-hero">
          <div className="esther-hero-copy">
            <p className="esther-eyebrow">작가 소개</p>

            <h2>
              {authorProfile.koreanName} {"\u00B7"}{" "}
              {authorProfile.globalName}
            </h2>

            <p className="esther-deck">
              Esther Cho는 한국 작가이자 화가 조성연의 국제 작가명입니다.
            </p>

            <p className="esther-intro">
              조성연은 살아온 것과 기억나는 것을 쓴다. 기독교 신앙과 가족,
              미술, 식탁과 집에서의 생활이 자주 글과 그림으로 돌아온다.
            </p>
          </div>
        </header>

        <section className="container esther-section esther-education-section">
          <div className="esther-split esther-split-reverse">
            <div className="esther-copy">
              <p className="esther-eyebrow">미술</p>

              <h2>미술을 오래 배웠다.</h2>

              <p>
                예원학교와 서울예술고등학교에서 미술을 공부했고,
                서울대학교 미술대학 동양화과를 졸업했다. 이후
                이화여자대학교에서 미술교육 석사과정을 수료했다.
              </p>

              <ol
                className="esther-timeline"
                aria-label="학력 연표"
              >
                {education.map((item) => (
                  <li key={item.year}>
                    <span className="esther-year">{item.year}</span>
                    <span>{item.detail.ko}</span>
                  </li>
                ))}
              </ol>
            </div>

            <figure className="esther-figure esther-portrait-figure">
              <Image
                src="/media/esther/young-artist.jpg"
                alt="대학 시절의 조성연"
                width={1500}
                height={1125}
                sizes="(max-width: 899px) 100vw, 42vw"
                priority
              />

              <figcaption>대학 시절</figcaption>
            </figure>
          </div>
        </section>

        <section className="esther-section esther-home-section">
          <div className="container esther-home-grid esther-home-copy-only">
            <div className="esther-copy">
              <p className="esther-eyebrow">집과 믿음</p>

              <h2>생활은 식탁 위에서 이어진다.</h2>

              <p>
                글을 쓰고 그림을 그리고, 밥을 차리고, 가족의 일상을 살고,
                기도하고 돌본다. 창작은 그 생활과 따로 떨어져 있지 않다.
              </p>

              <p>아침 식탁에는 밥과 말씀과 메모가 함께 놓일 때가 많다.</p>
            </div>
          </div>
        </section>

        <section className="container esther-section esther-service-section">
          <div className="esther-service-grid">
            <figure className="esther-figure esther-service-figure">
              <Image
                src="/media/esther/bangladesh-service.jpg"
                alt="방글라데시 봉사 활동 중인 조성연"
                width={625}
                height={769}
                sizes="(max-width: 899px) 100vw, 36vw"
              />

              <figcaption>방글라데시 봉사 활동 중</figcaption>
            </figure>

            <div className="esther-copy">
              <p className="esther-eyebrow">삶으로 이어지는 믿음</p>

              <h2>믿음은 생활 밖에 있지 않다.</h2>

              <p>
                조성연은 북한 이탈 주민을 멘토링으로 돕고, 방글라데시에서
                선교와 봉사 활동에 참여해 왔다.
              </p>
            </div>
          </div>
        </section>

        <section className="esther-section esther-making-section">
          <div className="container esther-making-grid esther-making-copy-only">
            <div className="esther-copy">
              <p className="esther-eyebrow">지금도 만드는 중</p>

              <h2>지금도 글을 쓰고 그림을 그린다.</h2>

              <p>산문과 묵상 글을 쓰고, 이야기가 될 장면을 손으로 그린다.</p>

              <p>
                어떤 그림은 그대로 남고, 어떤 그림은 이후의 에디토리얼
                재해석으로 이어진다. 둘은 따로 표시한다.
              </p>
            </div>
          </div>
        </section>

        <footer className="container esther-closing">
          <p className="esther-eyebrow">
            {authorProfile.koreanName} {"\u00B7"}{" "}
            {authorProfile.globalName}
          </p>

          <p>계속 쓰고, 계속 그린다.</p>
        </footer>
      </article>
    </main>
  );
}
