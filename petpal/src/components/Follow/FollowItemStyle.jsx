import styled from 'styled-components';

export const FollowItemContainer = styled.div`
  width: 100%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .userInfo {
    text-align: center;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 22px;
  }
`;

export const FollowItemImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  object-fit: cover;
`;

export const FollowItemUser = styled.h3`
  color: #1e1e1e;
  font-size: 14px;
  font-weight: 600;
`;
