import type { Metadata } from "next";
import { SectionPlaceholder } from "@/components/section-placeholder";

export const metadata: Metadata = {
  title: "Studio",
};

export default function StudioPage() {
  return (
    <SectionPlaceholder title="STUDIO">
      Hand-drawn stories, reimagined works, audio, and visual experiments.
    </SectionPlaceholder>
  );
}
