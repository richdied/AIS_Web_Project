import React from "react";
import styled from "styled-components";
import { LoginForm } from "../components/LoginForm";

const SHeader = styled.h3`
  margin-top: 3.5em;
  font-size: 2rem;
  font-weight: 700;
`;

const SLog = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2em;
  padding: 5em;

  & > form {
  }

  & > img {
    display: block;
    width: 100%;
  }
`;

interface LoginProps {}

export const Login: React.FC<LoginProps> = ({}) => {
  return (
    <>
      <SHeader>로그인</SHeader>

      <SLog>
        <LoginForm />
        <img src='https://www.hanbit.co.kr/data/banner/login_2.jpg' />
      </SLog>
    </>
  );
};
