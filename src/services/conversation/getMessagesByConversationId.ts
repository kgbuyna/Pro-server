import Messages from "../../models/message.js";
import { id } from "../../types/base.js";
import findConversationByUserId from "./findConversationByUserId.js";

const getMessagesByConversationId = async (
    conversationId: id,
    userId: id,
  ) => {
    const conversation = await findConversationByUserId(conversationId, userId);
    if (!conversation) {
      throw new Error("Conversation олдсонгүй.");
    }
  
    const messages = await Messages.findAll({
      where: {
        conversationId: conversation.dataValues.id,
      },
    }) || [];
  
    return messages;
  };

  
  export default getMessagesByConversationId