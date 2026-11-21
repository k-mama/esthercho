import type { Metadata } from "next";
import Link from "next/link";
import { FamilyMealsGallery } from "@/components/family-meals-gallery";
import "../../../stories/stories.css";
export const metadata: Metadata = {
  title: "삼시세끼, 미슐랭 3스타 셰프처럼",
  description: "약 6~7년 동안 시부모님을 위해 매일 차렸던 삼시세끼의 실제 사진 57장.",
};
export default function FamilyMealsStoryPage() {
 return <main className="stories-page">
  <nav className="stories-single-navigation container" aria-label="이야기 이동">
    <Link href="/ko/stories/">← 열여덟 편의 이야기로</Link>
    <Link href="/ko/stories/the-brothers-i-meet-every-morning/">다음 추천 이야기 12번 →</Link>
  </nav>
  <FamilyMealsGallery locale="ko"/>
  <nav className="stories-single-navigation container">
    <Link href="/ko/stories/the-brothers-i-meet-every-morning/">12 · 매일 아침 만나는 두 동생 →</Link>
  </nav>
 </main>;
}
