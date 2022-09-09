import React, { useContext } from "react";
import PropTypes from "prop-types";

import { useParams, Link } from "react-router-dom";

import appRoutes from "../../appRoutes";

import { userContext } from "../../Context/userContext.jsx";

const Navbar = (props) => {
  const { claimid } = useParams();
  const [userInfo] = useContext(userContext);

  return (
    <>
      <div className="container mt-1">
        <div className="navbar-box">
          {/* <div className={`navbar-item ${props.summaryPage ? "active" : ""}`}>
          <a>Summary</a>
        </div>
        <div className={`navbar-item ${props.policyPage ? "active" : ""}`}>
          <a>Policy</a>
        </div> */}
          {userInfo.userPermission.isIntimation && (
            <div
              className={`navbar-item ${props.incidentPage ? "active" : ""}`}
            >
              <Link
                to={appRoutes.registrationRoutes.intimationRoutes.replace(
                  ":claimid",
                  claimid
                )}
              >
                Intimation Details
              </Link>
            </div>
          )}{" "}
          {userInfo.userPermission.isDocument && (
            <div
              className={`navbar-item ${props.documentPage ? "active" : ""}`}
            >
              <Link
                to={appRoutes.documentRoutes.documentRoutes.replace(
                  ":claimid",
                  claimid
                )}
              >
                Documents
              </Link>
            </div>
          )}
          {userInfo.userPermission.isCorrespondence && (
            <div
              className={`navbar-item ${
                props.correspondencePage ? "active" : ""
              }`}
            >
              <Link
                to={appRoutes.correspondenceRoutes.correspondenceRoutes.replace(
                  ":claimid",
                  claimid
                )}
              >
                Correspondence
              </Link>
            </div>
          )}
          {/* <div className={`navbar-item ${props.surveyorPage ? "active" : ""}`}>
          <a>Survey</a>
        </div>
        <div
          className={`navbar-item ${props.invistigationPage ? "active" : ""}`}
        >
          <a>Investigation</a>
        </div>
        <div className={`navbar-item ${props.workshopPage ? "active" : ""}`}>
          <a>Workshop</a>
        </div>
        <div className={`navbar-item ${props.paymentPage ? "active" : ""}`}>
          <a>Payment</a>
        </div>
        <div className={`navbar-item ${props.clousurePage ? "active" : ""}`}>
          <a>Closure</a>
        </div> */}
          {userInfo.userPermission.isJournal && (
            <div className={`navbar-item ${props.journalPage ? "active" : ""}`}>
              <Link
                to={appRoutes.JournalRoutes.JournalRoutes.replace(
                  ":claimid",
                  claimid
                )}
              >
                Journal
              </Link>
            </div>
          )}
          {/* <div
            className={`navbar-item ${props.assignmentPage2 ? "active" : ""}`}
          >
            <Link
              to={appRoutes.assignmentRoutes2.assignmentRoutes2.replace(
                ":claimid",
                claimid
              )}
            >
              Assignment2
            </Link>
          </div> */}
          {userInfo.userPermission.isAssignment && (
            <div
              className={`navbar-item ${props.assignmentPage ? "active" : ""}`}
            >
              <Link
                to={appRoutes.assignmentRoutes.assignmentRoutes.replace(
                  ":claimid",
                  claimid
                )}
              >
                Assignment
              </Link>
            </div>
          )}
          {userInfo.userPermission.isReserve && (
            <div className={`navbar-item ${props.reservePage ? "active" : ""}`}>
              <Link
                to={appRoutes.reserveRoutes.reserveRoutes.replace(
                  ":claimid",
                  claimid
                )}
              >
                Reserve
              </Link>
            </div>
          )}
          {userInfo.userPermission.isLog && (
            <div className={`navbar-item ${props.logPage ? "active" : ""}`}>
              <Link
                to={appRoutes.logRoutes.logRoutes.replace(":claimid", claimid)}
              >
                Log
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

Navbar.propTypes = {
  summaryPage: PropTypes.bool,
  policyPage: PropTypes.bool,
  correspondencePage: PropTypes.bool,
  documentPage: PropTypes.bool,
  incidentPage: PropTypes.bool,
  surveyorPage: PropTypes.bool,
  invistigationPage: PropTypes.bool,
  workshopPage: PropTypes.bool,
  paymentPage: PropTypes.bool,
  clousurePage: PropTypes.bool,
  journalPage: PropTypes.bool,
  logPage: PropTypes.bool,
  reservePage: PropTypes.bool,
  assignmentPage: PropTypes.bool,
  assignmentPage2: PropTypes.bool,
};

export default Navbar;
