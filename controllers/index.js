
const { User, blogPost } = require('../models')

const router = require('express').Router()
// const slugify = require('slugify')


// html routes
router.get('/', async (req, res) =>{
  try{  
 
} catch(e) {
    res.json(e).status(404)
}
 res.render('home', {
     secondarytitle:"The Tech Blog",

     //TODO: This route needs to show ALL user posts regardless of who is signed in or not.
 })})

//This route gets the dashboard page
router.get('/dashboard', async (req, res) => {
    try {
        const allBlogs = await blogPost.findAll()
        const serializedBlogs = allBlogs.map( post => {
          return post.get({ plain: true })
        })

    
        res.render('dashboard', {
          secondarytitle: 'Your Dashboard',
          posts: serializedBlogs 
        })
    }catch(e){
      res.json(e)
    }
})


router.get('/newUser', (req, res) => res.render('signUpPage', {
  secondarytitle: 'The Tech Blog',
  signingIn: false,
}))
//When the user is logged in then the login button dissappears from the dashboard view

//TODO: when on the dashboard page if the user clicks on the NEW POST button then the user is redirected to /dashboard/new

//TODO: Once the user creates a new post then they are redirected to their own dashboard where they can see all of their previous posts.

//TODO: when the user clicks on one of their posts they get redirected to /dashboard/edit/:postid

//TODO: Then the user is given the title of the blog post and its contents and the user has an update button and a delete button available. 


//This route gets the logout page
router.get('/logout', (req, res) => res.render('home', {
  secondarytitle: 'The Tech Blog'
  })

)
//TODO: When the user logs out they are redirected to the home page


// This route gets the login page
router.get('/login', (req, res) => res.render('login', {
    secondarytitle: 'The Tech Blog',
    signingIn: true}
))
//TODO: Once the user logins in they need to be redirected to the dashboard

//TODO: On the login page if the user clicks on the Sign Up Instead then we redirect them to the Sign Up box and give them the option to log in instead in place of where the sign up instead click link is. 

//TODO: We need to create a route to generate to get the form data and inject our sign up partials

//TODO: Create CRUD Methods To add/delete and update posts

// router.get('/add-post', (req, res) => {
//   res.render('add-post')
// })

// router.get('/blog', (req, res) => {
//   res.render('blog', {
//     post: blogPosts.map(post => {
      
//       const slug = slugify(post.name, { lower: true })
//       post.slug = slug
//       return post
//     })
//   })
// })

// router.get('/blog/:slug', (req, res) => {
//   const postObj = blogPosts
//     .find(post => req.params.slug === post.slug)

//   res.render('post', postObj)
// })

// router.post('/api/blogpost', (req, res) => {
//   const body = req.body
//   body.date = new Date()
//   blogPosts.push(body)
//   res.status(200).send('Post added succesfully!')
// })

module.exports = router