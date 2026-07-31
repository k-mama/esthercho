import type { Metadata } from "next";
import { PageCover } from "@/components/page-cover";

export const metadata: Metadata = {
  title: "The Childhood Album",
};

export default function ArchivePage() {
  return (
    <main>
      <PageCover
        eyebrow="CHILDHOOD"
        title="The Childhood Album"
        description="Childhood photographs, family records, drawings, and preserved memories."
        image="/media/covers/childhood-cover.jpg"
        alt="Esther Cho smiling in the garden as a child"
        objectPosition="42% center"
        mobileObjectPosition="38% center"
        align="right"
        shade="medium"
      />

      <section className="page-cover-followup">
        <div className="container page-cover-followup-inner">
          <p>
            Childhood photographs, family records, drawings, and preserved
            memories.
          </p>
        </div>
      </section>
    </main>
  );
}
