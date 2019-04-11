import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.footer`
  display: flex;
  justify-content: space-between;
  text-align: center;
  padding: 38px 20px;
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  background-color: #fafafa;
`;

const NavFooter = styled.nav`
  ul li {
    display: inline-block;
    &:not(:last-child) {
      margin-right: 16px;
    }

    a,
    a:visited {
      color: #003569;
      text-decoration: none;
    }
  }
`;

const Copyright = styled.div`
  color: #999;
`;

export const Footer = () => (
  <Wrapper>
    <NavFooter>
      <ul>
        <li>
          <Link to="/about">About us</Link>
        </li>
        <li>
          <a href="https://twitter.com/florentbarriol">Twitter</a>
        </li>
      </ul>
    </NavFooter>
    <Copyright>&copy;2019 catstagram</Copyright>
  </Wrapper>
);
