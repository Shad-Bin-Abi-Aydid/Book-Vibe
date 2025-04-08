import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {
  const { bookId } = useParams();
  const id = parseInt(bookId);
  const data = useLoaderData();

  const book = data.find((book) => book.bookId === id);

  const {
    bookId: currentBookId,
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    publisher,
    tags,
    category,
    yearOfPublishing,
  } = book;

  return (
    <div className="grid grid-cols-2 gap-5">
      <div className="bg-gray-700 rounded-xl shadow-2xl">
        <img src={image} alt="" className="p-12 " />
      </div>
      <div className="space-y-3">
        <h1 className="text-2xl font-bold">{bookName}</h1>
        <p className="text-xl">By: {author}</p>
        <div className="border-t-1 border-gray-600"></div>

        <h4 className="text-xl">{category}</h4>
        <div className="border-t-1 border-gray-600"></div>

        <p className="text-gray-400">
          <span className="text-lg font-bold">Review: </span>
          {review}
        </p>
        <div className="flex justify-start gap-5">
          <span className="font-bold">Tag:</span>{" "}
          <p className="flex justify-start gap-6">
            {tags.map((tag) => (
              <p className="px-2 bg-gray-700 text-green-600 rounded-xl">
                {tag}
              </p>
            ))}
          </p>
        </div>
        <div className='border-t-1 border-gray-600'></div>

        <div className="flex gap-5">
            <div className="space-y-3">
                <p>Number of Pages:</p>
                <p>Publisher:</p>
                <p>Year of Publishing:</p>
                <p>Rating:</p>
            </div>
            <div className="font-bold space-y-3">
                <p>{totalPages}</p>
                <p>{publisher}</p>
                <p>{yearOfPublishing}</p>
                <p>{rating}</p>
            </div>
        </div>

        <div className="flex gap-15">
            <button className="btn bg-gray-600 shadow-2xl border border-gray-400">Read</button>
            <button className="btn btn-info">Wishlist</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
