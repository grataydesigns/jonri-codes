import React from 'react';
import { MDXProvider as Provider } from '@mdx-js/react';

import defaultComponents from './defaultComponents';

function MDXProvider({ components = defaultComponents, element }) {
  return <Provider components={components}>{element}</Provider>;
}

export default MDXProvider;
