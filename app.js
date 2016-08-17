const express = require('express');
const pgp = require('pg-promise')();

// const db = pgp('postgres://GAB@localhost:5432/auth');

const app = express();
const mustacheExpress = require('mustache-express');
const bodyParser = require("body-parser");
const session = require('express-session');
const trianglify = require('trianglify')
const request = require('request');
const flash = require('connect-flash');



app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use("/", express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use(session({ // uses session code
  secret: 'demo-secret',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));

app.use(flash());



// app.get('/sessions', function(req,res){ // gets main page
//   var logged_in ,
//       email;

//       if(req.session.user){
//         logged_in = true;
//         email = req.session.user.email;
//       }
//   var data = {
//     'logged_in': logged_in,
//     'email': email
//   }
//   res.render('sessions/new', data);
// });


// app.post('/login', function(req,res){ // logs user in
//   var data = req.body;

// // Check that their password hashed === password_digest
// // If it is -> loggin in @TODO what does logged in mean though?
// // If it's not -> error
//   db.one(
//     'SELECT * FROM users WHERE email = $1',
//       [data.email]
//     ).catch(function (){ // First, check that the user exists by looking up their email.
//       res.send('Authorization failed. Check your email / passowrd.');
//     }).then(function(user){
//       data.password == user.password
//       bcrypt.compare(
//         data.password,
//          user.password_digest,
//          function (err,match){
//           if(match){
//             // USER IS LOGGED IN HOORAY  // req.session.user is ur pikachu that follows u around site
//             req.session.user = user; // that information is going to persist as long as we venture out these site
//             res.redirect('/');
//           } else {
//             res.send(error);
//           }

//       });
//     });
// });

//   app.get('/logout', function(req, res) {
//         req.session.user = null;
//         res.redirect('/');
//     });


// app.get('/users', function(req,res){ // signs user up
//   res.render('users/new');
// })


// app.post('/users', function(req,res){ // you do not render on a post. That is done on a get.
//                                       //  You redirect on a post
//   var data = req.body; //  request/pulls the body data from form

//   bcrypt.hash(data.password, 10, function(err, hashed_passowrd){

//     db.none(
//     "INSERT INTO users (email, password_digest) VALUES ($1,$2)",
//       [data.email, hashed_passowrd]
//     ).catch(function(){
//       res.send('Error. The user could not be created.')
//     }).then(function(){
//       res.send('User Created!');
//     });

//   });
// });
var port = process.env.PORT || 3000;
app.listen(port, function () { // listen to local server
  console.log('Auth Demo App Online!');
});

app.use(function(err, req, res, next){
  res.status(err.status || 500);
});

const router = require('./router')(app);
