import React from 'react';

const LinkButton = (props) => (
    <button
      className='link-button'
      onClick={props.changePage}
    >{props.buttonName}
    </button>
);

export default LinkButton;
