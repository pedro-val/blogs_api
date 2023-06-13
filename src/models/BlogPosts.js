module.exports = (sequelize, DataTypes) => {
    const BlogPost = sequelize.define('BlogPosts', {
        title: DataTypes.STRING,
        content: DataTypes.STRING,
        published: DataTypes.DATE,
        updated: DataTypes.DATE,
    }, {
        timestamps: false,
        underscored: true,
        tableName: 'blog_posts',
    });
    
    BlogPost.associate = (models) => {
        BlogPost.belongsTo(models.User, {
            foreignKey: 'user_id',
            as: 'user',
        });
        
        BlogPost.belongsToMany(models.Categories, {
            as: 'categories',
            through: models.PostsCategories,
            foreignKey: 'post_id',
            otherKey: 'category_id',
        });
    }
    
    return BlogPost;
};