import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ScrollContainer = styled.div`
  //   padding: 0 15px;
  //   margin-bottom: 34px;
  //   display: grid;
  //   grid-template-columns: repeat(2, 1fr);
  //   gap: 14px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

// export const ScrollImageButton = styled(Link)`
//   cursor: pointer;
//   display: block;
//   aspect-ratio: 173/88;
//   background-size: cover;
//   background-repeat: no-repeat;
//   background-position: center;
//   background-image: ${({ backgroundimage }) => `url('${backgroundimage}')`};

//   img {
//     display: block;
//     margin: 0 auto;
//   }
// `;
export const ScrollImageButton = styled.div`
  /* 이미지에 대한 스타일링 */
  margin: 10px;
  width: 240px; /* 이미지의 너비를 조절하세요 */
  height: 200px; /* 이미지의 높이를 조절하세요 */

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
`;
