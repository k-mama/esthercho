import type { Metadata } from "next";
import { createRouteMetadata } from "@/config/route-metadata";

export const metadata: Metadata = createRouteMetadata({
  title: "The Youngest Daughter in Every House",
  description:
    "A childhood memory from Esther Cho's living story archive: the oldest child at home, and the youngest daughter in the houses that helped raise her.",
  path: "/stories/the-youngest-daughter-in-every-house/",
  locale: "en",
  localized: false,
});

export default function YoungestDaughterStoryLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
