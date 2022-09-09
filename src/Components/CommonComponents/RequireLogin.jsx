import { React, useEffect, useState } from "react";

import PropTypes from "prop-types";

import { coreService } from "../../axiosInstance";
import coreConstant from "../../coreConstant";

const RequireLogin = ({ children }) => {
  const [isAuthenticated, setisAuthenticated] = useState(false);

  const validateUser = async () => {
    try {
      coreService
        .get(coreConstant.validateUserEndPoint)
        .then(function () {
          setisAuthenticated(true);
        })
        .catch(function () {
          window.location.href = `${process.env.REACT_APP_REGISTRATION_SERVICE}/login/?next=${window.location.pathname}`;
        });
    } catch (e) {
      window.location.href = `${process.env.REACT_APP_REGISTRATION_SERVICE}/login/?next=${window.location.pathname}`;
    }
  };

  useEffect(async () => {
    if (process.env.REACT_APP_ENV !== "local") {
      await validateUser();
    } else {
      setisAuthenticated(true);
    }
  }, []);

  return <>{isAuthenticated && children}</>;
};

RequireLogin.propTypes = {
  children: PropTypes.any,
};

export default RequireLogin;
