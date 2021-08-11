import React from "react";
import { UseFormRegister, FieldValues } from "react-hook-form";

interface LabeledFieldProps {
  id: string;
  type: string;
  register: UseFormRegister<FieldValues>;
}

export const LabeledField: React.FC<LabeledFieldProps> = ({
  id,
  type,
  register,
}) => {
  return (
    <>
      <label htmlFor={id} />
      <input id={id} type={type} {...register(id)} />
    </>
  );
};
