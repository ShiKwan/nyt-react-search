# NYT Article Search in ReactJS

[NYT Article Search Web Application](https://secret-fortress-69917.herokuapp.com/)

## Technologies applied:
..* ReactJS
..* Socket IO/
..* Express
..* MongoDB
..* Bootstrap 4 Framework

## Description
This single-page application allow users to query NYT News API with 3 filters
    1. number of article return (1, 5, or 10 articles)
    2. start year 
    3. end year

Once articles are scraped, users can browse through the article list, clicking on "read more" will direct users to NYT article page to finish reading the article. 
Users can choose to save favorite articles into database by clicking on 'Save Article' button on the right side of the article.

After an article is saved, an alert would pop up on top of the jumbotron, and the saved article will now show in Saved Articles section. 

User are allow to write note about saved articles by simply typing in the textbox and click 'Save Note' button. 

This application is hooked with socket IO, if other parties that are browsing concurrently with you saved a note or perform a search, notifications (latest five) will appear on the bottom right of the application. 
