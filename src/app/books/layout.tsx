import type { Metadata } from "next";
import { createRouteMetadata } from "@/config/route-metadata";

export const metadata: Metadata = createRouteMetadata({
  title: "Beyond the Garden",
  description: "Books and works in progress by Esther Cho.",
  path: "/books/",
  locale: "en",
});

export default function BooksLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
