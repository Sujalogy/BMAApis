const { UserModel } = require("../../model/users.model");
const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");
require("dotenv").config();
const secretKey = process.env.SECRET;
const loginUser = async (req,res) => {
    const {email, password} = req.body;
    try {
        const user = await UserModel.find({email});
        if(user.length > 0) {
            bcrypt.compare(password, user[0].password, async (err, result) => {
                if(result) {
                    const token = jwt.sign({ userID : user[0]._id }, secretKey,{expiresIn : "7d"});
                    res.status(200).json({"msg" : "logged in successfully...", "token" : token, userID : user[0]._id });
                } else {
                    res.status(200).json({"msg" : "incorrect password..."});
                }
            });
        } else {
            res.status(200).json({"msg" : "incorrect E-mail address..."})
        }
    } catch (error) {
        res.status(400).json({"msg" : "something went wrong", "error" : error.message});
    }
}

module.exports = {
    loginUser
}