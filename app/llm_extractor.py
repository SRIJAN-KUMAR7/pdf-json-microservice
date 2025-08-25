from google import genai
import json
import re

def clean_llm_json_response(resp_text: str) -> str:
    code_fence_pattern = r"```json(.*?)```"
    match = re.search(code_fence_pattern, resp_text, re.DOTALL)
    if match:
        return match.group(1).strip()
    return resp_text.strip()
def text_to_json(text: str, api_key: str) -> dict:
    """
    Convert PDF extracted text into structured JSON using Gemini API.
    API key is passed in from FastAPI request headers.
    """
    prompt = (
        "Extract all structured data from the following document text and return it as a valid JSON object. "
        "Strictly return only JSON.\n"
        f"{text}\n"
        "JSON:"
    )
    client = genai.Client(api_key=api_key)
    response = client.models.generate_content(
        model="gemini-2.5-flash",
        contents=prompt
    )
    resp_text = response.text
    cleaned_resp = clean_llm_json_response(resp_text)
    try:
        return json.loads(cleaned_resp)
    except json.JSONDecodeError as e:
        raise ValueError(f"Failed to parse JSON: {e}\nRaw response: {resp_text}")
