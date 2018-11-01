import React from 'react';
import { connect } from 'react-redux';
import { addInfo } from '../redux/actions/action';

const mapStateToProps = state => {
  return {
    columns: state.columns,
    info: state.info,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addInfo: info => dispatch(addInfo(info)),
  };
};

const ConnectedDataBase = ({ dispatch, columns, id, info }) => {
  return (
  <table className='database'>
    <tbody>
      <tr key='columnstr'>
        {columns.map((state, index) => (
          <th key={`columnsth${index}`}>{state}</th>
        ))}
      </tr>
      {info.map((state, index) => {
        return (
          <tr key={`tr${index}`}>
            <td key={`name${index}`}>{state.name}</td>
            <td key={`age${index}`}>{state.age}</td>
            <td key={`gender${index}`}>{state.gender}</td>
            <td key={`department${index}`}>{state.department}</td>
            <td key={`position${index}`}>{state.position}</td>
            <td key={`arrival${index}`}>{state.arrival}</td>
            <td key={`leave${index}`}>{state.leave}</td>
            <td key={`location${index}`}>{state.location}</td>
          </tr>
        );
      })}
    </tbody>
  </table>
  );
};

const DataBase = connect(mapStateToProps, mapDispatchToProps)(ConnectedDataBase);

export default DataBase;
