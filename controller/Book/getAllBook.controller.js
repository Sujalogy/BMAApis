// const { BookModel } = require("../../model/books.model");

// const getAllBook = async (req, res) => {
//   const { title, rating, author, page = 1, limit = 10, category } = req.query;
//   const query = {};
//   try {
//     if (title) {
//       query.title = { $regex: title, $options: "i" };
//     }
//     if (category) {
//       query.category = { $regex: category, $options: "i" };
//     }
//     if (author) {
//       query.author = { $regex: author, $options: "i" };
//     }
//     if (rating) {
//       if (rating.includes("-")) {
//         const [gte, lte] = rating.split("-").map(parseFloat);
//         query.rating = { $gte: gte, $lte: lte };
//       } else {
//         query.rating = parseFloat(rating);
//       }
//     }

//     const count = await BookModel.countDocuments(query);
//     const books = await BookModel.find(query)
//       .skip((page - 1) * limit)
//       .limit(parseInt(limit));

//     res.status(200).json({
//       totalDocs: count,
//       totalPages: Math.ceil(count / limit),
//       currentPage: parseInt(page),
//       docs: books,
//     });
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };

// module.exports = {
//   getAllBook,
// };

const { BookModel } = require("../../model/books.model");

const getAllBook = async (req, res) => {
  const { title, rating, author, page = 1, limit = 10, category } = req.query;
  const query = {};
  const sortQuery = {}; // Initialize the sort query

  try {
    if (title) {
      query.title = { $regex: title, $options: "i" };
    }
    if (category) {
      query.category = { $regex: category, $options: "i" };
    }
    if (author) {
      query.author = { $regex: author, $options: "i" };
    }
    if (rating) {
      if (rating === "low_to_high") {
        sortQuery.rating = 1; // Sort by rating in ascending order
      } else if (rating === "high_to_low") {
        sortQuery.rating = -1; // Sort by rating in descending order
      }
    }

    const count = await BookModel.countDocuments(query);
    const books = await BookModel.find(query)
      .sort(sortQuery) // Apply the sort query
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
