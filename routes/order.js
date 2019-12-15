var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/getOrderList', function (req, res, next) {
  var db = req.con
  var data = ''
  // console.log(req)
  db.query('SELECT * FROM orderitem', function (err, rows) {
    if (err) {
      // console.log('kk')
      console.log(err)
    }
    var data = rows
    // console.log(data)
    res.set('Content-Type', 'application/json')
    res.send(
      JSON.stringify({
        data: data
      })
    )
  })
});

module.exports = router;