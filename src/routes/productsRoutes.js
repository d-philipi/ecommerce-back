import { Router } from "express";
import { authValidation } from "../middlewares/authValidationMiddleware.js";

const router = Router();


router.get("/products", authValidation, products);


export default router;