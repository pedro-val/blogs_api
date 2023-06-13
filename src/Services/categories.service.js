const { Category } = require('../models');

const createCategory = async (name) => {
    const verifyIfExists = await Category.findOne({ where: { name } });
    if (verifyIfExists) return { error: { status: 409, message: 'Category already registered' } };
    const category = await Category.create({ name });
    return { id: category.id, name: category.name };
};

const getAllCategories = async () => {
    const categories = await Category.findAll();
    return categories;
};

module.exports = {
    createCategory,
    getAllCategories,
    
};