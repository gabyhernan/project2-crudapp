const express = require('express');
const router = express.Router();
const request = require('request');

router.get('/', function (req, res){
  var url = 'https://api.pinterest.com/v1/boards/gabyhernandez/adulting/pins/?' +
    'access_token=AUESdLxNcwMLg5t1RUIfaxJ8Q7pYFGobSOzrJXVDUYOQLgBG9wAAAAA';

  request(url, function (error, response, body) {
    body = JSON.parse(body)
    console.log(body)
  if (!error && response.statusCode == 200) {

    //console.log(body) // Show the HTML for the Google homepage.
    // var ourData = {
    //   'data':body,
    //   'url': url,
    // }

    res.render('./api/index', body)

  } else {
    console.log(error)
  }
})
});



router.get('/pin:id', function (req, res){
  var id = req.params.id
  var url = 'https://api.pinterest.com//v1/pins/' + id
    'access_token=AUESdLxNcwMLg5t1RUIfaxJ8Q7pYFGobSOzrJXVDUYOQLgBG9wAAAAA';

  request(url, function (error, response, body) {
    body = JSON.parse(body)
    console.log(body)
  if (!error && response.statusCode == 200) {

    //console.log(body) // Show the HTML for the Google homepage.
    // var ourData = {
    //   'data':body,
    //   'url': url,
    // }

    res.render('./api/index', body)

  } else {
    console.log(error)
  }
})
});
module.exports = router;
