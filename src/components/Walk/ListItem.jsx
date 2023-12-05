import React, { useEffect, useState } from 'react';
import { ItemImage, LikeAndChat, ItemBox } from './PostListItemStyle';
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

const ItemBoxComponent = ({ imageArr, content }) => (
  <ItemBox>
    {imageArr ? (
      <ItemImage src={imageArr[0]} alt={content} />
    ) : (
      <ItemImage src={defaultImg} alt={content} />
    )}
  </ItemBox>
);

const ItemContentDivComponent = ({
  postType,
  content,
  author,
  isHearted,
  heartCount,
  commentNum,
}) => (
  <ItemContentDiv>
    <ItemContent>
      {postType === 'walk'
        ? content.split('petpal_walk_')
        : content.split('petpal_care_')}
    </ItemContent>
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
);

export default function ListItem({
  postType,
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
    <StyledLink
      to={
        postType === 'walk'
          ? `/walkDetail/${id}`
          : postType === 'care'
            ? `/careDetail/${id}`
            : '/404error'
      }
    >
      <ItemContainer>
        {postType === 'walk' ? (
          <ItemBoxComponent imageArr={imageArr} content={content} />
        ) : (
          <></>
        )}
        <ItemContentDivComponent
          postType={postType}
          content={content}
          author={author}
          isHearted={isHearted}
          heartCount={heartCount}
          commentNum={commentNum}
        />
        {postType === 'care' ? (
          <ItemBoxComponent imageArr={imageArr} content={content} />
        ) : (
          <></>
        )}
      </ItemContainer>
    </StyledLink>
  );
}
