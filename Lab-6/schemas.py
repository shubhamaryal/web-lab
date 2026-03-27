from pydantic import BaseModel, EmailStr
from typing import List, Optional

class TodoBase(BaseModel):
    title: str
    description: Optional[str] = None
    completed: bool = False

class TodoCreate(TodoBase):
    pass

class TodoResponse(TodoBase):
    id: int
    owner_id: int

    class Config:
        orm_mode = True

class UserCreate(BaseModel):
    email: EmailStr
    password: str

class UserResponse(BaseModel):
    id: int
    email: EmailStr
    todos: List[TodoResponse] = []

    class Config:
        orm_mode = True

class Token(BaseModel):
    access_token: str
    token_type: str