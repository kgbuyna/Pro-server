import { Optional } from "sequelize";
import { id } from "./base.js";

export interface MessageAttributes {
    id: id; // Primary key
    conversationId: id; // Foreign key for the conversation
    senderId: id; // Foreign key for the sender
    content: string; // Message content
  }
  
  // Define optional attributes for creation
  export type MessageCreationAttributes = Optional<MessageAttributes, "id">;
  