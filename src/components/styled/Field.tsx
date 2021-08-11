import React from "react";
import {
  DeepMap,
  FieldValues,
  FieldError,
  UseFormRegisterReturn,
} from "react-hook-form";
import styled from "styled-components";

const SField = styled.input<{
  errors: DeepMap<FieldValues, FieldError>;
  fieldName: string;
}>`
  border: ${(props: any) =>
    props.errors[props.fieldName] ? "3px solid tomato" : "3px solid #c7c2c7"};
  outline: none;
  border-radius: 16px;
  padding: 0.3em 0.7em;
  font-size: 1rem;
`;

interface FieldProps {
  id?: string;
  pattern?: string;
  errors: DeepMap<FieldValues, FieldError>;
  name: string;
  type: string;
  placeholder?: string;
  valid: UseFormRegisterReturn;
}

export const Field: React.FC<FieldProps> = ({
  errors,
  name,
  id,
  type,
  children,
  pattern,
  placeholder,
  valid,
}) => {
  return (
    <SField
      errors={errors}
      fieldName={name}
      id={id}
      pattern={pattern}
      placeholder={placeholder}
      type={type}
      {...valid}
    >
      {children}
    </SField>
  );
};
