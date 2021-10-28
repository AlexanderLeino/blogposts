const { blogPosts } = require('../models/blogPostsData')

const blogPostData = [
    {
        title: 'This Should Work',
        body: 'If this works I will be very happy.'
    },
]

const seedBlogPosts = () => blogPosts.bulkCreate(blogPostData);


module.exports = seedBlogPosts