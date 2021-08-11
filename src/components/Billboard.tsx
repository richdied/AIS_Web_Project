import React from "react";
import styled from "styled-components";
import { BannerBoard } from "./BannerBoard";
import { BestBoard } from "./BestBoard";
// import { Carousel } from "./Carousel";
import { SeriesBoard } from "./SeriesBoard";
import { TopRightBoard } from "./TopRightBoard";

const SBoardSection = styled.section`
  width: 100%;
  display: grid;
  /* grid-template-columns: minmax(200px, auto), minmax(200px, auto) 200px 200px; */
  /* grid-template-rows: repeat(2, minmax(250px, auto)); */
  grid-template:
    "banner banner topRight topRight" 250px
    "banner banner best       series" 250px
    / minmax(200px, auto) minmax(200px, auto) 200px 200px;

  & > div {
    grid-area: banner;
  }
  & > section:nth-of-type(1) {
    grid-area: topRight;
  }
  & > section:nth-of-type(2) {
    grid-area: best;
  }
  & > section:nth-of-type(3) {
    grid-area: series;
  }
`;

interface BillboardProps {}

export const Billboard: React.FC<BillboardProps> = ({}) => {
  return (
    <SBoardSection>
      <BannerBoard />
      <TopRightBoard />
      <BestBoard />
      <SeriesBoard />
    </SBoardSection>
  );
};
