import React from 'react';
import PropTypes from 'prop-types';

import './RadioButton.scss';

const RadioButton = (props) => {
  return (
    <>
      <div className="motor-radio">
        <p>
          <label>
            <input name="group1" type="radio" />
            <span>{props.firstlabel}</span>
          </label>
        </p>
        <p>
          <label>
            <input name="group1" type="radio" />
            <span>{props.secondlabel}</span>
          </label>
        </p>
      </div>
    </>
  );
};

RadioButton.propTypes = {
  firstlabel: PropTypes.string,
  secondlabel: PropTypes.string,
};

export default RadioButton;
