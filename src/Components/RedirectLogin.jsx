import { redirectLogin } from "../Utils/Utils";
const { REACT_APP_REGISTRATION_SERVICE } = process.env;

const RedirectLogin = () => {
  localStorage.setItem("next", window.location.pathname);
  redirectLogin(
    `${REACT_APP_REGISTRATION_SERVICE}/login/?next=${window.location.pathname}`
  );
};

export default RedirectLogin;
