import React from 'react';
import { forwardRef } from 'react';
import {
  BottomInputContainer,
  BottomInputWrap,
  ImageBtnBox,
  BottomInputBox,
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
      <BottomInputWrap>
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
          <input
            id={id}
            type="text"
            label={label}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
          />
          <SubmitButton type="submit">
            <img src={imgArrow} alt="텍스트 전송 버튼" />
          </SubmitButton>
        </BottomInputBox>
      </BottomInputWrap>
    </BottomInputContainer>
  );
};

export default forwardRef(BottomInput);
