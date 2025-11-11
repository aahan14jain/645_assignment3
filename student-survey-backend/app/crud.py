from sqlmodel import Session, select
from .models import Survey
from .database import engine

def get_surveys():
    with Session(engine) as session:
        return session.exec(select(Survey)).all()

def create_survey(survey: Survey):
    with Session(engine) as session:
        session.add(survey)
        session.commit()
        session.refresh(survey)
        return survey

def update_survey(id: int, updated: dict):
    with Session(engine) as session:
        survey = session.get(Survey, id)
        if not survey:
            return None
        for key, value in updated.items():
            setattr(survey, key, value)
        session.commit()
        session.refresh(survey)
        return survey

def delete_survey(id: int):
    with Session(engine) as session:
        survey = session.get(Survey, id)
        if not survey:
            return None
        session.delete(survey)
        session.commit()
        return survey
