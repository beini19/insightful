import requests
import json
from business import Business, Review
from privatekey import api_key

class ApiError(Exception):
    def __init__(self, value):
        self.value = value
    def __str__(self):
        return repr(self.value)

# Takes in a query parameter, which should be a string with the address or place name
# Returns a business object with information about name, location, and place_id
def get_business_info(query):
    # create url for API request
    api_url = "https://maps.googleapis.com/maps/api/place/findplacefromtext/json"
    response = requests.get(api_url + "?input=" + query + "&inputtype=textquery&key=" + api_key + "&fields=name,formatted_address,place_id")
    if response.status_code != 200:
        raise ApiError("An error with status code {} occurred" .format(response.status_code))
    else:
        json_response = response.json()         # store API info in business object
        print(json_response)
        business = Business()
        # TODO: throw appropriate exception if daily request quota for this API is reached
        business.name = json_response["candidates"][0]["name"]
        business.location = json_response["candidates"][0]["formatted_address"]
        business.place_id = json_response["candidates"][0]["place_id"]
        return business

# Takes in place_id parameter and returns a URL to the specified place in google maps
# "https://www.google.com/maps/search/?api=1&query=Google&query_place_id=ChIJN1t_tDeuEmsRUsoyG83frY4"
# Note: Maps URLs have a character limit of 2048 characters
# TODO: Add validation for character limit
def get_maps_url(place_id):
    query = ""          # temp query, add as param later
    maps_url = "https://www.google.com/maps/search/?api=1&query=" + query + "&query_place_id=" + place_id
    return maps_url

# Temporary data for testing (since maps API has a daily request quota of about 5)
business = Business()
business.name = "200 Waterloo Ave"
business.location = "200 Waterloo Ave, Guelph, ON N1H 3J5, Canada"
business.place_id = "ChIJn_pSxreaK4gRBaqeg1MbXa8"

# business = get_business_info("200 Waterloo Ave")
print(get_maps_url(business.place_id))
business = get_business_info("")
print(business.name + "\n" + business.location + "\n" + business.place_id)