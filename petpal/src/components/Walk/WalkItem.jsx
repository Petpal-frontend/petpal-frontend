import React from 'react';
import {
  ItemContainer,
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
    pathname: '/walkDetail/:' + index,
    state: { index: index },
  };

  console.log(DetailPath.state);

  return (
    // <StyledLink to={DetailPath}>
    <StyledLink to={'/walkDetail'}>
      <ItemContainer>
        <WalkItemImage src={imgSrc} alt={content} />
        <ContentDiv>
          <WalkItemContent>{content}</WalkItemContent>
          {/* 컴포넌트로 분리 예정 -> 산책, 돌보미 재사용 */}
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
      </ItemContainer>
    </StyledLink>
  );
}
