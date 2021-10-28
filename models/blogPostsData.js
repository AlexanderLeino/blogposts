const sequelize = require('../config/connection')
const { Model, DataTypes } = require('sequelize');
class blogPosts extends Model{}

blogPosts.init(
{
    id: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        primaryKey:true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    body: {
        type: DataTypes.STRING,
        allowNull: false
        
    },
    postCreator: {
        type: DataTypes.INTEGER,
        references: {
            model: 'user',
            key: "id"
        }
    }, 
},
    {
    sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'blogPosts',

    }
)


module.exports = blogPosts