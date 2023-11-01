import styled from 'styled-components';

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
  padding: 0 20px;
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
  padding: 10px 27px;
  line-height: 1.6em;
`;

export const Divider = styled.div`
  border-top: 1px solid #dbdbdb;
  width: 520px;
`;

export const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
