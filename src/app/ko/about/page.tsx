import type { Metadata } from "next";
import { PageCover } from "@/components/page-cover";
import { authorProfile } from "@/content/author-profile";

export const metadata: Metadata = {
  title: "이야기가 된 집",
  description: `${authorProfile.koreanName} 작가의 삶과 창작 이야기.`,
};

export default function KoreanAboutPage() {
  return (
    <main>
      <PageCover
        eyebrow={authorProfile.koreanName}
        title="이야기가 된 집"
        description={authorProfile.roles.ko.join(" · ")}
        image="/media/covers/esther-cover.jpg"
        alt="대학생 시절 물가에 서 있는 조성연"
        objectPosition="center center"
        mobileObjectPosition="58% center"
        align="left"
        shade="medium"
      />
      <section className="page-cover-followup">
        <div className="container page-cover-followup-inner">
          <p>
            작가이자 화가이며 오랫동안 가정을 돌보며 살아온{" "}
            {authorProfile.koreanName}의 이야기.
          </p>
        </div>
      </section>
    </main>
  );
}
