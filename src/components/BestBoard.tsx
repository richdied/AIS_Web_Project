import React, { useState } from "react";
import styled from "styled-components";
import {
  SCarousel,
  SLeftBtn,
  SRightBtn,
  toPrevious,
  toNext,
} from "./styled/CarouselComponents";

const SBestItems = styled.div<{
  currentPage: number;
  totalPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}>`
  width: ${({ totalPage }) => {
    return 100 * totalPage + "%";
  }};
  display: flex;
  position: absolute;
  top: 0;
  bottom: 0;

  left: ${({ currentPage, totalPage, setCurrentPage }) => {
    if (currentPage > totalPage) {
      console.log("Left arrow: No More item on right ");

      setCurrentPage(1);
      return 0;
    } else if (currentPage <= 0) {
      console.log("Right arrow: No More item on Left ");

      setCurrentPage(totalPage);
      return -200 * (totalPage - 1) + "px";
    } else {
      return -200 * (currentPage - 1) + "px";
    }
  }};
`;

const SBestContainer = styled.div`
  position: relative;
  background-color: ${(props) => props.theme.primarym};
  height: 100%;
`;

const SBestItem = styled.div`
  text-align: center;
  width: 200px;

  img {
    width: 60%;
    display: inline-block;
    height: 160px;
    /* height: 70%; */
  }
`;

interface BestBoardProps {}

export const BestBoard: React.FC<BestBoardProps> = ({}) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<number>(3);

  return (
    <SCarousel>
      <h3>베스트셀러</h3>
      <SBestContainer>
        <SBestItems
          currentPage={currentPage}
          totalPage={totalPage}
          setCurrentPage={setCurrentPage}
        >
          <SBestItem>
            <img src='https://www.hanbit.co.kr/data/books/B6634694521_m.jpg' />
            <h4>엑셀 파워포인트</h4>
          </SBestItem>
          <SBestItem>
            <img src='https://dkemhji6i1k0x.cloudfront.net/000_clients/489816/page/489816RDzvkbsw.png' />
            <h4>Love Story</h4>
          </SBestItem>
          <SBestItem>
            <img src='https://dkemhji6i1k0x.cloudfront.net/000_clients/489816/page/489816HeD639gY.png' />
            <h4>Love is a room with many doors</h4>
          </SBestItem>
        </SBestItems>
      </SBestContainer>

      <SLeftBtn onClick={() => toPrevious(currentPage, setCurrentPage)}>
        left
      </SLeftBtn>
      <SRightBtn onClick={() => toNext(currentPage, setCurrentPage)}>
        right
      </SRightBtn>
    </SCarousel>
  );
};
