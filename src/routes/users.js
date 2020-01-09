module.exports = (app) => {
  const index = (req, res) => {
    app.services.user.index()
      .then((result) => res.status(200).json(result));
  };

  const store = async (req, res) => {
    const result = await app.services.user.store(req.body);
    res.status(201).json(result[0]);
  };

  return { index, store };
};
