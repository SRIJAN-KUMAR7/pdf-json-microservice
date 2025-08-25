from fastapi import FastAPI, UploadFile, File, Request, Depends, HTTPException
from pydantic import BaseModel
from .pdf_parser import pdf_to_text
from .llm_extractor import text_to_json
import shutil
import os
import requests

app = FastAPI()

def extract_api_key(request: Request):
    api_key = request.headers.get("x-gemini-api")
    if not api_key:
        raise HTTPException(status_code=400, detail="GEMINI API key is required in the header")
    return api_key

    
class PDFUrlRequest(BaseModel):
    pdf_url: str

#Health check '/'
@app.get("/")
def read_root():
    return {"message": "PDF-to-JSON API is running"}

from fastapi import Request, UploadFile, File
import shutil, os


#File based route

@app.post("/upload/")
async def upload_pdf(request: Request, file: UploadFile = File(...)):
    api_key = request.headers.get("x-gemini-api")
    if not api_key:
        return {"error": "Missing API key in headers"}
    file_path = f"temp_{file.filename}"
    with open(file_path, "wb") as f:
        shutil.copyfileobj(file.file, f)
    text = pdf_to_text(file_path)
    json_output = text_to_json(text, api_key=api_key)
    os.remove(file_path)
    return {"json": json_output}


#Url based Route 

@app.post("/upload-url/")
async def upload_pdf_url(request: PDFUrlRequest, api_key: str = Depends(extract_api_key)):
    
    response = requests.get(request.pdf_url)
    file_path = "temp_url_file.pdf"
    with open(file_path, "wb") as f:
        f.write(response.content)
    
    text = pdf_to_text(file_path)
    json_output = text_to_json(text,api_key)
    os.remove(file_path)
    
    return {"json": json_output}
