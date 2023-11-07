import React from 'react';

import { InputContainer, StyledLabel, StyledInput } from './InputStyle';

export default function Input({
  id,
  readOnly,
  label,
  type,
  value,
  placeholder,
  onChange,
  onClick,
  className,
}) {
  return (
    <InputContainer>
      <StyledLabel htmlFor={id} label={label}>
        {label}
      </StyledLabel>
      <StyledInput
        id={id}
        type={type}
        readOnly={readOnly}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onClick={onClick}
        className={className}
      />
    </InputContainer>
  );
}
