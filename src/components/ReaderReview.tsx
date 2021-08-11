import React, { useState } from "react";
import styled from "styled-components";
import { ReadersReview, Star } from "../constants";

const SArticle = styled.article`
  margin-top: 3em;
`;

const createStars = (stars: Star) => {
  const max = 5;
  let total = "";

  for (let i = 0; i < stars; i++) {
    total += "❤";
  }

  if (stars < max) {
    for (let i = 0; i < max - stars; i++) {
      total += "X";
    }
  }

  return total;
};

const SReaderReview = styled.li.attrs(() => ({
  rMargin: "1em",
}))<{ isOpen: boolean }>`
  & {
    cursor: pointer;
    padding: 0 1.5em 1.5em;
    background-color: ${(props) =>
      props.isOpen ? props.theme.primarys : props.theme.primary};
  }

  &:hover {
    background-color: ${(props) => props.theme.primarym};
  }

  &::before {
    content: "";
    display: block;
    width: 98%;
    height: 1px;
    background-color: ${(props) => props.theme.ogrey};
    margin: 0 auto 1.5em;
  }

  & > div {
    padding: 0.2em 0;
  }

  & > div:nth-child(1) {
    display: flex;
    align-items: center;
  }
  & > div > strong {
    display: inline-block;
    font-weight: 700;
    position: relative;
    margin-right: ${(props) => props.rMargin};
  }

  & > div > strong::after {
    content: "";
    position: absolute;
    right: calc(-${(props) => props.rMargin} / 2);
    top: 50%;
    transform: translateY(-50%);
    width: 1px;
    height: 50%;
    background-color: ${(props) => props.theme.ogrey};
  }
  & > div > span {
    font-weight: 500;
    font-size: 1rem;
    color: ${(props) => props.theme.ogrey};
  }
`;

const SSeeMore = styled.button`
  cursor: pointer;
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.ogrey};
  outline: none;
  border: none;
  margin-left: 10px;
`;

interface ReaderReviewProps {
  review: ReadersReview;
}

export const ReaderReview: React.FC<ReaderReviewProps> = ({ review }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openMore = () => {
    setIsOpen(!isOpen);
  };

  return (
    <SReaderReview isOpen={isOpen} onClick={openMore}>
      <div>
        <strong>{review.writer}</strong>
        <span>{review.createdDate}</span>
        {!isOpen && <SSeeMore type='button'>더보기</SSeeMore>}
      </div>
      <div>{createStars(review.stars)}</div>
      <div>
        <h4>{review.title}</h4>
      </div>

      {isOpen && <SArticle>{review.main}</SArticle>}
    </SReaderReview>
  );
};
