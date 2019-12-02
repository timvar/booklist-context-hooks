import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
import BookDetails from './BookDetails';
const Booklist = () => {
  const { books } = useContext(BookContext);
  return books.length ? (
    <div className='books-list'>
      <ul>
        {books.map((book) => {
          return <BookDetails book={book} key={book.id} />;
        })}
      </ul>
    </div>
  ) : (
    <div className='empty'>No books to read.</div>
  );
};

export default Booklist;
