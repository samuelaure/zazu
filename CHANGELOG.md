# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

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
