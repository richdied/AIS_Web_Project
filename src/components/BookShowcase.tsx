import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { mockBooks } from "../constants";
import { Book } from "../constants";
import { genMockBook } from "../utils";
import { BookCase } from "./BookCase";
import { BookShelves } from "./BookShelves";

const SBookShowcaseNav = styled.ul`
  display: flex;
  cursor: pointer;
`;

const STab = styled.li<{ tabNum: number }>`
  position: relative;
  cursor: pointer;
  padding: 15px 20px;

  &:nth-of-type(1) {
    color: ${(props) =>
      props.tabNum === 0 ? props.theme.secondary : props.theme.ogrey};
  }

  &:nth-of-type(1):hover {
    &:nth-of-type(1)::after {
      transition: all 0.5s ease-in;
      width: 70%;
    }
  }

  &:nth-of-type(1)::after {
    content: "";
    width: ${(props) => (props.tabNum === 0 ? "70%" : "0")};
    height: 2px;
    position: absolute;
    bottom: 5px;
    left: 50%;
    transform: translateX(-50%);
    background-color: ${(props) => props.theme.secondary};
  }

  &:nth-of-type(2) {
    color: ${(props) =>
      props.tabNum === 1 ? props.theme.secondary : props.theme.ogrey};
  }

  &:nth-of-type(2):hover {
    &:nth-of-type(2)::after {
      transition: all 0.5s ease-in-out;
      width: 70%;
    }
  }

  &:nth-of-type(2)::after {
    content: "";
    width: ${(props) => (props.tabNum === 1 ? "70%" : "0")};
    height: 2px;
    position: absolute;
    bottom: 5px;
    left: 50%;
    transform: translateX(-50%);
    background-color: ${(props) => props.theme.secondary};
  }
`;

interface BookShowcaseProps {}

export const BookShowcase: React.FC<BookShowcaseProps> = ({}) => {
  const [books, setBooks] = useState<Book[] | []>([]);
  const [tabNum, setTabNum] = useState<number>(0);

  useEffect(() => {
    setBooks(mockBooks);
  }, []);

  const fetchNewBooks = () => {
    console.log(" fetching New books ... ");

    setTabNum(0);

    const fetchedBooks = genMockBook(
      "1",
      "You Don't know JS",
      "https://www.hanbit.co.kr/data/books/B7015117381_l.jpg",
      300
    );
    // setBookToggle(!bookToggle);
    setBooks([fetchedBooks]);
  };

  const fetchBestSeller = () => {
    console.log(" fetching Best books ... ");

    setTabNum(1);

    const fetchedBooks = genMockBook(
      "9",
      "리눅스 첫 걸음",
      "https://www.hanbit.co.kr/data/books/B4300598719_l.jpg",
      330
    );
    setBooks([fetchedBooks]);
  };

  return (
    <section>
      <SBookShowcaseNav>
        <STab onClick={fetchNewBooks} tabNum={tabNum}>
          새로나온 책
        </STab>
        <STab onClick={fetchBestSeller} tabNum={tabNum}>
          베스트셀러
        </STab>
      </SBookShowcaseNav>

      <BookShelves>
        {books?.map((book, idx) => {
          return <BookCase key={idx} book={book} />;
        })}
      </BookShelves>
    </section>
  );
};
