var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/getMenu', function (req, res, next) {
  var db = req.con
  var data = ''
  // console.log(req)
  db.query('SELECT * FROM menu ORDER BY id', function (err, rows) {
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
})
router.get('/getCrust', function (req, res, next) {
  var db = req.con
  var data = ''

  db.query('SELECT * FROM crust', function (err, rows) {
    if (err) {
      // console.log('kk')
      // console.log(err)
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
})
router.get('/getSize', function (req, res, next) {
  var db = req.con
  var data = ''

  db.query('SELECT * FROM size', function (err, rows) {
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
})
router.get('/getTopping', function (req, res, next) {
  var db = req.con
  var data = ''

  db.query('SELECT * FROM addtopping', function (err, rows) {
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
})
router.get('/', function (req, res, next) {
  // res.render('index', {
  //   title: 'Express'
  // });
  var db = req.con
  var data = ''

  db.query('SELECT * FROM menu', function (err, rows) {
    if (err) {
      // console.log('kk')
      console.log(err)
    }
    // console.log('jjjjjjjjjjjjjjjjjjj')
    var data = rows
    // console.log(data)
    // use index.ejs
    // res.render('index', {
    //   title: 'Account Information',
    //   data: data
    // })
  })
})
router.post('/saveOrder', function (req, res, next) {
  // res.render('index', {
  //   title: 'Express'
  // });
  var db = req.con
  var param = req.body
  // var data = ''
  var arr = []
  console.log(req.body)
  for (var i = 0; i < param.length; i++) {
    var str = `('${param[i].pizza}','${param[i].size}','${param[i].crust}','${param[i].topping}','${param[i].total}')`
    arr.push(str)
  }
  console.log(arr.join(','))
  var qu = `insert into orderitem(flavour,size,crust,extraTop,total) values ${arr.join(',')};`
  db.query(qu, function (err, rows) {
    if (err) {
      // console.log('kk')
      console.log(err)
    }
    console.log(rows)
    // var data = rows
    // console.log(data)
    // use index.ejs
    // res.render('index', {
    //   title: 'Account Information',
    //   data: data
    // })
    res.set('Content-Type', 'application/json')
    res.send(
      JSON.stringify({
        data: 'ok'
      })

    )
  })

  // db.query('SELECT * FROM menu', function (err, rows) {
  //   if (err) {
  //     // console.log('kk')
  //     console.log(err)
  //   }
  //   // console.log('jjjjjjjjjjjjjjjjjjj')
  //   var data = rows
  //   // console.log(data)
  //   // use index.ejs
  //   res.render('index', {
  //     title: 'Account Information',
  //     data: data
  //   })
  // })
})

module.exports = router