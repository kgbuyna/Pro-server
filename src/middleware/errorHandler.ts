import { ErrorRequestHandler } from "express"
import { ApiResponse } from "../types/base.js"

const ErrorHandler: ErrorRequestHandler<any, ApiResponse> = (err: Error, req, res, next) =>{
    res.status(500)
    res.send({
        status:"error",
        message: err.message,
    })
    return;
}

export default ErrorHandler