import React, { useState } from 'react';
import { WalkItemImage, LikeAndChat } from './WalkItemStyle';
import {
  InfoDiv,
  InfoGroup,
  InfoSpan,
  ItemContainer,
  ItemContent,
  ItemContentDiv,
} from '../Common/Layout/LayoutStyle';
import { UserImg, LikeImg, ChatImg } from '../Common/SpanImg/SpanImgStyle';
import { StyledLink } from '../Common/Text/StyledLink';
import defaultImg from '../../assets/image/profile.png';

export default function WalkItem({
  id,
  author,
  comments,
  content,
  heartCount,
  image,
}) {
  const commentNum = comments.length;
  const isHearted = heartCount > 0;
  const imageArr = image ? image.split(',') : null;

  return (
    <StyledLink to={`/walkDetail/${id}`}>
      <ItemContainer>
        {imageArr ? (
          <WalkItemImage src={imageArr[0]} alt={content} />
        ) : (
          <WalkItemImage src={defaultImg} alt={content} />
        )}
        <ItemContentDiv>
          <ItemContent>{content.split('petpal_walk_')}</ItemContent>
          {/* 컴포넌트로 분리 예정 -> 산책, 돌보미 재사용 */}
          <InfoDiv>
            <InfoGroup>
              <UserImg user={author} />
              <InfoSpan>{author.username}</InfoSpan>
            </InfoGroup>
            <LikeAndChat>
              <InfoGroup className="likeAndChat">
                <LikeImg like={isHearted} />
                <InfoSpan>{heartCount}</InfoSpan>
              </InfoGroup>
              <InfoGroup className="likeAndChat">
                <ChatImg />
                <InfoSpan>{commentNum}</InfoSpan>
              </InfoGroup>
            </LikeAndChat>
          </InfoDiv>
        </ItemContentDiv>
      </ItemContainer>
    </StyledLink>
  );
}
