import type { Metadata } from "next";
import { PageCover } from "@/components/page-cover";

export const metadata: Metadata = {
  title: "The Morning Table",
};

export default function NotesPage() {
  return (
    <main>
      <PageCover
        eyebrow="MORNING TABLE"
        title="The Morning Table"
        description="Devotional reflections and notes from the morning table."
        image="/media/covers/morning-table-cover.jpg"
        alt="A breakfast prepared at Esther Cho's morning table"
        objectPosition="center 58%"
        mobileObjectPosition="center 60%"
        align="right"
        shade="strong"
      />

      <section className="page-cover-followup">
        <div className="container page-cover-followup-inner">
          <p>Devotional reflections and notes from the morning table.</p>
        </div>
      </section>
    </main>
  );
}
