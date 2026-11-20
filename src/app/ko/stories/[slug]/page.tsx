import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { EstherStoryArticle } from "@/components/esther-story-article";
import { getRecordedStory, recordedStories } from "@/content/esther-story-archive";

type Props = { params: Promise<{ slug: string }> };
const staticSlugs = recordedStories.filter(s => s.number !== "01" && s.number !== "03");

export const dynamicParams = false;
export function generateStaticParams() { return staticSlugs.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const story = getRecordedStory(slug);
  if (!story) return {};
  return {
    title: story.ko.title,
    description: story.ko.deck,
    alternates: {
      canonical: `https://esthercho.pages.dev/ko/stories/${slug}/`,
      languages: { en: `https://esthercho.pages.dev/stories/${slug}/`, ko: `https://esthercho.pages.dev/ko/stories/${slug}/` },
    },
  };
}
export default async function KoreanStoryPage({ params }: Props) {
  const { slug } = await params;
  const story = getRecordedStory(slug);
  if (!story) notFound();
  return <EstherStoryArticle story={story} locale="ko" />;
}
