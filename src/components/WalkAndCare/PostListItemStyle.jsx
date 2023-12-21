import styled from 'styled-components';

export const ItemBox = styled.p`
  width: 90px;
  height: 90px;
  border-radius: 10px;
  overflow: hidden;
  flex-shrink: 0;
`;

export const ItemImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const LikeAndChat = styled.div`
  display: flex;
  gap: 10px;

  .likeAndChat {
    width: 50px;
  }
`;

export const PostBlankWrapper = styled.div`
  margin: 0 auto;
  position: relative;
  background-color: #fff;
  height: 100vh;
`;

export const PostBlankTextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;
export const PostBlankH1 = styled.h1`
  font-weight: 600;
  font-size: var(--font-size-md);
  margin-top: 70%;
`;

export const PostBlankP = styled.p`
  font-size: var(--font-size-sm);
  color: var(--color-gray-med);
`;

export const ToWriteButton = styled.button`
  cursor: pointer;
  width: 150px;
  height: 40px;
  background: none;
  border: none;
  border-radius: 20px;
  margin-top: 20px;
  font-weight: 500;
  color: var(--color-white);
  background-color: var(--color-button-bg);
`;
