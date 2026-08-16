import type { Metadata } from "next";
import { createRouteMetadata } from "@/config/route-metadata";

export const metadata: Metadata = createRouteMetadata({
  title: "정원 너머",
  description: "조성연의 책과 출간을 준비 중인 작업.",
  path: "/books/",
  locale: "ko",
});

export default function KoreanBooksLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
