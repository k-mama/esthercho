import type { Metadata } from "next";
import { EstherStoryArticle } from "@/components/esther-story-article";
import { getRecordedStory } from "@/content/esther-story-archive";
const story = getRecordedStory("my-father-dreamed-of-a-tiger")!;
export const metadata: Metadata = {
 title: story.ko.title,
 description: story.ko.deck,
 alternates: {
  canonical: "https://esthercho.pages.dev/ko/stories/my-father-dreamed-of-a-tiger/",
  languages: {
   en: "https://esthercho.pages.dev/stories/my-father-dreamed-of-a-tiger/",
   ko: "https://esthercho.pages.dev/ko/stories/my-father-dreamed-of-a-tiger/"
  }
 }
};
export default function Page() { return <EstherStoryArticle story={story} locale="ko"/>; }
