var db = require('../dbconnection');//reference of dbconnection.js

var express = require('express');
var router = express.Router();


/* GET crud listing. */
router.get('/', function (req, res, next) {
    console.log(req);
    db.query('select * from test', function (error, results, fields) {
        if (error)
            throw error;
        res.render('crud', JSON.stringify({'sample': results}));
//        res.end(JSON.stringify({'sample': results}));
    });
});

//rest api to get all results
router.get('/test', function (req, res) {
//    console.log(req);
    db.query('select * from test', function (error, results, fields) {
        if (error)
            throw error;
//        res.end(JSON.stringify({'sample': results}));
        res.end(JSON.stringify(results));
    });
});

//rest api to create a new record into mysql database
router.post('/test', function (req, res) {
    var postData = req.body;
//    var post  = {dt: 'Hello MySQL'};
    db.query('INSERT INTO test SET ?', postData, function (error, results) {
        if (error)
            throw error;
        res.end(JSON.stringify(results));
//        console.log(results)
    });
});

//rest api to update record into mysql database
router.put('/test', function (req, res) {
   db.query('UPDATE `test` SET `dt`=? where `id`=?', [req.body.dt,req.body.id], function (error, results, fields) {
	  if (error) throw error;
	  res.end(JSON.stringify(results));
	});
});

//get single data
router.get('/test/:id', function (req, res) {
    db.query('select * from test where id=?', [req.params.id], function (error, results, fields) {
        if (error)
            throw error;
        res.end(JSON.stringify(results));
    });
});



//rest api to delete record from mysql database
router.delete('/test/:id', function (req, res) {
    db.query('DELETE FROM `test` WHERE `id`=?', [req.params.id], function (error, results) {
        if (error)
            throw error;
        res.end('Record has been deleted!');
    });
});


module.exports = router;