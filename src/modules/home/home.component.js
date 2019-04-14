import React, { useState, useEffect } from 'react';
import { ROOT_API } from '../../constants';
import { ErrorBoundary } from '../../components/errorBoundary.component';
import Grid from '../../components/grid.component';

const useFetch = () => {
  const [posts, setPosts] = useState([]);

  const fetchDatas = async () => {
    const postsData = await fetch(`${ROOT_API}/posts`)
      .then(response => response.json())
      .then(data => data);
    setPosts(postsData);
  };

  useEffect(() => {
    fetchDatas();
  }, []);

  return {
    posts
  };
};

const Home = () => {
  const { posts } = useFetch();
  return (
    <ErrorBoundary>
      <Grid items={posts} />
    </ErrorBoundary>
  );
};

export default Home;
