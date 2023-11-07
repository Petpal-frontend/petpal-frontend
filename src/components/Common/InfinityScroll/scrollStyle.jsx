import styled from 'styled-components';

export const ScrollContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 0 15px;
`;

export const ScrollImageButton = styled.div`
  margin-bottom: 15px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &.homeImageStyle {
    width: 230px;
    height: 200px;
    img {
      border-radius: 5pt;
    }
  }
  &.feedImageStyle {
    width: 240px;
    height: 300px;
  }
`;
