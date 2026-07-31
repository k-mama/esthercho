import type { Metadata } from "next";
import { SectionPlaceholder } from "@/components/section-placeholder";

export const metadata: Metadata = {
  title: "Stories",
};

export default function StoriesPage() {
  return (
    <SectionPlaceholder title="STORIES">
      Stories born from memory, faith, and lived experience.
    </SectionPlaceholder>
  );
}
