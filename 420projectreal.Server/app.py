from flask import Flask, request, jsonify
from flask_cors import CORS
import openai
import os
import json
import logging
from dotenv import load_dotenv
import re

load_dotenv()

app = Flask(__name__)
CORS(app)

openai.api_key = os.getenv("OPENAI_API_KEY")

logging.basicConfig(level=logging.DEBUG)

@app.route('/generate', methods=['POST'])
def generate_text():
    data = request.get_json()
    actors = data.get("actors", "")
    genre = data.get("genre", "")
    director = data.get("director", "")
    summary = data.get("summary", "")

    prompt = (
        f"You are a project manager for movies with access to all IMDb movie records. Generate an IMDb title, rating, "
        f"and box office income based on the following details. Provide an explanation of the movie's performance "
        f"and offer suggestions for improvement.\n\n"
        f"Actors: {actors}\nGenre: {genre}\nDirector: {director}\nSummary: {summary}\n\n"
        f"Return the results as JSON with fields: title, rating, box_office, and summary."
    )

    try:
        response = openai.ChatCompletion.create(
            model="gpt-4",
            messages=[{"role": "user", "content": prompt}]
        )
        gpt_response = response.choices[0].message['content']
        logging.debug(f"GPT-4 Response: {gpt_response}")

        json_match = re.search(r'\{.*?\}', gpt_response, re.DOTALL)
        if json_match:
            json_str = json_match.group(0)
            output_data = json.loads(json_str)
            return jsonify(output_data)
        else:
            logging.error("No JSON found in the response")
            return jsonify({"error": "No valid JSON found in the response"}), 500

    except Exception as e:
        logging.error(f"Error: {str(e)}")
        return jsonify({"error": str(e)}), 500

@app.route('/generate_poster', methods=['POST'])
def generate_poster():
    data = request.get_json()
    prompt = data.get("prompt", "")

    try:
        response = openai.Image.create(
            model="dall-e-3",
            prompt=prompt,
            n=1,
            size="1024x1024",
            quality="hd",
        )
        image_url = response['data'][0]['url']
        logging.debug(f"DALL-E Image URL: {image_url}")

        return jsonify({"image_url": image_url})

    except Exception as e:
        logging.error(f"Error: {str(e)}")
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
