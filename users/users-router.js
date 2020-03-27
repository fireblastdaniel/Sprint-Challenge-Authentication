const router = require('express').Router();

const Users = require('./users-model.js');
const restricted = require('../auth/authenticate-middleware.js');

module.exports = router;
