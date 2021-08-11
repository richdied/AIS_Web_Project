import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SHeader = styled.ul`
  background-color: orange;
  display: flex;
  justify-content: flex-end;
  padding: 10px;
  font-weight: 700;
  height: 50px;

  & > li > a {
    color: #fff;
    display: block;
    padding: 5px 15px;
  }
`;

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <SHeader>
      <li>
        <Link to='/signup'>회원가입</Link>
      </li>
      <li>
        <Link to='/login'>로그인</Link>
      </li>
      <li>
        <Link to='/cart'>장바구니</Link>
      </li>
    </SHeader>
  );
};
