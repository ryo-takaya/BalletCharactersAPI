let createError = require('http-errors');
let express = require('express');
let path = require('path');
let logger = require('morgan');
let app = express();
const knex = require('./knexbody')

let characterRouter = require('./routes/character');
let titleRouter = require('./routes/title');
let typeRouter = require('./routes/type')


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



app.use('/characters', characterRouter);
app.use('/titles', titleRouter);
app.use('/types',typeRouter)
app.use(express.static(path.join(__dirname, 'public')));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
