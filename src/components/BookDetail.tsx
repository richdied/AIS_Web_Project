import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import styled from "styled-components";
import { Book } from "../constants";
import { ReadersReviews } from "./ReadersReviews";

const SBookLines = styled.section`
  padding: 55px 0;

  & > div > h3 {
    border-bottom: 1px solid ${(props) => props.theme.ogrey};
    padding: 0 0 20px 0;
  }

  & > div > p {
    padding: 55px 20px;
  }
`;

const SBookHashNav = styled.ul`
  display: flex;
  position: sticky;
  top: 0;
  background-color: #fff;
  border: 1px solid ${(props) => props.theme.ogrey};

  & > li > a {
    display: block;
    color: ${(props) => props.theme.secondary};
    padding: 15px 20px;
    cursor: pointer;
  }
`;

const SBookMain = styled.main`
  display: flex;
  align-items: flex-start;
  margin: 30px 0;
`;

const SBookBrief = styled.section`
  flex-grow: 1;
  border: 1px solid ${(props) => props.theme.ogrey};

  display: flex;
`;

const SBookCover = styled.div`
  text-align: center;
  border-right: 1px solid ${(props) => props.theme.ogrey};

  img {
    display: block;
  }

  button {
    outline: none;
    border: none;
    display: inline-block;
    padding: 15px;
    background-color: ${(props) => props.theme.primary};
    color: ${(props) => props.theme.secondary};
    font-weight: 700;
    letter-spacing: 5px;
    cursor: pointer;
  }
`;

const SBookCoverRight = styled.div`
  padding: 25px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;

  & > div {
    flex-grow: 1;
  }
`;

const SDTable = styled.div`
  display: flex;
  position: relative;
  padding: 15px 0;

  & > div:nth-of-type(2) {
    flex-grow: 1;
    padding-left: 20px;
  }

  &::before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    height: 1px;
    background-color: ${(props) => props.theme.ogrey};
  }

  &::after {
    content: "";
    display: block;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    height: 1px;
    background-color: ${(props) => props.theme.ogrey};
  }
`;

const SPayment = styled.section`
  min-width: 200px;
  margin-left: 20px;
  border: 2px solid ${(props) => props.theme.secondary};

  button {
    display: inline-block;
    width: 100%;
  }
`;

const SPayLater = styled.div`
  button {
    width: 50%;
  }
`;

const SPayTable = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px;
  background-color: ${(props) => props.theme.secondary};
  color: ${(props) => props.theme.primary};
`;

const SLabel = styled.div``;

const SPrice = styled.div``;

interface BookDetailProps {
  location: {
    search: any;
    state: { book: Book };
  };
}

export const BookDetail: React.FC<BookDetailProps> = ({
  location: {
    state: { book },
    search,
  },
}) => {
  const {
    category,
    publishedBy,
    title,
    price,
    writer_name,
    writtenLang,
    publishedDate,
    item_desc,
    writer_bio,
    item_idx,
  } = book;

  console.log(" location ", search);

  return (
    <article>
      <SBookMain>
        <SBookBrief>
          <SBookCover>
            <img
              src='https://www.hanbit.co.kr/data/books/B7628794939_l.jpg'
              alt={title}
            />
            <button type='button'>미리보기</button>
          </SBookCover>
          <SBookCoverRight>
            <div>
              <h2>{title}</h2>
            </div>
            <SDTable>
              <div>
                <p>저자 :</p>
                <p>번역 :</p>
                <p>출판사 :</p>
                <p>출간 :</p>
              </div>
              <div>
                <p>{writer_name}</p>
                <p>{writtenLang}</p>
                <p>{publishedBy}</p>
                <p>{publishedDate}</p>
              </div>
            </SDTable>
            <div>
              <p>{category}</p>
            </div>
          </SBookCoverRight>
        </SBookBrief>

        <SPayment>
          <SPayTable>
            <SLabel>
              <p>정가 :</p>
              <p>판매가 :</p>
            </SLabel>
            <SPrice>
              <p>{price}</p>
              <p>{price}</p>
            </SPrice>
          </SPayTable>
          <p>* 문화비 소득공제 가능</p>
          <SPayLater>
            <button type='button'>구매하기</button>
            <button type='button'>장바구니</button>
          </SPayLater>
        </SPayment>
      </SBookMain>

      <SBookHashNav>
        <li>
          <Link
            to={{
              state: { book },
              search: search,
              hash: "#book_intro",
            }}
          >
            책소개
          </Link>
        </li>
        <li>
          <Link
            to={{
              state: { book },
              search: search,
              hash: "#book_writer_bio",
            }}
          >
            저자소개
          </Link>
        </li>
        <li>
          <Link
            to={{
              state: { book },
              search: search,
              hash: "#book_idx",
            }}
          >
            목차
          </Link>
        </li>
        <li>
          <Link
            to={{
              state: { book },
              search: search,
              hash: "#review_reader",
            }}
          >
            독자리뷰
          </Link>
        </li>
      </SBookHashNav>

      <SBookLines>
        <div>
          <h3 id='book_intro'>책소개</h3>
          <p>{item_desc}</p>
        </div>
        <div>
          <h3 id='book_writer_bio'>저자 소개</h3>
          <p>{writer_bio}</p>
        </div>
        <div>
          <h3 id='book_idx'>목차</h3>
          <p>{item_idx}</p>
        </div>
        <div>
          <h3 id='review_reader'>독자리뷰</h3>
          <ReadersReviews book={book} />
        </div>
      </SBookLines>
    </article>
  );
};
