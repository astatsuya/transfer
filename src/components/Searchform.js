import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Search from './Search';
import { mapStateToProps, mapDispatchToProps } from './MapToProps';


const ConnectedSearchForm = ({ searchForm, changeForm }) => {
  const {
    gender, department, position, location,
  } = searchForm;

  const handleChange = (event) => {
    const { value, name } = event.target;
    changeForm({
      name,
      value,
    });
  };

  return (
    <form className="searchform">
      <label htmlFor="gender"> {// eslint-disable-line
      }
        Gender:
        <select id="gender" name="gender" onChange={handleChange}  value={ gender }>
          <option value="all">All</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Others">Others</option>
        </select>
      </label>
      <br />

       <label htmlFor="department"> {// eslint-disable-line
      }
         Department:
         <select id="department" name="department" onChange={handleChange} value={department}>
           <option value="all">All</option>
           <option value="Marketing">Marketing</option>
           <option value="Engineering">Engineering</option>
           <option value="Others">Others</option>
         </select>
       </label>
       <br />

         <label htmlFor="position"> {// eslint-disable-line
         }
         Position:
         <select id="position" name="position" onChange={handleChange} value={position}>
           <option value="all">All</option>
           <option value="Director">Director</option>
           <option value="Manager">Manager</option>
           <option value="Chief">Chief</option>
           <option value="Others">Others</option>
         </select>
       </label>
       <br />

       <label htmlFor="location"> {// eslint-disable-line
      }
        Location:
        <select id="location" name="location" onChange={handleChange} value={location}>
          <option value="all">All</option>
          <option value="Tokyo">Tokyo</option>
          <option value="Osaka">Osaka</option>
          <option value="OverSeas">OverSeas</option>
          <option value="Others">Others</option>
        </select>
      </label>
      <br />
      <br />
      <br />
      <Search
        gender={gender}
        department={department}
        position={position}
        location={location}
      />
      <br />
    </form>
  );
};

const SearchForm = connect(mapStateToProps, mapDispatchToProps)(ConnectedSearchForm);

export default SearchForm;
