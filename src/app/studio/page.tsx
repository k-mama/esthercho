import type { Metadata } from "next";
import Image from "next/image";
import { PageCover } from "@/components/page-cover";
import "./studio.css";

export const metadata: Metadata = {
  title: "Drawn by Hand, Reborn in Light",
  description:
    "Esther Cho's hand-drawn originals, clearly identified reimagined works, and visual experiments in progress.",
};

export default function StudioPage() {
  return (
    <main className="studio-page">
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

      <section className="studio-intro" aria-labelledby="studio-intro-title">
        <div className="container">
          <p className="studio-kicker">ABOUT THE STUDIO</p>
          <div className="studio-intro-grid">
            <h2 id="studio-intro-title">The original stays visible.</h2>
            <div className="studio-intro-copy">
              <p>
                The Studio keeps the hand-drawn work, later reinterpretations,
                and the distance between them visible rather than polishing the
                process into one seamless image.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="studio-original" aria-labelledby="studio-original-title">
        <div className="container studio-work-grid">
          <figure className="studio-figure studio-original-figure">
            <Image
              src="/media/esther/hand-drawn-story.jpg"
              alt="An original hand-drawn story study by Esther Cho"
              width={1800}
              height={1350}
              sizes="(max-width: 899px) 100vw, 62vw"
              priority
            />
            <figcaption>Original work · Hand-drawn story study</figcaption>
          </figure>

          <div className="studio-work-copy">
            <p className="studio-kicker">ORIGINAL</p>
            <h2 id="studio-original-title">The hand-drawn original.</h2>
            <p>
              Pencil marks, uneven lines, and the physical character of the
              original are part of the work. They are not cleaned away simply
              because a later version may be more polished.
            </p>
          </div>
        </div>
      </section>

      <section className="studio-reimagined" aria-labelledby="studio-reimagined-title">
        <div className="container studio-work-grid studio-work-grid-reverse">
          <div className="studio-work-copy">
            <p className="studio-kicker">REIMAGINED</p>
            <h2 id="studio-reimagined-title">A later reinterpretation.</h2>
            <p>
              Digital and AI-assisted editorial work can extend an original
              drawing into another visual form. When that happens, the new image
              is named for what it is rather than presented as archival evidence.
            </p>
          </div>

          <figure className="studio-figure studio-reimagined-figure">
            <Image
              src="/media/esther/still-making-father-child-collage-20260802.png"
              alt="A paper collage showing young Esther Cho riding on her father's back"
              width={1536}
              height={1536}
              sizes="(max-width: 899px) 100vw, 58vw"
            />
            <figcaption>
              Based on Esther Cho&apos;s original childhood sketch · AI-assisted
              editorial reinterpretation
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="studio-principle" aria-labelledby="studio-principle-title">
        <div className="container studio-principle-grid">
          <div>
            <p className="studio-kicker">PROCESS</p>
            <h2 id="studio-principle-title">Original and interpretation remain different kinds of work.</h2>
          </div>
          <div className="studio-principle-copy">
            <p>
              One may lead to the other, but the website does not blur the
              boundary between a historical object and a later creative
              interpretation.
            </p>
            <p>The process can be part of the story without pretending to be the past.</p>
          </div>
        </div>
      </section>

      <section className="studio-future" aria-labelledby="studio-future-title">
        <div className="container studio-future-inner">
          <p className="studio-kicker">STILL MAKING</p>
          <h2 id="studio-future-title">More work will be added when it is ready.</h2>
          <p>
            Audio and moving-image experiments will appear here when there is
            finished work worth showing. The room does not need to be filled in
            advance.
          </p>
        </div>
      </section>
    </main>
  );
}
