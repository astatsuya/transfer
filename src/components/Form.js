import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps, formTypes } from './MapToProps';

const ConnectedForm = ({
  formContents, addInfo, updateForm, alertForm, clearForm,
}) => {
  const {
    name,
    age,
    gender,
    department,
    position,
    arrival,
    leave,
    location,
    nameEmpty,
    wrongArrival,
    nameAlertColor,
    arrivalAlertColor,
  } = formContents;

  let { id } = formContents;

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name === '') {
      alertForm({
        nameEmpty: 'Put in your Name',
        nameAlertColor: 'red',
        wrongArrival: '',
        arrivalAlertColor: '',
      });
    } else if (arrival > leave) {
      alertForm({
        wrongArrival: 'Should be earlier than Leaving',
        arrivalAlertColor: 'red',
        nameEmpty: '',
        nameAlertColor: '',
      });
    } else {
      id += 1;
      updateForm({ name: 'id', value: id });
      addInfo({
        id, name, age, gender, department, position, arrival, leave, location,
      });
      clearForm();
    }
  };

  const handleChange = (event) => {
    // eslint-disable-next-line no-shadow
    const { name, type } = event.target;
    let value;
    // eslint-disable-next-line no-unused-expressions
    type === 'number' ? value = parseInt(event.target.value, 10) : { value } = event.target;
    updateForm({
      name,
      value,
    });
  };

  const handleClear = (event) => {
    event.preventDefault();
    clearForm();
  };

  return (
    <form
      className="form"
      onSubmit={handleSubmit}
    >
      <label htmlFor="name" style={{ backgroundColor: nameAlertColor }}>
        Name
        <br />
        {nameEmpty}
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={handleChange}
          style={{ backgroundColor: nameAlertColor }}
        />
      </label>
      <br />
      <label htmlFor="age">
        Age
        <br />
        <input
          type="number"
          name="age"
          id="age"
          value={age}
          onChange={handleChange}
        />
      </label>
      <br />
      <label htmlFor="gender"> {// eslint-disable-line
        }
        <br />
        <select
          id="gender"
          name="gender"
          onChange={handleChange}
          value={gender}
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Others">Others</option>
        </select>
      </label>
      <br />
      <label htmlFor="department"> {// eslint-disable-line
        }
        Department
        <br />
        <select id="department" name="department" onChange={handleChange} value={department}>
          <option value="Marketing">Marketing</option>
          <option value="Engineering">Engineering</option>
          <option value="Others">Others</option>
        </select>
      </label>
      <br />
      <label htmlFor="position"> {// eslint-disable-line
      }
        Position
        <br />
        <select id="position" name="position" onChange={handleChange} value={position}>
          <option value="Director">Director</option>
          <option value="Manager">Manager</option>
          <option value="Chief">Chief</option>
          <option value="Others">Others</option>
        </select>
      </label>
      <br />
      <label
        htmlFor="arrival"
        style={{ backgroundColor: arrivalAlertColor }}
      >
        Arrival
        <br />
        {wrongArrival}
        <input
          type="number"
          id="arrival"
          name="arrival"
          value={arrival}
          onChange={handleChange}
          style={{ backgroundColor: arrivalAlertColor }}
        />
      </label>
      <br />
      <label htmlFor="leave">
        Leaving
        <br />
        <input
          type="number"
          id="leave"
          name="leave"
          value={leave}
          onChange={handleChange}
        />
      </label>
      <br />
      <label htmlFor="location"> {// eslint-disable-line
      }
        Location
        <br />
        <select id="location" name="location" onChange={handleChange} value={location}>
          <option value="Tokyo">Tokyo</option>
          <option value="Osaka">Osaka</option>
          <option value="OverSeas">OverSeas</option>
          <option value="Others">Others</option>
        </select>
      </label>
      <br />
      <button type="submit" value="Send">
        Submit
      </button>
      <button type="button" onClick={handleClear}>
        Reset
      </button>
    </form>
  );
};

ConnectedForm.propTypes = {
  addInfo: PropTypes.func.isRequired,
  updateForm: PropTypes.func.isRequired,
  alertForm: PropTypes.func.isRequired,
  clearForm: PropTypes.func.isRequired,
  formContents: PropTypes.shape(formTypes).isRequired,
};

const Form = connect(mapStateToProps, mapDispatchToProps)(ConnectedForm);

export default Form;
