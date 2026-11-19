import type { SiteLocale } from "@/config/languages";

type HomeMemory = {
  heroPlace: string;
  heroLine: string;
  eyebrow: string;
  heading: string;
  paragraphs: readonly [string, string, string, string];
  captions: readonly [string, string, string, string];
  alts: readonly [string, string, string, string];
};

/** From the author's supplied family history and four original photographs.
 * The later photos of the house and the childhood family photograph remain
 * separate archival sources: no invented date, identity, or reconstruction.
 */
export const childhoodHomeMemory: Record<SiteLocale, HomeMemory> = {
  en: {
    heroPlace: "CHEONGDAM-DONG · SEOUL",
    heroLine: "The house where our family was happiest.",
    eyebrow: "A REAL HOME · CHEONGDAM-DONG, GANGNAM, SEOUL",
    heading: "Four photographs, one place to return to.",
    paragraphs: [
      "Cheongdam-dong, in Seoul’s Gangnam district. I lived in this house from childhood through my teenage years.",
      "Ask my mother, my younger siblings, or me when we were happiest, and we give the same answer: when we lived here. Years have passed, and we’ve each lived a different life. Still, our answer about this house hasn’t changed.",
      "The gate beneath its red tiles. The brick path leading inside. The trees in the yard. The later photographs take us through the house; the last one takes us back to two children with a tricycle and a little red toy car.",
      "That’s why I chose this house for the opening film of my website. I wanted visitors to see first the place our whole family remembers as home at its happiest."
    ],
    captions: [
      "01 · The house seen from the street",
      "02 · Through the open gate",
      "03 · The garden and the house",
      "04 · A photograph from our childhood at home"
    ],
    alts: [
      "Wide view from the street of Esther Cho's actual childhood home in Cheongdam-dong, with a red-tiled brick gateway, boundary wall and trees",
      "Open black gates between brick pillars, looking along the brick driveway into Esther Cho's family home",
      "Garden, mature trees and the exterior of Esther Cho's childhood house, with its large ground-floor windows",
      "Old family photograph of two young children with a tricycle and a small red toy car in front of the house"
    ]
  },
  ko: {
    heroPlace: "서울 · 청담동",
    heroLine: "우리 가족이 가장 행복했던 집.",
    eyebrow: "실제로 살았던 집 · 서울 강남구 청담동",
    heading: "그 집으로 돌아가는 사진 네 장.",
    paragraphs: [
      "서울 강남구 청담동. 내가 어린 시절부터 청소년기까지 살았던 집이다.",
      "엄마도, 나도, 동생들도 이 집에서 살던 때가 가장 행복했다고 말한다. 그 후로 우리는 저마다 다른 시간을 살아왔는데, 참 신기하게도 이 집에 대해서는 같은 말을 한다.",
      "붉은 기와를 얹은 대문, 안으로 이어지는 벽돌길, 마당의 나무들. 세월이 흘러 다시 찍은 집 사진을 따라가다 보면 마지막에는 세발자전거와 작은 빨간 장난감 자동차 곁에 있는 두 아이의 오래된 사진이 나온다.",
      "그래서 홈페이지 첫 화면의 영상에 이 집을 골랐다. 처음 찾아오는 사람에게, 우리 가족 모두가 가장 행복했다고 기억하는 곳을 먼저 보여주고 싶었다."
    ],
    captions: [
      "01 · 길에서 바라본 집과 대문",
      "02 · 열려 있는 대문과 그 안으로 이어지는 길",
      "03 · 정원과 우리가 살던 집",
      "04 · 그 집에서 찍은 어린 시절의 사진"
    ],
    alts: [
      "서울 청담동에 있는 조성연 작가의 실제 어린 시절 집 전경. 붉은 기와지붕의 벽돌 대문과 담장, 나무가 보인다",
      "벽돌 기둥 사이로 검은 철제 대문이 열려 있고 벽돌을 깐 진입로가 집 안으로 이어진다",
      "소나무와 나무들이 있는 마당, 큰 창문이 달린 조성연 작가 가족의 옛집 외관",
      "옛집 앞에서 두 어린아이가 세발자전거와 작은 빨간 장난감 자동차와 함께 찍힌 오래된 가족사진"
    ]
  },
  de: {
    heroPlace: "CHEONGDAM-DONG · SEOUL",
    heroLine: "Das Haus, in dem wir als Familie am glücklichsten waren.",
    eyebrow: "UNSER ECHTES FAMILIENHAUS · CHEONGDAM-DONG, GANGNAM, SEOUL",
    heading: "Das Haus unserer glücklichsten Jahre.",
    paragraphs: [
      "Dieses Haus steht in Cheongdam-dong, einem Viertel im Seouler Bezirk Gangnam. Hier habe ich meine Kindheit und einen Teil meiner Jugend verbracht.",
      "Meine Mutter, meine jüngeren Geschwister und ich sind uns in einem Punkt einig: Die Jahre in diesem Haus waren unsere glücklichsten. Seitdem haben wir unterschiedliche Wege genommen. Aber wenn es um dieses Haus geht, geben wir alle dieselbe Antwort.",
      "Die Fotos zeigen das Haus von der Straße aus, das offene Tor, den Garten und einen Augenblick aus unserer Kindheit. Auch der Begrüßungsfilm dieser Website beginnt hier. Bevor all die späteren Geschichten kamen, war da dieses Zuhause."
    ],
    captions: [
      "01 · Das Haus von der Straße aus",
      "02 · Das offene Eingangstor",
      "03 · Der Garten und das Wohnhaus",
      "04 · Ein Foto aus unserer Kindheit"
    ],
    alts: [
      "Straßenansicht von Esther Chos tatsächlichem Elternhaus in Cheongdam-dong mit rotem Ziegeldach über dem Backsteintor und hohen Bäumen",
      "Geöffnetes schwarzes Metalltor zwischen zwei Backsteinpfeilern mit Blick auf die gepflasterte Zufahrt",
      "Garten mit großen Bäumen vor Esther Chos früherem Elternhaus und seinen großen Fenstern",
      "Altes Familienfoto von zwei kleinen Kindern mit Dreirad und rotem Spielzeugauto vor dem Wohnhaus"
    ]
  },
  es: {
    heroPlace: "CHEONGDAM-DONG · SEÚL",
    heroLine: "La casa donde más felices fuimos en familia.",
    eyebrow: "UNA CASA REAL · CHEONGDAM-DONG, GANGNAM, SEÚL",
    heading: "La casa de nuestros años más felices.",
    paragraphs: [
      "Esta casa está en Cheongdam-dong, en el distrito de Gangnam de Seúl. Viví aquí desde pequeña hasta la adolescencia.",
      "Mi madre, mis hermanos menores y yo coincidimos en algo: los años que pasamos en esta casa fueron los más felices. Después cada uno siguió su camino, pero cuando hablamos de esta casa, la respuesta es la misma.",
      "Las fotos muestran la casa desde la calle, la entrada, el jardín y un instante de nuestra infancia. El video que da la bienvenida a esta página también comienza aquí. Antes de todas las historias que vinieron después, estuvo este hogar."
    ],
    captions: [
      "01 · La casa vista desde la calle",
      "02 · La entrada con las puertas abiertas",
      "03 · El jardín y la casa",
      "04 · Una foto de nuestra infancia en casa"
    ],
    alts: [
      "Vista desde la calle de la casa real donde creció Esther Cho en Cheongdam-dong, con portón de ladrillo y techo de tejas rojas",
      "Portones negros abiertos entre pilares de ladrillo y camino pavimentado hacia la casa",
      "Jardín con árboles grandes frente a la casa de la infancia de Esther Cho",
      "Antigua fotografía familiar de dos niños pequeños con un triciclo y un auto rojo de juguete frente a la casa"
    ]
  },
  fr: {
    heroPlace: "CHEONGDAM-DONG · SÉOUL",
    heroLine: "La maison de nos années les plus heureuses.",
    eyebrow: "LA VRAIE MAISON FAMILIALE · CHEONGDAM-DONG, GANGNAM, SÉOUL",
    heading: "La maison de nos années les plus heureuses.",
    paragraphs: [
      "Cette maison se trouve à Cheongdam-dong, dans l'arrondissement de Gangnam, à Séoul. J'y ai vécu de l'enfance jusqu'à l'adolescence.",
      "Ma mère, mes frères et sœurs cadets et moi disons tous la même chose : c'est dans cette maison que nous avons été le plus heureux. Depuis, nos vies ont suivi des chemins différents. Pourtant, lorsqu'on évoque cette maison, nous sommes toujours d'accord.",
      "Les photos montrent la maison depuis la rue, le portail ouvert, le jardin et un moment de notre enfance. Le film d'accueil de ce site commence lui aussi ici. Avant toutes les histoires qui ont suivi, il y avait cette maison."
    ],
    captions: [
      "01 · La maison vue depuis la rue",
      "02 · Le portail ouvert",
      "03 · Le jardin et la maison",
      "04 · Une photo de notre enfance"
    ],
    alts: [
      "Vue sur la maison où Esther Cho a grandi à Cheongdam-dong, avec portail en brique, toit de tuiles rouges et grands arbres",
      "Portail métallique noir ouvert entre des piliers de brique, donnant sur une allée pavée",
      "Jardin arboré et façade de la maison d'enfance d'Esther Cho",
      "Ancienne photographie de famille montrant deux jeunes enfants avec un tricycle et une petite voiture rouge devant la maison"
    ]
  },
  it: {
    heroPlace: "CHEONGDAM-DONG · SEUL",
    heroLine: "La casa in cui siamo stati più felici, tutti insieme.",
    eyebrow: "LA NOSTRA VERA CASA · CHEONGDAM-DONG, GANGNAM, SEUL",
    heading: "La casa dei nostri anni più felici.",
    paragraphs: [
      "Questa casa si trova a Cheongdam-dong, nel quartiere di Gangnam, a Seul. Ci ho vissuto dall'infanzia fino agli anni dell'adolescenza.",
      "Mia madre, i miei fratelli più piccoli e io diciamo tutti la stessa cosa: gli anni trascorsi qui sono stati i più felici. Poi ognuno ha preso la propria strada. Ma quando parliamo di questa casa, il ricordo ci trova ancora d'accordo.",
      "Nelle fotografie si vedono la casa dalla strada, il cancello aperto, il giardino e un momento della nostra infanzia. Anche il video di benvenuto di questo sito comincia da qui. Prima di tutte le storie venute dopo, c'era questa casa."
    ],
    captions: [
      "01 · La casa vista dalla strada",
      "02 · Il cancello aperto",
      "03 · Il giardino e la casa",
      "04 · Una fotografia della nostra infanzia"
    ],
    alts: [
      "La casa reale dell'infanzia di Esther Cho a Cheongdam-dong, vista dalla strada, con ingresso in mattoni e tetto di tegole rosse",
      "Cancelli neri aperti tra pilastri in mattoni e vialetto pavimentato che conduce alla casa",
      "Giardino con alberi e la facciata della casa in cui Esther Cho è cresciuta",
      "Vecchia fotografia di famiglia con due bambini, un triciclo e una piccola automobile rossa davanti a casa"
    ]
  },
  ja: {
    heroPlace: "ソウル・清潭洞",
    heroLine: "家族みんなが、いちばん幸せだった家。",
    eyebrow: "実際に暮らした家 · ソウル・江南区 清潭洞",
    heading: "家族みんなが、いちばん幸せだった家。",
    paragraphs: [
      "ソウルの江南区、清潭洞（チョンダムドン）。ここは、私が子どもの頃から十代まで暮らした家です。",
      "母も、私も、きょうだいたちも、この家で過ごした頃がいちばん幸せだったと言います。その後はそれぞれ違う年月を重ねてきたのに、この家のことになると、不思議なくらい答えが同じです。",
      "道から見た家、開いた門、庭と建物、そして幼い頃の写真。このホームページの最初の映像も、この家から始まります。どこから自分の話を始めようかと考えると、やっぱりこの門の前に戻ってくるのです。"
    ],
    captions: [
      "01 · 道から見た家と門",
      "02 · 開いた門とその奥へ続く道",
      "03 · 庭と、家族で暮らした家",
      "04 · この家で過ごした子ども時代の写真"
    ],
    alts: [
      "ソウル清潭洞にあるエスター・チョーの幼少期の家。赤い瓦屋根のレンガ造りの門と木々が見える道路側の全景",
      "レンガの柱の間にある黒い門が開き、レンガ敷きの道が家へ続いている",
      "庭の木々と大きな窓のある、エスター・チョーが育った家",
      "家の前で三輪車と赤い小さなおもちゃの車と一緒に写る二人の子どもの古い家族写真"
    ]
  },
  "pt-br": {
    heroPlace: "CHEONGDAM-DONG · SEUL",
    heroLine: "A casa onde nossa família foi mais feliz.",
    eyebrow: "A CASA DE VERDADE · CHEONGDAM-DONG, GANGNAM, SEUL",
    heading: "A casa dos nossos anos mais felizes.",
    paragraphs: [
      "Essa casa fica em Cheongdam-dong, no bairro de Gangnam, em Seul. Morei aqui desde pequena até a adolescência.",
      "Minha mãe, meus irmãos mais novos e eu sempre dizemos a mesma coisa: os anos que passamos nessa casa foram os mais felizes. Depois, cada um seguiu seu caminho. Mas, quando o assunto é essa casa, a resposta continua sendo igual.",
      "As fotos mostram a casa vista da rua, o portão aberto, o jardim e um pedacinho da nossa infância. O vídeo de abertura deste site também começa aqui. Antes de todas as histórias que vieram depois, havia esse lar."
    ],
    captions: [
      "01 · A casa vista da rua",
      "02 · O portão aberto",
      "03 · O jardim e a casa",
      "04 · Uma foto da nossa infância"
    ],
    alts: [
      "Vista da rua da casa em Cheongdam-dong onde Esther Cho cresceu, com portão de tijolos, telhado de telhas vermelhas e árvores",
      "Portões pretos abertos entre colunas de tijolos e caminho de entrada até a casa",
      "Jardim arborizado e fachada da casa de infância de Esther Cho",
      "Antiga fotografia de família com duas crianças, um triciclo e um pequeno carro vermelho de brinquedo em frente à casa"
    ]
  }
};
