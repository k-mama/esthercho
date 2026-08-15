import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageCover } from "@/components/page-cover";
import "./notes.css";

export const metadata: Metadata = {
  title: "The Morning Table",
  description: "Devotional reflections and notes from Esther Cho's morning table.",
};

const tableThreads = [
  [
    "Morning",
    "Breakfast, Scripture, prayer, and the few lines that belong to the beginning of the day.",
  ],
  [
    "Family",
    "Meals prepared for family and the tables that have carried ordinary care over time.",
  ],
  [
    "People",
    "Friends, shared meals, seasonal food, and the everyday stories that arrive with company.",
  ],
  [
    "Kitchen Notes",
    "Small cooking details, repeated habits, and the things worth remembering before they become recipes.",
  ],
] as const;

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
              A meal, a verse, and the rest of the morning can sit at the same table.
            </h2>
            <p>
              Some notes begin with Scripture. Others begin with breakfast, a family meal,
              or a small detail from the day. They do not need to be separated before they
              are worth keeping.
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
            <figcaption>Morning table · A present-day detail</figcaption>
          </figure>

          <div className="morning-present-copy">
            <p className="morning-kicker">AN ORDINARY MORNING</p>
            <h2 id="morning-present-title">The day has already begun before the writing does.</h2>
            <p>
              Food is being prepared. Someone may need calling. A verse lingers. A thought
              is funny enough to keep. The writing stays close to that kind of morning.
            </p>
          </div>
        </div>
      </section>

      <section className="morning-threads" aria-labelledby="morning-threads-title">
        <div className="container morning-threads-inner">
          <div className="morning-threads-heading">
            <p className="morning-kicker">THE ROOM CAN GROW</p>
            <h2 id="morning-threads-title">Four threads can keep expanding without crowding the table.</h2>
          </div>

          <div className="morning-thread-list">
            {tableThreads.map(([title, description], index) => (
              <article className="morning-thread" key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="morning-manuscript" aria-labelledby="morning-manuscript-title">
        <div className="container morning-manuscript-grid">
          <div>
            <p className="morning-kicker">FROM TABLE TO MANUSCRIPT</p>
            <h2 id="morning-manuscript-title">Some of the notes are becoming Manna on the Table.</h2>
          </div>

          <div className="morning-manuscript-copy">
            <p>
              The devotional manuscript is being developed first as an English source text.
              Future language editions will be prepared from the locked English manuscript.
            </p>
            <p>Publication details will appear only when they are formally confirmed.</p>
            <Link href="/books/" className="morning-link">
              Visit the book project
            </Link>
          </div>
        </div>
      </section>

      <section className="morning-close" aria-labelledby="morning-close-title">
        <div className="container morning-close-inner">
          <p className="morning-kicker">MORE MORNINGS</p>
          <h2 id="morning-close-title">The archive will grow one real table at a time.</h2>
        </div>
      </section>
    </main>
  );
}
