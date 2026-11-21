// Editorial archive for Esther Cho's real-life stories.
// Korean originals are lightly edited from supplied memoir files; English is an adaptation,
// not a literal transcript. Sources are retained for editorial audit, not rendered publicly.
export type StoryLocale = "en" | "ko";
export type StoryVersion = {
  title: string;
  deck: string;
  paragraphs: string[];
  quote?: string;
};
export type RecordedStory = {
  number: string;
  slug: string;
  theme: { ko: string; en: string };
  source: string[];
  ko: StoryVersion;
  en: StoryVersion;
};

export const recordedStories: RecordedStory[] = [
  {
    number: "01", slug: "my-father-dreamed-of-a-tiger",
    theme: { ko: "아버지 · 시작", en: "Father · Beginning" },
    source: ["내가 좋아하는 것들과 내가 사랑하는 삶 §1", "조성연 작가의 어린 시절과 기억 §1"],
    ko: {
      title: "아버지는 호랑이 꿈을 꾸었다",
      deck: "호랑이가 아니라 고양이였나 봐.",
      paragraphs: [
        "내가 태어나기 전, 아버지는 꿈에서 호랑이를 보셨다고 한다. 호랑이 태몽이니 아들이 태어날 거라 생각하시고 무척 좋아하셨다.",
        "그런데 태어나고 보니 딸이었다.",
        "아버지는 우스갯소리로 말씀하셨다. “내가 잘못 봤나 보다. 호랑이가 아니라 고양이였나 봐.”",
        "아버지는 농담을 잘하는 분이었다. 나는 아버지의 첫 아이였고 집안의 첫 손녀였다. 그 뒤로 남동생 둘이 연년생으로 태어났다.",
        "나는 그 집의 첫 손녀로 많은 사랑을 받았다. 아버지의 호랑이 꿈은 그렇게 고양이 농담으로 끝났다."
      ],
      quote: "“내가 잘못 봤나 보다. 호랑이가 아니라 고양이였나 봐.”"
    },
    en: {
      title: "My Father Dreamed of a Tiger",
      deck: "He thought the dream meant a son. Then I was born.",
      paragraphs: [
        "Before I was born, my father dreamed of a tiger. He took it as a sign that he would have a son and was delighted.",
        "Then I arrived. A daughter.",
        "He laughed about it. “I must have seen it wrong. Maybe it was a cat, not a tiger.”",
        "My father was good at making jokes. I was his first child and the first granddaughter in the family. Two younger brothers followed, one year apart.",
        "I was loved by many people in those early years. And my father's tiger became a cat."
      ],
      quote: "“Maybe it was a cat, not a tiger.”"
    }
  },
  {
    number: "03", slug: "the-youngest-daughter-in-every-house",
    theme: { ko: "가족 · 어린 시절", en: "Family · Childhood" },
    source: ["내가 좋아하는 것들과 내가 사랑하는 삶 §1", "조성연 작가의 어린 시절과 기억 §§2–4"],
    ko: {
      title: "가는 집마다 막내딸",
      deck: "우리 집에서는 맏이였지만, 다른 집에 가면 막내딸이 되었다.",
      paragraphs: [
        "우리 집에서는 내가 맏이였다. 아래로 남동생 둘이 연년생으로 태어났다. 엄마에게는 아직 어린아이 셋이 있었고, 외할머니와 외할아버지는 일찍 돌아가셨다.",
        "집안일을 도와주는 언니들이 몇 명 있었지만, 엄마에게는 늘 손이 모자랐을 것이다. 나는 남동생들보다 조용하고 얌전해서 며칠씩 다른 집에 맡겨두기에도 수월한 아이였던 것 같다.",
        "엄마의 작은아버지와 작은어머니 댁에 자주 갔다. 한옥 대문을 열면 네모난 마당과 화단이 있었다. 별채가 두 개나 있는 큰 집이었다. 그 집에서 작은할머니의 외동딸처럼 사랑받았다.",
        "한밤중 모두 잠든 방에서 시계 소리가 들렸다. 찰칵, 찰칵, 찰칵. 작은할머니의 화장대에 놓인 화장품을 구경하고, 할머니가 화장하시면 옆에서 따라 발랐던 기억도 난다.",
        "밤에 엄마가 보고 싶어 울 때도 있었다. 그래도 며칠씩 거뜬히 지냈다.",
        "엄마가 더 바쁘실 때면 큰이모 집이나 작은이모 집에서도 지냈다. 언니들과 오빠들이 학교에서 돌아오기를 골목에 나가 기다렸고, 구멍가게에서 맛있는 것도 사 먹었다.",
        "나는 가는 집마다 막내딸처럼 사랑받았다."
      ],
      quote: "가는 집마다 또 하나의 가족이 생겼다."
    },
    en: {
      title: "The Youngest Daughter in Every House",
      deck: "I was the oldest at home. Everywhere else, I somehow became the youngest.",
      paragraphs: [
        "At home, I was the oldest child. Two brothers came along, one year apart. My mother had three little children, and her own parents had died early.",
        "There were young women helping with the housework, but I imagine my mother still had more than enough to do. I was quieter than my brothers and probably an easy child to send to relatives for a few days.",
        "I often stayed with my mother's uncle and aunt. Their house was a large traditional Korean home. Through the gate was a square courtyard with a flower bed, and there were two separate buildings in the yard. They treated me like a daughter of their own.",
        "At night, after everyone had gone to sleep, I could hear a clock. Click. Click. Click. I also remember the dressing table. I watched my great-aunt put on makeup and tried some myself.",
        "There were nights when I cried because I missed my mother. Still, I could stay for several days.",
        "When my mother needed more help, I stayed with my aunts. I waited in the lane for the older cousins to come home from school and went to the little shop at the end of the street for something good to eat.",
        "In every house, I was loved like the youngest daughter."
      ],
      quote: "In each house, I became the youngest daughter."
    }
  },
  {
    number: "04", slug: "back-to-the-yard-in-clean-pajamas",
    theme: { ko: "집 · 초여름", en: "Home · Early Summer" },
    source: ["내가 좋아하는 것들과 내가 사랑하는 삶 §2", "조성연 작가의 어린 시절과 기억 §§6–8"],
    ko: {
      title: "깨끗한 잠옷을 입고 다시 마당으로",
      deck: "그날 저녁 잔디 냄새는 아직도 기억난다.",
      paragraphs: [
        "내가 네 살이나 다섯 살쯤 되었을 때 우리 가족은 청담동의 큰 양옥집으로 이사했다. 집에는 넓은 거실과 다이닝룸, 각자의 방이 있었고 마당에는 잔디밭이 있었다.",
        "초여름 저녁, 밥 먹을 시간이 되면 집에서 일하던 언니들이 우리 삼 남매를 씻겨주었다. 목욕을 하고 깨끗한 잠옷까지 입었다.",
        "그런데 나와 남동생들은 다시 마당으로 뛰어나갔다. 힘들게 씻겨놓은 언니들은 질색했을 것이다.",
        "아직 한여름처럼 끈적이지 않는 공기였다. 잔디와 흙에서 올라오는 냄새, 해가 넘어가기 전의 조용함. 방금 목욕한 우리 몸에서도 좋은 냄새가 났다.",
        "우리는 깨끗한 잠옷 차림으로 잔디밭에서 조금 더 놀았다. 어른들이 밥 먹으라고 부르면 그제야 들어왔다.",
        "저녁을 먹고 만화를 조금 보다가 일찍 잠들었다. 그런데 그때 맡은 초여름의 잔디 냄새는 지금도 잊히지 않는다."
      ]
    },
    en: {
      title: "Back to the Yard in Clean Pajamas",
      deck: "Someone had just bathed all three of us. We went straight back outside.",
      paragraphs: [
        "When I was about four or five, our family moved into a large house in Cheongdam-dong. It had separate bedrooms, a big dining room, and a lawn.",
        "In early summer, as dinnertime approached, the young women who worked in our home would wash the three of us and put us into clean pajamas.",
        "My brothers and I promptly ran back out into the yard. I can only imagine what the women who had just bathed us thought of that.",
        "The air was not yet sticky with summer heat. I remember the smell of grass and earth, the quiet just before sunset, and the clean smell of our own freshly washed skin.",
        "We played a little longer in our pajamas. When the adults called us in for dinner, we finally went inside.",
        "After dinner, a few cartoons, then bed. I still remember the smell of the grass in the early evening."
      ]
    }
  },
  {
    number: "05", slug: "yesterday-at-the-chosun-hotel",
    theme: { ko: "가족 · 외식", en: "Family · A Favorite Restaurant" },
    source: ["내가 좋아하는 것들과 내가 사랑하는 삶 §4", "조성연 작가의 어린 시절과 기억 §§11–12"],
    ko: {
      title: "조선호텔의 예스터데이",
      deck: "그곳의 스트로베리 쇼트케이크를 아직도 기억한다.",
      paragraphs: [
        "어린이날이면 우리 가족은 극장에 가서 만화영화를 봤다. 영화가 끝나면 장난감 가게에 들렀다. 아버지는 우리에게 장난감을 정말 한아름 사주셨다.",
        "그다음에는 가족이 좋아하던 식당으로 갔다. 조선호텔에 있던 ‘예스터데이’였다.",
        "나는 그곳에서 먹었던 독일식 소시지와 독일식 김치를 기억한다. 밀크셰이크도 먹었다. 그리고 식사가 끝날 무렵이면 엄마와 아빠가 꼭 스트로베리 쇼트케이크를 주문하셨다.",
        "그 케이크가 아직도 생각난다.",
        "그 식당이 없어진 것이 지금도 아쉽다. 그 소시지와 케이크를 생각하면 함께 앉아 있던 엄마와 아빠, 동생들도 떠오른다."
      ]
    },
    en: {
      title: "Yesterday at the Chosun Hotel",
      deck: "I still remember the strawberry shortcake.",
      paragraphs: [
        "On Children's Day, our family went to the movies. There was always a cartoon feature to see, and afterward my father took us to a toy store. He bought us armfuls of toys.",
        "Then we went to our favorite restaurant, Yesterday, at the Chosun Hotel in Seoul.",
        "I remember the German sausage and what I knew as German-style kimchi. I had milkshakes there, too. Toward the end of the meal, my parents always ordered strawberry shortcake.",
        "I can still remember that cake.",
        "That restaurant is gone now. I still miss it. I remember the food, and I remember my parents and brothers around the table."
      ]
    }
  },
  {
    number: "06", slug: "mom-im-so-happy",
    theme: { ko: "어머니 · 행복", en: "Mother · Happiness" },
    source: ["내가 좋아하는 것들과 내가 사랑하는 삶 §6", "조성연 작가의 어린 시절과 기억 §16"],
    ko: {
      title: "엄마, 참 행복해",
      deck: "엄마는 차 안에서 내가 했던 말을 오랫동안 기억하셨다.",
      paragraphs: [
        "어느 해 크리스마스 파티를 마치고 집으로 돌아오는 길이었다.",
        "기사 아저씨가 운전하고 아빠는 앞자리에 앉으셨다. 뒤에는 엄마와 나, 두 남동생이 함께 탔다.",
        "그때 내가 엄마에게 말했다고 한다.",
        "“엄마, 참 행복해.”",
        "그 말은 내가 직접 기억하는 게 아니다. 엄마에게서 들었다."
      ],
      quote: "“엄마, 참 행복해.”"
    },
    en: {
      title: "Mom, I'm So Happy",
      deck: "My mother kept that sentence for years.",
      paragraphs: [
        "We were on our way home after a Christmas party.",
        "Our driver was at the wheel, and my father sat in front. In the back were my mother, my two brothers, and me.",
        "My mother told me that I turned to her and said, “Mom, I'm so happy.”",
        "I know about that moment because my mother remembered it."
      ],
      quote: "“Mom, I'm so happy.”"
    }
  },
  {
    number: "07", slug: "july-my-first-year-of-middle-school",
    theme: { ko: "아버지 · 7월", en: "Father · July" },
    source: ["내가 좋아하는 것들과 내가 사랑하는 삶 §§8–9", "조성연 작가의 어린 시절과 기억 §§19–22"],
    ko: {
      title: "중학교 1학년, 그해 7월",
      deck: "아버지가 돌아가신 뒤에도 하루는 계속되었다.",
      paragraphs: [
        "예원학교 중학교 1학년이던 7월, 아버지가 갑자기 암으로 돌아가셨다. 담도암이었다.",
        "아마 내 어린 시절은 그때 끝난 것 같다.",
        "물론 아름다운 엄마가 계셨고 사이좋은 두 남동생도 있었다. 우리는 여전히 서로를 사랑했다. 그런데 그 뒤로는 내 마음 한편에 슬픔과 우울함이 오래 남았다.",
        "가장 이상했던 것은 아버지가 돌아가셨는데도 내가 멀쩡히 살아간다는 사실이었다. 밥을 먹고, 학교에 가고, 친구들과 이야기했다. 그런 일을 계속하고 있는 나 자신이 때로는 슬펐다.",
        "그 뒤로 나는 엄마를 힘들게 해서는 안 된다고 생각했다. 엄마를 걱정시키지 말아야 하고, 오히려 엄마를 돌봐야 한다고 여겼다.",
        "사춘기 아이처럼 마음껏 흔들릴 수가 없었다. 나도 모르게 조금 일찍 어른이 되었다."
      ]
    },
    en: {
      title: "July, My First Year of Middle School",
      deck: "My father died. I went on eating breakfast and going to school.",
      paragraphs: [
        "In July of my first year at Yewon School, my father died of cancer. It was bile duct cancer.",
        "I think my childhood ended that month.",
        "My beautiful mother was still there, and so were my two brothers. We loved one another just as before. But I carried sadness with me after that.",
        "What troubled me most was the fact that I kept living. I ate. I went to school. I talked with friends. My father had died, and I was doing all those ordinary things. At times, even that made me sad.",
        "I decided I must not make life harder for my mother. I should not worry her. In fact, I thought I needed to look after her.",
        "I was still a child, but I was already thinking about how to take care of my mother."
      ]
    }
  },
  {
    number: "08", slug: "the-happiness-collector",
    theme: { ko: "기억 · 지금", en: "Memory · Now" },
    source: ["PART I, II, III · PART III (직접 구술)", "내가 좋아하는 것들과 내가 사랑하는 삶 §30"],
    ko: {
      title: "행복을 모으는 사람",
      deck: "힘들었던 날보다 그때 함께 웃었던 일이 먼저 떠오른다.",
      paragraphs: [
        "나는 어쩌면 행복을 모으는 사람 같다.",
        "정말 힘든 일도 많았고 어려운 일도 많았다. 그런데 어떤 시기나 어떤 사람을 떠올려도 그때 함께 행복했던 일이 먼저 생각난다.",
        "그날 얼마나 힘들었는지, 어떤 날씨 속에서 얼마나 땀을 흘렸는지보다 누구와 웃었는지, 무엇이 재미있었는지, 그때 내 마음이 얼마나 편안했는지가 먼저 돌아온다.",
        "누군가에게 배신을 당한 일도 있다. 사람에게 실망한 적도 있다. 그런데 시간이 지나면 이상하게도 그 사람과 함께 기뻤던 순간이 더 많이 남는다.",
        "그렇다고 나쁜 일이 없었던 건 아니다. 있었는데, 내 기억은 자꾸 그 안에 있던 행복한 순간들을 데려온다.",
        "나는 그런 사람인가 보다."
      ],
      quote: "나는 어쩌면 행복을 모으는 사람 같다."
    },
    en: {
      title: "The Happiness Collector",
      deck: "When I remember a difficult time, I usually remember who made me laugh.",
      paragraphs: [
        "I think I may be someone who collects happiness.",
        "There have been hard times. Plenty of them. Yet whenever I think about a particular year or a particular person, the happy things seem to come back first.",
        "I remember laughing with someone. I remember something funny we did. I remember how peaceful and happy I felt. I am less likely to remember the heat, the exhaustion, or how much I struggled through those days.",
        "I have been betrayed and disappointed by people. Even then, with time, I find myself remembering the happiness we once shared.",
        "It is not that nothing bad happened. It did. But my memory keeps bringing me the good hours we had together.",
        "Perhaps that is simply the kind of person I am."
      ],
      quote: "I think I may be someone who collects happiness."
    }
  },
  {
    number: "09", slug: "the-suitcase-full-of-gifts",
    theme: { ko: "아버지 · 선물", en: "Father · Gifts" },
    source: ["내가 좋아하는 것들과 내가 사랑하는 삶 §3", "조성연 작가의 어린 시절과 기억 §9"],
    ko: {
      title: "아빠의 커다란 선물 가방",
      deck: "출장 간 아빠가 돌아오는 날이 기다려졌던 이유.",
      paragraphs: [
        "아버지는 해외 출장이 많았다. 돌아오실 때면 커다란 트렁크를 열어 선물을 꺼내셨다. 어마어마하게 많았다.",
        "엄마와 우리 삼 남매 선물만이 아니었다. 고모들 것까지 챙겨 오셨다.",
        "나는 출장 간 아빠를 그리워하기보다 이번에는 무엇을 사서 오실까 기대했던 것 같다. 특히 일본에 가시면 좋았다. 예쁘고 신기한 학용품이 많았기 때문이다.",
        "아버지가 사 오신 지우개와 책받침을 학교에서 친구들에게 나눠주기도 했다.",
        "옷도 기억난다. 하늘색 모직 코트, 하늘색 트렌치코트, 버건디색 스웨이드 부츠.",
        "생각해 보면 아버지는 하늘색을 좋아하셨던 것 같다. 나도 그래서 하늘색을 좋아하게 된 걸까."
      ]
    },
    en: {
      title: "The Suitcase Full of Gifts",
      deck: "My father traveled often. I looked forward to what would come out of his luggage.",
      paragraphs: [
        "My father traveled abroad for work. When he came home, he opened enormous suitcases full of presents. There seemed to be enough for everyone.",
        "There were gifts for my mother and for the three of us, of course, but he remembered my aunts as well.",
        "I was more excited about what he might bring home than I was sad about his being away. I especially liked it when he went to Japan. He found pretty, unusual school supplies we rarely saw in Korea then.",
        "At school, I handed out pencil boards and erasers to friends.",
        "I remember some of the clothes: a pale-blue wool coat, a pale-blue trench coat, and burgundy suede boots.",
        "Thinking back, I suspect my father loved pale blue. Maybe that is where I got it."
      ]
    }
  },
  {
    number: "10", slug: "christmas-starts-in-october",
    theme: { ko: "가족 · 크리스마스", en: "Family · Christmas" },
    source: ["내가 좋아하는 것들과 내가 사랑하는 삶 §5", "조성연 작가의 어린 시절과 기억 §§13–15"],
    ko: {
      title: "나는 10월부터 크리스마스를 시작한다",
      deck: "엄마는 선물을 잘 숨겼고, 우리는 늘 찾으러 다녔다.",
      paragraphs: [
        "어린 시절 우리 집의 크리스마스는 무척 특별했다. 가족이 모두 모이면 아이들만 열 명이 넘었다. 집에서는 커다란 칠면조를 구웠다. 전기톱 같은 도구로 잘라 나눠 먹었던 기억도 난다. 막내삼촌은 산타클로스 옷을 입고 선물을 나눠주셨다.",
        "그러나 내 크리스마스는 파티보다 훨씬 일찍 시작되었다. 엄마가 미리 선물을 사서 포장하고 어딘가에 숨겨놓는다는 사실을 알고 있었기 때문이다.",
        "엄마 아빠가 잠든 것 같으면 남동생 둘을 깨웠다. 셋이 집 안을 돌아다니며 선물을 찾았다.",
        "엄마는 선물을 정말 잘 숨기셨다. 찾아내지 못한 해도 많았다. 가끔 찾더라도 이미 포장이 완벽해서 뜯어볼 수가 없었다. 뜯으면 들킬 게 뻔했다.",
        "그 앞에서 궁금해하기만 했다. 그것마저 즐거웠다.",
        "나는 지금도 10월이면 혼자 트리를 꺼낸다. 땀을 뻘뻘 흘리며 장식한다. 크리스마스는 가능하면 오래 누리고 싶다."
      ]
    },
    en: {
      title: "Christmas Starts in October",
      deck: "My mother hid the presents. We tried to find them.",
      paragraphs: [
        "Christmas in our family was quite a production. When everyone gathered, there were more than ten children. We roasted a huge turkey. I remember something like an electric saw being used to carve it. My youngest uncle dressed as Santa Claus to hand out presents.",
        "But Christmas began long before the party for me. I knew my mother bought the gifts early, wrapped them, and hid them somewhere in the house.",
        "Once our parents seemed to be asleep, I woke my two brothers. The three of us went searching.",
        "My mother was very good at hiding things. Many years we found nothing. Sometimes we found a present, but it was wrapped so carefully that we could not open it without being caught.",
        "We stood there wondering what was inside. Even that was part of the fun.",
        "I still begin Christmas in October. I take out the tree and put it up myself, usually working up a sweat. I like to make the season last as long as possible."
      ]
    }
  },
  {
    number: "11", slug: "the-school-i-didnt-choose",
    theme: { ko: "학교 · 미술", en: "School · Art" },
    source: ["내가 좋아하는 것들과 내가 사랑하는 삶 §§7, 9", "조성연 작가의 어린 시절과 기억 §§17–18, 23–24"],
    ko: {
      title: "내가 선택하지 않았던 미술의 길",
      deck: "나는 그림보다 책과 공부를 더 좋아했다.",
      paragraphs: [
        "초등학교 4학년 무렵, 엄마가 나에게 미술을 시키기로 하셨다. 예원학교에 가기 위해 입시 미술을 시작했다.",
        "그림을 싫어한 건 아니다. 다만 나는 책을 읽고 공부하는 편이 더 좋았다. 그래도 엄마의 뜻대로 열심히 그림을 그렸다. 예원학교에 들어갔고, 서울예술고등학교를 거쳐 서울대학교 미술대학에도 갔다.",
        "예원학교는 정동길에 있었다. 아침에는 기사 아저씨가 학교까지 데려다주고 저녁에도 데리러 오셨다. 나는 오히려 친구들과 덕수궁 돌담길을 걸어 버스를 타고 싶었다.",
        "기사 아저씨에게 학교 앞까지 오지 마시라고 하기도 했다. 친구들과 걸어가 좌석버스를 타고 압구정동에서 내리면 거기서 만나곤 했다.",
        "서울대학교 미술대학은 엄마의 소원이었다. 나는 엄마의 소원을 이루어드린 셈이다. 대학 생활이 그리 즐겁지는 않았다.",
        "졸업한 뒤 이화여자대학교 대학원에서 교육학을 공부했다. 그 공부는 재미있었다. 그때 다시 알았다. 나는 역시 공부하는 것을 좋아한다."
      ]
    },
    en: {
      title: "The School I Didn't Choose",
      deck: "I went to art school because my mother wanted me to.",
      paragraphs: [
        "Around fourth grade, my mother decided I should study art. I began preparing for the entrance exam to Yewon School.",
        "I did not hate drawing. I simply liked books and studying more. Still, I worked hard. I attended Yewon, then Seoul Arts High School, and eventually the College of Fine Arts at Seoul National University.",
        "Yewon was on Jeongdong-gil, near the stone wall of Deoksugung Palace. Our driver took me to school and picked me up afterward. I would have preferred to walk with my friends and ride the bus.",
        "Sometimes I asked him not to come all the way to the school gate. I walked to the bus stop with my friends, rode to Apgujeong-dong, and met him there instead.",
        "Seoul National University's art program was my mother's dream. I went. But I wasn't particularly happy during those college years.",
        "After graduation I studied education at Ewha Womans University. That was different. I loved those classes. I realized once again that I had always liked studying."
      ]
    }
  },
  {
    number: "12", slug: "the-brothers-i-meet-every-morning",
    theme: { ko: "동생들 · 믿음", en: "Brothers · Faith" },
    source: ["PART I, II, III · PART II (직접 구술)", "내가 좋아하는 것들과 내가 사랑하는 삶 §11"],
    ko: {
      title: "매일 아침 만나는 두 동생",
      deck: "꼭 같은 방에 있어야 함께 아침을 시작하는 건 아니다.",
      paragraphs: [
        "나는 연년생인 두 남동생을 정말 좋아한다.",
        "어릴 때는 셋이 마당에서 놀고, 크리스마스 선물을 찾으러 온 집을 돌아다녔다. 아버지가 돌아가신 뒤에도 우리에게는 서로가 있었다.",
        "지금은 매일 아침 동생들과 함께 큐티를 한다. 직접 만나는 건 아니고, 카카오톡으로 말씀을 나누고 하나님 이야기를 한다.",
        "동생들과는 그런 이야기가 정말 잘 통한다. 각자 읽은 말씀을 이야기하고, 마음에 남은 것을 나누는 시간이 좋다.",
        "가끔은 내가 가장 사랑하는 사람들이 이 두 동생인 것 같기도 하다."
      ]
    },
    en: {
      title: "The Brothers I Meet Every Morning",
      deck: "We do our morning devotions together, even when we're not in the same room.",
      paragraphs: [
        "I love my two younger brothers. They were born a year apart.",
        "When we were little, the three of us played in the yard and searched the house for Christmas presents. After our father died, we still had each other.",
        "These days, we meet every morning on KakaoTalk, a Korean messaging app. We read Scripture, share our devotions, and talk about God. We do not have to be physically together to do it.",
        "Those conversations come easily with my brothers. We understand what the others are talking about, and I look forward to hearing what has stayed with them from their reading.",
        "Sometimes I think those two may be the people I love most."
      ]
    }
  },
  {
    number: "13", slug: "just-before-the-rain",
    theme: { ko: "비 · 감각", en: "Rain · The Senses" },
    source: ["PART I, II, III · PART I (직접 구술)", "내가 좋아하는 것들과 내가 사랑하는 삶 §14", "조성연 작가의 어린 시절과 기억 §25"],
    ko: {
      title: "비가 오기 직전의 공기",
      deck: "첫 빗방울이 땅을 토독토독 두드릴 때 나는 냄새가 있다.",
      paragraphs: [
        "나는 비 오는 날을 제일 좋아한다.",
        "집에서 창문을 열어놓고 빗소리를 들으며 책을 읽거나 음악을 듣는 시간이 좋다. 비 오는 풍경을 그냥 바라보는 것도 좋아한다.",
        "특히 비가 오기 직전의 공기가 좋다. 그리고 비가 막 시작될 때의 냄새. 첫 빗방울이 땅을 토독토독 때리는 순간 올라오는 흙냄새와 나무 냄새가 있다.",
        "봄비가 내리는 날에는 꽃잎이 빗속에서 떨어지는 모습을 멍하니 보기도 한다.",
        "창을 조금 열어두고 있으면 그 소리와 냄새가 집 안으로 들어온다. 나는 그런 날 책과 음악을 곁에 두고 오래 있고 싶다."
      ]
    },
    en: {
      title: "Just Before the Rain",
      deck: "The first drops have a particular sound. And a particular smell.",
      paragraphs: [
        "Rainy days are my favorite.",
        "I like to open the window at home and read while the rain falls. Sometimes I listen to music. I am perfectly happy just watching the rain, too.",
        "What I love most is the air right before it starts. Then the first drops touch the ground—tap, tap, tap—and there is that smell of damp earth and trees.",
        "When it rains in spring, I watch the petals fall from the flowers.",
        "With the window open, I can hear the rain and smell the damp earth. I could sit there with a book and some music for a long while."
      ]
    }
  },
  {
    number: "14", slug: "the-morning-light-and-long-shadows",
    theme: { ko: "새벽 · 묵상", en: "Morning · Scripture" },
    source: ["PART I, II, III · PART II (직접 구술)", "내가 좋아하는 것들과 내가 사랑하는 삶 §17"],
    ko: {
      title: "아침 햇살과 긴 그림자",
      deck: "나는 하루가 본격적으로 시작되기 전의 시간을 좋아한다.",
      paragraphs: [
        "나는 아침 시간을 좋아한다. 그래서 보통 새벽에 조금 일찍 일어난다.",
        "제일 먼저 성경을 펼쳐 말씀을 읽고 묵상한다. 하나님께 내 생각을 말씀드리고, 내 마음을 드리는 시간이다. 그러다 보면 하나님께 응답을 받을 때도 있다.",
        "그 시간이 참 좋다.",
        "창밖으로 해가 올라오는 모습도 좋아한다. 아침 햇살이 집 안으로 깊숙이 들어오면 바닥과 벽에 긴 그림자가 생긴다.",
        "새벽에 말씀을 읽다가 고개를 들어 그 빛과 그림자를 바라보는 시간. 나는 그런 아침을 좋아한다."
      ]
    },
    en: {
      title: "Morning Light and Long Shadows",
      deck: "I like to be awake before the day has properly begun.",
      paragraphs: [
        "I like mornings, so I often get up early.",
        "The first thing I do is open my Bible. I read, reflect, and tell God what I am thinking. Sometimes I receive an answer from Him.",
        "I love that time.",
        "I also love watching the sun rise outside the window. When the light comes into the house, it makes long, deep shadows across the rooms.",
        "I look up from what I have been reading and watch the light and the shadows for a while. That is one of my favorite ways to begin a day."
      ]
    }
  },
  {
    number: "15", slug: "beautiful-plates-and-a-place-to-talk",
    theme: { ko: "식탁 · 취향", en: "Table · Everyday Beauty" },
    source: ["PART I, II, III · PART I (직접 구술)", "내가 좋아하는 것들과 내가 사랑하는 삶 §§23–24"],
    ko: {
      title: "예쁜 그릇에 음식을 담는 일",
      deck: "그릇도 좋고 음식도 좋지만, 함께 앉는 사람이 더 좋다.",
      paragraphs: [
        "나는 예쁜 그릇을 좋아한다. 사서 구경하는 것도 좋고, 그 그릇에 음식을 예쁘게 담아 먹는 것도 좋다.",
        "건강하고 맛있는 음식을 보기 좋게 차리는 일도 좋아한다.",
        "그런데 음식이 아무리 예뻐도 혼자 보고 끝내는 것보다는 좋아하는 사람과 나눠 먹는 게 더 좋다. 식탁에 앉아 이런저런 이야기를 나누는 시간이 즐겁다.",
        "나는 대화하는 걸 정말 좋아한다. 서로의 생각과 마음을 듣고, 책을 읽었다면 그 책 이야기도 나누고, 때로는 하나님 이야기도 한다.",
        "아름다운 그릇이 놓인 식탁에 좋아하는 사람들이 함께 앉아 있는 풍경. 나는 그런 풍경을 좋아한다."
      ]
    },
    en: {
      title: "Beautiful Plates and a Place to Talk",
      deck: "I like pretty dishes. I like even more having someone to use them with.",
      paragraphs: [
        "I like pretty plates and bowls. I enjoy buying them and arranging food on them so that the meal looks beautiful.",
        "I like food that tastes good and is healthy, too.",
        "I especially enjoy sharing those meals with people I love. We sit down, eat, and talk.",
        "I really do love conversation. We might talk about what we are thinking, a book one of us has read, or something we have been learning about God.",
        "A lovely table with people I love around it. That is the part I look forward to most."
      ]
    }
  },
  {
    number: "16", slug: "the-picture-book-i-made-for-my-son",
    theme: { ko: "아들 · 그림책", en: "Son · Picture Book" },
    source: ["PART I, II, III · PART II (직접 구술)", "내가 좋아하는 것들과 내가 사랑하는 삶 §12", "2026-11-21 출판자 직접 정정: 아들의 정확한 발언 ‘I dream of becoming a Big Black doggy.’에서 동화가 시작됨. 아들 성인 후 『내 꿈은 말이지?』 다국어 개정판 출간"],
    ko: {
      title: "커다란 검은 강아지가 되는 꿈",
      deck: "어린 아들의 한마디로 시작한 동화책이, 아들이 성인이 된 뒤 다국어 개정판으로 다시 나왔다.",
      paragraphs: [
        "아들이 어렸을 때 이런 말을 했다.",
        "“I dream of becoming a Big Black doggy.”",
        "커다란 검은 강아지가 되는 꿈. 나는 그 한마디에서 출발해 아들을 위한 동화책을 만들었다.",
        "세월이 흘러 아들은 성인이 되었다. 나는 그때 만든 동화책을 개정해 여러 언어로 펴냈다.",
        "그 책이 『내 꿈은 말이지?』다. 영어판 제목은 『Big Dreams in Every Color』다."
      ]
    },
    en: {
      title: "“I dream of becoming a Big Black doggy.”",
      deck: "My little boy's dream of becoming a big black dog grew into a picture book.",
      paragraphs: [
        "When my son was little, he said something that stayed with me.",
        "“I dream of becoming a Big Black doggy.”",
        "That one sentence was the beginning of a picture book I made for him.",
        "Years later, after my son had grown up, I revised the book and published it in several languages.",
        "Its Korean title is 『내 꿈은 말이지?』. The English edition is called Big Dreams in Every Color."
      ]
    }
  },
  {
    number: "17", slug: "the-cafe-with-wide-windows",
    theme: { ko: "대화 · 공간", en: "Conversation · Place" },
    source: ["PART I, II, III · PART I (직접 구술)", "내가 좋아하는 것들과 내가 사랑하는 삶 §§18, 20–21"],
    ko: {
      title: "창이 넓은 카페에서",
      deck: "커피가 맛있고, 오래 이야기할 수 있으면 좋다.",
      paragraphs: [
        "나는 조용하고 깨끗하고 창이 넓은 카페를 좋아한다. 자연광이 좋고 커피가 맛있으면 더 좋다. 디저트는 맛있는 게 조금 있으면 된다.",
        "그런 곳에서 좋아하는 사람과 오래 앉아 이야기하는 시간이 좋다.",
        "나는 다른 사람의 소문이나 가십보다는 각자가 살아오면서 어떤 하나님을 만났는지 듣는 것을 좋아한다. 내가 겪은 하나님 이야기도 하고, 상대방이 겪은 이야기도 듣는다.",
        "나는 또 책 이야기나 감정, 생각, 철학을 나누는 것도 좋아한다. 서로 이야기하다 보면 몰랐던 것을 배우고 나 자신도 다시 알게 된다.",
        "창밖의 빛이 들어오는 자리에 앉아 급하게 일어날 필요 없이 그런 이야기를 나눌 수 있다면, 나는 꽤 행복하다."
      ]
    },
    en: {
      title: "The Café with Wide Windows",
      deck: "Good coffee, a little dessert, and someone who wants to talk.",
      paragraphs: [
        "I like quiet, clean cafés with wide windows and plenty of natural light. The coffee should be good. A small selection of good desserts is plenty.",
        "What I really like is sitting there for a long conversation with someone I care about.",
        "I would rather talk about how we have each experienced God than exchange gossip about other people. I like hearing about another person’s life with Him, and sharing my own.",
        "Books are another favorite subject. So are feelings, ideas, and the different ways people see the world. We learn things about each other, and I often learn something about myself.",
        "Give me a window full of light and a conversation that does not need to end quickly. I am very happy there."
      ]
    }
  },
  {
    number: "18", slug: "a-sunset-on-the-way-home",
    theme: { ko: "노을 · 그리움", en: "Sunset · Longing" },
    source: ["내가 좋아하는 것들과 내가 사랑하는 삶 §16", "조성연 작가의 어린 시절과 기억 §26"],
    ko: {
      title: "집으로 돌아가는 길의 노을",
      deck: "노을은 아름답기만 한 풍경은 아니다.",
      paragraphs: [
        "집으로 돌아가는 길에 하늘 전체로 넓게 펼쳐진 노을을 보는 것을 좋아한다.",
        "노을에는 설명하기 어려운 아련함이 있다. 나는 그 아련함을 좋아한다.",
        "노을이 지는 하늘 아래에는 누군가가 그리워하는 사람들이 잠들어 있는 것처럼 느껴진다.",
        "아버지를 일찍 떠나보낸 내게 노을의 아련함이 오래된 그리움과 닿아 있는지도 모르겠다.",
        "그래서 노을을 보면 아름답다는 생각만 하지는 않는다. 잠깐 하늘을 더 오래 바라보게 된다."
      ]
    },
    en: {
      title: "A Sunset on the Way Home",
      deck: "The sky can be beautiful and full of longing at once.",
      paragraphs: [
        "I love it when the sunset spreads all the way across the sky as I am going home.",
        "There is something wistful about that light. I have always liked it.",
        "When the sky turns red, I think of the people who have died and those who miss them. I imagine the departed resting somewhere beneath that evening sky.",
        "Perhaps that feeling is connected to losing my father so young. I cannot say for certain.",
        "I know only that a sunset makes me look a little longer."
      ]
    }
  }
];

export const getRecordedStory = (slug: string): RecordedStory | undefined =>
  recordedStories.find((story) => story.slug === slug);

export const storyIndex = (locale: StoryLocale) => {
  const list = recordedStories.map((s) => ({
    number: s.number,
    title: s[locale].title,
    meta: s.theme[locale],
    href: `${locale === "ko" ? "/ko" : ""}/stories/${s.slug}/`,
  }));
  list.push({
    number: "02",
    title: locale === "ko" ? "삼시세끼, 미슐랭 3스타 셰프처럼" : "Three Meals a Day",
    meta: locale === "ko" ? "가족 · 식탁" : "Family · Table",
    href: `${locale === "ko" ? "/ko" : ""}/stories/three-meals-a-day/`,
  });
  return list.sort((a, b) => Number(a.number) - Number(b.number));
};

export const storyHref = (locale: StoryLocale, number: string) => {
  if (number === "02") return locale === "ko" ? "/ko/stories/three-meals-a-day/" : "/stories/three-meals-a-day/";
  const found = storyIndex(locale).find((s) => s.number === number);
  return found?.href || (locale === "ko" ? "/ko/stories/" : "/stories/");
};

/** Curated reader route. Original story numbers and chronology are not changed. */
export const recommendedReadingOrder = ["01","03","04","05","09","10","06","07","11","02","12","15","16","13","14","17","18","08"] as const;
