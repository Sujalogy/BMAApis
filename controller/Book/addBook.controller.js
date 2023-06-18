const { BookModel } = require("../../model/books.model");
const addBook = async(req, res) => {

    const payload = req.body;
    try {
        
        const newBook = new BookModel(payload);
        await newBook.save();
        res.status(200).json({message : "Book has been added successfully..."})
    } catch (error) {
        res.status(400).json({error : error.message});
    }
};

module.exports = {
    addBook
}