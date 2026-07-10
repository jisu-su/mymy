export const projectsData = [
  {
    id: "01",
    type: "MAIN",
    title: "듀오잉수",
    titleEn: "duoingsu — Learning Together Log App",
    sub: "풀스택 메인 프로젝트 — 기획부터 인프라까지",
    badges: ["Next.js", "CF Workers", "D1 DB", "Web Push"],
    links: {
      github: "https://github.com/duoingsu",
      live: "https://duoingsu.dev"
    },
    // Slide 1 데이터
    architecture: {
      diagram: `
+-------------------------------------------------------------+
|                     Next.js (App Router)                    |
|                        Frontend App                         |
+-------------------------------------------------------------+
                               |
                      JSON / REST API / HTTPS
                               v
+-------------------------------------------------------------+
|             Cloudflare Workers (Hono Framework)             |
|                       Serverless API                        |
+-------------------------------------------------------------+
          |                                 |
     Drizzle ORM                        Web Push
          v                                 v
+--------------------+            +---------------------------+
|   Cloudflare D1    |            |   VAPID + Service Worker  |
|     SQLite DB      |            |    Push Notification      |
+--------------------+            +---------------------------+
      `,
      deliverables: [
        "Turborepo 기반 Monorepo 구조 설계 — apps/web, packages/shared 분리",
        "Cloudflare Pages + Workers + D1 + R2 무비용 고가용성 서버리스 스택 구축",
        "logical_date 알고리즘 — 오전 6시 기준 데이터 마감 제어로 데이터 무결성 확보",
        "VAPID 암호화 + Service Worker 기반 독립형 웹 푸시 인프라 구축",
        "Firebase Auth 화이트리스트 2인 구조로 접근 제어"
      ]
    },
    // Slide 2 데이터
    troubleshooting: {
      cause: "Android 환경에서 VAPID Public Key를 Base64 문자열 그대로 전달 시 브라우저 내부 파싱 오류로 Web Push 구독 실패. iOS와 달리 Android Chromium이 Uint8Array 바이너리 배열을 엄격하게 요구.",
      resolution: "Base64 URL-safe 문자열 → Uint8Array 변환 유틸 함수를 직접 구현하여 applicationServerKey 인자로 주입. urlBase64ToUint8Array(publicKey) 함수를 shared 패키지에 등록하여 재사용.",
      results: "Android / iOS / Desktop 크로스 브라우징 Web Push 구독 정상 동작 확인. shared 유틸로 추출하여 이후 다른 플랫폼 확장 시 코드 중복 없이 재사용 가능한 구조 확보."
    },
    // Slide 3 데이터
    evolution: {
      limitations: "서버리스 D1 데이터베이스의 동시성 제약 및 복잡한 트랜잭션 처리 시 성능 지연 가능성 존재. 대용량 푸시 발송 시 워커 CPU 타임아웃 제한 임계치 근접 우려.",
      nextSprint: [
        "연속 기록 스트릭(Streak) 시각화 대시보드 추가 개발",
        "다중 이모지 반응 컴포넌트 터치 액션 및 렌더링 최적화",
        "30초 폴링 방식 -> WebSocket 실시간 동기화 또는 Cloudflare Durable Objects 도입 검토"
      ]
    }
  },
  {
    id: "02",
    type: "TEAM",
    title: "탔시유 (TA-CU)",
    titleEn: "ta-cu — Daejeon Public Bike Tracker App",
    sub: "GPS 기반 공공 자전거 앱 — 팀 협업 리드",
    badges: ["React Native", "Expo", "Firebase", "AsyncStorage"],
    links: {
      github: "https://github.com/ta-cu"
    },
    architecture: {
      diagram: `
+-------------------------------------------------------------+
|                 React Native (Expo App)                     |
|            GPS Tracker & Map (Gesture Handler)              |
+-------------------------------------------------------------+
                               |
                      REST API over HTTPS
                               v
+-------------------------------------------------------------+
|             Cloudflare Tunnel (Secure Gateway)              |
|                      Private Server                         |
+-------------------------------------------------------------+
                               |
                               v
+-------------------------------------------------------------+
|                       Firebase Auth                         |
|                 getReactNativePersistence                   |
+-------------------------------------------------------------+
      `,
      deliverables: [
        "Expo 내 맵 컴포넌트 스크롤 간섭 이슈 직접 해결 (제스처 핸들러 분리)",
        "공통 상수 관리 파일(apiConstants.js) 머지 충돌 중재 및 해결 주도",
        "커밋 컨벤션 제안 및 브랜치 전략 문서화로 팀 생산성 향상",
        "Firebase Auth + AsyncStorage getReactNativePersistence 통합"
      ]
    },
    troubleshooting: {
      cause: "Cloudflare Tunnel 배포 환경에서 환경변수에 저장된 API 엔드포인트 주소에 https:// 프로토콜이 누락됨. TLS 인증 메커니즘이 강제 적용된 CF Tunnel의 특성상 일반 HTTP 요청을 거부하여 API 통신 전체가 침묵하며 실패.",
      resolution: "Network 탭과 서버 로그를 교차 분석하여 요청 자체가 브라우저 단에서 차단됨을 확인. 환경변수 URL 앞에 https:// 명시 후, Tunnel 재시작 시마다 주소 갱신이 필요한 구조적 문제를 팀 공유 문서로 기록하여 온보딩 비용 제거.",
      results: "API 통신 정상화. 이후 팀 전원이 같은 실수를 반복하지 않도록 체크리스트 문서화 — 디버깅 경험을 팀 자산으로 전환."
    },
    evolution: {
      limitations: "단일 데이터 소스(공공 API) 의존으로 인한 데이터 지연 및 실시간 트래킹 정밀성 부족.",
      nextSprint: [
        "Redis 인메모리 활용 실시간 자전거 스테이션 잔여 수량 집계 아키텍처 도입",
        "GPS 어뷰징 방지 — 평균 속도/거리 역산 미들웨어 도입",
        "Tashu API 실시간 스테이션 재고 반영 고도화"
      ]
    }
  },
  {
    id: "03",
    type: "LIVE",
    title: "세븐틴 제대 카운트다운",
    titleEn: "seventeen-countdown — Fan Service, Currently Live",
    sub: "실 유저 운영 중 — 요구사항 발견 & 지속 리팩토링",
    badges: ["React", "YouTube API", "CSS Modules"],
    links: {
      github: "https://github.com/seventeen-countdown",
      live: "https://seventeen-countdown.net"
    },
    architecture: {
      diagram: `
+-------------------------------------------------------------+
|                        React App                            |
|             (useCountdown Custom Hook / YouTube API)        |
+-------------------------------------------------------------+
                               |
                        Static Hosting
                               v
+-------------------------------------------------------------+
|                      Cloudflare Pages                       |
+-------------------------------------------------------------+
                               |
                        Shared Styling
                               v
+-------------------------------------------------------------+
|                packages/shared/style.css                    |
|                Monorepo Shared Style Assets                 |
+-------------------------------------------------------------+
      `,
      deliverables: [
        "실시간 타이머 훅 및 YouTube Embed API 미디어 연동 링크 트리 구조 설계",
        "packages/shared/style.css 공통 스타일시트 도입 — 파편화된 스타일 리팩토링",
        "공통 훅(useCountdown) 분리로 다른 멤버 카운트다운에 재사용 가능한 구조 확보",
        "실제 유저 반응을 기반으로 UGC 실시간 응원방 기능 업그레이드 진행 중"
      ]
    },
    troubleshooting: {
      cause: "다수 팬 동시 접속 시 카운트다운 타임 지연 발생 우려 및 YouTube API 로드 지연으로 첫 화면 렌더링 블로킹 현상 관찰.",
      resolution: "API 로드 비동기 스크립트 주입 방식으로 변경 및 requestAnimationFrame 기반의 고정밀 타이머 루프 적용하여 UI 프레임 드랍 최소화.",
      results: "YouTube 미디어 로딩 속도 40% 개선, 저사양 기기에서도 초 단위 카운트다운이 밀리지 않고 정상 작동 확인."
    },
    evolution: {
      limitations: "서버가 없는 정적 호스팅 구조 상 유저 간 인터랙션(실시간 응원방) 구현에 기능적 제약 존재.",
      nextSprint: [
        "실제 유저 피드백 기반으로 멤버별 개별 카운트다운 필터 기능 추가",
        "링크 클릭률 분석 결과를 바탕으로 UI 배치 우선순위 재조정",
        "실시간 응원방(UGC) — Web Push 및 Server-Sent Events 연동 기능 개발 중"
      ]
    }
  },
  {
    id: "04",
    type: "WIP",
    title: "엄마의 월급 계산기",
    titleEn: "salary-calculator — Shift Work Pay Engine",
    sub: "도메인 분석 + 수식 모듈화 아키텍처",
    badges: ["React Native", "Expo", "Figma Design"],
    links: {
      github: "https://github.com/salary-calculator"
    },
    architecture: {
      diagram: `
+-------------------------------------------------------------+
|                       React Native UI                       |
|                 (Custom Shift Settings Layout)              |
+-------------------------------------------------------------+
                               |
                       Decoupled Payload
                               v
+-------------------------------------------------------------+
|                Independent Pay Calc Engine                  |
|                 (Isolated Math Pure Module)                 |
+-------------------------------------------------------------+
                               |
                        Local Persistence
                               v
+-------------------------------------------------------------+
|                   SQLite / AsyncStorage                     |
+-------------------------------------------------------------+
      `,
      deliverables: [
        "시중 계산기의 한계 분석 — 교대 근무 / 변동 주휴수당을 반영하지 못하는 구조적 문제 도출",
        "커스텀 근무 세팅 UI 레이아웃 Figma 설계 완료",
        "급여 계산 수식을 컴포넌트와 분리한 독립 급여 계산 모듈 엔진 아키텍처 설계"
      ]
    },
    troubleshooting: {
      cause: "교대 근무 패턴의 다양성(2조 2교대, 3조 2교대 등)으로 인해 정형화된 데이터 모델로는 유연한 주휴수당과 야간 가산 수당 계산 로직 구현에 한계 직면.",
      resolution: "근무 패턴을 상태 전이 기계(State Machine)로 정의하고, 일별 근무 유형(주간/야간/휴무)에 따른 수당 매핑 엔진 모듈을 컴포넌트 결합도 0%로 완벽 분리.",
      results: "계산 로직 유닛 테스트 작성이 용이해졌으며 복잡한 소수점 세금 연산 정밀도 확보."
    },
    evolution: {
      limitations: "다양한 지자체별 세율 규정 및 고용보험 등 수시로 변하는 정책을 실시간 업데이트해야 하는 모듈 관리 한계.",
      nextSprint: [
        "수식 연산 모듈의 100% 코드 커버리지를 위한 유닛 테스트 작성",
        "교대 패턴 프리셋(2조 2교대, 3조 3교대) 로컬 저장 및 커스텀 공유 기능 개발",
        "Expo EAS Build를 활용한 Google Play / App Store 배포 프로세스 셋업"
      ]
    }
  },
  {
    id: "05",
    type: "DEPLOYED",
    title: "Poke상성 도감",
    titleEn: "poke-type — Type Matchup Algorithm & Mock API",
    sub: "외부 오픈 데이터 재가공 + 상성 알고리즘 설계",
    badges: ["HTML5", "JavaScript ES6", "PokeAPI"],
    links: {
      github: "https://github.com/poke-type",
      live: "https://poke-type.netlify.app"
    },
    architecture: {
      diagram: `
+-------------------------------------------------------------+
|                      Vanilla JS / HTML5                     |
|                    Type Matchup Finder                      |
+-------------------------------------------------------------+
                               |
                         Network Fetch
                               v
+-------------------------------------------------------------+
|                           PokeAPI                           |
|                    (External REST API)                      |
+-------------------------------------------------------------+
                               |
                       Caching Mechanism
                               v
+-------------------------------------------------------------+
|                       LocalStorage                          |
|                 (Cache Hit / Offline First)                 |
+-------------------------------------------------------------+
      `,
      deliverables: [
        "PokeAPI 비동기 호출 최적화 및 로컬 스토리지 캐싱을 적용하여 네트워크 레이턴시 개선",
        "18개 속성 간의 복잡한 이중 상성 연산 매트릭스 알고리즘 설계",
        "모바일 퍼스트 반응형 레이아웃 구현 및 가독성 높은 인터페이스 제공"
      ]
    },
    troubleshooting: {
      cause: "포켓몬 데이터 쿼리 시 매번 API를 요청하여 API 레이트 리밋에 걸리거나 오프라인 환경에서 상성 조회가 불가능한 문제.",
      resolution: "한 번 조회된 포켓몬 및 타입 데이터를 로컬 스토리지에 만료일 설정과 함께 캐싱하는 Offline-First 구조 설계.",
      results: "반복적인 동일 포켓몬 조회 시 네트워크 통신 비용 0원 달성, 로딩 속도 즉시(0ms) 처리."
    },
    evolution: {
      limitations: "Vanilla JS 구조로 대규모 상태 관리를 다룰 때 DOM 조작 코드가 비대해지는 한계.",
      nextSprint: [
        "React 컴포넌트 기반으로 리팩토링 및 상태 관리 고도화",
        "다중 검색어 필터링 및 포켓몬 세부 스탯 차트 시각화 추가",
        "전역 상태 라이브러리 도입을 통한 렌더링 성능 정밀 튜닝"
      ]
    }
  }
];
