import type { Metadata } from "next";
import { createRouteMetadata } from "@/config/route-metadata";

export const metadata: Metadata = createRouteMetadata({
  title: "이야기",
  description:
    "어린 시절과 가족, 믿음과 지금의 생활에서 돌아온 조성연 작가의 이야기.",
  path: "/stories/",
  locale: "ko",
});

export default function KoreanStoriesLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
