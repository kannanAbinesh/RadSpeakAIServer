const { accessToken } = require('../../config');
const jwt = require('jsonwebtoken');

const verifyAuthToken = (token) => {
    try {
        const decoded = jwt.verify(token, accessToken);
        if(decoded) return { status: 200, data: decoded }; 
    } catch (error) {
        console.log(error)
        return { status: 400 };
    }
};

module.exports = { verifyAuthToken };