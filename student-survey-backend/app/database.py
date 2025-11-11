from sqlmodel import SQLModel, create_engine

MYSQL_URL = "mysql+mysqlconnector://root:admin123@localhost:3306/student_survey"


engine = create_engine(MYSQL_URL, echo=True)

def init_db():
    from . import models
    SQLModel.metadata.create_all(engine)
