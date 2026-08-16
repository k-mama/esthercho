import type { Metadata } from "next";

type RouteMetadataOptions = {
  title: string;
  description: string;
  path: string;
  locale: "en" | "ko";
  localized?: boolean;
};

type ShareImage = {
  url: string;
  width: number;
  height: number;
};

const defaultShareImage: ShareImage = {
  url: "/media/home/esther-house-entry-poster.jpg?v=20260815-2000",
  width: 1280,
  height: 720,
};

const routeShareImages: Record<string, ShareImage> = {
  "/about/": {
    url: "/media/covers/esther-cover.jpg",
    width: 2400,
    height: 1800,
  },
  "/archive/": {
    url: "/media/covers/childhood-cover.jpg",
    width: 1800,
    height: 1350,
  },
  "/books/": {
    url: "/media/covers/books-cover.jpg",
    width: 2400,
    height: 1350,
  },
  "/stories/": {
    url: "/media/covers/stories-cover.jpg",
    width: 2400,
    height: 1800,
  },
  "/studio/": {
    url: "/media/covers/studio-cover.jpg",
    width: 1672,
    height: 941,
  },
  "/stories/my-father-dreamed-of-a-tiger/": {
    url: "/media/esther/childhood-garden.jpg",
    width: 1800,
    height: 1350,
  },
  "/stories/the-youngest-daughter-in-every-house/": {
    url: "/media/esther/childhood-garden.jpg",
    width: 1800,
    height: 1350,
  },
};

function normalizePath(path: string) {
  const leading = path.startsWith("/") ? path : `/${path}`;
  return leading === "/" || leading.endsWith("/") ? leading : `${leading}/`;
}

function koreanPath(path: string) {
  return path === "/" ? "/ko/" : `/ko${path}`;
}

export function createRouteMetadata({
  title,
  description,
  path,
  locale,
  localized = true,
}: RouteMetadataOptions): Metadata {
  const englishPath = normalizePath(path);
  const koPath = koreanPath(englishPath);
  const canonical = locale === "ko" ? koPath : englishPath;
  const shareImage = routeShareImages[englishPath] ?? defaultShareImage;

  return {
    alternates: {
      canonical,
      ...(localized
        ? {
            languages: {
              en: englishPath,
              ko: koPath,
            },
          }
        : {}),
    },
    openGraph: {
      type: "website",
      url: canonical,
      siteName: locale === "ko" ? "Esther Cho / 조성연" : "Esther Cho",
      title,
      description,
      locale: locale === "ko" ? "ko_KR" : "en_US",
      images: [
        {
          ...shareImage,
          alt:
            locale === "ko"
              ? `${title} — 조성연 작가 홈페이지`
              : `${title} — Esther Cho official author website`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [shareImage.url],
    },
  };
}
