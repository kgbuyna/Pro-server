import { Router } from "express";
import { getConversationsByUserController, getMessagesByConversationIdController } from "../controllers/conversationController.js";

const conversationRouter = Router({ mergeParams: true });

conversationRouter.get("/", getConversationsByUserController);

conversationRouter.get(
    "/:conversationId/messages",
    getMessagesByConversationIdController,
);
  

export default conversationRouter