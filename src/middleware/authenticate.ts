import { RequestHandler } from "express";
import jwt from "jsonwebtoken";

export const authenticateToken: RequestHandler = async (
    req,
    res,
    next,
) => {
  const headers = req.headers;

    const Authorization = (headers.authorization || "").split("Bearer ");
    if (Authorization.length != 2) {
        throw new Error("Header not provided");
    }

    const token = Authorization[1];
    const decodedToken = jwt.verify(token, process.env.SECRET!);
    req.userId = (decodedToken as jwt.JwtPayload).id!;
    req.username = (decodedToken as jwt.JwtPayload).username!;

    next();
};
