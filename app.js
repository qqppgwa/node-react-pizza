var createError = require('http-errors')
var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan')

var indexRouter = require('./routes/index')
var orderRouter = require('./routes/order')
var mysql = require('mysql')
// console.log(mysql)
var app = express()
var dbinfo = {
  host: 'us-cdbr-iron-east-05.cleardb.net',
  user: 'b4691cf11c462d',
  password: '76c6ca09',
  database: 'heroku_e1f59cb6f92f50c'
}
var con

function handleErr() {
  con = mysql.createConnection(dbinfo)

  // console.log(con)
  con.connect(function (err) {
    if (err) {
      console.log('connecting error')
      setTimeout(handleErr, 2000)
      // return;
    }
    console.log('connecting success')
  })
  con.on('error', function (err) {
    console.log('db error', err)
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
      handleErr()
    } else {
      throw err
    }
  })
}
handleErr()
app.use(function (req, res, next) {
  req.con = con
  next()
})
// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(logger('dev'))
app.use(express.json())
app.use(
  express.urlencoded({
    extended: false
  })
)
app.use(cookieParser())
// app.use(express.static(path.join(__dirname, 'react-ui/build')))
// app.get('/*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'react-ui/build', 'index.html'));
// });
// console.log(__dirname)
if (process.env.NODE_ENV === 'production') {
  // Serve any static files

  app.use(express.static(path.join(__dirname, 'react-ui/build')));
  // Handle React routing, return all requests to React app
  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'react-ui/build', 'index.html'));
  });
  // app.use(express.static(path.resolve(__dirname, 'react-ui/build')));
  // app.get('*', function (request, response) {
  //   response.sendFile(path.resolve(__dirname, 'react-ui/build', 'index.html'));
  // });
}
app.use('/', indexRouter)
app.use('/order', orderRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

var port = process.env.PORT || 5000
app.listen(port)
module.exports = app