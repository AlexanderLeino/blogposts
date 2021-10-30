const { blogPosts } = require('../models')

const blogPostData = [
    {  
        title: 'This Should Work',
        body: 'If this works I will be very happy.'
    },
    {   
        title: 'Everyday Gets Easier Coding',
        body: 'Just little by little makes the biggest difference.'
    },
]

const seedBlogPosts = () => blogPosts.bulkCreate(blogPostData);


module.exports = seedBlogPosts