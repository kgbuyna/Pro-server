import { Op } from "sequelize";
import Conversations from "../../models/conversation.js";
import { id } from "../../types/base.js";

 const findConversationByUserId = async (
    conversationId: id,
    senderId: id,
  ) => {
    const conversation = await Conversations.findOne({
      where: {
        [Op.or]: {
          user1Id: senderId,
          user2Id: senderId,
        },
        id: conversationId,
      },
    });
    if (!conversation) {
      throw new Error("Conversation олдсонгүй.");
    }
    return conversation;
  };
  
export default findConversationByUserId
  