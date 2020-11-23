const api = require('../api')

const getUserInfo = () => {
  api
    .login()
    .then((res) => {
      if (!res.ok) {
        throw new Error(`login failed: ${res.status}`)
      }
      return res.json()
    })
    .then((data) => {
      console.log(`login ok: ${data}`)
    })
    .catch((e) => {
      console.warn(`error when login: ${e}`)
    })
}

module.exports = getUserInfo
