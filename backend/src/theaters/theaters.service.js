const knex = require("../db/connection");
const reduceProperties = require("../utils/reduce-properties");

function theaterById(theaterId){
  return knex("theaters")
    .select("*")
    .where({theater_id: theaterId})
}

const reduceMovies = reduceProperties("theater_id", {
  title: ["movies", null, "title"],
  runtime_in_minutes: ["movies", null, "runtime_in_minutes"],
  rating: ["movies", null, "rating"],
});

function list(){
  return knex("theaters")
    .join("movies_theaters", "theaters.theater_id", "movies_theaters.theater_id")
    .join("movies", "movies.movie_id", "movies_theaters.movie_id")
    .select("theaters.*", "movies.*")
    .where({"movies_theaters.is_showing": true})
    .then((theaters) => reduceMovies(theaters))
}

module.exports = {
  list,
  theaterById,
};