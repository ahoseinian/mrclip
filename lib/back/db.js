'use strict';
var db = require('mongoose');
db.connect('mongodb://localhost/mrclip');

module.exports = db;
