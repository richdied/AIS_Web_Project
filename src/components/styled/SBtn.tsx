import styled from "styled-components";

export const SBtn = styled.button`
  background-color: ${(props) => props.theme.secondary};
  color: ${(props) => props.theme.primary};

  a {
    color: ${(props) => props.theme.primary};
  }
`;
