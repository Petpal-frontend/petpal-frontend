import React from 'react';
import {
  BottomButtonContainerStyle,
  StyledLink,
} from './BottomButtonContainerStyle';

export const BottomButtonContainer = ({ buttonsData, onButtonClick }) => {
  return (
    <BottomButtonContainerStyle>
      {buttonsData.map((data, index) => (
        <StyledLink to={data.path} key={index}>
          <button tabIndex="0" onClick={() => onButtonClick(index + 1)}>
            {data.text}
          </button>
        </StyledLink>
      ))}
    </BottomButtonContainerStyle>
  );
};
