import React from 'react';
import styled from 'styled-components';

export const ContainerWrapper = styled.div`
  margin: 0 auto;
  max-width: 1140px;
  padding: 0 1rem;
`;

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 30px;
`;

export const GalleryGridWrapper = styled.div`
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(auto-fit, minmax(255px, 1fr));
`;

export const Container = ({ children }) => (
  <ContainerWrapper>{children}</ContainerWrapper>
);

export const Grid = ({ children }) => <GridWrapper>{children}</GridWrapper>;

export const GalleryGrid = ({ children }) => (
  <GalleryGridWrapper>{children}</GalleryGridWrapper>
);
