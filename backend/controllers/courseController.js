import Course from "./../models/courseModel.js";
import APIFeatures from "./../utils/apiFeatures.js";

// getting all Course

export async function getAllCourse(req, res) {
	try {
		const features = new APIFeatures(Course.find(), req.query)
			.filter()
			.sort()
			.limitFields()
			// .pagination();
		// EXECUTING QUERY
		const courses = await features.query;

		// SENDING RESPONSE
		res.status(200).json({
			status: "success",
			responseTime: req.requestTime,
			results: courses.length,
			data: {
				courses,
			},
		});
	} catch (err) {
		res.status(404).json({
			data: {
				status: "fail",
				message: err,
			},
		});
	}
}

// a single Course using parameters in our case is id
export async function getCourse(req, res) {
	try {
		const course = await Course.findById(req.params.id);
		res.status(200).json({
			status: "success",
			data: course,
		});
	} catch (err) {
		res.status(404).json({
			status: "fail",
			message: " invalide id",
		});
	}
}

//// create new Course
export async function createCourse(req, res) {
	try {
		const newCourse = await Course.create(req.body);

		res.status(201).json({
			status: "sucess",
			data: {
				course: newCourse,
			},
		});
	} catch (err) {
		res.status(404).json({
			data: {
				status: "fail",
				message: err,
			},
		});
	}
}

// Updating Course
export async function updateCourse(req, res) {
	try {
		const newCourse = await Course.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
			runValidators: true,
		});
		res.status(200).json({
			status: "success",
			data: {
				course: newCourse,
			},
		});
	} catch (err) {
		res.status(404).json({
			data: {
				status: "fail",
				message: "error updating",
			},
		});
	}
}

// Delete Course
export async function deleteCourse(req, res) {
	try {
		const newCourse = await Course.findByIdAndDelete(req.params.id);
		res.status(204).json({
			status: "success",
			data: null,
		});
	} catch (err) {
		res.status(404).json({
			data: {
				status: "fail",
				message: "error deleting",
			},
		});
	}
}

export default {
    getAllCourse,
    getCourse,
	updateCourse,
	deleteCourse,
	createCourse,
};