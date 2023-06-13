module.exports = (sequelize, DataTypes) => {
    const BlogPost = sequelize.define('BlogPost', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: DataTypes.STRING,
        content: DataTypes.STRING,
        published: DataTypes.DATE,
        updated: DataTypes.DATE,
        userId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'users',
                key: 'id'
            }
        }
    }, {
        timestamps: false,
        underscored: true,
        tableName: 'blog_posts'
    });

    BlogPost.associate = (models) => {
        BlogPost.belongsTo(models.User, {
            foreignKey: 'userId',
            as: 'user'
        });
        // BlogPost.belongsToMany(models.Category, {
        //     through: models.PostCategory,
        //     foreignKey: 'post_id',
        //     otherKey: 'category_id',
        //     as: 'categories'
        // });
    };
    return BlogPost;
};
