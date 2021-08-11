import { faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { BtnForgotid } from "./BtnForgotid";
import { BtnForgotPassword } from "./BtnForgotPassword";
import { ErrorField } from "./styled/ErrorField";

const SLoginForm = styled.form`
  display: flex;
  flex-direction: column; 
  /* justify-content: space-between; */ */
`;

const SErrMessage = styled.div`
  font-size: 1rem;
`;

const SSign = styled.div`
  height: 100px;
  display: grid;
  grid-template:
    "idlb id id login " 1fr
    "pwlb pw pw login " 1fr /
    minmax(max-content, 1fr) 1fr 1fr 1fr;
  grid-row-gap: 0.5em;
  grid-column-gap: 0.5em;

  & > label:nth-of-type(1) {
    grid-area: idlb;
    align-self: center;
  }
  & > input:nth-of-type(1) {
    grid-area: id;
    padding: 1em;
  }

  & > label:nth-of-type(2) {
    grid-area: pwlb;
    align-self: center;
  }
  & > input:nth-of-type(2) {
    grid-area: pw;
    padding: 1em;
  }

  & > button {
    grid-area: login;
    background-color: ${(props) => props.theme.secondary};
    color: ${(props) => props.theme.grey};
  }
`;

const SSaveId = styled.div`
  margin-top: 1em;
  font-size: 1rem;

  & > label {
    user-select: none;
  }
`;

const SFindU = styled.div`
  margin-top: auto;
  display: grid;
  grid-template-columns: repeat(3, minmax(max-content, auto));
  grid-gap: 0.5em;

  & > button {
    cursor: pointer;
    user-select: none;
    background-color: ${(props) => props.theme.grey};
    color: ${(props) => props.theme.primarym};
    border: 1px solid ${(props) => props.theme.primarym};

    border-radius: 9999px;
    font-size: 0.9rem;
    padding: 0.7em 1em;
    margin-top: 1em;
  }

  & > a {
    display: block;
    text-align: center;
    background-color: ${(props) => props.theme.secondary};
    color: ${(props) => props.theme.primary};

    cursor: pointer;
    user-select: none;
    border: 1px solid ${(props) => props.theme.primarym};

    border-radius: 9999px;
    font-size: 0.9rem;
    padding: 0.7em 1em;
    margin-top: 1em;
  }
`;

type IFormValues = {
  id: string;
  password: string;
  idSaver: boolean;
};

const handleValid: SubmitHandler<IFormValues> = async ({
  id,
  password,
  idSaver,
}) => {
  console.log(" data ", id, password, idSaver);
  if (idSaver) {
    window.localStorage.setItem("userId", id);
  }
};

const handleAbort = () => {
  console.log("a bort");
};

interface LoginFormProps {}

export const LoginForm: React.FC<LoginFormProps> = ({}) => {
  const {
    formState: {
      isDirty,
      isValid,
      isSubmitSuccessful,
      isSubmitted,
      isValidating,
      isSubmitting,
      errors,
    },
    clearErrors,
    register,
    handleSubmit,
    getValues,
    setError,
    setFocus,
    watch,
    setValue,
  } = useForm<IFormValues>();

  return (
    <SLoginForm onSubmit={handleSubmit(handleValid, handleAbort)}>
      <SSign>
        <label htmlFor='id'>아이디</label>
        <input
          id='id'
          type='text'
          {...register("id", {
            value: window.localStorage.getItem("userId") || getValues("id"),
            required: "아이디를 입력해주세요.",
          })}
        />
        <label htmlFor='password'>비밀번호</label>
        <input
          id='password'
          type='password'
          {...register("password", {
            required: "비밀번호를 입력해주세요.",
          })}
        />

        <button type='submit'>
          <FontAwesomeIcon icon={faLock} />
          <div>로그인</div>
        </button>
      </SSign>

      <SSaveId>
        <input id='idSaver' type='checkbox' {...register("idSaver")} />
        <label htmlFor='idSaver'>아이디 저장</label>
      </SSaveId>

      <SErrMessage>
        {errors.id && <ErrorField message={errors.id.message!} />}
        {errors.password && <ErrorField message={errors.password.message!} />}
      </SErrMessage>

      <SFindU>
        <BtnForgotid>아이디 찾기</BtnForgotid>
        <BtnForgotPassword>비밀번호 찾기</BtnForgotPassword>
        <Link to='/signup'>회원가입</Link>
      </SFindU>
    </SLoginForm>
  );
};
