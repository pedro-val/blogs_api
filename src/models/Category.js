module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define('Category', {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        name: DataTypes.STRING,
    }, {
        timestamps: false,
        underscored: true,
        tableName: 'categories',
    });
    
    Category.associate = (models) => {
        Category.belongsToMany(models.BlogPosts, {
        as: 'blog_posts',
        through: models.PostsCategories,
        foreignKey: 'category_id',
        otherKey: 'user_id',
        });
    };
    
    return Category;
};