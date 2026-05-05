# 🚀 Team Task Manager (Full-Stack MERN App)

A full-stack web application where users can create projects, assign tasks, and track progress with role-based access (Admin/Member).

---

## 🌐 Live Demo

* 🔗 **Frontend (Vercel):** https://team-task-manager-f1zbdvs74-adityas-projects-4d047252.vercel.app/
* 🔗 **Backend (Railway):** https://team-task-manager-production-e6e5.up.railway.app/

---

## 📌 Features

### 🔐 Authentication

* User Signup & Login
* JWT-based authentication
* Secure password hashing using bcrypt
* Cookie-based session management

### 👥 Role-Based Access

* Admin can create projects
* Members can view and work on tasks

### 📁 Project Management

* Create and manage projects
* Assign users to projects

### ✅ Task Management

* Create tasks under projects
* Assign tasks to users
* Update task status:

  * Todo
  * In Progress
  * Done

### 📊 Dashboard

* View all tasks
* Track:

  * Total tasks
  * Completed tasks
  * Pending tasks

---

## 🛠️ Tech Stack

### Frontend

* React (Vite)
* Tailwind CSS
* Axios

### Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose

### Deployment

* Frontend: Vercel
* Backend: Railway

---

## 📂 Project Structure

```
team-task-manager/
│
├── client/        # Frontend (React + Vite)
│
├── server/        # Backend (Node + Express)
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── index.js
│
└── README.md
```

---

## ⚙️ Environment Variables

### Backend (.env)

```
MONGO_URI=mongodb+srv://aditya_nagar:*******@cluster0.kntb8j9.mongodb.net/?appName=Cluster0
JWT_SECRET=secret_key
```

---

## 🚀 Installation & Setup

### 1️⃣ Clone Repository

```
git clone https://github.com/aditya-nagar/team-task-manager.git
cd team-task-manager
```

---

### 2️⃣ Backend Setup

```
cd server
npm install
npm run dev
```

---

### 3️⃣ Frontend Setup

```
cd client
npm install
npm run dev
```

---

## 🌐 API Endpoints

### Auth

* POST `/api/auth/signup`
* POST `/api/auth/login`

### Projects

* GET `/api/projects`
* POST `/api/projects`

### Tasks

* GET `/api/tasks`
* POST `/api/tasks`
* PUT `/api/tasks/:id`

---

## 🔒 Security Features

* Password hashing using bcrypt
* JWT authentication
* HTTP-only cookies
* Environment variable protection
* CORS configuration

---

## 💡 Future Improvements

* Add team collaboration features
* Task deadlines & reminders
* Notifications system
* UI enhancements

---

## 🧠 What I Learned

* Building full-stack MERN applications
* Authentication & authorization
* REST API design
* Deployment on Railway & Vercel
* Handling cookies & CORS in production

---

## 👨‍💻 Author

**Aditya Nagar**
B.Tech CSE | MERN Developer

---

## ⭐ Acknowledgements

Thanks to modern MERN stack tools and deployment platforms for making this project possible.

---

## 📌 License

This project is for educational and demonstration purposes.
