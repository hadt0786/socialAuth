const express = require('express');

var User = require('../models/user');
const router = express.Router();

router.get('/data', (req, res) => {
  res.send('Content yet to be added to database');
});


router.post('/user', (req, res) => {



  var userDetail = new User({
    id: req.body.id,
    email: req.body.email,
    idToken: req.body.idToken,
    image: req.body.image,
    name: req.body.name,
    provider: req.body.provider,
    token: req.body.token
  })

  userDetail.save((err, userDetail) => {
    if (err) {
      res.status(500).send(err);
    }
    else {
      res.status(201).send(userDetail);
    }
  })
  // res.send('Content yet to be added to database');
});



module.exports = router;
