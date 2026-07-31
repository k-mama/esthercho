import type { Metadata } from "next";
import { PageCover } from "@/components/page-cover";

export const metadata: Metadata = {
  title: "Stories Born from Life",
};

export default function StoriesPage() {
  return (
    <main>
      <PageCover
        eyebrow="STORIES"
        title="Stories Born from Life"
        description="Stories shaped by memory, faith, and lived experience."
        image="/media/covers/stories-cover.jpg"
        alt="Esther Cho standing on a city street during her university years"
        objectPosition="center center"
        mobileObjectPosition="61% center"
        align="left"
        shade="medium"
      />

      <section className="page-cover-followup">
        <div className="container page-cover-followup-inner">
          <p>Stories shaped by memory, faith, and lived experience.</p>
        </div>
      </section>
    </main>
  );
}
