import type { Metadata } from "next";
import { createRouteMetadata } from "@/config/route-metadata";

export const metadata: Metadata = createRouteMetadata({
  title: "조성연 · Esther Cho",
  description:
    "한국 작가이자 화가 조성연, 그리고 국제 작가명 Esther Cho를 소개합니다.",
  path: "/about/",
  locale: "ko",
});

export default function KoreanAboutLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
