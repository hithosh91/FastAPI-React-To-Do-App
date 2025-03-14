

# 🚀 FastAPI + React To-Do App

A simple To-Do app built with **FastAPI** (backend) and **React** (frontend). The app allows users to add, delete, and manage tasks.

## 🛠️ Tech Stack

- **Frontend:** React, Axios, CSS
- **Backend:** FastAPI, Pydantic
- **Database:** In-memory (can be extended to PostgreSQL/MySQL)
- **Tools:** Uvicorn, CORS Middleware

---

## 📌 Features

✅ Add new tasks  
✅ Mark tasks as **done**  
✅ Delete tasks  
✅ FastAPI backend with **CORS support**  
✅ React frontend with **Axios API calls**  

---

## 🚀 Installation and Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/hithosh91/FastAPI-React-To-Do-App.git
cd FastAPI-React-To-Do-App
```

---

## 🖥️ Backend Setup (FastAPI)

### 2️⃣ Install Python Dependencies

```bash
cd backend

install fastApi and uvicorn


### 3️⃣ Run FastAPI Server


uvicorn main:app --reload

The API will be available at **`http://127.0.0.1:8000`**



## 🌐 Frontend Setup (React)

##

cd frontend
npm install


### 5️⃣ Run React App


npm start

The frontend will run at http://localhost:5173



## 🔗 API Endpoints

| Method | Endpoint         | Description         |
|--------|-----------------|---------------------|
| GET    | `/todos`        | Fetch all todos    |
| POST   | `/todos`        | Create a new todo  |
| DELETE | `/todos/{title}` | Delete a todo      |

