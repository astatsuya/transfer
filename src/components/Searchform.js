

import React from 'react';
import Search from './Search';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gender: 'all',
      department: 'all',
      position: 'all',
      location: 'all',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { target } = event;
    const { value } = target;
    const { name } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const {
      gender, department, position, location,
    } = this.state;

    return (
      <form className="searchform" onSubmit={this.handleSubmit}>
        <label htmlFor="gender"> {// eslint-disable-line
        }
          Gender:
          <select id="gender" name="gender" onChange={this.handleChange} value={gender}>
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
          <select id="department" name="department" onChange={this.handleChange} value={department}>
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
          <select id="position" name="position" onChange={this.handleChange} value={position}>
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
          <select id="location" name="location" onChange={this.handleChange} value={location}>
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
  }
}

export default SearchForm;
