
# Contains information about a business on google maps
class Business:
    def __init__(self):
        self.name = ""
        self.location = ""
        self.place_id = ""
        self.reviews = []      # array of reviews for the business


# Contains information about individual reviews for a business
class Review():
    def __init__(self):
        self.rating = -1
        self.date = ""
        self.review_text = ""
        self.review_id = ""

