const loginServices = require('../Services/login.service');

const login = async (req, res) => {
    const { email, password } = req.body;
    const user = await loginServices.signIn(email, password);
    if (user.message === 'Invalid fields') return res.status(400).json(user);
    return res.status(200).json(user);
};

module.exports = {
    login,
};