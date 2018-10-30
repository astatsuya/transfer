import React from 'react';
import { connect } from 'react-redux';


const mapStateToProps = (state, ownProps) => {
  return {
    columns: state.columns,
    info: state.info,
    ownProps: ownProps
  };
};

const sum = a => {
  return a.reduce((x, y) => {
    return x + y;
  }, 0)
}

const length = a => {
  return a.reduce((x, y) => {
    return a.length;
  }, 0)
}

const ConnectedSearch = ({ info, ownProps } ) => {

  const age = info.map(a => {
    return a.age
  })

  //配列全てのLeave - arrival

  const term_stay_each = info.map(a => {
    return  a.leave - a.arrival;
  })

// ownProps.filterがallの場合は全て、それ以外は該当部署のみをredux.state.info.departmentの取り出す。

  // const filterDepartment = info.filter(value => {
  //   if(selectedPosition !== 'all'){
  //     return value.department === selectedPosition;
  //   } else {
  //     return value.department
  //   }
  // })

  //男性か女性か

  let selectedGender = ownProps.gender;

  const filterGender = info.filter(value => {
    if(selectedGender !== 'all'){
      return value.gender === selectedGender;
    } else {
      return value.gender
    }
  })

  //その中で部署はどこか
  let selectedDepartment = ownProps.department

  const filterDepartment = filterGender.filter(value => {
    if(selectedDepartment !== 'all'){
      return value.department === selectedDepartment;
    } else {
      return value.department
    }
  })

  //その中でポジションは何か
  let selectedPosition = ownProps.position;

  const filterPosition = filterDepartment.filter(value => {
    if(selectedPosition !== 'all'){
      return value.position === selectedPosition;
    } else {
      return value.position
    }
  })

  //その中でロケーションはどこか
  let selectedLocation = ownProps.location;

  const filterLocation = filterPosition.filter(value => {
    if(selectedLocation !== 'all'){
      return value.location === selectedLocation;
    } else {
      return value.location
    }
  })

  //選択した部署のLeave - Arrival
  const term_filter_array = filterPosition.map(a => {
    return a.leave - a.arrival;
  })

  //選択した部署の配列のposition要素の羅列
  const length_filter_array = filterPosition.map(a => {
    return a.position
  })

  const lengthArrayAll = length(age)
  const lengthArrayFiltered = length(length_filter_array)
  //平均勤続年数
  const term_stay_filtered = (sum(term_filter_array) / lengthArrayFiltered).toFixed(1);

  const term_stay_average = (sum(term_stay_each) /lengthArrayAll).toFixed(1);

  return (
    <div>
      <br />
      <br />
      term_stay_filtered:{term_stay_filtered}<br />
      TermaverageAll: {term_stay_average}<br />
      termeach: {term_stay_each}<br /><br />
      gender in Seach : {ownProps.gender}<br />
      department in Seach : {ownProps.department}<br />
      position in Seach : {ownProps.position}<br />
      location in Seach : {ownProps.location}<br />
    </div>

  )

};
/*
export const Test = (props, { info }) => {
  let filter = props.filter;

    return(
      <div>
        <p>ここからTest</p>
        <br />
        filter: {props.filter}
        <Search filter={props.filter} />
      </div>
    )
  }
*/
const Search = connect(mapStateToProps)(ConnectedSearch);

export default Search;
