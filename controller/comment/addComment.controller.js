const { CommentModel } = require("../../model/comments.model");

const addComment = async(req, res) => {
    const payload = req.body;
    try {
        const currentDateTime = new Date();
        const newComment = new CommentModel({...payload, createdAt: currentDateTime.toLocaleString()});
        await newComment.save();
        res.status(200).json({message : "Comment has been added successfully..."})
    } catch (error) {
        res.status(400).json({error : error.message});
    }
};

module.exports = {
    addComment
}