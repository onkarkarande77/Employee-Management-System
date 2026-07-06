# 🚀 Employee Management System

A Full Stack Employee Management System built using the **MERN Stack (MongoDB, Express.js, React.js, and Node.js)**. This application enables administrators to efficiently manage employee records through a clean, responsive interface with complete CRUD functionality.

---

# 📖 Project Overview

The Employee Management System is a web-based application designed to simplify employee record management. It allows administrators to perform all essential employee operations from a single interface.

The application follows a modern client-server architecture where:

- **React.js** handles the frontend UI.
- **Node.js** and **Express.js** provide RESTful APIs.
- **MongoDB** stores employee information.
- **Axios** is used for communication between frontend and backend.

This project demonstrates the fundamentals of Full Stack Web Development including API integration, database operations, routing, and CRUD functionality.

---

# ✨ Features

- ➕ Add New Employee
- 📋 View All Employees
- ✏️ Update Employee Details
- ❌ Delete Employee Records
- 📡 REST API Integration
- 💾 MongoDB Database Connectivity
- ⚡ Dynamic React Components
- 📱 Responsive User Interface
- 🔄 Real-Time CRUD Operations

---

# 🛠️ Tech Stack

## Frontend

- React.js
- React Router
- Axios
- JavaScript (ES6+)
- HTML5
- CSS3

## Backend

- Node.js
- Express.js

## Database

- MongoDB
- Mongoose

## Development Tools

- Visual Studio Code
- Git
- GitHub
- Postman
- npm

---

# 📂 Project Structure

```
Employee-Management-System
│
├── client
│   ├── public
│   │
│   ├── src
│   │   ├── addUser
│   │   │   ├── AddUser.jsx
│   │   │   └── addUser.css
│   │   │
│   │   ├── getUser
│   │   │   ├── User.jsx
│   │   │   └── user.css
│   │   │
│   │   ├── updateUser
│   │   │   ├── Update.jsx
│   │   │   └── update.css
│   │   │
│   │   ├── admin
│   │   │   ├── admin.jsx
│   │   │   └── admin.css
│   │   │
│   │   ├── App.js
│   │   ├── App.css
│   │   └── index.js
│   │
│   ├── package.json
│   └── package-lock.json
│
├── server
│   ├── config
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── package.json
│   └── server.js
│
└── README.md
```

---

# ⚙️ System Workflow

```
React Frontend
        │
        ▼
Axios HTTP Requests
        │
        ▼
Express REST APIs
        │
        ▼
Controller Layer
        │
        ▼
Mongoose Models
        │
        ▼
MongoDB Database
```

---

# 📌 Modules

## 🏠 Admin Dashboard

The dashboard serves as the central interface of the application.

Responsibilities:

- Navigate through different modules
- Manage employee records
- Perform CRUD operations
- View employee information

---

## ➕ Add Employee

This module allows administrators to register a new employee.

Information includes:

- Employee Name
- Email Address
- Phone Number
- Department
- Position
- Salary

After submitting the form, the data is validated and stored in MongoDB.

---

## 📋 View Employees

Displays all employee records in a structured format.

Users can:

- View employee details
- Edit employee information
- Delete employee records

Data is fetched dynamically from the backend using Axios.

---

## ✏️ Update Employee

Allows editing of existing employee details.

Workflow:

- Select an employee
- Load employee data
- Modify required fields
- Save updated information

The backend updates the MongoDB document using a PUT request.

---

## ❌ Delete Employee

Allows administrators to permanently remove employee records.

Workflow:

- Select employee
- Click Delete
- Confirm deletion
- Record removed from database

---

# 🌐 REST API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | /employees | Fetch all employees |
| GET | /employee/:id | Fetch employee by ID |
| POST | /create | Add new employee |
| PUT | /update/:id | Update employee |
| DELETE | /delete/:id | Delete employee |

---

# 🧠 React Concepts Used

- Functional Components
- React Hooks
- useState
- useEffect
- React Router
- Component Reusability
- Axios API Calls
- Form Handling
- Conditional Rendering

---

# ⚙️ Backend Concepts Used

- Express.js Routing
- Controllers
- MongoDB Connection
- Mongoose Models
- CRUD Operations
- REST APIs
- Middleware
- Error Handling

---

# 🗄️ Database

MongoDB stores employee information including:

- Name
- Email
- Phone
- Department
- Position
- Salary

The backend communicates with MongoDB using Mongoose.

---

# 🚀 Installation

## Clone Repository

```bash
git clone https://github.com/onkarkarande77/Employee-Management-System.git
```

Move inside the project

```bash
cd Employee-Management-System
```

---

## Install Frontend Dependencies

```bash
cd client
npm install
```

---

## Install Backend Dependencies

```bash
cd ../server
npm install
```

---

# ▶️ Run Backend

```bash
npm start
```

Backend runs on:

```
http://localhost:5000
```

---

# ▶️ Run Frontend

Open another terminal.

```bash
cd client
npm start
```

Frontend runs on:

```
http://localhost:3000
```

---

# 🎯 Learning Outcomes

This project helped me gain practical experience in:

- MERN Stack Development
- React Components
- React Hooks
- API Integration
- CRUD Operations
- MongoDB
- Mongoose
- Express.js
- Node.js
- Client-Server Architecture
- Git & GitHub
- REST API Development

---

# 🔮 Future Enhancements

- User Authentication
- JWT Authentication
- Role-Based Access Control
- Employee Search
- Pagination
- Dashboard Analytics
- File Uploads
- Export Employee Data
- Responsive Admin Dashboard
- Dark Mode

---

# 📸 Screenshots

> Add screenshots of your application here.

Example:

```
screenshots/
│
├── dashboard.png
├── add-employee.png
├── employee-list.png
├── update-employee.png
```

---

# 👨‍💻 Author

**Onkar Karande**

GitHub: https://github.com/onkarkarande77

---

# ⭐ Support

If you found this project useful, please consider giving it a ⭐ on GitHub.

It motivates me to build more full-stack projects and continue learning.
