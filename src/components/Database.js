import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { mapStateToProps, mapDispatchToProps } from './MapToProps';

const ConnectedDataBase = ({
  columns,
  sortedInfo,
  sortTable,
}) => (
  <table className="database">
    <tbody>
      <tr key="ascStr" style={{ border: 'none' }}>
        {columns.map(state => (
          <td key={`asc${state}`} style={{ border: 'none' }}>
            <button type="button" style={{ width: 40 }} onClick={() => sortTable(state, 'asc')}>
            ↓
            </button>
            <br />
            <button type="button" style={{ width: 40 }} onClick={() => sortTable(state, 'desc')}>
            ↑
            </button>
          </td>
        ))}
      </tr>
      <tr key="columnStr">
        {columns.map(state => (
          <th key={`columnsth${state}`}>{state}</th>
        ))}
      </tr>
      {sortedInfo.map(state => (
        <tr key={`tr${state.id}`}>
          <td key={`id${state.id}`}>{state.id + 1}</td>
          <td key={`name${state.id}`}>{state.name}</td>
          <td key={`age${state.id}`}>{state.age}</td>
          <td key={`gender${state.id}`}>{state.gender}</td>
          <td key={`department${state.id}`}>{state.department}</td>
          <td key={`position${state.id}`}>{state.position}</td>
          <td key={`arrival${state.id}`}>{state.arrival}</td>
          <td key={`leave${state.id}`}>{state.leave}</td>
          <td key={`location${state.id}`}>{state.location}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

ConnectedDataBase.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.string).isRequired,
  sortedInfo: PropTypes.arrayOf(PropTypes.object).isRequired,
  sortTable: PropTypes.func.isRequired,
};

const DataBase = connect(mapStateToProps, mapDispatchToProps)(ConnectedDataBase);

export default DataBase;
