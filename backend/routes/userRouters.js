import userController from "../controllers/userController.js";
import express from "express";
import authController from "../controllers/authController.js";

const router = express.Router();

router.post("/signup", authController.signup);
router.post("/login", authController.login);

router
    .route("/")
    .get(userController.getAllUsers) // Ensure this is defined
    .post(userController.createUser); // Ensure this is defined

// router
//     .route("/:id")
//     .get(userController.getUser) // Ensure this is defined
//     .patch(userController.updateUser) // Ensure this is defined
//     .delete(userController.deleteUser); // Ensure this is defined

export default router;
