from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List

app = FastAPI()

# ✅ Update CORS settings
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # ⚠️ Use "*" for development (Allow all origins) or specify ["http://localhost:3000"]
    allow_credentials=True,
    allow_methods=["*"],  # Allow all HTTP methods (GET, POST, DELETE, etc.)
    allow_headers=["*"],  # Allow all headers
)

# In-memory database
fake_db = []

class TodoItem(BaseModel):
    title: str
    done: bool

@app.get("/todos", response_model=List[TodoItem])
def get_todos():
    return fake_db

@app.post("/todos", response_model=TodoItem)
def create_todo(todo: TodoItem):
    fake_db.append(todo)
    return todo

@app.delete("/todos/{todo_title}")
def delete_todo(todo_title: str):
    global fake_db
    todo_to_delete = next((item for item in fake_db if item.title == todo_title), None)
    if todo_to_delete:
        fake_db = [item for item in fake_db if item.title != todo_title]
        return {"message": "Todo deleted"}
    return {"message": "Todo not found"}
