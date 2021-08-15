import React from 'react';
import MDXProvider from '../components/MDXProvider/MDXProvider';

function wrapRootElement({ element }) {
  return <MDXProvider element={element} />;
}

export default wrapRootElement;
