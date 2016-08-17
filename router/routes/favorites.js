const express = require('express');
const router = express.Router();
const request = require('request');
const db = require('../../db/db');


router.post('/:user_email', db.new_favorite, function(req, res){
    var params = req.params
    var data = req.body
    console.log('received')

    if (res.error){
      console.log(res.error)
      res.send('nope')
    } else {
      var stuff = {
        params: params,
        data: data
      }
      res.render('favorites/index', stuff)
    }
    res.send(stuff)

});

module.exports = router;
