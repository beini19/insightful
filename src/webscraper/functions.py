from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import time

def get_reviews():
    driver = webdriver.Chrome()
    driver.get("https://www.google.ca/maps/place/Gol's+Lanzhou+Noodle/@43.4726523,-80.5362191,21z/data=!4m5!3m4!1s0x882bf5b25a94ebb3:0x1ac4eaf8c994bd9a!8m2!3d43.4725456!4d-80.5361185")
    numReviewsButton = driver.find_element_by_xpath("//button[@class='section-reviewchart-numreviews']")
    numReviewsButton.click()
    reviewWidget = driver.find_element_by_xpath("//div[@class='widget-pane-content']")
    driver.execute_script('arguments[0].scrollTop = arguments[0].scrollHeight', reviewWidget) # test this
    time.sleep(20)
    driver.close()
    return reviews # array of Review objects
