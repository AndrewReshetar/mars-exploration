import React from 'react';
import { Route } from 'react-router-dom';
import GlobalStyle from './components/GlobalStyle';
import Header from './components/Header';
import Home from './pages/Home';
import Photos from './pages/Photos';

function App() {
  return (
    <div className="app">
      <GlobalStyle />
      <Header />
      <Route path='/' component={Home} exact />
      <Route path='/photos' component={Photos} />
    </div>
  );
}

export default App;
