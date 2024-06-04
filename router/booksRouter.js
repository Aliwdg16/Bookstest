import { Router } from 'express';
import * as bookController from '../controllers/books.js';


const booksRouter = Router();

booksRouter
  .route('/')
  .get(bookController.getAllBooks)
  .post(bookController.addBook);

  booksRouter
  .route('/:id')
  .get(bookController.getBookById)
  .put(bookController.updateBook)

  export default booksRouter;