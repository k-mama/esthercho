import Link from "next/link";
import Image from "next/image";
import "@/app/stories/my-father-dreamed-of-a-tiger/story-detail.css";

const koreanStories = [
  {
    title:"아버지가 꾸신 호랑이 꿈",
    lead:"내가 태어나기 전, 아버지는 호랑이 꿈을 꾸셨다.",
    paragraphs:[
      "내가 태어나기 전, 아버지는 호랑이 꿈을 꾸셨다.",
      "그런데 태어난 아기는 딸이었다.",
      "“아마 고양이였나 보다.”",
      "현재 기록으로 남은 이야기는 여기까지다. 짧지만 분명한 기억이다. 더 많은 이야기를 만들어 보태지 않아도, 이 몇 줄만으로 시작할 수 있다.",
      "이곳의 이야기는 그렇게 남겨 두기도 한다. 기억은 세 줄로 시작해, 언젠가 다른 장면이 떠오르면 조금씩 길어질 수 있다. 처음의 기록은 그대로 남는다.",
    ],
    note:"이야기 방은 작가의 기억을 차곡차곡 담아 가는 기록 공간이다. 옛 사진과 나중에 재구성한 이미지는 서로 다른 자료라는 사실을 명확히 구분한다.",
    nextTitle:"집집마다 막내딸",
    nextHref:"/ko/stories/the-youngest-daughter-in-every-house/",
    nextLink:"다음 이야기 읽기",
  },
  {
    title:"집집마다 막내딸",
    lead:"우리 집에서는 맏이였지만, 다른 집에 가면 나는 막내딸이 되곤 했다.",
    paragraphs:[
      "우리 집에서는 내가 맏이였다.",
      "아버지는 집안의 장남이셨고, 나는 아버지의 첫 아이이자 첫 손녀였다. 그다음 한 살 터울로 남동생 둘이 태어났다.",
      "어머니에게는 아주 어린 아이 셋이 있었다. 어머니의 친정 부모님은 일찍 돌아가셔서, 도움이 필요할 때 의지할 외조부모님이 계시지 않았다.",
      "내가 자주 머물렀던 곳 중 하나는 가까이 사는 작은아버지 댁이었다. 사각형 마당과 꽃밭이 있는 큰 한옥이었다. 할머니와 증조할머니, 작은아버지들이 함께 계셨다. 그중 한 분은 아직 고등학생이셨다. 별채 두 채와 방에서 똑딱똑딱 울리던 시계 소리가 기억난다.",
      "나는 남동생들보다 조용한 편이어서 며칠씩 보내기에도 비교적 수월한 아이였을 것이다. 밤이 되면 어머니가 보고 싶어서 울기도 했지만, 그 집에서도 지낼 수 있었다. 할머니와 작은아버지들이 나를 사랑해 주셨다.",
      "할머니가 화장대 앞에 앉으시면 옆에서 지켜보다 화장을 따라 했다. 존경하는 마음이 미용 습관으로 이어지는 데는 그리 오랜 시간이 걸리지 않았던 모양이다.",
      "어머니가 더 도움이 필요하실 때는 큰고모나 작은고모 댁에서도 지냈다. 주소는 달라졌지만 내 자리는 같았다. 그곳에서도 나는 막내딸이 되었다.",
      "그 시절을 돌아보면 어머니가 그리웠던 마음이 떠오른다. 동시에 나를 위해 자리를 내어 준 사람들이 참 많았다는 것도 기억난다.",
    ],
    note:"이 이야기는 조성연 작가가 직접 기록한 가족의 기억만으로 구성했다. 확인되지 않은 집과 관계의 세부 사항은 덧붙이지 않았다.",
    nextTitle:"이야기 목록",
    nextHref:"/ko/stories/",
    nextLink:"이야기 목록으로 돌아가기",
  },
] as const;

export function KoreanStoryDetail({which}:{which:0|1}) {
  const t=koreanStories[which];
  return <main className="story-detail-page" lang="ko">
    <section className="container story-detail-hero" aria-labelledby="story-title">
      <Link href="/ko/stories/" className="story-detail-back">이야기</Link>
      <p className="story-detail-kicker">이야기 {which+1}</p>
      <h1 id="story-title">{t.title}</h1><p className="story-detail-deck">{t.lead}</p>
    </section>
    <section className="container story-detail-grid">
      <article className="story-detail-copy">
        {t.paragraphs.map((paragraph,i)=>which===0&&i===2?<blockquote key={i}>{paragraph}</blockquote>:<p key={i} className={i===0?"story-detail-opening":undefined}>{paragraph}</p>)}
      </article>
      <figure className="story-detail-figure">
        <Image src="/media/esther/childhood-garden.jpg" alt="어린 시절 정원에서 찍은 조성연의 기록 사진" width={1800} height={1350} sizes="(max-width: 899px) 100vw, 42vw"/>
        <figcaption>조성연 작가의 어린 시절 기록 사진 · 이야기 속 꿈이나 친척 집을 재현한 사진이 아닙니다.</figcaption>
      </figure>
    </section>
    <section className="story-detail-note"><div className="container story-detail-note-inner">
      <p className="story-detail-kicker">기록에 관한 메모</p><p>{t.note}</p>
    </div></section>
    <section className="container story-detail-next">
      <p className="story-detail-kicker">다음 이야기</p><h2>{t.nextTitle}</h2>
      <Link className="story-detail-link" href={t.nextHref}>{t.nextLink}</Link>
    </section>
  </main>;
}
