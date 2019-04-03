const UserRoutes = require('./user-routes');
module.exports = (app) => {
  app.use(UserRoutes);
};
