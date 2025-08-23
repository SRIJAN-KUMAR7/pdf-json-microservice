from fastapi import FastAPI, UploadFile, File
from .pdf_parser import pdf_to_text
from .llm_extractor import text_to_json
import shutil
import os
app = FastAPI()
@app.get("/")
def read_root():
    return {"message": "PDF-to-JSON API is running"}
@app.post("/upload/")
async def upload_pdf(file: UploadFile = File(...)):
    file_path = f"temp_{file.filename}"
    with open(file_path, "wb") as f:
        shutil.copyfileobj(file.file, f)
    text = pdf_to_text(file_path)

    json_output = text_to_json(text)
    os.remove(file_path)
    
    return {"json": json_output}
