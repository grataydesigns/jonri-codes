import React from 'react';
import styled from 'styled-components';
import { BODY_TEXT_TYPE, SPACING_STACK } from '../utils/constants';

const Paragraph = styled.p`
  font-size: ${(props) => (props.type ? BODY_TEXT_TYPE[props.type] : null)};
  line-height: var(--font-line-height-normal);
  margin: ${(props) =>
    props.gutterBottom ? SPACING_STACK[props.gutterBottom] : 0};
`;

export const BodyText = ({ children, type, gutterBottom }) => {
  return (
    <Paragraph type={type} gutterBottom={gutterBottom}>
      {children}
    </Paragraph>
  );
};
