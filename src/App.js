import React from 'react';

import Routes from './components/Routes/Routes.jsx';
import StoreProvider from './providers/Store.jsx';


function App() {
  return (
    <StoreProvider> 
      <Routes/>
    </StoreProvider>
  );
}

export default App;
