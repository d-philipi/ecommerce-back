import { Router } from "express";
import { authValidation } from "../middlewares/authValidationMiddleware.js";
import { itemCatalog } from "../controllers/itemCatalog.js";

const router = Router();


router.get("/products", authValidation, products);
router.get("/home", itemCatalog);
router.post("/home", itemCatalog);

export default router;