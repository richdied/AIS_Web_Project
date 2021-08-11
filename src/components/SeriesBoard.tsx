import React, { useState } from "react";
import styled from "styled-components";
import {
  SCarousel,
  SLeftBtn,
  SRightBtn,
  toPrevious,
  toNext,
} from "./styled/CarouselComponents";

const SSeriesItems = styled.div<{
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

const SSeriesContainer = styled.div`
  position: relative;
  background-color: ${(props) => props.theme.primarys};
  height: 100%;
`;

const SSeriesItem = styled.div`
  width: 200px;
  text-align: center;

  img {
    width: 60%;
    display: inline-block;
    height: 160px;
  }
`;

interface SeriesBoardProps {}

export const SeriesBoard: React.FC<SeriesBoardProps> = ({}) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<number>(4);

  return (
    <SCarousel>
      <h3>시리즈</h3>
      <SSeriesContainer>
        <SSeriesItems
          currentPage={currentPage}
          totalPage={totalPage}
          setCurrentPage={setCurrentPage}
        >
          <SSeriesItem>
            <img src='https://www.hanbit.co.kr/data/series/THUM.jpg' />
            <h4>이것이 시리즈</h4>
          </SSeriesItem>
          <SSeriesItem>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDzevgmH50M9dR9PgW_nYg4HL3b8B8ODF-dQ&usqp=CAU' />
            <h4>The Kings life</h4>
          </SSeriesItem>
          <SSeriesItem>
            <img src='https://cdn.pixabay.com/photo/2020/10/02/17/55/book-5621767_960_720.png' />
            <h4>Black Magic JS</h4>
          </SSeriesItem>
          <SSeriesItem>
            <img src='https://t1.daumcdn.net/cfile/tistory/992469335997E4BD24' />
            <h4>켄트백의 구현 패턴</h4>
          </SSeriesItem>
        </SSeriesItems>
      </SSeriesContainer>

      <SLeftBtn onClick={() => toPrevious(currentPage, setCurrentPage)}>
        left
      </SLeftBtn>
      <SRightBtn onClick={() => toNext(currentPage, setCurrentPage)}>
        right
      </SRightBtn>
    </SCarousel>
  );
};
