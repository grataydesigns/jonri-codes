import React from 'react';
import styled from 'styled-components';
import { SPACING_STACK } from '../utils/constants';

const Heading1 = styled.h1`
  font-size: var(--font-size-heading-level-1);
  font-weight: var(--font-weight-normal);
  line-height: var(--font-line-height-headings);
  margin: ${(props) =>
    props.gutterBottom ? SPACING_STACK[props.gutterBottom] : 0};
`;

// define the styles for the rest of the headings, for example Heading2 - Heading6

export const H1 = ({ children, gutterBottom }) => {
  // const component = HEADING_TYPE_MAPPING[type]
  return <Heading1 gutterBottom={gutterBottom}>{children}</Heading1>;
};
