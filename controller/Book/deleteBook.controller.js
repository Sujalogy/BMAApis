const { BookModel } = require("../../model/books.model");

const deleteBook = async (req, res) => {
    const { id } = req.params;
    const payload = req.body;
    try {
        const book = await BookModel.findByIdAndDelete({_id : id}, payload);
        res.status(200).json({msg : "Book has been deleted", Book : book});
    } catch (error) {
        res.status(400).json({error : error.message});
    }
}

module.exports = {
    deleteBook
}