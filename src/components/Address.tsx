import React, { useState } from "react";
import { DetailAddr } from "./DetailAddr";
import { ListAddr } from "./ListAddr";
import { ResultQuery } from "./Address.d";
import {
  DeepMap,
  FieldError,
  FieldValues,
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
} from "react-hook-form";
import { ErrorField } from "./styled/ErrorField";
import { Field } from "./styled/Field";
import styled from "styled-components";
import { SSubButton } from "./SSignUpBtns";

const JUSO_API_KEY = "devU01TX0FVVEgyMDIxMDcxNDEyMjAxODExMTQwOTg=";
const JUSO_Q = "https://www.juso.go.kr/addrlink/addrLinkApi.do";

const SAddr = styled.div`
  margin-bottom: 0.5em;
`;
const SAddrDetail = styled.div`
  margin-bottom: 0.5em;

  & > label {
    width: 140px;
    display: inline-block;
  }
`;

interface AddressProps {
  register: UseFormRegister<FieldValues>;
  watch: UseFormWatch<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
  errors: DeepMap<FieldValues, FieldError>;
}

export const Address: React.FC<AddressProps> = ({
  register,
  watch,
  setValue,
  errors,
}) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<number>(2);
  const [resultQuery, setResultQuery] = useState<ResultQuery | null>(null);
  const [open1, setOpen1] = useState<boolean>(false);
  const [open2, setOpen2] = useState<boolean>(false);

  const queryAddress = async (move: 1 | 0 | -1) => {
    const formData = new FormData();
    const keyword = watch()["addr-keyword"];

    console.log("k ", keyword);

    formData.append("confmKey", JUSO_API_KEY);
    formData.append("currentPage", currentPage.toString());
    formData.append("countPerPage", "10");
    formData.append("keyword", keyword);
    formData.append("resultType", "json");

    const res = await fetch(JUSO_Q, {
      method: "POST",
      body: formData,
    });

    const {
      results: { common, juso },
    } = await res.json();

    console.log("common ", common);
    console.log("juso ", juso);
    setResultQuery({ common, juso });
    setTotalPage(Math.ceil(common?.totalCount / common.countPerPage));

    if (move == 1 && currentPage < totalPage) {
      setCurrentPage(currentPage + 1);
    } else if (move == -1 && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    } else {
      return;
    }
  };

  const clickSearch = () => {
    queryAddress(1);
    setOpen1(true);
    setOpen2(false);
  };

  return (
    <section>
      <SAddr>
        <Field
          errors={errors}
          name='addr-keyword'
          id='addr-keyword'
          type='text'
          placeholder='주소 검색'
          valid={{
            ...register("addr-keyword", { required: true, minLength: 1 }),
          }}
        />
        <SSubButton type='button' onClick={clickSearch}>
          주소 검색
        </SSubButton>
      </SAddr>

      <div>
        {open1 && (
          <ListAddr
            setValue={setValue}
            setOpen1={setOpen1}
            setOpen2={setOpen2}
            queryAddress={queryAddress}
            resultQuery={resultQuery}
            currentPage={currentPage}
            totalPage={totalPage}
          />
        )}

        {open2 && <DetailAddr register={register} />}

        <SAddrDetail>
          <label htmlFor='addr-detailed'>상세 주소</label>
          <Field
            errors={errors}
            name='addr-detailed'
            id='addr-detailed'
            type='text'
            placeholder='상세 주소를 입력해주세요.'
            valid={{
              ...register("addr-detailed", {
                required: "상세 주소를 입력해주세요",
              }),
            }}
          />
        </SAddrDetail>
        {errors && errors["addr-detailed"] && (
          <ErrorField message={errors["addr-detailed"].message} />
        )}
      </div>
    </section>
  );
};
