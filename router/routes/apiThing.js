const express = require('express');
const router = express.Router();
const request = require('request');

router.get('/', function (req, res){
  // var url = 'https://api.pinterest.com/v1/boards/gabyhernandez/adulting/pins/?' +
  //   'access_token=AUESdLxNcwMLg5t1RUIfaxJ8Q7pYFGobSOzrJXVDUYOQLgBG9wAAAAA';


    var url = 'https://api.pinterest.com/v1/boards/gabyhernandez/adulting/pins/?cursor=&' + 'access_token=Aa3oVOLTqkoHtqq6LAhhMnzqIopDFGrHzPDVwMxDUYOQLgBG9wAAAAA'+ '&fields=id%2Clink%2Cnote%2Curl%2Cimage%2Cmedia';

  request(url, function (error, response, body) {
    body = JSON.parse(body)
    console.log(body)
  if (!error && response.statusCode == 200) {
    res.render('./api/index', body)


// var pins = [];
// body.data.forEach(function(pin) {
//     var url = 'https://api.pinterest.com/v1/pins/' + pin.id +
//     '?access_token=AUESdLxNcwMLg5t1RUIfaxJ8Q7pYFGobSOzrJXVDUYOQLgBG9wAAAAA';
//     request(url, function (error, response, pin_body) {
//         pin_body = JSON.parse(pin_body)
//         console.log(pin_body)
//         if (!error && response.statusCode == 200) {
//       pins.push(pin_body);
//     }
//     }); // ends request function
//    }); // ends each pin function

//    console.log(pins)  // CALLING EACH PIN   // <============ HERE!
//     res.render('./api/index', pins)

//   // **************************************
//   // **************************************
//   // **************************************

  } else {
    console.log(error)
  }


})
});




module.exports = router;
