const rateLimiter = (req, res, next) => {
  next();
};

export default rateLimiter;