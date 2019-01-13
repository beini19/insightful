class ReviewData:
    def __init__(self):

        self.sentiment_score = -2           # float between -1 and 1
        self.sentiment_label = ""           # positive or negative
        self.emotion_data = EmotionData()   # new EmotionData object
        self.keywords = []                  # array of keyword objects
        self.concepts = []                  # array of concept objects referenced by the text that may not be explicitly there

class EmotionData:
    def __init__(self):
        self.joy = -1             # float between 0 and 1
        self.anger = -1
        self.disgust = -1
        self.sadness = -1
        self.fear = -1

# Potential design decision: keyword and concept inherit from the same base class, 
# which reduces repetition but still makes it possible to add different fields in the future
class Keyword:
    def __init__(self):
        self.text = ""
        self.relevance = -1         # float between 0 and 1

class Concept:
    def __init__(self):
        self.text = ""
        self.relevance = -1         # float between 0 and 1