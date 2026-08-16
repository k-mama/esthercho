import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import "../my-father-dreamed-of-a-tiger/story-detail.css";

export const metadata: Metadata = {
  title: "The Youngest Daughter in Every House",
  description:
    "A childhood memory from Esther Cho's living story archive: the oldest child at home, and the youngest daughter in the houses that helped raise her.",
};

const tags = ["Mother", "Grandmother", "Aunts", "Family", "House"];

export default function YoungestDaughterStoryPage() {
  return (
    <main className="story-detail-page">
      <section className="container story-detail-hero" aria-labelledby="story-title">
        <Link href="/stories/" className="story-detail-back">
          Stories
        </Link>

        <p className="story-detail-kicker">STORY 02 · FAMILY</p>
        <h1 id="story-title">The Youngest Daughter in Every House</h1>
        <p className="story-detail-deck">
          At home, I was the oldest child. In other houses, I kept becoming the youngest daughter.
        </p>
      </section>

      <section className="container story-detail-grid">
        <article className="story-detail-copy">
          <p className="story-detail-opening">
            At home, I was the oldest child.
          </p>

          <p>
            My father was the eldest son in his family, and I was his first child,
            the first granddaughter. Then two younger brothers arrived, one year
            apart.
          </p>

          <p>
            My mother had three very young children. Her own parents had died
            early, so when she needed help, there were no maternal grandparents
            to call.
          </p>

          <p>
            One place I often stayed was a nearby uncle&apos;s house. It was a
            large hanok with a square courtyard and a flower bed. My grandmother
            and great-grandmother were there, along with my uncles. One of them
            was still in high school. I remember two detached buildings and a
            bedroom clock that went click, click, click.
          </p>

          <p>
            I was quieter than my little brothers, so I was probably the easiest
            child to send for a few days. I missed my mother at night and cried
            for her sometimes, but I could stay. I was loved there by my
            grandparents and my uncles.
          </p>

          <p>
            I watched my grandmother at her dressing table and copied her makeup.
            Apparently admiration can become a beauty routine very quickly.
          </p>

          <p>
            When my mother needed more help, I also stayed with an older aunt or
            a younger aunt. The address changed. My place in the household did
            not. There too, I became the youngest daughter.
          </p>

          <p>
            When I think about those years now, I remember missing my mother. I
            also remember how many people made room for me.
          </p>

          <div className="story-detail-tags" aria-label="Related memory tags">
            {tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </article>

        <figure className="story-detail-figure">
          <Image
            src="/media/esther/childhood-garden.jpg"
            alt="Esther Cho smiling in a garden as a child"
            width={1800}
            height={1350}
            sizes="(max-width: 899px) 100vw, 42vw"
            priority
          />
          <figcaption>
            Archive photograph · Esther Cho as a child. The photograph is not
            identified as one of the relatives&apos; homes described in this story.
          </figcaption>
        </figure>
      </section>

      <section className="story-detail-note">
        <div className="container story-detail-note-inner">
          <p className="story-detail-kicker">ARCHIVE NOTE</p>
          <p>
            This story is built only from Esther&apos;s recorded family memories.
            Houses and relationships are named only to the level supported by the
            archive; unverified details are left out.
          </p>
        </div>
      </section>

      <section className="container story-detail-next" aria-labelledby="next-story-title">
        <p className="story-detail-kicker">NEXT IN THE OPENING COLLECTION</p>
        <h2 id="next-story-title">Back to the Yard in Clean Pajamas</h2>
        <p>The next childhood scene is being source-checked before publication.</p>
        <Link href="/stories/" className="story-detail-link">
          Return to the collection
        </Link>
      </section>
    </main>
  );
}
