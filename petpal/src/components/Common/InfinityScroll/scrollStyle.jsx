import styled from 'styled-components';

export const ScrollContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const ScrollImageButton = styled.div`
  margin-bottom: 8px;

  img {
    width: 100%;
    height: 100%;
    // object-fit: cover;
  }
  &.homeImageStyle {
    width: 240px;
    height: 200px;
    img {
      border-radius: 10px;
    }
  }
  &.feedImageStyle {
    width: 250px;
    height: 300px;
  }
`;
