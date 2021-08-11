import styled from "styled-components";

export const SCarousel = styled.section`
  position: relative;
  overflow: hidden;

  & > h3 {
    background-color: ${(props) => props.theme.primarym};
  }
`;

export const SLeftBtn = styled.div`
  position: absolute;
  top: 50%;
  left: 0.5em;
  border-left: 5px solid red;
  border-bottom: 5px solid red;
  transform: translateY(-50%) rotate(45deg);
  width: 20px;
  height: 20px;
  cursor: pointer;
  user-select: none;
  overflow: hidden;
  text-indent: -99999999999px;
`;

export const SRightBtn = styled.div`
  overflow: hidden;
  text-indent: -99999999999px;
  position: absolute;
  top: 50%;
  right: 0.5em;
  border-right: 5px solid red;
  border-bottom: 5px solid red;
  transform: translateY(-50%) rotate(-45deg);
  width: 20px;
  height: 20px;
  cursor: pointer;
  user-select: none;
`;

export const toPrevious = (
  currentPage: number,
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>
) => {
  console.log("as click ", currentPage);
  const expectedPage = --currentPage;

  console.log("result click ", expectedPage);
  setCurrentPage(expectedPage);
};

export const toNext = (
  currentPage: number,
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>
) => {
  console.log("as click ", currentPage);
  const expectedPage = ++currentPage;

  console.log("result click ", expectedPage);
  setCurrentPage(expectedPage);
};
