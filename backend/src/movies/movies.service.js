const knex = require("../db/connection");
const mapProperties = require("../utils/map-properties");

function list() {
  return knex("movies").select("*");
}

function listMoviesShowing(isShowing){
  return knex("movies")
    .distinct("movies.movie_id")
    .join("movies_theaters", "movies.movie_id", "movies_theaters.movie_id")
    .select("movies.*")
    .where({"movies_theaters.is_showing": isShowing})
}

function movieById(movieId){
  return knex("movies")
    .select("*")
    .where({"movie_id": movieId})
}

function theatersByMovieId(movieId){
  return knex("movies")
    .join("movies_theaters", "movies.movie_id", "movies_theaters.movie_id")
    .join("theaters", "movies_theaters.theater_id", "theaters.theater_id")
    .select("theaters.*")
    .where({"movies.movie_id": movieId})
}

const addCritics = mapProperties({
  critic_id: "critic.critic_id",
  preferred_name: "critic.preferred_name",
  surname: "critic.surname",
  organization_name: "critic.organization_name",
  created_at: "critic.created_at",
  updated_at: "critic.updated_at",
  updated: "updated_at",
  created: "created_at"
})


function reviewsByMovieId(movieId){
return knex("reviews")
    .join("critics", "reviews.critic_id", "critics.critic_id")
    .select(
        "reviews.review_id",
        "reviews.content", 
        "reviews.score", 
        "reviews.created_at as created", 
        "reviews.updated_at as updated", 
        "reviews.critic_id", 
        "reviews.movie_id",
        "critics.*"
    )
    .where({"reviews.movie_id": movieId})
    .then((reviews) => {
      const reviewsWithCritic = reviews.map((review) => addCritics(review))
      return reviewsWithCritic;
    })
}

module.exports = {
  list,
  listMoviesShowing,
  movieById,
  theatersByMovieId,
  reviewsByMovieId,
};










































