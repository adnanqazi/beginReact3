import React from 'react';
import logo from './logo.svg';
import './App.css';
import Mouse from './components/mouse'
import Content from './components/content'
import FilteredText from './components/filtered_text'
import TopLevelContent from './components/load_website'
function App() {
  return (
  <div>
    <Mouse />
    <Content />
    <FilteredText />
    <TopLevelContent />
  </div>
  );
}

export default App;
