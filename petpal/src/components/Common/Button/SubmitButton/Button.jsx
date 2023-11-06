import React from 'react';
import styled, { css } from 'styled-components';

const VARIANTS = {
  primary: css`
    --button-color: var(--color-white);
    --button-background: var(--color-primary);
  `,
  white: css`
    --button-color: var(--color-primary);
    --button-background: var(--color-white);
    --button-border: 1px solid var(--color-primary);
  `,
};

const SIZES = {
  xs: css`
    --button-font-size: var(--font-size-sm);
    --button-width: 90px;
    --button-height: 40px;
    --button-radius: 13px;
  `,
  sm: css`
    --button-font-size: var(--font-size-sm);
    --button-width: 158px;
    --button-height: 48px;
    --button-radius: 13px;
  `,
  md: css`
    --button-font-size: var(--font-size-md);
    --button-width: 400px;
    --button-height: 65px;
    --button-radius: 13px;
  `,
  lg: css`
    --button-font-size: var(--font-size-lg);
    --button-width: 429px;
    --button-height: 58px;
    --button-radius: 50px;
  `,
  xlg: css`
    --button-font-size: var(--font-size-xlg);
    --button-width: 480px;
    --button-height: 80px;
    --button-radius: 13px;
  `,
};

export default function Button({
  onClick,
  type,
  size,
  variant,
  children,
  disabled,
}) {
  return (
    <StyledButton
      onClick={onClick}
      type={type}
      size={size}
      variant={variant}
      disabled={disabled}
    >
      <span>{children}</span>
    </StyledButton>
  );
}
const StyledButton = styled.button`
  ${({ variant }) => VARIANTS[variant]}
  ${({ size }) => SIZES[size]}
  
  cursor: pointer;
  font: inherit;
  font-weight: 600;
  border: none;
  border: var(--button-border);
  margin: 0;
  width: var(--button-width);
  height: var(--button-height);
  border-radius: var(--button-radius);
  background: var(--button-background);
  color: var(--button-color);
  font-size: var(--button-font-size);

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
    --button-color: var(--color-white);
    --button-background: var(--color-button-bg);
  }
`;
