var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  // res.render('index', {
  //   title: 'Express'
  // });
  var db = req.con;
  var data = "";

  db.query('SELECT * FROM menu', function (err, rows) {
    if (err) {
      console.log('kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk');
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