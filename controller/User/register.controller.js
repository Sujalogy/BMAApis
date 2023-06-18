
const { UserModel } = require("../../model/users.model");
const bcrypt = require('bcrypt');
require("dotenv").config();

// const saltRounds = process.env.SALT
const registerUser = async (req, res) => {
    const {name, email, password, question} = req.body;
    try {
        const existingUser = await UserModel.findOne({email});
        if(existingUser) {
            res.status(200).json({message : "User Already Exists...!"})
        } else {
            bcrypt.hash(password, 10, async (err, hash) => {
                if(err) res.status(400).json({err : "somethings wrong", err : err.message})
                else {
                    const newUser = new UserModel({name, email, password : hash, question});
                    await newUser.save();
                    res.status(200).json({msg : "user has been added", user : newUser});
                }
            });
        }
    } catch (error) {
        res.status(400).json({error : error.message});
    }
}

module.exports = {
    registerUser
}