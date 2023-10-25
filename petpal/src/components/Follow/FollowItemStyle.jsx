import styled from 'styled-components';
import ImageButton from '../Common/Button/ImageButton/ImageButton';
export const FollowItemContainer = styled.div`
  // margin: 10px;
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
  width: 70px;
  height: 70px;
  border-radius: 100px;
  margin-right: 20px;
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
  width: 68px;
  height: 30px;
  margin-right: 15px;
  background-image: url(${props => props.followButton});
  background-repeat: no-repeat;
  background-position: center center;
  border-radius: 10px;
`;

export const ContentDiv = styled.button`
  display: flex;
  width: 90%;
  text-align: center;
  align-items: center;
  margin: 0 25px;
  gap: 10px;
  cursor: pointer;
  background: none;
  border: none;
  // background-image: url(${props => props.followUserButton});
`;

// export const ContentDiv = styled.div`
//   display: flex;
//   // justify-content: space-between;
//   width: 90%;
//   text-align: center;
//   align-items: center;
//   margin: 0 25px;
//   gap: 10px;
// `;
