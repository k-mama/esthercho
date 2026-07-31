import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "조성연",
    template: "%s | 조성연",
  },
  description:
    "믿음과 기억, 어린 시절과 평범한 삶에서 태어난 조성연의 이야기.",
  alternates: {
    languages: {
      en: "/",
      ko: "/ko/",
    },
  },
};

export default function KoreanLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div lang="ko">{children}</div>;
}
