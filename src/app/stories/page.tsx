import type { Metadata } from "next";
import { SectionPlaceholder } from "@/components/section-placeholder";

export const metadata: Metadata = {
  title: "Stories Born from Life",
};

export default function StoriesPage() {
  return (
    <SectionPlaceholder title="Stories Born from Life">
      Stories shaped by memory, faith, and lived experience.
    </SectionPlaceholder>
  );
}