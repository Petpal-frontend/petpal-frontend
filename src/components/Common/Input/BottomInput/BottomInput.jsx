import React from 'react';
import { forwardRef } from 'react';
import {
  BottomInputContainer,
  ImageBtnBox,
  BottomInputBox,
  StyledInput,
  SubmitButton,
} from './BottomInputStyle';
import imgBtn from '../../../../assets/image/chat-upload-btn.svg';
import imgArrow from '../../../../assets/image/icon-arrow-top.svg';

const BottomInput = (
  {
    id,
    label,
    value,
    placeholder,
    onImageClick,
    onTextChange,
    onImageChange,
    onSubmit,
    onEnterPress,
    isChat = false,
  },
  forwardedRef,
) => {
  return (
    <BottomInputContainer>
      {/* isChat이 true일 때 이미지 업로드 버튼 랜더링 */}
      {isChat && (
        <ImageBtnBox onClick={onImageClick}>
          <input
            ref={forwardedRef}
            type="file"
            id={id}
            onChange={onImageChange}
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
          onChange={onTextChange}
          onKeyPress={onEnterPress}
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
