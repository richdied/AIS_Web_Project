import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Book } from "../constants";

const goToBookDetail = () => {
  console.log("Go to detail of book");
};

const SBookCase = styled.article`
  flex-grow: 1;
  border: 1px solid ${(props) => props.theme.ogrey};
  padding: 30px;
  max-width: 300px;
`;

interface BookCaseProps {
  book: Book;
}

export const BookCase: React.FC<BookCaseProps> = ({ book }) => {
  const { id, title, writer_name } = book;

  return (
    <SBookCase>
      <span>{id}</span>
      <h3>
        <Link
          to={{
            pathname: "/books",
            search: "?v=" + id,
            state: {
              book,
            },
          }}
        >
          {title}
        </Link>
      </h3>
    </SBookCase>
  );
};
