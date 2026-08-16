import type { Metadata } from "next";
import { createRouteMetadata } from "@/config/route-metadata";

export const metadata: Metadata = createRouteMetadata({
  title: "Drawn by Hand",
  description:
    "Esther Cho's hand-drawn sources, later reworkings, and visual experiments.",
  path: "/studio/",
  locale: "en",
});

export default function StudioLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
