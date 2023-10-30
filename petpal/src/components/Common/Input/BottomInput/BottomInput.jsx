import React from 'react';
import { forwardRef } from 'react';
import {
  BottomInputContainer,
  ImageBtnBox,
  BottomInputBox,
  StyledInput,
  SubmitButton,
} from './BottomInputStyle';

const BottomInput = (
  {
    id,
    label,
    value,
    placeholder,
    onClick,
    onChange,
    onSubmit,
    isChat = false,
  },
  forwardedRef,
) => {
  const imgBtn = '/images/chat-upload-btn.svg';
  const imgArrow = '/images/icon-arrow-top.svg';

  return (
    <BottomInputContainer>
      {/* isChat이 true일 때 이미지 업로드 버튼 랜더링 */}
      {isChat && (
        <ImageBtnBox onClick={onClick}>
          <input
            ref={forwardedRef}
            type="file"
            id={id}
            onChange={onChange}
            hidden={true}
          />
          <img src={imgBtn} alt="이미지 업로드 버튼" />
        </ImageBtnBox>
      )}
      <BottomInputBox onSubmit={onSubmit}>
        <label htmlFor={id} label={label} className="a11yHidden">
          {label}
        </label>
        {/* isChat이 true일 때 input 사이즈 조절 */}
        <StyledInput
          id={id}
          type="text"
          label={label}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          isChat={isChat}
        />
        <SubmitButton type="submit">
          <img src={imgArrow} alt="텍스트 전송 버튼" />
        </SubmitButton>
      </BottomInputBox>
    </BottomInputContainer>
  );
};

export default forwardRef(BottomInput);
