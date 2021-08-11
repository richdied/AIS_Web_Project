import styled from "styled-components";

export const SSubButton = styled.button`
  cursor: pointer;
  margin-left: 0.5em;
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.secondary};
  padding: 0.5em 1em;
  border-radius: 999px;
  font-weight: 800;
  outline: none;
  border: 1px solid ${(props) => props.theme.ogrey};
`;
