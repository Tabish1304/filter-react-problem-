import React from "react";
import { books } from "..//data";
import Book from "../Components/Ui/Book";
import { useState } from "react";

const Books = () => {
  const [changeBooks, setBooks] = useState();

  function filterBooks(filter) {
    if (filter === "LOW_TO_HIGH") {
      setBooks(
        changeBooks
          .slice()
          .sort(
            (a, b) =>
              (a.salePrice || a.originalPrice) -
              (b.salePrice || b.originalPrice)
          )
      );
    }
    if (filter === "HIGH_TO_LOW") {
      setBooks(
        changeBooks
          .slice()
          .sort(
            (a, b) =>
              (b.salePrice || a.salePrice) - (a.salePrice || b.originalPrice)
          )
      );
    }
  }

  return (
    <div>
      <main id="books-main">
        <section>
          <books className="books-container">
            <div className="row">
              <div className="books-header">
                <h2 className="section-title books-header-title">All Books</h2>
                <select
                  id="filter"
                  onChange={(event) => filterBooks(event.target.value)}
                >
                  <option selected disabled value="">
                    Sort
                  </option>
                  <option selected value="LOW_TO_HIGH">
                    Low To High
                  </option>
                  <option selected value="HIGH_TO_LOW">
                    High To Low
                  </option>
                  <option selected value="Ratings">
                    Ratings
                  </option>
                </select>
              </div>
              <div className="books">
                <div className="books">
                  {books.map((book) => (
                    <Book book={book} key={book.id} />
                  ))}
                </div>
              </div>
            </div>
          </books>
        </section>
      </main>
    </div>
  );
};

export default Books;
