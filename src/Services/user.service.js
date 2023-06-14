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

const findAllUsers = async () => {
    const users = await User.findAll({
        attributes: { exclude: ['password'] },
    });
    return users;
};

const findUser = async (id) => {
    const user = await User.findByPk(id, {
        attributes: { exclude: ['password'] } });
    return user;
};

const deleteUser = async (id) => {
    await User.destroy({ where: { id } });
    return undefined;
};

module.exports = {
    addUser,
    findAllUsers,
    findUser,
    deleteUser,
};