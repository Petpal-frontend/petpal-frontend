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
  index,
  id,
  image,
  content,
  author,
  hearted,
  heartedCount,
  commentCount,
}) {
  const [heartedNum, setHeartedNum] = useState(0);
  const [commentNum, setCommentNum] = useState(0);

  if (heartedCount) setHeartedNum(heartedCount);
  if (commentCount) setCommentNum(commentCount);

  return (
    // <StyledLink to={DetailPath}>
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
                <LikeImg like={hearted} />
                <InfoSpan>{heartedNum}</InfoSpan>
              </InfoGroup>
              <InfoGroup className="likeAndChat">
                <ChatImg />
                <InfoSpan>{commentNum}</InfoSpan>
              </InfoGroup>
            </LikeAndChat>
          </CareInfoDiv>
        </ItemContentDiv>
        {image ? (
          <CareItemImage src={image} alt="img" />
        ) : (
          <CareItemImage src={defaultImg} alt="img" />
        )}
      </ItemContainer>
    </StyledLink>
  );
}
