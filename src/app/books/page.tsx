import type { Metadata } from "next";
import { SectionPlaceholder } from "@/components/section-placeholder";

export const metadata: Metadata = {
  title: "Books",
};

export default function BooksPage() {
  return (
    <SectionPlaceholder title="BOOKS">
      Books and published works by Esther Cho.
    </SectionPlaceholder>
  );
}
