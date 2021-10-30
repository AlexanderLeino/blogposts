const User = require('./userData');
const blogPosts = require('./blogPostsData')



blogPosts.belongsTo(User, {
    foreignKey: 'post_creator',
    onDelete: "CASCADE"
});

User.hasMany(blogPosts, {
    foreignKey: 'post_creator'
})

module.exports = {blogPosts, User}