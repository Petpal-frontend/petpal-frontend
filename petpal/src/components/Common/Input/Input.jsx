import React from 'react';

import { InputContainer, StyledLabel, StyledInput } from './InputStyle';

export default function Input({ id, label, text, value, placeholder }) {
  return (
    <InputContainer>
      <StyledLabel htmlFor={id} label={label}>
        {label}
      </StyledLabel>
      <StyledInput type={text} value={value} placeholder={placeholder} />
    </InputContainer>
  );
}
