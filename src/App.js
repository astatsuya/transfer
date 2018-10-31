import React from 'react';
import Form from './components/Form';
import DataBase from './components/Database';
import Search from './components/Search';
import SearchForm from './components/Searchform';
import PageContents from './components/PageContents';
import Topbar from './components/Topbar';
import './App.css';

const App = () => (
  <div className="main-page">
    <Topbar />
    <PageContents />
  </div>
);

export default App;
