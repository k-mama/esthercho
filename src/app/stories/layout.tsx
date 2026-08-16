import type { Metadata } from "next";
import { createRouteMetadata } from "@/config/route-metadata";

export const metadata: Metadata = createRouteMetadata({
  title: "Stories",
  description:
    "Stories by Esther Cho, drawn from childhood, family, faith, and the details she remembers.",
  path: "/stories/",
  locale: "en",
});

export default function StoriesLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
