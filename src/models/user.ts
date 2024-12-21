import { DataTypes, Model, Optional, Sequelize, UUIDV1 } from "sequelize";
import {sequelize} from "../db/connect.js";
import { UserAttributes, UserCreationAttributes } from "../types/user.js";



export default class Users extends Model<
  UserAttributes,
  UserCreationAttributes
> {}

Users
  .init(
    {
      username: { type: DataTypes.STRING, allowNull: false, unique: true },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      profile: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      id: {
        primaryKey: true,
        type: DataTypes.UUID,  
        defaultValue: DataTypes.UUIDV1
      },
    },
    {
      sequelize,
      modelName: "Users",
    },
  );
