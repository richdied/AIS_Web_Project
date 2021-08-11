import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const SFooter = styled.footer`
  background-color: ${(props) => props.theme.primarys};
  font-size: 14px;
`;

const SUpper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(30px, auto));

  & > div {
    padding: 30px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const SLeftUl = styled.ul`
  & > li {
    padding: 5px 0;
  }
`;

const SRightUl = styled.ul`
  & > li {
    padding: 3px 0;
  }
`;

const SCenter = styled.div`
  position: relative;

  & > div {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 1em;
  }

  //icons
  & > div > svg {
    color: #fff;
    cursor: pointer;
  }

  //search bar
  & > form {
    position: relative;
    width: 75%;
    margin: 0 auto;

    & > div > input[type="text"] {
      height: 35px;
      width: 100%;
      padding: 0 10px;
    }

    //search button
    & > div > span {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      right: 0;
      top: 0;
      width: 50px;
      height: 100%;
      color: #fff;
      background-color: ${(props) => props.theme.secondary};
      cursor: pointer;
      user-select: none;
    }
  }

  &::before {
    content: " ";
    display: block;
    background-color: ${(props) => props.theme.primary};
    width: 2px;
    height: 80%;
    position: absolute;
    left: 0;
    top: 50%;
    border-radius: 2%;
    transform: translateY(-50%);
  }
  &::after {
    content: " ";
    display: block;
    background-color: ${(props) => props.theme.primary};
    width: 2px;
    height: 80%;
    position: absolute;
    right: 0;
    top: 50%;
    border-radius: 2%;
    transform: translateY(-50%);
  }
`;

const SBottom = styled.div`
  padding: 20px 0;
  background-color: ${(props) => props.theme.primarym};
  text-align: center;
  user-select: none;
`;

interface FooterProps {}

export const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <SFooter>
      <SUpper>
        <div>
          <SLeftUl>
            <li>회사소개</li>
            <li>기획</li>
            <li>입사지원</li>
            <li>Foreign Rights</li>
            <li>이용약관 / 개인정보취급방침</li>
            <li>사이트맵</li>
          </SLeftUl>
        </div>

        <SCenter>
          <div>
            <FontAwesomeIcon icon={faFacebookF} size='3x' />
            <FontAwesomeIcon icon={faYoutube} size='3x' />
            <FontAwesomeIcon icon={faInstagram} size='3x' />
          </div>

          <form>
            <div>
              <input type='text' />
              <span>검색</span>
            </div>
            <input type='hidden' value='검색' />
          </form>
        </SCenter>

        <div>
          <SRightUl>
            <li>AIS Books</li>
            <li>(02) 서울 광화문로 </li>
            <li>Tel : 02-1111-2222</li>
            <li>대표이사 : </li>
            <li>사업자등록번호 : 220-11-11111</li>
            <li>통신판매업신고 : 2021-도쿄청담-1111호</li>
          </SRightUl>
        </div>
      </SUpper>

      <SBottom>&copy; 2021 AIS Books.inc. All rights reserved</SBottom>
    </SFooter>
  );
};
