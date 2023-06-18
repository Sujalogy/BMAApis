const jwt = require("jsonwebtoken");
require("dotenv").config();
const { isTokenBlacklisted } = require("../model/blacklist.model");

const auth = async (req, res, next) => {
    const token = req.headers.authorization
    if(!token) {
        res.status(200).json({error : "Authentication required...!!"})
    }
    if(await isTokenBlacklisted(token)) {
        res.status(200).json({message : "please login again...!"})
    } else {
        jwt.verify(token, process.env.SECRET, (err, decoded) => {
            if(decoded) {
                next();
            } else {
                res.status(200).json({message : "Authentication fails..."})
            }
        })
    }
}

module.exports = {
    auth
}