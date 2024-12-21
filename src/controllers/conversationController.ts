import { RequestHandler } from "express";
import getConversationsByUserId from "../services/conversation/getConversationsByUserId.js";
import { ApiResponse, id } from "../types/base.js";
import getMessagesByConversationId from "../services/conversation/getMessagesByConversationId.js";

export const getConversationsByUserController: RequestHandler<any, ApiResponse> = async (
    req, res, next
  ) => {
    const userId = req.userId;
    const conversations = await getConversationsByUserId(userId);
    res.send({
        status: "success",
        data: conversations,
        message: ""
    })
  };
  

export const getMessagesByConversationIdController: RequestHandler<{conversationId: id}, ApiResponse> = async (
  req, res, next
) => {
  try {
    const userId = req.userId;
    const { conversationId } = req.params;
    const messages = await getMessagesByConversationId(conversationId, userId);
    res.send({
      status: "success",
      data: messages,
      message: ""
    })  
  }
  catch(error){
    next(error)
  }
}