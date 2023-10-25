import React from 'react';
import {
  FollowItemContainer,
  FollowItemImage,
  ContentDiv,
  FollowItemUser,
  FollowItemButton,
} from './FollowItemStyle';
import { StyledLink } from '../Common/Text/StyledLink';

export default function FollowItem({ imgSrc, user, follow }) {
  return (
    <StyledLink to="/">
      <FollowItemContainer>
        <FollowItemImage src={imgSrc} />
        <ContentDiv>
          <FollowItemUser>{user}</FollowItemUser>
          <FollowItemButton src={follow} />
        </ContentDiv>
      </FollowItemContainer>
    </StyledLink>
  );
}
