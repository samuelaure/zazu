# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [1.9.0](https://github.com/samuelaure/zazu/compare/v1.8.0...v1.9.0) (2026-04-20)


### Features

* **bot:** implement in-memory brand context caching and selection logic ([eb7d707](https://github.com/samuelaure/zazu/commit/eb7d707d789a45e10b7baab36e09194234653191))
* **db:** fresh init migration ([00448d9](https://github.com/samuelaure/zazu/commit/00448d9e87c5a163c69606543c9fac34b01d352b))
* **ui:** implement workspace and brand context panel for dashboard ([d475702](https://github.com/samuelaure/zazu/commit/d475702b15aeeb58e20c0996a4748802bf67c44a))

## [1.8.0](https://github.com/samuelaure/zazu/compare/v1.7.2...v1.8.0) (2026-04-19)


### Features

* **infra:** add nau_api_url and inject openai_api_key into bot ([7760c8d](https://github.com/samuelaure/zazu/commit/7760c8d586188f3635172caa6f244797395b8c3f))

### [1.7.2](https://github.com/samuelaure/zazu/compare/v1.7.1...v1.7.2) (2026-04-19)


### Features

* **dashboard:** pass initData in callback URL for cross-domain redirect resilience ([6a2dd2f](https://github.com/samuelaure/zazu/commit/6a2dd2f45aa44732900cca607ef38cecf4130d5b))

### [1.7.1](https://github.com/samuelaure/zazu/compare/v1.7.0...v1.7.1) (2026-04-19)


### Features

* **dashboard:** improve Telegram linking reliability with initData fallback and re-login flow ([0c72a0e](https://github.com/samuelaure/zazu/commit/0c72a0e5df82de9df694debeadbeb329a934348f))

## [1.7.0](https://github.com/samuelaure/zazu/compare/v1.6.0...v1.7.0) (2026-04-19)


### Features

* **dashboard:** implement session re-sync after account linking ([b99f64d](https://github.com/samuelaure/zazu/commit/b99f64dd94a2a00bb5e70c1e054cac43a6b28456))

### [1.5.6](https://github.com/samuelaure/zazu/compare/v1.5.5...v1.5.6) (2026-04-18)

### [1.5.5](https://github.com/samuelaure/zazu/compare/v1.5.4...v1.5.5) (2026-04-18)

### [1.5.4](https://github.com/samuelaure/zazu/compare/v1.5.3...v1.5.4) (2026-04-18)

### [1.5.3](https://github.com/samuelaure/zazu/compare/v1.5.2...v1.5.3) (2026-04-18)


### Bug Fixes

* **bot:** resolve Telegram ID to internal UUID and create placeholder user to fix FK error in notify endpoint ([21184c7](https://github.com/samuelaure/zazu/commit/21184c7566deed792fa25d06b24990c5713d77d6))

### [1.5.1](https://github.com/samuelaure/zazu/compare/v1.5.0...v1.5.1) (2026-04-10)


### Bug Fixes

* **bot:** correct telegraf inline keyboard typing ([765c7c2](https://github.com/samuelaure/zazu/commit/765c7c246e0949a33ffa8902d6aa1c2cb3b404c2))

## [1.5.0](https://github.com/samuelaure/zazu/compare/v1.4.0...v1.5.0) (2026-04-09)


### Features

* **auth:** implement secure telegram mini app auto-login with hmac verification ([93acf9d](https://github.com/samuelaure/zazu/commit/93acf9d80c421d359f3d14f4796ab513dbd4b0e8))
* **bot:** implement immediate delivery and enhanced suggestion buttons ([413fb9e](https://github.com/samuelaure/zazu/commit/413fb9e13243f8d928c72a33b462d28aab0caea2))
* **bot:** implement suggestion selection feedback loop ([f36e388](https://github.com/samuelaure/zazu/commit/f36e3889f5b43501ae4a77bbee83d76edbb9f57a))
* **dashboard:** add back navigation from brands to root hub ([fda0873](https://github.com/samuelaure/zazu/commit/fda08731cfd523cf46d063a87d3bafcdd3e18322))
* **dashboard:** add premium comment edit page ([83f560b](https://github.com/samuelaure/zazu/commit/83f560bd98c2f856a993a039b128564da5968337))
* **dashboard:** admin vs user view toggle and responsive UI implementation ([75edb1f](https://github.com/samuelaure/zazu/commit/75edb1f1b340d31a28781c55ec50096a476331ab))
* **mini-app:** rewrite brand management UI with full comment suggester fields ([4d6d799](https://github.com/samuelaure/zazu/commit/4d6d79934b5b6ca7ba3631b70b694b40eaabdf53))
* **telegram:** inject mini app button into menu and /start command ([9da6a7c](https://github.com/samuelaure/zazu/commit/9da6a7c3f69791925e4397f6dab65708654613f5))


### Bug Fixes

* add @twa-dev/sdk to deps and write .env from secrets in GHA ([1a60e8f](https://github.com/samuelaure/zazu/commit/1a60e8f919e6118b462d241ec8e5bc1c9f11b360))
* **api:** align dashboard actions with nauthenticity api prefix ([2a246e9](https://github.com/samuelaure/zazu/commit/2a246e949702c7ff91a89aed803e2080a59a3131))
* **auth:** add SessionProvider to root layout to resolve useSession error ([1f87833](https://github.com/samuelaure/zazu/commit/1f878331e748bbf81f0cb32c4f1c6e8b9ce278e4))
* **bot:** point mini app url to root dashboard instead of brands list ([efc4bbf](https://github.com/samuelaure/zazu/commit/efc4bbf88952fececbc1f1aacc3392616a8fca86))
* **dashboard:** pass ADMIN_TELEGRAM_ID to container and overhaul brands UI aesthetics ([cecf7ed](https://github.com/samuelaure/zazu/commit/cecf7edd42110706404861f9264680d951a2d3bb))
* **infra:** rename bot container to zazu and add bot domain env ([ec72abb](https://github.com/samuelaure/zazu/commit/ec72abb3204439d1611a6a836901fc7218077af8))
* **orchestration:** restore dashboard actions, fix TG provider SSR, add GHCR docker login ([b23b084](https://github.com/samuelaure/zazu/commit/b23b084040f8d32754cd0f1336a021cb7f72b89a))
* **orchestration:** strip CRLF characters in .env generation to prevent secrets corruption ([25c60f9](https://github.com/samuelaure/zazu/commit/25c60f9e3c96fd730a0ed32856ecf69c112569a5))
* remove BrandManagerSkill import from bot nucleus ([9fb7a11](https://github.com/samuelaure/zazu/commit/9fb7a112d6f75866ca66eb3d95178d44c43abd8f))

## [1.4.0](https://github.com/samuelaure/zazu/compare/v1.2.0...v1.4.0) (2026-04-08)


### Features

* **bot:** add internal notification endpoint for cross-app orchestration ([9aecf14](https://github.com/samuelaure/zazu/commit/9aecf1436c3c1fc38119d17b8fb332cc0f37a0fc))
* **bot:** implement SkillManager orchestrator ([2eb6c76](https://github.com/samuelaure/zazu/commit/2eb6c7640fba4911f5b54e90997dc781f6829f02))
* **core-voice:** implement native whisper transcription and pre-processor ([8e5df26](https://github.com/samuelaure/zazu/commit/8e5df262b939c5f102db973bed7f935e383e1cc7))
* **core:** bootstrap @zazu/skills-core package ([e946e32](https://github.com/samuelaure/zazu/commit/e946e3247e3d5b4526b216302d5e0fde244ff986))
* **dashboard:** implement telegram mini app with brand management ([53273e0](https://github.com/samuelaure/zazu/commit/53273e033da75dfcf7f409c230c283bb74bb0c25))
* **db:** add CommentSuggester model for proactive monitoring ([7ea8b47](https://github.com/samuelaure/zazu/commit/7ea8b479f9d5107c3aa80a3772cf130c28d17c0b))
* **db:** add ProcessedPost model for duplicate prevention ([4718273](https://github.com/samuelaure/zazu/commit/4718273a984c9b2e02a0ff4a22f5e3f367f87067))
* **delivery:** create delivery window queue and express gateway ([69bd5bc](https://github.com/samuelaure/zazu/commit/69bd5bce42a2a6eac7057f2109fbd4ad5231a977))
* **skill-chat:** implement ConversationalSkill fallback ([d30a71a](https://github.com/samuelaure/zazu/commit/d30a71a5708b227ecaae4966dafc1dc639cab3d5))
* **skill-suggester:** implement brand monitoring and AI comment logic ([02b0310](https://github.com/samuelaure/zazu/commit/02b03109f0e4ae1e715c7f5b016bddd3cf10e483))
* **worker:** bootstrap and implement proactive scheduler engine ([58e3f9d](https://github.com/samuelaure/zazu/commit/58e3f9df22c2449531c71bf2c92532596f0078a8))

## [1.3.0](https://github.com/samuelaure/zazu/compare/v1.2.0...v1.3.0) (2026-04-07)


### Features

* **bot:** add internal notification endpoint for cross-app orchestration ([9aecf14](https://github.com/samuelaure/zazu/commit/9aecf1436c3c1fc38119d17b8fb332cc0f37a0fc))
* **bot:** implement SkillManager orchestrator ([2eb6c76](https://github.com/samuelaure/zazu/commit/2eb6c7640fba4911f5b54e90997dc781f6829f02))
* **core-voice:** implement native whisper transcription and pre-processor ([8e5df26](https://github.com/samuelaure/zazu/commit/8e5df262b939c5f102db973bed7f935e383e1cc7))
* **core:** bootstrap @zazu/skills-core package ([e946e32](https://github.com/samuelaure/zazu/commit/e946e3247e3d5b4526b216302d5e0fde244ff986))
* **db:** add CommentSuggester model for proactive monitoring ([7ea8b47](https://github.com/samuelaure/zazu/commit/7ea8b479f9d5107c3aa80a3772cf130c28d17c0b))
* **db:** add ProcessedPost model for duplicate prevention ([4718273](https://github.com/samuelaure/zazu/commit/4718273a984c9b2e02a0ff4a22f5e3f367f87067))
* **delivery:** create delivery window queue and express gateway ([69bd5bc](https://github.com/samuelaure/zazu/commit/69bd5bce42a2a6eac7057f2109fbd4ad5231a977))
* **skill-chat:** implement ConversationalSkill fallback ([d30a71a](https://github.com/samuelaure/zazu/commit/d30a71a5708b227ecaae4966dafc1dc639cab3d5))
* **skill-suggester:** implement brand monitoring and AI comment logic ([02b0310](https://github.com/samuelaure/zazu/commit/02b03109f0e4ae1e715c7f5b016bddd3cf10e483))
* **worker:** bootstrap and implement proactive scheduler engine ([58e3f9d](https://github.com/samuelaure/zazu/commit/58e3f9df22c2449531c71bf2c92532596f0078a8))

## 1.2.0 (2026-03-23)


### Features

* **bot:** add dotenv and fix startup initialization ([a7f69f8](https://github.com/samuelaure/zazu/commit/a7f69f8ea52c5bf01c95cf434c562a6315b5329a))
* **bot:** implement conversational LLM service for Spanish fallback ([1ee7bf1](https://github.com/samuelaure/zazu/commit/1ee7bf1341fb0d8515faf6b7164fb22099675a58))
* **bot:** implement message persistence middleware ([89a71c2](https://github.com/samuelaure/zazu/commit/89a71c2f334cae748020f817761c19ffd9ff3ec8))
* **bot:** implement Spanish onboarding and main entrance ([57d7a36](https://github.com/samuelaure/zazu/commit/57d7a36e8e9b62246638e8723d280ec4cd3071a3))
* complete project architecture scaffolding ([62e03b3](https://github.com/samuelaure/zazu/commit/62e03b36da43791da762dbd0366eb999f3b2277c))
* **dashboard/auth:** implement secure Auth.js credentials layer ([7fb3471](https://github.com/samuelaure/zazu/commit/7fb3471c3e7d9f3b977a4aadf1e76f27e845cc20))
* **dashboard/logic:** implement live chat management and core actions ([e875641](https://github.com/samuelaure/zazu/commit/e8756419a87f79cac748e82bf686d831277f6c38))
* **dashboard/ui:** implement 'Nuclear Glassmorphism' design system ([bc43299](https://github.com/samuelaure/zazu/commit/bc43299cad5ef464e028494688a8a108bc206f75))
* **db:** implement prisma client singleton and export types ([41bc70a](https://github.com/samuelaure/zazu/commit/41bc70ab2cf1c2e40b9a71a9c06d79221bb9db0c))
* **infra:** implement multi-stage bot dockerfile ([218264a](https://github.com/samuelaure/zazu/commit/218264aeb79621d91722e56a3598fbea2d9b7033))
* **infra:** integrate traefik and networking into docker-compose ([ea18e6e](https://github.com/samuelaure/zazu/commit/ea18e6eb6a4f16fb919a73fd965bce39ce3f676c))
* scaffold base configurations ([560a1b9](https://github.com/samuelaure/zazu/commit/560a1b92fb2c87465c1f32cd70b0c8b0463f1c92))
* **ui:** update date format to DD/MM/AAAA and display usernames ([54ed653](https://github.com/samuelaure/zazu/commit/54ed6533f0fb71e8517a39d3ea4584112855ea39))


### Bug Fixes

* **dashboard:** clean up unused vars and enforce build ignore rules for stability ([ff6ab1b](https://github.com/samuelaure/zazu/commit/ff6ab1b1b9332969a5bd5f9d894b224f916b2711))
* **dashboard:** downgrade to Next.js 15 stable and fix standalone root build ([935a811](https://github.com/samuelaure/zazu/commit/935a8113256f546baed73cee61a415de107b27d1))
* **dashboard:** exclude static assets from middleware protection to resolve JS load errors ([35bb6ab](https://github.com/samuelaure/zazu/commit/35bb6ab3a1fe20b479359f658677cde3257ffbaf))
* **dashboard:** force dynamic rendering to skip build-time DB pre-rendering ([dbb6f8b](https://github.com/samuelaure/zazu/commit/dbb6f8b5fe06cdb1097049ca114db81d9ba8f098))
* **dashboard:** inject dummy env in build stage to bypass Auth.js validation ([3eb3e95](https://github.com/samuelaure/zazu/commit/3eb3e9571373ef1090ce1d641a2f4cb747a4de62))
* **dashboard:** serialize BigInt to string in server actions ([0826b0e](https://github.com/samuelaure/zazu/commit/0826b0e13a1559dedfae68628d631a34f75d072e))
* **dashboard:** skip build time type checking ([9e56bca](https://github.com/samuelaure/zazu/commit/9e56bca1325a1e1a381db66d18417b0cb5300548))
* **db:** correct UserFeature business logic in server actions ([ff4fccb](https://github.com/samuelaure/zazu/commit/ff4fccbbef155e9e8d5b7c921a8e8bf258019a73))
* **infra:** configure production standalone deployment for dashboard ([300f712](https://github.com/samuelaure/zazu/commit/300f7122234c599454f2f3664ceacb90434eeab9))
* **infra:** correct static assets mapping in standalone monorepo ([8146856](https://github.com/samuelaure/zazu/commit/8146856cc0a31a2a9eb06aeea10e11f19b3e5654))
* **infra:** update docker setup for React 19 and local success ([b083fe2](https://github.com/samuelaure/zazu/commit/b083fe2ee5f765ea73d7c0ef3cfcf7ed24eae53f))
* **prisma:** add binaryTargets and move to migrations flow ([577e5d6](https://github.com/samuelaure/zazu/commit/577e5d67119fb0bebfcd8da1b9f034196e0713ef))

## [1.2.0] - 2026-03-23

### Added
- **Refined Dashboard**: Fully responsive, glassmorphism UI for Telegram bot management.
- **Settings Panel**: Toggleable side panel for per-user modular feature management ("Nuclear Modules").
- **Admin Chat Utility**: Real-time interface to send messages as Zazŭ to users with optimistic UI updates.
- **User Intelligence**: Automatic ingestion and display of Telegram `@usernames` alongside IDs.
- **Nuclear Modules UI**: Configuration interface for "Inteligencia Conversacional," "Traducción," and "Extracción de Datos."

### Changed
- **Navigation UX**: Relocated Logout to a dedicated bottom-sidebar area and implemented a collapsable menu.
- **Localization**: Standardized all system timestamps to `DD/MM/AAAA` (Spanish format).
- **Architecture**: Implemented 3-second smart polling for active chats to maintain real-time situational awareness.

### Fixed
- **System Stability**: Resolved `BigInt` serialization errors in Next.js Server Actions.
- **Layout Fidelity**: Corrected chat input positioning with fixed hardware-accelerated layouts.
- **Database Consistency**: Fixed `UserFeature` relation logic for better modularity.

## [1.1.0] - 2026-03-21

### Added
- **Dockerization**: Multi-stage `Dockerfile` for the Bot app, optimized for monorepos (isolated builds).
- **Traefik Integration**: Direct routing, SSL termination (via certresolvers), and automated container discovery labels.
- **Production Isolation**: Dedicated Docker network and `.env.production` deployment template.
- **Service Orchestration**: Unified `docker-compose.yml` for database and bot service.

## [1.0.0] - 2026-03-21

### Added
- **Nuclear Core**: Lightweight Telegram bot engine with built-in persistence.
- **Onboarding Engine**: Automated user registration with `AWAITING_NAME` and `COMPLETED` states in Spanish.
- **Conversational Fallback**: Integrated OpenAI GPT-4o-mini for intelligent, low-token responses to unhandled messages.
- **Database Architecture**: Prisma-based schema for Users, Messages, and Features.
- **Monorepo Foundation**: Workspace-driven structure for Bot, Dashboard, and Shared Database.
- **Infrastructure**: Docker-compose setup for PostgreSQL database.
- **Developer Experience**: Local CLI verification, type-safe persistence, and Spanish-first localization.
