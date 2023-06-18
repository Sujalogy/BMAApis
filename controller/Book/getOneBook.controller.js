const { BookModel } = require("../../model/books.model");

const getOneBook = async (req, res) => {
    try {
        const { id } = req.params;
        const books = await BookModel.findOne({ _id: id });
        res.status(200).send(books);
    } catch (error) {
        res.status(400).json({error : error.message});        
    }
}

module.exports = {
    getOneBook
}