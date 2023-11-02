import React, { useState } from 'react';
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
import defaultImg from '../../assets/image/profile.png';

export default function CareItem({
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
    <StyledLink to={`/careDetail/${id}`}>
      <ItemContainer>
        <ItemContentDiv>
          <ItemContent>{content.split('petpal_care_')}</ItemContent>
          <CareInfoDiv>
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
          </CareInfoDiv>
        </ItemContentDiv>
        {imageArr ? (
          <CareItemImage src={imageArr[0]} alt="img" />
        ) : (
          <CareItemImage src={defaultImg} alt="img" />
        )}
      </ItemContainer>
    </StyledLink>
  );
}
