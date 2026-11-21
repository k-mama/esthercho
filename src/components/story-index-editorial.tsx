import Link from "next/link";
import { storyIndex, type StoryLocale } from "@/content/esther-story-archive";

/** Editorial navigation only: all destinations come from the canonical story index. */
const selected = [
  {
    number: "10",
    label: { ko: "어린 시절의 크리스마스", en: "A CHRISTMAS MEMORY" },
    hook: {
      ko: "엄마가 숨긴 선물을 찾았다. 그런데 뜯을 수 없었다.",
      en: "We Found the Christmas Presents. We Couldn't Open Them.",
    },
    glimpse: {
      ko: "부모님이 잠든 것 같으면 남동생들과 선물을 찾으러 다녔다.",
      en: "Two little brothers, a sleeping house, and presents hidden somewhere inside.",
    },
  },
  {
    number: "07",
    label: { ko: "중학교 1학년, 그해 7월", en: "JULY, FIRST YEAR OF MIDDLE SCHOOL" },
    hook: {
      ko: "아버지가 돌아가셨는데도, 나는 밥을 먹고 학교에 갔다.",
      en: "My Father Had Died. I Still Ate and Went to School.",
    },
    glimpse: {
      ko: "하루가 계속된다는 사실조차 낯설었던 시간.",
      en: "The strange sadness of going on with ordinary life.",
    },
  },
  {
    number: "16",
    label: { ko: "아들에게서 시작된 그림책", en: "THE BOY BEHIND THE PICTURE BOOK" },
    hook: {
      ko: "“I dream of becoming a Big Black doggy.”",
      en: "“I dream of becoming a Big Black doggy.”",
    },
    glimpse: {
      ko: "어린 아들의 한 문장이 여러 언어의 그림책이 되기까지.",
      en: "How a little boy's words became a picture book published in several languages.",
    },
  },
] as const;

const remaining = [
  {
    title: { ko: "그 집에서 함께했던 날들", en: "Days in the Family House" },
    ids: ["03", "04", "05", "06", "09"],
  },
  {
    title: { ko: "학교와 식탁, 그 사이의 삶", en: "From School to the Family Table" },
    ids: ["11", "02", "12", "15"],
  },
  {
    title: { ko: "비와 새벽, 오래 남은 기억들", en: "Rain, Mornings, and the Things That Stay" },
    ids: ["13", "14", "17", "18", "08"],
  },
] as const;

export function StoryIndexEditorial({ locale }: { locale: StoryLocale }) {
  const ko = locale === "ko";
  const storyByNumber = new Map(storyIndex(locale).map((story) => [story.number, story]));
  const firstHref = storyByNumber.get("01")!.href;
  const primaryQuote = ko
    ? "“내가 잘못 봤나 보다. 호랑이가 아니라 고양이였나 봐.”"
    : "“I must have seen it wrong. Maybe it was a cat, not a tiger.”";

  return (
    <>
      <section className="story-editorial-opening" aria-labelledby="story-editorial-opening-title">
        <div className="container story-editorial-opening-inner">
          <p className="stories-kicker">{ko ? "01 · 첫 번째 이야기" : "01 · BEGIN HERE"}</p>
          <h2 id="story-editorial-opening-title" className="story-editorial-opening-title">
            {ko ? (
              <>
                <span>아빠는 호랑이꿈을 꿨다.</span>
                <span>그런데 태어난 건 딸이었다.</span>
              </>
            ) : (
              <>
                <span>He Dreamed of a Tiger.</span>
                <span>Then a Daughter Was Born.</span>
              </>
            )}
          </h2>
          <p className="story-editorial-quote-intro">
            {ko ? "아버지는 우스갯소리로 말씀하셨다." : "My father joked about it."}
          </p>
          <blockquote className="story-editorial-opening-quote">{primaryQuote}</blockquote>
          <Link className="story-editorial-primary-link" href={firstHref}>
            {ko ? "아버지의 이야기 읽기" : "Read the first story"}
            <span aria-hidden="true"> →</span>
          </Link>
        </div>
      </section>

      <section className="story-editorial-picks" aria-labelledby="story-editorial-picks-title">
        <div className="container">
          <div className="story-editorial-section-head">
            <p className="stories-kicker">{ko ? "서로 다른 세 장면" : "THREE PLACES TO BEGIN"}</p>
            <h2 id="story-editorial-picks-title">
              {ko ? "어떤 이야기가 먼저 궁금하세요?" : "Which Story Would You Read First?"}
            </h2>
          </div>
          <div className="story-editorial-pick-grid">
            {selected.map((pick) => {
              const story = storyByNumber.get(pick.number);
              if (!story) return null;
              return (
                <article className="story-editorial-pick" key={pick.number}>
                  <p className="story-editorial-pick-label">{pick.label[locale]}</p>
                  <p className="story-editorial-pick-number">{pick.number}</p>
                  <h3>{pick.hook[locale]}</h3>
                  <p className="story-editorial-pick-glimpse">{pick.glimpse[locale]}</p>
                  <Link className="story-editorial-pick-link" href={story.href}>
                    {ko ? "이야기 읽기" : "Read the story"}
                    <span aria-hidden="true"> →</span>
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="story-editorial-library" aria-labelledby="story-editorial-library-title">
        <div className="container">
          <header className="story-editorial-library-head">
            <p className="stories-kicker">{ko ? "다른 이야기들 · 14편" : "FOURTEEN MORE STORIES"}</p>
            <h2 id="story-editorial-library-title">
              {ko ? "그때의 집에서, 지금의 일상까지." : "From the Family House to the Life She Lives Now."}
            </h2>
          </header>
          {remaining.map((collection, i) => (
            <div className="story-editorial-group" key={i}>
              <h3>{collection.title[locale]}</h3>
              <ol className="story-editorial-row-list">
                {collection.ids.map((n) => {
                  const story = storyByNumber.get(n);
                  if (!story) return null;
                  return (
                    <li className="story-editorial-row" key={n} id={n === "02" ? "story-two" : undefined}>
                      <span className="story-editorial-row-number">{story.number}</span>
                      <div className="story-editorial-row-copy">
                        <h4><Link href={story.href}>{story.title}</Link></h4>
                        <p>{story.meta}</p>
                      </div>
                      <Link className="story-editorial-row-action" href={story.href}
                        aria-label={ko ? `${story.title} 읽기` : `Read ${story.title}`}>
                        <span aria-hidden="true">↗</span>
                      </Link>
                    </li>
                  );
                })}
              </ol>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
