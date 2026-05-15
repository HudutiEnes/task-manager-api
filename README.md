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

chmod +x ./scripts/setup-firewall.sh
sudo ./scripts/setup-firewall.sh

npm start
```

## 🛡️ Infrastructure & Security

This project is deployed behind a hardened networking stack to ensure local and external security, following DevOps best practices for service isolation.

### 1. Reverse Proxy (Nginx)

Nginx acts as the primary entry point ("The Bouncer") for the API. It is configured to handle traffic on both standard and alternative ports to mirror professional production environments.

- **SSL/TLS Encryption**: All traffic is encrypted using a self-signed RSA-2048 certificate, ensuring data integrity.
- **Port Management**: Nginx listens on port **8080** and **443**, acting as a gateway to the internal Express server running on port 3000.

### 2. Firewall Configuration (Firewalld)

The host system utilizes a "Zero Trust" approach by leveraging Fedora's native `firewalld` zones.

- **Network Isolation**: A custom `devops-projects` zone restricts communication to only the necessary TCP ports.
- **Public Security**: When working on public networks (e.g., University or Coffee Shops), the project can be instantly shielded using `public` or `drop` zones to prevent unauthorized external access.
- **Automation**: Infrastructure setup is scripted in `scripts/setup-firewall.sh` for repeatable and consistent deployment.

### 3. Local Access

To access the API locally through the secure layer:

- **HTTP**: `http://localhost:8080`
- **HTTPS**: `https://localhost` (Note: Use `curl -k` to bypass self-signed certificate warnings).

## 📮 API Endpoints

| Method | Endpoint            | Description        |
| ------ | ------------------- | ------------------ |
| GET    | `/api/v1/tasks`     | Fetch all tasks    |
| GET    | `/api/v1/tasks/:id` | Fetch a task by ID |
| POST   | `/api/v1/tasks`     | Create a new task  |
| PUT    | `/api/v1/tasks`     | Update a task      |
| DELETE | `/api/v1/tasks/:id` | Delete a task      |

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
