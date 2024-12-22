// models/User.js  
const { Model, DataTypes } = require("sequelize");  
const sequelize = require("../config/database");  

class User extends Model {}  

// Initialize the User model  
User.init(  
  {  
    username: {  
      type: DataTypes.STRING,  
      allowNull: false,  
      unique: true,  
    },  
    password: {  
      type: DataTypes.STRING,  
      allowNull: false,  
    },  
    email: {  
      type: DataTypes.STRING,  
      allowNull: false,  
      unique: true,  
    },  
    coins: {  
      type: DataTypes.INTEGER,  
      defaultValue: 100, // Optional: set a default value  
      allowNull: true, // Set this to true if you want it optional  
    },  
  },  
  {  
    sequelize, // Pass the sequelize instance  
    modelName: "User", // Name of the model  
    tableName: "users", // Name of the corresponding table  
    timestamps: true, // Automatically adds createdAt and updatedAt fields  
  }  
);  

module.exports = User;