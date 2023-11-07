import React from 'react';
import styled from 'styled-components';
import error404 from '../assets/image/error404.svg';
import { useNavigate } from 'react-router-dom';

export default function Page404() {
  const navigate = useNavigate();
  const handleClickBackButton = () => {
    navigate(-1);
  };

  return (
    <ErrorWrapper>
      <ErrorImg src={error404} alt="404 에러 이미지" />
      <ErrorContent>
        <p>페이지를 찾지 못했어요...!</p>
        <PreButton onClick={handleClickBackButton}>이전 페이지</PreButton>
      </ErrorContent>
    </ErrorWrapper>
  );
}

export const ErrorWrapper = styled.div`
  position: relative;
  width: 520px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const ErrorImg = styled.img`
  width: 200px;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const ErrorContent = styled.div`
  margin-top: 150px;
`;
export const PreButton = styled.button`
  cursor: pointer;
  width: 150px;
  height: 50px;
  border-radius: 30px;
  background-color: #ffe769;
  border: none;
  font-size: 15px;
  font-weight: 700;
  margin-top: 30px;
`;
