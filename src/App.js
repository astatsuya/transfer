import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Form from './components/Form';
import DataBase from './components/Database';
import SearchForm from './components/Searchform';
import PageContents from './components/PageContents';
import Topbar from './components/Topbar';
import './App.css';


const App = () => (
  <BrowserRouter>
    <div className="main-page">
      <Topbar />

      <Route path={`${process.env.PUBLIC_URL}/`} exact component={PageContents} />
      <Route path="transfer/form" component={Form} />
      <Route path="transfer/search" component={SearchForm} />
      <Route path="transfer/dataBase" component={DataBase} />
    </div>
  </BrowserRouter>
);

export default App;
