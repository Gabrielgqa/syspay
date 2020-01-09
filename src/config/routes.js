module.exports = (app) => {
  app.route('/users')
    .get(app.routes.users.index)
    .post(app.routes.users.store);
};
