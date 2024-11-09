import mongoose, { Schema, model } from "mongoose";
import validator from "validator";
const { isEmail } = validator;

import bcrypt from "bcryptjs";
const { hash, compare } = bcrypt;
import mongooseSequence from "mongoose-sequence";

const AutoIncrement = mongooseSequence(mongoose);

const userSchema = new Schema(
	{
		_id: {
			type: Number,
		},
		name: {
			type: String,
			required: [true, "Please provide your name"],
			trim: true,
		},
		password: {
			type: String,
			required: [true, "Please provide a password"],
			minlength: 8,
			select: false,
		},
		email: {
			type: String,
			required: [true, "Please provide your email"],
			unique: true,
			lowercase: true,
			validate: [isEmail, "Please provide a valid email"],
		},
		imageCover: String,
		passwordConfirm: {
			type: String,
			required: [true, "Please confirm your password"],
			validate: {
				validator: function (el) {
					return el === this.password;
				},
				message: "Passwords do not match",
			},
		},
		passwordChangedAt: Date,
		active: {
			type: Boolean,
			default: true,
		},
		role_id: {
			type: Number,
			default: 2,
			required: [true, "Please provide a role_id"],
		},
	},
	{ _id: false }
);

userSchema.plugin(AutoIncrement, {
	id: "user_id",
	inc_field: "_id",
	start_seq: 10,
});

// Encrypt the password before saving
userSchema.pre("save", async function (next) {
	if (!this.isModified("password")) return next();

	this.password = await hash(this.password, 12);
	this.passwordConfirm = undefined;
	next();
});

userSchema.methods.correctPassword = async function (
	candidatePassword,
	userPassword
) {
	return await compare(candidatePassword, userPassword);
};

userSchema.methods.changedPasswordAfter = function (JWTTimestamp) {
	if (this.passwordChangedAt) {
		const changedTimestamp = parseInt(
			this.passwordChangedAt.getTime() / 1000,
			10
		);
		return JWTTimestamp < changedTimestamp;
	}
	return false;
};

const User = model("User", userSchema);

export default User;
