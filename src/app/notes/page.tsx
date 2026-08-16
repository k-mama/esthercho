import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageCover } from "@/components/page-cover";
import "./notes.css";
import "./notes-polish.css";

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

      <section className="morning-foyer" aria-labelledby="morning-foyer-title">
        <div className="container morning-foyer-inner">
          <p className="morning-kicker">AT THE TABLE</p>
          <div className="morning-foyer-grid">
            <h2 id="morning-foyer-title">
              Breakfast, Scripture, and whatever else the morning brings.
            </h2>
            <p>
              Some notes begin with a verse. Others begin with breakfast, a family meal,
              or something small that happened before the dishes were cleared.
            </p>
          </div>
        </div>
      </section>

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

      <section className="morning-manuscript" aria-labelledby="morning-manuscript-title">
        <div className="container morning-manuscript-grid">
          <div>
            <p className="morning-kicker">FROM TABLE TO MANUSCRIPT</p>
            <h2 id="morning-manuscript-title">Some of these mornings are becoming Manna on the Table.</h2>
          </div>

          <div className="morning-manuscript-copy">
            <p>
              The manuscript is growing from the same mornings, verses, meals,
              questions, and small observations gathered here.
            </p>
            <Link href="/books/" className="morning-link">
              Visit the book project
            </Link>
          </div>
        </div>
      </section>

      <section className="morning-close" aria-labelledby="morning-close-title">
        <div className="container morning-close-inner">
          <p className="morning-kicker">MORE MORNINGS</p>
          <h2 id="morning-close-title">There will be another breakfast.</h2>
        </div>
      </section>
    </main>
  );
}
