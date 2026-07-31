import type { Metadata } from "next";
import { SectionPlaceholder } from "@/components/section-placeholder";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <SectionPlaceholder title="ABOUT">
      The life, work, and creative world of Esther Cho.
    </SectionPlaceholder>
  );
}