import type { Metadata } from "next";
import { SectionPlaceholder } from "@/components/section-placeholder";

export const metadata: Metadata = {
  title: "Beyond the Garden",
};

export default function BooksPage() {
  return (
    <SectionPlaceholder title="Beyond the Garden">
      Books and published works by Esther Cho.
    </SectionPlaceholder>
  );
}