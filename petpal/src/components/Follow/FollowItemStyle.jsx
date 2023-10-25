import styled from 'styled-components';

export const FollowItemContainer = styled.div`
  margin: 10px;
  padding: 10px;
  width: 490px;
  height: 100px;
  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  border-radius: 5px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const FollowItemImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 100px;
  margin-left: 15px;
`;

export const FollowItemUser = styled.h3`
  line-height: 1.2em; // 글자 윗부분 잘려서 넣어줘야됨
  font-size: 18px;
  font-weight: bold;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
`;
export const FollowItemButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 100px;
  margin-left: 15px;
  // background-image: url('images/homeLogo.svg');
`;

export const ContentDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: 0 25px;
`;
