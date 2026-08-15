import type { Metadata } from "next";
import Image from "next/image";
import { PageCover } from "@/components/page-cover";
import { authorProfile } from "@/content/author-profile";
import "./about.css";

export const metadata: Metadata = {
  title: "The House That Became a Story",
  description:
    "Meet Esther Cho, the international author name of Korean writer and artist Cho Seongyeon, whose work grows from faith, memory, home, and drawing.",
};

const education = authorProfile.education;

export default function AboutPage() {
  return (
    <main>
      <PageCover
        eyebrow="ESTHER"
        title="The House That Became a Story"
        description={authorProfile.roles.en.join(" · ")}
        image="/media/covers/esther-cover.webp"
        mobileImage="/media/covers/esther-cover-mobile.webp"
        alt="Esther Cho in a navy blouse seated beneath two framed artworks"
        objectPosition="center center"
        mobileObjectPosition="center center"
        align="left"
        shade="medium"
      />

      <article className="esther-page">
        <header className="container esther-hero">
          <div className="esther-hero-copy">
            <p className="esther-eyebrow">ABOUT THE AUTHOR</p>

            <h2>
              {authorProfile.globalName} {"\u00B7"}{" "}
              {authorProfile.romanizedName}
            </h2>

            <p className="esther-deck">
              {authorProfile.shortBio.en}
            </p>

            <p className="esther-intro">
              Her writing and drawings often return to Christian faith,
              childhood, family memory, and daily life at home. She works from
              lived and remembered material.
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

            <figcaption>
              Esther Cho in the garden as a child.
            </figcaption>
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

              <h2>The childhood house and garden.</h2>

              <p>
                The house and garden of her childhood recur in her work.
              </p>

              <p>
                Family photographs, familiar paths, and ordinary rooms remain
                part of the material she returns to.
              </p>
            </div>
          </div>
        </section>

        <section className="container esther-section esther-education-section">
          <div className="esther-split esther-split-reverse">
            <div className="esther-copy">
              <p className="esther-eyebrow">ART AND EDUCATION</p>

              <h2>Years of formal art study.</h2>

              <p>
                Her formal art education began at Yewon School and continued at
                Seoul Arts High School. She later studied Oriental Painting at
                Seoul National University and completed graduate coursework in
                Art Education at Ewha Womans University.
              </p>

              <ol
                className="esther-timeline"
                aria-label="Education chronology"
              >
                {education.map((item) => (
                  <li key={item.year}>
                    <span className="esther-year">
                      {item.year}
                    </span>

                    <span>{item.detail.en}</span>
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

              <figcaption>
                Esther Cho during her university years.
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="esther-section esther-home-section">
          <div className="container esther-home-grid">
            <div className="esther-copy">
              <p className="esther-eyebrow">
                HOME, FAMILY, AND FAITH
              </p>

              <h2>Home, family, and the morning table.</h2>

              <p>
                Esther Cho is a writer, artist, and homemaker. Her creative work
                has developed alongside meals, family routines, prayer, and
                everyday care.
              </p>

              <p>
                At the morning table, food, reflection, memory, and writing
                often share the same space.
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
              <p className="esther-eyebrow">
                FAITH IN PRACTICE
              </p>

              <h2>Mentoring and volunteer service.</h2>

              <p>
                Her faith has also taken practical form through mentoring North
                Korean refugees and participating in mission and volunteer
                service in Bangladesh.
              </p>

              <p>
                These experiences belong to the same life from which her
                writing grows.
              </p>
            </div>
          </div>
        </section>

        <section className="esther-section esther-making-section">
          <div className="container esther-making-grid">
            <div className="esther-copy">
              <p className="esther-eyebrow">STILL MAKING</p>

              <h2>Writing, drawing, and later reinterpretation.</h2>

              <p>
                She continues to write prose, devotional reflections, and
                hand-drawn story studies.
              </p>

              <p>
                Sometimes a pencil drawing remains exactly as it was. Sometimes
                it becomes the starting point for a clearly identified
                AI-assisted editorial reinterpretation.
              </p>

              <p>
                Original work and later reinterpretation are identified
                separately.
              </p>
            </div>

            <figure className="esther-figure esther-sketch-figure">
              <Image
                src="/media/esther/still-making-father-child-collage-20260802.png"
                alt="A paper collage showing young Esther Cho riding on her father's back"
                width={1536}
                height={1536}
                sizes="(max-width: 899px) 100vw, 38vw"
              />

              <figcaption>
                Based on Esther Cho&apos;s original childhood sketch.
                AI-assisted editorial reinterpretation.
              </figcaption>
            </figure>
          </div>
        </section>

        <footer className="container esther-closing">
          <p className="esther-eyebrow">
            {authorProfile.globalName} {"\u00B7"}{" "}
            {authorProfile.romanizedName}
          </p>

          <p>She continues to write and draw.</p>
        </footer>
      </article>
    </main>
  );
}
