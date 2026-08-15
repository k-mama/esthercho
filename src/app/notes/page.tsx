import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageCover } from "@/components/page-cover";
import "./notes.css";

export const metadata: Metadata = {
  title: "The Morning Table",
  description: "Devotional reflections and notes from Esther Cho's morning table.",
};

export default function NotesPage() {
  return (
    <main className="morning-page">
      <PageCover
        eyebrow="MORNING TABLE"
        title="The Morning Table"
        description="Devotional reflections and notes from the morning table."
        image="/media/covers/morning-table-cover.webp"
        mobileImage="/media/covers/morning-table-cover-mobile.webp"
        alt="Avocado toast, egg, grapes, and iced coffee on Esther Cho's morning table"
        objectPosition="center center"
        mobileObjectPosition="center center"
        align="right"
        shade="strong"
      />

      <section className="morning-intro" aria-labelledby="morning-intro-title">
        <div className="container">
          <p className="morning-kicker">ABOUT THE NOTES</p>
          <div className="morning-intro-grid">
            <h2 id="morning-intro-title">Notes from the morning table.</h2>
            <div className="morning-intro-copy">
              <p>
                The Morning Table gathers devotional reflections shaped by
                Scripture, prayer, ordinary life, and thoughts that are still
                unresolved.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="morning-table-scene" aria-labelledby="morning-table-scene-title">
        <div className="container morning-table-inner">
          <figure className="morning-table-figure">
            <Image
              src="/media/esther/morning-table.jpg"
              alt="A breakfast prepared at Esther Cho's morning table"
              width={1200}
              height={1600}
              sizes="(max-width: 899px) 82vw, 38vw"
              priority
            />
            <figcaption>Morning table · A present-day detail</figcaption>
          </figure>

          <div className="morning-table-copy">
            <p className="morning-kicker">DAILY LIFE</p>
            <h2 id="morning-table-scene-title">The writing stays close to daily life.</h2>
            <p>
              A question, a prayer, or a small piece of humor does not need a
              dramatic setting before it becomes worth keeping.
            </p>
          </div>
        </div>
      </section>

      <section className="morning-writing" aria-labelledby="morning-writing-title">
        <div className="container morning-writing-inner">
          <div>
            <p className="morning-kicker">CURRENT MANUSCRIPT</p>
            <h2 id="morning-writing-title">Manna on the Table is still in development.</h2>
          </div>
          <div className="morning-writing-copy">
            <p>
              The devotional manuscript is being developed first as an English
              source text. Future language editions will be prepared from the
              locked English manuscript.
            </p>
            <p>
              Publication details will appear only when they are formally
              confirmed.
            </p>
            <Link href="/books/" className="morning-link">
              Visit the book project
            </Link>
          </div>
        </div>
      </section>

      <section className="morning-ending" aria-labelledby="morning-ending-title">
        <div className="container">
          <p className="morning-kicker">NOTES IN PROGRESS</p>
          <div className="morning-ending-grid">
            <h2 id="morning-ending-title">New notes will be added here.</h2>
            <p>
              New devotional notes will be added as they are ready. This page is
              not meant to be a feed that has to be constantly filled.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
