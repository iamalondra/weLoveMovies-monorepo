const knex = require("../db/connection");
const mapProperties = require("../utils/map-properties");


function read(reviewId) {
  return knex("reviews")
  .select("*")
  .join("critics", "critics.critic_id", "reviews.critic_id")
  .where({ review_id: reviewId })
  .first();
}

const addCritics = mapProperties({
  preferred_name: "critic.preferred_name",
  surname: "critic.surname",
  organization_name: "critic.organization_name",
})


function update(updatedReview){
  return knex("reviews")
    .select("*")
    //returns the number of updated rows NOT the updated object
    .update(updatedReview, "*")
    .where({review_id: updatedReview.review_id})
    .returning("*")
    .then(() => read(updatedReview.review_id))
    .then(addCritics)

}

function destroy(reviewId){
  return knex("reviews").where({review_id: reviewId}).del()
}

module.exports = {
  read,
  update,
  destroy,
};