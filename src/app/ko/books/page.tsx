import type { Metadata } from "next";
import { PageCover } from "@/components/page-cover";

export const metadata: Metadata = {
  title: "정원 너머",
};

export default function KoreanBooksPage() {
  return (
    <main>
      <PageCover
        eyebrow="책"
        title="정원 너머"
        description="조성연의 책과 출간 작업."
        image="/media/covers/books-cover.jpg"
        mobileImage="/media/covers/books-cover-mobile.jpg"
        alt="책과 찻잔, 난초가 놓인 식탁에서 책을 읽는 여인"
        objectPosition="center center"
        mobileObjectPosition="34% center"
        align="right"
        shade="soft"
      />
      <section className="page-cover-followup">
        <div className="container page-cover-followup-inner">
          <p>조성연의 책과 출간 작업.</p>
        </div>
      </section>
    </main>
  );
}
