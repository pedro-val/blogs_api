const { User } = require('../models');
const jwt = require('../utils/jwtoken');

const signIn = async (email, password) => {
    const userSign = await User.findOne({ where: { email } });
    if (userSign === null || userSign.password !== password) {
      return {
        message: 'Invalid fields',
      }; 
    }
    const token = jwt.createToken({ id: userSign.id, email: userSign.email });
    return { token };
};

module.exports = {
    signIn,
};