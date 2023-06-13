module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define('Category', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: DataTypes.STRING
    }, {
        timestamps: false,
        underscored: true,
        tableName: 'categories'
    });
    // Category.associate = (models) => {
    //     Category.belongsToMany(models.BlogPost, {
    //         through: models.PostCategory,
    //         foreignKey: 'category_id',
    //         otherKey: 'post_id',
    //         as: 'blog_posts'
    //     });
    // };
    return Category;
};
