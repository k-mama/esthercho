import type { Metadata } from "next";
import { createRouteMetadata } from "@/config/route-metadata";
import "./archive-luminous.css";

export const metadata: Metadata = createRouteMetadata({
  title: "The Childhood Album",
  description:
    "Esther Cho's childhood photographs, remembered places, family traces, and the small things that stayed.",
  path: "/archive/",
  locale: "en",
});

export default function ArchiveLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
