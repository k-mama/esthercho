import type { Metadata } from "next";
import { createRouteMetadata } from "@/config/route-metadata";

export const metadata: Metadata = createRouteMetadata({
  title: "어린 시절 앨범",
  description:
    "조성연 작가의 어린 시절 사진과 기억 속의 장소, 가족의 흔적과 오래 남은 것들.",
  path: "/archive/",
  locale: "ko",
});

export default function KoreanArchiveLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
