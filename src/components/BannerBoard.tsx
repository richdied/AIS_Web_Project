import React from "react";
import styled from "styled-components";

const SBannerBoard = styled.div`
  /* background-image: url(); */
  /* background-position: center; */
  /* background-size: cover; */
  /* filter: grayscale(); */
  & > img {
    display: block;
    width: 100%;
    height: 100%;
    user-select: none;
  }
`;

interface BannerBoardProps {}

export const BannerBoard: React.FC<BannerBoardProps> = ({}) => {
  return (
    <SBannerBoard>
      <img
        src='https://media.istockphoto.com/photos/book-picture-id881737584?k=6&m=881737584&s=612x612&w=0&h=xcY51s0Wr-VbTF7xA5nQk6iEI56i9g_Qc5GhjbdE9XY='
        alt='book'
      />
    </SBannerBoard>
  );
};
