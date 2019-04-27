import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Header from './components/header.component';
import Grid from '../../components/grid.component';
import Filter from './components/filter.component';

import { ROOT_API } from '../../constants';
import { Loading } from '../../components/loading.component';
import { ErrorBoundary } from '../../components/errorBoundary.component';
//import { ExceptionExample } from './components/exceptionExample.component';

const Info = styled.div`
  display: flex;
  align-items: center;
`;

const useFetch = username => {
  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchDatas = async () => {
    setLoading(true);
    const userData = await fetch(`${ROOT_API}/users?username=${username}`)
      .then(response => response.json())
      .then(data => data);

    const userLocal = userData[0];
    setUser(userLocal);

    const postsData = await fetch(`${ROOT_API}/posts?userId=${userLocal.id}`)
      .then(response => response.json())
      .then(data => data);

    setPosts(postsData);
    setLoading(false);
  };

  useEffect(() => {
    fetchDatas();
  }, [username]);

  return {
    user,
    posts,
    loading
  };
};

const Profile = ({ match }) => {
  const { username } = (match || {}).params;
  const { user, posts, loading } = useFetch(username);

  if (loading) return <Loading />;

  return (
    <ErrorBoundary>
      <Header user={{ ...user, posts }} />
      {posts.length > 0 && <Grid items={posts} />}
      {!posts.length && <Info>No Posts</Info>}
      {/*<ExceptionExample />*/}
    </ErrorBoundary>
  );
};

export default Profile;
