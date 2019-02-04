class EmotionData:
    def __init__(self, joy = -1, anger = -1, disgust = -1, sadness = -1, fear = -1):
        self.joy = joy             # float between 0 and 1
        self.anger = anger
        self.disgust = disgust
        self.sadness = sadness
        self.fear = fear

class ReviewData:
    def __init__(self, score = -2, label = "", emotionData = EmotionData(), keywords = [], concepts = []):
        self.sentiment_score = score            # float between -1 and 1
        self.sentiment_label = label            # positive or negative
        self.emotion_data = emotionData         # new EmotionData object
        self.keywords = keywords                # array of keyword objects
        self.concepts = concepts                # array of concept objects referenced by the text that may not be explicitly there

# Potential design decision: keyword and concept inherit from the same base class, 
# which reduces repetition but still makes it possible to add different fields in the future
class Keyword:
    def __init__(self, text = "", relevance = -1):
        self.text = text
        self.relevance = relevance         # float between 0 and 1

class Concept:
    def __init__(self, text = "", relevance = -1):
        self.text = text
        self.relevance = relevance         # float between 0 and 1