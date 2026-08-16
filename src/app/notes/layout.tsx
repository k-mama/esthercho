import type { Metadata } from "next";
import { createRouteMetadata } from "@/config/route-metadata";

export const metadata: Metadata = createRouteMetadata({
  title: "The Morning Table",
  description: "Devotional reflections and notes from Esther Cho's morning table.",
  path: "/notes/",
  locale: "en",
});

export default function NotesLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
