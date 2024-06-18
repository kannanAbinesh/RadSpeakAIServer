const { accessToken } = require('../../config')
const jwt = require('jsonwebtoken');

const createAuthToken = async ({ emailId }) => await jwt.sign({ emailId }, accessToken, { expiresIn: '3d' }); /* This token generated will get expired wthin 3 days. */

module.exports = { createAuthToken };