from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .database import init_db

app = FastAPI()

origins = [
    "http://localhost:30000",
    "http://127.0.0.1:30000",
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,      # use ["*"] only for quick local dev
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.on_event("startup")
def on_startup():
    init_db()

@app.get("/health")
def health():
    return {"status": "ok"}
