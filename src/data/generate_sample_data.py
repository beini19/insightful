import json
from review import Review
from pprint import pprint

# populate an array of objects with review test data in the form of a json file
# returns an array of Review objects
def read_review_data(filename):
    review_list = []     
    with open(filename) as json_file:
        data = json.load(json_file)
        for obj in data['reviews']:
            review = Review()
            review.rating = obj['rating']
            review.date = obj['date']
            review.text = obj['review_text']
            review_list.append(review)
    return review_list

def print_review_list(review_list):
    for review in review_list:
        print("Rating: " + str(review.rating))
        print("Date: " + str(review.date))
        print("Text: " + review.text + "\n")

filename = "sample_text.json"
review_list = read_review_data(filename)

# print_review_list(review_list)


# finished data generation
# todo: run data through watson