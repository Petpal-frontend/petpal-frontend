import styled, { css } from 'styled-components';
import redHeartUrl from '../../../assets/image/redHeartImg.svg';
import whiteHeartUrl from '../../../assets/image/whiteHeartImg.svg';
import chatUrl from '../../../assets/image/chatImg.svg';

export const spanImgStyle = css`
  background-size: cover;
  width: 24px;
  height: 24px;
  border: none;
  display: inline-block;
`;

export const UserImg = styled.span`
  background-image: url(${props => props.user.image});
  border-radius: 50%;
  ${spanImgStyle}
`;

export const LikeImg = styled.span`
  background-image: url(${props =>
    props.like === true ? redHeartUrl : whiteHeartUrl});
  ${spanImgStyle}
`;

export const ChatImg = styled.span`
  background-image: url(${chatUrl});
  ${spanImgStyle}
`;

export const PostUserImg = styled.span`
  background-image: url(${props => props.author.image});
  border-radius: 50%;
  ${spanImgStyle}
`;
