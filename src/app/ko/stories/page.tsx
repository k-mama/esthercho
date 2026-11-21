import type { Metadata } from "next";
import { PageCover } from "@/components/page-cover";
import { StoryIndexEditorial } from "@/components/story-index-editorial";
import "../../stories/stories.css";

export const metadata: Metadata = {
  title: "살아온 이야기",
  description: "호랑이 태몽에서 시작해 가족과 식탁, 그림책으로 이어지는 조성연 작가의 실제 이야기 18편.",
};

export default function KoreanStoriesPage() {
  return (
    <main className="stories-page">
      <PageCover
        eyebrow="이야기"
        title="살아온 이야기"
        description="아버지의 농담, 엄마가 숨긴 크리스마스 선물, 그리고 잊히지 않는 그해 7월."
        image="/media/covers/stories-seated-original-20261118-desktop.webp"
        mobileImage="/media/covers/stories-seated-original-20261118-mobile.webp"
        alt="실내에서 커피잔을 들고 앉아 있는 조성연 작가의 실제 사진"
        objectPosition="center center"
        mobileObjectPosition="center center"
        align="left"
        shade="medium"
      />
      <StoryIndexEditorial locale="ko"/>
    </main>
  );
}
