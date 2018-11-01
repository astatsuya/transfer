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
  //全員の部署の列挙
  const locationAll = info.map(a => {
    return a.location
  })
 //全員の配列の要素数
  const lengthArrayAll = length(nameAll)
  //全員の平均勤続年数 = (全員のleave-arrivalの合計) / 該全員の配列の要素数
  const term_stay_average = (sum(term_stay_each) /lengthArrayAll).toFixed(1) | 0;
  //全員の異動先
  const new_location_all = () => {
    const lengthOfTokyo = locationAll.filter((array) => {
      return array === 'Tokyo'
    }).length

    const lengthOfOsaka = locationAll.filter((array) => {
      return array === 'Osaka'
    }).length

    const lengthOfOverSeas = locationAll.filter((array) => {
      return array === 'OverSeas'
    }).length

    const lengthOfOthers = locationAll.filter((array) => {
      return array === 'Others'
    }).length
    return `東京: ${lengthOfTokyo}人
            大阪: ${lengthOfOsaka}人
            海外: ${lengthOfOverSeas}人
            その他: ${lengthOfOthers}人`
  }
  //該当者の配列の要素数
  const lengthArrayFiltered = length(length_filter_array)
  //該当者の平均勤続年数 = (該当者のleave-arrivalの合計) / 該当者の配列の要素数
  const term_stay_filtered = (sum(term_filter_array) / lengthArrayFiltered).toFixed(1) | 0;

  //該当者の異動先の要素数
  const new_location = filterLocation.map(a => {
    return a.location;
  })
  //該当者の異動先の列挙
  const new_location_filtered = () => {
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
    return `東京: ${lengthOfTokyo}人
            大阪: ${lengthOfOsaka}人
            海外: ${lengthOfOverSeas}人
            その他: ${lengthOfOthers}人`
  }

  return (
    <div>
      全人数 : {lengthArrayAll}人
      <br />
      異動までの平均年数(全体) : {term_stay_average}年
      <br />
      異動先(全体){new_location_all()}
      <br />
      <br />
      該当者数 : {lengthArrayFiltered}人
      <br />
      異動までの平均年数(該当者) : {term_stay_filtered}年
      <br />
      異動先(該当者){new_location_filtered()}
      <br />
    </div>
  );
};

const Search = connect(mapStateToProps)(ConnectedSearch);

export default Search;
