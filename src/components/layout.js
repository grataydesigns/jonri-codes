import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import favicon16 from '../../images/favicon-16x16.png';
import favicon32 from '../../images/favicon-32x32.png';
import Header from '../components/header';
import Footer from '../components/footer';

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

export const Layout = ({ children }) => (
  <>
    <Helmet>
      <link rel="icon" type="image/png" sizes="32x32" href={favicon32} />
      <link rel="icon" type="image/png" sizes="16x16" href={favicon16} />
    </Helmet>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

export const Container = ({ children }) => (
  <ContainerWrapper>{children}</ContainerWrapper>
);

export const Grid = ({ children }) => <GridWrapper>{children}</GridWrapper>;

export const GalleryGrid = ({ children }) => (
  <GalleryGridWrapper>{children}</GalleryGridWrapper>
);
