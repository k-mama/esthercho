# Esther Cho Website — 시작 안내

이 문서는 `C:\emmaestro\esthercho` 저장소에서 VS Code와 Gemini Code Assist를 사용할 때 가장 먼저 읽는 안내서입니다.

## 프로젝트 상태

- GitHub 저장소: `k-mama/esthercho`
- 배포: Cloudflare Pages
- 운영 주소: `https://esthercho.pages.dev`
- 프레임워크: Astro
- 언어: TypeScript
- 기본 언어: English
- 보조 언어: 한국어
- 확장 예정: Japanese, Traditional Chinese, Spanish, Brazilian Portuguese 등
- 개발 방식: GitHub에 커밋·푸시 → Cloudflare Pages 자동 배포 → 실제 배포 주소에서 확인

현재 프로젝트는 기반 설치와 첫 배포만 완료된 상태입니다. 아직 디자인과 콘텐츠 페이지를 임의로 만들면 안 됩니다.

## Gemini가 문서를 읽는 순서

1. `docs/01_PROJECT_BRIEF.md`
2. `docs/02_SITE_MAP.md`
3. `docs/03_DESIGN_SYSTEM.md`
4. `docs/04_CONTENT_MODEL.md`
5. `docs/05_I18N_RULES.md`
6. `docs/06_MEDIA_ARCHIVE_RULES.md`
7. `docs/07_GEMINI_BUILD_INSTRUCTIONS.md`
8. `docs/08_BUILD_SEQUENCE.md`

## 가장 중요한 원칙

- Esther Cho가 글로벌 대표 작가명이다.
- 조성연은 한국 실명이며 About, 책 정보, Press, Rights에서 명확하게 공개한다.
- 홈페이지는 방문자가 작가의 집으로 초대되어 들어오는 경험으로 시작한다.
- 영어가 기본 언어다.
- 한국어와 다른 언어는 지구본 언어 선택기로 접근한다.
- 실제 어린 시절 집, 가족사진, 손그림 원본, AI 재탄생 이미지, 새벽 묵상 테이블, 아침상 사진이 핵심 시각 자산이다.
- 실제 기록과 AI 재탄생 이미지를 절대 혼동시키지 않는다.
- 북미 친화적이되 한국적 뿌리를 지우지 않는다.
- SaaS, 대시보드, 기업형 랜딩 페이지처럼 만들지 않는다.
- 사진 중심이지만 로딩 속도와 모바일 가독성을 우선한다.
- 승인받지 않은 인물, 사건, 책 정보, 전기적 사실을 만들어내지 않는다.

## 작업 방식

Gemini에게 한 번에 전체 사이트를 만들라고 하지 않는다.

항상 다음 단위로 작업한다.

1. 문서 읽기
2. 수정 대상 파일 명시
3. 작은 기능 한 개 구현
4. 변경 파일 요약
5. 빌드 가능성 자체 점검
6. 커밋 메시지 제안
7. GitHub 푸시
8. Cloudflare Pages 배포 화면 확인

## 현재 다음 작업

`docs/09_GEMINI_FIRST_TASK.md`의 프롬프트를 Gemini Code Assist에 그대로 입력한다.
