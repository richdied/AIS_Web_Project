import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";

const SLightDarkCtl = styled.div`
  & > svg {
    margin-right: 0.5em;
  }
`;

interface LightDarkCtlProps {
  darkMode: boolean;
}

export const LightDarkCtl: React.FC<LightDarkCtlProps> = ({ darkMode }) => {
  return (
    <SLightDarkCtl>
      <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
      <span>{darkMode ? "일반모드로 바꾸기 " : "다크모드로 바꾸기"}</span>
    </SLightDarkCtl>
  );
};
