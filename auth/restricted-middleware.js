const jwt = require('jsonwebtoken');

const { jwtSecret } = require('../config/secrets');

module.exports = (req, res, next) => {
    const token = req.headers.authorization;

    if (token) {
        jwt.verify(token, jwtSecret, (err, decodedToken) => {
            if (err) {
                res.status(401).json({ errorMessage: 'Token is invalid.' });
            } else {
                next();
            }
        })
    } else {
        res.status(401).json({ errorMessage: 'Token not found.' });
    }
}