module.exports = function(app){
  app.use('/', require('./routes/home'));
  app.use('/users', require('./routes/users'));
  app.use('/sessions', require('./routes/sessions'));
  app.use('/apiThing', require('./routes/apiThing'));
  app.use('/favorites', require('./routes/favorites'));
};
