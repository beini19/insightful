from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import time

def get_reviews():
    driver = webdriver.Chrome()
    # (https://www.google.ca/search?q=google&rlz=1C1CHBF_enCA789CA789&oq=google&aqs=chrome..69i57j69i60l5.5837j0j7&sourceid=chrome&ie=UTF-8")
    # driver.get("")
    driver.get("https://www.google.ca/maps/@43.4830284,-80.5324829,15z")
    #numReviewsButton = driver.find_element_by_xpath("//button[@class='section-reviewchart-numreviews']")
    #numReviewsButton.click()
    driver.execute_script('window.scrollTo(0, document.body.scrollHeight);')
    # reviewWidget = driver.find_element_by_xpath("//*[@id='pane']/div/div[1]/div/div/div[2]")
    # driver.execute_script('getElementByClassName("section-listbox section-scrollbox scrollable-y").scrollBy(0, 1000)')
    # driver.execute_script('reviewWidget.scrollTo(document.body.scrollHeight,0)') # test this
    time.sleep(20)
    driver.close()

get_reviews()