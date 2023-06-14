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

// [Será validado que é possível listar blogpost com sucesso]

// Ao listar posts com sucesso o resultado retornado deverá ser conforme exibido abaixo, com um status http 200:
// [
//   {
//     "id": 1,
//     "title": "Post do Ano",
//     "content": "Melhor post do ano",
//     "userId": 1,
//     "published": "2011-08-01T19:58:00.000Z",
//     "updated": "2011-08-01T19:58:51.000Z",
//     "user": {
//       "id": 1,
//       "displayName": "Lewis Hamilton",
//       "email": "lewishamilton@gmail.com",
//       "image": "https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg"
//     },
//     "categories": [
//       {
//         "id": 1,
//         "name": "Inovação"
//       }
//     ]
//   },

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

module.exports = {
    addBlogPost,
    getAllBlogPosts,
};