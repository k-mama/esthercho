import type { Metadata } from "next";
import { createRouteMetadata } from "@/config/route-metadata";

export const metadata: Metadata = createRouteMetadata({
  title: "My Father Dreamed of a Tiger",
  description:
    "The first memory fragment in Esther Cho's living story archive: a tiger dream, a daughter, and a family joke that became the opening line.",
  path: "/stories/my-father-dreamed-of-a-tiger/",
  locale: "en",
  localized: false,
});

export default function TigerDreamStoryLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
