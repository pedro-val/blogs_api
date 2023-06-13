const { User } = require('../models');
const jwt = require('../utils/jwtoken');

const addUser = async ({ displayName, email, password, image }) => {
    const userExists = await User.findOne({ where: { email } });
    if (!userExists) {
        const newUser = await User.create({ displayName, email, password, image });
        const token = jwt.createToken({ id: newUser.id, email: newUser.email });
        return ({ token });
    } 
    return ({ message: 'User already registered' });
};

module.exports = {
    addUser,
};