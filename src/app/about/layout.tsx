import type { Metadata } from "next";
import { createRouteMetadata } from "@/config/route-metadata";

export const metadata: Metadata = createRouteMetadata({
  title: "Esther Cho · Cho Sungyeon",
  description:
    "Meet Esther Cho, the international author name of Korean writer and artist Cho Sungyeon (조성연).",
  path: "/about/",
  locale: "en",
});

export default function AboutLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
