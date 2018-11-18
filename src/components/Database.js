import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { sortTable } from '../redux/actions/action';

const sortTableState = (state, sortTable) => {
  switch (sortTable.sortCase) {
    case 'ID':
      if (sortTable.order === 'asc') {
        return state.sort((a, b) => a.id - b.id);
      }
      return state.sort((a, b) => b.id - a.id);
    case 'Name':
      return state.sort((a, b) => {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();
        if (sortTable.order === 'asc') {
          return nameA < nameB ? -1 : 1;
        }
        return nameA > nameB ? -1 : 1;
      });
    case 'Age':
      if (sortTable.order === 'asc') {
        return state.sort((a, b) => a.age - b.age);
      }
      return state.sort((a, b) => b.age - a.age);
    case 'Gender':
      return state.sort((a, b) => {
        const nameA = a.gender.toUpperCase();
        const nameB = b.gender.toUpperCase();
        if (sortTable.order === 'asc') {
          return nameA < nameB ? -1 : 1;
        }
        return nameA > nameB ? -1 : 1;
      });
    case 'Department':
      return state.sort((a, b) => {
        const nameA = a.department.toUpperCase();
        const nameB = b.department.toUpperCase();
        if (sortTable.order === 'asc') {
          return nameA < nameB ? -1 : 1;
        }
        return nameA > nameB ? -1 : 1;
      });
    case 'Position':
      return state.sort((a, b) => {
        const nameA = a.position.toUpperCase();
        const nameB = b.position.toUpperCase();
        if (sortTable.order === 'asc') {
          return nameA < nameB ? -1 : 1;
        }
        return nameA > nameB ? -1 : 1;
      });
    case 'Arrival':
      if (sortTable.order === 'asc') {
        return state.sort((a, b) => a.arrival - b.arrival);
      }
      return state.sort((a, b) => b.arrival - a.arrival);
    case 'Leave':
      if (sortTable.order === 'asc') {
        return state.sort((a, b) => a.leave - b.leave);
      }
      return state.sort((a, b) => b.leave - a.leave);
    case 'Location':
      return state.sort((a, b) => {
        const nameA = a.location.toUpperCase();
        const nameB = b.location.toUpperCase();
        if (sortTable.order === 'asc') {
          return nameA < nameB ? -1 : 1;
        }
        return nameA > nameB ? -1 : 1;
      });
    default:
      return state;
  }
};

const mapStateToProps = state => ({
  columns: state.addInfo.columns,
  info: sortTableState(state.addInfo.info, state.sortTable),
  state,
});

const mapDispatchToProps = dispatch => ({
  sortTable: (sortCase, order) => dispatch(sortTable(sortCase, order)),
});

const ConnectedDataBase = ({
  columns,
  info,
  sortTable,
}) => (
  <table className="database">
    <tbody>
      <tr key="ascStr">
        {columns.map(state => (
          <td onClick={() => sortTable(state, 'asc')} key={`asc${state}`}>↑</td>
        ))}
      </tr>
      <tr key="descStr">
        {columns.map(state => (
          <td onClick={() => sortTable(state, 'desc')} key={`desc${state}`}>↓</td>
        ))}
      </tr>
      <tr key="columnStr">
        {columns.map(state => (
          <th key={`columnsth${state}`}>{state}</th>
        ))}
      </tr>
      {info.map(state => (
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
  info: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const DataBase = connect(mapStateToProps, mapDispatchToProps)(ConnectedDataBase);

export default DataBase;
