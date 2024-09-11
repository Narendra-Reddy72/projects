require('dotenv').config();
const jwt = require('jsonwebtoken');

const verifyToken = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        if (authHeader && authHeader.startsWith('Bearer ')) {
            const token = authHeader.split(' ')[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = decoded;
            next();
        } else {
            return res.status(401).json({
                success: false,
                message: 'Invalid token'
            });
        }
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: err.message
        });
    }
};

const authorize = (role) => {
    return (req, res, next) => {
        try {
            if (req.user && req.user.role === role) {
                next();
            } else {
                return res.status(403).json({
                    success: false,
                    message: 'Access Forbidden'
                });
            }
        } catch (err) {
            return res.status(500).json({
                success: false,
                message: err.message
            });
        }
    };
};

module.exports = { verifyToken, authorize };
