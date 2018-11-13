import React from 'react';
import { connect } from 'react-redux';
import { addInfo } from '../redux/actions/action';

const mapDispatchToProps = dispatch => ({
  addInfo: info => dispatch(addInfo(info)),
});

class ConnectedForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: 30,
      arrival: 2010,
      leave: 2010,
      gender: 'Male',
      department: 'Marketing',
      position: 'Director',
      location: 'Tokyo',
      nameEmpty: '',
      nameAlertColor: '',
      wrongArrival: '',
      arrivalAlertColor: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  handleChange(event) {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    let {
      name, age, gender, department, position, arrival, leave, location, nameEmpty, nameAlertColor, wrongArrival, arrivalAlertColor // eslint-disable-line
    } = this.state;

    age = parseInt(age, 10);
    arrival = parseInt(arrival, 10);
    leave = parseInt(leave, 10);

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
        name, age, gender, department, position, arrival, leave, location,
      });
      this.setState({
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

  handleClear(event) {
    event.preventDefault();
    this.setState({
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

  render() {
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
    } = this.state;

    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <label htmlFor="name" style={{ backgroundColor: nameAlertColor }}>
          Name
          <br />
          {nameEmpty}
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={this.handleChange}
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
            onChange={this.handleChange}
          />
        </label>
        <br />

        <label htmlFor="gender"> {// eslint-disable-line
        }
          <br />
          <select
            id="gender"
            name="gender"
            onChange={this.handleChange}
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
          <select id="department" name="department" onChange={this.handleChange} value={department}>
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
          <select id="position" name="position" onChange={this.handleChange} value={position}>
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
            onChange={this.handleChange}
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
            onChange={this.handleChange}
          />
        </label>
        <br />

        <label htmlFor="location"> {// eslint-disable-line
        }
          Location
          <br />
          <select id="location" name="location" onChange={this.handleChange} value={location}>
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
        <button type="button" onClick={this.handleClear}>
          Reset
        </button>
      </form>
    );
  }
}

const Form = connect(null, mapDispatchToProps)(ConnectedForm);

export default Form;
