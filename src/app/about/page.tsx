import type { Metadata } from "next";
import Image from "next/image";
import "./about.css";

export const metadata: Metadata = {
  title: "The House That Became a Story",
  description:
    "Meet Esther Cho, the international author name of Korean writer and artist \uC870\uC131\uC5F0.",
};

const education = [
  {
    year: "1985",
    detail: "Graduated from Yewon School",
  },
  {
    year: "1988",
    detail: "Graduated from Seoul Arts High School",
  },
  {
    year: "1992",
    detail:
      "Graduated from Seoul National University with a degree in Oriental Painting",
  },
  {
    year: "1999",
    detail:
      "Completed the coursework for a master's program in Art Education at Ewha Womans University",
  },
];

export default function AboutPage() {
  return (
    <article className="esther-page">
      <header className="container esther-hero">
        <div className="esther-hero-copy">
          <p className="esther-eyebrow">ABOUT THE AUTHOR</p>
          <h1>The House That Became a Story</h1>
          <p className="esther-deck">
            Esther Cho is the international author name of Korean writer and
            artist <span lang="ko">{"\uC870\uC131\uC5F0"}</span>.
          </p>
          <p className="esther-intro">
            Her work grows from Christian faith, memory, childhood, and the
            quiet textures of ordinary life. Writing, drawing, family memory,
            and devotional reflection meet in the stories she is creating now.
          </p>
        </div>

        <figure className="esther-figure esther-hero-figure">
          <Image
            src="/media/esther/childhood-garden.jpg"
            alt="Esther Cho smiling in a garden as a child"
            width={1800}
            height={1350}
            sizes="(max-width: 899px) 100vw, 52vw"
            priority
          />
          <figcaption>Esther Cho as a child.</figcaption>
        </figure>
      </header>

      <section className="esther-section esther-house-section">
        <div className="container esther-split">
          <figure className="esther-figure esther-house-figure">
            <Image
              src="/media/esther/childhood-house.jpg"
              alt="The house and garden connected to Esther Cho's childhood"
              width={1800}
              height={1059}
              sizes="(max-width: 899px) 100vw, 48vw"
            />
            <figcaption>
              The house and garden remembered from childhood.
            </figcaption>
          </figure>

          <div className="esther-copy">
            <p className="esther-eyebrow">THE BEGINNING</p>
            <h2>A house, a garden, and a child who kept looking.</h2>
            <p>
              The places of childhood remain central to Esther Cho&apos;s
              creative world. The house, the garden, family photographs, and
              ordinary rooms return as places where memory becomes story.
            </p>
            <p>
              These are not decorative vintage motifs. They are records of a
              life, preserved and presented as real memory.
            </p>
          </div>
        </div>
      </section>

      <section className="container esther-section esther-education-section">
        <div className="esther-split esther-split-reverse">
          <div className="esther-copy">
            <p className="esther-eyebrow">ART AND EDUCATION</p>
            <h2>The child who drew became a student of Eastern painting.</h2>
            <p>
              Her formal art education began at Yewon School and continued at
              Seoul Arts High School. She later studied Oriental Painting at
              Seoul National University and completed graduate coursework in
              Art Education at Ewha Womans University.
            </p>

            <ol className="esther-timeline" aria-label="Education chronology">
              {education.map((item) => (
                <li key={item.year}>
                  <span className="esther-year">{item.year}</span>
                  <span>{item.detail}</span>
                </li>
              ))}
            </ol>
          </div>

          <figure className="esther-figure esther-portrait-figure">
            <Image
              src="/media/esther/young-artist.jpg"
              alt="Esther Cho during her university years"
              width={1500}
              height={1125}
              sizes="(max-width: 899px) 100vw, 42vw"
            />
            <figcaption>Esther Cho during her university years.</figcaption>
          </figure>
        </div>
      </section>

      <section className="esther-section esther-home-section">
        <div className="container esther-home-grid">
          <div className="esther-copy">
            <p className="esther-eyebrow">HOME, FAMILY, AND FAITH</p>
            <h2>The ordinary table became part of the work.</h2>
            <p>
              Esther Cho is a writer, artist, and homemaker. Much of her
              creative life has grown within the everyday rhythms of home,
              family, Christian faith, and service.
            </p>
            <p>
              The morning table is not a staged symbol. It is one of the real
              places where prayer, food, reflection, and writing meet.
            </p>
          </div>

          <figure className="esther-figure esther-table-figure">
            <Image
              src="/media/esther/morning-table.jpg"
              alt="A breakfast prepared at Esther Cho's table"
              width={1200}
              height={1600}
              sizes="(max-width: 899px) 100vw, 38vw"
            />
            <figcaption>
              A meal prepared at home, part of the rhythm behind her work.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="container esther-section esther-service-section">
        <div className="esther-service-grid">
          <figure className="esther-figure esther-service-figure">
            <Image
              src="/media/esther/bangladesh-service.jpg"
              alt="Esther Cho during volunteer service in Bangladesh"
              width={625}
              height={769}
              sizes="(max-width: 899px) 100vw, 36vw"
            />
            <figcaption>
              Esther Cho during volunteer service in Bangladesh.
            </figcaption>
          </figure>

          <div className="esther-copy">
            <p className="esther-eyebrow">FAITH IN PRACTICE</p>
            <h2>Faith continues beyond the page.</h2>
            <p>
              She supports North Korean refugees through mentoring and
              participates in mission and volunteer work in Bangladesh.
            </p>
            <p>
              These activities are part of the same life from which her writing
              grows. They are presented here without inventing an organization
              name or expanding the scope of work beyond the confirmed record.
            </p>
          </div>
        </div>
      </section>

      <section className="esther-section esther-making-section">
        <div className="container esther-making-grid">
          <div className="esther-copy">
            <p className="esther-eyebrow">STILL MAKING</p>
            <h2>Writing and drawing continue together.</h2>
            <p>
              Her current practice brings together prose, devotional writing,
              family memory, and original hand drawn story studies.
            </p>
            <p>
              When a hand drawn work is later reinterpreted with AI assistance,
              the original and the reinterpretation remain clearly identified.
              The archive is never used to disguise a newly created image as a
              historical record.
            </p>
          </div>

          <figure className="esther-figure esther-sketch-figure">
            <Image
              src="/media/esther/hand-drawn-story.jpg"
              alt="An original pencil story study by Esther Cho"
              width={1200}
              height={1600}
              sizes="(max-width: 899px) 100vw, 38vw"
            />
            <figcaption>
              An original hand drawn story study by Esther Cho.
            </figcaption>
          </figure>
        </div>
      </section>

      <footer className="container esther-closing">
        <p className="esther-eyebrow">ESTHER CHO {"\u00B7"} {"\uC870\uC131\uC5F0"}</p>
        <p>
          A writer and artist gathering faith, memory, home, and lived
          experience into stories.
        </p>
      </footer>
    </article>
  );
}

