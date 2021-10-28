const User = require('./userData')
const blogPosts = require('./blogPostsData')

blogPosts.belongsTo(User, {
    foreignKey: 'postCreator'
})

User.hasMany(blogPosts, {
    through: {
        model: blogPosts,
        unique: false
    }
})


module.exports = {blogPosts, User}