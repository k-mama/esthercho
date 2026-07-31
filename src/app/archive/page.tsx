import type { Metadata } from "next";
import { SectionPlaceholder } from "@/components/section-placeholder";

export const metadata: Metadata = {
  title: "The Childhood Album",
};

export default function ArchivePage() {
  return (
    <SectionPlaceholder title="The Childhood Album">
      Childhood photographs, family records, drawings, and preserved memories.
    </SectionPlaceholder>
  );
}