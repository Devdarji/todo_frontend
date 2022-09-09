import React from "react";
import PropTypes from "prop-types";

import "./TitleValue.scss";

const TitleValue = (props) => {
  return (
    <>
      <div className={`value-div ${props.className}`}>
        <h2 className="mb-0 mb-1">{props.value}</h2>
        <p className="mb-0 mt-0">{props.title}</p>
      </div>
    </>
  );
};

TitleValue.propTypes = {
  value: PropTypes.string,
  title: PropTypes.string,
  className: PropTypes.string,
};

export default TitleValue;
