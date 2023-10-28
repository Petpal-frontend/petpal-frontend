import styled from 'styled-components';

export const ItemContainer = styled.div`
  margin: 10px auto;
  padding: 10px;
  width: 90%;
  height: 120px;
  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  border-radius: 5px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const WalkItemImage = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 10px;
  margin-left: 15px;
`;

export const WalkItemContent = styled.h3`
  line-height: 1.2em; // 글자 윗부분 잘려서 넣어줘야됨
  word-break: break-all;
  font-size: 18px;
  font-weight: bold;
  margin: 10px 5px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`;

export const InfoSpan = styled.span`
  color: #767676;
  font-size: 12px;
  font-weight: 400;
`;

export const InfoDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: 10px auto;
`;

export const InfoGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
`;

export const ContentDiv = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin: 0 15px;
`;

export const LikeAndChat = styled.div`
  display: flex;
  gap: 10px;

  .likeAndChat {
    width: 50px;
  }
`;
