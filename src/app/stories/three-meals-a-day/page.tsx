import type { Metadata } from "next";
import Link from "next/link";
import { FamilyMealsGallery } from "@/components/family-meals-gallery";
import "../stories.css";
export const metadata: Metadata = {
  title: "Three Meals a Day",
  description: "Fifty-seven real meals prepared for Esther Cho’s parents-in-law over about six or seven years.",
};
export default function FamilyMealsStoryPage() {
 return <main className="stories-page">
  <nav className="stories-single-navigation container" aria-label="Story navigation">
    <Link href="/stories/">← Back to all stories</Link>
    <Link href="/stories/the-brothers-i-meet-every-morning/">Next suggested story 12 →</Link>
  </nav>
  <FamilyMealsGallery locale="en"/>
  <nav className="stories-single-navigation container">
    <Link href="/stories/the-brothers-i-meet-every-morning/">12 · The Brothers I Meet Every Morning →</Link>
  </nav>
 </main>;
}
