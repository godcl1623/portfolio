import React from 'react';
/** @jsxImportSource @emotion/react */
import { Global } from '@emotion/react';
import globalStyles from 'styles/globalStyles';
import Routing from 'routes';

const App = () => (
  <div className="App">
    <Global
      styles={globalStyles}
    />
    <React.Suspense fallback={<></>}>
      <Routing />
    </React.Suspense>
  </div>
);

export default App;