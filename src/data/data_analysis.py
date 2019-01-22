import json
from watson_developer_cloud import NaturalLanguageUnderstandingV1
from watson_developer_cloud.natural_language_understanding_v1 import Features, EntitiesOptions, KeywordsOptions
from privatekey import watson_key
from generate_sample_data import read_review_data, print_review_list

# print_review_list(review_list)
def get_sentiment_analysis(review_list):
    service = NaturalLanguageUnderstandingV1(
        version='2018-08-01',
        url='https://gateway-wdc.watsonplatform.net/natural-language-understanding/api',
        iam_apikey=watson_key)

    response = service.analyze(
        text='Bruce Banner is the Hulk and Bruce Wayne is BATMAN! '
        'Superman fears not Banner, but Wayne.',
        features=Features(entities=EntitiesOptions(),
                            keywords=KeywordsOptions())
    ).get_result()

    print json.dumps(response)

review_list = read_review_data("sample_text.json")
get_sentiment_analysis(review_list)

    
