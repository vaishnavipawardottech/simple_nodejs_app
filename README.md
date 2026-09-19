# Asset Tracker

A simple **3-tier Asset Tracker application** built to practice Docker, GitHub Actions, CI/CD, and AWS deployment.

## Tech Stack

* **Frontend:** React.js + JavaScript + Vite
* **Backend:** Node.js + Express.js
* **Database:** PostgreSQL
* **Containerization:** Docker + Docker Compose
* **CI/CD:** GitHub Actions
* **Deployment:** AWS EC2
* **Runner:** GitHub Actions Self-Hosted Runner

## Architecture

```text
                    GitHub
                       │
                       │ Push to main
                       ▼
                GitHub Actions
                       │
                       ▼
                 Lint & Test
                       │
                       ▼
                Build & Push
                       │
                       ▼
                  Docker Hub
                       │
                       ▼
                    Deploy
                       │
                       ▼
                 AWS EC2
                       │
             ┌─────────┼─────────┐
             ▼         ▼         ▼
         Frontend   Backend   PostgreSQL
          :5173      :5000       :5432
```

## Features

* Add, update, delete and view assets
* REST API using Express.js
* PostgreSQL database
* Dockerized frontend, backend and database
* Multi-stage Docker builds for frontend and backend
* ESLint for code quality
* Vitest for frontend and backend testing
* GitHub Actions CI/CD pipeline
* Matrix strategy for frontend and backend workflows
* Docker images pushed to Docker Hub
* Deployment to AWS EC2 using a self-hosted GitHub Actions runner

## CI/CD Pipeline

The main workflow is:

```text
Push to main
     ↓
Lint & Test
     ↓
Build & Push Docker Images
     ↓
Deploy to AWS EC2
```

Each stage runs after the previous stage succeeds.

### 1. Lint & Test

ESLint is used for code linting and Vitest is used to run tests for both frontend and backend.

A GitHub Actions **matrix strategy** runs the same workflow for both projects instead of duplicating jobs.

### 2. Build & Push

Multi-stage Docker images are built for the frontend and backend and pushed to Docker Hub.

Images:

```text
<docker-username>/asset-tracker-frontend:multistage
<docker-username>/asset-tracker-backend:multistage
```

### 3. Deploy

The application is deployed to an AWS EC2 instance using a **self-hosted GitHub Actions runner**.

Docker Compose pulls the latest images and starts the application containers.

## Project Structure

```text
simple_nodejs_app/
│
├── frontend/
│   ├── src/
│   ├── tests/
│   ├── Dockerfile.multistage
│   └── package.json
│
├── backend/
│   ├── src/
│   ├── tests/
│   ├── init/
│   ├── Dockerfile.multistage
│   └── package.json
│
├── .github/
│   └── workflows/
│       ├── cicd.yml
│       ├── lint-and-test.yml
│       ├── docker.yml
│       └── deploy.yml
│
├── .env.example
├── docker-compose.yml
└── README.md
```

## Local Setup

### Prerequisites

Make sure you have installed:

* Git
* Docker
* Docker Compose

### 1. Clone the repository

```bash
git clone https://github.com/vaishnavipawardottech/simple_nodejs_app.git

cd simple_nodejs_app
```

### 2. Create the environment file

Copy `.env.example` to `.env`:

```bash
cp .env.example .env
```

Update the values in `.env`:

```env
POSTGRES_DB=your_database
POSTGRES_USER=your_postgres_user
POSTGRES_PASSWORD=your_postgres_password
```

### 3. Start the application

```bash
docker compose up -d
```

Check the running containers:

```bash
docker ps
```

### 4. Access the application

Frontend:

```text
http://localhost:5173
```

Backend:

```text
http://localhost:5000
```

PostgreSQL is available to the application through the Docker network.

### 5. Stop the application

```bash
docker compose down
```

## GitHub Actions Setup

To use the CI/CD pipeline, configure the required **GitHub Secrets and Variables** in the repository.

### GitHub Variable

```text
DOCKER_USERNAME
```

### GitHub Secrets

```text
DOCKER_TOKEN
POSTGRES_DB
POSTGRES_USER
POSTGRES_PASSWORD
```

The deployment workflow uses the **self-hosted runner** installed on the AWS EC2 instance.

## Deployment

The main GitHub Actions workflow runs the stages sequentially:

```text
CICD
 │
 ├── Lint & Test
 │
 ├── Build & Push
 │
 └── Deploy
```

The workflow can be triggered manually using **Run workflow** or configured to run automatically on pushes to the `main` branch.

## Learning Goals

This project was built to get hands-on experience with:

* Docker and Docker Compose
* Multi-stage Docker builds
* GitHub Actions
* CI/CD pipelines
* ESLint and automated testing
* Docker Hub
* GitHub Secrets and Variables
* Matrix strategies
* AWS EC2
* Self-hosted GitHub Actions runners
* Application deployment and debugging
