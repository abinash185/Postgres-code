const errorHandler = (err, req, res, next) => {
  console.error(err);

  // Handle PG unique violation
  if (err.code === '23505') {
    // duplicate key
    return res.status(409).json({ success: false, message: 'Duplicate value', detail: err.detail });
  }

  // default
  const status = err.status || 500;
  const message = status === 500 ? 'Internal Server Error' : err.message;
  return res.status(status).json({ success: false, message });
};

const notFoundHandler = (req, res) => {
  return res.status(404).json({ success: false, message: 'Not Found' });
};

module.exports = { errorHandler, notFoundHandler };
