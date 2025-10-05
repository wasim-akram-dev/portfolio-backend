# 🧠 Wasim Akram's Portfolio API (Backend)

This is a RESTful backend built with **Node.js**, **Express**, and **TypeScript**, serving as the API for the Personal Portfolio Website.
It handles authentication, blog and project management, and content delivery with secure JWT-based authorization.

---

## 🚀 Live Links

- **Backend API Base URL:** 🔹[https://wasim-akram-server.vercel.app/api/v1](#)
- **Frontend:** 🔹[https://wasim-akram.vercel.app](#)
- **Demo Video:** 🔹[https://drive.google.com/drive/folders/1HDAd5Rd0P7DgYJe-AR8wWBYvnL0dSRHi?usp=sharing](#)

---

## 🧾 Project Overview

This backend powers the personal portfolio website by providing RESTful APIs for blogs, projects, and authentication.
It includes protected routes for admin-only actions and supports secure password hashing with **bcrypt**.

---

## ✨ Features

- 🔐 JWT-based Authentication (Login, Protected Routes)
- 🧠 Admin Authorization (Only admin can manage content)
- 📰 Blog CRUD (Create, Read, Update, Delete)
- 💼 Project CRUD (Create, Read, Update, Delete)
- 🧩 Input validation (Zod / Express Validator)
- 🧱 Modular folder structure
- ⚙️ Database integration (Prisma + PostgreSQL)

---

## 🧰 Technology Stack

| Category    | Tools / Libraries   |
| ----------- | ------------------- |
| Framework   | Express.js          |
| Language    | TypeScript          |
| ORM         | Prisma (PostgreSQL) |
| Auth        | JWT + bcrypt        |
| Validation  | Express Validator   |
| Deployment  | Vercel              |
| Environment | dotenv              |

---

## ⚙️ Setup Instructions

### 🔧 Prerequisites

- Node.js ≥ 18
- npm or yarn
- PostgreSQL connection string

### 🏗️ Installation

```bash
git clone https://github.com/wasim-akram-dev/portfolio-backend.git
cd portfolio-backend
npm install
cp .env.example .env
npm run dev
```

---

## 🌍 Environment Variables

### .env.example

```bash
PORT=5000
DATABASE_URL=database_url
JWT_SECRET=secret_key
JWT_EXPIRES_IN=7d
CLIENT_URL=client_url
```

---

## 📁 Folder Structure

```bash
src/
 ┣ config/
 ┣ modules/
 ┃ ┣ auth/
 ┃ ┣ blogs/
 ┃ ┗ projects/
 ┣ utils/
 ┣ app.ts
 ┗ server.ts
```

---

## 🔑 Admin Credentials

| Role  | Email                                           | Password            |
| ----- | ----------------------------------------------- | ------------------- |
| Admin | 🔹[owner@example.com](mailto:owner@example.com) | 🔹StrongPassword123 |

---

## 🧪 API Endpoints

### Auth

| Method | Endpoint      | Description             |
| ------ | ------------- | ----------------------- |
| POST   | `/auth/login` | Login (JWT)             |
| GET    | `/auth/me`    | Get logged-in user info |

### Blogs

| Method | Endpoint       | Description                  |
| ------ | -------------- | ---------------------------- |
| GET    | `/blogs`       | Get all blogs                |
| GET    | `/blogs/:slug` | Get single blog              |
| POST   | `/blogs`       | Create new blog (Admin only) |
| PATCH  | `/blogs/:id`   | Update blog (Admin only)     |
| DELETE | `/blogs/:id`   | Delete blog (Admin only)     |

### Projects

| Method | Endpoint        | Description                     |
| ------ | --------------- | ------------------------------- |
| GET    | `/projects`     | Get all projects                |
| POST   | `/projects`     | Create new project (Admin only) |
| PATCH  | `/projects/:id` | Update project (Admin only)     |
| DELETE | `/projects/:id` | Delete project (Admin only)     |

---

## 🎥 Demo Video

## 📹 10–15 minute walkthrough including:

- Backend overview

- Auth and CRUD APIs in Postman

- Connection with frontend

- Deployment demonstration

### 🎬 Link: https://drive.google.com/drive/folders/1HDAd5Rd0P7DgYJe-AR8wWBYvnL0dSRHi?usp=sharing

---

## 🗒️ Additional Notes

- Admin user is seeded during setup.

- All passwords are hashed using bcrypt.

- Handles validation & runtime errors gracefully.

- Includes CORS and proper HTTP status codes.

---

#### Author: 🔹Wasim Akram

#### License: MIT
