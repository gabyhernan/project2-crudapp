const pgp = require('pg-promise')();
const db = pgp('postgres://GAB@localhost:5432/auth');

const bcrypt = require('bcrypt');
const salt = bcrypt.genSalt(10);

var login = function(req, res, next){
  console.log(req.body)
  var email = req.body.email;
  var password = req.body.password;
  var auth_error = 'Incorrect Email / Password!';

  db.one(
    "SELECT * FROM users WHERE email = $1",
    [email]
  ).catch(function(){
    res.error = auth_error;
    console.log('email invalid')
    next();
  }).then(function(user){
    bcrypt.compare(
      password,
      user.password_digest,
      function(err, cmp){
        if(cmp){
          req.session.user = {
            'email': user.email
          };
          console.log('password good')
          next();
        } else {
          console.log('password bad')
          res.error = auth_error;
          next();
        }
      }
    );
  });
};

var logout = function(req, res, next){
  req.session.user = null;
  next()
};

var create_user = function(req, res, next){
  var email = req.body.email;
  var password = req.body.password;
  var username = req.body.username;

  console.log(email)
  bcrypt.hash(password, 10, function(err, hashed_password){
    db.none(
      "INSERT INTO users (email, username, password_digest) VALUES ($1, $2, $3)",
      [email, username, hashed_password]
    ).catch(function(){
      res.error = 'Error. User could not be created.';
      next();
    }).then(function(user){
      req.session.user = {
        'email': email
      };
      next();
    });
  });
};

var new_favorite = function(req, res, next) {
  console.log('somethitng')
  console.log(req.body)
  var user = req.body.user_email;
  var pin_link = req.body.pin_link;
  var pin_image = req.body.pin_image;

  console.log(user); // testing shit out
  db.none("INSERT INTO favorites( user_email, pin_link, pin_image) VALUES ($1,$2,3)",
      [user, pin_link, pin_image]
      ).then(function(user){
        req.session.user = {
          'user': user,
          "pin-link": pin_link,
          "pin_image": pin_image
        }; // closes session user
        next();
      }); // closes then function
  } // closes new_favorite var

module.exports = { new_favorite, login, logout, create_user };
