import type { Metadata } from "next";
import { SectionPlaceholder } from "@/components/section-placeholder";

export const metadata: Metadata = {
  title: "The Morning Table",
};

export default function NotesPage() {
  return (
    <SectionPlaceholder title="The Morning Table">
      Devotional reflections and notes from the morning table.
    </SectionPlaceholder>
  );
}