const userServices = require('../Services/user.service');

const addUser = async (req, res) => {
    const { displayName, email, password, image } = req.body;
    const user = await userServices.addUser({ displayName, email, password, image });
    if (user.message === 'User already registered') return res.status(409).json(user);
    return res.status(201).json(user);
};

module.exports = {
    addUser,
};