import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PageCover } from "@/components/page-cover";
import { storyIndex } from "@/content/esther-story-archive";
import "./stories.css";

export const metadata: Metadata = {
  title: "Stories",
  description:
    "Stories by Esther Cho, drawn from childhood, family, faith, and the details she remembers.",
};

const openingCollection = storyIndex("en");

export default function StoriesPage() {
  return (
    <main className="stories-page">
      <PageCover
        eyebrow="STORIES"
        title="Stories"
        description="Childhood, family, faith, and the details Esther remembers."
        image="/media/covers/stories-seated-original-20261118-desktop.webp"
        mobileImage="/media/covers/stories-seated-original-20261118-mobile.webp"
        alt="Esther Cho seated beside a stone fireplace, holding a cup of coffee"
        objectPosition="center center"
        mobileObjectPosition="center center"
        align="left"
        shade="medium"
      />

      <section className="stories-feature" aria-labelledby="start-here-title">
        <div className="container stories-feature-inner stories-feature-text-only">
          <div className="stories-feature-copy">
            <p className="stories-kicker">START HERE</p>
            <p className="stories-feature-number">01</p>
            <h2 id="start-here-title">My Father Dreamed of a Tiger</h2>
            <p className="stories-feature-lead">
              Before Esther was born, her father dreamed of a tiger. The baby was
              a girl. The family joke was that perhaps it had been a cat.
            </p>

            <Link
              href="/stories/my-father-dreamed-of-a-tiger/"
              className="stories-text-link"
            >
              Read the first story
            </Link>
          </div>
        </div>
      </section>
      <section id="story-two" className="stories-meals-teaser" aria-labelledby="story-two-link">
        <div className="container stories-meals-teaser-inner">
          <div><p className="stories-kicker">FAMILY TABLE · 02</p>
          <h2 id="story-two-link">Three Meals a Day</h2>
          <p>For about six or seven years, Esther prepared breakfast, lunch, and dinner for her parents-in-law. She still has 57 photographs of those meals.</p>
          <Link href="/stories/three-meals-a-day/" className="stories-text-link">Read story 02 and view 57 real meal photographs →</Link></div>
          <Image src="/media/esther/family-meals/meal-15.webp" alt="A real meal prepared by Esther Cho" loading="lazy" sizes="(max-width: 700px) 90vw, 28vw" width={600} height={820}/>
        </div>
      </section>

<section className="stories-opening" aria-labelledby="opening-collection-title">
      <div className="container">
        <header className="stories-section-heading">
          <p className="stories-kicker">LIFE STORIES</p>
          <h2 id="opening-collection-title">Eighteen stories. Four ways through a life.</h2>
          <p>Original story numbers remain unchanged. This is a suggested reading route.</p>
        </header>
        <div className="stories-act">
          <header className="stories-act-heading">
            <p className="stories-kicker">ACT 01</p>
            <h3>The House Where We Were Happiest</h3>
            <p>A father&apos;s joke, the garden in Cheongdam-dong, and the days the family shared.</p>
          </header>
          <ol className="stories-opening-list">
            {["01","03","04","05","09","10","06"].map((n) => {
              const story = openingCollection.find((item) => item.number === n);
              return story ? <li className="stories-opening-item" key={story.number}>
                <span className="stories-opening-number">{story.number}</span>
                <div className="stories-opening-title-group"><p className="stories-opening-meta">{story.meta}</p>
                  <h4><Link href={story.href}>{story.title}</Link></h4></div>
                <Link href={story.href} className="stories-opening-action">Read <span aria-hidden="true">→</span></Link>
              </li> : null;
            })}
          </ol>
        </div>
        <div className="stories-act">
          <header className="stories-act-heading">
            <p className="stories-kicker">ACT 02</p>
            <h3>July, My First Year of Middle School</h3>
            <p>The ordinary days that continued after her father&apos;s death, and her years studying art.</p>
          </header>
          <ol className="stories-opening-list">
            {["07","11"].map((n) => {
              const story = openingCollection.find((item) => item.number === n);
              return story ? <li className="stories-opening-item" key={story.number}>
                <span className="stories-opening-number">{story.number}</span>
                <div className="stories-opening-title-group"><p className="stories-opening-meta">{story.meta}</p>
                  <h4><Link href={story.href}>{story.title}</Link></h4></div>
                <Link href={story.href} className="stories-opening-action">Read <span aria-hidden="true">→</span></Link>
              </li> : null;
            })}
          </ol>
        </div>
        <div className="stories-act">
          <header className="stories-act-heading">
            <p className="stories-kicker">ACT 03</p>
            <h3>The Table I Set</h3>
            <p>Family life, meals, and the picture book she made for her son.</p>
          </header>
          <ol className="stories-opening-list">
            {["02","12","15","16"].map((n) => {
              const story = openingCollection.find((item) => item.number === n);
              return story ? <li className="stories-opening-item" key={story.number}>
                <span className="stories-opening-number">{story.number}</span>
                <div className="stories-opening-title-group"><p className="stories-opening-meta">{story.meta}</p>
                  <h4><Link href={story.href}>{story.title}</Link></h4></div>
                <Link href={story.href} className="stories-opening-action">Read <span aria-hidden="true">→</span></Link>
              </li> : null;
            })}
          </ol>
        </div>
        <div className="stories-act">
          <header className="stories-act-heading">
            <p className="stories-kicker">ACT 04</p>
            <h3>The Happiness Collector</h3>
            <p>Rain, Scripture in the morning, sunsets, and the memories that remain.</p>
          </header>
          <ol className="stories-opening-list">
            {["13","14","17","18","08"].map((n) => {
              const story = openingCollection.find((item) => item.number === n);
              return story ? <li className="stories-opening-item" key={story.number}>
                <span className="stories-opening-number">{story.number}</span>
                <div className="stories-opening-title-group"><p className="stories-opening-meta">{story.meta}</p>
                  <h4><Link href={story.href}>{story.title}</Link></h4></div>
                <Link href={story.href} className="stories-opening-action">Read <span aria-hidden="true">→</span></Link>
              </li> : null;
            })}
          </ol>
        </div>
      </div>
    </section>
      <section className="stories-happiness" aria-labelledby="happiness-title">
        <div className="container stories-happiness-inner">
          <p className="stories-kicker">THE HAPPINESS COLLECTOR</p>
          <div className="stories-happiness-grid">
            <blockquote id="happiness-title">
              “I think I may be someone who collects happiness.”
            </blockquote>
            <p>
              Hard things happened too. Yet laughter is often what comes back
              first. Both are true.
            </p>
            <Link className="stories-text-link" href="/stories/the-happiness-collector/">Read The Happiness Collector →</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
