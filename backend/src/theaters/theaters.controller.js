const service = require("./theaters.service");
const asyncErrorBoundary = require("../error/asyncErrorBoundary");

async function theaterIdExists(req, res, next) {
  const {theater_id} = req.params
  const theaterId = await service.theaterById(theater_id);
  if(theaterId.length > 0){
    return next()
  }else{
    return next({ status: 404, message: `theaterId cannot be found.` });
  }
}

async function list(req, res) {
  const data = await service.list();
  res.json({ data });
}

module.exports = {
  list: [asyncErrorBoundary(list)],
}