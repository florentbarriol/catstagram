import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ROOT_API } from '../../constants';
import { Loading } from '../../components/loading.component';

const Wrapper = styled.div`
  position: fixed;
  max-width: 80vw;
  height: 80vh;
`;

const useFetch = (id = 1) => {
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(false);

  const fetchDatas = async () => {
    setLoading(true);

    const postData = await fetch(`${ROOT_API}/posts?id=${id}`)
      .then(response => response.json())
      .then(data => data);

    setPost(postData[0]);
    setLoading(false);
  };

  useEffect(() => {
    fetchDatas();
  }, [id]);

  return { post, loading };
};

const Preview = ({ match }) => {
  const { imageId } = (match || {}).params;
  const { post, loading } = useFetch(imageId);

  return (
    <Wrapper>
      {loading && !post ? (
        <Loading />
      ) : (
        <img src={post.image} alt={post.description} />
      )}
    </Wrapper>
  );
};

export default Preview;
