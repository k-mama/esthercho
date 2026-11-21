import type { Metadata } from "next";
import { PageCover } from "@/components/page-cover";
import { StoryIndexEditorial } from "@/components/story-index-editorial";
import "./stories.css";

export const metadata: Metadata = {
  title: "Stories",
  description: "Eighteen true stories from Esther Cho: a tiger dream, childhood Christmases, family tables, and a picture book born from her son’s words.",
};

export default function StoriesPage() {
  return (
    <main className="stories-page">
      <PageCover
        eyebrow="STORIES"
        title="Stories"
        description="A father’s joke, Christmas presents hidden in the house, and a July she never forgot."
        image="/media/covers/stories-seated-original-20261118-desktop.webp"
        mobileImage="/media/covers/stories-seated-original-20261118-mobile.webp"
        alt="A photograph of Esther Cho seated indoors holding a cup of coffee"
        objectPosition="center center"
        mobileObjectPosition="center center"
        align="left"
        shade="medium"
      />
      <StoryIndexEditorial locale="en"/>
    </main>
  );
}
