import { Router } from "express";
import { Login, Register } from "../controllers/authController.js";
import { validator } from "../middleware/validator.js";
import RegisterSchema from "../schema/auth/registerSchema.js";
import { LoginSchema } from "../schema/auth/loginSchema.js";

const router = Router({ mergeParams: true });

router.post('/login', validator(LoginSchema), Login);
router.post('/register', validator(RegisterSchema), Register);

export default router