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

// const sort_object = (array, key, order, fn) => {
//   let num_a = -1;
//   let num_b = 1;
//
//   if(order === 'asc') {
//     num_a = 1;
//     num_b = -1;
//   }
//
//   array = array.sort((a,b) => {
//     let x = a[key];
//     let y = b[key];
//     if (x > y) return num_a;
//     if (x < y) return num_b;
//     return 0;
//   })
//
//   fn(array);
// }



const ConnectedDataBase = ({ dispatch, columns, id, info }) => {

  // const sort_info = () => info.sort((a, b) => {
  //   let atoU = a.name.toUpperCase();
  //   let btoU = b.name.toUpperCase();
  //   return (atoU < btoU) ? -1 : 1;
  // });



  return (
  <table>
    <tbody>
      <tr key='button'>
        <th key='sort'>
          <button>Sort</button>
        </th>
      </tr>
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
