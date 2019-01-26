import React from 'react';
import { connect } from 'react-redux';
import { addInfo, updateForm, clearForm } from '../redux/actions/action';

const mapDispatchToProps = dispatch => ({
  addInfo: info => dispatch(addInfo(info)),
  updateForm: form => dispatch(updateForm(form)),
  clearForm: () => dispatch(clearForm()),
});

const mapStateToProps = state => ({
  formContents: state.updateForm.formContents,
});

const ConnectedForm = (props) => {
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
  } = props.formContents;

const handleSubmit = (event) => {
    event.preventDefault();
    let {
       id, name, age, gender, department, position, arrival, leave, location, nameEmpty, nameAlertColor, wrongArrival, arrivalAlertColor // eslint-disable-line
    } = this.state;

    age = parseInt(age, 10);
    arrival = parseInt(arrival, 10);
    leave = parseInt(leave, 10);
    id += 1;
    if (name === '') {
      this.setState({
        nameEmpty: 'Put in your Name',
        nameAlertColor: 'red',
        wrongArrival: '',
        arrivalAlertColor: '',
      });
    } else if (arrival > leave) {
      this.setState({
        wrongArrival: 'Should be earlier than Leaving',
        arrivalAlertColor: 'red',
        nameEmpty: '',
        nameAlertColor: '',
      });
    } else {
      this.props.addInfo({  // eslint-disable-line
        id, name, age, gender, department, position, arrival, leave, location,
      });
      this.setState({
        id,
        name: '',
        age: 30,
        arrival: 2010,
        leave: 2010,
        gender: 'Male',
        department: 'Marketing',
        position: 'Director',
        location: 'Tokyo',
        nameAlertColor: '',
        nameEmpty: '',
        wrongArrival: '',
        arrivalAlertColor: '',
      });
    }
  }

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
      <form className="form" 
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

         <label htmlFor="arrival" style={{ backgroundColor: arrivalAlertColor }}>
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

const Form = connect(mapStateToProps, mapDispatchToProps)(ConnectedForm);

export default Form;
