# We Love Movies

This app will get a list of movies, reviews, theaters, or critics. This was meant to excercise my ability to set up a database and building out specific routes so that users can gain access to data about movies, theaters, and reviews.

## Links
- [Live Link](https://we-love-movies--client.herokuapp.com)  
- [API](https://radiant-fjord-48175.herokuapp.com/movies)

### API Endpoints
- "/movies" => accepts is_showing as a query parameter
- "/movies/:movie_id"
- "/movies/:movie_id/theaters"
- "/movies/:movie_id/reviews"
- "/movies/:movie_id/critics"
- "/theaters"
- "/:reviewId"

## Home Page/Find A Movie:
Clicking on the movie takes you to it's description page with a list of reviews and theaters where you can view that movie.

![Screenshot (12)](https://user-images.githubusercontent.com/57878265/187742605-4977a678-ff30-4979-b4d2-b50c327b363e.png)

## Find a theater:
This page allows you to find a theater based on a specific movie. Clicking on see more takes you to it's description page with a list of theaters where you can view that movie.

![Screenshot (13)](https://user-images.githubusercontent.com/57878265/187742584-8eb9ebe4-d0aa-4ff9-8cfc-e1cc56a8a4c9.png)

## Theaters:
This page allows you to view a list of movies that any theater is showing. Clicking on a movie takes you to it's description page.

![Screenshot (14)](https://user-images.githubusercontent.com/57878265/187742563-59ad0b75-3b41-4e4c-9ef7-af4417ab6c45.png)

## Movie Reviews:
This is a description page with a list of reviews and theaters where you can view a movie.

![Screenshot (15)](https://user-images.githubusercontent.com/57878265/187742533-c5ad8490-e582-4909-98df-e2ab3264549a.png)





