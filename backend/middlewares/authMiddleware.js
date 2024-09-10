require('dotenv').config();
const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['x-authorization']; // Обърнете внимание на малките букви
    const token = authHeader && authHeader.split(' ')[1];

    if (token) {
        jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
            if (err) {
                // Ако токенът е невалиден, все пак продължава
                console.error('Invalid token', err);
                req.user = null;
            } else {
                req.user = user;
            }
            next();
        });
    } else {
        req.user = null; // Ако токенът липсва, просто задайте `req.user` на `null`
        next();
    }
};

module.exports = authenticateToken;
