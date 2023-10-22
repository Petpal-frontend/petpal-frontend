import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  margin-top: 20px;
  margin-left: 20px;
  justify-content: space-between;
  gap: 0;
`;
export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 20px;
`;

export const LeftImageButton = styled(Link)`
  cursor: pointer;
  display: block;
  width: 230px;
  height: 248px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: ${({ backgroundImage }) => `url('${backgroundImage}')`};
`;
export const ImageButton = styled(Link)`
  margin-bottom: 13px;
  cursor: pointer;
  display: block;
  width: 230px;
  height: ${({ size }) => (size === 'large' ? '248px' : '117px')};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: ${({ backgroundImage }) => `url('${backgroundImage}')`};
`;
