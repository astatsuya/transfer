import React from 'react';
import { connect } from 'react-redux';


const mapStateToProps = state => {
  return {
    info: state.info,
  };
};

const ConnectedSearch = ({ info }) => (
  <table>
    <tr>
      <th>name</th>
      <th>age</th>
      </tr>
    <tr>
      <td>{info[0].name}</td>
      <td>{info[0].age}</td>
    </tr>
  </table>
);

const Search = connect(mapStateToProps)(ConnectedSearch);

export default Search;
