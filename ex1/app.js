var createError = require('http-errors');
var express = require('express');
var path = require('path');
var logger = require('morgan');
const mongoose = require('mongoose')
var mongoDB = "mongodb://127.0.0.1/scienceJobs"

mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true})
var db = mongoose.connection

db.on('open', () => {
  console.log("Conexão inicializada com a base de dados do mongoDB")
})

db.on('error', () => {
  console.log("Erro ao inicializar a base de dados")
})

//var model = require('./models/contract')




//const fs = require('fs');



//fs.readFile('./db/emprego-cientifico_date.json', 'utf8', function(err, data){
//    model.insertMany(JSON.parse(data))
//});
var indexRouter = require('./routes/index');

var app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/contracts', indexRouter);

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
