import React from 'react';

class Form extends React.component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Tom',
      age: 42,
      department: 'Marketing',
      position: 'Manager',
      join: 2015,
      leave: 2017,
      location: 'Tokyo',
    };
  }

  render() {
    return (
      <div>
        <p>aaa</p>
      </div>
    );
  }
}

export default Form;
