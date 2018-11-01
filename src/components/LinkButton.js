import React from 'react';

// class LinkButton extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//
//     }
//   }
// }



const LinkButton = (props) => (
    <button
      className='link-button'
    >{props.buttonName}
    </button>
);

export default LinkButton;
