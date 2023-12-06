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
