import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import BookCover from "./BookCover";

const BookOverview = ({
  id,
  title,
  author,
  genre,
  rating,
  totalCopies,
  availableCopies,
  description,
  coverColor,
  coverUrl,
  videoUrl,
  summary,
  isLoaned,
}: Book) => {
  return (
    <section className="book-overview">
      <div className="flex flex-1 flex-col gap-5">
        <h1>{title}</h1>
        <div className="book-info">
          <p>
            by <span className="font-semibold text-light-200">{author}</span>
          </p>
          <p>
            cactegory{" "}
            <span className="font-semibold text-light-200">{genre}</span>
          </p>
          <div className="flex flex-row gap-1">
            <Image
              src="/icons/star.svg"
              width={22}
              height={22}
              alt="star"
            />
            <p>{rating}</p>
          </div>
        </div>
        <div className="book-coopies">
            <p>Total Copies: <span>{totalCopies}</span></p>
            <p>Available Copies: <span>{availableCopies}</span></p>
        </div>
        <p className="book-description">{description}</p>
        <Button className="book-overview_btn">
            <Image src={"/icons/book.svg"} width={20} height={20} alt="book" />
            <p className="font-bebas-neue text-xl text-dark-200">Borrow</p>
        </Button>
      </div>
      <div className="relative flex flex-1 justify-center">
        <div className="relative ">
            <BookCover 
                variant="wide"
                className="z-10"
                coverColor={coverColor}
                coverUrl={coverUrl}
            />
            <div className="absolute top-10 left-16 rotate-12 opacity-40 max-sm:hidden">
                <BookCover {...{ coverColor, coverUrl }} variant="wide" />
            </div>
        </div>
      </div>
    </section>
  );
};

export default BookOverview;
