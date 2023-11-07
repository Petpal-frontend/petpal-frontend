import styled from 'styled-components';

export const StyledLayout = styled.div`
  width: inherit;
  min-height: 100vh;
`;

export const MainWrap = styled.div`
  ul {
    padding: 102px 15px 60px;
  }
`;
export const ProductLi = styled.li`
  margin-bottom: 20px;
  color: #767676;

  a {
    display: flex;
    gap: 11px;
  }

  .profileImg {
    display: block;
    width: 50px;
    height: 50px;
    overflow: hidden;
    flex-shrink: 0;
    position: relative;
  }

  .profileImg img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 25px;
  }

  .text {
    width: calc(100% - 123px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    font-weight: 500;
  }

  .text strong {
    display: block;
    color: #1e1e1e;
    font-size: 14px;
    font-weight: 600;
  }

  .text .chat {
    display: block;
    font-size: 0.75rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .date {
    align-self: center;
    font-size: 0.625rem;
  }
`;
