# Zazŭ Documentation

## Role
Primary user-interface (Delivery Queue & Action Hub) for the naŭ platform. Acts as a Skill Orchestrator via Telegram.

## Tech Stack
Node.js, Telegraf, Express, Prisma, PostgreSQL, React (Dashboard/Mini App Bridge).

## Core Capabilities
- **Modular Skill Orchestration**: Dynamically dispatches Telegram messages to isolated features.
- **Proactive Delivery Queue**: Buffers external platform notifications (e.g., from `nauthenticity`) and enforces user-defined Time Windows.
- **Grouped Notifications**: Flushes pending messages chronologically and grouped by Brand to maintain context.
- **Telegram Mini App Bridge**: Native high-fidelity, **mobile-first UI** (`apps/dashboard`) for managing brands and configuration. Includes a dedicated **"Edit Suggestion"** module for refining AI comments. Uses `initData` authentication and **Role-Based Access Control (RBAC)** to separate Platform Admin (Sam) from End Users.
- **Dual-Mode Operation**: The Platform Admin can toggle between the "Command Center" (Admin view) and the "Feature Hub" (Standard User view) to dogfood and configure personal tools like Comment Suggester natively.
- **Immediate Proactive Delivery**: Notifications bypass the queue and are delivered instantly if the user's defined Time Window is currently open.
- **Feature Store / Storefront**: Interface for normal users to manage their active features and purchase new/premium capabilities.

## Active API Surface
- `POST /api/internal/notify` — Internal endpoint for platform services to queue notifications. Requires `NAU_SERVICE_KEY`.
- `GET/POST /api/webapp/*` — (Planned) Backend bridge for Mini App state synchronization.

## Key Decisions
- **[2026-04-07] Shift to Express Hybrid**: Added an Express server alongside Telegraf to support incoming webhooks for proactive delivery.
- **[2026-04-07] Delivery Window Enforcement**: Notifications are no longer pushed instantly. They are buffered in a DB queue and flushed by a cron job checking the user's active window.
- **[2026-04-07] Skill Refactor**: Moved logic for Brand management from a conversational wizard to a planned Mini App to improve UX.
- **[2026-04-09] RBAC & Admin/User Split**: Hard-coded Admin ID `5109114390` in session logic to protect administrative capabilities from end-users. Non-admins are redirected to a new "Feature Hub" view.
- **[2026-04-09] Service Mesh Correction**: Renamed bot container to `zazu` to align with Nauthenticity's discovery logic. Fixed API path mismatch by enforcing `/api/v1/` prefix for all service-to-service calls.

## naŭ Platform Dependencies
- `nauthenticity` — Receives feedback telemetry from comment selections.

## Dual Bot Protocol
To avoid webhook conflicts between environments:
- **Local Development**: Uses the `Test Bot` (token in `zazu/.env`). Targeted at `*.localhost`.
- **Production**: Uses the `Production Bot`. Targeted at `*.9nau.com`.
The `apps/dashboard/.env` must be explicitly managed to point to the correct token during deployment.
