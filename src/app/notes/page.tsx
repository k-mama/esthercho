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

      <MannaAuthorVoice locale="en" placement="notes" />

      <section className="morning-present" aria-labelledby="morning-present-title">
        <div className="container morning-present-grid">
          <figure className="morning-present-figure">
            <Image src="/media/esther/morning-table.jpg"
              alt="A real breakfast prepared by Esther Cho"
              width={1200} height={1600} sizes="(max-width: 899px) 88vw, 40vw"/>
            <figcaption>One of Esther’s real breakfast tables</figcaption>
          </figure>
          <div className="morning-present-copy">
            <p className="morning-kicker">AT THE TABLE</p>
            <h2 id="morning-present-title">Breakfast, a Bible, and a notebook.</h2>
            <p>Esther writes down what stays with her after reading Scripture. The reflection above comes from her original Korean writing.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
