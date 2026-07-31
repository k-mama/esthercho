import type { Metadata } from "next";
import { PageCover } from "@/components/page-cover";

export const metadata: Metadata = {
  title: "Beyond the Garden",
};

export default function BooksPage() {
  return (
    <main>
      <PageCover
        eyebrow="BOOKS"
        title="Beyond the Garden"
        description="Books and published works by Esther Cho."
        image="/media/covers/books-cover.jpg"
        mobileImage="/media/covers/books-cover-mobile.jpg"
        alt="A watercolor-style scene of a woman reading at a table with a book, cup, and orchid"
        objectPosition="center center"
        mobileObjectPosition="34% center"
        align="right"
        shade="soft"
      />

      <section className="page-cover-followup">
        <div className="container page-cover-followup-inner">
          <p>Books and published works by Esther Cho.</p>
        </div>
      </section>
    </main>
  );
}
