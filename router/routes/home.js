const express = require('express');
const router = express.Router();
const request = require('request');

router.get('/', function (req, res){

  if(!req.session.user){
    res.redirect('sessions/new');
  } else {
    var url = 'https://api.pinterest.com/v1/boards/gabyhernandez/adulting/pins/?cursor=&' + 'access_token=Aa3oVOLTqkoHtqq6LAhhMnzqIopDFGrHzPDVwMxDUYOQLgBG9wAAAAA'+ '&fields=id%2Clink%2Cnote%2Curl%2Cimage%2Cmedia';

    request(url, function (error, response, body) {
      body = JSON.parse(body)
      //console.log(body)
      data = {
        pins: body,
        user: req.session.user
      }

      console.log(data)

      if (!error && response.statusCode == 200) {
        res.render('./api/index', data)
      }
    // res.render('api/index', { 'email': req.session.user.email });
    }); // ends request method

 } // close if/else !req.session
}); // ends router

module.exports = router;
