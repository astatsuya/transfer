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

  //全員のLeave - arrivalの列挙
  const term_stay_each = info.map(a => {
    return  a.leave - a.arrival;
  })
  //全員の名前の列挙
  const nameAll = info.map(a => {
    return a.name
  })
 //全員の配列の要素数
  const lengthArrayAll = length(nameAll)
  //全員の平均勤続年数 = (全員のleave-arrivalの合計) / 該全員の配列の要素数
  const term_stay_average = (sum(term_stay_each) /lengthArrayAll).toFixed(1);
  //該当者の配列の要素数
  const lengthArrayFiltered = length(length_filter_array)
  //該当者の平均勤続年数 = (該当者のleave-arrivalの合計) / 該当者の配列の要素数
  const term_stay_filtered = (sum(term_filter_array) / lengthArrayFiltered).toFixed(1);

  //該当年数以降の異動先の列挙
  const new_location = filterPosition.map(a => {
    return a.location;
  })

  const hipertest = () => {
    const lengthOfTokyo = new_location.filter((array) => {
      return array === 'Tokyo'
    }).length

    const lengthOfOsaka = new_location.filter((array) => {
      return array === 'Osaka'
    }).length

    const lengthOfOverSeas = new_location.filter((array) => {
      return array === 'OverSeas'
    }).length

    const lengthOfOthers = new_location.filter((array) => {
      return array === 'Others'
    }).length
    return `東京には${lengthOfTokyo}人異動した。
            大阪には${lengthOfOsaka}人異動した。
            海外には${lengthOfOverSeas}人異動した。
            その他${lengthOfOthers}人異動した。`
  }
  //該当年数以降の異動先の割合
  //
  // const percentage_location = () => {
  //   let num_Tokyo = 0;
  //   let num_Osaka = 0;
  //   let num_OverSeas = 0;
  //   let num_Others = 0;
  //   for(let i = 0; i < new_location.length; i++) {
  //     if(new_location[i] === 'Tokyo') {
  //       num_Tokyo++;
  //       continue;
  //     } else if (new_location[i] === 'Osaka') {
  //       num_Osaka++;
  //       continue;
  //     }  else if (new_location[i] === 'OverSeas') {
  //       num_OverSeas++;
  //       continue;
  //     }  else {
  //       num_Others++;
  //     }
  //     console.log( `東京は${num_Tokyo}人、大阪は${num_Osaka}人、海外は${num_OverSeas}人、その他${num_Others}人
  //     `)
  //   }
  // }

  //該当年数以降の異動先で最も多い場所

  //

  return (
    <div>
      <br />
      test : {new_location}
      <br />
      <button onClick={hipertest}>Check</button>
      <br />
      {hipertest()}
      <br />
      異動までの平均年数(該当者) : {term_stay_filtered}年
      <br />
      該当者数 : {lengthArrayFiltered}人
      <br />
      異動までの平均年数(全体) : {term_stay_average}年
      <br />
      全人数 : {lengthArrayAll}人
      <br />
      <br />
    </div>
  );
};

const Search = connect(mapStateToProps)(ConnectedSearch);

export default Search;
