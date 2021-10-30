const { User } = require('../models')

const userData = [
    { 
       Username: 'Alex',
       hashedPassword: 'SecretPassword' 
    },
    {
        Username: 'Brandon',
        hashedPassword: 'Alienware7'
    },
    {
        Username: 'Travis',
        hashedPassword: 'Alienware6'
    },


]

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser