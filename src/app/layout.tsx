import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Esther Cho",
  description: "Official author website of Esther Cho.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
