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


## Homepage Preview
<img width="1919" height="908" alt="Homepage" src="https://github.com/user-attachments/assets/a5793f7a-5180-48af-a2d2-8956d0836c91" />

##CollegeDetails_Card Preview
<img width="1919" height="900" alt="COLLEGEDETAILS_CARD" src="https://github.com/user-attachments/assets/4ae08a6c-80fb-4fbb-9d14-1cdbcd12e097" />

##Comparison_page Preview
<img width="1919" height="912" alt="COMPARISON2" src="https://github.com/user-attachments/assets/24f53379-cccb-4658-aaa2-1511f6f7e298" />
<img width="1917" height="908" alt="COMPARISON" src="https://github.com/user-attachments/assets/684534c9-9059-40ef-b15b-6863fbc327bf" />

#Bookmarkpage Preview
<img width="1919" height="902" alt="BOOKMARKS" src="https://github.com/user-attachments/assets/0b9100c6-aa8a-432e-9b26-74899e130b87" />

