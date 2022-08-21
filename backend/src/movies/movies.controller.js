const service = require("./movies.service");
const asyncErrorBoundary = require("../error/asyncErrorBoundary");

async function movieIdExists(req, res, next) {
  const {movie_id} = req.params
  const movieId = await service.movieById(movie_id);
  if(movieId.length > 0){
    return next()
  }else{
    return next({ status: 404, message: `movieId cannot be found.` });
  }
}

async function list(req, res, next) {
  const isShowing = req.query.is_showing === 'true'
  let data;
  if(req.query.is_showing === undefined){
    data = await service.list();
  }else{
    data = await service.listMoviesShowing(isShowing);
  }   
  res.json({ data });
}

async function movieById(req, res, next){
  const movieId = req.params.movie_id
  const data = await service.movieById(movieId);
  res.json({data: data[0]})
}

async function pageNotFound(req, res, next){
    return next({status: 404, message: `page not found`})
}

async function theaterByMovieId(req, res, next){
  const movieId = req.params.movie_id
  const data = await service.theatersByMovieId(movieId)
  res.json({data})
}

async function reviewsByMovieId(req, res, next){
  const movieId = Number(req.params.movie_id)
  const data = await service.reviewsByMovieId(movieId)
  res.json({data})
}


module.exports = {
  list: asyncErrorBoundary(list),
  movieById: [
    asyncErrorBoundary(movieIdExists), 
    asyncErrorBoundary(movieById)
  ],
  theaterByMovieId: [
    asyncErrorBoundary(movieIdExists), 
    asyncErrorBoundary(theaterByMovieId)
  ],
  reviewsByMovieId: [
    asyncErrorBoundary(movieIdExists), 
    asyncErrorBoundary(reviewsByMovieId)
  ], 
  pageNotFound: asyncErrorBoundary(pageNotFound)
};

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  