# 🎓 College Discovery Platform

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat\&logo=nextdotjs\&logoColor=white)]()
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat\&logo=typescript\&logoColor=white)]()
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=flat\&logo=postgresql\&logoColor=white)]()
[![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=flat\&logo=prisma\&logoColor=white)]()

A full-stack college discovery platform that helps students explore, compare, save, and predict colleges based on their rank. Built using Next.js, Prisma, PostgreSQL, and TypeScript.

---

# 📑 Table of Contents

* Features
* Tech Stack
* Architecture
* Screenshots
* Getting Started
* Database Schema
* Future Roadmap
* Live Demo
* Author

---

# ✨ Features

## 🎓 College Discovery

* Browse colleges with detailed information
* Search colleges by name
* Filter colleges by location
* View college ratings, fees, courses, and placements

## 📄 College Detail Pages

Each college includes:

* Overview
* Courses Offered
* Placement Information
* Ratings
* Fee Structure

## ⚖️ College Comparison

Compare multiple colleges side-by-side using:

* Fees
* Placements
* Ratings
* Location

## 🎯 Rank Predictor

Students can enter their rank and receive:

* Recommended colleges
* Rank-based suggestions
* College eligibility insights

## ❤️ Saved Colleges

* Save favorite colleges
* Access saved colleges later
* Quick navigation to preferred colleges

## 🔐 Authentication

* User Signup
* User Login
* Password Hashing using bcrypt
* User Profile Page
* Logout Functionality

---

# 🛠️ Tech Stack

## Frontend

* Next.js 16
* React
* TypeScript
* Tailwind CSS

## Backend

* Next.js Route Handlers
* Prisma ORM
* PostgreSQL

## Authentication

* bcrypt Password Hashing
* Custom Authentication Flow

---

# 🏗️ Architecture

The application follows a full-stack architecture using Next.js App Router.

### Frontend Layer

Handles:

* Search & Filtering
* College Comparison
* Predictor Tool
* Authentication UI
* Saved Colleges

### API Layer

Handles:

* College APIs
* Predictor Logic
* Authentication
* User Management

### Database Layer

Powered by PostgreSQL and Prisma ORM.

Stores:

* Colleges
* Users
* College Details
* Predictor Data

---


# 🚀 Getting Started

## Prerequisites

Install:

* Node.js (v18+)
* PostgreSQL
* npm

---

## 1️⃣ Clone Repository

```bash
git clone https://github.com/sinjaa18/college-discovery.git

cd college-discovery
```

---

## 2️⃣ Install Dependencies

```bash
npm install
```

---

## 3️⃣ Configure Environment Variables

Create:

```env
DATABASE_URL="your_postgresql_connection_string"
```

---

## 4️⃣ Run Migrations

```bash
npx prisma migrate dev
```

---

## 5️⃣ Seed Database

```bash
npx prisma db seed
```

---

## 6️⃣ Start Development Server

```bash
npm run dev
```

Application runs at:

```txt
http://localhost:3000
```

---

# 🗄️ Database Schema

## College

* Name
* Location
* Fees
* Rating
* Overview
* Courses
* Placements
* Closing Rank

## User

* Name
* Email
* Password (Hashed)

---

# 🗺️ Future Roadmap

* [ ] Real Reviews System
* [ ] Discussion Forum
* [ ] Advanced College Predictor
* [ ] Scholarship Recommendations
* [ ] Email Verification
* [ ] OAuth Authentication
* [ ] Admin Dashboard
* [ ] College Analytics

---

# 🌐 Live Demo

👉 https://college-discovery-p11ghxl5m-sintus-projects-da78e622.vercel.app/colleges

---

# 👨‍💻 Author

**Sintu Kumar**

* 📧 Email: [santa143ns@gmail.com](mailto:santa143ns@gmail.com)
* 🐙 GitHub: https://github.com/sinjaa18

---

# ⭐ Support

If you found this project useful, consider giving the repository a star on GitHub.
