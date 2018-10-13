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
    # response = requests.get("https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=Museumof%20Contemporary%20Art%20Australia&inputtype=textquery&fields=photos,formatted_address,name,rating,opening_hours,geometry&key=" + api_key)
    if response.status_code != 200:
        raise ApiError("An error with status code {} occurred" .format(response.status_code))
    else:
        json_response = response.json()         # store API info in business object
        print(json_response)
        business = Business()
        # TODO: test if correct elements are being accessed from json_response
        # business.name = json_response["candidates"][0]["name"]
        # business.location = json_response["candidates"][0]["formatted_address"]
        # business.place_id = json_response["candidates"][0]["place_id"]
        return business


business = get_business_info("200 Waterloo Ave")
print(business.name)