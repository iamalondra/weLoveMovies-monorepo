const router = require("express").Router({ mergeParams: true });
const controller = require("./movies.controller");
const methodNotAllowed = require("../error/methodNotAllowed");

router
  .route("/")
  .get(controller.list)
  .all(methodNotAllowed);

router
  .route("/:movie_id")
  .get(controller.movieById)
  .all(methodNotAllowed)

router
  .route("/:movie_id/theaters")
  .get(controller.theaterByMovieId)
  .all(methodNotAllowed)

router
  .route("/:movie_id/reviews")
  .get(controller.reviewsByMovieId)
  .all(methodNotAllowed)

router
  .route("/:movie_id/critics")
  .get(controller.pageNotFound)
  .all(methodNotAllowed)

module.exports = router;
