'use strict';
var router = require('express').Router();

router.use('/auth', require('./auth'));
router.use('/clips', require('./auth/authorize').isAdmin, require('./clips'));
router.use('/api/clips', require('./clips/api'));

router.use(function (req, res) {
  res.render('index', {
    user: req.user
  });
});

module.exports = router;
