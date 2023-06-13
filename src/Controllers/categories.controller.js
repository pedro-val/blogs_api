const categoriesService = require('../Services/categories.service');

const createCategory = async (req, res) => {
    const category = await categoriesService.createCategory(req.body.name);
    if (category.error) {
        return res.status(category.error.status).json({ message: category.error.message });
    } 
    res.status(201).json(category);
};

module.exports = {
    createCategory,
};