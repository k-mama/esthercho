import type { Metadata } from "next";
import Image from "next/image";
import { MannaAuthorVoice } from "@/components/manna-author-voice";
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

      <section className="morning-present" aria-labelledby="morning-present-title">
        <div className="container morning-present-grid">
          <figure className="morning-present-figure">
            <Image
              src="/media/esther/morning-table.jpg"
              alt="A breakfast prepared at Esther Cho's morning table"
              width={1200}
              height={1600}
              sizes="(max-width: 899px) 88vw, 40vw"
              priority
            />
            <figcaption>Morning table · Today</figcaption>
          </figure>

          <div className="morning-present-copy">
            <p className="morning-kicker">AN ORDINARY MORNING</p>
            <h2 id="morning-present-title">The day is already moving by the time the writing catches up.</h2>
            <p>
              There is food to make, someone to call, a verse still hanging around,
              and sometimes a thought funny enough to write down. The notes begin there.
            </p>
          </div>
        </div>
      </section>

      <MannaAuthorVoice locale="en" placement="notes" />
    </main>
  );
}
