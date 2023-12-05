import React, { useEffect, useState } from 'react';
import { LikeAndChat } from '../Walk/PostListItemStyle';
import {
  InfoGroup,
  InfoSpan,
  ItemContainer,
  ItemContent,
  ItemContentDiv,
} from '../Common/Layout/LayoutStyle';
import { UserImg, LikeImg, ChatImg } from '../Common/SpanImg/SpanImgStyle';
import { StyledLink } from '../Common/Text/StyledLink';
import { CareInfoDiv, CareItemBox, CareItemImage } from './CareItemStyle';
import defaultImg from '../../assets/image/profile.png';
import { getCareDetail } from '../../api/care';

export default function CareItem({
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
    getCareDetail(id).then(res => {
      setIsHearted(res.data.post.hearted);
    });
  }, [id]);

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
        <CareItemBox>
          {imageArr ? (
            <CareItemImage src={imageArr[0]} alt="img" />
          ) : (
            <CareItemImage src={defaultImg} alt="img" />
          )}
        </CareItemBox>
      </ItemContainer>
    </StyledLink>
  );
}
