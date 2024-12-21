import { DataTypes, Model, Optional } from "sequelize";
import { MessageAttributes } from "../types/message.js";
// Define MessageAttributes
import {sequelize} from "../db/connect.js";


// Define optional attributes for creation
type MessageCreationAttributes = Optional<MessageAttributes, "id">;

// Define the Message model
export default class Messages
  extends Model<MessageAttributes, MessageCreationAttributes> {}

Messages.init(
  {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1
    },
    conversationId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "Conversations", // Name of the Conversations table
        key: "id",
      },
    },
    senderId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "Users", // Name of the Users table
        key: "id",
      },
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Messages", // Explicit table name (optional)
    timestamps: true, // Automatically add createdAt and updatedAt fields
  },
);
