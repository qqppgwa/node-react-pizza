var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/getMenu', function (req, res, next) {
  var db = req.con;
  var data = "";

  db.query('SELECT * FROM menu', function (err, rows) {
    if (err) {
      // console.log('kk')
      console.log(err);
    }
    var data = rows;
    console.log(data)
    res.set('Content-Type', 'application/json');
    res.send(JSON.stringify({
      data: data
    }));
    // res.send('{"message":"Hello from the custom server!"}');
    // use index.ejs
    // res.render('index', {
    //   title: 'Account Information',
    //   data: data
    // });
  });
})
router.get('/', function (req, res, next) {
  // res.render('index', {
  //   title: 'Express'
  // });
  var db = req.con;
  var data = "";

  db.query('SELECT * FROM menu', function (err, rows) {
    if (err) {
      console.log('kk')
      console.log(err);
    }
    console.log('jjjjjjjjjjjjjjjjjjj')
    var data = rows;
    console.log(data)
    // use index.ejs
    res.render('index', {
      title: 'Account Information',
      data: data
    });
  });
});

module.exports = router;