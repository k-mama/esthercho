export const authorProfile = {
  globalName: "Esther Cho",
  koreanName: "조성연",
  romanizedName: "Cho Seongyeon",
  roles: {
    en: ["Writer", "Artist", "Homemaker"],
    ko: ["작가", "화가", "주부"],
  },
  shortBio: {
    en: "Esther Cho is the international author name of Korean writer and artist Cho Seongyeon.",
    ko: "Esther Cho는 한국 작가이자 화가인 조성연의 국제 작가명입니다.",
  },
  education: [
    {
      year: "1985",
      detail: {
        en: "Graduated from Yewon School",
        ko: "예원학교 졸업",
      },
    },
    {
      year: "1988",
      detail: {
        en: "Graduated from Seoul Arts High School",
        ko: "서울예술고등학교 졸업",
      },
    },
    {
      year: "1992",
      detail: {
        en: "Graduated from Seoul National University with a degree in Oriental Painting",
        ko: "서울대학교 미술대학 동양화과 졸업",
      },
    },
    {
      year: "1999",
      detail: {
        en: "Completed the coursework for a master's program in Art Education at Ewha Womans University",
        ko: "이화여자대학교 미술교육 석사과정 수료",
      },
    },
  ],
} as const;
