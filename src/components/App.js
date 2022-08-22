import React, { Suspense } from 'react';
/** @jsxImportSource @emotion/react */
import { Global } from '@emotion/react';
import globalStyles from 'styles/globalStyles';
import Routing from 'routes';

const App = () => (
  <div className="App">
    <Global
      styles={globalStyles}
    />
    <Suspense fallback={<></>}>
      <Routing />
    </Suspense>
  </div>
);

export default App;