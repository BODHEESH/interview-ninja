const User = require('../models/userModel')

const bcrypt = require('bcrypt')
// const userModel = require('../models/userModel')
// const jwt = require('jsonwebtoken')
// const userVerification = require("../models/verification");
// const nodemailer = require('nodemailer')
// const Notification = require('../models/notificationSchema')
// const notificationSchema = require('../models/notificationSchema')


// const authCtrlRegister = async (req, res) => {
//     try {
//         const { fullname, username, email, password } = req.body;

//         console.log("hai");

//         // Hash the password before saving it
//         const passwordHash = await bcrypt.hash(password, 10);

//         // Create a new user
//         const newUser = await User.create({
//             fullname,
//             username,
//             email,
//             password: passwordHash
//         });

//         console.log(newUser, "new user logged in successfully");

//         res.status(200).json(newUser);
//     } catch (error) {
//         console.error(error);
//         res.status(400).json({ error: error.message });
//     }
// };

const authCtrlRegister = async (req, res) => {
    try {
        console.log("reached in register controller")
        console.log(req.body, "req body logged in")

        const { fullname, username, email, password } = req.body
        let newUserName = username.toLowerCase()

        if (password.length < 6) return res.json({ msg: 'Password must be atleast 6 characters' })


        const passwordHash = await bcrypt.hash(password, 10)

        const newUser =new User({
            fullname, username: newUserName, email, password: passwordHash
        })

        console.log(newUser, " new user logged in successfully")

        const user = await newUser.save();//
        res.status(200).json(user);

        // res.json({
        //     msg: 'register success',
        //     user: {
        //         ...newUser._doc,
        //         password: ''
        //     }
        // })

    } catch (error) {
        console.log("error logged in ", error.message)
        return res.json({ msg: error.message })
    }
}

module.exports = { authCtrlRegister }