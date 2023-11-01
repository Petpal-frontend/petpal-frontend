import styled from 'styled-components';

export const FollowItemContainer = styled.div`
  width: 100%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .userInfo {
    // margin: 0 25px;
    // border: none;
    // background: none;
    // background-image: url(${props => props.followUserButton});
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
`;

export const FollowItemUser = styled.h3`
  color: #1e1e1e;
  font-size: 14px;
  font-weight: 600;
`;
export const FollowItemButton = styled.button`
  width: 68px;
  height: 30px;
  border: none;
  border-radius: 10px;
  background-color: #27489d;
  color: #fff;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;

  &.follow {
    border: 1px solid #27489d;
    background-color: #fff;
    color: #27489d;
  }
`;
