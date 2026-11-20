import type { SiteLocale } from "@/config/languages";

/** Accessible, localized reading transcripts for the author's illustrated English pages.
 * These are webpage translations. The printed/KDP interior is not changed.
 */
export const illustratedAuthorCopy: Record<SiteLocale, {
 heading:string; intro:string; aboutLabel:string; noteLabel:string; open:string; close:string;
 zoom:string; fit:string; read:string; imageNotice:string; about:string[]; note:string[];
}> = {
  "en": {
    "heading": "Meet the picture-book author",
    "intro": "Two illustrated pages introduce Sung Yeon Cho and the wish behind Big Dreams in Every Color.",
    "aboutLabel": "About the Author",
    "noteLabel": "Author’s Note",
    "open": "Open full page",
    "close": "Close",
    "zoom": "View at original size",
    "fit": "Fit to screen",
    "read": "Read the text",
    "imageNotice": "The illustrations are portraits and book-world artwork, not documentary photographs.",
    "about": [
      "Sung Yeon Cho is a picture book author and illustrator who loves stories filled with warmth, wonder, and hope.",
      "Through her words and paintings, she invites children to dream boldly, notice beauty, and believe that even the smallest heart can hold a very big dream.",
      "Big Dreams in Every Color was inspired by the quiet imagination of childhood and the many children she has met and loved along the way.",
      "With love, Sung Yeon Cho"
    ],
    "note": [
      "This story began with a quiet wish: that children would never outgrow their sense of wonder.",
      "Big Dreams in Every Color was created for the little dreamers who look at clouds, fields, roads, and sunsets and imagine a thousand beautiful possibilities.",
      "If this book helps even one child feel brave enough to dream, and one grown-up pause long enough to listen, then it has already found its way home.",
      "With gratitude, Sung Yeon Cho"
    ]
  },
  "ko": {
    "heading": "그림책을 만든 사람",
    "intro": "『Big Dreams in Every Color』에 담긴 작가 소개와 작가의 말을 그림과 함께 읽어보세요.",
    "aboutLabel": "작가 소개",
    "noteLabel": "작가의 말",
    "open": "전체 페이지 보기",
    "close": "닫기",
    "zoom": "원본 크기로 보기",
    "fit": "화면에 맞추기",
    "read": "한국어로 읽기",
    "imageNotice": "작가 초상은 실제 사진이 아닌 일러스트이며, 그림책의 세계를 표현한 이미지입니다.",
    "about": [
      "조성연은 따뜻함과 경이로움, 희망이 담긴 이야기를 좋아하는 그림책 작가이자 일러스트레이터입니다.",
      "글과 그림으로 아이들이 마음껏 꿈꾸고, 아름다움을 발견하며, 작은 마음에도 커다란 꿈을 품을 수 있다는 것을 믿도록 초대합니다.",
      "『Big Dreams in Every Color』는 어린 시절의 조용한 상상력과, 작가가 살아오며 만나고 사랑한 많은 아이들에게서 영감을 받았습니다.",
      "사랑을 담아, 조성연"
    ],
    "note": [
      "이 이야기는 조용한 바람에서 시작되었습니다. 아이들이 자라서도 세상을 신기하게 바라보는 마음을 잃지 않기를 바라는 마음이었습니다.",
      "『Big Dreams in Every Color』는 구름과 들판, 길과 노을을 바라보며 그 안에서 수많은 아름다운 가능성을 떠올리는 작은 몽상가들을 위해 만든 책입니다.",
      "이 책을 덮은 아이 한 명이 조금 더 용감하게 꿈꾸고, 어른 한 명이 잠시 멈추어 아이의 이야기에 귀 기울인다면, 이 이야기는 이미 제 자리를 찾은 것입니다.",
      "감사한 마음을 담아, 조성연"
    ]
  },
  "de": {
    "heading": "Die Autorin des Bilderbuchs",
    "intro": "Zwei illustrierte Seiten stellen Sung Yeon Cho und den Gedanken hinter Big Dreams in Every Color vor.",
    "aboutLabel": "Über die Autorin",
    "noteLabel": "Worte der Autorin",
    "open": "Seite groß ansehen",
    "close": "Schließen",
    "zoom": "In Originalgröße",
    "fit": "An Bildschirm anpassen",
    "read": "Text auf Deutsch lesen",
    "imageNotice": "Das Autorenporträt ist eine Illustration, keine Fotografie.",
    "about": [
      "Sung Yeon Cho schreibt und illustriert Bilderbücher. Sie liebt Geschichten voller Wärme, Staunen und Hoffnung.",
      "Mit ihren Worten und Bildern möchte sie Kinder ermutigen, groß zu träumen, Schönes zu entdecken und daran zu glauben, dass selbst ein kleines Herz einen riesengroßen Traum tragen kann.",
      "Big Dreams in Every Color entstand aus der stillen Fantasie der Kindheit und den Begegnungen mit vielen Kindern, die sie im Laufe ihres Lebens kennen und lieben gelernt hat.",
      "Von Herzen, Sung Yeon Cho"
    ],
    "note": [
      "Am Anfang dieser Geschichte stand ein leiser Wunsch: Kinder sollen sich ihr Staunen bewahren, auch wenn sie größer werden.",
      "Big Dreams in Every Color ist für kleine Träumer gemacht, die Wolken, Wiesen, Straßen und Sonnenuntergänge betrachten und darin tausend schöne Möglichkeiten sehen.",
      "Wenn nach diesem Buch auch nur ein Kind mutiger träumt und ein Erwachsener einen Augenblick länger zuhört, dann ist die Geschichte dort angekommen, wo sie hingehört.",
      "In Dankbarkeit, Sung Yeon Cho"
    ]
  },
  "es": {
    "heading": "Conoce a la autora del cuento",
    "intro": "Dos páginas ilustradas presentan a Sung Yeon Cho y el deseo que dio origen a Big Dreams in Every Color.",
    "aboutLabel": "Sobre la autora",
    "noteLabel": "Nota de la autora",
    "open": "Ver página completa",
    "close": "Cerrar",
    "zoom": "Ver en tamaño original",
    "fit": "Ajustar a la pantalla",
    "read": "Leer en español",
    "imageNotice": "El retrato es una ilustración, no una fotografía de la autora.",
    "about": [
      "Sung Yeon Cho escribe e ilustra libros infantiles. Le encantan las historias llenas de ternura, asombro y esperanza.",
      "Con sus palabras e ilustraciones, invita a los niños a soñar en grande, descubrir la belleza y creer que incluso un corazón pequeñito puede albergar un sueño enorme.",
      "Big Dreams in Every Color nació de la imaginación serena de la infancia y de tantos niños que la autora ha conocido y querido a lo largo de su vida.",
      "Con cariño, Sung Yeon Cho"
    ],
    "note": [
      "Esta historia empezó con un deseo sencillo: que los niños nunca perdieran su capacidad de maravillarse.",
      "Big Dreams in Every Color está dedicado a quienes miran las nubes, los campos, los caminos y los atardeceres e imaginan mil posibilidades hermosas.",
      "Si al cerrar el libro un solo niño se anima a soñar y un adulto se detiene un momento más para escucharlo, la historia habrá llegado a donde tenía que llegar.",
      "Con gratitud, Sung Yeon Cho"
    ]
  },
  "fr": {
    "heading": "Rencontrer l’autrice de l’album",
    "intro": "Deux pages illustrées présentent Sung Yeon Cho et le souhait à l’origine de Big Dreams in Every Color.",
    "aboutLabel": "À propos de l’autrice",
    "noteLabel": "Un mot de l’autrice",
    "open": "Voir la page entière",
    "close": "Fermer",
    "zoom": "Taille d’origine",
    "fit": "Adapter à l’écran",
    "read": "Lire en français",
    "imageNotice": "Le portrait de l’autrice est une illustration, non une photographie.",
    "about": [
      "Sung Yeon Cho écrit et illustre des albums pour enfants. Elle aime les histoires où se mêlent tendresse, émerveillement et espoir.",
      "Par ses mots et ses images, elle invite les enfants à rêver grand, à remarquer la beauté autour d’eux et à croire que même un tout petit cœur peut abriter un immense rêve.",
      "Big Dreams in Every Color est né de l’imaginaire discret de l’enfance et des nombreux enfants qu’elle a rencontrés et aimés au fil des années.",
      "Avec affection, Sung Yeon Cho"
    ],
    "note": [
      "Cette histoire est née d’un souhait tout simple : que les enfants ne perdent jamais leur capacité à s’émerveiller en grandissant.",
      "Big Dreams in Every Color s’adresse aux petits rêveurs qui regardent les nuages, les champs, les chemins et les couchers de soleil en y voyant mille belles possibilités.",
      "Si un enfant referme ce livre avec un peu plus d’audace pour rêver, et si un adulte prend le temps de l’écouter, alors cette histoire aura trouvé sa place.",
      "Avec gratitude, Sung Yeon Cho"
    ]
  },
  "it": {
    "heading": "L’autrice dell’albo illustrato",
    "intro": "Due pagine illustrate raccontano chi è Sung Yeon Cho e il desiderio da cui è nato Big Dreams in Every Color.",
    "aboutLabel": "L’autrice",
    "noteLabel": "Nota dell’autrice",
    "open": "Apri la pagina intera",
    "close": "Chiudi",
    "zoom": "Dimensioni originali",
    "fit": "Adatta allo schermo",
    "read": "Leggi in italiano",
    "imageNotice": "Il ritratto dell’autrice è un’illustrazione, non una fotografia.",
    "about": [
      "Sung Yeon Cho scrive e illustra libri per bambini. Ama le storie piene di calore, meraviglia e speranza.",
      "Con le parole e i disegni invita i bambini a sognare in grande, a riconoscere la bellezza e a credere che anche un cuore piccolissimo possa custodire un sogno immenso.",
      "Big Dreams in Every Color nasce dall’immaginazione silenziosa dell’infanzia e dai tanti bambini che l’autrice ha incontrato e amato lungo il cammino.",
      "Con affetto, Sung Yeon Cho"
    ],
    "note": [
      "Questa storia è cominciata con un desiderio semplice: che i bambini, crescendo, non perdano mai la capacità di meravigliarsi.",
      "Big Dreams in Every Color è dedicato ai piccoli sognatori che osservano nuvole, prati, strade e tramonti e vi scorgono mille splendide possibilità.",
      "Se questo libro darà anche a un solo bambino il coraggio di sognare e a un adulto il desiderio di fermarsi ad ascoltare, avrà già trovato la sua strada verso casa.",
      "Con gratitudine, Sung Yeon Cho"
    ]
  },
  "ja": {
    "heading": "絵本をつくった人",
    "intro": "Sung Yeon Cho の紹介と『Big Dreams in Every Color』に込めた思いを、二枚のイラストでご覧いただけます。",
    "aboutLabel": "作家紹介",
    "noteLabel": "作者からのことば",
    "open": "ページ全体を見る",
    "close": "閉じる",
    "zoom": "元の大きさで見る",
    "fit": "画面に合わせる",
    "read": "日本語で読む",
    "imageNotice": "作者の肖像は写真ではなく、イラストです。",
    "about": [
      "Sung Yeon Cho は絵本作家であり、イラストレーターです。あたたかさや驚き、希望のある物語を好んで描いています。",
      "言葉と絵を通して、子どもたちが自由に夢を見て、身近な美しさに気づき、小さな胸にも大きな夢を抱けると信じてほしいと願っています。",
      "『Big Dreams in Every Color』には、子どもの頃の静かな空想と、これまで出会い、心を寄せてきた多くの子どもたちの姿が重なっています。",
      "愛をこめて、Sung Yeon Cho"
    ],
    "note": [
      "この物語は、小さな願いから始まりました。大人になっても、子どもたちが「すごいな」と感じる心をなくさないでいてほしい。",
      "『Big Dreams in Every Color』は、雲や野原、道や夕焼けを見て、そこにいくつもの素敵な可能性を思い描く子どもたちのための絵本です。",
      "この本を閉じた子が一人でも前より少し勇気を出して夢を語り、大人がその声にもう少し耳を傾けてくれたなら、物語はそれだけで帰る場所を見つけたのだと思います。",
      "感謝をこめて、Sung Yeon Cho"
    ]
  },
  "pt-br": {
    "heading": "Conheça a autora do livro ilustrado",
    "intro": "Duas páginas ilustradas apresentam Sung Yeon Cho e o desejo que deu origem a Big Dreams in Every Color.",
    "aboutLabel": "Sobre a autora",
    "noteLabel": "Uma palavra da autora",
    "open": "Abrir página inteira",
    "close": "Fechar",
    "zoom": "Ver tamanho original",
    "fit": "Ajustar à tela",
    "read": "Ler em português",
    "imageNotice": "O retrato da autora é uma ilustração, não uma fotografia.",
    "about": [
      "Sung Yeon Cho escreve e ilustra livros infantis. Gosta de histórias cheias de carinho, encanto e esperança.",
      "Com suas palavras e desenhos, convida as crianças a sonhar alto, perceber a beleza ao redor e acreditar que até o menor coração pode guardar um sonho enorme.",
      "Big Dreams in Every Color nasceu da imaginação tranquila da infância e das muitas crianças que ela conheceu e amou ao longo da vida.",
      "Com carinho, Sung Yeon Cho"
    ],
    "note": [
      "Esta história começou com um desejo simples: que as crianças nunca deixassem de se encantar com o mundo ao crescer.",
      "Big Dreams in Every Color é para os pequenos sonhadores que olham nuvens, campos, estradas e o pôr do sol e enxergam mil possibilidades bonitas.",
      "Se este livro der coragem a uma única criança para sonhar e fizer um adulto parar um pouquinho para ouvi-la, a história já terá encontrado seu lugar.",
      "Com gratidão, Sung Yeon Cho"
    ]
  },
  "zh-cn": {
    "heading": "认识这本绘本的作者",
    "intro": "两张插画介绍 Sung Yeon Cho，以及《Big Dreams in Every Color》背后的小小心愿。",
    "aboutLabel": "关于作者",
    "noteLabel": "作者的话",
    "open": "查看完整页面",
    "close": "关闭",
    "zoom": "查看原始大小",
    "fit": "适应屏幕",
    "read": "阅读简体中文",
    "imageNotice": "作者肖像是插画，并非真实照片。",
    "about": [
      "Sung Yeon Cho 是一位绘本作者和插画家，喜欢温暖、充满惊喜和希望的故事。",
      "她希望通过文字和画作，邀请孩子大胆做梦，留意身边的美，并相信再小的心也能装下一个大大的梦想。",
      "《Big Dreams in Every Color》的灵感来自童年安静的想象，也来自她一路上遇见、关爱过的许多孩子。",
      "带着爱，Sung Yeon Cho"
    ],
    "note": [
      "这个故事起于一个小小的愿望：愿孩子长大后，依然保有对世界的好奇与惊叹。",
      "《Big Dreams in Every Color》写给那些望着云朵、原野、道路和晚霞，就能想象出无数美好可能的小小梦想家。",
      "如果有一个孩子读完后更敢于说出自己的梦想，也有一个大人愿意停下脚步多听一会儿，这个故事就已经找到了归处。",
      "心怀感激，Sung Yeon Cho"
    ]
  },
  "zh-tw": {
    "heading": "認識這本繪本的作者",
    "intro": "兩張插畫介紹 Sung Yeon Cho，以及《Big Dreams in Every Color》背後那個小小的心願。",
    "aboutLabel": "關於作者",
    "noteLabel": "作者的話",
    "open": "觀看完整頁面",
    "close": "關閉",
    "zoom": "查看原始大小",
    "fit": "符合螢幕大小",
    "read": "閱讀繁體中文",
    "imageNotice": "作者肖像是插畫，並非真實照片。",
    "about": [
      "Sung Yeon Cho 是繪本作家與插畫家，喜歡溫暖、充滿驚喜與希望的故事。",
      "她希望透過文字與畫作，邀請孩子勇敢做夢，留意身邊的美好，並相信再小的心也能裝得下大大的夢。",
      "《Big Dreams in Every Color》的靈感來自童年安靜的想像，也來自她一路上遇見、關愛過的許多孩子。",
      "帶著愛，Sung Yeon Cho"
    ],
    "note": [
      "這個故事始於一個小小的願望：願孩子長大後，依然保有對世界的好奇與驚嘆。",
      "《Big Dreams in Every Color》獻給那些望著雲朵、原野、道路與晚霞，就能想像出無數美好可能的小小夢想家。",
      "如果有一個孩子讀完後更敢於說出自己的夢想，也有一個大人願意停下腳步多聽一會兒，這個故事就已經找到了歸處。",
      "滿懷感謝，Sung Yeon Cho"
    ]
  }
};
