import { Router } from "express";
import {
	getPurchases,
	getPurchaseById,
	createPurchase,
} from "../controllers/purchaseController.js";

const router = Router();

// Define routes for purchases
router.get("/", getPurchases);
router.get("/:id", getPurchaseById);
router.post("/", createPurchase);
// router.put("/:id", purchaseController.updatePurchase);
// router.delete("/:id", purchaseController.deletePurchase);

export default router;
