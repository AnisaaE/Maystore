const util = require('util');
const jwtCallback = require('jsonwebtoken');

exports.sign= util.promisify(jwtCallback.sign)
exports.verify = util.promisify(jwtCallback.verify)
