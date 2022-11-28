import { Router } from "express";
import { findProduct } from "../controllers/cartController.js";
import { authValidation } from "../middlewares/authValidationMiddleware.js";

const router = Router();

router.use(authValidation)

//router.post("/cart", selectProduct);
router.get("/cart", findProduct);
//router.delete("/cart", deleteProduct);

export default router;