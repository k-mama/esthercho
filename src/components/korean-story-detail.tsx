// Compatibility wrapper: legacy routes may still import this component.
// Actual story content is maintained in the single verified bilingual archive.
import { EstherStoryArticle } from "@/components/esther-story-article";
import { getRecordedStory } from "@/content/esther-story-archive";
export function KoreanStoryDetail({ which }: { which: 0 | 1 }) {
  const slug = which === 0 ? "my-father-dreamed-of-a-tiger" : "the-youngest-daughter-in-every-house";
  return <EstherStoryArticle story={getRecordedStory(slug)!} locale="ko" />;
}
