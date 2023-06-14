const { Op } = require('sequelize');
const { BlogPost, PostCategory, Category, User } = require('../models');

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

const getAllBlogPosts = async () => {
    const posts = await BlogPost.findAll({
        attributes: ['id', 'title', 'content', 'userId', 'published', 'updated'],
        include: [
            { model: User,
              as: 'user',
                attributes: { exclude: ['password'] },
            },
            { model: Category, as: 'categories', through: { attributes: [] } },
        ],
    });
    return posts;
};

const getBlogPostById = async (id) => {
    const post = await BlogPost.findByPk(id, {
        attributes: ['id', 'title', 'content', 'userId', 'published', 'updated'],
        include: [
            { model: User,
              as: 'user',
                attributes: { exclude: ['password'] },
            },
            { model: Category, as: 'categories', through: { attributes: [] } },
        ],
    });
    if (!post) return { message: 'Post does not exist' };
    return post;
};

const editPost = async (id, title, content, userId) => {
    const post = await BlogPost.findByPk(id);
    if (!post) return { message: 'Post does not exist' };
    console.log(post);
    if (post.userId !== userId) return { message: 'Unauthorized user' };
    await BlogPost.update({ title, content }, { where: { id } });
    const retorno = await BlogPost.findByPk(id, {
        attributes: ['id', 'title', 'content', 'userId', 'published', 'updated'],
        include: [
            { model: User,
                as: 'user',
                  attributes: { exclude: ['password'] },
              },
              { model: Category, as: 'categories', through: { attributes: [] } },
          ],
    });
    return retorno;
};

const deletePost = async (id, userId) => {
    const post = await BlogPost.findByPk(id);
    if (!post) return { status: 404, message: { message: 'Post does not exist' } };
    if (post.userId !== userId) return { status: 401, message: { message: 'Unauthorized user' } };
    await BlogPost.destroy({ where: { id } });
    return post;
};

const searchPost = async (searchTerm) => {
    if (searchTerm.length === 0) {
        return getAllBlogPosts();
    }
    const posts = await BlogPost.findAll({
        where: { [Op.or]: [
            { title: { [Op.like]: `%${searchTerm}%` } },
            { content: { [Op.like]: `%${searchTerm}%` } },
        ] },
        attributes: ['id', 'title', 'content', 'userId', 'published', 'updated'],
        include: [
            { model: User,
              as: 'user',
                attributes: { exclude: ['password'] },
            },
            { model: Category, as: 'categories', through: { attributes: [] } },
        ],
    });
    return posts;
};

module.exports = {
    addBlogPost,
    getAllBlogPosts,
    getBlogPostById,
    editPost,
    deletePost,
    searchPost,
};