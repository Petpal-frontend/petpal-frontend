import { React, useState } from 'react';
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
    <>
      {/* <StyledLink to="/"> */}
      <FollowItemContainer>
        <ContentDiv>
          <FollowItemImage src={imgSrc} />
          <FollowItemUser>{user}</FollowItemUser>
        </ContentDiv>
        {/* <FollowItemButton src={follow} /> */}
        <FollowItemButton followButton={follow} />
      </FollowItemContainer>
      {/* </StyledLink> */}
    </>
  );
}
