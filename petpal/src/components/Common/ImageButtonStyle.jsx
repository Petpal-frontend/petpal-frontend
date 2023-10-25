import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  padding: 0 15px;
  margin-bottom: 34px;
  // margin-top: 20px;
  // margin-left: 20px;
  // display: flex;
  // justify-content: space-between;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 14px;
`;
export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const LeftImageButton = styled(Link)`
  cursor: pointer;
  display: block;
  // width: 230px;
  // height: 248px;
  aspect-ratio: 173/186;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: ${({ backgroundImage }) => `url('${backgroundImage}')`};
`;
export const ImageButton = styled(Link)`
  cursor: pointer;
  display: block;
  // width: 230px;
  // height: ${({ size }) => (size === 'large' ? '248px' : '117px')};
  aspect-ratio: 173/88;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: ${({ backgroundImage }) => `url('${backgroundImage}')`};
`;
