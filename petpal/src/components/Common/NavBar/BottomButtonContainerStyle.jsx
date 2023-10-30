import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const BottomButtonContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 30px;
  .pathbtn {
    margin-bottom: 10px;
    width: 322px;
    height: 20px;
    padding-top: 25px;
  }
`;
export const StyledLink = styled(Link)`
  button {
    cursor: pointer;
    text-align: center;
    padding: 20px;
  }
`;
