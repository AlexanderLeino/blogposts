const { User } = require('../models/userData')

const userData = [
    {
       Username: 'Alex',
       hashedPassword: 'SecretPassword' 
    }
]

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser