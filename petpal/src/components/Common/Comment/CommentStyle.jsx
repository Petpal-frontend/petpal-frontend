import styled from 'styled-components';

export const CommentContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 15px 0;
`;

export const CommentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px 15px 100px 15px;
  overflow-y: auto;
  max-height: 500px;
`;

export const CommentContent = styled.div`
  flex: 1;
`;

export const CommentText = styled.p`
  margin-top: 8px;
  font-size: var(--font-size-md);
  color: var(--color-gray-dark);
  font-weight: 400;
`;

export const CommentTime = styled.span`
  margin-left: 5px;
  font-size: var(--font-size-sm);
  color: var(--color-gray-med);
`;

export const MoreButton = styled.button`
  cursor: pointer;
  border: none;
  background: transparent;
`;

export const ButtonImg = styled.img`
  width: 20px;
  height: 20px;
`;
