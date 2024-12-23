import { RequestHandler } from "express";
import handleRegister from "../services/auth/handleRegister.js";
import { ApiResponse } from "../types/base.js";
import { handleLogin } from "../services/auth/handleLogin.js";

export const Register: RequestHandler<any, ApiResponse> = async (
    req,
    res,
    next
  ) => {
    const data = req.body;
    try {
      const { username, token } = await handleRegister(data);
      res.send({
          status: "success",
          message: "Register succeed",
          data: {
              user: username,
              token: token,
          },
      })
    }
    catch(error) {
      next(error)
    }

  };
  
  export const Login: RequestHandler<any, ApiResponse> = async (
    req,
    res,
    next,
  ) => {
    const { password, username } = req.body;
    try {
      const token = await handleLogin(password, username)
      res.send({
        status:"success",
        message:"Login succeed",
        data: {
          token
        }
      })
    } catch(error) {
      next(error)
    }
  };
  