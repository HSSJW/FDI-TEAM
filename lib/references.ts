import type { Reference } from "./types";

/**
 * Fasoo · Sparrow 공식 제품·솔루션 링크 DB.
 *
 * 출처: www.fasoo.ai 전체 제품/솔루션/서비스 메뉴 직접 크롤링 결과 (2026-04-23 기준)
 * 그룹 구성:
 *   Group A  — FDI 2026 T05 세션 핵심 제품 (Wrapsody·Agents·Fireside)
 *   Group B  — AI 에이전트 솔루션
 *   Group C  — AI 보안 제품 (AI-R 시리즈·Ellm)
 *   Group D  — 데이터 인프라·관리 솔루션
 *   Group E  — 문서·정보 보안 제품 (FED·DLP·DRM)
 *   Group F  — 클라우드·기타 서비스
 *   Group G  — Sparrow 애플리케이션 보안
 *
 * keywords 선정 원칙: 사용자가 챗봇에 입력할 법한 한국어·영어 표현을 최대한 포함.
 */
export const references: Reference[] = [
  // ─────────────── Group A: 핵심 제품 ───────────────

  {
    id: "wrapsody-overview",
    title: "Wrapsody — AI 시대 문서 플랫폼",
    url: "https://www.fasoo.ai/products/wrapsody",
    description:
      "조직 내 흩어진 데이터를 연결하고 GenAI 기반 문서 활용(검색·요약·비교·보고서 생성)을 제공하는 파수의 핵심 AI 문서 플랫폼.",
    source: "fasoo",
    category: ["product", "wrapsody", "AI", "document"],
    keywords: [
      "wrapsody",
      "랩소디",
      "문서 플랫폼",
      "데이터 인프라",
      "AI 문서",
      "문서 관리",
      "자동 최신화",
      "버전 관리",
      "ACL",
      "암호화",
      "메타데이터",
      "GenAI",
      "문서 중앙화",
    ],
  },
  {
    id: "wrapsody-cloud",
    title: "Wrapsody Cloud — 클라우드 문서 중앙화 서비스",
    url: "https://www.wrapsody.com/",
    description:
      "AI 시대 필수 문서중앙화 플랫폼의 클라우드 서비스 버전. 파일 단위 ACL 관리와 협업 이력 자산화를 지원.",
    source: "fasoo",
    category: ["product", "wrapsody", "cloud", "document"],
    keywords: [
      "wrapsody",
      "랩소디",
      "클라우드",
      "문서 중앙화",
      "ACL",
      "협업",
      "SaaS",
    ],
  },
  {
    id: "wrapsody-drive",
    title: "Wrapsody Drive — 차세대 문서중앙화",
    url: "https://www.fasoo.ai/products/wrapsody-drive",
    description:
      "기존 NAS와 동일한 사용성으로 자동 암호화와 사용 이력 추적을 제공하는 AI 활용 데이터 준비 솔루션.",
    source: "fasoo",
    category: ["product", "wrapsody", "document"],
    keywords: [
      "wrapsody drive",
      "랩소디 드라이브",
      "NAS",
      "자동 암호화",
      "이력 추적",
      "문서 중앙화",
      "데이터 준비",
    ],
  },
  {
    id: "wrapsody-eco",
    title: "Wrapsody eCo — 공급망 협업 보안 플랫폼",
    url: "https://www.fasoo.ai/products/wrapsody-eco",
    description:
      "공급망 데이터 보안을 위한 데이터 중심 협업 플랫폼. 문서 공유·버전 관리·보안·화상회의 기능을 통합 제공.",
    source: "fasoo",
    category: ["product", "wrapsody", "collaboration"],
    keywords: [
      "wrapsody eco",
      "랩소디 에코",
      "공급망",
      "협업",
      "외부 공유",
      "버전 관리",
      "화상회의",
    ],
  },
  {
    id: "fireside",
    title: "Fireside — 차세대 콘텐츠 중심 보안 메신저",
    url: "https://www.fasoo.ai/products/fasoo-fireside",
    description:
      "메신저 내 웹 오피스를 통한 문서 열람·편집과 AI 챗봇 연동(문서 검색·작성·요약)을 지원하는 Wrapsody 연계 통합 허브.",
    source: "fasoo",
    category: ["product", "fireside", "messaging", "AI"],
    keywords: [
      "fireside",
      "파이어사이드",
      "보안 메신저",
      "메신저",
      "모바일",
      "AI 챗봇",
      "웹 오피스",
      "문서 열람",
      "통합 허브",
      "open api",
    ],
  },
  {
    id: "fireside-site",
    title: "Fireside 공식 사이트",
    url: "https://fireside.fasoo.ai",
    description:
      "보안과 생산성을 모두 갖춘 Fasoo 차세대 콘텐츠 중심 사내 메신저 공식 제품 사이트.",
    source: "fasoo",
    category: ["product", "fireside", "messaging"],
    keywords: [
      "fireside",
      "파이어사이드",
      "메신저",
      "사내 메신저",
      "보안 메신저",
    ],
  },

  // ─────────────── Group B: AI 에이전트 솔루션 ───────────────

  {
    id: "agent-librarian",
    title: "Enterprise Librarian — AI 지식 검색 에이전트",
    url: "https://www.fasoo.ai/solutions/enterprise-librarian-ai",
    description:
      "기업 내 방대한 문서를 문맥 단위로 이해하고 보안 권한을 반영해 키워드가 아닌 의도 기반으로 정보를 검색하는 에이전트.",
    source: "fasoo",
    category: ["solution", "AI", "agent", "librarian", "search"],
    keywords: [
      "librarian",
      "라이브러리안",
      "enterprise librarian",
      "AI 검색",
      "지식 검색",
      "시맨틱 검색",
      "메타데이터 검색",
      "의도 기반",
      "에이전트",
      "문서 탐색",
    ],
  },
  {
    id: "agent-domain-master",
    title: "Domain Knowledge Master — 도메인 전문 AI 에이전트",
    url: "https://www.fasoo.ai/solutions/domain-knowledge-master-ai",
    description:
      "조직 고유의 지식 전문가 AI. Private LLM 기반으로 특정 업무 도메인에 최적화된 빠르고 정확한 답변을 제공.",
    source: "fasoo",
    category: ["solution", "AI", "agent", "domain-master"],
    keywords: [
      "domain master",
      "도메인 마스터",
      "domain knowledge master",
      "k master",
      "전문 AI",
      "주제 한정 AI",
      "NotebookLM",
      "private LLM",
      "도메인 챗봇",
      "에이전트",
    ],
  },
  {
    id: "agent-document-writer",
    title: "Document Writer — AI 문서 작성 에이전트",
    url: "https://www.fasoo.ai/solutions/document-writer-ai",
    description:
      "기업의 보고서·기술 문서·매뉴얼 작성을 자동화하며, 조직 고유 스타일을 반영해 일관된 품질로 생성하는 AI 솔루션.",
    source: "fasoo",
    category: ["solution", "AI", "agent", "document"],
    keywords: [
      "document writer",
      "문서 작성",
      "보고서 자동화",
      "AI 작성",
      "에이전트",
      "보고서 생성",
    ],
  },
  {
    id: "agent-data-cataloger",
    title: "Data Cataloger — AI 데이터 분류 에이전트",
    url: "https://www.fasoo.ai/solutions/data-cataloger-ai",
    description:
      "문서의 의미·활용 흐름·접근 기록을 분석해 민감도와 보안 정책을 반영한 자동 분류를 수행하는 지능형 에이전트.",
    source: "fasoo",
    category: ["solution", "AI", "agent", "data", "cataloger"],
    keywords: [
      "data cataloger",
      "데이터 분류",
      "자동 분류",
      "라벨링",
      "민감도 분류",
      "AI 분류",
      "에이전트",
    ],
  },
  {
    id: "agent-content-scribe",
    title: "Content Scribe — AI 회의록 작성 에이전트",
    url: "https://www.fasoo.ai/solutions/content-scribe-ai",
    description:
      "도메인 지식을 학습한 LLM으로 한국어 음성을 인식하고 회의 맥락을 파악해 구조화된 회의록과 액션 아이템을 자동 생성.",
    source: "fasoo",
    category: ["solution", "AI", "agent"],
    keywords: [
      "content scribe",
      "회의록",
      "음성 인식",
      "회의 자동화",
      "STT",
      "에이전트",
      "AI 회의",
    ],
  },
  {
    id: "agent-code-designer",
    title: "Code Designer — AI 코딩 에이전트",
    url: "https://www.fasoo.ai/solutions/code-designer-ai",
    description:
      "사내 코드베이스·레포지토리·프레임워크를 학습해 조직 개발 환경에 특화된 맞춤형 코드를 생성하는 Private LLM 기반 에이전트.",
    source: "fasoo",
    category: ["solution", "AI", "agent", "coding"],
    keywords: [
      "code designer",
      "AI 코딩",
      "코드 생성",
      "copilot",
      "private LLM",
      "개발 지원",
      "에이전트",
    ],
  },

  // ─────────────── Group C: AI 보안 제품 ───────────────

  {
    id: "ellm",
    title: "Ellm — Fasoo Enterprise LLM",
    url: "https://www.fasoo.ai/products/fasoo-enterprise-llm",
    description:
      "온프레미스 구축형 기업용 Private sLLM. RAG 기반 아키텍처로 환각을 최소화하고 기업 데이터 기반 Agentic Application을 제공.",
    source: "fasoo",
    category: ["product", "AI", "LLM"],
    keywords: [
      "ellm",
      "enterprise LLM",
      "private LLM",
      "sLLM",
      "온프레미스 AI",
      "RAG",
      "할루시네이션",
      "환각",
      "기업 AI",
    ],
  },
  {
    id: "ai-r-dlp",
    title: "AI-R DLP — 생성형 AI 정보 유출 방지",
    url: "https://www.fasoo.ai/products/fasoo-ai-r-dlp",
    description:
      "패턴 매칭과 AI 기술로 생성형 AI 사용 시 발생하는 정보 유출을 미연에 방지하는 DLP 솔루션.",
    source: "fasoo",
    category: ["product", "AI", "security", "DLP"],
    keywords: [
      "AI-R DLP",
      "DLP",
      "정보 유출 방지",
      "생성형 AI 보안",
      "데이터 유출",
      "AI 보안",
    ],
  },
  {
    id: "ai-r-dhc",
    title: "AI-R DHC — 생성형 AI 생성정보 통제",
    url: "https://www.fasoo.ai/products/ai-r-dhc",
    description:
      "생성형 AI 출력 데이터를 사용자 권한 정책 기준에 따라 제어·관리하는 AI 생성정보 통제 솔루션.",
    source: "fasoo",
    category: ["product", "AI", "security"],
    keywords: [
      "AI-R DHC",
      "AI 출력 통제",
      "생성형 AI",
      "권한 정책",
      "AI 거버넌스",
    ],
  },
  {
    id: "ai-r-privacy",
    title: "AI-R Privacy — AI 기반 개인정보 비식별화",
    url: "https://www.fasoo.ai/products/fasoo-ai-r-privacy",
    description:
      "트랜스포머 기술과 AI OCR로 비정형 데이터에서 15가지 개인정보 유형을 자동 검출하고 마스킹 처리.",
    source: "fasoo",
    category: ["product", "AI", "privacy", "security"],
    keywords: [
      "AI-R Privacy",
      "개인정보",
      "비식별화",
      "마스킹",
      "OCR",
      "PII",
      "개인정보 보호",
      "비정형 데이터",
    ],
  },
  {
    id: "ai-r-ddr",
    title: "AI-R DDR — AI 기반 데이터 리스크 관리",
    url: "https://www.fasoo.ai/products/ai-r-data-detection-and-response",
    description:
      "LLM 기반으로 데이터 콘텐츠와 컨텍스트를 분석해 위험을 탐지·평가하고 암호화·격리로 자동 대응하는 AI DDR 솔루션.",
    source: "fasoo",
    category: ["product", "AI", "security", "DDR"],
    keywords: [
      "AI-R DDR",
      "DDR",
      "데이터 리스크",
      "자동 대응",
      "위협 탐지",
      "LLM 분석",
      "암호화",
      "AI 보안",
    ],
  },
  {
    id: "ai-r-cataloger",
    title: "AI-R Cataloger — AI 기반 데이터 분류 자동화",
    url: "https://www.fasoo.ai/products/ai-r-cataloger",
    description:
      "LLM 기반으로 문서 내용과 문맥을 분석해 자동 식별·분류·라벨링하며 FDR·Wrapsody 등과 연동.",
    source: "fasoo",
    category: ["product", "AI", "data", "cataloger"],
    keywords: [
      "AI-R Cataloger",
      "데이터 분류",
      "자동 라벨링",
      "LLM 분류",
      "문서 분류",
      "FDR 연동",
    ],
  },

  // ─────────────── Group D: 데이터 인프라·관리 솔루션 ───────────────

  {
    id: "ai-ready-data",
    title: "AI Ready 데이터 환경 구축 솔루션",
    url: "https://www.fasoo.ai/solutions/ai-ready-data-environment",
    description:
      "생성형 AI 활용을 위한 데이터 품질 확보, 보안 등급 분류, 메타데이터 관리 체계 구축을 지원하는 컨설팅 서비스.",
    source: "fasoo",
    category: ["solution", "consulting", "data", "AI"],
    keywords: [
      "AI ready",
      "데이터 환경",
      "AI 데이터 인프라",
      "메타데이터",
      "데이터 품질",
      "보안 분류",
      "Quantity",
      "Quality",
      "Security",
      "데이터 취합",
    ],
  },
  {
    id: "fasoo-data-radar",
    title: "Fasoo Data Radar (FDR) — 비정형 데이터 탐색·분류",
    url: "https://www.fasoo.ai/products/fasoo-data-radar",
    description:
      "다양한 저장소에서 개인정보 포함 중요 비정형 데이터를 식별·분류·위치 파악하고 암호화·격리 후처리를 지원.",
    source: "fasoo",
    category: ["product", "data", "security", "FDR"],
    keywords: [
      "FDR",
      "data radar",
      "비정형 데이터",
      "데이터 탐색",
      "개인정보 탐지",
      "민감 데이터",
      "자동 분류",
    ],
  },
  {
    id: "legacy-migration",
    title: "Legacy 데이터 Migration 컨설팅",
    url: "https://www.fasoo.ai/solutions/legacy-data-migration",
    description:
      "표준화되지 않은 레거시 시스템의 데이터를 정제·표준화하여 AI 시대에 맞게 신규 플랫폼으로 안전하게 이관.",
    source: "fasoo",
    category: ["solution", "consulting", "data"],
    keywords: [
      "레거시",
      "legacy",
      "데이터 이관",
      "migration",
      "데이터 정제",
      "표준화",
    ],
  },
  {
    id: "rot-reduction",
    title: "ROT 데이터 Reduction — 불필요 데이터 최소화",
    url: "https://www.fasoo.ai/solutions/rot-data-reduction",
    description:
      "기업 저장소의 중복·오래된·불필요한(ROT) 데이터를 정책 기반으로 분류하고 단계적으로 최소화하는 컨설팅.",
    source: "fasoo",
    category: ["solution", "consulting", "data"],
    keywords: [
      "ROT",
      "중복 데이터",
      "오래된 데이터",
      "불필요 데이터",
      "데이터 정리",
      "폐기",
      "lifecycle",
    ],
  },
  {
    id: "rot-management",
    title: "ROT 데이터 관리 솔루션",
    url: "https://www.fasoo.ai/solutions/rot-data-management",
    description:
      "중복·오래된·불필요한 비정형 데이터를 식별하고 문서가상화 기술로 AI 활용 데이터 품질 저하와 컴플라이언스 위험을 해결.",
    source: "fasoo",
    category: ["solution", "data"],
    keywords: [
      "ROT 관리",
      "데이터 품질",
      "비정형 데이터",
      "문서 가상화",
      "컴플라이언스",
    ],
  },
  {
    id: "metadata-platform",
    title: "비정형 데이터 메타데이터 플랫폼",
    url: "https://www.fasoo.ai/solutions/unified-data-usage-log-infrastructure",
    description:
      "흩어진 비정형 데이터를 중앙에서 일관되게 관리하며 생성부터 활용까지 메타데이터와 데이터 리니지를 추적하는 인프라.",
    source: "fasoo",
    category: ["solution", "data", "infrastructure"],
    keywords: [
      "메타데이터",
      "metadata",
      "데이터 리니지",
      "비정형 데이터",
      "통합 로그",
      "이력 추적",
      "인프라",
    ],
  },
  {
    id: "next-gen-ecm",
    title: "차세대 문서중앙화 (Next-Gen ECM)",
    url: "https://www.fasoo.ai/solutions/the-next-gen-ecm",
    description:
      "Wrapsody와 FDR을 통해 PC·이메일·파일 서버 등 분산된 모든 문서를 SSOT 체계로 중앙화하고 ROT를 최소화.",
    source: "fasoo",
    category: ["solution", "document", "data"],
    keywords: [
      "문서 중앙화",
      "ECM",
      "SSOT",
      "통합 관리",
      "분산 데이터",
      "Wrapsody",
      "FDR",
    ],
  },
  {
    id: "ssot-master-db",
    title: "SSOT를 위한 Master DB 구축",
    url: "https://www.fasoo.ai/solutions/master-db-for-ssot",
    description:
      "AI 활용을 위한 단일 기준 데이터 수립. 조직 내 분산 데이터를 SSOT(단일 진실의 원천) 체계로 통합 관리.",
    source: "fasoo",
    category: ["solution", "data", "infrastructure"],
    keywords: [
      "SSOT",
      "master db",
      "데이터 통합",
      "단일 기준",
      "AI 인프라",
      "데이터 거버넌스",
    ],
  },
  {
    id: "virtual-data-infrastructure",
    title: "데이터 인프라 가상화",
    url: "https://www.fasoo.ai/solutions/virtual-data-infrastructure",
    description:
      "물리적 위치와 무관하게 메타정보를 지속적으로 관리하는 가상화된 데이터 인프라. AI 시대 문서 자산화 전략.",
    source: "fasoo",
    category: ["solution", "data", "infrastructure"],
    keywords: [
      "데이터 인프라",
      "가상화",
      "메타정보",
      "문서 자산화",
      "AI 인프라",
    ],
  },
  {
    id: "doc-process-innovation",
    title: "문서 기반 업무 프로세스 혁신",
    url: "https://www.fasoo.ai/solutions/document-centric-business-process-innovation",
    description:
      "조직의 모든 업무를 문서 중심으로 체계화하여 문서 전 생애주기를 추적·관리하고 지식관리를 구조화하는 컨설팅.",
    source: "fasoo",
    category: ["solution", "consulting", "document"],
    keywords: [
      "문서 중심",
      "업무 혁신",
      "생애주기",
      "지식관리",
      "프로세스",
      "문서 관리",
    ],
  },
  {
    id: "data-centric-approval",
    title: "데이터 중심 전자결재",
    url: "https://www.fasoo.ai/solutions/data-centric-approval-workflow",
    description:
      "Wrapsody와 Fireside로 별도 결재 시스템 없이도 일반 문서를 결재 서류로 상신하고 실시간 알림·이력 추적을 지원.",
    source: "fasoo",
    category: ["solution", "document", "workflow"],
    keywords: [
      "전자결재",
      "결재",
      "workflow",
      "Wrapsody",
      "Fireside",
      "문서 결재",
    ],
  },
  {
    id: "film",
    title: "FILM — Fasoo 통합 로그 관리",
    url: "https://www.fasoo.ai/products/fasoo-integrated-log-manager",
    description:
      "문서 최초 생성부터 폐기까지 모든 사용 이력을 추적하는 MLB 기술 기반 통합 로그 관리 솔루션.",
    source: "fasoo",
    category: ["product", "data", "log", "security"],
    keywords: [
      "FILM",
      "통합 로그",
      "이력 추적",
      "감사 추적",
      "audit",
      "생애주기",
      "로그 관리",
    ],
  },
  {
    id: "fc-br",
    title: "FC-BR — 문서 백업 및 복구",
    url: "https://www.fasoo.ai/products/fasoo-content-backup-and-recovery",
    description:
      "문서 편집 종료 시마다 실시간 자동 백업. 랜섬웨어 등 사이버 공격 및 데이터 손실 시 One-Click 복구 지원.",
    source: "fasoo",
    category: ["product", "data", "backup", "security"],
    keywords: [
      "FC-BR",
      "백업",
      "복구",
      "랜섬웨어",
      "데이터 손실",
      "자동 백업",
      "One-Click",
    ],
  },

  // ─────────────── Group E: 문서·정보 보안 제품 ───────────────

  {
    id: "fed",
    title: "FED — Fasoo Enterprise DRM",
    url: "https://www.fasoo.ai/products/fasoo-enterprise-drm",
    description:
      "데이터 자체를 지속적으로 암호화하고 권한을 통제하는 제로 트러스트 기반 통합 문서보안 DRM 솔루션.",
    source: "fasoo",
    category: ["product", "security", "DRM", "FED"],
    keywords: [
      "FED",
      "DRM",
      "문서 보안",
      "암호화",
      "접근 통제",
      "제로 트러스트",
      "권한 관리",
      "ACL",
    ],
  },
  {
    id: "fed-n",
    title: "FED-N — PC 문서 보안",
    url: "https://en.fasoo.ai/products/fasoo-enterprise-drm-for-node/",
    description:
      "Office·PDF·이미지·CAD 등 다양한 형식을 자동 암호화하고 세분화된 접근 제어를 적용하는 PC 문서 보안 솔루션.",
    source: "fasoo",
    category: ["product", "security", "DRM", "FED"],
    keywords: [
      "FED-N",
      "PC 보안",
      "문서 암호화",
      "CAD",
      "PDF 보안",
      "Office 보안",
    ],
  },
  {
    id: "fed-m",
    title: "FED-M — 모바일 문서 보안",
    url: "https://www.fasoo.ai/products/fasoo-enterprise-drm-for-mobile",
    description:
      "BYOD 환경에 최적화된 모바일 문서 보안. 자동 암호화·스크린 워터마크·화면 캡처 제어를 제공.",
    source: "fasoo",
    category: ["product", "security", "DRM", "FED", "mobile"],
    keywords: [
      "FED-M",
      "모바일 보안",
      "BYOD",
      "스크린 워터마크",
      "캡처 차단",
      "모바일 DRM",
    ],
  },
  {
    id: "fed-e",
    title: "FED-E — 외부 공유 문서 보안",
    url: "https://en.fasoo.ai/products/fasoo-enterprise-drm-for-external/",
    description:
      "이메일·클라우드·FTP를 통해 외부로 공유되는 파일을 암호화하고, 배포 후에도 즉시 접근 권한 회수 가능.",
    source: "fasoo",
    category: ["product", "security", "DRM", "FED"],
    keywords: [
      "FED-E",
      "외부 공유",
      "권한 회수",
      "이메일 보안",
      "외부 협업 보안",
      "DRM",
    ],
  },
  {
    id: "fxm",
    title: "FXM — Fasoo 보안 예외 관리",
    url: "https://en.fasoo.ai/products/fasoo-exception-management/",
    description:
      "모든 Fasoo 솔루션의 보안 예외를 단일 인터페이스에서 관리. 임시 권한 부여와 포괄적 감사 추적 지원.",
    source: "fasoo",
    category: ["product", "security", "DRM", "policy"],
    keywords: ["FXM", "예외 관리", "임시 권한", "보안 정책", "감사 추적"],
  },
  {
    id: "fasoo-dspm",
    title: "Fasoo DSPM — 클라우드 데이터 보안 태세 관리",
    url: "https://www.fasoo.ai/products/fasoo-dspm",
    description:
      "멀티·하이브리드 클라우드 환경에서 민감정보 자동 검출 및 GDPR·개인정보보호법 등 컴플라이언스 준수 지원.",
    source: "fasoo",
    category: ["product", "data", "security", "DSPM", "cloud"],
    keywords: [
      "DSPM",
      "클라우드 보안",
      "데이터 보안 태세",
      "GDPR",
      "HIPAA",
      "개인정보보호법",
      "컴플라이언스",
      "멀티 클라우드",
    ],
  },
  {
    id: "fss",
    title: "FSS — Fasoo 화면 보안 (스크린 워터마크)",
    url: "https://www.fasoo.ai/products/fasoo-smart-screen",
    description:
      "비저블/인비저블 스크린 워터마크와 캡처 차단으로 화면 촬영을 통한 정보 유출을 방지하는 화면 보안 솔루션.",
    source: "fasoo",
    category: ["product", "security", "screen"],
    keywords: [
      "FSS",
      "화면 보안",
      "스크린 워터마크",
      "캡처 차단",
      "워터마크",
      "화면 촬영",
    ],
  },
  {
    id: "fsp",
    title: "FSP — Fasoo 인쇄 보안",
    url: "https://www.fasoo.ai/products/fasoo-smart-print",
    description:
      "워터마크 삽입·인쇄 이력 추적·개인정보 마스킹으로 출력물 인쇄 및 유통 과정의 정보 유출을 방지.",
    source: "fasoo",
    category: ["product", "security", "print"],
    keywords: ["FSP", "인쇄 보안", "출력 보안", "워터마크", "인쇄 이력"],
  },
  {
    id: "fsw",
    title: "FSW — Fasoo 웹 보안",
    url: "https://www.fasoo.ai/products/fasoo-secure-web",
    description:
      "웹 페이지의 중요 정보에 대한 복사·저장·인쇄·화면 캡처를 차단하여 웹 콘텐츠 불법 유통을 방지.",
    source: "fasoo",
    category: ["product", "security", "web"],
    keywords: ["FSW", "웹 보안", "복사 차단", "웹 DRM", "화면 캡처 차단"],
  },
  {
    id: "fcb",
    title: "FCB — Fasoo Cloud Bridge (M365 보안)",
    url: "https://www.fasoo.ai/products/fasoo-cloud-bridge",
    description:
      "Microsoft 365 등 클라우드 환경에서 온프레미스 보안 정책과 권한을 동일하게 적용하는 클라우드 문서 보안 솔루션.",
    source: "fasoo",
    category: ["product", "security", "cloud"],
    keywords: [
      "FCB",
      "M365",
      "Microsoft 365",
      "클라우드 보안",
      "온프레미스",
      "정책 연동",
    ],
  },
  {
    id: "fsm",
    title: "FSM — Fasoo 메일 보안 (Secure Mail)",
    url: "https://www.fasoo.ai/products/fasoo-secure-mail",
    description:
      "암호화된 문서의 복호화 신청·승인 절차를 간소화하고, 메일 서버에 복호화 문서를 저장하지 않아 보안을 강화.",
    source: "fasoo",
    category: ["product", "security", "mail", "DLP"],
    keywords: [
      "FSM",
      "메일 보안",
      "이메일 보안",
      "DLP",
      "복호화",
      "메일 DRM",
    ],
  },
  {
    id: "frv",
    title: "FRV — Fasoo RiskView (이상행위 탐지)",
    url: "https://www.fasoo.ai/products/fasoo-riskview",
    description:
      "사용자 로그 데이터를 학습해 실시간으로 이상 패턴을 감지하는 데이터 탐지 및 대응(DDR) 솔루션.",
    source: "fasoo",
    category: ["product", "security", "DDR", "monitoring"],
    keywords: [
      "FRV",
      "RiskView",
      "이상행위",
      "UEBA",
      "DDR",
      "위협 탐지",
      "실시간 모니터링",
    ],
  },
  {
    id: "analyticdid",
    title: "AnalyticDID — 빅데이터 비식별화",
    url: "https://www.fasoo.ai/products/analyticdid",
    description:
      "빅데이터 분석 과정에서 재식별 위험 없이 안전하게 개인정보를 가명·익명 처리. GDPR·개인정보보호법 충족.",
    source: "fasoo",
    category: ["product", "data", "privacy", "anonymization"],
    keywords: [
      "ADID",
      "비식별화",
      "가명화",
      "익명화",
      "빅데이터",
      "GDPR",
      "개인정보",
      "anonymization",
    ],
  },
  {
    id: "fasoo-crypto",
    title: "Fasoo Crypto — 암호화 모듈",
    url: "https://www.fasoo.ai/products/fasoo-crypto",
    description:
      "국정원 KCMVP 인증을 받은 검증된 암호화 모듈. 파일 및 전송 구간 암호화·키 관리·전자서명 지원.",
    source: "fasoo",
    category: ["product", "security", "crypto", "encryption"],
    keywords: [
      "Fasoo Crypto",
      "암호화",
      "KCMVP",
      "키 관리",
      "전자서명",
      "encryption",
    ],
  },
  {
    id: "data-security-platform",
    title: "Fasoo Data Security Platform",
    url: "https://www.fasoo.ai/solutions/fasoo-data-security-platform",
    description:
      "파편화된 보안 구조를 통합하고 데이터 중심으로 일관된 정책과 통합 대응을 지원하는 차세대 보안 플랫폼.",
    source: "fasoo",
    category: ["solution", "security", "platform"],
    keywords: [
      "데이터 보안 플랫폼",
      "통합 보안",
      "보안 정책",
      "데이터 중심 보안",
    ],
  },
  {
    id: "data-security-framework",
    title: "Fasoo Data Security Framework",
    url: "https://www.fasoo.ai/solutions/fasoo-data-security-framework",
    description:
      "제로 트러스트 전략 기반으로 사용자 중심의 유연한 정책 적용과 다중 레이어 보안 아키텍처를 제공.",
    source: "fasoo",
    category: ["solution", "security", "framework"],
    keywords: [
      "제로 트러스트",
      "보안 프레임워크",
      "다중 레이어",
      "보안 아키텍처",
      "Zero Trust",
    ],
  },

  // ─────────────── Group F: 클라우드·기타 서비스 ───────────────

  {
    id: "fasoo-dsp-cloud",
    title: "Fasoo DSP Cloud — 통합 보안 클라우드 서비스",
    url: "https://www.fasoo.ai/cloud/fasoo-dsp-cloud",
    description:
      "문서 보안·화면 보안·출력물 보안·데이터 백업·개인정보 검출 등 데이터 보안 전 과정을 제공하는 클라우드 통합 솔루션.",
    source: "fasoo",
    category: ["product", "cloud", "security"],
    keywords: ["DSP Cloud", "클라우드 보안", "SaaS", "통합 보안", "클라우드"],
  },
  {
    id: "fasooblock",
    title: "FasooBlock — 블록체인 전자문서 플랫폼",
    url: "https://www.fasoo.ai/cloud/fasooblock",
    description:
      "파일 해시값을 블록체인에 저장하여 진본 증명·시점 확인·위변조 불가능성을 보장하는 전자문서 활용 플랫폼.",
    source: "fasoo",
    category: ["product", "cloud", "blockchain"],
    keywords: [
      "FasooBlock",
      "블록체인",
      "전자문서",
      "진본 증명",
      "위변조",
      "blockchain",
    ],
  },
  {
    id: "consulting-ai",
    title: "AI 통합 컨설팅 서비스",
    url: "https://www.fasoo.ai/ai-consulting",
    description:
      "AI 전략 수립부터 솔루션 설계·구축·운영 최적화까지 AI 라이프사이클 전 주기를 지원하는 통합 컨설팅 서비스.",
    source: "fasoo",
    category: ["service", "consulting", "AI"],
    keywords: [
      "AI 컨설팅",
      "AI 전략",
      "AI 도입",
      "AI 운영",
      "컨설팅",
      "관리 서비스",
    ],
  },
  {
    id: "consulting-isms",
    title: "정보보호 컨설팅 (ISMS/ISO27001/PIMS)",
    url: "https://www.fasoo.ai/services/information-security-consulting",
    description:
      "ISMS·PIMS·ISMS-P·ISO27001 인증 획득을 지원하는 종합 정보보안 컨설팅. ISMS 심사원 자격 전문가가 80여 항목 평가.",
    source: "fasoo",
    category: ["service", "consulting", "security"],
    keywords: [
      "ISMS",
      "ISO27001",
      "PIMS",
      "정보보호 인증",
      "보안 컨설팅",
      "인증 획득",
    ],
  },
  {
    id: "consulting-iso42001",
    title: "ISO42001/AIMS — AI 경영시스템 인증 컨설팅",
    url: "https://www.fasoo.ai/services/iso42001-aims",
    description:
      "세계 최초 AI 경영시스템 국제표준(ISO/IEC 42001) 인증 획득을 지원하는 전문 컨설팅 서비스.",
    source: "fasoo",
    category: ["service", "consulting", "AI", "certification"],
    keywords: [
      "ISO42001",
      "AIMS",
      "AI 거버넌스",
      "AI 경영시스템",
      "인증",
      "AI 표준",
    ],
  },
  {
    id: "mind-sat",
    title: "Mind-SAT — 보안 인식 훈련 (SAT)",
    url: "https://mind-sat.com/kr/",
    description:
      "반복적인 모의 악성메일 훈련과 보안 교육으로 임직원 보안 의식을 강화하는 통합 보안 인식 훈련 서비스.",
    source: "fasoo",
    category: ["product", "security", "training", "cloud"],
    keywords: [
      "Mind-SAT",
      "SAT",
      "보안 교육",
      "피싱",
      "악성 메일",
      "보안 인식",
      "임직원 교육",
    ],
  },
  {
    id: "fdi-go",
    title: "FDI go — 고객 맞춤형 지식공유 세미나",
    url: "https://www.fasoo.ai/fdi-go-overview",
    description:
      "파수 AI 전문 컨설턴트가 직접 방문해 GenAI 보안·AI 거버넌스 등 20여 개 주제의 맞춤형 세미나를 제공.",
    source: "fasoo",
    category: ["service", "seminar", "consulting"],
    keywords: [
      "FDI go",
      "세미나",
      "FDI",
      "지식공유",
      "GenAI 보안",
      "AI 거버넌스",
      "컨설팅",
    ],
  },

  // ─────────────── Group G: Sparrow 애플리케이션 보안 ───────────────

  {
    id: "sparrow-enterprise",
    title: "Sparrow Enterprise — 통합 애플리케이션 보안",
    url: "https://sparrow.im/kr/product/sparrow-enterprise/",
    description:
      "소스코드(SAST)·오픈소스(SCA)·웹 취약점(DAST)을 통합 분석하고 AI 기반 취약점 수정 우선순위를 제안하는 DevSecOps 솔루션.",
    source: "sparrow",
    category: ["product", "security", "sparrow", "application-security"],
    keywords: [
      "Sparrow",
      "SAST",
      "SCA",
      "DAST",
      "취약점 분석",
      "소스코드 보안",
      "오픈소스",
      "DevSecOps",
    ],
  },
  {
    id: "sparrow-cloud",
    title: "Sparrow Cloud — 클라우드 보안 진단 플랫폼",
    url: "https://sparrowcloud.ai/kr/",
    description:
      "소스 코드·오픈소스·웹 취약점을 즉시 진단하는 통합 보안 진단 플랫폼. Sparrow Code AI·Open Source·Web App 포함.",
    source: "sparrow",
    category: ["product", "security", "sparrow", "cloud"],
    keywords: [
      "Sparrow Cloud",
      "클라우드 보안 진단",
      "SAST",
      "SCA",
      "취약점",
      "AI 코드 분석",
    ],
  },
  {
    id: "sparrow-on-demand",
    title: "Sparrow On-Demand — 보안 분석 API 서비스",
    url: "https://sparrow.im/kr/product/sparrow-on-demand/",
    description:
      "스패로우 취약점 분석 엔진을 API로 연동하는 서비스. SAST·DAST·SCA 등 DevSecOps 구현을 클라우드로 제공.",
    source: "sparrow",
    category: ["product", "security", "sparrow", "API"],
    keywords: [
      "Sparrow On-Demand",
      "보안 API",
      "취약점 API",
      "DevSecOps",
      "클라우드 분석",
    ],
  },
];

/**
 * 간단한 키워드 스코어 기반 매칭.
 * - keywords 매치: +3점
 * - title 매치: +2점
 * - description/내용 매치: +1점
 * - Fasoo/Sparrow 공식 자료는 가산점 +1점
 */
export function findMatchingReferences(
  query: string,
  maxResults: number,
): Reference[] {
  if (!query) return [];
  const q = query.toLowerCase();
  const tokens = q.split(/[\s,./]+/).filter(Boolean);
  if (tokens.length === 0) return [];

  const scored = references.map((r) => {
    let score = 0;
    const hay = (
      r.title +
      " " +
      r.description +
      " " +
      r.keywords.join(" ")
    ).toLowerCase();
    for (const t of tokens) {
      if (r.keywords.some((k) => k.toLowerCase().includes(t))) score += 3;
      if (r.title.toLowerCase().includes(t)) score += 2;
      else if (hay.includes(t)) score += 1;
    }
    if (r.source === "fasoo" || r.source === "sparrow") score += 1;
    return { r, score };
  });

  return scored
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, maxResults)
    .map(({ r }) => r);
}
