# Contains information about individual reviews for a business
class Review:
    def __init__(self):
        self.rating = -1            # integer between 1 and 5 - number of stars
        self.date = 0               # integer - number of days before present date              
        self.text = ""

