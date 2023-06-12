module.exports = (sequelize, DataTypes) => {
    const BlogPostsCategories = sequelize.define('posts_categories', {
        blogPostId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'blog_posts',
                key: 'id',
            },
        },
        categoryId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'categories',
                key: 'id',
            },
        },
    }, {
        timestamps: false,
        underscored: true,
        tableName: 'posts_categories',
    });
    
    return BlogPostsCategories;
};