import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const mapStateToProps = ({ addInfo }, ownProps) => ({
  info: addInfo.info,
  ownProps,
});

const sum = a => a.reduce((x, y) => x + y, 0);

const length = a => a.reduce(() => a.length, 0);

const ConnectedSearch = ({ info, ownProps }) => {
  // 男性か女性か
  const selectedGender = ownProps.gender;

  const filterGender = info.filter((value) => {
    if (selectedGender !== 'all') {
      return value.gender === selectedGender;
    }
    return value.gender;
  });
  // その中で部署はどこか
  const selectedDepartment = ownProps.department;

  const filterDepartment = filterGender.filter((value) => {
    if (selectedDepartment !== 'all') {
      return value.department === selectedDepartment;
    }
    return value.department;
  });
  // その中でポジションは何か
  const selectedPosition = ownProps.position;

  const filterPosition = filterDepartment.filter((value) => {
    if (selectedPosition !== 'all') {
      return value.position === selectedPosition;
    }
    return value.position;
  });
  // その中でロケーションはどこか
  const selectedLocation = ownProps.location;

  const filterLocation = filterPosition.filter((value) => {
    if (selectedLocation !== 'all') {
      return value.location === selectedLocation;
    }
    return value.location;
  });

  // 選択した部署のLeave - Arrival
  const termFilterArray = filterPosition.map(a => a.leave - a.arrival);

  // 選択した部署の配列のposition要素の羅列
  const lengthFilterArrayy = filterPosition.map(a => a.position);

  // 全員のLeave - arrivalの列挙
  const termStayEach = info.map(a => a.leave - a.arrival);
  // 全員の名前の列挙
  const nameAll = info.map(a => a.name);
  // 全員のLocationの列挙
  const locationAll = info.map(a => a.location);
  // 全員の配列の要素数
  const lengthArrayAll = length(nameAll);
  // 全員の平均勤続年数 = (全員のleave-arrivalの合計) / 該全員の配列の要素数
  const termStayAverage = (sum(termStayEach) / lengthArrayAll)
  === true ? (sum(termStayEach) / lengthArrayAll).toFixed(1) : 0;
  // 全員の異動先毎の人数
  const newLocationAll = () => {
    const lengthOfTokyo = locationAll.filter(array => array === 'Tokyo').length;

    const lengthOfOsaka = locationAll.filter(array => array === 'Osaka').length;

    const lengthOfOverSeas = locationAll.filter(array => array === 'OverSeas').length;

    const lengthOfOthers = locationAll.filter(array => array === 'Others').length;
    return `東京: ${lengthOfTokyo}人
            大阪: ${lengthOfOsaka}人
            海外: ${lengthOfOverSeas}人
            その他: ${lengthOfOthers}人`;
  };
  // 該当者の配列の要素数
  const lengthArrayFiltered = length(lengthFilterArrayy);
  // 該当者の平均勤続年数 = (該当者のleave-arrivalの合計) / 該当者の配列の要素数
  const termStayFiltered = (sum(termFilterArray) / lengthArrayFiltered)
  === true ? (sum(termFilterArray) / lengthArrayFiltered).toFixed(1) : 0;

  // 該当者の異動先の列挙
  const newLocation = filterLocation.map(a => a.location);
  // 該当者の異動先毎の人数
  const newLocationFiltered = () => {
    const lengthOfTokyo = newLocation.filter(array => array === 'Tokyo').length;

    const lengthOfOsaka = newLocation.filter(array => array === 'Osaka').length;

    const lengthOfOverSeas = newLocation.filter(array => array === 'OverSeas').length;

    const lengthOfOthers = newLocation.filter(array => array === 'Others').length;
    return `東京: ${lengthOfTokyo}人
            大阪: ${lengthOfOsaka}人
            海外: ${lengthOfOverSeas}人
            その他: ${lengthOfOthers}人`;
  };

  return (
    <div className="searchresult">
      全人数 :
      {' '}
      {lengthArrayAll}
      人
      <br />
      異動までの平均年数(全体) :
      {' '}
      {termStayAverage}
      年
      <br />
      異動先(全体)
      {' '}
      {newLocationAll()}
      <br />
      <br />
      該当者数 :
      {' '}
      {lengthArrayFiltered}
      人
      <br />
      異動までの平均年数(該当者) :
      {' '}
      {termStayFiltered}
      年
      <br />
      異動先(該当者)
      {' '}
      {newLocationFiltered()}
      <br />
    </div>
  );
};

ConnectedSearch.propTypes = {
  info: PropTypes.arrayOf(PropTypes.object).isRequired,
  ownProps: PropTypes.objectOf(PropTypes.string).isRequired,
};

const Search = connect(mapStateToProps)(ConnectedSearch);

export default Search;
