import React from 'react';
import { LikeAndChat } from '../Walk/WalkItemStyle';
import {
  InfoGroup,
  InfoSpan,
  ItemContainer,
  ItemContent,
  ItemContentDiv,
} from '../Common/Layout/LayoutStyle';
import { UserImg, LikeImg, ChatImg } from '../Common/SpanImg/SpanImgStyle';
import { StyledLink } from '../Common/Text/StyledLink';
import { CareInfoDiv, CareItemImage } from './CareItemStyle';

export default function CareItem({
  index,
  image,
  content,
  author,
  hearted,
  heartedCount,
  commentCount,
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
        <ItemContentDiv>
          <ItemContent>{content}</ItemContent>
          <CareInfoDiv>
            <InfoGroup>
              <UserImg user={author} />
              <InfoSpan>{author.username}</InfoSpan>
            </InfoGroup>
            <LikeAndChat>
              <InfoGroup className="likeAndChat">
                <LikeImg like={hearted} />
                <InfoSpan>{heartedCount}</InfoSpan>
              </InfoGroup>
              <InfoGroup className="likeAndChat">
                <ChatImg />
                <InfoSpan>{commentCount}</InfoSpan>
              </InfoGroup>
            </LikeAndChat>
          </CareInfoDiv>
        </ItemContentDiv>
        <CareItemImage src={image} alt={content} />
      </ItemContainer>
    </StyledLink>
  );
}
