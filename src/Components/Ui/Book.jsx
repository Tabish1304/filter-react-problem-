import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { icon } from "@fortawesome/fontawesome-svg-core";

const Book = ({ book, title }) => {

  return (
    <div className="books">
      <div className="book">
        <a href="">
          <figure className="book-img-wrapper">
            <img src={book.url} alt="" />
          </figure>
        </a>
        <div className="book-title">
          <a className="book-title-link" href="/">
            {book.title}
          </a>
        </div>
        <div className="book-ratings">
        {
        new Array(Math.floor(book.rating)).fill(0).map((_,index)=> <FontAwesomeIcon icon={faStar} key={index} /> )
        }
        {
          !Number.isInteger(book.rating) && <FontAwesomeIcon icon={faStarHalfAlt}  />
        }

        
        </div>
        <div className="book-price">
          {book.salePrice ? (
            <>
              <span className="book-price-normal">£{book.originalPrice.toFixed(2)}</span>
              £{book.salePrice.toFixed(2)}
            </>
          ) : (
           <>£{book.originalPrice.toFixed(2)}</>
          )}
        </div>
      </div>
    </div>
  );
};

export default Book;
