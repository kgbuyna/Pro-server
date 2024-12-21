import { DataTypes, Model, Optional } from "sequelize";
import {sequelize} from "../db/connect.js";
import { ConversationAttributes, ConversationCreationAttributes } from "../types/conversation.js";

export default class Conversations extends Model<
  ConversationAttributes,
  ConversationCreationAttributes
> {}
// Define the Conversation model
Conversations.init(
  {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1
    },
    user1Id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "Users", // Adjust this if your Users table has a different name
        key: "id",
      },
    },
    user2Id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "Users", // Adjust this if your Users table has a different name
        key: "id",
      },
    },
    lastMessageId: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: "Messages", // Adjust this if your Messages table has a different name
        key: "id",
      },
    },
  },
  {
    sequelize,
    modelName: "Conversations", // Explicit table name (optional)
    timestamps: true, // Automatically add createdAt and updatedAt fields
  },
);
