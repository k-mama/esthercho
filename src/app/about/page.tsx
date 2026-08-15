import type { Metadata } from "next";
import Image from "next/image";
import { PageCover } from "@/components/page-cover";
import { authorProfile } from "@/content/author-profile";
import "./about.css";

export const metadata: Metadata = {
  title: "Esther Cho · Cho Seongyeon",
  description:
    "Meet Esther Cho, the international author name of Korean writer and artist Cho Seongyeon (조성연).",
};

const education = authorProfile.education;

export default function AboutPage() {
  return (
    <main>
      <PageCover
        eyebrow="ESTHER"
        title="Esther Cho"
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
            <p className="esther-eyebrow">ABOUT</p>

            <h2>
              {authorProfile.globalName} {"\u00B7"}{" "}
              {authorProfile.koreanName}
            </h2>

            <p className="esther-deck">
              Esther Cho is the international author name of Korean writer and
              artist {authorProfile.romanizedName} ({authorProfile.koreanName}).
            </p>

            <p className="esther-intro">
              She writes and draws from what she has lived and remembered:
              Christian faith, family, art, meals, and life at home.
            </p>
          </div>
        </header>

        <section className="container esther-section esther-education-section">
          <div className="esther-split esther-split-reverse">
            <div className="esther-copy">
              <p className="esther-eyebrow">ART</p>

              <h2>Years of art study.</h2>

              <p>
                She studied at Yewon School and Seoul Arts High School, then
                Oriental Painting at Seoul National University. She later
                completed graduate coursework in Art Education at Ewha Womans
                University.
              </p>

              <ol
                className="esther-timeline"
                aria-label="Education chronology"
              >
                {education.map((item) => (
                  <li key={item.year}>
                    <span className="esther-year">{item.year}</span>
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
                priority
              />

              <figcaption>University years</figcaption>
            </figure>
          </div>
        </section>

        <section className="esther-section esther-home-section">
          <div className="container esther-home-grid esther-home-copy-only">
            <div className="esther-copy">
              <p className="esther-eyebrow">HOME AND FAITH</p>

              <h2>Life happens at the table.</h2>

              <p>
                Writing and drawing sit alongside meals, family routines, prayer,
                and everyday care. They are not separate parts of her life.
              </p>

              <p>
                At the morning table, breakfast and a verse can end up beside the
                same notebook.
              </p>
            </div>
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

              <figcaption>Volunteer service in Bangladesh</figcaption>
            </figure>

            <div className="esther-copy">
              <p className="esther-eyebrow">FAITH IN PRACTICE</p>

              <h2>Faith in ordinary practice.</h2>

              <p>
                Her faith has also taken practical form through mentoring North
                Korean refugees and participating in mission and volunteer work
                in Bangladesh.
              </p>
            </div>
          </div>
        </section>

        <section className="esther-section esther-making-section">
          <div className="container esther-making-grid">
            <div className="esther-copy">
              <p className="esther-eyebrow">STILL MAKING</p>

              <h2>She still makes things.</h2>

              <p>
                She continues to write prose and devotional reflections and to
                draw scenes by hand.
              </p>

              <p>
                Some drawings stay as they are. Some become the starting point
                for later editorial reinterpretation, which is labeled
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
                Based on an original childhood sketch · AI-assisted editorial
                reinterpretation
              </figcaption>
            </figure>
          </div>
        </section>

        <footer className="container esther-closing">
          <p className="esther-eyebrow">
            {authorProfile.globalName} {"\u00B7"}{" "}
            {authorProfile.koreanName}
          </p>

          <p>She keeps writing and drawing.</p>
        </footer>
      </article>
    </main>
  );
}
