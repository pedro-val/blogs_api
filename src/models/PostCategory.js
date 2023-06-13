module.exports = (sequelize, DataTypes) => {
    const PostCategory = sequelize.define('PostCategory', {
        postId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            references: {
                model: 'BlogPost',
                key: 'id'
            }
        },
        categoryId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            references: {
                model: 'Category',
                key: 'id'
            }
        }
    }, {
        timestamps: false,
        underscored: true,
        tableName: 'posts_categories'
    });
    PostCategory.associate = (models) => {
        PostCategory.belongsTo(models.BlogPost, {
            foreignKey: 'postId',
            as: 'blogPost'
        });

        PostCategory.belongsTo(models.Category, {
            foreignKey: 'categoryId',
            as: 'category'
        });
        models.Category.belongsToMany(models.BlogPost, {
            through: models.PostCategory,
            foreignKey: 'category_id',
            otherKey: 'post_id',
            as: 'blog_posts'
        });
        models.BlogPost.belongsToMany(models.Category, {
            through: models.PostCategory,
            foreignKey: 'post_id',
            otherKey: 'category_id',
            as: 'categories'
        });
    };
    return PostCategory;
};
