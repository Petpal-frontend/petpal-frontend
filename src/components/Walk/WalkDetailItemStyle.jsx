import styled from 'styled-components';

export const PostTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
  width: 520px;
`;

export const UserInfoBox = styled.div`
  display: flex;
  align-items: center;
`;

export const PostBottom = styled.div`
  margin: 20px;
  div {
    margin-bottom: 7px;
  }
`;

export const PostImage = styled.img`
  margin: 10px 0;
  max-width: 100%;
`;

export const PostContent = styled.p`
  margin: 20px;
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

export const NameAndTimeBox = styled.div`
  display: flex;
  gap: 5px;
  flex-direction: column;
  justify-content: center;
`;

export const PostTime = styled.span`
  font-size: var(--font-size-sm);
  color: var(--color-gray-med);
`;
