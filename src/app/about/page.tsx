import type { Metadata } from "next";
import { SectionPlaceholder } from "@/components/section-placeholder";

export const metadata: Metadata = {
  title: "The House That Became a Story",
};

export default function AboutPage() {
  return (
    <SectionPlaceholder title="The House That Became a Story">
      The life, faith, work, and creative world of Esther Cho.
    </SectionPlaceholder>
  );
}