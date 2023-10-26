import styled from 'styled-components';

// 스타일드 컴포넌트를 사용하여 스타일 정의
export const PostContainer = styled.div`
  border: 1px solid #e1e1e1;
  margin: 10px;
  max-width: 300px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const PostTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px 20px 20px;
	width: 520px;
`;

export const PostBottom = styled.div`
  margin: 20px;
  div {
    margin-bottom: 7px;
  }
`;

export const PostImage = styled.img`
  max-width: 100%;
`;

export const PostContent = styled.p`
  padding: 10px;
	line-height: 1.6em;
`;

export const Divider = styled.div`
  border-top: 1px solid #DBDBDB; 
	width: 520px;
`;
