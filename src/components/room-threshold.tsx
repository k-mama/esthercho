"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./room-threshold.module.css";

type ThresholdRoom = {
  href: string;
  eyebrow: string;
  title: string;
  hint: string;
};

const englishThresholds: Record<string, ThresholdRoom> = {
  "/notes": { href: "/stories/", eyebrow: "NEXT ROOM", title: "Stories", hint: "Walk into the stories." },
  "/stories": { href: "/archive/", eyebrow: "NEXT ROOM", title: "Childhood", hint: "Open the childhood album." },
  "/archive": { href: "/studio/", eyebrow: "NEXT ROOM", title: "Studio", hint: "See what was made by hand." },
  "/studio": { href: "/books/", eyebrow: "NEXT ROOM", title: "Books", hint: "Continue into the library." },
  "/books": { href: "/about/", eyebrow: "NEXT ROOM", title: "Esther", hint: "Meet the woman behind the work." },
  "/about": { href: "/home/", eyebrow: "BACK TO THE HALL", title: "Esther's House", hint: "Return to the entrance hall." },
};

const koreanThresholds: Record<string, ThresholdRoom> = {
  "/ko/notes": { href: "/ko/stories/", eyebrow: "다음 방", title: "이야기", hint: "기억이 놓인 방으로 갑니다." },
  "/ko/stories": { href: "/ko/archive/", eyebrow: "다음 방", title: "어린 시절", hint: "어린 시절 앨범을 엽니다." },
  "/ko/archive": { href: "/ko/studio/", eyebrow: "다음 방", title: "작업실", hint: "손으로 만든 것들을 보러 갑니다." },
  "/ko/studio": { href: "/ko/books/", eyebrow: "다음 방", title: "책", hint: "서재로 이어집니다." },
  "/ko/books": { href: "/ko/about/", eyebrow: "다음 방", title: "조성연", hint: "작품 뒤의 사람을 만납니다." },
  "/ko/about": { href: "/ko/home/", eyebrow: "다시 현관으로", title: "Esther의 집", hint: "집의 입구로 돌아갑니다." },
};

function normalizePath(pathname: string) {
  if (pathname === "/") return "/home";
  return pathname.length > 1 && pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
}

export function RoomThreshold() {
  const pathname = usePathname();
  const normalized = normalizePath(pathname);
  const isKorean = normalized === "/ko" || normalized.startsWith("/ko/");
  const room = isKorean ? koreanThresholds[normalized] : englishThresholds[normalized];

  if (!room) return null;

  return (
    <aside
      className={`${styles.threshold}${isKorean ? ` ${styles.korean}` : ""}`}
      aria-label={isKorean ? "다음 방으로 이동" : "Continue to the next room"}
    >
      <div className={`container ${styles.inner}`}>
        <Link href={room.href} className={styles.link}>
          <span className={styles.eyebrow}>{room.eyebrow}</span>
          <span className={styles.title}>{room.title}</span>
          <span className={styles.hint}>
            {room.hint}
            <span className={styles.arrow} aria-hidden="true">→</span>
          </span>
        </Link>
      </div>
    </aside>
  );
}
