import styled from 'styled-components';

export const PostContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 1rem;

  form {
    width: 100%;
  }
`;

export const PostDiv = styled.div`
  position: relative;
  display: flex;
  padding: 1rem;
  // height: 900px;
  // maxWidth: 200px
  min-height: calc(100vh - 60px - 2rem);
`;

export const PostContent = styled.textarea`
  width: 100%;
  height: 50%;
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

export const ImageContainer = styled.div`
  padding-top: 50px;
  display: flex;
  gap: 10px;
`;

export const ImgUploadButton = styled.img`
  cursor: pointer;
  position: absolute;
  width: 50px;
  height: 50px;
  bottom: 4%;
  right: 20px;
`;
export const SelectedImage = styled.img`
  display: flex;
  width: 126px;
  height: 126px;
  border: 0.8px solid #dbdbdb;
  border-radius: 10%;
  object-fit: cover;
`;
