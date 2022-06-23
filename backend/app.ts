import { connect, Schema, model } from 'mongoose';

import options from './src/database/config';

connect('mongodb://localhost:27017/my-mongo', options);

interface Book {
    title: string,
    author: string,
}

const bookSchema = new Schema<Book>(
  {
    title: { type: String, required: true },
    author: { type: String, required: true }
  });

const bookModel = model<Book>('books', bookSchema);