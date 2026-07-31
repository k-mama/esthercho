import type { Metadata } from "next";
import { SectionPlaceholder } from "@/components/section-placeholder";

export const metadata: Metadata = {
  title: "Drawn by Hand, Reborn in Light",
};

export default function StudioPage() {
  return (
    <SectionPlaceholder title="Drawn by Hand, Reborn in Light">
      Hand-drawn originals, reimagined works, audio, and visual experiments.
    </SectionPlaceholder>
  );
}