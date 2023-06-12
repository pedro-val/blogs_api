module.exports = (sequelize, DataTypes) => {
    const BlogPost = sequelize.define('blog_posts', {
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
        
        BlogPost.belongsToMany(models.categories, {
            as: 'categories',
            through: models.posts_categories,
            foreignKey: 'post_id',
            otherKey: 'category_id',
        });
    }
    
    return BlogPost;
};