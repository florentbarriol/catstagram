import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.header`
  display: flex;
  margin-bottom: 44px;
`;

const ImgProfileWrapper = styled.div`
  flex: 1 0 0;
  margin-right: 30px;
`;

const ImgProfile = styled.img`
  display: block;
  width: 150px;
  height: 150px;
  margin: 0 auto;
  border-radius: 50%;
  object-fit: cover;
`;

const InfosProfile = styled.section`
  flex: 2 0 30px;
  & > *:not(:last-child) {
    margin: 0 0 20px;
  }
`;

const Username = styled.h1`
  font-size: 28px;
  line-height: 32px;
  color: #262626;
`;

const StatsProfile = styled.ul`
  display: flex;
  padding: 0;
  list-style: none;
`;

const Stat = styled.li`
  font-size: 16px;
  color: #003569;
  &:not(:last-child) {
    margin-right: 40px;
  }
`;

const StatNumber = styled.span`
  color: #262626;
  font-weight: 600;
`;

const BioWrapper = styled.div`
  font-size: 16px;
  line-height: 24px;
  word-wrap: break-word;
`;

const Header = ({
  user: { username, displayName, bio, avatar, followers, following, posts }
}) => (
  <Wrapper>
    <ImgProfileWrapper>
      <ImgProfile src={avatar} alt={displayName} width="150" height="150" />
    </ImgProfileWrapper>
    <InfosProfile>
      <Username>{username}</Username>
      <StatsProfile>
        <Stat>
          <StatNumber>{posts.length}</StatNumber> posts
        </Stat>
        <Stat>
          <StatNumber>{followers}</StatNumber> followers
        </Stat>
        <Stat>
          <StatNumber>{following}</StatNumber> following
        </Stat>
      </StatsProfile>
      <BioWrapper>
        <p>{displayName}</p>
        <p>{bio}</p>
      </BioWrapper>
    </InfosProfile>
  </Wrapper>
);

Header.defaultProps = {
  user: {
    username: 'cartapuce',
    displayName: 'Cartapuce the cat',
    bio: 'This is my awesome biography ! '
  }
};

export default Header;
