import React from 'react';
import {
  WalkItemContainer,
  WalkItemImage,
  ContentDiv,
  WalkItemContent,
  InfoSpan,
  InfoDiv,
  InfoGroup,
  LikeAndChat,
} from './WalkItemStyle';
import { UserImg, LikeImg, ChatImg } from '../Common/SpanImg/SpanImgStyle';
import { StyledLink } from '../Common/Text/StyledLink';

export default function WalkItem({
  index,
  imgSrc,
  content,
  user,
  like,
  likeNum,
  chatNum,
}) {
  const DetailPath = {
    pathname: '/walkDetail/:'+ index,
    state: { index: index },
  };

  console.log(DetailPath.state);

  return (
    <StyledLink to={DetailPath}>
      <WalkItemContainer>
        <WalkItemImage src={imgSrc} alt={content} />
        <ContentDiv>
          <WalkItemContent>{content}</WalkItemContent>
          <InfoDiv>
            <InfoGroup>
              <UserImg user={user} />
              <InfoSpan>{user.name}</InfoSpan>
            </InfoGroup>
            <LikeAndChat>
              <InfoGroup className="likeAndChat">
                <LikeImg like={like} />
                <InfoSpan>{likeNum}</InfoSpan>
              </InfoGroup>
              <InfoGroup className="likeAndChat">
                <ChatImg />
                <InfoSpan>{chatNum}</InfoSpan>
              </InfoGroup>
            </LikeAndChat>
          </InfoDiv>
        </ContentDiv>
      </WalkItemContainer>
    </StyledLink>
  );
}
