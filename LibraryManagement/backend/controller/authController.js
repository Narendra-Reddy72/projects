const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const { generateToken } = require('../utils/token');

exports.createUser = async (req, res) => {
    const { name, email, role, password } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User({ name, email, role, password: hashedPassword });

        await user.save();

        const token = generateToken(user._id, role);

        res.status(201).json({ success: true, token, data: user });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

exports.loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).json({ success: false, message: 'Invalid credentials' });
        }

        const token = generateToken(user._id, user.role);

        res.status(200).json({ success: true, token, data: user });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};
