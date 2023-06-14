const { BlogPost, PostCategory, Category } = require('../models');

const addBlogPost = async ({ title, content, userId, categoryIds }) => {
    const verifyArray = categoryIds.map(async (categoryId) => {
        const categorie = await Category.findOne({ where: { id: categoryId } });
        return !!categorie;
    });
    const verifyCategory = await Promise.all(verifyArray);
    if (verifyCategory.includes(false)) {
        return { message: 'one or more "categoryIds" not found' };
    }
    const post = await BlogPost.create({ title, content, userId });
    const postReturn = categoryIds.map(async (categoryId) => {
        await PostCategory.create({ postId: post.id, categoryId });
        return BlogPost.findByPk(post.id, {
        attributes: ['id', 'title', 'content', 'userId', 'published', 'updated'],
        }); 
    });
    const [retorno] = await Promise.all(postReturn);
    return retorno;
};

module.exports = {
    addBlogPost,
};