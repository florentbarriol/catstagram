import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import logo from '../assets/logo.png';
import { APP_NAME } from '../constants';
import Search from '../modules/search/search.component';

export const HEADER_HEIGHT = 77;

const Wrapper = styled.header`
  position: fixed;
  top: 0;
  height: ${HEADER_HEIGHT}px;
  width: 100%;
  background-color: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.0975);
`;

const InnerWrapper = styled.div`
  display: flex;
  max-width: 1010px;
  margin: 0 auto;
  padding: 26px 20px;
`;

const LogoWrapperLink = styled(NavLink)`
  display: flex;
  align-items: center;
  flex: 1 0 auto;
  text-decoration: none;
  color: #262626;
`;

const LogoDivider = styled.div`
  background-color: #262626;
  height: 28px;
  margin: 0 16px;
  width: 1px;
`;

const LogoTitle = styled.h1`
  font-family: 'Oleo Script', cursive;
  font-size: 28px;
  margin: 0;
`;

const NavWrapper = styled.nav`
  display: flex;
  flex: 1 0 auto;
  justify-content: flex-end;
`;

const SearchWrapper = styled.div`
  position: relative;
  flex: 0 1 auto;
  width: 215px;
  height: 28px;
`;

const SearchInput = styled.input`
  height: 100%;
  width: 100%;
  background: #fafafa;
  border: solid 1px #dbdbdb;
  border-radius: 3px;
  color: #999;
  cursor: text;
  font-size: 14px;
  font-weight: 300;
  padding: 7px;
  text-align: center;
`;

const SearchResults = styled(Search)`
  position: absolute;
  top: 28px;
  left: 0;
  right: 0;
`;

export const Header = () => {
  const [query, setQuery] = useState('');

  const handlerInput = event => setQuery(event.target.value);

  return (
    <Wrapper>
      <InnerWrapper>
        <LogoWrapperLink to="/">
          <img src={logo} alt={APP_NAME} width="24" height="24" />
          <LogoDivider />
          <LogoTitle>{APP_NAME}</LogoTitle>
        </LogoWrapperLink>
        <SearchWrapper>
          <SearchInput
            type="search"
            placeholder="Search"
            onChange={handlerInput}
          />
          <SearchResults query={query} />
        </SearchWrapper>
        <NavWrapper>
          <NavLink to="/cartapuce">profil de machin</NavLink>
        </NavWrapper>
      </InnerWrapper>
    </Wrapper>
  );
};
