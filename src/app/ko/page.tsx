import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { HomeHeroVideo } from "../home-hero-video";
import styles from "../page.module.css";

export const metadata: Metadata = {
  title: "조성연",
  description:
    "믿음과 기억, 밥상과 돌봄, 평범한 삶에서 태어난 조성연의 이야기 집.",
};

const houseMap = [
  ["01", "긴 식탁", "/ko/notes/"],
  ["02", "이야기", "/ko/stories/"],
  ["03", "앨범", "/ko/archive/"],
  ["04", "작업실", "/ko/studio/"],
  ["05", "서재", "/ko/books/"],
  ["06", "조성연", "/ko/about/"],
] as const;

const tableCollections = [
  ["아침 식탁", "아침밥과 성경 말씀, 기도와 그날의 짧은 기록."],
  ["돌봄의 식탁", "가족과 곁의 사람들에게 차려 온 밥상과 그날의 이야기."],
  ["일상의 식탁", "계절 음식과 친구들, 평범한 끼니와 그 주변의 생활."],
] as const;

const careShelves = [
  ["가족", "밥을 차리고, 함께 움직이고, 필요한 자리에 곁을 내어준 시간."],
  ["봉사", "교회와 봉사여행에서 보낸 시간과 그곳에서 만난 사람들."],
  ["친구들", "틈틈이 만나고 웃고 떠들며 쌓인, 너무 평범해서 좋은 이야기."],
  ["한 주의 일상", "그때는 대수롭지 않았지만 시간이 지나며 남은 작은 반복들."],
] as const;

const archiveShelves = [
  ["어린 시절", "집과 정원, 학교 시절, 가족과 함께 찍은 오래된 사진."],
  ["가족 기록", "이름과 날짜, 장소처럼 확인할 수 있는 정보를 사진 곁에 남깁니다."],
  ["장소와 계절", "방과 풍경, 날씨와 사물처럼 기억을 다시 불러오는 배경들."],
] as const;

export default function KoreanHome() {
  return (
    <main className={styles.home}>
      <section className={`${styles.videoHero} home-video-hero`}>
        <HomeHeroVideo locale="ko" />

        <div className={styles.videoHeroContent}>
          <p className={styles.videoEyebrow}>조성연의 집에 오신 것을 환영합니다</p>
          <h1 className={styles.koreanHeroTitle}>
            <span>기억으로 지은</span>
            <span>이야기의 집.</span>
          </h1>
          <Link href="/ko/about/" className={styles.videoHeroLink}>
            집 안으로 들어가기
          </Link>
        </div>
      </section>

      <section className={styles.threshold} aria-labelledby="house-map-title">
        <div className={`container ${styles.thresholdInner}`}>
          <div className={styles.thresholdCopy}>
            <p className={styles.eyebrow}>집 안의 방들</p>
            <h2 id="house-map-title" className={styles.koDisplay}>
              <span>사진과 밥상, 이야기와 그림,</span>
              <span>책이 한 집 안에 있습니다.</span>
            </h2>
            <p>
              자료의 성격에 따라 방을 나눴습니다. 사진 한 장, 짧은 메모,
              한 편의 글이 생길 때마다 새 메뉴를 만들지 않고 알맞은 방에 더해갑니다.
            </p>
          </div>

          <nav className={styles.houseMap} aria-label="조성연의 집 안에 있는 방들">
            {houseMap.map(([number, label, href]) => (
              <Link href={href} key={number}>
                <span>{number}</span>
                <strong>{label}</strong>
                <i aria-hidden="true">↗</i>
              </Link>
            ))}
          </nav>
        </div>
      </section>

      <section className={styles.tableRoom} aria-labelledby="table-room-title">
        <div className={`container ${styles.roomHeading}`}>
          <p className={styles.eyebrow}>긴 식탁</p>
          <h2 id="table-room-title" className={styles.koDisplay}>
            <span>아침밥상과 말씀,</span>
            <span>가족에게 차려 온 밥상.</span>
          </h2>
        </div>

        <figure className={styles.tableFigure}>
          <Image
            src="/media/esther/morning-table.jpg"
            alt="조성연 작가의 아침 식탁에 차려진 아침 식사"
            width={1200}
            height={1600}
            sizes="100vw"
          />
        </figure>

        <div className={`container ${styles.tableAfter}`}>
          <p className={styles.roomLead}>
            이곳은 음식 사진 모음이 아닙니다. 먹이고 돌보고 기도하고 기록해 온
            시간이 함께 놓이는 방입니다.
          </p>

          <div className={styles.storageRail} aria-label="앞으로 채워질 아침 식탁의 갈래">
            {tableCollections.map(([title, description], index) => (
              <div className={styles.storageSlot} key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            ))}
          </div>

          <Link href="/ko/notes/" className={styles.textLink}>
            아침 식탁으로 가기
          </Link>
        </div>
      </section>

      <section className={styles.carePassage} aria-labelledby="care-passage-title">
        <div className={`container ${styles.careGrid}`}>
          <div className={styles.careIntro}>
            <p className={styles.eyebrow}>집 안의 복도</p>
            <h2 id="care-passage-title" className={styles.koDisplay}>
              <span>돌봄은 따로 떼어놓은 일이 아니라,</span>
              <span>한 주의 일상이었습니다.</span>
            </h2>
            <p>
              가족을 챙긴 날, 교회에서 봉사한 시간, 길을 나선 봉사여행,
              친구들과 웃었던 일까지. 나중에 이야기가 될 장면들을 이곳에 모읍니다.
            </p>
            <Link href="/ko/stories/" className={styles.textLink}>
              이야기 보러 가기
            </Link>
          </div>

          <div className={styles.careShelves}>
            {careShelves.map(([title, description], index) => (
              <div className={styles.careShelf} key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.albumRoom} aria-labelledby="album-room-title">
        <figure className={styles.albumFigure}>
          <Image
            src="/media/home/childhood-house.jpg"
            alt="조성연 작가의 어린 시절과 연결된 집과 정원"
            width={1800}
            height={1059}
            sizes="100vw"
          />
          <figcaption>아카이브 사진 · 조성연의 어린 시절과 연결된 장소</figcaption>
        </figure>

        <div className={`container ${styles.albumInterior}`}>
          <div className={styles.albumCopy}>
            <p className={styles.eyebrow}>앨범을 여는 방</p>
            <h2 id="album-room-title" className={styles.koDisplay}>
              <span>사진은 기록으로 남기고,</span>
              <span>기억은 그 옆에 덧붙입니다.</span>
            </h2>
            <p>
              실제 사진은 이후의 재해석과 구분해 보관합니다. 날짜와 이름,
              장소와 새로 떠오른 기억은 사진 자체를 바꾸지 않고 곁에 더합니다.
            </p>
          </div>

          <div className={styles.archiveCabinet}>
            {archiveShelves.map(([title, description], index) => (
              <div className={styles.cabinetDrawer} key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            ))}
          </div>

          <Link href="/ko/archive/" className={styles.textLink}>
            앨범 열기
          </Link>
        </div>
      </section>

      <section className={styles.workRoom} aria-labelledby="work-room-title">
        <div className={`container ${styles.workGrid}`}>
          <div className={styles.workCopy}>
            <p className={styles.eyebrow}>작업실</p>
            <h2 id="work-room-title" className={styles.koDisplay}>
              <span>원본을 먼저,</span>
              <span>과정은 보이게.</span>
            </h2>
            <p>
              손그림과 사진, 작업 메모와 이후의 재해석을 가까이 둡니다.
              새로 만든 이미지는 원본을 대신하지 않습니다.
            </p>

            <ol className={styles.processRail} aria-label="작업 과정">
              <li><span>01</span><strong>원본</strong></li>
              <li><span>02</span><strong>작업 메모</strong></li>
              <li><span>03</span><strong>재해석</strong></li>
            </ol>

            <Link href="/ko/studio/" className={styles.darkLink}>
              작업실 들어가기
            </Link>
          </div>

          <figure className={styles.workFigure}>
            <Image
              src="/media/esther/still-making-father-child-collage-20260802.png"
              alt="조성연의 어린 시절 원본 스케치를 바탕으로 만든 종이 콜라주"
              width={1536}
              height={1536}
              sizes="(max-width: 899px) 100vw, 48vw"
            />
          </figure>
        </div>
      </section>

      <section className={styles.libraryRoom} aria-labelledby="library-room-title">
        <div className={`container ${styles.libraryGrid}`}>
          <figure className={styles.libraryFigure}>
            <Image
              src="/media/covers/books-cover-final-20260802.webp"
              alt="은은한 햇살이 드는 식탁에서 책을 읽는 조성연"
              width={1448}
              height={1086}
              sizes="(max-width: 899px) 100vw, 58vw"
            />
          </figure>

          <div className={styles.libraryCopy}>
            <p className={styles.eyebrow}>서재</p>
            <h2 id="library-room-title" className={styles.koDisplay}>
              <span>책은 이 집의 다른 방에서</span>
              <span>먼저 시작됩니다.</span>
            </h2>
            <p>
              밥상에서 적은 글, 오래된 기억, 묵상 노트와 손그림이 시간이 지나
              책이 되기도 합니다. 출간 정보는 실제로 확정된 뒤에만 더합니다.
            </p>
            <Link href="/ko/books/" className={styles.textLink}>
              책 보러 가기
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.sittingRoom} aria-labelledby="sitting-room-title">
        <div className={`container ${styles.sittingGrid}`}>
          <div className={styles.sittingCopy}>
            <p className={styles.eyebrow}>마지막 방</p>
            <h2 id="sitting-room-title" className={styles.koDisplay}>
              <span>조성연</span>
            </h2>
            <p>
              한국에서는 조성연, 글로벌 작가명은 Esther Cho. 이 방에는 작가 소개와
              공식 이력을 두고, 그 사람이 어떻게 살아왔는지는 집의 다른 방들이 보여줍니다.
            </p>
            <Link href="/ko/about/" className={styles.textLink}>
              조성연 만나기
            </Link>
          </div>

          <figure className={styles.sittingFigure}>
            <Image
              src="/media/covers/esther-cover.webp"
              alt="두 점의 작품 아래 앉아 있는 조성연"
              width={1800}
              height={1059}
              sizes="(max-width: 899px) 100vw, 48vw"
            />
          </figure>
        </div>
      </section>
    </main>
  );
}
