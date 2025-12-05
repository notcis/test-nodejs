export const echoController = (req, res, next) => {
  try {
    const body = req.body || {};
    res.json({ received: body, length: JSON.stringify(body).length });
  } catch (err) {
    next(err);
  }
};
