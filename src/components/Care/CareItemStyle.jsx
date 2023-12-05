import styled from 'styled-components';

export const CareInfoDiv = styled.div`
  display: flex;
  justify-content: space-between;
  // width: 90%;
  width: 100%;
  margin: 10px;
`;

export const CareItemBox = styled.p`
  width: 90px;
  height: 90px;
  border-radius: 10px;
  overflow: hidden;
  flex-shrink: 0;
`;

export const CareItemImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
