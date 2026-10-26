# WeatherPulse 🌦️

A full-stack weather application built with Next.js, React, TypeScript, and Express. The project focuses on learning production-oriented backend technologies, relational databases, caching, background jobs, automated testing, containerization, and deployment.

## 🎯 Project Goal

WeatherPulse is a learning project designed to explore how modern full-stack applications work together.

The goal is to build a small, functional weather application while gaining practical experience with technologies commonly used in production environments.

The project prioritizes understanding architecture, data flow, reliability, testing, and deployment over building a large application with unnecessary features.

## ✨ Current Features

- Search for weather by city.
- Display current temperature, humidity, and wind speed.
- Retrieve weather data through a custom Express API.
- Fetch weather information from the Open-Meteo API.
- Validate external API responses using Zod.
- Handle loading and error states in the frontend.
- Run frontend and backend from the monorepo root.
- Check TypeScript types and build the frontend for production.
- Run backend unit tests with Vitest.

## 🛠️ Tech Stack

### Frontend

- Next.js
- React
- TypeScript
- Tailwind CSS

### Backend

- Node.js
- Express
- TypeScript
- Zod
- Open-Meteo API

### Development Tools

- pnpm workspaces
- Git and GitHub
- Vitest
- ESLint

### Planned Technologies

- PostgreSQL and SQL
- Prisma ORM
- Docker and Docker Compose
- Redis and caching
- BullMQ and background jobs
- Supertest and integration testing
- Playwright and end-to-end testing
- Linux and VPS deployment
- Nginx and HTTPS
- GitHub Actions and CI/CD

## 📁 Project Structure

```text
romanweather/
├── apps/
│   ├── web/
│   │   └── src/
│   │       └── app/
│   │           └── page.tsx
│   └── server/
│       └── src/
│           ├── services/
│           │   └── weather.service.ts
│           ├── schemas/
│           │   └── weather.schema.ts
│           ├── utils/
│           │   ├── weather.utils.ts
│           │   └── weather.utils.test.ts
│           └── index.ts
├── package.json
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
├── .gitignore
└── README.md
```

## 🚀 Getting Started

### Prerequisites

Install the following tools:

- Node.js 22 or a compatible supported version
- pnpm
- Git

### Installation

Clone the repository and navigate to the project directory:

```bash
git clone <your-repository-url>
cd romanweather
```

Install dependencies:

```bash
pnpm install
```

### Environment Variables

Configure the environment variables required by the backend and frontend.

Keep secrets and local environment files out of version control. Use `.env.example` to document required variables without exposing actual credentials.

The exact variables and configuration will evolve as PostgreSQL, Redis, and other services are introduced.

### Run the Application

Start the frontend and backend from the project root:

```bash
pnpm dev
```

The application will be available at:

- **Frontend:** http://localhost:3000
- **Backend health check:** http://localhost:5000/api/health

Keep the development process running while using the application.

## 🧪 Testing and Validation

### Run Backend Unit Tests

```bash
pnpm --filter server test
```

### Check Backend TypeScript

```bash
pnpm --filter server typecheck
```

### Check Frontend TypeScript

```bash
pnpm --filter web exec tsc --noEmit
```

### Build the Frontend

```bash
pnpm --filter web build
```

These commands help verify application behavior, detect type errors, and ensure that the frontend can be built for production.

## 🌐 Weather Data

WeatherPulse uses the [Open-Meteo API](https://open-meteo.com/) to retrieve weather information.

The frontend communicates with the custom Express backend. The backend requests weather data, validates and processes the response, and returns the required information to the frontend.

As the project evolves, PostgreSQL will store selected cities and weather search history, while Redis will cache weather responses to reduce unnecessary external API requests.

BullMQ will be introduced to demonstrate background processing and scheduled weather updates.

## 🗺️ Development Roadmap

The project is organized into eight learning sections comprising approximately 70 lessons.

1. **Project Setup and Weather Data (Lessons 1–6):** Build the initial frontend and backend, integrate Open-Meteo, validate responses, and establish basic testing.
2. **PostgreSQL, SQL, and Prisma (Lessons 7–17):** Learn relational database fundamentals, SQL queries, data relationships, migrations, indexes, and transactions.
3. **Docker and Docker Compose (Lessons 18–25):** Containerize services and configure PostgreSQL, Redis, networking, volumes, and health checks.
4. **Redis and Caching (Lessons 26–34):** Implement caching, TTL, cache invalidation, and fallback behavior.
5. **BullMQ and Background Jobs (Lessons 35–44):** Build queues and workers, schedule jobs, configure retries, and handle failures.
6. **Professional Testing (Lessons 45–56):** Practice unit, integration, API, database, cache, queue, and end-to-end testing.
7. **Linux and Deployment (Lessons 57–65):** Learn Linux fundamentals, SSH, VPS deployment, Nginx, HTTPS, logging, and backups.
8. **CI/CD and Final Release (Lessons 66–70):** Automate quality checks and builds with GitHub Actions and prepare a production deployment.

The lesson count is a guideline rather than a strict limit. Additional lessons may be added when a topic requires more practical work.

## 📚 Learning Objectives

By completing WeatherPulse, the goal is to gain practical experience with:

- Full-stack application architecture and data flow.
- PostgreSQL, SQL, relational data modeling, and Prisma ORM.
- Database migrations, indexes, and transactions.
- Docker, containers, networking, volumes, and Docker Compose.
- Redis, caching strategies, TTL, and cache invalidation.
- BullMQ, queues, workers, retries, and background processing.
- Unit, integration, and end-to-end testing.
- API validation, error handling, and reliable service behavior.
- Linux, SSH, VPS deployment, Nginx, and HTTPS.
- CI/CD pipelines and automated deployment with GitHub Actions.
- Git workflows, debugging, and production-oriented problem solving.

## 📐 Development Principles

- Implement features end to end: frontend → backend → database or external API → verification.
- Focus each lesson on one specific technology, concept, or engineering problem.
- Avoid spending excessive time on familiar React and Express fundamentals.
- Introduce tests and Git commits from the beginning.
- Verify that the application works after each major change.
- Understand architectural decisions, alternatives, trade-offs, and common failure scenarios.
- Keep the application small and focused on its learning objectives.
- Avoid unnecessary authentication, roles, chat functionality, Socket.IO, and administrative features.
- Prefer practical understanding over simply completing lessons.

## 📌 Project Status

**In development.**

The initial frontend and backend are working, live weather data is available through the custom Express API, and the first automated unit tests pass.

The next stage focuses on PostgreSQL, SQL, and Prisma ORM. Docker, Redis, BullMQ, comprehensive testing, Linux deployment, and CI/CD will be introduced progressively.

## 📄 License

This project is intended for educational and portfolio purposes.
