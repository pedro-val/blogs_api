module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('users', {
        displayName: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        image: DataTypes.STRING,
    }, {
        timestamps: false,
        underscored: true,
        tableName: 'users',
    });
    
    User.associate = (models) => {
        User.hasMany(models.blog_posts, { foreignKey: 'user_id', as: 'blog_posts' });
    };
    
    return User;
};