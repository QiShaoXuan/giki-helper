const axios = require("axios");
const { token, userName } = require("./private-config");

const getUserInfo = () => {
  axios
    .get("https://giki.app/api/users/query?name=qi", {
      name: userName,
      headers: { authorization: token }
    })
    .then(res => {
      console.log("res", res.data);
    })
    .catch(error => {
      console.log(error);
    });
};

module.exports = getUserInfo;
