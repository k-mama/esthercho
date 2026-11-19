import type { Metadata } from "next";
import { PageCover } from "@/components/page-cover";
import { ChildhoodArchiveSections } from "@/components/childhood-archive-sections";
import "./archive.css";

export const metadata: Metadata = {
  title: "The Childhood Album",
  description: "The real Cheongdam-dong home where Esther Cho and her family remember their happiest years. Four family photographs and the stories behind them.",
};

export default function ArchivePage() {
  return (
    <main className="childhood-page">
      <PageCover
        eyebrow="CHILDHOOD"
        title="The Childhood Album"
        description="A family home in Cheongdam-dong, Seoul. A childhood worth remembering."
        image="/media/covers/childhood-cover.jpg"
        alt="Esther Cho smiling in a garden as a child"
        objectPosition="42% center"
        mobileObjectPosition="38% center"
        align="right"
        shade="medium"
      />
      <ChildhoodArchiveSections locale="en" />
    </main>
  );
}
