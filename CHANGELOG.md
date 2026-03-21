# Changelog

All notable changes to this project will be documented in this file.

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
