import type { Metadata } from "next";
import { SectionPlaceholder } from "@/components/section-placeholder";

export const metadata: Metadata = {
  title: "Archive",
};

export default function ArchivePage() {
  return (
    <SectionPlaceholder title="ARCHIVE">
      Childhood photographs, family records, drawings, and preserved memories.
    </SectionPlaceholder>
  );
}
