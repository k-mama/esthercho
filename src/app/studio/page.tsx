import type { Metadata } from "next";
import Image from "next/image";
import { PageCover } from "@/components/page-cover";
import "./studio.css";

export const metadata: Metadata = {
  title: "Drawn by Hand",
  description:
    "Esther Cho's hand-drawn sources, later reworkings, and visual experiments.",
};

export default function StudioPage() {
  return (
    <main className="studio-page">
      <PageCover
        eyebrow="STUDIO"
        title="Drawn by Hand"
        description="Hand-drawn sources, later reworkings, and visual experiments."
        image="/media/covers/studio-cover.jpg"
        alt="An editorial collage created from Esther Cho's original hand-drawn story studies"
        objectPosition="center center"
        mobileObjectPosition="43% center"
        align="right"
        shade="soft"
      />

      <section className="studio-reimagined" aria-labelledby="studio-reimagined-title">
        <div className="container studio-work-grid studio-work-grid-reverse">
          <div className="studio-work-copy">
            <p className="studio-kicker">LATER WORK</p>
            <h2 id="studio-reimagined-title">A Childhood Drawing, Revisited</h2>
            <p>
              This digital collage was made later, using a drawing from Esther's childhood as its starting point. It is not the original drawing.
            </p>
          </div>

          <figure className="studio-figure studio-reimagined-figure">
            <Image
              src="/media/esther/still-making-father-child-collage-20260802.png"
              alt="A paper collage showing young Esther Cho riding on her father's back"
              width={1536}
              height={1536}
              sizes="(max-width: 899px) 100vw, 58vw"
              priority
            />
            <figcaption>
              From Esther Cho&apos;s childhood sketch · AI-assisted editorial reinterpretation
            </figcaption>
          </figure>
        </div>
      </section>

    </main>
  );
}
