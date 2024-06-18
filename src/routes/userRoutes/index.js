/* Plugins */
const express = require("express");
const userRoutes = express.Router();

/* Api's */
const { login } = require('./login');
const { checkLoginStatus } = require('./checkLoginStatus');

userRoutes.post('/login', login); /* login action api. */
userRoutes.post('/checkLoginStatus', checkLoginStatus);

module.exports = { userRoutes };