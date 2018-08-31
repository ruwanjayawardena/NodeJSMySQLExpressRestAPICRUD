var createError = require('http-errors');
var express = require('express');//Express is a framework for building web applications on top of Node.js
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
//NEW RUWAN
var http = require("http");
var app = express();

//This nodejs module help to reading data from the 'form' element and attached with request.
var bodyParser = require('body-parser'); 

//body-parser configuration
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

//express server that will listen our request on particular port.
var server = app.listen(3000, "127.0.0.1", function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

});
//END OF RUWAN

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
//add crud for routes
var crudRouter = require('./routes/crud');





// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');





app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
//Execute routes
app.use('/crud', crudRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
