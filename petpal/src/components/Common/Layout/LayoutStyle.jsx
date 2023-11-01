import styled from 'styled-components';

// 헤더 밑에 오는 전체 컴포넌트에 적용 가능
export const ComponentLayout = styled.div`
  padding: 4.5rem 0;
  height: 100%;
`;

// 리스트 형식의 컴포넌트들을 감싸는 컨테이너 -> 산책, 돌보미, 쇼핑
export const ItemListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  letter-spacing: 0.5px;
`;

// 리스트 형식 내 각 아이템 컴포넌트를 감싸는 컨테이너 -> 산책, 돌보미
export const ItemContainer = styled.div`
  margin: 10px auto;
  padding: 10px;
  width: 468px;
  height: 120px;
  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  border-radius: 5px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

// 아이템 내 이미지를 제외한 내용 부분
export const ItemContentDiv = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin: 0 15px;
  width: 80%;
`;

export const ItemContent = styled.h3`
  line-height: 1.2em; // 글자 윗부분 잘려서 넣어줘야됨
  word-break: break-all;
  font-size: 18px;
  font-weight: bold;
  margin: 10px 5px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  text-align: left;
`;

// (이미지 + 내용)을 감싸는 그룹
// ex) user 이미지 + username, heart 이미지 + heartedCount, comment 이미지 + commentCount
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

export const InfoSpan = styled.span`
  color: #767676;
  font-size: 12px;
  font-weight: 400;
`;

// 회원가입, 프로필 입력 Form
export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

export const H1 = styled.h1`
  font-size: var(--font-size-xl);
  margin-top: 40px;
`;
