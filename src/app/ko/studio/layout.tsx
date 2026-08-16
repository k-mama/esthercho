import type { Metadata } from "next";
import { createRouteMetadata } from "@/config/route-metadata";

export const metadata: Metadata = createRouteMetadata({
  title: "손으로 그린 이야기",
  description:
    "조성연 작가의 손그림에서 출발한 작업과 이후의 재해석, 시각 실험.",
  path: "/studio/",
  locale: "ko",
});

export default function KoreanStudioLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
