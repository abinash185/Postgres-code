module.exports = (schema) => async (req, res, next) => {
  try {
    await schema.validateAsync(req.body, { abortEarly: false, stripUnknown: true });
    next();
  } catch (err) {
    const details = err.details ? err.details.map(d => d.message) : [err.message];
    return res.status(400).json({ success: false, errors: details });
  }
};
