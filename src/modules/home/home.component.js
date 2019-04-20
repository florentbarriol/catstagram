import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ROOT_API } from '../../constants';
import { ErrorBoundary } from '../../components/errorBoundary.component';
import { Footer } from '../../components/footer.component';

const Wrapper = styled.div`
  display: flex;
`;
const Aside = styled.aside`
  max-width: 293px;
  flex: 0 0 auto;
`;

const Post = styled.article`
  margin: 0 0 1.5rem;
`;
const Img = styled.img``;

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
    <Wrapper>
      <main>
        {posts.map(post => (
          <ErrorBoundary>
            <Post>
              <Img src={post.image} />
            </Post>
          </ErrorBoundary>
        ))}
      </main>
      <Aside>
        <Footer />
      </Aside>
    </Wrapper>
  );
};

export default Home;
