module.exports = (sequelize, DataTypes) => {
    const BlogPostsCategories = sequelize.define('PostsCategories', {
        blogPostId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'BlogPosts',
                key: 'id',
            },
        },
        categoryId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Categories',
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