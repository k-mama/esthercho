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
        alt="An original pencil story study by Esther Cho"
        objectPosition="center 52%"
        mobileObjectPosition="58% center"
        align="left"
        shade="strong"
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
