from google import genai
import os
from dotenv import load_dotenv
import json
import re
load_dotenv()  
def clean_llm_json_response(resp_text: str) -> str:
    code_fence_pattern = r"```json(.*?)```"
    match = re.search(code_fence_pattern, resp_text, re.DOTALL)
    if match:
        return match.group(1).strip()
    return resp_text.strip()

def text_to_json(text: str) -> dict:
    prompt = (
        "Extract all structured data from the following document text and return it as a valid JSON object. "
        "Strictly return only JSON.\n"
        f"{text}\n"
        "JSON:"
    )
    client = genai.Client(api_key=os.getenv("GENAI_API_KEY"))
    response = client.models.generate_content(
        model="gemini-2.5-flash",
        contents=prompt
    )
    resp_text = response.text
    cleaned_resp = clean_llm_json_response(resp_text)
    try:
        result = json.loads(cleaned_resp)
        return result
    except json.JSONDecodeError as e:
        raise ValueError(f"Failed to parse JSON: {e}\nRaw response: {resp_text}")
