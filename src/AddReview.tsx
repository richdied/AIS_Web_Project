import React from "react";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { Book } from "./constants";
import { LabeledField } from "./LabeledField";

const SAddReaderReview = styled.div`
  background-color: ${(props) => props.theme.ogrey};
  padding: 0 1em 1em;

  & > h2 {
    padding: 2em 0;
    font-weight: 700;
    color: ${(props) => props.theme.primary};
  }

  form {
    background-color: ${(props) => props.theme.grey};
    border: 2px solid ${(props) => props.theme.ogrey};
    padding: 1em;
  }
`;

const SAddReviewController = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2em 0;

  & > button {
    border-radius: 9999px;
    padding: 0.8em 5em;
    border: 1px solid ${(props) => props.theme.ogrey};
    font-weight: 700;
    cursor: pointer;
  }

  & > button:nth-child(1) {
    background-color: ${(props) => props.theme.primary};
    color: ${(props) => props.theme.secondary};

    margin-right: 15px;
  }

  & > button:nth-child(2) {
    background-color: ${(props) => props.theme.grey};
    color: ${(props) => props.theme.primarym};
  }
`;

const SNotice = styled.div`
  & > h4 {
    padding: 0.5em 0;
    font-size: 0.9rem;
  }

  & > ul {
    padding: 0 1em;
    list-style-type: decimal;
    list-style-position: inside;

    font-size: 0.7rem;
  }

  & > ul > li {
    padding-top: 0.8em;
  }
`;

const SReaderReviewHeader = styled.header`
  & {
    display: flex;
  }

  & > ul:nth-child(1) {
    width: 180px;
  }

  & > ul > li {
    padding: 0.5em 0;
  }

  & > ul > li > span {
    color: red;
  }
`;

const SReaderReviewMain = styled.main`
  & > textarea {
    width: 100%;
    height: 300px;
    border: 1px solid ${(props) => props.theme.ogrey};
  }
`;

interface AddReviewProps {
  location: {
    state: {
      book: Book;
    };
  };
}

export const AddReview: React.FC<AddReviewProps> = ({ location }) => {
  const { register, watch, getValues, setValue, handleSubmit } = useForm();

  const onValid = () => {
    console.log(" result ", watch());
  };
  const onAbort = () => {};

  return (
    <SAddReaderReview>
      <h2>리뷰쓰기</h2>
      <form onSubmit={handleSubmit(onValid, onAbort)}>
        <SReaderReviewHeader>
          <ul>
            <li>
              <span>*</span>도서명 :
            </li>
            <li>
              <span>*</span>제목 :
            </li>
            <li>
              <span>*</span>별점평가
            </li>
            <li>
              <span>*</span>내용 :
            </li>
          </ul>
          <ul>
            <li>{location.state.book.title}</li>
            <LabeledField
              id='addReaderReview-title'
              type='text'
              register={register}
            />
          </ul>
        </SReaderReviewHeader>
        <SReaderReviewMain>
          <div>
            <input type='file' {...register("addReaderReview-file")} />
          </div>

          <textarea {...register("addReaderReview-text")} />
        </SReaderReviewMain>
        <SNotice>
          <h4>* 리뷰 작성시 유의사항</h4>
          <ul>
            글이나 이미지/사진 저작권 등 다른 사람의 권리를 침해하거나 명예를
            훼손하는 게시물은 이용약관 및 관련법률에 의해 제재를 받을 수
            있습니다.
            <li>
              특히 뉴스/언론사 기사를 전문 또는 부분적으로 '허락없이' 갖고
              와서는 안됩니다 (출처를 밝히는 경우에도 안됨).
            </li>
            <li>
              저작권자의 허락을 받지 않은 콘텐츠의 무단 사용은 저작권자의 권리를
              침해하는 행위로, 이에 대한 법적 책임을 지게 될 수 있습니다.
            </li>
          </ul>
        </SNotice>
        <SAddReviewController>
          <button type='submit'>등록</button>
          <button type='button'>취소</button>
        </SAddReviewController>
      </form>
    </SAddReaderReview>
  );
};
