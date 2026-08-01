"use client";

import { usePathname } from "next/navigation";
import styles from "./site-footer.module.css";

const englishRoles = [
  "Creative Direction",
  "Content Strategy",
  "Editorial Direction",
  "Content Production",
  "Web Design",
  "Development",
  "Project Leadership",
  "Original Music",
];

const koreanRoles = [
  "크리에이티브 디렉션",
  "콘텐츠 전략",
  "편집 디렉션",
  "콘텐츠 기획 및 제작",
  "웹디자인",
  "웹개발",
  "프로젝트 총괄",
  "오리지널 음악 작곡",
];

export function SiteFooter() {
  const pathname = usePathname();
  const isKorean = pathname === "/ko" || pathname.startsWith("/ko/");

  const copy = isKorean
    ? {
        officialSite: "조성연 공식 작가 홈페이지",
        colophonLabel: "이 집을 지은 사람",
        credit:
          "이 이야기의 집은 Emma Kwon이 구상하고 총괄했습니다. 웹사이트 전체의 콘텐츠 흐름을 기획하고 제작했으며, 편집 방향, 디자인, 개발을 맡고 아티스트명 Emmaestro로 홈페이지 오리지널 배경음악을 작곡했습니다.",
        identity:
          "Emma Kwon은 『BORN RARE』의 저자이자 Eunjung Kwon의 작가명입니다. Emmaestro는 동일인이 음악과 예술 활동에 사용하는 아티스트명입니다.",
        sourceCredit:
          "이 사이트에 소개되는 원고, 원화, 가족 기록의 원 창작자는 조성연입니다.",
        siteAria: "조성연 작가 홈페이지 정보",
        creatorAria: "웹사이트 제작자와 음악 작곡가 정보",
        roles: koreanRoles,
      }
    : {
        officialSite: "Official author website",
        colophonLabel: "THE HOUSE WAS BUILT BY",
        credit:
          "This house of stories was conceived and led by Emma Kwon. She planned and produced the complete website experience, directed its editorial content, designed and developed the site, and composed the original homepage music as Emmaestro.",
        identity:
          "Emma Kwon is the author of BORN RARE and the author name of Eunjung Kwon. Emmaestro is the artist name used by the same person.",
        sourceCredit:
          "The original writings, drawings, and archive materials presented here remain credited to Esther Cho.",
        siteAria: "Esther Cho website information",
        creatorAria: "Website creator and music composer information",
        roles: englishRoles,
      };

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <section className={styles.site} aria-label={copy.siteAria}>
          <p className={styles.siteName}>ESTHER CHO</p>
          <p className={styles.siteDescription}>{copy.officialSite}</p>
          <p className={styles.copyright}>© 2026 Esther Cho</p>
        </section>

        <section
          className={styles.colophon}
          aria-label={copy.creatorAria}
        >
          <p className={styles.kicker}>{copy.colophonLabel}</p>

          <p className={styles.creatorName}>Emma Kwon</p>

          <p className={styles.credit}>{copy.credit}</p>

          <ul className={styles.roles} aria-label="Production credits">
            {copy.roles.map((role) => (
              <li key={role}>{role}</li>
            ))}
          </ul>

          <p className={styles.identity}>{copy.identity}</p>

          <p className={styles.sourceCredit}>
            {copy.sourceCredit}
          </p>
        </section>
      </div>
    </footer>
  );
}