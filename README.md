# RBAC-User Permission Control System

This project implements a Role-Based Access Control (RBAC) system for managing user roles and permissions in a web application. The system allows administrators to add, edit, and manage users while assigning roles and permissions such as "admin", "editor", and "viewer". It also supports authentication and session management.

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Tech Stack](#tech-stack)
4. [File Structure](#file-structure)
5. [Installation](#installation)
6. [Configuration](#configuration)
7. [Usage](#usage)
8. [API Endpoints](#api-endpoints)
9. [Contributors](#contributors)
10. [License](#license)

---

## Project Overview

This is a full-stack application built using Node.js (Express) for the back-end and React.js for the front-end. It provides a user management system where administrators can assign roles to users, manage their permissions, and control access to resources based on roles.

The back-end handles user authentication (sign-up, sign-in, sign-out), role assignment, and user management. The front-end displays the user list, allows for adding and editing users, and provides a filter for searching users based on different attributes.

---

## Features

- **User Authentication**:
  - Sign-up, sign-in, and sign-out functionality with JWT-based authentication.
- **Role-Based Access Control (RBAC)**:

  - Users can be assigned roles such as "admin", "editor", and "viewer".
  - Each role has specific permissions (e.g., create, edit, delete, view).

- **User Management**:

  - Add, edit, and delete users.
  - Filter and search users by different parameters.

- **Permissions Management**:
  - Admins can manage permissions for each user.

---

## Tech Stack

- **Backend**:

  - Node.js
  - Express.js
  - MongoDB (with Mongoose ORM)
  - JWT for authentication
  - Bcrypt.js for password hashing
  - Express-session for session management
  - Cookie-parser for cookie management

- **Frontend**:
  - React.js (with React Router for routing)
  - Axios for making HTTP requests
  - Tailwind CSS for styling

---

## File Structure

```
├── client/                    # React Frontend
│   ├── public/                # Public assets
│   └── src/                   # React source code
│       ├── components/        # React components (UI elements, etc.)
│       ├── lib/               # Utility functions (e.g., apiRequest.js)
│       ├── pages/             # React pages (Dashboard, Signin, etc.)
│       └── App.jsx            # Main application component
├── server/                    # Node.js Backend
│   ├── models/                # Mongoose models (User)
│   ├── routes/                # API routes (Auth.Route, members.route)
│   ├── controllers/           # Controller functions for user actions (signUp, signIn)
│   ├── middleware/            # Middleware (auth, error handling)
│   ├── app.js                 # Express app configuration
│   └── .env                   # Environment variables (DB_URL, SECRET, etc.)
├── .gitignore                 # Git ignore file
├── package.json               # Project metadata and dependencies
└── README.md                  # Project documentation
```

---

## Installation

Follow these steps to get the project up and running locally:

1. Clone the repository:

   ```bash
   git clone https://github.com/smith-bimal/RBAC.git
   ```

2. Install the backend dependencies:

   ```bash
   cd server
   npm install
   ```

3. Install the frontend dependencies:

   ```bash
   cd client
   npm install
   ```

4. Initialize the demo members into database:

   ```bash
   cd server/init
   node index.js
   ```

---

## Configuration

Before running the project, you need to configure some environment variables.

1. **Backend Configuration**:

   - Create a `.env` file inside the `server` directory and add the following variables:
     ```env
     DB_URL=mongodb://localhost:27017/rbac_db
     SECRET=your_secret_key
     CLIENT_URL=http://localhost:5173  # Frontend URL
     ```

2. **Frontend Configuration**:
   - If needed, configure the frontend to match your backend API URL in `client/src/lib/apiRequest.js`.

---

## Usage

1. **Start the Backend**:

   - Navigate to the `server` directory and run:
     ```bash
     npm start
     ```
   - The backend will run on `http://localhost:3000`.

2. **Start the Frontend**:

   - Navigate to the `client` directory and run:
     ```bash
     npm run dev
     ```
   - The frontend will run on `http://localhost:5173`.

3. **Navigate to the Application**:
   - Open your browser and go to `http://localhost:5173`. You'll be able to access the login page, where you can sign in, view users, and manage permissions.

4. **Login Credentials**:
    - Email: **admin@mail.com**
    - Password: **123456789**

---

## API Endpoints

### Authentication Routes:

- **POST `/api/auth/signup`**:

  - Description: Sign up a new user.
  - Body: `{ name, email, password }`
  - Response: `{ message: "SignUp Successful" }`

- **POST `/api/auth/signin`**:

  - Description: Sign in with an existing user.
  - Body: `{ email, password }`
  - Response: `{ message: "Login successful" }`

- **POST `/api/auth/signout`**:
  - Description: Log out the current user.
  - Response: `{ message: "Logout successful" }`

### Member Routes:

- **GET `/api/members`**:

  - Description: Get a list of all members.
  - Response: `{ members: [...] }`

- **POST `/api/members`**:

  - Description: Add a new member.
  - Body: `{ name, email, role, permissions }`
  - Response: `{ message: "Member added" }`

- **PUT `/api/members/:id`**:

  - Description: Edit an existing member.
  - Body: `{ name, email, role, permissions }`
  - Response: `{ message: "Member updated" }`

- **DELETE `/api/members/:id`**:
  - Description: Delete a member.
  - Response: `{ message: "Member deleted" }`

---

## Contributors

- **Golak Bihari Bemal (Smith Bimal)**

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

### Notes:

- Ensure to replace `your_jwt_secret_key` and `your_session_secret_key` with actual secure secrets for production use.
- If you're running both backend and frontend on different ports, ensure the appropriate CORS configuration is set for development.

---

*This README provides a structured guide on setting up, running, and using the RBAC user permission control system.
