import type { Metadata } from "next";
import { EstherStoryArticle } from "@/components/esther-story-article";
import { getRecordedStory } from "@/content/esther-story-archive";
const story = getRecordedStory("the-youngest-daughter-in-every-house")!;
export const metadata: Metadata = {
 title: story.en.title,
 description: story.en.deck,
 alternates: {
  canonical: "https://esthercho.pages.dev/stories/the-youngest-daughter-in-every-house/",
  languages: {
   en: "https://esthercho.pages.dev/stories/the-youngest-daughter-in-every-house/",
   ko: "https://esthercho.pages.dev/ko/stories/the-youngest-daughter-in-every-house/"
  }
 }
};
export default function Page() { return <EstherStoryArticle story={story} locale="en"/>; }
