module.exports = (app) => {
  const index = () => {
    return app.db('users').select();
  };

  const store = (user) => {
    return app.db('users').insert(user, '*');
  };

  return { index, store };
};
