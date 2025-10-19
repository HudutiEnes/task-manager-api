# Task Manager API

A simple RESTful API for managing tasks. Built with Express.js and modular routing, this project
supports full CRUD operations and includes error handling and status validation.

## 🚀 Features

- Create, read, update, and delete tasks
- In-memory data storage (no database)
- Status validation (`pending`, `in-progress`, `completed`)
- Modular routing and controller structure
- Error-handling middleware
- Morgan logging for request visibility

## 📦 Installation

```bash
git clone https://github.com/HudutiEnes/task-manager-api.git
cd task-manager-api
npm install
npm start
```

## 📮 API Endpoints

| Method | Endpoint         | Description        |
| ------ | ---------------- | ------------------ |
| GET    | `/api/tasks`     | Fetch all tasks    |
| GET    | `/api/tasks/:id` | Fetch a task by ID |
| POST   | `/api/tasks`     | Create a new task  |
| PUT    | `/api/tasks/:id` | Update a task      |
| DELETE | `/api/tasks/:id` | Delete a task      |

🧪 Sample Request (POST)

```bash
{
  "title": "Finish project",
  "status": "in-progress",
  "dueDate": "2025-10-20"
}
```

## 🛡️ Status Validation

The API only accepts the following status values for tasks:

- `pending`
- `in-progress`
- `completed`

Any other value will result in a validation error with a descriptive message.
