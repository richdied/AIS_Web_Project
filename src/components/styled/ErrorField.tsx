import React from "react";
import styled from "styled-components";

const SErrorField = styled.div`
  color: tomato;
`;

interface ErrorFieldProps {
  message: string;
}

export const ErrorField: React.FC<ErrorFieldProps> = ({ message }) => {
  return <SErrorField>{message}</SErrorField>;
};
