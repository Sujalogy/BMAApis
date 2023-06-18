const { CommentModel } = require("../../model/comments.model");

const getComments = async (req, res) => {
    try {
        const comments = await CommentModel.find();
        res.status(200).send(comments);
    } catch (error) {
        res.status(400).json({error : error.message});        
    }
}

module.exports = {
    getComments
}