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
 
@app.route("/insights/", methods=['POST'])
def get_insights():
    # text = request.data
    # if not text:
    #     return "no text sent"
    # insight = get_insight(text)
    
    # json_insight = json.dumps(insight.__dict__)
    # print("returning analysis:")
    # print(insight)

    test_insight = {
        "reviewTrends": [[0, 3],[5, 13],[10, 22],[15, 36],[20, 48],[25, 59],[30, 77],[35, 85]],
        "sentimentData": {           
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
                    "score": 0.35194, 
                    "label": "positive"
                }
            }, 
            "language": "en", 
            "keywords": [
                {
                    "relevance": 0.867717, 
                    "text": "Great value", 
                    "count": 1, 
                    "sentiment": {"score": 0.891124, "label": "positive"}
                },
                {
                    "relevance": 0.855505, 
                    "text": "insane size", 
                    "count": 1, 
                    "sentiment": {"score": 0.01124, "label": "positive"}
                }, 
                {
                    "relevance": 0.664524, 
                    "text": "peak times", 
                    "count": 1, 
                    "sentiment": {"score": -0.690277, "label": "negative"}
                }, 
                {
                    "relevance": 0.65344, 
                    "text": "Portions", 
                    "count": 1, 
                    "sentiment": {"score": 0.671124, "label": "positive"}}, 
                {
                    "relevance": 0.637883, 
                    "text": "amount of traffic",
                    "count": 1, 
                    "sentiment": {"score": -0.341124, "label": "negative"}
                }
            ], 
            "usage": {
                "text_characters": 331, 
                "features": 4, 
                "text_units":1
            }          
        }
    }
    return jsonify(test_insight)
    # return jsonify(insight)



if __name__ == "__main__":
    app.run()
