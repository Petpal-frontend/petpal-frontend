import styled from 'styled-components';

export const PostContainer = styled.section`
  position: relative;
  display: flex;
  padding: 5rem 1rem;
  height: 100vh;
`;
export const PostContent = styled.textarea`
  width: 420px;
  height: 500px;
  border: none;
  resize: none;
  color: var(--color-gray-dark);
  font-size: var(--font-size-lg);
  outline: none;
  &::placeholder {
    color: #c6c6c6;
    font-size: var(--font-size-lg);
  }
`;

export const ImgUploadButton = styled.button`
  position: absolute;
  cursor: pointer;
  width: 50px;
  height: 50px;
  background: url('images/chat-upload-btn.svg') no-repeat center/ cover;
  border: none;
  bottom: 10%;
  right: 15px;
`;
