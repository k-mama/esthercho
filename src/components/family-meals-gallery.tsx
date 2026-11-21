"use client";
import { useRef, useState } from "react";
type Locale = "ko" | "en";
const featured = [15,25,38,50,2,30,27,6,57];
const photos = [...featured,...Array.from({length:57},(_,i)=>i+1).filter(i=>!featured.includes(i))];
const copy = {
 ko: {
  eyebrow:"두 번째 이야기 · 가족의 식탁",
  title:"삼시세끼, 미술랭 셰프처럼",
  sub:"시부모님을 모시던 시절의 식사 기록",
  line1:"약 6~7년 동안 시부모님을 모시고 살았다.",
  line2:"그동안 마치 내 직업이 미슐랭 3스타 레스토랑 셰프라도 되는 것처럼 매일 아침, 점심, 저녁을 차렸다.",
  line3:"그 시절의 밥상들이 사진으로 남아 있다.",
  label:"그때의 밥상 사진들",
  button:"사진 12장 더 보기",
  alt:"조성연 작가가 시부모님을 위해 준비한 식사 사진",
  note:"모두 실제 식사 사진입니다. 배열 순서는 촬영 날짜순이 아닙니다.",
  close:"사진 닫기"
 },
 en: {
  eyebrow:"STORY 02 · THE FAMILY TABLE",
  title:"Three Meals a Day", 
  sub:"Apparently, I ran a three-Michelin-star restaurant.",
  line1:"For about six or seven years, my parents-in-law lived with us.",
  line2:"Breakfast, lunch, and dinner. I prepared all three every day.",
  line3:"I still have the photographs of those meals.",
  label:"Photographs from those years",
  button:"View 12 more photographs",
  alt:"A meal Esther Cho prepared for her parents-in-law",
  note:"All photographs show real meals. The order is editorial, not chronological.",
  close:"Close photo"
 }
} as const;
const path=(n:number)=>"/media/esther/family-meals/meal-"+String(n).padStart(2,"0")+".webp";
export function FamilyMealsGallery({locale}:{locale:Locale}) {
 const t=copy[locale];
 const [count,setCount]=useState(9);
 const [selected,setSelected]=useState<number|null>(null);
 const dialog=useRef<HTMLDialogElement>(null);
 const open=(id:number)=>{setSelected(id);dialog.current?.showModal();};
 const close=()=>dialog.current?.close();
 const move=(step:number)=>setSelected(id=>id===null?null:photos[(photos.indexOf(id)+step+photos.length)%photos.length]);
 return <section id="story-two" className={locale==="ko"?"family-meals family-meals-ko":"family-meals"} aria-labelledby="family-meals-title">
  <div className="container family-meals-inner">
   <p className="family-meals-kicker">{t.eyebrow}</p>
   <p className="family-meals-number" aria-hidden="true">02</p>
   <h2 id="family-meals-title">{t.title}</h2>
   <p className="family-meals-subtitle">{t.sub}</p>
   <div className="family-meals-story"><p>{t.line1}</p><p>{t.line2}</p><p>{t.line3}</p></div>
   <div className="family-meals-archive-title"><p>{t.label}</p><span aria-live="polite">{count} / {photos.length}</span></div>
   <div className="family-meals-grid">
    {photos.slice(0,count).map((id,index)=><figure key={id} className="family-meals-photo">
      <button type="button" aria-label={t.alt+" "+(index+1)} onClick={()=>open(id)}>
       <img src={path(id)} loading="lazy" decoding="async" alt={t.alt+" "+(index+1)}/>
      </button>
     </figure>)}
   </div>
   {count<57?<div className="family-meals-more"><button type="button" onClick={()=>setCount(n=>Math.min(n+12,57))}>{t.button} ＋</button><p>{57-count} {locale==="ko"?"장 남음":"remaining"}</p></div>:<p className="family-meals-complete">{locale==="ko"?"57장을 모두 보고 있습니다.":"All 57 photographs are shown."}</p>}
   <p className="family-meals-note">{t.note}</p>
  </div>
  <dialog className="family-meals-dialog" ref={dialog} aria-label={t.alt} onClose={()=>setSelected(null)} onClick={e=>{if(e.currentTarget===e.target)close();}}>
   {selected!==null?<div className="family-meals-dialog-content">
    <button className="family-meals-dialog-close" aria-label={t.close} onClick={close} type="button">×</button>
    <img src={path(selected)} alt={t.alt}/>
    <div className="family-meals-dialog-controls">
     <button type="button" aria-label={locale==="ko"?"이전 사진":"Previous photo"} onClick={()=>move(-1)}>←</button>
     <span>{photos.indexOf(selected)+1} / 57</span>
     <button type="button" aria-label={locale==="ko"?"다음 사진":"Next photo"} onClick={()=>move(1)}>→</button>
    </div>
   </div>:null}
  </dialog>
 </section>;
}