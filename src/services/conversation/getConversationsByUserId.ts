import { Op } from "sequelize";
import Conversations from "../../models/conversation.js";
import { id } from "../../types/base.js";

 const getConversationsByUserId = async (userId: id) => {
    const conversations = await Conversations.findAll({
      where: {
        [Op.or]: [
          { user1Id: userId },
          { user2Id: userId },
        ],
      },
    }) || [];
    return conversations;
  };

export default getConversationsByUserId  