require('dotenv').config();
const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['x-authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    
    if (token) {
      jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
        if (err) {
          console.error('Invalid token', err);
          req.user = null;
        } else {
          req.user = user;
        }
        next();
      });
    } else {
      req.user = null;
      next();
    }
  };

module.exports = authenticateToken;
