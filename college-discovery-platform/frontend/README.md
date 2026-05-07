npm create vite@latest# College Discovery Platform

A modern full-stack college discovery and decision-support platform inspired by Collegedunia, Careers360, and Shiksha.

Built as a production-style MVP focused on:

- scalable architecture
- clean UI
- structured decision support
- fast discovery workflows
- product-first engineering

---

# Live Demo

## Frontend
(Add Vercel URL here)

## Backend API
(Add Render URL here)

---

# Features

## Discovery
- College listing
- Search functionality
- State filters
- Rating filters
- Responsive card layout

## Decision Support
- Compare colleges
- Structured comparison table
- College detail pages

## Shortlisting
- Save/bookmark colleges
- Local persistence using localStorage

## Backend
- REST APIs
- PostgreSQL database
- Prisma ORM
- Modular backend architecture

---

# Tech Stack

## Frontend
- React
- Vite
- Tailwind CSS
- React Router
- Axios

## Backend
- Node.js
- Express.js
- Prisma ORM

## Database
- PostgreSQL (Neon)

## Deployment
- Vercel (Frontend)
- Render (Backend)

---

# Project Architecture

## Frontend Structure

frontend/
├── src/
│ ├── components/
│ ├── pages/
│ ├── api/
│ └── assets/

## Backend Structure

backend/
├── src/
│ ├── controllers/
│ ├── routes/
│ ├── prisma/
│ ├── middleware/
│ └── utils/

---

# Core Pages

## Homepage
- search colleges
- apply filters
- compare selection
- responsive discovery layout

## College Detail Page
- fees
- ratings
- rankings
- placements
- courses

## Compare Page
- side-by-side comparison
- structured metrics

## Bookmarks Page
- shortlist colleges
- persistent local storage

---

# Database Design

## College Entity
- id
- name
- slug
- city
- state
- rating
- fees
- avgPackage
- ranking
- description
- imageUrl
- establishedYear

## Course Entity
- id
- name
- duration
- fees
- collegeId

---

# API Endpoints

## GET /api/colleges
Fetch all colleges with filters.

## GET /api/colleges/:slug
Fetch single college details.

## POST /api/colleges/compare
Compare multiple colleges.

---

# Product Thinking

The platform prioritizes:

- decision clarity
- structured information
- minimal clutter
- scalable architecture
- fast discovery workflows

Instead of replicating SEO-heavy educational portals, the platform focuses on clean UX and comparison-driven decision support.

---

# Engineering Decisions

## Why PostgreSQL?
Relational structure fits colleges, courses, bookmarks, and future review systems.

## Why Prisma?
Rapid schema management and scalable ORM workflows.

## Why Tailwind CSS?
Fast UI iteration during MVP sprint.

## Why LocalStorage for Bookmarks?
Optimized MVP development speed while maintaining realistic product flows.

---

# Scalability Considerations

Potential future improvements:

- pagination
- Elasticsearch / Meilisearch
- Redis caching
- authentication system
- recommendation engine
- review system
- ranking collections

---

# Setup Instructions

## Backend

```bash
cd backend
npm install
npm run dev