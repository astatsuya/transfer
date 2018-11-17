import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { sortTable } from '../redux/actions/action';

const sortTableState = (state, sortTable) => {
  switch (sortTable) {
    case 'ID':
      return state.sort((a, b) => a.id - b.id);
    case 'Name':
      return state.sort((a, b) => {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();
        return nameA < nameB ? -1 : 1;
      });
    case 'Age':
      return state.sort((a, b) => a.age - b.age);
    case 'Gender':
      return state.sort((a, b) => {
        const genderA = a.gender.toUpperCase();
        const genderB = b.gender.toUpperCase();
        return genderA < genderB ? -1 : 1;
      });
    case 'Department':
      return state.sort((a, b) => {
        const genderA = a.department.toUpperCase();
        const genderB = b.department.toUpperCase();
        return genderA < genderB ? -1 : 1;
      });
    case 'Position':
      return state.sort((a, b) => {
        const genderA = a.position.toUpperCase();
        const genderB = b.position.toUpperCase();
        return genderA < genderB ? -1 : 1;
      });
    case 'Arrival':
      return state.sort((a, b) => a.arrival - b.arrival);
    case 'Leave':
      return state.sort((a, b) => a.leave - b.leave);
    case 'Location':
      return state.sort((a, b) => {
        const genderA = a.location.toUpperCase();
        const genderB = b.location.toUpperCase();
        return genderA < genderB ? -1 : 1;
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
  sortTable: sortCase => dispatch(sortTable(sortCase)),
});

const ConnectedDataBase = ({
  columns,
  info,
  sortTable,
}) => (
  <table className="database">
    <tbody>
      <tr key="columnstr">
        {columns.map(state => (
          <th onClick={() => sortTable(state)} key={`columnsth${state}`}>{state}</th>
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
