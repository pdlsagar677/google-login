import express from "express";
import authMiddleware from "../middleware/Auth-middleware.js";
import adminMiddleware from "../middleware/Admin-middleware.js";
import * as adminController from "../controller/Admin-controller.js"; 

const router = express.Router();

// Protect these routes with both auth and admin middleware
router.route("/users").get(authMiddleware, adminMiddleware, adminController.getAllUsers);
router.get("/users/:id", authMiddleware, adminMiddleware, adminController.getUserById);
router.delete("/users/delete/:id", authMiddleware, adminMiddleware, adminController.deleteUserById);
router.patch("/users/update/:id", authMiddleware, adminMiddleware, adminController.updateUserById);

export default router;
