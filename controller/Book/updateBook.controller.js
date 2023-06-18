const { BookModel } = require("../../model/books.model");

const updateBook = async (req, res) => {
    const { id } = req.params;
    const payload = req.body;
    try {
        const book = await BookModel.findByIdAndUpdate({_id : id}, payload);
        res.status(200).json({msg : "book has been updated", book : book});
    } catch (error) {
        res.status(400).json({error : error.message});        
    }
}

module.exports = {
    updateBook
}