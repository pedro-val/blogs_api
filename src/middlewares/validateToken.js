const jwt = require('../utils/jwtoken');

const validateToken = async (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) return res.status(401).json({ message: 'Token not found' });
    const decoded = jwt.verifyToken(token);
    if (decoded.message) {
        return res.status(401).json({ message: 'Expired or invalid token' });
    }
    console.log(decoded);
    res.locals.user = decoded;
    next();
};

module.exports = {
    validateToken,
};