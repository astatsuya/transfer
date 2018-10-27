import React from 'react';
import Form from './components/Form';
import DataBase from './components/Database';
// import Search from './components/Search';
import './App.css';

const App = () => (
  <div className="main-page">
    <h1>Transfer</h1>
    <Form />
    <DataBase />
  </div>
);

export default App;
