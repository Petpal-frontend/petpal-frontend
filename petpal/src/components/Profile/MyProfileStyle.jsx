import styled from 'styled-components';

export const ProfileContainer = styled.div`
  max-width: 520px;
  margin: 0 auto;
  padding: 15px 0;
  display: flex;
  align-items: center;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 9px;
  margin: 12px 0;
`;

export const UserProfileImage = styled.img`
  width: 112px;
  height: 112px;
  border-radius: 50%;
  margin: 0 17px;
`;

export const Username = styled.h2`
  font-size: var(--font-size-md);
  font-weight: 700;
`;

export const FollowSpan = styled.p`
  color: #aaa;
  font-size: 10px;
  font-weight: 500;
`;
export const FollowNum = styled.p`
  color: #1e1e1e;
  font-size: var(--font-size-md);
  font-weight: 700;
  text-align: center;
`;

export const FollowDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const H3 = styled.h3`
  color: #000;
  font-size: var(--font-size-md);
  font-weight: 700;
  text-align: left;
`;

export const ListContainer = styled.div`
  margin: 15px 17px;
`;

export const ProductItemContainer = styled.div`
  background: #f8f8f8;
  padding: 17px 0;
  margin: 15px 0;
  display: flex;
`;

export const PostItemContainer = styled.div`
  background: #f8f8f8;
  padding: 17px 0;
  margin: 15px 0;
`;

export const ItemDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 156px;
  height: 156px;
  margin: 0 8px;
  border-radius: 10px;
  background-color: #ffffff;
  overflow: hidden;
`;

export const TextSection = styled.div`
  margin: 8px 15px;
`;

export const Title = styled.span`
  font-size: 12px;
  font-weight: 500;
  line-height: 156.836%;
`;

export const Description = styled.p`
  font-size: 10px;
  font-weight: 700;
  line-height: 156.836%;
`;

export const Image = styled.img`
  width: 110px;
  height: 110px;
  margin: 5px;
  border-radius: 10px;
`;