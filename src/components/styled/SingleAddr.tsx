import React from "react";
import styled from "styled-components";

const SSingleAddr = styled.li`
  /* list-style-type: none; */
  cursor: pointer;
  padding: 10px 5px;
  border: 1px solid #d6d2d2;
  border-radius: 10px;
  margin-top: 5px;
  background-color: #f0ebeb;

  &:hover {
    background-color: #e6e0e0;
  }
`;

interface SingleAddrProps {
  replaceAddress: (e: any) => void;
  //       onClick={replaceAddress}
  //       data-city={place.siNm}
  //       data-road1={place.roadAddrPart1}
  //       data-zip={place.zipNo}
}

export const SingleAddr: React.FC<SingleAddrProps> = ({
  children,
  replaceAddress,
  ...rest
}) => {
  return (
    <SSingleAddr onClick={replaceAddress} {...rest}>
      {children}
    </SSingleAddr>
  );
};
