import React from "react";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const {
    bookId,
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    tags,
    category,
  } = book;
  return (
    <Link to={`/books/${bookId}`}>
      <div className="card bg-base-100 shadow-xl border border-gray-800 p-5">
        <figure className="bg-blue-200 rounded-2xl py-8">
          <img src={image} alt={bookName} className=" h-[166px]" />
        </figure>
        <div className="card-body text-start">
          <div className="flex justify-center gap-15">
            {tags.map((tag,idx) => (
              <button key={idx} className="btn rounded-xl bg-green-100 text-green-600 font-bold">
                {tag}
              </button>
            ))}
          </div>
          <h2 className="card-title">{bookName}</h2>
          <p>By : {author}</p>

          <div className="border-t-1 border-dashed text-gray-600"></div>

          <div className="card-actions justify-between">
            <div>{category}</div>
            <div>{rating} </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
