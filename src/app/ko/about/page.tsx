import type { Metadata } from "next";
import Image from "next/image";
import { PageCover } from "@/components/page-cover";
import { authorProfile } from "@/content/author-profile";
import "../../about/about.css";

export const metadata: Metadata = {
  title: "이야기가 된 집",
  description:
    "한국 작가이자 화가 조성연의 삶과 창작 이야기. 신앙과 기억, 집과 그림이 이야기가 되는 과정을 소개합니다.",
};

const education = authorProfile.education;

export default function KoreanAboutPage() {
  return (
    <main>
      <PageCover
        eyebrow={authorProfile.koreanName}
        title="이야기가 된 집"
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
              {authorProfile.shortBio.ko}
            </p>

            <p className="esther-intro">
              조성연의 글과 그림은 기독교 신앙과 어린 시절, 가족의 기억과
              평범한 집의 시간에서 시작됩니다. 살아온 것과 오래 기억한 것,
              마음속에 조용히 남아 있던 것들이 글과 그림이 됩니다.
            </p>
          </div>

          <figure className="esther-figure esther-hero-figure">
            <Image
              src="/media/esther/childhood-garden.jpg"
              alt="어린 시절 정원에서 웃고 있는 조성연"
              width={1800}
              height={1350}
              sizes="(max-width: 899px) 100vw, 52vw"
              priority
            />

            <figcaption>
              어린 시절 정원에서 웃고 있는 조성연.
            </figcaption>
          </figure>
        </header>

        <section className="esther-section esther-house-section">
          <div className="container esther-split">
            <figure className="esther-figure esther-house-figure">
              <Image
                src="/media/esther/childhood-house.jpg"
                alt="조성연의 어린 시절 기억과 이어진 집과 정원"
                width={1800}
                height={1059}
                sizes="(max-width: 899px) 100vw, 48vw"
              />

              <figcaption>
                어린 시절의 기억과 이어진 집과 정원.
              </figcaption>
            </figure>

            <div className="esther-copy">
              <p className="esther-eyebrow">시작된 곳</p>

              <h2>
                집과 정원, 오래 바라보던 아이.
              </h2>

              <p>
                어린 시절의 집과 정원은 지금도 조성연의 작업 안으로
                돌아옵니다. 아름답게 꾸민 옛 풍경이 아니라, 기억이 처음
                이야기의 모양을 갖기 시작한 장소로 돌아옵니다.
              </p>

              <p>
                가족사진과 익숙한 길, 평범했던 방들은 지금도 글을 쓰게 하는
                풍경의 일부로 남아 있습니다.
              </p>
            </div>
          </div>
        </section>

        <section className="container esther-section esther-education-section">
          <div className="esther-split esther-split-reverse">
            <div className="esther-copy">
              <p className="esther-eyebrow">미술과 배움</p>

              <h2>
                그림을 그리던 아이는 오래도록 그림의 길을 따라갔습니다.
              </h2>

              <p>
                예원학교와 서울예술고등학교에서 미술을 공부했고,
                서울대학교 미술대학 동양화과를 졸업했습니다. 이후
                이화여자대학교에서 미술교육 석사과정을 수료했습니다.
              </p>

              <ol
                className="esther-timeline"
                aria-label="학력 연표"
              >
                {education.map((item) => (
                  <li key={item.year}>
                    <span className="esther-year">
                      {item.year}
                    </span>

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
              />

              <figcaption>
                대학 시절의 조성연.
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="esther-section esther-home-section">
          <div className="container esther-home-grid">
            <div className="esther-copy">
              <p className="esther-eyebrow">
                집, 가족, 그리고 믿음
              </p>

              <h2>
                평범한 식탁도 작업의 일부가 되었습니다.
              </h2>

              <p>
                조성연은 작가이자 화가이며, 오랫동안 가정을 돌보며 살아온
                주부입니다. 창작은 집안일과 떨어진 곳에서 자라지 않았습니다.
                식사와 가족의 리듬, 기도와 돌봄이 이어지는 생활 한가운데에서
                자랐습니다.
              </p>

              <p>
                아침 식탁에서는 음식과 묵상, 기억과 글쓰기가 자연스럽게
                한자리에 놓입니다.
              </p>
            </div>

            <figure className="esther-figure esther-table-figure">
              <Image
                src="/media/esther/morning-table.jpg"
                alt="조성연의 집에서 차린 아침 식사"
                width={1200}
                height={1600}
                sizes="(max-width: 899px) 100vw, 38vw"
              />

              <figcaption>
                집에서 차린 식사. 글이 자라나는 생활의 한 장면.
              </figcaption>
            </figure>
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

              <figcaption>
                방글라데시 봉사 활동 중인 조성연.
              </figcaption>
            </figure>

            <div className="esther-copy">
              <p className="esther-eyebrow">
                삶으로 이어지는 믿음
              </p>

              <h2>페이지 밖으로 이어지는 삶.</h2>

              <p>
                조성연은 북한 이탈 주민을 멘토링으로 돕고, 방글라데시에서
                선교와 봉사 활동에 참여해 왔습니다.
              </p>

              <p>
                이 경험들 역시 글이 자라나는 삶의 한 부분입니다.
              </p>
            </div>
          </div>
        </section>

        <section className="esther-section esther-making-section">
          <div className="container esther-making-grid">
            <div className="esther-copy">
              <p className="esther-eyebrow">
                아직도 만드는 중
              </p>

              <h2>
                글과 그림은 지금도 함께 이어집니다.
              </h2>

              <p>
                지금도 산문과 묵상 글을 쓰고, 이야기가 될 장면을 손으로
                그립니다.
              </p>

              <p>
                어떤 연필 그림은 원래 모습 그대로 남고, 어떤 그림은 출처가
                분명히 표시된 AI 보조 에디토리얼 재해석의 출발점이 됩니다.
              </p>

              <p>
                원본도 보이고, 만들어지는 과정도 보이게 합니다.
              </p>
            </div>

            <figure className="esther-figure esther-sketch-figure">
              <Image
                src="/media/esther/still-making-father-child-collage-20260802.png"
                alt="아버지 등에 업힌 어린 조성연을 담은 종이 콜라주"
                width={1536}
                height={1536}
                sizes="(max-width: 899px) 100vw, 38vw"
              />

              <figcaption>
                조성연 작가의 어린 시절 원 스케치를 바탕으로 한 AI 보조
                에디토리얼 재해석 이미지입니다.
              </figcaption>
            </figure>
          </div>
        </section>

        <footer className="container esther-closing">
          <p className="esther-eyebrow">
            {authorProfile.koreanName} {"\u00B7"}{" "}
            {authorProfile.globalName}
          </p>

          <p>
            신앙과 기억, 집과 평범한 삶의 시간을 이야기로 모아가는
            작가이자 화가입니다.
          </p>
        </footer>
      </article>
    </main>
  );
}
