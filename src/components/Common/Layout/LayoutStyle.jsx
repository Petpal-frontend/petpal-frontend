import styled from 'styled-components';

// 헤더 밑에 오는 전체 컴포넌트에 적용 가능
export const ComponentLayout = styled.div`
  padding: 60px 0;

  &.detailComponent {
    padding-bottom: 0;
  }
`;

// 리스트 형식의 컴포넌트들을 감싸는 컨테이너 -> 산책, 돌보미, 쇼핑
export const ItemListContainer = styled.div`
  display: flex;
  flex-direction: column;
  // align-items: center;
  gap: 10px;
  letter-spacing: 0.5px;
  // padding-top: 15px;
  padding: 15px 0;

  &.profile {
    align-items: center;
  }
`;

// 리스트 형식 내 각 아이템 컴포넌트를 감싸는 컨테이너 -> 산책, 돌보미
export const ItemContainer = styled.div`
  // margin: 10px auto;
  // padding: 10px;
  // width: 468px;
  height: 120px;
  // padding: 0 14px;
  padding: 0 30px;
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.04);
  text-align: center;
  border-radius: 5px;
  display: flex;
  align-items: center;
  gap: 15px;
  cursor: pointer;
`;

// 아이템 내 이미지를 제외한 내용 부분
export const ItemContentDiv = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  // margin: 0 15px;
  // width: 80%;
  width: 100%;
  gap: 16px;
`;

export const ItemContent = styled.h3`
  line-height: 1.2em; // 글자 윗부분 잘려서 넣어줘야됨
  word-break: break-all;
  font-size: 16px;
  font-weight: 600;
  // margin: 10px;
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
  // width: 90%;
  width: 100%;
  // margin: 10px auto;
`;

export const InfoGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  // width: 200px;
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
  // height: 100vh;
  min-height: calc(100vh - 120px);

  &.signUpContainer {
    padding: 60px 0;
  }

  .signUpForm,
  .profileEditForm {
    width: 82%;
  }
`;

export const H1 = styled.h1`
  font-size: var(--font-size-xl);
  // margin-top: 40px;
`;
