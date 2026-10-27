const bcrypt = require("bcrypt");
const users = require("../../users.json");

const SALT_ROUNDS = 11;

const register = async (req, res, next) => {
    const { name, pass, email } = req.body;

    // Checking if user inputed required fields to register
    if (!name || !pass || !email) {
        return next(new Error("Please input required fields"));
    }

    if (typeof email != "string") {
        return next(new Error("Please input valid email"));
    }

    if (typeof pass != "string") {
        return next(new Error("Please input valid password"));
    }

    // Checking if user inputed password with enough length
    if (pass.length < 7) {
        return next(new Error("Please put password with 7 or more letters"));
    }

    const existingUser = users.find(
        (u) => u.email === email.trim().toLowerCase(),
    );

    if (existingUser) {
        res.status(409).json({
            message: "Account with same email exists",
        });
        return;
    } else {
        const newUser = {
            name,
            pass: await bcrypt.hash(pass, SALT_ROUNDS),
            email: email.trim().toLowerCase(),
        };

        users.push(newUser);
    }
    res.status(201).json({
        message: "User added succesfully",
    });
};

const login = async (req, res, next) => {
    const { email, pass } = req.body;

    //Checking if user inputed both required fields
    if (!email || !pass) {
        return next(new Error("Please input email and password."));
    }

    if (typeof email != "string") {
        return next(new Error("Please input valid email"));
    }

    if (typeof pass != "string") {
        return next(new Error("Please input valid password"));
    }

    // Normalizing email to lowercase to match with database email
    const normalizeEmail = email.trim().toLowerCase();

    // Checking if email in database is same with inputed email
    const user = users.find((u) => u.email === normalizeEmail);

    // Return error if user don't have account
    if (!user) {
        return next(new Error("Invalid try, please register first"));
    }

    function VerifyPassword(password, storedPassword) {
        return bcrypt.compare(password, storedPassword);
    }

    try {
        const isMatch = await VerifyPassword(pass, user.pass);

        if (isMatch) {
            res.status(200).json({
                message: "Login succesfull",
            });
        } else {
            res.status(401).json({
                message: "Wrong password",
            });
        }
    } catch (error) {
        return next(error);
    }
};

module.exports = {
    register,
    login,
};
