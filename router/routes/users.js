const express = require('express');
const router = express.Router();
const db = require('../../db/db');

router.get('/new', function (req, res) {
  var error = req.flash('error')[0];
  res.render('users/new', { 'error': error });
});



// CREATES NEW USER
router.post('/create', db.create_user, function (req, res) {
  var data = req.body
  console.log(data);
  if(res.error){
    req.flash('error', res.error);
    res.redirect('new');
  } else {
    res.redirect('/');
  }
});

module.exports = router;
