import { collection, config, fields } from "@keystatic/core";

const publicationOptions = [
  { label: "Not started", value: "not-started" },
  { label: "Draft", value: "draft" },
  { label: "Published", value: "published" },
  { label: "Retired", value: "retired" },
] as const;

const editorialStateOptions = [
  { label: "Recorded memory", value: "recorded" },
  { label: "Developing", value: "developing" },
  { label: "Active", value: "active" },
  { label: "Retired", value: "retired" },
] as const;

const permissionOptions = [
  { label: "I'm not sure — review first", value: "review" },
  { label: "Cleared for this use", value: "cleared" },
  { label: "Do not publish", value: "restricted" },
] as const;

export default config({
  storage: {
    kind: "local",
  },

  collections: {
    stories: collection({
      label: "Stories",
      path: "content/stories/*/",
      slugField: "entryKey",
      schema: {
        entryKey: fields.slug({
          name: {
            label: "Internal entry key",
            description:
              "Physical storage folder for this PoC. It is not the immutable Story ID or public URL.",
          },
        }),

        storyId: fields.text({
          label: "Story ID",
          description:
            "Immutable semantic identity. A production integration must generate this without author management.",
          validation: { isRequired: true },
        }),

        editorialState: fields.select({
          label: "Editorial state",
          options: editorialStateOptions,
          defaultValue: "recorded",
        }),

        eventYear: fields.integer({
          label: "Approximate event year",
          description: "Year of the remembered event. Leave blank rather than guessing.",
        }),

        datePrecision: fields.select({
          label: "Date precision",
          options: [
            { label: "Exact day", value: "day" },
            { label: "Month known", value: "month" },
            { label: "Year known", value: "year" },
            { label: "Approximate year", value: "approximate-year" },
            { label: "Decade only", value: "decade" },
            { label: "Unknown", value: "unknown" },
          ],
          defaultValue: "unknown",
        }),

        collections: fields.multiselect({
          label: "Collections",
          options: [
            { label: "Morning Table", value: "morning-table" },
            { label: "Childhood", value: "childhood" },
            { label: "Art", value: "art" },
            { label: "Family", value: "family" },
            { label: "Faith", value: "faith" },
            { label: "Service", value: "service" },
          ],
          defaultValue: [],
        }),

        korean: fields.object(
          {
            status: fields.select({
              label: "Publication state",
              options: publicationOptions,
              defaultValue: "not-started",
            }),
            title: fields.text({ label: "Korean title" }),
            publicSlug: fields.text({
              label: "Korean public URL slug",
              description: "Presentation URL only; not Story identity.",
            }),
            deck: fields.text({
              label: "Korean short introduction",
              multiline: true,
            }),
            availabilitySummary: fields.text({
              label: "Korean companion summary",
              description: "Optional editorial summary. It is not the Korean Story original.",
              multiline: true,
            }),
          },
          { label: "Korean original" },
        ),

        english: fields.object(
          {
            status: fields.select({
              label: "Publication state",
              options: publicationOptions,
              defaultValue: "not-started",
            }),
            title: fields.text({ label: "English title" }),
            publicSlug: fields.text({
              label: "English public URL slug",
              description: "Presentation URL only; not Story identity.",
            }),
            deck: fields.text({
              label: "English short introduction",
              multiline: true,
            }),
            availabilitySummary: fields.text({
              label: "English companion summary",
              description: "Optional editorial summary. It is not the English Story original.",
              multiline: true,
            }),
          },
          { label: "English original" },
        ),

        photos: fields.array(
          fields.object({
            file: fields.image({
              label: "Photo",
              directory: "public/media",
              publicPath: "/media/",
            }),
            approximateYear: fields.integer({
              label: "Approximate year",
            }),
            people: fields.text({
              label: "Who is in this photo?",
            }),
            permission: fields.select({
              label: "Is publication permission clear?",
              options: permissionOptions,
              defaultValue: "review",
            }),
            captionKo: fields.text({ label: "Korean caption" }),
            captionEn: fields.text({ label: "English caption" }),
          }),
          {
            label: "Story photos",
            itemLabel: () => "Photo",
          },
        ),

        bodyKo: fields.mdx({
          label: "Korean Story",
          extension: "md",
        }),

        bodyEn: fields.mdx({
          label: "English Story",
          extension: "md",
        }),
      },
    }),
  },
});
