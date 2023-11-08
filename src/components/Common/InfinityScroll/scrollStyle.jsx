import styled from 'styled-components';

export const ScrollContainer = styled.div`
  padding-top: 20px;
  display: flex;
  flex-wrap: wrap;
  // justify-content: space-around;
  justify-content: space-between;
  padding: 0 15px;
  gap: 10px;

  &.feedImageStyle {
    padding-bottom: 20px !important;
  }
`;

export const ScrollImageButton = styled.div`
  // margin-bottom: 15px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &.homeImageStyle {
    // width: 230px;
    width: calc(50% - 5px);
    height: 200px;

    img {
      border-radius: 5pt;
    }
  }
  &.feedImageStyle {
    // width: 240px;
    width: calc(50% - 5px);
    height: 300px;

    @media all and (min-width: 320px) and (max-width: 520px) {
      height: 200px;
    }
  }
`;
