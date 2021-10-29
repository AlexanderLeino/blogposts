const { User } = require('../models')

const userData = [
    {  id: 1,
       Username: 'Alex',
       hashedPassword: 'SecretPassword' 
    }
]

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser