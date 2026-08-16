import type { Metadata } from "next";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: true,
  },
};

export default function KoreanHomeAliasLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
