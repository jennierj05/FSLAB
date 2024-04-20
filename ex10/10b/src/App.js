import React, { useState } from 'react';

const BookList = () => {
  const [books] = useState([
    { id: 1, foodname: 'idly', image: 'book.jpeg' },
    { id: 2, foodname: 'dosa',  image: 'book1.jpeg' },
    { id: 3, foodname: 'poori', image: 'book2.jpeg' },
    { id: 4, foodname: 'briyani',  image: 'book3.jpeg' },
    { id: 5, foodname: 'Noodles', image: 'book4.jpeg' },
  ]);

  const [filteredBooks, setFilteredBooks] = useState(books);
  const [selectedPublisher, setSelectedPublisher] = useState('');

  // Function to filter books by release year
  const filterByYear = (year) => {
    const filtered = books.filter(book => book.release_year === year);
    setFilteredBooks(filtered);
  };

  // Function to filter books by publisher
  const filterByPublisher = (publisher) => {
    const filtered = books.filter(book => book.publisher === publisher);
    setFilteredBooks(filtered);
    setSelectedPublisher(publisher);
  };

  return (
    <div>
      <h1>Book List</h1>
      <div>
        <label>Filter by Year:</label>
        <button onClick={() => filterByYear(2020)}>2020</button>
        <button onClick={() => filterByYear(2021)}>2021</button>
        <button onClick={() => filterByYear(2022)}>2022</button>
      </div>
      <div>
        <label>Filter by Publisher:</label>
        <select value={selectedPublisher} onChange={(e) => filterByPublisher(e.target.value)}>
          <option value="">All</option>
          <option value="Pearson">Pearson</option>
          <option value="TMH">TMH</option>
          {/* Add options for other publishers as needed */}
        </select>
      </div>
      <div>
        {filteredBooks.map(book => (
          <div key={book.id}>
            <img src={book.image} alt={book.title} />
            <h2>{book.title}</h2>
            <p>Author: {book.author}</p>
            <p>Release Year: {book.release_year}</p>
            <p>Publisher: {book.publisher}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookList;
