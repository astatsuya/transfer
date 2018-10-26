import React from 'react';
import { connect } from 'react-redux';


const mapStateToProps = state => {
  return {
    columns: state.columns,
    info: state.info,
  };
};

const ConnectedSearch = ({ columns, info }) => (
  <table>
    <tr>
      {columns.map(state => (
        <th>{state}</th>
      ))}
    </tr>
    {info.map((state, index) => {
      return (
        <tr>
          <td>{state.name}</td>
          <td>{state.age}</td>
          <td>{state.gender}</td>
          <td>{state.department}</td>
          <td>{state.position}</td>
          <td>{state.arrival}</td>
          <td>{state.leave}</td>
          <td>{state.location}</td>
        </tr>
      );
    })}
  </table>
);

const Search = connect(mapStateToProps)(ConnectedSearch);

export default Search;
