import React, { useEffect, useState } from 'react';
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
import { getWalkDetail } from '../../api/walk';

export default function WalkItem({
  id,
  author,
  comments,
  content,
  heartCount,
  image,
}) {
  const commentNum = comments.length;
  const [isHearted, setIsHearted] = useState(false);
  const imageArr = image ? image.split(',') : null;

  useEffect(() => {
    getWalkDetail(id).then(res => {
      setIsHearted(res.data.post.hearted);
    });
  }, [id]);
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
