import type { Metadata } from "next";
import { SectionPlaceholder } from "@/components/section-placeholder";

export const metadata: Metadata = {
  title: "Notes",
};

export default function NotesPage() {
  return (
    <SectionPlaceholder title="NOTES">
      Short reflections and notes from the author.
    </SectionPlaceholder>
  );
}
