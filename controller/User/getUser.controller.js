const { UserModel } = require("../../model/users.model");

const getUser = async (req, res) => {
    try {
        const user = await UserModel.find();
        res.status(200).send(user);
    } catch (error) {
        res.status(400).json({error : error.message});
    }
}

module.exports = {
    getUser
}