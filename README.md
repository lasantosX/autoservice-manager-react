# ?? AutoService Manager - React Frontend

Modern React + TypeScript frontend for an automotive service management system.

This project demonstrates a clean and scalable UI architecture connected to a real ASP.NET Core Web API for managing customers, vehicles, technicians, and service orders.

---

## ?? Tech Stack

- React + TypeScript
- Vite
- React Router
- Axios
- Lucide Icons
- Custom CSS (no UI frameworks)

---

## ?? Features

- Dashboard with operational overview
- Customer management (API integrated)
- Vehicle tracking per customer
- Technician management
- Service Orders (Repair Orders) workflow
- Reusable DataTable component
- API integration with paginated responses
- Clean layout with sidebar navigation

---

## ?? Backend Integration

This frontend is fully connected to a custom ASP.NET Core Web API.

Key aspects:

- RESTful API consumption using Axios
- Typed responses with TypeScript
- Support for paginated responses (`items`, `totalCount`, etc.)
- Service layer abstraction (`/api` folder)

Example endpoints used:

- `GET /api/Customers`
- `GET /api/customers/{customerId}/vehicles`
- `GET /api/Technicians`
- `GET /api/ServiceOrders`

---

## ?? Architecture

The project follows a modular and scalable structure:


src/
api/ ? API clients and services
components/ ? Reusable UI components
layouts/ ? Layout structure
pages/ ? Application views
routes/ ? Routing configuration
styles/ ? Global styles
types/ ? TypeScript models


---

## ?? Run Locally

```bash
npm install
npm run dev
?? Configuration

Update the API base URL in:

src/api/apiClient.ts
baseURL: "https://localhost:44323/api"
?? Notes
This project is designed as a portfolio-ready frontend
It reflects real-world patterns used in enterprise applications
Focus is on architecture, integration, and clean UI
????? Author

Luis Santos
Senior Software Developer (.NET / React / Vue / SQL Server)

?? Next Improvements (Planned)
Pagination controls in UI
Create/Edit forms (CRUD)
Environment variables (.env)
Status mapping (numeric ? readable)
Authentication (JWT)