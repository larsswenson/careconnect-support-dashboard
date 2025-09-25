# CareConnect Support Dashboard Demo

CareConnect Support Dashboard is a full-stack demo app for internal support and onboarding automation, built to simulate an healthcare org's internal tool. It includes a Node.js + Express backend, a Python onboarding automation script, and a React + TypeScript frontend.

## Features
- Backend API to create, list, and manage support tickets (stored in `tickets.json`).
- Integration with a Python script (`onboard.py`) to simulate employee onboarding.
- Frontend form to submit tickets and display the ticket list in real time.
- Button to run onboarding automation and display JSON results.
- Knowledge Base tab with static demo content.

## Tech Stack
- Backend: Node.js, Express, Python
- Frontend: React, TypeScript, CRA
- Automation: Python scripts for onboarding simulation
- Development tools: Nodemon, CORS
- Local Deployment: Frontend `localhost:3000`, Backend `localhost:4000`

## Getting Started

### Prerequisites
- Node.js 
- npm
- Python 3

### Installation
```bash
git clone https://github.com/YOUR_USERNAME/careconnect-support-dashboard.git
cd careconnect-support-dashboard
cd backend
npm install
cd ../frontend
npm install
```
### Running the Application

From the root directory, run both frontend and backend concurrently:

npm run dev


Frontend: http://localhost:3000

Backend API: http://localhost:4000

## Quick Demo

- Open the frontend in your browser.

- Submit a support ticket in the Ticket Form.

- Tickets appear live in the Ticket List.

- Click Run Onboarding Automation, enter a name, and view the JSON output.

- Explore the Knowledge Base tab.


## Notes

- Designed for demo purposes.

- Data is stored locally in JSON files; no database is used.

- Python script output is simulated for onboarding automation.

## License

MIT License
