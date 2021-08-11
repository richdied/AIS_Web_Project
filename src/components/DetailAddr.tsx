import React from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";

interface DetailAddrProps {
  register: UseFormRegister<FieldValues>;
}

export const DetailAddr: React.FC<DetailAddrProps> = ({ register }) => {
  return (
    <>
      <div>
        <label htmlFor='address-city'>도시</label>
        <input
          id='address-city'
          type='text'
          {...register("addr-city", { required: true })}
        />
      </div>
      <div>
        <label htmlFor='address-doro'>도로명 주소</label>
        <input
          id='address-doro'
          type='text'
          {...register("addr-doro", {
            required: "도로명 주소",
          })}
        />
      </div>
      <div>
        <label htmlFor='address-zip'>우편 번호</label>
        <input
          id='address-zip'
          type='text'
          {...register("addr-zip", { required: true })}
        />
      </div>
    </>
  );
};
