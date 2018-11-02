import React from 'react';
import Form from './components/Form';
import DataBase from './components/Database';
import SearchForm from './components/Searchform';
import PageContents from './components/PageContents';
import Topbar from './components/Topbar';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'

const App = () => (
  <BrowserRouter>
    <div className="main-page">
      <Topbar />

      <Route path={process.env.PUBLIC_URL + '/'} exact component={PageContents} />
      <Route path="/form" component={Form} />
      <Route path="/search" component={SearchForm} />
      <Route path="/database" component={DataBase} />
    </div>
  </BrowserRouter>
);

export default App;
