const API = require('@gikiapp/sdk')
const { token } = require('../private-config.json')

module.exports = new API({ env: 'production', token })
