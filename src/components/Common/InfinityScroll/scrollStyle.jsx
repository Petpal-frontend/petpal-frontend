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

export const BlankWrapper = styled.div`
  margin: 0 auto;
  position: relative;
  text-align: center;
  margin-top: 30%;
`;

export const BlankImg = styled.img`
  position: absolute;
  width: 50px;
  height: 50px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const BalnkTextBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50%;
  gap: 10px;
`;
export const BlankH1 = styled.h1`
  font-weight: 600;
  font-size: var(--font-size-md);
`;

export const BlankP = styled.p`
  font-size: var(--font-size-sm);
  color: var(--color-gray-med);
`;

export const BlankButton = styled.button`
  background: none;
  border: none;
  border-radius: 10px;
  padding: 15px;
  color: var(--color-white);
  background-color: var(--color-button-bg);
`;
