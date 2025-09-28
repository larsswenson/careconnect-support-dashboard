# CareConnect Support Dashboard

CareConnect Support Dashboard is a lightweight **React + Next.js** application that simulates a healthcare support ticketing system. It demonstrates handling tickets, onboarding requests, and knowledge base articles — all in one place.

---

## Features

- **Ticket Management**
  - Create, view, and list support tickets.
  - Onboard button to simulate new user onboarding.

- **Knowledge Base**
  - Preloaded articles and resources.
  - API endpoint to serve knowledge data.

- **API Routes**
  - `/api/tickets` → CRUD operations for support tickets.
  - `/api/knowledge` → Provides knowledge base data.

- **Frontend**
  - Client-side React components (`useState`, `useEffect`) for interactivity.
  - Components include:
    - `TicketForm` → Add new tickets.
    - `TicketList` → Display all tickets.
    - `KnowledgeBase` → Show helpful resources.

---

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **State & Hooks:** React (`useState`, `useEffect`)
- **API Routes:** Next.js App Router

---


---

## Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/your-username/careconnect-support.git
cd careconnect-support
```
### 2. Install dependencies
```bash
npm install
```
### 3. Run the development server
```bash
npm run dev
```
### 4. Visit http://localhost:3000 to view the app.

