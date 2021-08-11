import React from "react";
import { SBtn } from "./styled/SBtn";

interface BtnForgotPasswordProps {}

export const BtnForgotPassword: React.FC<BtnForgotPasswordProps> = ({}) => {
  return <SBtn type='button'>비밀번호 찾기</SBtn>;
};
