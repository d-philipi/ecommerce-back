import { Router } from "express";
import { findProduct, selectProduct } from "../controllers/cartController.js";
import { authValidation } from "../middlewares/authValidationMiddleware.js";
import { productsValidation } from "../middlewares/productsValidationMiddleware.js";

const router = Router();

router.use(authValidation)

router.post("/cart", productsValidation, selectProduct);
router.get("/cart", findProduct);
//router.delete("/cart", deleteProduct);

export default router;