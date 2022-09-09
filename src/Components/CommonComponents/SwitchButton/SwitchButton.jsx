import React from 'react';
import PropTypes from 'prop-types';

import './SwitchButton.scss';

const SwitchButton = (props) => {
  return (
    <>
      <div className="switch">
        <label>
          <span className="off">{props.firstlabel}</span>
          <input type="checkbox" />
          <span className="lever"></span>
          <span className="on">{props.secondlabel}</span>
        </label>
      </div>
    </>
  );
};

SwitchButton.propTypes = {
  firstlabel: PropTypes.string,
  secondlabel: PropTypes.string,
};

export default SwitchButton;
