import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Book, mockReadersReview, ReadersReview, Star } from "../constants";
import { ReaderReview } from "./ReaderReview";

const SCreateReviewBtn = styled.button`
  & {
    outline: none;
    border: none;
    padding: 0;
    margin: 1.5em 0;
  }

  & > a {
    display: block;
    padding: 0.7em 1em;
    background-color: ${(props) => props.theme.primary};
    border: 2px solid ${(props) => props.theme.secondary};
    color: ${(props) => props.theme.secondary};
    cursor: pointer;
  }
`;

const SReviewList = styled.ul``;

const createReview = (
  id: string,
  title: string,
  main: string,
  writer: string,
  stars: Star,
  createdDate: string,
  updatedDate: string
) => {
  const newReview = new ReadersReview(
    id,
    title,
    main,
    writer,
    stars,
    createdDate,
    updatedDate
  );
};

interface ReadersReviewsProps {
  book: Book;
}

export const ReadersReviews: React.FC<ReadersReviewsProps> = ({ book }) => {
  const { id } = book;

  return (
    <section>
      <SCreateReviewBtn>
        <Link
          to={{
            pathname: `/book/${id}/reader-review/new`,
            state: {
              book,
            },
          }}
        >
          리뷰 쓰기
        </Link>
      </SCreateReviewBtn>
      <SReviewList>
        {mockReadersReview.map((review, idx) => {
          return <ReaderReview key={idx} review={review} />;
        })}
      </SReviewList>
    </section>
  );
};
