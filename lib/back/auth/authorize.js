'use strict';
module.exports = {
  isLoggedIn: function (req, res, next) {
    if (req.user) return next();
    res.redirect('/');
  },
  isAdmin: function (req, res, next) {
    if (req.user.admin) return next();
    res.redirect('/');
  }
};
