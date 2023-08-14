const loginRouter = require("express").Router();
const { loginService } = require("./login.service");

loginRouter.get("", (req, res) => {
  console.log("log in");
});

loginRouter.post("", (req, res) => {
  res.status(200).json({});
});

module.exports = {
  loginRouter,
};
