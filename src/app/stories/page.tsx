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
        image="/media/covers/stories-cover.webp"
        mobileImage="/media/covers/stories-cover-mobile.webp"
        alt="Esther Cho holding a book on a tree-lined stone wall path"
        objectPosition="center center"
        mobileObjectPosition="center center"
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
