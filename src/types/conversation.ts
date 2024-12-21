import { Optional } from "sequelize";
import { id } from "./base.js";

// Define ConversationAttributes
export interface ConversationAttributes {
    id: id; // Primary key
    user1Id: id; // Foreign key for the first user
    user2Id: id; // Foreign key for the second user
    lastMessageId?: id | null; // Optional, foreign key for the last message
  }
  
  // Define optional attributes for creation
  export type ConversationCreationAttributes = Optional<
    ConversationAttributes,
    "id" | "lastMessageId"
  >;