import re

class Review:
    def __init__(self):
        self.rating = -1            # integer between 1 and 5 - number of stars
        self.date = 0               # integer - number of days before present date              
        self.text = ""

# Returns array of raw reviews, gets rid of irrelevant information like
# reviewers' names, 'Local Guide', 'Share', etc. 
def getReviews(rawText):
    splitOnNewline = rawText.split('\n\n')
    return [s for s in splitOnNewline if '★' in s]

# Call this function on each review after calling getReviews to create Review object
# with date and review text
def processReview(rawReview):
    # TODO: Make RegEx pattern more robust
    pattern = re.compile('^★★★★★\s([0-9]{1,2}|a|an)\s[a-z]+\sago')
    dateLine = ''
    try:
        dateLine = pattern.match(rawReview).group()
    except:
        print('Error, unable to parse date from review.')
    dateLineTokens = dateLine.split(' ')
    dateLineTokens.pop(0)
    delimiter = ' '
    # TODO: Convert date to number of days
    date = delimiter.join(dateLineTokens)
    reviewText = rawReview.split(dateLine + ' ')[0]
    review = Review()
    review.date = date
    review.text = reviewText
    return review
    

# Testing
'''
print(getReviews(r"""Xavier C
Local Guide ・96 reviews・397 photos

★★★★★ 3 weeks ago
Handpulled noodles are pretty good. Broth is tasty, chili is not that hot, but flavourful. You can order tendon during the weekend. Portions are an insane size, even if you get the smallest one. Great value for students, and this is ...
More

+3
  2   Share
Sam mmy
13 reviews"""))


print(processReview(getReviews(r"""Xavier C
Local Guide ・96 reviews・397 photos

★★★★★ 3 weeks ago
Handpulled noodles are pretty good. Broth is tasty, chili is not that hot, but flavourful. You can order tendon during the weekend. Portions are an insane size, even if you get the smallest one. Great value for students, and this is ...
More

+3
  2   Share
Sam mmy
13 reviews""")[0]))
'''