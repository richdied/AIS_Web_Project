import React from "react";
import styled from "styled-components";

export const SBookShelves = styled.div`
  display: flex;
  flex-direction: row;
  /* justify-content: space-between; */
  flex-wrap: wrap;
`;

interface BookShelvesProps {}

export const BookShelves: React.FC<BookShelvesProps> = ({ children }) => {
  return (
    <div>
      <SBookShelves>{children}</SBookShelves>
    </div>
  );
};
