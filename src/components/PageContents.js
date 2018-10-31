import React from 'react';
import Form from './Form';
import DataBase from './Database';
import Search from './Search';
import SearchForm from './Searchform';


const Sidebar = () => (
  <div className="main-page">
    <Form />
    <br />
    <br />
    <SearchForm />
    <br />
  </div>
);

export default Sidebar;
