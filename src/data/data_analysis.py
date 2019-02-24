import json
from watson_developer_cloud import NaturalLanguageUnderstandingV1
from watson_developer_cloud.natural_language_understanding_v1 import Features, EntitiesOptions, KeywordsOptions, EmotionOptions, ConceptsOptions, SentimentOptions
from privatekey import watson_key
from generate_sample_data import read_review_data, print_review_list
from reviewdata import ReviewData, EmotionData, Keyword, Concept

# print_review_list(review_list)
def get_sentiment_analysis(review_text):
    service = NaturalLanguageUnderstandingV1(
        version='2018-08-01',
        url='https://gateway-wdc.watsonplatform.net/natural-language-understanding/api',
        iam_apikey=watson_key)

    response = service.analyze(
        text=review_text,
        features=Features(sentiment=SentimentOptions(),
                        keywords=KeywordsOptions(sentiment=True, limit=5),
                        emotion=EmotionOptions())
    ).get_result()

    return response

def get_insight(text):
    # review_list = read_review_data("sample_text.json")
    response = get_sentiment_analysis(text)
    print(json.dumps(response))
    # response = json.loads(jsonresponse)
    # review_data = parse_review_data(response)
    return response

# def parse_review_data(response):
#     review_data = ReviewData()

#     # extract sentiment data
#     review_data.sentiment_score = response['sentiment']['document']['score']
#     review_data.sentiment_label = response['sentiment']['document']['label']
#     review_data.emotion_data = response['emotion']['document']['emotion']

#     # extract keywords from response
#     keywords = []
#     for keyword in response['keywords']:
#         temp = Keyword(keyword['text'], keyword['relevance'])
#         keywords.append(temp)

#     review_data.keywords = keywords

#     # extract concepts from response
#     concepts = []
#     for concept in response['concepts']:
#         temp = Concept(concept['text'], concept['relevance'])
#         concepts.append(temp)

#     review_data.concepts = concepts
#     return review_data







    
