import express from 'express';
import cors from 'cors';
import booksRouter from './router/booksRouter.js';
import { errorHandler } from './middlewares/ErrorHandlewarer.js';
import './db/server.js';

const app=express();
const PORT=8000;


//use to parse json data
app.use(express.json());

//use to connect to frontend
app.use(cors());



//test index worsk
// app.get("/", (req, res) => {
//     res.send("Hello World!");
//   });
  


//Routes
app.use('/books', booksRouter);


//middleware error handler
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server is running on PORT http://localhost:${PORT}`));
