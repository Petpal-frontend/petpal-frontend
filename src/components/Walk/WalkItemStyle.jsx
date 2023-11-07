import styled from 'styled-components';

export const WalkItemBox = styled.p`
  width: 90px;
  height: 90px;
  border-radius: 10px;
  // margin-left: 15px;
  overflow: hidden;
  flex-shrink: 0;
`;

export const WalkItemImage = styled.img`
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
