import React, { lazy, Suspense } from 'react';

const Lazyproject = lazy(() => import('./project'));

const project = props => (
  <Suspense fallback={null}>
    <Lazyproject {...props} />
  </Suspense>
);

export default project;
