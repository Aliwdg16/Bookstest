import Book from '../models/booksSchema.js';

export const getAllBooks = async (req, res, next) => {
  try {
    const book = await Book.find();
    if (!book.length) {
      throw { statusCode: 404, message: 'Book not found' };
    }
    res.json(book);
  } catch (error) {
    next(error);
  }
};

export const getBookById = async (req, res, next) => {
    const { id } = req.params;
    try {
      const book = await Book.findById(id);
      if (!book) {
        throw { statusCode: 404, message: 'Book not found' };
      }
      res.json(book);
    } catch (error) {}
  };



  export const addBook= async (req, res,next) => {
    const {name ,author,image_url}=req.body;
    try {const newbook= await Book.create(name,author,image_url);

        res.status(201).json(newbook);
    } catch (error) {
        next(error);
    }};
  

    
  export const updateBook= async (req, res,next) => {
    const {id}=req.params;
    try {
        const book= await book.findById(id);
        if (!book)
            {
                throw {statusCode:404,message:'No book found'}
               }
        }
        catch (error) {
            next(error);
        }       
    };