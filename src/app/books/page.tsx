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
        alt="An open hand-drawn story study by Esther Cho"
        objectPosition="center 60%"
        mobileObjectPosition="center 58%"
        align="left"
        shade="strong"
      />

      <section className="page-cover-followup">
        <div className="container page-cover-followup-inner">
          <p>Books and published works by Esther Cho.</p>
        </div>
      </section>
    </main>
  );
}
