from flask import Flask, request, jsonify
from flask_cors import CORS
from data_analysis import get_insight
import json

app = Flask(__name__)
# change to resource specific CORS
CORS(app)
 
@app.route("/")
def hello():
    return jsonify({"message" : "Welcome to Insightful!"})
 
@app.route("/get_insights/", methods=['POST'])
def get_insights():
    text = request.data
    print(text)
    if not text:
        return "no text sent"

    insight = get_insight(text)
    # json_insight = json.dumps(insight.__dict__)
    # print("returning analysis:")
    # print(insight)

    test_insight = {
        "emotion": {
            "document": {
                "emotion": {
                    "anger": 0.194194,
                    "joy": 0.624043,
                    "sadness": 0.201655,
                    "fear": 0.004778,
                    "disgust": 0.016226
                }
            }
        },
        "sentiment": {
            "document": {
                "score": 0.5679,
                "label": "positive"
            }
        },
        "language": "en",
        "keywords": [
            {
                "relevance": 0.970355,
                "text": "Great value",
                "count": 1
            },
            {
                "relevance": 0.695119,
                "text": "peak times",
                "count": 1
            },
            {
                "relevance": 0.640712,
                "text": "insane size",
                "count": 1
            },
            {
                "relevance": 0.618598,
                "text": "amount of traffic",
                "count": 1
            },
            {
                "relevance": 0.605925,
                "text": "Broth",
                "count": 1
            },
            {
                "relevance": 0.592893,
                "text": "Portions",
                "count": 1
            },
            {
                "relevance": 0.564587,
                "text": "students",
                "count": 1
            },
            {
                "relevance": 0.540708,
                "text": "minutes",
                "count": 1
            },
            {
                "relevance": 0.540708,
                "text": "chili",
                "count": 1
            },
            {
                "relevance": 0.537293,
                "text": "noodles",
                "count": 1
            },
            {
                "relevance": 0.537293,
                "text": "tendon",
                "count": 1
            },
            {
                "relevance": 0.530043,
                "text": "place",
                "count": 1
            },
            {
                "relevance": 0.526195,
                "text": "weekend",
                "count": 1
            }
        ],
        "concepts": [
            {
                "relevance": 0.91136,
                "text": "Weekend",
                "dbpedia_resource": "http://dbpedia.org/resource/Weekend"
            },
            {
                "relevance": 0.8704,
                "text": "Workweek",
                "dbpedia_resource": "http://dbpedia.org/resource/Workweek"
            }
        ],
        "usage": {
            "text_characters": 362,
            "features": 4,
            "text_units": 1
        }
    }
    # return jsonify(test_insight)
    return jsonify(insight)



if __name__ == "__main__":
    app.run()