# WeatherPulse 🌦️

A full-stack weather application built with Next.js, React, TypeScript, and Express. The project is designed to explore modern backend technologies, databases, caching, background jobs, automated testing, and deployment.

## 🎯 Project Goal

WeatherPulse is a learning project focused on understanding how modern full-stack applications work together. The goal is to build a small, functional weather application while practicing technologies used in production environments.

## ✨ Current Features

- Search for weather by city.
- Display current temperature, humidity, and wind speed.
- Retrieve weather data through a custom Express API.
- Fetch weather information from Open-Meteo.
- Validate external API responses using Zod.
- Handle loading and error states in the frontend.
- Run frontend and backend from the monorepo root.
- TypeScript type checking and production builds.
- Unit testing with Vitest.

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
- Git
- Vitest
- ESLint

### Planned Technologies
- PostgreSQL and SQL
- Prisma ORM
- Docker and Docker Compose
- Redis
- BullMQ
- Supertest
- Playwright
- Linux and VPS deployment
- Nginx and HTTPS
- GitHub Actions and CI/CD

## 📁 Project Structure

```text
romanweather/
├── apps/
│   ├── web/                  # Next.js frontend
│   │   └── src/
│   │       └── app/
│   │           └── page.tsx
│   └── server/               # Express backend
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

### Run the Application

Start both frontend and backend from the project root:

```bash
pnpm dev
```

The application will be available at:

- Frontend: http://localhost:3000
- Backend health check: http://localhost:5000/api/health

Keep the terminal running while using the application.

## 🧪 Testing and Validation

Run backend unit tests:

```bash
pnpm --filter server test
```

Check backend TypeScript:

```bash
pnpm --filter server typecheck
```

Check frontend TypeScript:

```bash
pnpm --filter web exec tsc --noEmit
```

Build the frontend for production:

```bash
pnpm --filter web build
```

## 🌐 Weather Data

WeatherPulse uses the [Open-Meteo API](https://open-meteo.com/) to retrieve weather information.

The frontend communicates with the custom Express backend, which requests and processes weather data before returning it to the client.

## 🗺️ Development Roadmap

1. Project setup and live weather data.
2. PostgreSQL, SQL, and Prisma.
3. Docker and Docker Compose.
4. Redis and caching.
5. BullMQ and background jobs.
6. Unit, integration, and end-to-end testing.
7. Linux and production deployment.
8. CI/CD and final release.

## 📚 Learning Objectives

- Understand full-stack application architecture.
- Work with relational databases and SQL.
- Implement caching and background processing.
- Build reliable APIs with validation and error handling.
- Write automated tests.
- Containerize applications with Docker.
- Deploy applications to a Linux server.
- Automate testing and deployment with CI/CD.

## 📌 Project Status

**In development.**

The initial frontend and backend are working, live weather data is available, and the first automated unit tests pass. Database integration, caching, background jobs, and production deployment are planned for subsequent stages.

## 📄 License

This project is intended for educational and portfolio purposes.
