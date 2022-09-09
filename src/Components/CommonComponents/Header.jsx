import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link, useHistory } from "react-router-dom";

import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import Logout from "@mui/icons-material/Logout";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";

import { userContext } from "../../Context/userContext.jsx";

import "../Scss/Header.scss";

import appRoutes from "../../appRoutes";
import edlLogo from "../../Assets/images/edlLogo.svg";

import claimsVillLogo from "../../Assets/images/Claims_Ville_logo_final.svg";

const { REACT_APP_ENV } = process.env;

const Header = (props) => {
  const [userInfo] = useContext(userContext);
  const history = useHistory();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    history.push(appRoutes.logoutRoute.logoutRoute);
  };

  return (
    <header className="bg-white">
      <div className="container">
        <div className="header">
          <div className="edl-logo">
            <Link to={appRoutes.dashBoardRoutes.claimSearchRoutes}>
              <img src={edlLogo} alt="EdelWeiss Logo" />
              {/* <div className="motor-logo">
                MOTOR <span className="cms-logo">CMS</span>
              </div> */}
              <Box
                component="img"
                sx={{
                  height: "4rem",
                  mr: "0",
                }}
                alt="ClaimsVill Logo"
                src={claimsVillLogo}
              />
            </Link>
          </div>

          {userInfo.isAuthenticated && (
            <>
              <div className="navbar-div">
                <div className="navbar">
                  <ul>
                    {/* {process.env.REACT_APP_ENV === "local" && (
                    <li>
                      <Link
                        to={appRoutes.dashBoardRoutes.dashBoardRoutes}
                        className={props.dashboardPage ? "active" : ""}
                      >
                        Dashboard
                      </Link>
                    </li>
                  )} */}

                    <li>
                      <Link
                        to={appRoutes.dashBoardRoutes.claimSearchRoutes}
                        className={props.searchPage ? "active" : ""}
                      >
                        Search
                      </Link>
                    </li>
                    {REACT_APP_ENV === "development" &&
                      userInfo.userPermission.isRegistration && (
                        <li>
                          <Link
                            to={appRoutes.registrationRoutes.policySearchRoute}
                            className={props.registrationPage ? "active" : ""}
                          >
                            Register Claim
                          </Link>
                        </li>
                      )}
                    {(userInfo.userPermission.isBpCreator ||
                      userInfo.userPermission.is_bp_approver ||
                      userInfo.userPermission.is_viewer) && (
                      <li>
                        <Link
                          to={
                            userInfo.userPermission.isBpCreator ||
                            userInfo.userPermission.is_bp_approver
                              ? appRoutes.bpManagementRoutes.approvePageRoutes
                              : appRoutes.bpManagementRoutes.searchPageRoutes
                          }
                          className={props.bpManagement ? "active" : ""}
                        >
                          BP Management
                        </Link>
                      </li>
                    )}
                  </ul>
                </div>
                <div className="profile-base" onClick={handleClick}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      textAlign: "center",
                    }}
                  >
                    <p>Hi, {`${userInfo.firstName} ${userInfo.lastName}`}</p>
                    <ArrowDropDownRoundedIcon fontSize="large" />
                  </Box>
                </div>

                <Menu
                  anchorEl={anchorEl}
                  id="account-menu"
                  open={open}
                  onClose={handleClose}
                  onClick={handleClose}
                  PaperProps={{
                    elevation: 0,
                    sx: {
                      overflow: "visible",
                      filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                      mt: 1.5,
                      "& .MuiAvatar-root": {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                      },
                      "&:before": {
                        content: '""',
                        display: "block",
                        position: "absolute",
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: "background.paper",
                        transform: "translateY(-50%) rotate(45deg)",
                        zIndex: 0,
                      },
                    },
                  }}
                  transformOrigin={{ horizontal: "right", vertical: "top" }}
                  anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                >
                  <MenuItem className="menu-dropdown">
                    <Avatar /> {`${userInfo.firstName} ${userInfo.lastName}`}
                  </MenuItem>
                  <Divider />

                  <MenuItem className="menu-dropdown" onClick={handleLogout}>
                    {/* <a
                      className="d-flex align-items-center"
                      href={`${process.env.REACT_APP_REGISTRATION_SERVICE}/logout`}
                    > */}
                    <ListItemIcon>
                      <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                    {/* </a> */}
                  </MenuItem>
                </Menu>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  dashboardPage: PropTypes.bool,
  intermediaryPage: PropTypes.bool,
  searchPage: PropTypes.bool,
  registrationPage: PropTypes.bool,
  bpManagement: PropTypes.bool,
};

export default Header;
