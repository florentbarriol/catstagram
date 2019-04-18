import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: fixed;
  max-width: 80vw;
  height: 80vh;
`;

export const Preview = ({ match }) => {
  const [item, setItem] = useState({});
  return (
    <Wrapper>
      <img src={item.image} alt="" />
    </Wrapper>
  );
};
