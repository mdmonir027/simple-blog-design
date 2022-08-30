import React from 'react';
import './App.css';
import Blogs from './components/Blogs/Blogs';
import Content from './components/Blogs/Content';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
const App = () => {
  return (
    <div>
      <Header />
      <Search />
      <Content />
      <Blogs />
    </div>
  );
};

export default App;
