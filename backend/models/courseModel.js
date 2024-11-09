import { Schema, model } from "mongoose";

const courseSchema = new Schema({
	_id: { type: Number, required: true },
	name: {
		type: String,
		required: [true, "a course must have a name"],
	},
    dep: {
		type:Number,
		required: true
	},
	image:String
});

// THE MODEL
const Course = model("Course", courseSchema);

export default Course;
