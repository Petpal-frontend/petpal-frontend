import React from 'react';
import {
  ItemContainer,
  ContentDiv,
  WalkItemContent,
  InfoSpan,
  InfoGroup,
  LikeAndChat,
} from '../Walk/WalkItemStyle';
import { UserImg, LikeImg, ChatImg } from '../Common/SpanImg/SpanImgStyle';
import { StyledLink } from '../Common/Text/StyledLink';
import { CareInfoDiv, CareItemImage } from './CareItemStyle';

export default function CareItem({
  index,
  imgSrc,
  content,
  user,
  like,
  likeNum,
  chatNum,
}) {
  const DetailPath = {
    pathname: '/walkDetail/:' + index,
    state: { index: index },
  };

  console.log(DetailPath.state);

  return (
    // <StyledLink to={DetailPath}>
    <StyledLink to={'/careDetail'}>
      <ItemContainer>
        <ContentDiv>
          <WalkItemContent>{content}</WalkItemContent>
          <CareInfoDiv>
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
          </CareInfoDiv>
        </ContentDiv>
        <CareItemImage src={imgSrc} alt={content} />
      </ItemContainer>
    </StyledLink>
  );
}
