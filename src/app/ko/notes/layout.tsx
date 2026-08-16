import type { Metadata } from "next";
import { createRouteMetadata } from "@/config/route-metadata";

export const metadata: Metadata = createRouteMetadata({
  title: "아침 식탁",
  description: "조성연 작가의 아침 식탁에서 태어난 묵상과 기록.",
  path: "/notes/",
  locale: "ko",
});

export default function KoreanNotesLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
