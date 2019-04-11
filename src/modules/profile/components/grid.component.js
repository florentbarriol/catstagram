import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 1fr;
  grid-gap: 28px;

  &::before {
    content: '';
    width: 0;
    padding-bottom: 100%;
    grid-row: 1 / 1;
    grid-column: 1 / 1;
  }

  & > *:first-child {
    grid-row: 1 / 1;
    grid-column: 1 / 1;
  }
`;

const Item = styled.div`
  background-color: #efefef;
`;

const ImageItem = styled.img`
  width: 100%;
  object-fit: cover;
  max-height: 100%;
  height: 100%;
`;

const Grid = ({ items }) => (
  <Wrapper>
    {items.map(item => (
      <Item key={item.id}>
        <ImageItem src={item.image} alt="" />
      </Item>
    ))}
  </Wrapper>
);

Grid.defaultProps = {
  items: [1, 2, 3, 4, 5]
};

export default Grid;
