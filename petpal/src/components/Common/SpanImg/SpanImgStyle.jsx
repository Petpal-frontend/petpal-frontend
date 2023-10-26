import styled, { css } from 'styled-components';

export const spanImgStyle = css`
  background-size: cover;
  width: 24px;
  height: 24px;
  border: none;
  display: inline-block;
`;

export const UserImg = styled.span`
  background-image: url(${props => props.user.profile});
  border-radius: 50%;
  ${spanImgStyle}
`;

const redHeartUrl = 'images/redHeartImg.svg';
const whiteHeartUrl = 'images/whiteHeartImg.svg';
export const LikeImg = styled.span`
  background-image: url(${props =>
    props.like === true ? redHeartUrl : whiteHeartUrl});
  ${spanImgStyle}
`;

export const ChatImg = styled.span`
  background-image: url('images/chatImg.svg');
  ${spanImgStyle}
`;

export const PostUserImg = styled.span`
  background-image: url(${props => props.author.image});
  border-radius: 50%;
  ${spanImgStyle}
`;

