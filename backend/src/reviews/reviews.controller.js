const service = require("./reviews.service")
const asyncErrorBoundary = require("../error/asyncErrorBoundary")

async function reviewExists(req, res, next){
  const {reviewId} = req.params
  const review = await service.read(reviewId)
  if(review){
    res.locals.review = review;
    return next()
  }else{
    return next({status: 404, message:`review cannot be found`})
  }
}

async function update(req, res, next){
  const updatedReview = {
    ...req.body.data,
    review_id: Number(req.params.reviewId)
  }
  const data = await service.update(updatedReview)
  res.json({data})
}

async function destroy(req, res, next){
  const { review } = res.locals
  await service.destroy(review.review_id)
  res.sendStatus(204);
}

module.exports = {
  update: [asyncErrorBoundary(reviewExists), asyncErrorBoundary(update)],
  delete: [asyncErrorBoundary(reviewExists), asyncErrorBoundary(destroy)]
}