import type { Metadata } from "next";
import { PageCover } from "@/components/page-cover";

export const metadata: Metadata = {
  title: "Drawn by Hand, Reborn in Light",
};

export default function StudioPage() {
  return (
    <main>
      <PageCover
        eyebrow="STUDIO"
        title="Drawn by Hand, Reborn in Light"
        description="Hand-drawn originals, reimagined works, audio, and visual experiments."
        image="/media/covers/studio-cover.jpg"
        alt="An editorial collage created from Esther Cho's original hand-drawn story studies"
        objectPosition="center center"
        mobileObjectPosition="43% center"
        align="right"
        shade="soft"
      />

      <section className="page-cover-followup">
        <div className="container page-cover-followup-inner">
          <p>
            Hand-drawn originals, reimagined works, audio, and visual
            experiments.
          </p>
        </div>
      </section>
    </main>
  );
}