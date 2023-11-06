import styled from 'styled-components';

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
