// const { BookModel } = require("../../model/books.model");

// const getAllBook = async (req, res) => {
//     const {title, rating, author, page = 1, limit = 10} = req.query;
//     const query = {};
//     try {
//         if(title) {
//             query.title = { $regex : title, $options: "i"};
//         }
//         if(author) {
//             query.author = { $regex : author, $options: "i"};
//         }
//         if (rating) {
//             if (rating.includes("-")) {
//                 const [gte, lte] = rating.split("-").map(parseFloat);
//                 query.rating = { $gte: gte, $lte: lte };
//             } else {
//                 query.rating = parseFloat(rating);
//             }
//         }
//         const books = await BookModel.find(query)
//         .skip((page - 1) * limit)
//         .limit(parseInt(limit));
//         res.status(200).send(books);
//     } catch (error) {
//         res.status(400).json({error : error.message});
//     }
// }

// module.exports = {
//     getAllBook
// }

const { BookModel } = require("../../model/books.model");

const getAllBook = async (req, res) => {
  const { title, rating, author, page = 1, limit = 10 } = req.query;
  const query = {};
  try {
    if (title) {
      query.title = { $regex: title, $options: "i" };
    }
    if (author) {
      query.author = { $regex: author, $options: "i" };
    }
    if (rating) {
      if (rating.includes("-")) {
        const [gte, lte] = rating.split("-").map(parseFloat);
        query.rating = { $gte: gte, $lte: lte };
      } else {
        query.rating = parseFloat(rating);
      }
    }

    const count = await BookModel.countDocuments(query);
    const books = await BookModel.find(query)
      .skip((page - 1) * limit)
      .limit(parseInt(limit));

    res.status(200).json({
      totalDocs: count,
      totalPages: Math.ceil(count / limit),
      currentPage: parseInt(page),
      docs: books,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getAllBook,
};
