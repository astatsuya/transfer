import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    info: state.info,
  };
};

const ConnectedSearch = ({ info }) => (
  <ul>
  {info.map(stateInfo => (
    <li>{stateInfo.name}</li>
  ))}
  </ul>
);

const Search = connect(mapStateToProps)(ConnectedSearch);

export default Search;
