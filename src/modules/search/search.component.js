import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { ROOT_API } from '../../constants';
import { Loading } from '../../components/loading.component';

const Results = styled.ul`
  background: #fff;
`;

const Result = styled.li`
  height: 28px;
  padding: 7px;
  border: solid 1px #dbdbdb;
`;

const NavLinkStyled = styled(NavLink)`
  color: #999;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    text-decoration: none;
  }
`;

const useFetch = query => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchDatas = async () => {
    if (query) {
      setLoading(true);
      const usersData = await fetch(`${ROOT_API}/users?username_like=${query}`)
        .then(response => response.json())
        .then(data => data);

      setUsers(usersData);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDatas();
  }, [query]);

  return {
    users,
    loading
  };
};

const Search = ({ query, className }) => {
  const { users, loading } = useFetch(query);

  if (loading) return <Loading />;

  return (
    <Results className={className}>
      {users.map(({ username }) => (
        <Result>
          <NavLinkStyled to={`/${username}`}>{username}</NavLinkStyled>
        </Result>
      ))}
    </Results>
  );
};

export default Search;
