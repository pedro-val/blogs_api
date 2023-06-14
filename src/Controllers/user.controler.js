const userServices = require('../Services/user.service');

const addUser = async (req, res) => {
    const { displayName, email, password, image } = req.body;
    const user = await userServices.addUser({ displayName, email, password, image });
    if (user.message === 'User already registered') return res.status(409).json(user);
    return res.status(201).json(user);
};

const findAllUsers = async (req, res) => {
    const users = await userServices.findAllUsers();
    return res.status(200).json(users);
};

const findUser = async (req, res) => {
    const { id } = req.params;
    const user = await userServices.findUser(id);
    if (!user) return res.status(404).json({ message: 'User does not exist' });
    return res.status(200).json(user);
};

const deleteUser = async (req, res) => {
    const { id } = res.locals.user;
    const response = await userServices.deleteUser(id);
    return res.status(204).end(response);
};

module.exports = {
    addUser,
    findAllUsers,
    findUser,
    deleteUser,
};