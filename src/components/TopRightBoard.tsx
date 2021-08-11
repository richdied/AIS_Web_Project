import React, { useState } from "react";
import styled from "styled-components";
import {
  SCarousel,
  SLeftBtn,
  toPrevious,
  SRightBtn,
  toNext,
} from "./styled/CarouselComponents";

const STopRightItems = styled.div<{
  currentPage: number;
  totalPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}>`
  position: absolute;
  height: 100%;
  display: flex;
  left: ${({ currentPage, totalPage, setCurrentPage }) => {
    if (currentPage > totalPage) {
      console.log("Left arrow: No More item on right ");

      setCurrentPage(1);
      return 0;
    } else if (currentPage <= 0) {
      console.log("Right arrow: No More item on Left ");

      setCurrentPage(totalPage);
      return -400 * (totalPage - 1) + "px";
    } else {
      return -400 * (currentPage - 1) + "px";
    }
  }};

  & > img {
    width: 400px;
    display: block;
    height: 100%;
  }
`;

const SController = styled.div`
  position: absolute;
  display: flex;
  bottom: 1em;
  right: 1em;
`;
const SControllerBullet = styled.span<{ idx: number; page: number }>`
  width: 20px;
  height: 20px;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: ${({ idx, page, theme: { primary, secondary } }) => {
    return idx === page ? secondary : "white";
  }};
  color: ${({ idx, page, theme: { primary, secondary } }) => {
    return idx === page ? "white" : primary;
  }};
  user-select: none;
`;

interface TopRightBoardProps {}

export const TopRightBoard: React.FC<TopRightBoardProps> = ({}) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<number>(5);

  return (
    <SCarousel>
      <STopRightItems
        currentPage={currentPage}
        totalPage={totalPage}
        setCurrentPage={setCurrentPage}
      >
        <img src='https://www.hanbit.co.kr/data/banner/brand_m1.jpg' />
        <img src='https://www.hanbit.co.kr/data/banner/brand_m2.jpg' />
        <img src='https://cdn.pixabay.com/photo/2017/06/16/22/47/tape-2410588__340.png' />
        <img src='https://images.twinkl.co.uk/tr/image/upload/t_illustration/illustation/banner.png' />
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMb7Fi8LceenoJmz57CUn3mSLgz7h1q_swhA&usqp=CAU' />
      </STopRightItems>

      <SController>
        <SControllerBullet idx={1} page={currentPage}>
          1
        </SControllerBullet>
        <SControllerBullet idx={2} page={currentPage}>
          2
        </SControllerBullet>
        <SControllerBullet idx={3} page={currentPage}>
          3
        </SControllerBullet>
        <SControllerBullet idx={4} page={currentPage}>
          4
        </SControllerBullet>
        <SControllerBullet idx={5} page={currentPage}>
          5
        </SControllerBullet>
      </SController>

      <SLeftBtn onClick={() => toPrevious(currentPage, setCurrentPage)}>
        left
      </SLeftBtn>
      <SRightBtn onClick={() => toNext(currentPage, setCurrentPage)}>
        right
      </SRightBtn>
    </SCarousel>
  );
};
