import React from "react";
import { FieldValues, UseFormSetValue } from "react-hook-form";
import styled from "styled-components";
import { Juso, ResultQuery } from "./Address.d";
import { SingleAddr } from "./styled/SingleAddr";

const SListUl = styled.ul`
  list-style-type: none;
  color: ${(props) => {
    return props.theme.primary;
  }};
`;
interface ListAddrProps {
  setValue: UseFormSetValue<FieldValues>;
  resultQuery: ResultQuery | null;
  currentPage: number;
  totalPage: number;
  queryAddress: (move: 1 | 0 | -1) => Promise<void>;
  setOpen1: (opened: boolean) => void;
  setOpen2: (opened: boolean) => void;
}

export const ListAddr: React.FC<ListAddrProps> = ({
  setValue,
  resultQuery,
  currentPage,
  totalPage,
  queryAddress,
  setOpen1,
  setOpen2,
}) => {
  const replaceAddress = (e: any) => {
    const city = e.currentTarget.dataset.city;
    const roadAddrPart1 = e.currentTarget.dataset.road1;
    const zip = e.currentTarget.dataset.zip;

    console.log(city, " ", zip, " ", roadAddrPart1);

    //     setValue("add-keyword", road);
    setValue("addr-city", city);
    setValue("addr-doro", roadAddrPart1);
    setValue("addr-zip", zip);
    setValue("addr-keyword", roadAddrPart1);
    setOpen1(false);
    setOpen2(true);
  };

  return (
    <SListUl>
      {resultQuery?.juso?.length != 0 ? (
        resultQuery?.juso?.map((place: Juso, idx: number) => {
          return (
            <SingleAddr
              key={currentPage + place.bdMgtSn + place.detBdNmList}
              replaceAddress={replaceAddress}
              data-city={place.siNm}
              data-road1={place.roadAddrPart1}
              data-zip={place.zipNo}
              // {/* <span>
              //     {(currentPage - 2) *
              //       parseInt(resultQuery?.common?.countPerPage) +
              //       (1 + idx)}
              //     </span> */}
            >
              {place?.roadAddr}
            </SingleAddr>
          );
        })
      ) : (
        <h3>주소가 올바르지 않습니다.</h3>
      )}
      {resultQuery?.juso && (
        <li>
          <button onClick={() => queryAddress(-1)} disabled={currentPage <= 2}>
            이전
          </button>
          <button
            onClick={() => queryAddress(1)}
            disabled={currentPage === totalPage}
          >
            다음
          </button>
        </li>
      )}
      {resultQuery && resultQuery.common.totalPage}
    </SListUl>
  );
};
