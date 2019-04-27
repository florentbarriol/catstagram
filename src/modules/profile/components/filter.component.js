import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  color: #999;
  border-top: 1px solid #efefef;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 1px;
`;

const FilterLink = styled(NavLink)`
  display: inline-flex;
  align-items: center;
  color: #999;
  height: 52px;
  text-transform: uppercase;
  text-decoration: none;
  &:not(:last-child) {
    margin-right: 60px;
  }

  &.active {
    color: #262626;
    border-top: 1px solid #262626;
    margin-top: -1px;
  }
`;

const Filter = ({ tab, username = '' }) => (
  <Wrapper>
    <FilterLink to={`/${username}`} exact>
      Posts
    </FilterLink>
    <FilterLink to={`/${username}/saved`} active={tab === 'saved'}>
      Saved
    </FilterLink>
    <FilterLink to={`/${username}/tagged`} active={tab === 'tagged'}>
      Tagged
    </FilterLink>
  </Wrapper>
);

Filter.propTypes = {
  username: PropTypes.string,
  tab: PropTypes.string
};

export default Filter;
