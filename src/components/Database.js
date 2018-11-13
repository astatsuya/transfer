import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// import { addInfo } from '../redux/actions/action';

const mapStateToProps = state => ({
  columns: state.columns,
  info: state.info,
});

// const mapDispatchToProps = dispatch => ({
//   addInfo: info => dispatch(addInfo(info)),
// });

const ConnectedDataBase = ({
  columns,
  info,
}) => (
  <table className="database">
    <tbody>
      <tr key="columnstr">
        {columns.map(state => (
          <th key={`columnsth${state}`}>{state}</th>
        ))}
      </tr>
      {info.map(state => (
        <tr key={`tr${state.id}`}>
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

const DataBase = connect(mapStateToProps)(ConnectedDataBase);

export default DataBase;
