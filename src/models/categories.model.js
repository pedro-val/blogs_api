module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define('categories', {
        name: DataTypes.STRING,
    }, {
        timestamps: false,
        underscored: true,
        tableName: 'categories',
    });
    
    Category.associate = (models) => {
        Category.belongsToMany(models.blog_posts, {
        as: 'blog_posts',
        through: models.posts_categories,
        foreignKey: 'category_id',
        otherKey: 'user_id',
        });
    };
    
    return Category;
};