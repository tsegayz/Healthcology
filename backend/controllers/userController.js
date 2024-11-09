import User from "./../models/userModel.js"; 



export async function getAllUsers(req, res, next) {
    try {
        const users = await User.find(); // Fetch users from your database
        res.status(200).json({
            status: "success",
            results: users.length,
            data: {
                users,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: err.message,
        });
        next(err);
    }
}

export async function createUser(req, res, next) {
    try {
        const newUser = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            passwordConfirm: req.body.passwordConfirm,
            role_id: req.body.role_id,
        });

        res.status(201).json({
            status: "success",
            data: {
                user: newUser,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: err.message,
        });
        next(err); 
    }
}


export default {
    getAllUsers,
    createUser,
};