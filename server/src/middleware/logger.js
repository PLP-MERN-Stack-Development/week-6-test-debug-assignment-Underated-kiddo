// logger.js - Express middleware for logging requests
function logger(req, res, next) {
  console.log(`${req.method} ${req.url}`);
  next();
}
module.exports = logger;
