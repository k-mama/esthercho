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
    heading: "Vier Fotos führen zurück zu diesem Haus.",
    paragraphs: [
      "Cheongdam-dong, im Seouler Bezirk Gangnam. In diesem Haus habe ich meine Kindheit und meine Jugend verbracht.",
      "Fragt man meine Mutter, meine jüngeren Geschwister oder mich nach unserer glücklichsten Zeit, fällt immer derselbe Ort: dieses Haus. Seitdem hat jeder von uns sein eigenes Leben geführt. Doch in diesem Punkt sind wir uns noch immer einig.",
      "Das Tor mit den roten Dachziegeln. Der gepflasterte Weg. Die Bäume im Garten. Auf den später entstandenen Aufnahmen führt der Weg zurück zum Haus. Das letzte Bild stammt aus unserer Kindheit: zwei Kinder, ein Dreirad und ein kleines rotes Spielzeugauto.",
      "Deshalb habe ich dieses Haus für den Eröffnungsfilm meiner Website gewählt. Ich wollte zuerst den Ort zeigen, an den unsere Familie ihre glücklichsten Jahre knüpft."
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
    heading: "Cuatro fotos para volver a aquella casa.",
    paragraphs: [
      "Cheongdam-dong, en el distrito de Gangnam de Seúl. Viví en esta casa desde niña hasta la adolescencia.",
      "Si le preguntan a mi madre, a mis hermanos menores o a mí cuándo fuimos más felices, todos pensamos en la misma casa. Después cada uno siguió su camino, pero en eso seguimos estando de acuerdo.",
      "El portón con su tejado de tejas rojas. El camino de ladrillo. Los árboles del jardín. Las fotos tomadas años después nos llevan hacia el interior. La última es de nuestra infancia: dos niños, un triciclo y un pequeño auto rojo de juguete.",
      "Por eso elegí esta casa para el video de bienvenida de mi página. Quería que quienes llegan por primera vez vieran el lugar donde toda mi familia recuerda haber sido más feliz."
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
    heading: "Quatre photos pour retrouver cette maison.",
    paragraphs: [
      "Cheongdam-dong, dans l’arrondissement de Gangnam, à Séoul. J’ai vécu dans cette maison de l’enfance à l’adolescence.",
      "Si l’on demande à ma mère, à mes frères et sœurs cadets ou à moi quand nous avons été le plus heureux, nous pensons tous à cette maison. Nos vies ont suivi des chemins différents depuis, mais sur ce point, notre réponse n’a pas changé.",
      "Le portail coiffé de tuiles rouges. L’allée de briques. Les arbres du jardin. Les photos prises bien des années plus tard nous ramènent vers la maison. La dernière remonte à notre enfance : deux enfants, un tricycle et une petite voiture rouge.",
      "C’est pour cela que j’ai choisi cette maison pour le film d’accueil de mon site. Je voulais montrer d’abord le lieu où chacun de nous situe ses années les plus heureuses."
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
    heading: "Quattro fotografie per tornare a quella casa.",
    paragraphs: [
      "Cheongdam-dong, nel quartiere di Gangnam, a Seul. In questa casa ho vissuto dall’infanzia fino all’adolescenza.",
      "Se chiedete a mia madre, ai miei fratelli più piccoli o a me quando siamo stati più felici, tutti pensiamo alla stessa casa. Da allora ognuno ha seguito la propria strada, ma su questo siamo ancora d’accordo.",
      "Il cancello con le tegole rosse. Il vialetto di mattoni. Gli alberi del giardino. Le foto scattate molti anni dopo ci accompagnano fin dentro il cortile. L’ultima viene dalla nostra infanzia: due bambini, un triciclo e una macchinina rossa.",
      "Ecco perché ho scelto questa casa per il video d’apertura del sito. Volevo che chi arriva qui vedesse per prima cosa il luogo che tutti noi ricordiamo come quello degli anni più felici."
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
    heading: "四枚の写真をたどると、あの家に着きます。",
    paragraphs: [
      "ソウル・江南区の清潭洞（チョンダムドン）。子どもの頃から十代まで、私はこの家で暮らしました。",
      "母も、私も、きょうだいたちも、いちばん幸せだったのはこの家で過ごした頃だと言います。それからそれぞれ違う人生を歩んできたのに、この家のことでは今も答えが同じです。",
      "赤い瓦屋根の門、奥へ続くレンガの道、庭の木々。大人になってから撮った家の写真を順にたどると、最後は幼い頃の一枚に着きます。三輪車と小さな赤いおもちゃの車のそばに、二人の子どもがいます。",
      "だから、このホームページの最初の映像にこの家を選びました。私たち家族みんながいちばん幸せだったと話す場所を、最初に見てもらいたかったのです。"
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
    heading: "Quatro fotos para voltar àquela casa.",
    paragraphs: [
      "Cheongdam-dong, no distrito de Gangnam, em Seul. Morei nessa casa desde pequena até a adolescência.",
      "Se perguntarem à minha mãe, aos meus irmãos mais novos ou a mim quando fomos mais felizes, todos vamos lembrar da mesma casa. De lá para cá, cada um seguiu sua vida, mas, quando falamos desse lugar, a resposta não muda.",
      "O portão de telhas vermelhas. O caminho de tijolos. As árvores do jardim. As fotos tiradas anos depois nos levam para dentro da casa. A última é da nossa infância: duas crianças, um triciclo e um carrinho vermelho.",
      "Foi por isso que escolhi essa casa para o vídeo de abertura do site. Queria mostrar primeiro o lugar que toda a nossa família guarda como o cenário dos anos mais felizes."
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
