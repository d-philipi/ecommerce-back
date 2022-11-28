import { Router } from "express";
import { signIn, signUp } from "../controllers/userController.js";
import { signInValidation } from "../middlewares/signInValidationMiddleware.js";
import { signUpValidation } from "../middlewares/signUpValidationMiddleware.js";


const router = Router();


router.post("/sign-up", signUpValidation, signUp);
router.post("/sign-in", signInValidation, signIn);

export default router;