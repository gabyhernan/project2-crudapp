const express = require('express');
const pgp = require('pg-promise')();

const db = pgp('postgres://GAB@localhost:5432/auth');

const app = express();
const mustacheExpress = require('mustache-express');
const bodyParser = require("body-parser");
const session = require('express-session');
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

app.get('/', function(req,res){ // gets main page
  var logged_in ,
      email;

      if(req.session.user){
        logged_in = true;
        email = req.session.user.email;
      }
  var data = {
    'logged_in': logged_in,
    'email': email
  }
  res.render('index', data);
});


app.listen(3000, function () { // listen to local server
  console.log('Auth Demo App Online!');
});

app.use(function(err, req, res, next){
  res.status(err.status || 500);
});

const router = require('./router')(app);
