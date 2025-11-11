from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .database import init_db
from app.routers import surveys





app = FastAPI()

# ---- CORS (dev) ----
origins = [
    "http://localhost:30000",
    "http://127.0.0.1:30000",
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,      # or ["*"] during dev only
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
# ---------------------

@app.on_event("startup")
def on_startup():
    init_db()

app.include_router(surveys.router, prefix="")
