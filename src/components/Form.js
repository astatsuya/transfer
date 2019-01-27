import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  addInfo,
  updateForm,
  clearForm,
  alertForm,
} from '../redux/actions/action';

const mapDispatchToProps = dispatch => ({
  addInfo: info => dispatch(addInfo(info)),
  updateForm: form => dispatch(updateForm(form)),
  alertForm: form => dispatch(alertForm(form)),
  clearForm: () => dispatch(clearForm()),
});

const mapStateToProps = state => ({
  formContents: state.updateForm.formContents,
});

const ConnectedForm = (props) => {
  const {
    id,
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
  } = props.formContents;

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name === '') {
      props.alertForm({
        nameEmpty: 'Put in your Name',
        nameAlertColor: 'red',
        wrongArrival: '',
        arrivalAlertColor: '',
      });
    } else if (arrival > leave) {
      props.alertForm({
        wrongArrival: 'Should be earlier than Leaving',
        arrivalAlertColor: 'red',
        nameEmpty: '',
        nameAlertColor: '',
      });
    } else {
      props.addInfo({  // eslint-disable-line
        id, name, age, gender, department, position, arrival, leave, location,
      });
      props.clearForm();
    }
  };

  const handleChange = (event) => {
    const { name, type } = event.target;
    let value;
    type === "number" ? value = parseInt(event.target.value) : value = event.target.value;
    props.updateForm({
      name,
      value,
    });
  };

  const handleClear = (event) => {
    event.preventDefault();
    props.clearForm();
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
  formContents: PropTypes.object.isRequired,

  // columns: PropTypes.arrayOf(PropTypes.string).isRequired,
  // info: PropTypes.arrayOf(PropTypes.object).isRequired,
  // sortTable: PropTypes.func.isRequired,
};

// addInfo: info => dispatch(addInfo(info)),
// updateForm: form => dispatch(updateForm(form)),
// alertForm: form => dispatch(alertForm(form)),
// clearForm: () => dispatch(clearForm()),

const Form = connect(mapStateToProps, mapDispatchToProps)(ConnectedForm);

export default Form;
