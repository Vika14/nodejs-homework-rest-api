const controllerWraper = require("../../helpers/controllerWraper");
const register = require("./register");
const verifyEmail = require("./verifyEmail");
const resendVerifyEmail = require("./resendVerifyEmail");
const login = require("./login");
const getCurrent = require("./getCurrent");
const logout = require("./logout");
const updateAvatar = require("./updateAvatar");

module.exports = {
  register: controllerWraper(register),
  verifyEmail: controllerWraper(verifyEmail),
  resendVerifyEmail: controllerWraper(resendVerifyEmail),
  login: controllerWraper(login),
  getCurrent: controllerWraper(getCurrent),
  logout: controllerWraper(logout),
  updateAvatar: controllerWraper(updateAvatar),
};
