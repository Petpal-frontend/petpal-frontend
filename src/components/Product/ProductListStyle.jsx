import styled from 'styled-components';
// import plusIcon from '../../assets/image/icon-plus.svg';

export const StyledLayout = styled.div`
  min-height: 100vh;
  position: relative;
`;

export const MainWrap = styled.div`
  ul {
    padding: 76px 16px 76px;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 40px 18px;
  }
`;
export const ProductLi = styled.li`
  cursor: pointer;
  a {
    text-decoration: none;
  }

  .productImg {
    // width: 170px;
    // height: 114px;
    aspect-ratio: 170/114;
    margin-bottom: 18px;
  }

  .productImg img {
    width: 100%;
    height: 100%;
    border: 1px solid #d0d0d0;
    border-radius: 5px;
    object-fit: cover;
  }

  .productTitle,
  .productDesc,
  .productPrice {
    display: block;
  }

  .productTitle {
    margin-bottom: 11px;
    color: #1e1e1e;
    font-size: 15px;
    font-weight: 600;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .productDesc {
    line-height: 18px;
    margin-bottom: 13px;
    color: #535353;
    font-size: 12px;
    font-weight: 400;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .productPrice {
    color: #070707;
    font-size: 15px;
    font-weight: 600;
  }
  .productPrice span {
    font-weight: 800;
  }
`;
