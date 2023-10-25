import styled from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledLabel = styled.label`
  font-size: var(--font-size-m);
  color: var(--color-gray-76);
`;
export const StyledInput = styled.input`
  width: 429px;
  padding: 1em 0;
  margin-bottom: 20px;
  border: none;
  border-bottom: 1px solid var(--color-gray-76);
  &::placeholder {
    color: #dbdbdb;
    font-size: var(--font-size-m);
  }
  &:focus {
    outline: none;
  }
`;
