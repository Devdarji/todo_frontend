import React, { useContext } from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

import appRoutes from "../../appRoutes";
import { userContext } from "../../Context/userContext.jsx";

const BpManagementNavbar = (props) => {
  const [userInfo] = useContext(userContext);

  return (
    <>
      {userInfo.isAuthenticated && (
        <div className="container mt-1">
          <div className="navbar-box">
            {(userInfo.userPermission.isBpCreator ||
              userInfo.userPermission.is_bp_approver) && (
              <div
                className={`navbar-item ${props.worklistPage ? "active" : ""}`}
              >
                <Link to={appRoutes.bpManagementRoutes.approvePageRoutes}>
                  Worklist
                </Link>
              </div>
            )}
            {(userInfo.userPermission.isBpCreator ||
              userInfo.userPermission.is_bp_approver ||
              userInfo.userPermission.is_viewer) && (
              <div
                className={`navbar-item ${props.bpSearchPage ? "active" : ""}`}
              >
                <Link to={appRoutes.bpManagementRoutes.searchPageRoutes}>
                  Search
                </Link>
              </div>
            )}
            {userInfo.userPermission.isBpCreator && (
              <div
                className={`navbar-item ${props.bpCreatePage ? "active" : ""}`}
              >
                <Link to={appRoutes.bpManagementRoutes.createPageRoutes}>
                  Create
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

BpManagementNavbar.propTypes = {
  bpSearchPage: PropTypes.bool,
  worklistPage: PropTypes.bool,
  bpCreatePage: PropTypes.bool,
};

export default BpManagementNavbar;
