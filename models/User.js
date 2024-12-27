// models/User.js  
const { Model, DataTypes } = require("sequelize");  
const sequelize = require("../config/database");  

class User extends Model {  
  static associate(models) {  
      User.hasMany(models.Booking, { foreignKey: 'userId' }); // Defines the one-to-many relationship  
  }  
}  

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
    balance: {  // Changed from coins to balance  
      type: DataTypes.INTEGER,  
      defaultValue: 100000, // Set the initial balance to 100,000  
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

