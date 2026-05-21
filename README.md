## Project name: 🚀 DevPulse – Issue & Feature Tracker API

A backend system for managing software issues (bugs & feature requests) with role-based access control, built using Node.js, TypeScript, Express, and PostgreSQL (raw SQL).

## 📌 Live Links
🔗 Backend API: https://your-deployment-url.com
🔗 GitHub Repository: https://github.com/saifur2468/L2-A2-basic-sql/tree/main
🎥 Interview Video: https://your-video-link.com
 ## 🛠️ Tech Stack
Node.js (LTS)
TypeScript
Express.js
PostgreSQL (pg driver only)
Raw SQL (no ORM / query builder)
bcrypt (password hashing)
jsonwebtoken (JWT authentication)
## ✨ Features
👤 Authentication
User registration (signup)
User login with JWT
Password hashing with bcrypt
Role-based access (contributor, maintainer)
## 🔐 Security
JWT protected routes
Role-based authorization
Secure password storage
Input validation

## 🔑 Authentication Flow
User logs in
Server returns JWT token
Client sends token in header:
Authorization: <JWT_TOKEN>
Server verifies token before protected routes
## 🗄️ Database Schema Summary

# 1. Users Table
| Field | Type | Description |
| :--- | :--- | :--- |
| id | SERIAL | Primary Key |
| name | VARCHAR | Display Name |
| email | VARCHAR | Unique Email |
| role | ENUM | contributor, maintainer |

# 2. Issues Table
| Field | Type | Description |
| :--- | :--- | :--- |
| id | SERIAL | Primary Key |
| title | VARCHAR(150) | Issue Headline |
| type | ENUM | bug, feature_request |
| status | ENUM | open, in_progress, resolved |
| reporter_id | INT | Reference to Users Table |

#  API Endpoints

# Authentication
- `POST /api/auth/signup` - Register a new user
- `POST /api/auth/login` - Login and get JWT token

# Issues
- `POST /api/issues` - Create a new issue (Auth required)
- `GET /api/issues` - Get all issues (Supports `sort`, `type`, `status` queries)
- `GET /api/issues/:id` - Get details of a single issue
- `PATCH /api/issues/:id` - Update issue (Maintainer or Owner if open)
- `DELETE /api/issues/:id` - Delete issue (Maintainer only)

# 📁 Project Structure

```txt
src/
│
├── config/
│   ├── database.ts
│   └── schema.sql
│
├── middleware/
│   ├── auth.middleware.ts
│   ├── error.middleware.ts
│   └── validate.middleware.ts
│
├── modules/
│   ├── auth/
│   │   ├── auth.controller.ts
│   │   ├── auth.router.ts
│   │   └── auth.service.ts
│   │
│   └── issues/
│       ├── issues.controller.ts
│       ├── issues.router.ts
│       └── issues.service.ts
│
├── utils/
│   ├── apperror.ts
│   └── response.ts
│
├── app.ts
└── server.ts

.env
.gitignore
package.json
tsconfig.json
README.md
```
