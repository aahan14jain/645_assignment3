from fastapi import APIRouter, HTTPException
from sqlmodel import Session, select
from app.models import Survey
from app.database import engine


router = APIRouter()

# POST — Create a new survey
@router.post("/surveys")
def create_survey(survey: Survey):
    with Session(engine) as session:
        session.add(survey)
        session.commit()
        session.refresh(survey)
        return survey

# GET — Get all surveys
@router.get("/surveys")
def read_surveys():
    with Session(engine) as session:
        surveys = session.exec(select(Survey)).all()
        return surveys

# GET — Get a specific survey by ID
@router.get("/surveys/{survey_id}")
def read_survey(survey_id: int):
    with Session(engine) as session:
        survey = session.get(Survey, survey_id)
        if not survey:
            raise HTTPException(status_code=404, detail="Survey not found")
        return survey
