import { BaseError, ValidationError } from "sequelize";
import Users from "../../models/user.js";
import { UserCreationAttributes } from "../../types/user.js"
import jwt from "jsonwebtoken"
import bcrypt from 'bcrypt'

const handleRegister = async (body:UserCreationAttributes)=>{
    try {   
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(body.password!, salt);
        const user = new Users({...body, 'password': hashedPassword});
        user.save()
        const {id, username} = user.dataValues;
        const token = jwt.sign(
            { id, username },
                process.env.SECRET || "hm",
            {
                expiresIn: "3h",
            },
        );

        return {token, username};
    }
    catch (error) {
        throw new Error(`Хэрэглэгч бүртгэхэд алдаа гарлаа ${(error instanceof BaseError && error.message) || ""}`)
    }
}

export default handleRegister