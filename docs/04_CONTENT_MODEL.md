# Esther Cho Website — Content Model

All translated versions of the same work share a stable `contentId`.

## Story

```ts
type Story = {
  contentId: string;
  locale: string;
  slug: string;
  title: string;
  subtitle?: string;
  shortIntroduction: string;
  body: string;
  lifePeriod?: string;
  people?: string[];
  places?: string[];
  objects?: string[];
  seasons?: string[];
  themes?: string[];
  heroMedia?: MediaReference;
  gallery?: MediaReference[];
  audio?: string[];
  films?: string[];
  relatedBooks?: string[];
  relatedStories?: string[];
  publishedAt?: string;
  updatedAt?: string;
  publishStatus: 'draft' | 'review' | 'published';
};
```

## Book

```ts
type Book = {
  contentId: string;
  locale: string;
  slug: string;
  title: string;
  subtitle?: string;
  bookType: 'devotional' | 'childrens-book';
  cover: MediaReference;
  insidePages?: MediaReference[];
  shortDescription: string;
  longDescription?: string;
  storyBehindBook?: string;
  realLifeSource?: string[];
  originalDrawings?: MediaReference[];
  aiReimaginedImages?: MediaReference[];
  relatedStories?: string[];
  relatedPlaces?: string[];
  audio?: string[];
  films?: string[];
  publishStatus: 'draft' | 'review' | 'published';
};
```

## Archive Image

```ts
type ArchiveImage = {
  archiveId: string;
  title: string;
  approximateDate?: string;
  place?: string;
  people?: string[];
  originalFilePrivate: boolean;
  webFile: string;
  restoredFile?: string;
  motionFile?: string;
  source?: string;
  owner?: string;
  publicStatus: 'public' | 'story-only' | 'limited' | 'private' | 'verify-first';
  relatedStories?: string[];
  relatedBooks?: string[];
  aiReconstructionStatus: 'none' | 'light-restoration' | 'ai-reimagined' | 'memory-reconstruction';
};
```

## Film

```ts
type Film = {
  filmId: string;
  locale: string;
  slug: string;
  title: string;
  filmType: 'invitation-film' | 'memory-film' | 'living-photograph' | 'voice-note' | 'book-film';
  poster: string;
  video: string;
  duration: number;
  transcript?: string;
  captionFile?: string;
  relatedStory?: string;
  relatedBook?: string;
  relatedArchive?: string[];
  publishStatus: 'draft' | 'review' | 'published';
};
```

## Media Reference

```ts
type MediaReference = {
  id: string;
  type: 'image' | 'video' | 'audio';
  src: string;
  alt?: string;
  caption?: string;
  credit?: string;
  evidenceType?: 'archival-photograph' | 'present-day-photograph' | 'original-drawing' | 'ai-reimagined' | 'memory-reconstruction';
};
```

Use Astro Content Collections with Markdown or MDX for long-form content and typed frontmatter. Do not hard-code editorial content directly in page components.
