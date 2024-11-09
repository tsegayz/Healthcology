import courseController from "../controllers/courseController.js";
import express from "express";
import authController from "../controllers/authController.js";

const router = express.Router();

router
	.route("/")
	.get(courseController.getAllCourse)
	.post(
		authController.protect,
		authController.restrictTo(1),
		courseController.createCourse
	);
router
	.route("/:id")
	.get(courseController.getCourse)
	.patch(
		authController.protect,
		authController.restrictTo(1),
		courseController.updateCourse
	)
	.delete(
		authController.protect,
		authController.restrictTo(1),
		courseController.deleteCourse
	);

export default router;
