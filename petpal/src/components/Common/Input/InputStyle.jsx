import styled from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledLabel = styled.label`
  font-size: var(--font-size-md);
  color: var(--color-gray-light);
`;
export const StyledInput = styled.input`
	width: 429px;
	padding: 14px 0;
	margin-bottom: 20px;
	border: none;
	border-bottom: 1px solid var(--color-gray-light);
	font-size: var(--font-size-lg);
	&::placeholder {
		color: #dbdbdb;
		font-size: var(--font-size-md);
	}
	&:focus {
		outline: none;
	}
`;



