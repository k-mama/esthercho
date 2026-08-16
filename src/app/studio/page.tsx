import type { Metadata } from "next";
import Image from "next/image";
import { PageCover } from "@/components/page-cover";
import "./studio.css";
import "./studio-polish.css";

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

      <section className="studio-intro" aria-labelledby="studio-intro-title">
        <div className="container">
          <p className="studio-kicker">THE SOURCE</p>
          <div className="studio-intro-grid">
            <h2 id="studio-intro-title">The hand-drawn source stays named.</h2>
            <div className="studio-intro-copy">
              <p>
                When a sketch becomes something else, the later work is shown as later work.
                Nothing needs to pretend it came from the same moment.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="studio-reimagined" aria-labelledby="studio-reimagined-title">
        <div className="container studio-work-grid studio-work-grid-reverse">
          <div className="studio-work-copy">
            <p className="studio-kicker">LATER WORK</p>
            <h2 id="studio-reimagined-title">The drawing can move into another form.</h2>
            <p>
              A sketch may become a collage or another digital image. The source stays named,
              and the new work remains clearly later work.
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

      <section className="studio-future" aria-labelledby="studio-future-title">
        <div className="container studio-future-inner">
          <p className="studio-kicker">SELECTED ORIGINALS</p>
          <h2 id="studio-future-title">More originals, when Esther is ready to show them.</h2>
          <p>No need to fill the wall. This room can wait for the work she wants to keep here.</p>
        </div>
      </section>
    </main>
  );
}
